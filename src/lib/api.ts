// Direct port of the public functions in Code.gs. Same logic, same row
// shapes, same Google Sheet — only the underlying read/write calls changed
// (SpreadsheetApp -> Sheets REST API, via sheets.ts).

import { readRows_, writeRows_, appendRows_, upsertRow_, patchRows_, deleteRowsWhere_, uid_, accessToken_ } from "./sheets";
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

// Serialise the one-time create path (migrate + seed) behind a shared in-flight
// promise so concurrent loads on this instance can't both populate an empty
// programs tab and race duplicate rows. A failed run clears the latch to retry.
let _createOnce: Promise<void> | null = null;
function createOnce_() {
  if (!_createOnce) {
    _createOnce = (async () => {
      await migrateFlatToPrograms_(); // one-time: legacy flat template -> isolated programs
      await seedIfEmpty_();
    })().catch((e) => { _createOnce = null; throw e; });
  }
  return _createOnce;
}

export async function getClients() {
  await createOnce_();
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
  await deleteRowsWhere_("programs", (r) => r.clientId === clientId);
  const logs = await readRows_("sessionLogs");
  const mine = new Set(logs.filter((r) => r.clientId === clientId).map((r) => r.logId));
  await writeRows_("sessionLogs", logs.filter((r) => r.clientId !== clientId));
  if (mine.size) await writeRows_("setLogs", (await readRows_("setLogs")).filter((r) => !mine.has(r.logId)));
  return true;
}

/* ---------- template unflatten (legacy, migration-only) ---------- */

// Rebuild the sessions[] for one program from legacy flat template rows
// (one-row-per-set). Used only by the one-time migration; live reads come from
// the programs tab.
function unflattenRows_(rows: Record<string, any>[]) {
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
  return { sessions, tplWip: rows.some((r) => truthy(r.tplWip)) };
}

/* ---------- isolated program storage (programs tab: one row per clientId+phase) ---------- */

// Coerce a sessions[] parsed from JSON back to the canonical shape, tolerating
// anything slightly off so a stray/missing field can never silently drop a
// session, exercise, or set on the way in or out.
function normSessions_(raw: any): any[] {
  if (!Array.isArray(raw)) return [];
  return raw.map((s: any) => ({
    sessionId: String((s && s.sessionId) || uid_()),
    name: (s && s.name) || "", priority: Number(s && s.priority) || 1,
    cardioPos: (s && s.cardioPos) || "none", wip: !!(s && s.wip),
    exercises: (s && Array.isArray(s.exercises) ? s.exercises : []).map((e: any) => ({
      exId: String((e && e.exId) || uid_()), name: (e && e.name) || "", youtube: (e && e.youtube) || "",
      cues: (e && e.cues) || "", rir: (e && e.rir) || "", coachCue: (e && e.coachCue) || "",
      groupId: (e && e.groupId) || "", role: (e && e.role) || "", wip: !!(e && e.wip),
      sets: (e && Array.isArray(e.sets) ? e.sets : []).map((st: any) => ({
        type: (st && st.type) || "W", target: st && st.target != null ? st.target : "", unit: (st && st.unit) || "reps",
      })),
    })),
  }));
}

async function readProgram_(clientId: string, phase: number): Promise<{ sessions: any[]; tplWip: boolean } | null> {
  const matches = (await readRows_("programs")).filter((x) => x.clientId === clientId && Number(x.phase) === Number(phase));
  if (!matches.length) return null;
  // If a cold-start race ever left duplicate rows for this block, prefer the
  // most recently written one — an inert stale twin can never win the read.
  const r = matches.sort((a, b) => String(b.updatedAt || "").localeCompare(String(a.updatedAt || "")))[0];
  let sessions: any[] = [];
  try { sessions = normSessions_(JSON.parse(r.sessions || "[]")); } catch { sessions = []; }
  return { sessions, tplWip: truthy(r.tplWip) };
}

// Single-row write — touches ONLY this program's row. A bug here cannot reach
// any other program or template. This is the whole point of the programs tab.
async function writeProgram_(clientId: string, phase: number, sessions: any[], tplWip: boolean) {
  await upsertRow_("programs", ["clientId", "phase"], {
    clientId, phase: Number(phase), tplWip: tplWip ? "true" : "", updatedAt: nowISO(),
    sessions: JSON.stringify(normSessions_(sessions)),
  });
  return true;
}

export async function getTemplate(clientId: string, phase: number) {
  const prog = await readProgram_(clientId, phase);
  return { clientId, phase: Number(phase), sessions: prog ? prog.sessions : [], tplWip: prog ? prog.tplWip : false };
}

// Does this block currently hold real content? A corrupt/unparseable blob counts
// as content (never overwrite something we can't read).
async function programHasContent_(clientId: string, phase: number): Promise<boolean> {
  const matches = (await readRows_("programs")).filter((x) => x.clientId === clientId && Number(x.phase) === Number(phase));
  return matches.some((r) => { try { const a = JSON.parse(r.sessions || "[]"); return Array.isArray(a) && a.length > 0; } catch { return true; } });
}

