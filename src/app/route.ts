import fs from "fs";
import path from "path";

// Serves the coaching app as a single static HTML document, exactly like
// doGet() did in Apps Script — just from a file on disk instead of
// HtmlService.createTemplateFromFile(). All data calls happen client-side
// via fetch() to /api/run/[fn] (see src/lib/app.html's gs() function).
export async function GET() {
  const html = fs.readFileSync(path.join(process.cwd(), "src/lib/app.html"), "utf8");
  return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
}
