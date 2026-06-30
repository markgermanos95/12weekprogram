// Direct port of the public functions in Code.gs. Same logic, same row
// shapes, same Google Sheet — only the underlying read/write calls changed
// (SpreadsheetApp -> Sheets REST API, via sheets.ts).

import { readRows_, writeRows_, appendRows_, uid_, accessToken_ } from "./sheets";
import { buildSeed } from "./seed";

const truthy = (v: any) => v === true || v === "true" || v === "TRUE";
const nowISO = () => new Date().toISOString();
const today = () => new Date().toISOString().slice(0, 10);

/* ---------- clients ---------- */

// Existing clients created before access tokens existed won't have one yet.
// Fill in any missing tokens once, in place, rather than requiring a manual
// migration step.
async function ensureClientTokens_() {
  const rows = await readRows_("clients");
  let changed = false;
  rows.forEach((c) => {
    if (!c.accessToken) { c.accessToken = accessToken_(); changed = true; }
  });
  if (changed) await writeRows_("clients", rows);
  return rows;
}

export async function getClients() {
  await seedIfEmpty_();
  const rows = await ensureClientTokens_();
  return rows.map((c) => ({
    clientId: c.clientId,
    name: c.name,
    goal: c.goal,
    currentPhase: Number(c.currentPhase) || 1,
    accessToken: c.accessToken,
    minimal: truthy(c.minimal),
  }));
}

export async function addClient(name: string, goal: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1,
      createdAt: nowISO(), accessToken: accessToken_(), minimal: "" },
  ]);
  return clientId;
}

export async function setCurrentPhase(clientId: string, phase: number) {
  const all = await readRows_("clients");
  all.forEach((c) => { if (c.clientId === clientId) c.currentPhase = phase; });
  await writeRows_("clients", all);
  return true;
}

// Coach-only: flip a client into minimal mode — their client view strips the
// 12WP framing (blocks, priority, the periodisation explainers), leaving just
// the sessions and the lifting.
export async function setClientMinimal(clientId: string, on: boolean) {
  const all = await readRows_("clients");
  all.forEach((c) => { if (c.clientId === clientId) c.minimal = on ? "true" : ""; });
  await writeRows_("clients", all);
  return true;
}

// Regenerate a client's access token — the old ?client=<token> link stops
// resolving (resolveClientToken can't find it) and a fresh token is returned
// for the coach to re-share. The kill switch for a leaked link.
export async function rotateClientToken(clientId: string) {
  const all = await readRows_("clients");
  let token = "";
  all.forEach((c) => { if (c.clientId === clientId) { token = accessToken_(); c.accessToken = token; } });
  if (token) await writeRows_("clients", all);
  return token;
}

// Coach-only: remove a client and everything tied to them — their template,
// their session logs, and the set logs under those sessions. Irreversible.
export async function deleteClient(clientId: string) {
  await writeRows_("clients", (await readRows_("clients")).filter((c) => c.clientId !== clientId));
  await writeRows_("template", (await readRows_("template")).filter((r) => r.clientId !== clientId));
  const logs = await readRows_("sessionLogs");
  const mine = new Set(logs.filter((r) => r.clientId === clientId).map((r) => r.logId));
  await writeRows_("sessionLogs", logs.filter((r) => r.clientId !== clientId));
  if (mine.size) await writeRows_("setLogs", (await readRows_("setLogs")).filter((r) => !mine.has(r.logId)));
  return true;
}

/* ---------- template flatten / unflatten ---------- */

