# Coaching app — Vercel hosting, same Google Sheet

Same data model as the Apps Script version (clients / template / sessionLogs /
setLogs tabs, same columns, same logic) — only the hosting changed. No
Supabase, no new database. Your existing Google Sheet stays the source of
truth.

What changed under the hood: instead of the app living *inside* the
spreadsheet (Apps Script + `SpreadsheetApp`), it's now a small Next.js app
that talks to the *same* sheet over the Google Sheets API, hosted on Vercel.

## What's in this folder

```
src/lib/sheets.ts    — reads/writes the sheet (same TABS schema as Code.gs)
src/lib/api.ts        — every function from Code.gs, ported 1:1
src/lib/seed.ts        — the exact buildSeed_() program data
src/lib/app.html      — your existing Index.html, with 2 lines changed:
                         (the part that called google.script.run now calls
                         fetch('/api/run/...') instead)
src/app/route.ts                 — serves app.html at "/"
src/app/api/run/[fn]/route.ts   — the dispatcher (same idea as google.script.run)
```

## Step 1 — a Google service account (one-time)

This replaces "the script runs inside the sheet" with "a robot account that's
allowed to edit the sheet from outside."

1. Go to **console.cloud.google.com** → create a project (any name).
2. **APIs & Services → Enable APIs** → search **Google Sheets API** → Enable.
3. **APIs & Services → Credentials → Create Credentials → Service account.**
   Give it any name. Skip the optional role-grant steps.
4. Open the service account → **Keys** tab → **Add key → Create new key → JSON.**
   A `.json` file downloads. Open it in a text editor.
5. From that file, copy:
   - `client_email` → this is `GOOGLE_SERVICE_ACCOUNT_EMAIL`
   - `private_key` → this is `GOOGLE_PRIVATE_KEY` (paste it exactly as-is,
     including the `\n` characters and the `BEGIN/END PRIVATE KEY` lines)
6. Open your actual coaching Google Sheet → **Share** → paste in the
   `client_email` address → give it **Editor** access. (Exactly like
   sharing a sheet with a person — you're just sharing it with a robot.)
7. Copy the Sheet ID from its URL:
   `docs.google.com/spreadsheets/d/`**`THIS_PART`**`/edit`

## Step 2 — run it locally first

```bash
npm install
cp .env.local.example .env.local
# edit .env.local with the 3 values from Step 1
npm run dev
```

Open `http://localhost:3000`. First load auto-creates the 4 tabs (if they
don't already exist) and seeds the 3 starter templates (if no `tpl_*` rows
are found) — same as `doGet()` did. If you're pointing this at a sheet that
already has your real client data, nothing gets overwritten; it only adds
what's missing.

Client links work the same way: `localhost:3000/?client=THEIR_ID`.

## Step 3 — GitHub

```bash
git init
git add -A
git commit -m "coaching app on vercel"
```

Make an empty repo on github.com (don't initialize it with a README), then:

```bash
git remote add origin https://github.com/YOU/coaching-app.git
git branch -M main
git push -u origin main
```

## Step 4 — Vercel

1. vercel.com → **Add New → Project → Import** your `coaching-app` repo.
2. **Environment Variables** — add the same 3 from `.env.local`:
   `GOOGLE_SERVICE_ACCOUNT_EMAIL`, `GOOGLE_PRIVATE_KEY`, `GOOGLE_SHEET_ID`.
   (For `GOOGLE_PRIVATE_KEY`, paste the same value — Vercel's env var box
   handles the `\n` characters fine as plain text.)
3. **Deploy.**

From here on: `git push` → Vercel rebuilds and redeploys automatically.

## What's deliberately unchanged

- **Security model**: same as today's Apps Script deployment — anyone with
  the URL can call the functions (no login, no per-client token). That's an
  existing, already-flagged gap, not something this introduces. Worth fixing
  before you'd sell client access, but it's a separate, deliberate next step
  — not bundled into this hosting move since you didn't ask for it here.
- **Data model**: still the same 4-tab Google Sheet. If you ever do want a
  real database (Postgres/Supabase or otherwise), that's a distinct decision
  to make on its own, not a side effect of moving host.

## A genuine limitation worth knowing

Every read (`getClients`, `getTemplate`, etc.) now makes a real network call
to the Google Sheets API instead of an in-process spreadsheet read. For a
single coach with a handful of clients this is unnoticeable. If client count
or session-logging frequency grows a lot, Sheets API rate limits (and the
"rewrite the whole tab" pattern carried over from Code.gs) are the first
thing that would need attention — not before, no need to solve it now.
