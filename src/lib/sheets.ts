// Same data model as Code.gs (Apps Script), same Google Sheet, same 4 tabs.
// Only the access method changes: Apps Script's built-in SpreadsheetApp
// becomes the Google Sheets REST API via a service account, called from
// Next.js API routes instead of from inside the sheet itself.

import { google } from "googleapis";
import { randomBytes } from "crypto";

export const TABS: Record<string, string[]> = {
  clients: ["clientId", "name", "goal", "currentPhase", "createdAt", "accessToken"],
  template: [
    "clientId", "phase", "sessionId", "sessionOrder", "sessionName", "priority", "cardioPos",
    "blockOrder", "blockKind", "exId", "exOrder", "exName", "setOrder", "setType", "target",
    "exYoutube", "exCues",
  ],
  sessionLogs: [
    "logId", "clientId", "phase", "sessionId", "sessionName", "date",
    "cardioStage", "cardioDone", "cardioCals", "cardioWhen", "status", "createdAt", "updatedAt",
  ],
  setLogs: ["logId", "exId", "exName", "setOrder", "setType", "target", "reps", "load", "done", "workingLoad", "maxNote"],
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