// The template tab is stored one-row-per-set. A session with no exercises, or
// an exercise with no sets, would otherwise flatten to *zero* rows and vanish
// on the next read — so we emit a structural placeholder for those empty
// parents: a blank `exId` marks "session exists, no exercises", a blank
// `setType` marks "exercise exists, no sets". getTemplate honours both.
// Placeholders are transient — the next save with real content replaces them.
function flattenTemplate_(clientId: string, phase: number, sessions: any[], tplWip = false) {
  // WIP flags (coach-only amber markers): exWip per exercise, sessWip per
  // session, tplWip across the whole template — repeated on the rows at each
  // scope, same pattern as the other repeated session/exercise fields.
  const tw = tplWip ? "true" : "";
  const rows: Record<string, any>[] = [];
  sessions.forEach((s, si) => {
    const sBase = {
      clientId, phase, sessionId: s.sessionId, sessionOrder: si,
      sessionName: s.name, priority: s.priority, cardioPos: s.cardioPos || "none",
      sessWip: s.wip ? "true" : "", tplWip: tw,
    };
    const exercises = s.exercises || [];
    if (!exercises.length) {
      rows.push({
        ...sBase, exOrder: 0, groupId: "", role: "",
        exId: "", exName: "", exYoutube: "", exCues: "", rir: "", coachCue: "",
        setOrder: "", setType: "", target: "", unit: "", exWip: "",
      });
      return;
    }
    exercises.forEach((e: any, eo: number) => {
      const exId = e.exId || uid_();
      const eBase = {
        ...sBase, exOrder: eo, groupId: e.groupId || "", role: e.role || "",
        exId, exName: e.name, exYoutube: e.youtube || "", exCues: e.cues || "", rir: e.rir || "", coachCue: e.coachCue || "",
        exWip: e.wip ? "true" : "",
      };
      const sets = e.sets || [];
      if (!sets.length) {
        rows.push({ ...eBase, setOrder: "", setType: "", target: "", unit: "" });
        return;
      }
      sets.forEach((set: any, ki: number) => {
        rows.push({ ...eBase, setOrder: ki, setType: set.type, target: set.target, unit: set.unit || "reps" });
      });
    });
  });
  return rows;
}

export async function getTemplate(clientId: string, phase: number) {
  const rows = (await readRows_("template")).filter(
    (r) => r.clientId === clientId && Number(r.phase) === Number(phase)
  );
  const sessMap: Record<string, any> = {};
  rows.forEach((r) => {
    const sid = r.sessionId;
    if (!sessMap[sid]) sessMap[sid] = {
      sessionId: sid, order: Number(r.sessionOrder), name: r.sessionName,
      priority: Number(r.priority), cardioPos: r.cardioPos, wip: truthy(r.sessWip), _ex: {},
    };
    if (!r.exId) return; // session placeholder — session exists, no exercises
    const s = sessMap[sid], eo = Number(r.exOrder);
    if (!s._ex[eo]) s._ex[eo] = {
      exId: r.exId, exOrder: eo, name: r.exName,
      youtube: r.exYoutube || "", cues: r.exCues || "", rir: r.rir || "", coachCue: r.coachCue || "",
      groupId: r.groupId || "", role: r.role || "", wip: truthy(r.exWip), _sets: {},
    };
    if (!r.setType) return; // exercise placeholder — exercise exists, no sets
    s._ex[eo]._sets[Number(r.setOrder)] = { setOrder: Number(r.setOrder), type: r.setType, target: r.target, unit: r.unit || "reps" };
  });
  const sessions = Object.values(sessMap)
    .sort((a: any, b: any) => a.order - b.order)
    .map((s: any) => ({
      sessionId: s.sessionId, name: s.name, priority: s.priority, cardioPos: s.cardioPos, wip: !!s.wip,
      exercises: Object.values(s._ex)
        .sort((a: any, b: any) => a.exOrder - b.exOrder)
        .map((e: any) => ({
          exId: e.exId, name: e.name, youtube: e.youtube || "", cues: e.cues || "", rir: e.rir || "", coachCue: e.coachCue || "",
          groupId: e.groupId || "", role: e.role || "", wip: !!e.wip,
          sets: Object.values(e._sets)
            .sort((a: any, b: any) => a.setOrder - b.setOrder)
            .map((st: any) => ({ type: st.type, target: st.target, unit: st.unit || "reps" })),
        })),
    }));
  return { clientId, phase: Number(phase), sessions, tplWip: rows.some((r) => truthy(r.tplWip)) };
}

export async function saveTemplate(clientId: string, phase: number, sessions: any[], tplWip = false) {
  const all = await readRows_("template");
  const keep = all.filter((r) => !(r.clientId === clientId && Number(r.phase) === Number(phase)));
  await writeRows_("template", keep.concat(flattenTemplate_(clientId, phase, sessions, tplWip)));
  return true;
}

