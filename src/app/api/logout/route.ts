import { NextResponse } from "next/server";
import { clearCoachSession } from "@/lib/auth";

export async function POST() {
  await clearCoachSession();
  return NextResponse.json({ ok: true });
}
