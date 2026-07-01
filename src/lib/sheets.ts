// Same data model as Code.gs (Apps Script), same Google Sheet, same 4 tabs.
// Only the access method changes: Apps Script's built-in SpreadsheetApp
// becomes the Google Sheets REST API via a service account, called from
// Next.js API routes instead of from inside the sheet itself.

import { google } from "googleapis";
import { randomBytes } from "crypto";

export const TABS: Record<string, string[]> = {
  clients: ["clientId", "name", "goal", "currentPhase", "createdAt", "accessToken", "minimal"],
  template: [
    "clientId", "phase", "sessionId", "sessionOrder", "sessionName", "priority", "cardioPos",
    "exOrder", "groupId", "role", "exId", "exName", "setOrder", "setType", "target",
    "exYoutube", "exCues", "rir", "coachCue", "unit", "exWip", "sessWip", "tplWip",
  ],
  sessionLogs: [
    "logId", "clientId", "phase", "sessionId", "sessionName", "date",
    "cardioStage", "cardioDone", "cardioCals", "cardioWhen", "status", "createdAt", "updatedAt",
  ],
  setLogs: ["logId", "exId", "exName", "setOrder", "setType", "target", "reps", "load", "done", "workingLoad", "maxNote", "rpe"],
  // Isolated program storage: ONE row per (clientId, phase). The whole program
  // for that block lives as a JSON blob in `sessions`. Writes are single-row
  // (upsertRow_), so one program can never disturb another — unlike the flat
  // `template` tab, where every save rewrote the entire tab. `template` is kept
  // as a read-only backup of the pre-migration data.
  programs: ["clientId", "phase", "tplWip", "updatedAt", "sessions"],
};

const SHEET_ID = process.env.GOOGLE_SHEET_ID!;

let _sheets: ReturnType<typeof google.sheets> | null = null;
function sheetsClient() {
  if (_sheets) return _sheets;
  const auth = new google.auth.JWT({
    email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
    key: (process.env.GOOGLE_PRIVATE_KEY || "").replace(/\\n/g, "\n"),
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
  });
  _sheets = google.sheets({ version: "v4", auth });
  return _sheets;
}

export function uid_(): string {
  // Same shape as Apps Script's uid_(): 10-char hex-ish id. Fine for row IDs,
  // not for anything security-sensitive (see accessToken_ below).
  return [...Array(10)].map(() => Math.floor(Math.random() * 16).toString(16)).join("");
}

export function accessToken_(): string {
  // 32 random hex chars — this goes in client URLs, so it has to be
  // unguessable, not just "different from other rows."
  return randomBytes(16).toString("hex");
}

let _ensured = false;
let _tabInfo: Record<string, { sheetId: number }> | null = null;

// Creates any missing tabs and writes the header row — same as ensureSheets_().
export async function ensureSheets_() {
  if (_ensured) return;
  const sheets = sheetsClient();
  const meta = await sheets.spreadsheets.get({ spreadsheetId: SHEET_ID });
  const existing = new Map(
    (meta.data.sheets || []).map((s) => [s.properties!.title!, s.properties!.sheetId!])
  );
  _tabInfo = {};
  const toAdd: string[] = [];
  for (const name of Object.keys(TABS)) {
    if (existing.has(name)) _tabInfo[name] = { sheetId: existing.get(name)! };
    else toAdd.push(name);
  }
  if (toAdd.length) {
    const res = await sheets.spreadsheets.batchUpdate({
      spreadsheetId: SHEET_ID,
      requestBody: { requests: toAdd.map((title) => ({ addSheet: { properties: { title } } })) },
    });
    (res.data.replies || []).forEach((r, i) => {
      _tabInfo![toAdd[i]] = { sheetId: r.addSheet!.properties!.sheetId! };
    });
  }
  // One-time migration: convert any old block-based template tab (columns
  // blockOrder/blockKind) to the flat exercise model (exOrder/groupId/role).
  // Detected by the presence of 'blockKind' in the existing header; idempotent.
  if (existing.has("template")) await migrateTemplate_(sheets);
  // write header rows (cheap, idempotent — harmless if already correct)
  await sheets.spreadsheets.values.batchUpdate({
    spreadsheetId: SHEET_ID,
    requestBody: {
      valueInputOption: "RAW",
      data: Object.entries(TABS).map(([name, hdr]) => ({
        range: `${name}!A1:${colLetter(hdr.length)}1`,
        values: [hdr],
      })),
    },
  });
  _ensured = true;
}

