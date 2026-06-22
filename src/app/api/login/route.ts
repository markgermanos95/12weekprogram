import { NextRequest, NextResponse } from "next/server";
import { checkPassword, createCoachSession } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();
  if (!checkPassword(password || "")) {
    return new NextResponse("wrong password", { status: 401 });
  }
  await createCoachSession();
  return NextResponse.json({ ok: true });
}
