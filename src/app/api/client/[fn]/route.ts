import { NextRequest, NextResponse } from "next/server";
import { clientFns } from "@/lib/api";

// No login here — a client never has a password. Their access is the long
// random token embedded in their personal link, validated inside each
// handler before touching any data (see clientIdForToken_ in api.ts).
export async function POST(req: NextRequest, ctx: { params: Promise<{ fn: string }> }) {
  const { fn } = await ctx.params;
  const handler = clientFns[fn];
  if (!handler) return new NextResponse(`no such function: ${fn}`, { status: 404 });
  try {
    const { args = [] } = await req.json();
    return NextResponse.json(await handler(...args));
  } catch (e: any) {
    const msg = e?.message || "error";
    const status = /invalid|expired|not your/i.test(msg) ? 401 : 500;
    return new NextResponse(msg, { status });
  }
}