// Coach-only: flip the whole-template WIP flag. Spans every phase, so it writes
// the tplWip column across all of this template's rows at once (a per-phase
// saveTemplate would only touch the block being edited).
export async function setTemplateWip(clientId: string, on: boolean) {
  const all = await readRows_("template");
  all.forEach((r) => { if (r.clientId === clientId) r.tplWip = on ? "true" : ""; });
  await writeRows_("template", all);
  return true;
}

/* ---------- in-progress session: start / autosave / resume / finish ---------- */

export async function startSession(clientId: string, phase: number, sessionId: string, sessionName: string) {
  const open = (await readRows_("sessionLogs")).find(
    (r) => r.clientId === clientId && r.sessionId === sessionId && r.status === "open"
  );
  if (open) return getLog(open.logId);
  const logId = uid_();
  await appendRows_("sessionLogs", [{
    logId, clientId, phase, sessionId, sessionName,
    date: today(), cardioStage: "", cardioDone: false, cardioCals: "", cardioWhen: "",
    status: "open", createdAt: nowISO(), updatedAt: nowISO(),
  }]);
  return { logId, clientId, phase: Number(phase), sessionId, sessionName,
            status: "open", cardioStage: "", cardioDone: false, cardioCals: "", cardioWhen: "", sets: [] };
}

export async function saveProgress(logId: string, payload: any) {
  const p = typeof payload === "string" ? JSON.parse(payload) : payload;
  const logs = await readRows_("sessionLogs");
  logs.forEach((l) => {
    if (l.logId === logId) {
      if (p.cardioStage !== undefined) l.cardioStage = p.cardioStage;
      if (p.cardioDone !== undefined) l.cardioDone = !!p.cardioDone;
      if (p.cardioCals !== undefined) l.cardioCals = p.cardioCals;
      if (p.cardioWhen !== undefined) l.cardioWhen = p.cardioWhen;
      l.updatedAt = nowISO();
    }
  });
  await writeRows_("sessionLogs", logs);
  const others = (await readRows_("setLogs")).filter((r) => r.logId !== logId);
  const mine = (p.sets || []).map((s: any) => ({
    logId, exId: s.exId, exName: s.exName, setOrder: s.setOrder,
    setType: s.setType, target: s.target, reps: s.reps, load: s.load, done: !!s.done,
    workingLoad: s.workingLoad || "", maxNote: s.maxNote || "", rpe: s.rpe || "",
  }));
  await writeRows_("setLogs", others.concat(mine));
  return true;
}

export async function getOpenSession(clientId: string) {
  const open = (await readRows_("sessionLogs"))
    .filter((r) => r.clientId === clientId && r.status === "open")
    .sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt))[0];
  return open ? getLog(open.logId) : null;
}

export async function finishSession(logId: string) {
  const logs = await readRows_("sessionLogs");
  logs.forEach((l) => { if (l.logId === logId) { l.status = "done"; l.date = today(); l.updatedAt = nowISO(); } });
  await writeRows_("sessionLogs", logs);
  return true;
}

export async function getLog(logId: string) {
  const l = (await readRows_("sessionLogs")).find((r) => r.logId === logId);
  if (!l) return null;
  const sets = (await readRows_("setLogs")).filter((r) => r.logId === logId).map((s) => ({
    exId: s.exId, exName: s.exName, setOrder: Number(s.setOrder),
    setType: s.setType, target: s.target, reps: s.reps, load: s.load, done: truthy(s.done),
    workingLoad: s.workingLoad || "", maxNote: s.maxNote || "", rpe: s.rpe || "",
  }));
  return {
    logId: l.logId, clientId: l.clientId, phase: Number(l.phase), sessionId: l.sessionId,
    sessionName: l.sessionName, status: l.status,
    cardioStage: l.cardioStage, cardioDone: truthy(l.cardioDone),
    cardioCals: l.cardioCals || "", cardioWhen: l.cardioWhen || "",
    date: String(l.date), sets,
  };
}

