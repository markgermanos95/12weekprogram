import { NextRequest, NextResponse } from "next/server";
import { fns } from "@/lib/api";

// Mirrors how google.script.run exposed every public function in Code.gs:
// one call-by-name endpoint, no separate auth layer. Same security posture
// as the current Apps Script deployment (anyone with the URL can call these
// functions) — that's a known, already-flagged gap, not something new this
// introduces. Tightening it (per-client tokens, coach login) is a deliberately
// separate follow-up, not bundled into this hosting move.
export async function POST(req: NextRequest, ctx: { params: Promise<{ fn: string }> }) {
  const { fn } = await ctx.params;
  const handler = fns[fn];
  if (!handler) return new NextResponse(`no such function: ${fn}`, { status: 404 });
  try {
    const { args = [] } = await req.json();
    const result = await handler(...args);
    return NextResponse.json(result);
  } catch (e: any) {
    return new NextResponse(e?.message || "error", { status: 500 });
  }
}