// Converts old block-based template rows to the flat model in place. Each old
// block becomes either a standalone exercise (single) or a grouped run sharing
// a fresh groupId with role 'superset'. Flat exOrder is assigned across the
// session by (blockOrder, then old exOrder). No-op if already migrated.
async function migrateTemplate_(sheets: ReturnType<typeof google.sheets>) {
  const got = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: "template" });
  const vals = got.data.values || [];
  if (!vals.length) return;
  const hdr = (vals[0] || []).map(String);
  if (hdr.indexOf("blockKind") === -1) return; // already flat (or no old marker)

  const oldRows = vals.slice(1).map((r) => {
    const o: Record<string, any> = {};
    hdr.forEach((h, i) => (o[h] = r[i] !== undefined ? r[i] : ""));
    return o;
  });

  const bySession: Record<string, Record<string, any>[]> = {};
  for (const r of oldRows) {
    const key = `${r.clientId}|${r.phase}|${r.sessionId}`;
    (bySession[key] = bySession[key] || []).push(r);
  }

  const out: Record<string, any>[] = [];
  let gcount = 0;
  for (const key of Object.keys(bySession)) {
    const rows = bySession[key];
    const exMap: Record<string, any> = {};
    for (const r of rows) {
      const bo = Number(r.blockOrder), eo = Number(r.exOrder);
      const k = `${bo}:${eo}`;
      if (!exMap[k]) exMap[k] = { bo, eo, blockKind: r.blockKind, exId: r.exId };
    }
    const exList = (Object.values(exMap) as any[]).sort((a, b) => a.bo - b.bo || a.eo - b.eo);
    const blockCount: Record<number, number> = {};
    exList.forEach((e) => { blockCount[e.bo] = (blockCount[e.bo] || 0) + 1; });
    const blockGid: Record<number, string> = {};
    const flatByExId: Record<string, any> = {};
    exList.forEach((e, idx) => {
      e._flat = idx;
      const isGroup = e.blockKind === "superset" && blockCount[e.bo] > 1;
      if (isGroup) {
        if (!blockGid[e.bo]) blockGid[e.bo] = `mg${++gcount}`;
        e._gid = blockGid[e.bo]; e._role = "superset";
      } else { e._gid = ""; e._role = ""; }
      flatByExId[e.exId] = e;
    });
    for (const r of rows) {
      const e = flatByExId[r.exId];
      if (!e) continue;
      out.push({
        clientId: r.clientId, phase: r.phase, sessionId: r.sessionId, sessionOrder: r.sessionOrder,
        sessionName: r.sessionName, priority: r.priority, cardioPos: r.cardioPos || "none",
        exOrder: e._flat, groupId: e._gid || "", role: e._role || "",
        exId: r.exId, exName: r.exName, exYoutube: r.exYoutube || "", exCues: r.exCues || "",
        setOrder: r.setOrder, setType: r.setType, target: r.target,
      });
    }
  }

  await sheets.spreadsheets.values.clear({ spreadsheetId: SHEET_ID, range: "template" });
  const NEW = TABS.template;
  const data = [NEW].concat(out.map((o) => NEW.map((h) => (o[h] !== undefined ? o[h] : ""))));
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID, range: "template!A1", valueInputOption: "RAW", requestBody: { values: data },
  });
}

function colLetter(n: number): string {
  let s = "";
  while (n > 0) {
    const m = (n - 1) % 26;
    s = String.fromCharCode(65 + m) + s;
    n = Math.floor((n - m) / 26);
  }
  return s;
}

export async function readRows_(name: string): Promise<Record<string, any>[]> {
  await ensureSheets_();
  const sheets = sheetsClient();
  const hdr = TABS[name];
  const res = await sheets.spreadsheets.values.get({
    spreadsheetId: SHEET_ID,
    range: `${name}!A2:${colLetter(hdr.length)}`,
  });
  const rows = res.data.values || [];
  return rows.map((r) => {
    const o: Record<string, any> = {};
    hdr.forEach((h, i) => (o[h] = r[i] !== undefined ? r[i] : ""));
    return o;
  });
}

export async function writeRows_(name: string, objs: Record<string, any>[]) {
  await ensureSheets_();
  const sheets = sheetsClient();
  const hdr = TABS[name];
  // clear existing data rows, then write the full replacement set —
  // same "rewrite the whole tab" approach as Apps Script's writeRows_().
  await sheets.spreadsheets.values.clear({
    spreadsheetId: SHEET_ID,
    range: `${name}!A2:${colLetter(hdr.length)}`,
  });
  if (!objs.length) return;
  const rows = objs.map((o) => hdr.map((h) => (o[h] !== undefined ? o[h] : "")));
  await sheets.spreadsheets.values.update({
    spreadsheetId: SHEET_ID,
    range: `${name}!A2`,
    valueInputOption: "RAW",
    requestBody: { values: rows },
  });
}