export async function getExerciseHistory(clientId: string, exId: string) {
  const logsById: Record<string, { date: string; sessionName: string }> = {};
  (await readRows_("sessionLogs")).forEach((l) => {
    if (l.clientId === clientId && l.status === "done") {
      logsById[l.logId] = { date: String(l.date), sessionName: l.sessionName };
    }
  });
  const byLog: Record<string, any[]> = {};
  (await readRows_("setLogs")).forEach((s) => {
    if (s.exId === exId && logsById[s.logId]) {
      (byLog[s.logId] = byLog[s.logId] || []).push({
        setOrder: Number(s.setOrder), type: s.setType, target: s.target, reps: s.reps, load: s.load,
        workingLoad: s.workingLoad || "", maxNote: s.maxNote || "", rpe: s.rpe || "",
      });
    }
  });
  const out = Object.keys(byLog).map((logId) => ({
    logId, date: logsById[logId].date, sessionName: logsById[logId].sessionName,
    sets: byLog[logId].sort((a, b) => a.setOrder - b.setOrder),
  }));
  out.sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
  return out;
}

// Per-exercise personal bests across all finished sessions, for the PR badge.
// Best = heaviest load ever (W/M sets only — ramp-ups excluded), then most
// reps at that top load. Keyed by exId -> { load, reps } (numbers). A set beats
// it by going heavier, or matching the top load for more reps.
export async function getExerciseBests(clientId: string) {
  const done: Record<string, boolean> = {};
  (await readRows_("sessionLogs")).forEach((l) => {
    if (l.clientId === clientId && l.status === "done") done[l.logId] = true;
  });
  const best: Record<string, { load: number; reps: number }> = {};
  (await readRows_("setLogs")).forEach((s) => {
    if (!done[s.logId] || s.setType === "R") return;
    const load = parseFloat(s.load);
    if (isNaN(load)) return;
    const reps = parseInt(s.reps, 10) || 0;
    const b = best[s.exId];
    if (!b || load > b.load) best[s.exId] = { load, reps };
    else if (load === b.load && reps > b.reps) b.reps = reps;
  });
  return best;
}

export async function getHistory(clientId: string, limit?: number) {
  let logs = (await readRows_("sessionLogs")).filter((r) => r.clientId === clientId && r.status === "done");
  logs.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  if (limit) logs = logs.slice(0, limit);
  return logs.map((l) => ({
    logId: l.logId, sessionName: l.sessionName, phase: Number(l.phase),
    date: String(l.date), cardioStage: l.cardioStage, cardioDone: truthy(l.cardioDone),
  }));
}

// Most recent finished session of the SAME sessionId, as a map keyed by
// exId:setOrder -> { reps, load, type }. Drives the double-progression cue:
// the client sees what they did last time and what to beat.
export async function getLastSession(clientId: string, sessionId: string) {
  const logs = (await readRows_("sessionLogs"))
    .filter((r) => r.clientId === clientId && r.sessionId === sessionId && r.status === "done")
    .sort((a, b) =>
      +new Date(b.date) - +new Date(a.date) ||
      +new Date(b.updatedAt) - +new Date(a.updatedAt)
    );
  const last = logs[0];
  if (!last) return { date: "", sets: {} };
  const sets: Record<string, { reps: string; load: string; type: string; workingLoad: string; maxNote: string }> = {};
  (await readRows_("setLogs"))
    .filter((s) => s.logId === last.logId)
    .forEach((s) => {
      sets[`${s.exId}:${Number(s.setOrder)}`] = {
        reps: s.reps, load: s.load, type: s.setType,
        workingLoad: s.workingLoad || "", maxNote: s.maxNote || "",
      };
    });
  return { date: String(last.date), sets };
}

