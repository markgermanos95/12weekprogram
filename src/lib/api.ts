// Direct port of the public functions in Code.gs. Same logic, same row
// shapes, same Google Sheet — only the underlying read/write calls changed
// (SpreadsheetApp -> Sheets REST API, via sheets.ts).

import { readRows_, writeRows_, appendRows_, uid_ } from "./sheets";
import { buildSeed, SeedSession } from "./seed";

const truthy = (v: any) => v === true || v === "true" || v === "TRUE";
const nowISO = () => new Date().toISOString();
const today = () => new Date().toISOString().slice(0, 10);

/* ---------- clients ---------- */

export async function getClients() {
  await seedIfEmpty_();
  const rows = await readRows_("clients");
  return rows.map((c) => ({
    clientId: c.clientId,
    name: c.name,
    goal: c.goal,
    currentPhase: Number(c.currentPhase) || 1,
  }));
}

export async function addClient(name: string, goal: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1, createdAt: nowISO() },
  ]);
  return clientId;
}

export async function setCurrentPhase(clientId: string, phase: number) {
  const all = await readRows_("clients");
  all.forEach((c) => { if (c.clientId === clientId) c.currentPhase = phase; });
  await writeRows_("clients", all);
  return true;
}

/* ---------- template flatten / unflatten ---------- */

function flattenTemplate_(clientId: string, phase: number, sessions: any[]) {
  const rows: Record<string, any>[] = [];
  sessions.forEach((s, si) => {
    (s.blocks || []).forEach((b: any, bi: number) => {
      (b.items || []).forEach((e: any, ei: number) => {
        const exId = e.exId || uid_();
        (e.sets || []).forEach((set: any, ki: number) => {
          rows.push({
            clientId, phase, sessionId: s.sessionId, sessionOrder: si,
            sessionName: s.name, priority: s.priority, cardioPos: s.cardioPos || "none",
            blockOrder: bi, blockKind: b.kind, exId, exOrder: ei, exName: e.name,
            setOrder: ki, setType: set.type, target: set.target,
          });
        });
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
      priority: Number(r.priority), cardioPos: r.cardioPos, _blocks: {},
    };
    const s = sessMap[sid], bo = Number(r.blockOrder);
    if (!s._blocks[bo]) s._blocks[bo] = { blockOrder: bo, kind: r.blockKind, _items: {} };
    const b = s._blocks[bo], eo = Number(r.exOrder);
    if (!b._items[eo]) b._items[eo] = { exId: r.exId, exOrder: eo, name: r.exName, _sets: {} };
    b._items[eo]._sets[Number(r.setOrder)] = { setOrder: Number(r.setOrder), type: r.setType, target: r.target };
  });
  const sessions = Object.values(sessMap)
    .sort((a: any, b: any) => a.order - b.order)
    .map((s: any) => ({
      sessionId: s.sessionId, name: s.name, priority: s.priority, cardioPos: s.cardioPos,
      blocks: Object.values(s._blocks)
        .sort((a: any, b: any) => a.blockOrder - b.blockOrder)
        .map((b: any) => ({
          kind: b.kind,
          items: Object.values(b._items)
            .sort((a: any, b: any) => a.exOrder - b.exOrder)
            .map((e: any) => ({
              exId: e.exId, name: e.name,
              sets: Object.values(e._sets)
                .sort((a: any, b: any) => a.setOrder - b.setOrder)
                .map((st: any) => ({ type: st.type, target: st.target })),
            })),
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
    date: today(), cardioStage: "", cardioDone: false,
    status: "open", createdAt: nowISO(), updatedAt: nowISO(),
  }]);
  return { logId, clientId, phase: Number(phase), sessionId, sessionName,
            status: "open", cardioStage: "", cardioDone: false, sets: [] };
}

export async function saveProgress(logId: string, payload: any) {
  const p = typeof payload === "string" ? JSON.parse(payload) : payload;
  const logs = await readRows_("sessionLogs");
  logs.forEach((l) => {
    if (l.logId === logId) {
      if (p.cardioStage !== undefined) l.cardioStage = p.cardioStage;
      if (p.cardioDone !== undefined) l.cardioDone = !!p.cardioDone;
      l.updatedAt = nowISO();
    }
  });
  await writeRows_("sessionLogs", logs);
  const others = (await readRows_("setLogs")).filter((r) => r.logId !== logId);
  const mine = (p.sets || []).map((s: any) => ({
    logId, exId: s.exId, exName: s.exName, setOrder: s.setOrder,
    setType: s.setType, target: s.target, reps: s.reps, load: s.load, done: !!s.done,
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
  }));
  return {
    logId: l.logId, clientId: l.clientId, phase: Number(l.phase), sessionId: l.sessionId,
    sessionName: l.sessionName, status: l.status,
    cardioStage: l.cardioStage, cardioDone: truthy(l.cardioDone),
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

export async function getHistory(clientId: string, limit?: number) {
  let logs = (await readRows_("sessionLogs")).filter((r) => r.clientId === clientId && r.status === "done");
  logs.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  if (limit) logs = logs.slice(0, limit);
  return logs.map((l) => ({
    logId: l.logId, sessionName: l.sessionName, phase: Number(l.phase),
    date: String(l.date), cardioStage: l.cardioStage, cardioDone: truthy(l.cardioDone),
  }));
}

/* ---------- starter templates ---------- */

export const TEMPLATE_KEYS = ["tpl_beginner", "tpl_intermediate", "tpl_advanced"];

export async function seedIfEmpty_() {
  const hasTpl = (await readRows_("template")).some((r) => String(r.clientId).indexOf("tpl_") === 0);
  if (hasTpl) return;
  const seed = buildSeed();
  let rows: Record<string, any>[] = [];
  TEMPLATE_KEYS.forEach((k) => {
    rows = rows.concat(
      flattenTemplate_(k, 1, seed[1] as SeedSession[]),
      flattenTemplate_(k, 2, seed[2] as SeedSession[])
    );
  });
  await writeRows_("template", (await readRows_("template")).concat(rows));
}

export async function addClientFromTemplate(name: string, goal: string, templateKey: string) {
  const clientId = uid_();
  await appendRows_("clients", [
    { clientId, name: name || "New client", goal: goal || "", currentPhase: 1, createdAt: nowISO() },
  ]);
  const exMap: Record<string, string> = {};
  const copied = (await readRows_("template")).filter((r) => r.clientId === templateKey).map((r) => {
    const o = { ...r };
    o.clientId = clientId;
    if (!exMap[r.exId]) exMap[r.exId] = uid_();
    o.exId = exMap[r.exId];
    return o;
  });
  if (copied.length) await appendRows_("template", copied);
  return clientId;
}

/* ---------- dispatcher map ---------- */
// Every function callable from the browser via /api/run/[fn]. Mirrors the
// set of functions Apps Script exposed automatically via google.script.run.

export const fns: Record<string, (...args: any[]) => Promise<any>> = {
  getClients, addClient, setCurrentPhase, getTemplate, saveTemplate,
  startSession, saveProgress, getOpenSession, finishSession, getLog,
  getExerciseHistory, getHistory, addClientFromTemplate,
};
