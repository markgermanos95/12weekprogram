// Coach login. One password, one signed cookie — deliberately simple since
// there's one coach. No extra dependency: signing is plain HMAC via Node's
// built-in crypto module.

import { cookies } from "next/headers";
import { createHmac, timingSafeEqual } from "crypto";

const COOKIE_NAME = "coach_session";
const THIRTY_DAYS = 60 * 60 * 24 * 30;

function sign(value: string): string {
  const secret = process.env.SESSION_SECRET || "";
  return createHmac("sha256", secret).update(value).digest("hex");
}

export async function createCoachSession() {
  const exp = Date.now() + THIRTY_DAYS * 1000;
  const payload = `coach.${exp}`;
  const sig = sign(payload);
  (await cookies()).set(COOKIE_NAME, `${payload}.${sig}`, {
    httpOnly: true, secure: true, sameSite: "lax", path: "/", maxAge: THIRTY_DAYS,
  });
}

export async function clearCoachSession() {
  (await cookies()).delete(COOKIE_NAME);
}

export async function isCoach(): Promise<boolean> {
  const raw = (await cookies()).get(COOKIE_NAME)?.value;
  if (!raw) return false;
  const parts = raw.split(".");
  if (parts.length !== 3) return false;
  const [tag, exp, sig] = parts;
  if (tag !== "coach") return false;
  const payload = `${tag}.${exp}`;
  const expected = sign(payload);
  const a = Buffer.from(sig, "hex");
  const b = Buffer.from(expected, "hex");
  if (a.length !== b.length || !timingSafeEqual(a, b)) return false;
  if (Date.now() > Number(exp)) return false;
  return true;
}

export function checkPassword(candidate: string): boolean {
  const real = process.env.COACH_PASSWORD || "";
  if (!real) return false;
  const a = Buffer.from(candidate);
  const b = Buffer.from(real);
  if (a.length !== b.length) return false; // avoid leaking length via timing
  return timingSafeEqual(a, b);
}
