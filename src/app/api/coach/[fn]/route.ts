import { NextRequest, NextResponse } from "next/server";
import { coachFns } from "@/lib/api";
import { isCoach } from "@/lib/auth";

export async function POST(req: NextRequest, ctx: { params: Promise<{ fn: string }> }) {
  if (!(await isCoach())) return new NextResponse("not logged in", { status: 401 });
  const { fn } = await ctx.params;
  const handler = coachFns[fn];
  if (!handler) return new NextResponse(`no such function: ${fn}`, { status: 404 });
  try {
    const { args = [] } = await req.json();
    return NextResponse.json(await handler(...args));
  } catch (e: any) {
    return new NextResponse(e?.message || "error", { status: 500 });
  }
}