export async function appendRows_(name: string, objs: Record<string, any>[]) {
  await ensureSheets_();
  if (!objs.length) return;
  const sheets = sheetsClient();
  const hdr = TABS[name];
  const rows = objs.map((o) => hdr.map((h) => (o[h] !== undefined ? o[h] : "")));
  await sheets.spreadsheets.values.append({
    spreadsheetId: SHEET_ID,
    range: `${name}!A1`,
    valueInputOption: "RAW",
    insertDataOption: "INSERT_ROWS",
    requestBody: { values: rows },
  });
}

// Atomic upsert keyed by keyCols: locate the single matching row and rewrite
// ONLY that row's range, or append if none matches. Never clears the tab, so a
// write to one program's row physically cannot touch another's. This is the
// isolation the flat template tab never had.
export async function upsertRow_(name: string, keyCols: string[], obj: Record<string, any>) {
  await ensureSheets_();
  const sheets = sheetsClient();
  const hdr = TABS[name];
  const width = colLetter(hdr.length);
  const got = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: `${name}!A2:${width}` });
  const rows = got.data.values || [];
  const kIdx = keyCols.map((k) => hdr.indexOf(k));
  const rowVals = hdr.map((h) => (obj[h] !== undefined ? obj[h] : ""));
  let found = -1;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (keyCols.every((k, j) => String(r[kIdx[j]] ?? "") === String(obj[k] ?? ""))) { found = i; break; }
  }
  if (found >= 0) {
    const rn = found + 2; // data starts at sheet row 2
    await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID, range: `${name}!A${rn}:${width}${rn}`,
      valueInputOption: "RAW", requestBody: { values: [rowVals] },
    });
  } else {
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID, range: `${name}!A1`,
      valueInputOption: "RAW", insertDataOption: "INSERT_ROWS", requestBody: { values: [rowVals] },
    });
  }
  return true;
}

// Targeted patch: for every row matching matchFn, apply `patch` and rewrite ONLY
// those rows in place (one batched update of the individual row ranges). No
// whole-tab clear, so unmatched rows are physically untouched.
export async function patchRows_(name: string, matchFn: (o: Record<string, any>) => boolean, patch: Record<string, any>) {
  await ensureSheets_();
  const sheets = sheetsClient();
  const hdr = TABS[name];
  const width = colLetter(hdr.length);
  const got = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: `${name}!A2:${width}` });
  const rows = got.data.values || [];
  const data: { range: string; values: any[][] }[] = [];
  rows.forEach((r, i) => {
    const o: Record<string, any> = {};
    hdr.forEach((h, j) => (o[h] = r[j] !== undefined ? r[j] : ""));
    if (matchFn(o)) {
      Object.assign(o, patch);
      const rn = i + 2;
      data.push({ range: `${name}!A${rn}:${width}${rn}`, values: [hdr.map((h) => (o[h] !== undefined ? o[h] : ""))] });
    }
  });
  if (data.length) {
    await sheets.spreadsheets.values.batchUpdate({ spreadsheetId: SHEET_ID, requestBody: { valueInputOption: "RAW", data } });
  }
  return data.length;
}

// Atomic row removal: delete only the rows matching matchFn, bottom-up, in one
// batchUpdate. Unlike writeRows_ (clear-then-write), there is no window where
// survivors are gone — a failure leaves the tab fully intact.
export async function deleteRowsWhere_(name: string, matchFn: (o: Record<string, any>) => boolean) {
  await ensureSheets_();
  const sheets = sheetsClient();
  const hdr = TABS[name];
  const width = colLetter(hdr.length);
  const sheetId = _tabInfo?.[name]?.sheetId;
  if (sheetId == null) return 0;
  const got = await sheets.spreadsheets.values.get({ spreadsheetId: SHEET_ID, range: `${name}!A2:${width}` });
  const rows = got.data.values || [];
  const idxs: number[] = [];
  rows.forEach((r, i) => {
    const o: Record<string, any> = {};
    hdr.forEach((h, j) => (o[h] = r[j] !== undefined ? r[j] : ""));
    if (matchFn(o)) idxs.push(i + 1); // data row i (0-based from A2) => 0-based sheet rowIndex i+1
  });
  if (!idxs.length) return 0;
  const requests = idxs.sort((a, b) => b - a).map((ri) => ({
    deleteDimension: { range: { sheetId, dimension: "ROWS", startIndex: ri, endIndex: ri + 1 } },
  }));
  await sheets.spreadsheets.batchUpdate({ spreadsheetId: SHEET_ID, requestBody: { requests } });
  return idxs.length;
}