// Per-slot history for the "last time" reference line. For each exId:setOrder,
// across this client's finished sessions of this sessionId (newest first),
// record the most-recent set of EACH type (R/W/M) and the most-recent of any
// type — enough for the rule (recent same-type within a window, max/working
// fallback, ultimate-any fallback). Carries date + rpe + maxNote.
export async function getSetHistory(clientId: string, sessionId: string) {
  const sess = (await readRows_("sessionLogs"))
    .filter((r) => r.clientId === clientId && r.sessionId === sessionId && r.status === "done")
    .sort((a, b) => (+new Date(b.date) - +new Date(a.date)) || (+new Date(b.updatedAt) - +new Date(a.updatedAt)));
  if (!sess.length) return {};
  const dateOf: Record<string, string> = {};
  sess.forEach((l) => { dateOf[l.logId] = String(l.date); });
  const byLog: Record<string, any[]> = {};
  (await readRows_("setLogs")).forEach((s) => { if (dateOf[s.logId]) (byLog[s.logId] = byLog[s.logId] || []).push(s); });
  const out: Record<string, any> = {};
  sess.forEach((l) => {
    (byLog[l.logId] || []).forEach((s) => {
      const key = s.exId + ":" + Number(s.setOrder);
      const o = out[key] || (out[key] = { R: null, W: null, M: null, recent: null });
      const rec = { date: dateOf[l.logId], type: s.setType, reps: s.reps, load: s.load, rpe: s.rpe || "", maxNote: s.maxNote || "" };
      if (!o.recent) o.recent = rec;
      if (s.setType && !o[s.setType]) o[s.setType] = rec;
    });
  });
  return out;
}

// Global cardio history for a client — every finished session that logged
// cardio, newest first, each tagged START/END from the snapshot taken at
// save time (cardioWhen), so moving cardio in the template later won't
// relabel old entries.
export async function getCardioHistory(clientId: string) {
  return (await readRows_("sessionLogs"))
    .filter((r) => r.clientId === clientId && r.status === "done" && (r.cardioCals !== "" || truthy(r.cardioDone)))
    .sort((a, b) => +new Date(b.date) - +new Date(a.date) || +new Date(b.updatedAt) - +new Date(a.updatedAt))
    .map((l) => ({
      date: String(l.date), sessionName: l.sessionName,
      stage: Number(l.cardioStage) || 0, cals: l.cardioCals || "",
      when: l.cardioWhen || "",
    }));
}

/* ---------- starter templates ---------- */

export const TEMPLATE_KEYS = ["tpl_beginner", "tpl_intermediate", "tpl_advanced", "tpl_elite"];
const KEY_TIER: Record<string, string> = {
  tpl_beginner: "beginner", tpl_intermediate: "intermediate",
  tpl_advanced: "advanced", tpl_elite: "elite",
};

// Factory seed — runs ONCE per template, ever. It only creates a tpl_* that has
// no rows yet; a template that already exists is never touched, so a coach's
// edits (renamed sessions, swapped exercises) survive every deploy. seed.ts is
// the starting point, not a live source the coach competes with. To pull the
// latest factory program into a template, delete its rows so it counts as
// missing and re-seeds on the next load.
export async function seedIfEmpty_() {
  const all = await readRows_("template");
  const have = new Set(all.map((r) => String(r.clientId)));
  const missing = TEMPLATE_KEYS.filter((k) => !have.has(k));
  if (!missing.length) return;
  let seeds: Record<string, any>[] = [];
  for (const k of missing) {
    const seed = buildSeed(KEY_TIER[k]);
    ([1, 2, 3] as const).forEach((p) => { seeds = seeds.concat(flattenTemplate_(k, p, (seed as any)[p])); });
  }
  await appendRows_("template", seeds);
}

export async function addClientFromTemplate(name: string, goal: string, templateKey: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1,
      createdAt: nowISO(), accessToken: accessToken_(), minimal: "" },
  ]);
  const exMap: Record<string, string> = {};
  const copied = (await readRows_("template")).filter((r) => r.clientId === templateKey).map((r) => {
    const o = { ...r };
    o.clientId = clientId;
    if (r.exId) { // leave placeholder rows (blank exId) untouched
      if (!exMap[r.exId]) exMap[r.exId] = uid_();
      o.exId = exMap[r.exId];
    }
    return o;
  });
  if (copied.length) await appendRows_("template", copied);
  return clientId;
}