export async function saveTemplate(clientId: string, phase: number, sessions: any[], tplWip = false) {
  // Self-wipe guard: if the incoming program is empty but the stored one is not,
  // refuse to blank it — a transient empty/failed load must never overwrite good
  // data. The WIP toggle is still honoured.
  if ((!sessions || !sessions.length) && (await programHasContent_(clientId, phase))) {
    await patchRows_("programs", (o) => o.clientId === clientId && Number(o.phase) === Number(phase), { tplWip: tplWip ? "true" : "", updatedAt: nowISO() });
    return true;
  }
  await writeProgram_(clientId, phase, sessions, tplWip);
  return true;
}

// Coach-only whole-template WIP: patch the tplWip cell on each of this template's
// existing block rows in place — no other program's row is read or written.
export async function setTemplateWip(clientId: string, on: boolean) {
  await patchRows_("programs", (o) => o.clientId === clientId, { tplWip: on ? "true" : "" });
  return true;
}

// Coach-only: which programs (templates and clients) are flagged WIP — one
// template-tab scan, returns the distinct clientIds with tplWip set. Lets the
// home screen show WIP at a glance without loading every template.
export async function getTemplateWips() {
  const out = new Set<string>();
  (await readRows_("programs")).forEach((r) => { if (truthy(r.tplWip)) out.add(String(r.clientId)); });
  return Array.from(out);
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
  const have = new Set((await readRows_("programs")).map((r) => `${r.clientId}|${Number(r.phase)}`));
  // Blocks the flat backup still holds belong to migration, not seed — so the
  // coach's real edited work (e.g. Beginner B1) can never be shadowed by a
  // freshly-seeded authored starter, even under a concurrent cold start.
  const flatOwned = new Set((await readRows_("template")).map((r) => `${r.clientId}|${Number(r.phase)}`));
  for (const k of TEMPLATE_KEYS) {
    const seed = buildSeed(KEY_TIER[k]);
    for (const p of [1, 2, 3] as const) {
      const key = `${k}|${p}`;
      if (have.has(key) || flatOwned.has(key)) continue; // exists, or migration owns it
      await writeProgram_(k, p, (seed as any)[p], false);
      have.add(key);
    }
  }
}

// One-time lift of the legacy flat `template` tab into the isolated programs tab.
// Idempotent — writes only a (clientId, phase) the programs tab doesn't already
// have, and never touches the `template` tab, which stays as a backup.
export async function migrateFlatToPrograms_() {
  const flat = await readRows_("template");
  if (!flat.length) return;
  const have = new Set((await readRows_("programs")).map((r) => `${r.clientId}|${Number(r.phase)}`));
  const groups: Record<string, Record<string, any>[]> = {};
  flat.forEach((r) => { const key = `${r.clientId}|${Number(r.phase)}`; (groups[key] = groups[key] || []).push(r); });
  for (const key of Object.keys(groups)) {
    if (have.has(key)) continue;
    const rows = groups[key];
    const clientId = String(rows[0].clientId);
    const phase = Number(rows[0].phase);
    const { sessions, tplWip } = unflattenRows_(rows);
    await writeProgram_(clientId, phase, sessions, tplWip);
  }
}

export async function addClientFromTemplate(name: string, goal: string, templateKey: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1,
      createdAt: nowISO(), accessToken: accessToken_(), minimal: "" },
  ]);
  // Copy each of the template's block programs to the new client with fresh
  // exercise ids, so logged history never collides between client and template.
  // Dedup by phase (newest updatedAt) so a stray duplicate row can't double up.
  const byPhase: Record<number, Record<string, any>> = {};
  (await readRows_("programs")).filter((r) => r.clientId === templateKey).forEach((r) => {
    const p = Number(r.phase);
    if (!byPhase[p] || String(r.updatedAt || "") > String(byPhase[p].updatedAt || "")) byPhase[p] = r;
  });
  for (const p of Object.keys(byPhase).map(Number)) {
    let sessions: any[] = [];
    try { sessions = normSessions_(JSON.parse(byPhase[p].sessions || "[]")); } catch { sessions = []; }
    sessions.forEach((s) => s.exercises.forEach((e: any) => { e.exId = uid_(); }));
    await writeProgram_(clientId, p, sessions, false);
  }
  return clientId;
}

// Coach-only: copy one block (phase) of a template into a client's SAME block,
// with fresh exercise ids so history never collides. Writes only that
// (clientId, phase) row — every other block of the client is untouched. Lets a
// coach build out Blocks 2/3 for a client from a template without disturbing
// the block they've already tailored.
export async function copyBlockFromTemplate(clientId: string, templateKey: string, phase: number) {
  const src = (await readRows_("programs")).find((r) => r.clientId === templateKey && Number(r.phase) === Number(phase));
  let sessions: any[] = [];
  if (src) { try { sessions = normSessions_(JSON.parse(src.sessions || "[]")); } catch { sessions = []; } }
  sessions.forEach((s) => s.exercises.forEach((e: any) => { e.exId = uid_(); }));
  await writeProgram_(clientId, Number(phase), sessions, false);
  return true;
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
  getClients, addClient, deleteClient, setCurrentPhase, setClientMinimal, rotateClientToken, getTemplate, saveTemplate, setTemplateWip, getTemplateWips, copyBlockFromTemplate,
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