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
  }));
}

export async function addClient(name: string, goal: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1,
      createdAt: nowISO(), accessToken: accessToken_() },
  ]);
  return clientId;
}

export async function setCurrentPhase(clientId: string, phase: number) {
  const all = await readRows_("clients");
  all.forEach((c) => { if (c.clientId === clientId) c.currentPhase = phase; });
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

/* ---------- template flatten / unflatten ---------- */

// The template tab is stored one-row-per-set. A session with no exercises, or
// an exercise with no sets, would otherwise flatten to *zero* rows and vanish
// on the next read — so we emit a structural placeholder for those empty
// parents: a blank `exId` marks "session exists, no exercises", a blank
// `setType` marks "exercise exists, no sets". getTemplate honours both.
// Placeholders are transient — the next save with real content replaces them.
function flattenTemplate_(clientId: string, phase: number, sessions: any[]) {
  const rows: Record<string, any>[] = [];
  sessions.forEach((s, si) => {
    const sBase = {
      clientId, phase, sessionId: s.sessionId, sessionOrder: si,
      sessionName: s.name, priority: s.priority, cardioPos: s.cardioPos || "none",
    };
    const exercises = s.exercises || [];
    if (!exercises.length) {
      rows.push({
        ...sBase, exOrder: 0, groupId: "", role: "",
        exId: "", exName: "", exYoutube: "", exCues: "", rir: "", coachCue: "",
        setOrder: "", setType: "", target: "",
      });
      return;
    }
    exercises.forEach((e: any, eo: number) => {
      const exId = e.exId || uid_();
      const eBase = {
        ...sBase, exOrder: eo, groupId: e.groupId || "", role: e.role || "",
        exId, exName: e.name, exYoutube: e.youtube || "", exCues: e.cues || "", rir: e.rir || "", coachCue: e.coachCue || "",
      };
      const sets = e.sets || [];
      if (!sets.length) {
        rows.push({ ...eBase, setOrder: "", setType: "", target: "" });
        return;
      }
      sets.forEach((set: any, ki: number) => {
        rows.push({ ...eBase, setOrder: ki, setType: set.type, target: set.target });
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
      priority: Number(r.priority), cardioPos: r.cardioPos, _ex: {},
    };
    if (!r.exId) return; // session placeholder — session exists, no exercises
    const s = sessMap[sid], eo = Number(r.exOrder);
    if (!s._ex[eo]) s._ex[eo] = {
      exId: r.exId, exOrder: eo, name: r.exName,
      youtube: r.exYoutube || "", cues: r.exCues || "", rir: r.rir || "", coachCue: r.coachCue || "",
      groupId: r.groupId || "", role: r.role || "", _sets: {},
    };
    if (!r.setType) return; // exercise placeholder — exercise exists, no sets
    s._ex[eo]._sets[Number(r.setOrder)] = { setOrder: Number(r.setOrder), type: r.setType, target: r.target };
  });
  const sessions = Object.values(sessMap)
    .sort((a: any, b: any) => a.order - b.order)
    .map((s: any) => ({
      sessionId: s.sessionId, name: s.name, priority: s.priority, cardioPos: s.cardioPos,
      exercises: Object.values(s._ex)
        .sort((a: any, b: any) => a.exOrder - b.exOrder)
        .map((e: any) => ({
          exId: e.exId, name: e.name, youtube: e.youtube || "", cues: e.cues || "", rir: e.rir || "", coachCue: e.coachCue || "",
          groupId: e.groupId || "", role: e.role || "",
          sets: Object.values(e._sets)
            .sort((a: any, b: any) => a.setOrder - b.setOrder)
            .map((st: any) => ({ type: st.type, target: st.target })),
        })),
    }));
  return { clientId, phase: Number(phase), sessions };
}

export async function saveTemplate(clientId: string, phase: number, sessions: any[]) {
  const all = await readRows_("template");
  const keep = all.filter((r) => !(r.clientId === clientId && Number(r.phase) === Number(phase)));
  await writeRows_("template", keep.concat(flattenTemplate_(clientId, phase, sessions)));
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

// Version-gated reseed. Bumping SEED_VERSION triggers a ONE-TIME rebuild of the
// tpl_* templates: every tpl_ row is wiped and re-seeded from buildSeed, and a
// hidden `__seedver__` marker row records the version so it never runs again
// until the next bump. Real clients (non-tpl_ rows) are never touched, and once
// seeded the coach owns the templates — no further auto-writes.
const SEED_VERSION = 5;
export async function seedIfEmpty_() {
  const all = await readRows_("template");
  const verRow = all.find((r) => r.clientId === "__seedver__");
  const ver = verRow ? Number(verRow.phase) : 0;
  if (ver >= SEED_VERSION) return;
  const keep = all.filter((r) => String(r.clientId).indexOf("tpl_") !== 0 && r.clientId !== "__seedver__");
  let seeds: Record<string, any>[] = [];
  for (const k of TEMPLATE_KEYS) {
    const seed = buildSeed(KEY_TIER[k]);
    ([1, 2, 3] as const).forEach((p) => { seeds = seeds.concat(flattenTemplate_(k, p, (seed as any)[p])); });
  }
  await writeRows_("template", keep.concat(seeds, [{ clientId: "__seedver__", phase: SEED_VERSION }]));
}

export async function addClientFromTemplate(name: string, goal: string, templateKey: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1,
      createdAt: nowISO(), accessToken: accessToken_() },
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
  return { clientId: c.clientId, name: c.name, goal: c.goal, currentPhase: Number(c.currentPhase) || 1 };
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
  getClients, addClient, setCurrentPhase, rotateClientToken, getTemplate, saveTemplate,
  startSession, saveProgress, getOpenSession, finishSession, getLog,
  getExerciseHistory, getHistory, getExerciseBests, addClientFromTemplate, getLastSession, getCardioHistory,
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
  getCardioHistory: getCardioHistoryForToken,
};