/* ---------- client-token access (no coach login required) ---------- */
// The browser never sends a raw clientId for client-mode calls — only the
// long random token from its URL. These wrappers resolve token -> clientId
// server-side and ignore/override anything the caller claims, so a client
// can never act as a different client even by guessing IDs.

async function clientIdForToken_(token: string): Promise<string> {
  const rows = await readRows_("clients");
  const c = rows.find((r) => r.accessToken === token);
  if (!c) throw new Error("invalid or expired link");
  return c.clientId;
}

export async function resolveClientToken(token: string) {
  const rows = await readRows_("clients");
  const c = rows.find((r) => r.accessToken === token);
  if (!c) return null;
  return { clientId: c.clientId, name: c.name, goal: c.goal, currentPhase: Number(c.currentPhase) || 1, minimal: truthy(c.minimal) };
}

export async function getTemplateForToken(token: string, phase: number) {
  return getTemplate(await clientIdForToken_(token), phase);
}
export async function startSessionForToken(token: string, phase: number, sessionId: string, sessionName: string) {
  return startSession(await clientIdForToken_(token), phase, sessionId, sessionName);
}
export async function getOpenSessionForToken(token: string) {
  return getOpenSession(await clientIdForToken_(token));
}
export async function getExerciseHistoryForToken(token: string, exId: string) {
  return getExerciseHistory(await clientIdForToken_(token), exId);
}
export async function getLastSessionForToken(token: string, sessionId: string) {
  return getLastSession(await clientIdForToken_(token), sessionId);
}
export async function getSetHistoryForToken(token: string, sessionId: string) {
  return getSetHistory(await clientIdForToken_(token), sessionId);
}
export async function getCardioHistoryForToken(token: string) {
  return getCardioHistory(await clientIdForToken_(token));
}
export async function getHistoryForToken(token: string, limit?: number) {
  return getHistory(await clientIdForToken_(token), limit);
}
export async function getExerciseBestsForToken(token: string) {
  return getExerciseBests(await clientIdForToken_(token));
}
// saveProgress / finishSession / getLog act on a logId, not a clientId
// directly — confirm that log actually belongs to this token's client
// before touching it, so a guessed/leaked logId can't cross clients.
async function assertOwnsLog_(token: string, logId: string) {
  const clientId = await clientIdForToken_(token);
  const log = (await readRows_("sessionLogs")).find((r) => r.logId === logId);
  if (!log || log.clientId !== clientId) throw new Error("not your session");
}
export async function saveProgressForToken(token: string, logId: string, payload: any) {
  await assertOwnsLog_(token, logId);
  return saveProgress(logId, payload);
}
export async function finishSessionForToken(token: string, logId: string) {
  await assertOwnsLog_(token, logId);
  return finishSession(logId);
}
export async function getLogForToken(token: string, logId: string) {
  await assertOwnsLog_(token, logId);
  return getLog(logId);
}

/* ---------- dispatcher maps ---------- */
// Coach functions require the coach login cookie (checked in the route).
// Client functions only require a valid per-client token, passed in the
// request body — never a cookie, never a bare clientId from the browser.

export const coachFns: Record<string, (...args: any[]) => Promise<any>> = {
  getClients, addClient, deleteClient, setCurrentPhase, setClientMinimal, rotateClientToken, getTemplate, saveTemplate, setTemplateWip,
  startSession, saveProgress, getOpenSession, finishSession, getLog,
  getExerciseHistory, getHistory, getExerciseBests, addClientFromTemplate, getLastSession, getSetHistory, getCardioHistory,
};

export const clientFns: Record<string, (...args: any[]) => Promise<any>> = {
  resolveClientToken,
  getTemplate: getTemplateForToken,
  startSession: startSessionForToken,
  saveProgress: saveProgressForToken,
  getOpenSession: getOpenSessionForToken,
  finishSession: finishSessionForToken,
  getLog: getLogForToken,
  getExerciseHistory: getExerciseHistoryForToken,
  getHistory: getHistoryForToken,
  getExerciseBests: getExerciseBestsForToken,
  getLastSession: getLastSessionForToken,
  getSetHistory: getSetHistoryForToken,
  getCardioHistory: getCardioHistoryForToken,
};