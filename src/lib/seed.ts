// Per-tier starter programs. Beginner/Intermediate run full-body; Advanced/Elite
// run a push/pull/legs split. Every tier carries three phases — P1 higher-rep,
// P2 medium-rep, P3 power-output (coach-cued). Flat exercise model: each session
// is an ordered exercises[]; supersets are consecutive exercises sharing a
// groupId and role 'superset'. Draft content — built to be edited.

export type SeedSet = { type: 'R' | 'W' | 'M'; target: string };
export type SeedExercise = { name: string; sets: SeedSet[]; groupId?: string; role?: string; rir?: string; coachCue?: string };
export type SeedSession = {
  sessionId: string; name: string; priority: number;
  cardioPos: 'top' | 'bottom' | 'none'; exercises: SeedExercise[];
};
export type SeedPhases = { 1: SeedSession[]; 2: SeedSession[]; 3: SeedSession[] };

const R = (t: string): SeedSet => ({ type: 'R', target: t });
const W = (t: string): SeedSet => ({ type: 'W', target: t });
const M = (t: string): SeedSet => ({ type: 'M', target: t });

// Rep targets by phase — compound vs isolation.
const repC = (p: number) => (p === 1 ? '10–12' : p === 2 ? '6–8' : '3–5');
const repI = (p: number) => (p === 1 ? '15–20' : p === 2 ? '10–12' : '8–10');
const POWER_CUE = 'Power — drive the bar fast, ~55–65% 1RM, full recovery (2–3 min)';

let _g = 0;
const gid = () => 'sg' + (++_g);

// A compound lift. P1/P2: phase ramp + 3 working sets (+ optional max), with a
// working-set RIR target that rides into the cue. P3: explosive power work
// (5×3) carrying the coach cue instead of the rep-chase guidance.
function compound(name: string, p: number, max = false): SeedExercise {
  if (p === 3) {
    return {
      name, groupId: '', role: '', coachCue: POWER_CUE,
      sets: [R('~40% × 5'), R('~55% × 3'), W('3'), W('3'), W('3'), W('3'), W('3')],
    };
  }
  const w = repC(p);
  return {
    name, groupId: '', role: '', rir: p === 1 ? '2' : '1',
    sets: [R('light × 8'), R('~70% × 5'), W(w), W(w), W(w), ...(max ? [M(w)] : [])],
  };
}
function iso(name: string, p: number, max = false): SeedExercise {
  const r = p === 3 ? '8–10' : repI(p);
  return { name, sets: [W(r), W(r), W(r), ...(max ? [M(r)] : [])], groupId: '', role: '' };
}
// A superset pair (two isolations, alternated).
function pair(a: string, b: string, p: number): SeedExercise[] {
  const id = gid(), r = repI(p);
  return [
    { name: a, sets: [W(r), W(r), W(r)], groupId: id, role: 'superset' },
    { name: b, sets: [W(r), W(r), W(r)], groupId: id, role: 'superset' },
  ];
}
const sess = (
  sessionId: string, name: string, priority: number,
  cardioPos: 'top' | 'bottom' | 'none', blocks: SeedExercise[][]
): SeedSession => ({ sessionId, name, priority, cardioPos, exercises: ([] as SeedExercise[]).concat(...blocks) });

/* ---------- full-body tiers ---------- */

function fbBeginner(p: number): SeedSession[] {
  return [
    sess('bg' + p + 'a', 'Lower body', 1, 'top', [
      [compound('Leg Press', p, true)],
      [iso('Seated Leg Curl', p)],
      pair('Leg Extension', 'Standing Calf Raise', p),
    ]),
    sess('bg' + p + 'b', 'Upper body', 1, 'none', [
      [compound('Chest Press Machine', p, true)],
      [compound('Lat Pulldown', p)],
      pair('Shoulder Press Machine', 'Seated Cable Row', p),
      pair('Triceps Pushdown', 'Biceps Curl', p),
    ]),
    sess('bg' + p + 'c', 'Full-body pump', 2, 'bottom', [
      pair('Goblet Squat', 'Chest-supported Row', p),
      pair('Lateral Raise', 'Cable Crunch', p),
    ]),
  ];
}

function fbIntermediate(p: number): SeedSession[] {
  return [
    sess('in' + p + 'a', 'Legs', 1, 'top', [
      [compound('Back Squat', p, true)],
      [compound('Romanian Deadlift', p)],
      pair('Walking Lunge', 'Seated Leg Curl', p),
      [iso('Standing Calf Raise', p)],
    ]),
    sess('in' + p + 'b', 'Push + Pull', 1, 'none', [
      [compound('Flat Barbell Bench', p, true)],
      [compound('Pendlay Row', p)],
      pair('Seated Overhead Press', 'Lat Pulldown', p),
      pair('Triceps Pushdown', 'DB Curl', p),
    ]),
    sess('in' + p + 'c', 'Full-body pump', 2, 'bottom', [
      pair('Incline DB Press', 'Single-arm DB Row', p),
      pair('Lateral Raise', 'Hammer Curl', p),
      [iso('Hanging Leg Raise', p)],
    ]),
  ];
}

/* ---------- split tiers (push / pull / legs) ---------- */

function splitAdvanced(p: number): SeedSession[] {
  return [
    sess('ad' + p + 'a', 'Push', 1, 'none', [
      [compound('Flat Barbell Bench', p, true)],
      [compound('Seated Overhead Press', p)],
      pair('Incline DB Press', 'Lateral Raise', p),
      [iso('Triceps Pushdown', p)],
    ]),
    sess('ad' + p + 'b', 'Pull', 1, 'top', [
      [compound('Weighted Pull-up', p, true)],
      [compound('Pendlay Row', p)],
      pair('Chest-supported Row', 'Face Pull', p),
      [iso('Barbell Curl', p)],
    ]),
    sess('ad' + p + 'c', 'Legs', 1, 'bottom', [
      [compound('Back Squat', p, true)],
      [compound('Romanian Deadlift', p)],
      pair('Leg Press', 'Lying Leg Curl', p),
      [iso('Seated Calf Raise', p)],
    ]),
    sess('ad' + p + 'd', 'Arms + delts pump', 2, 'none', [
      pair('Cable Lateral Raise', 'Reverse Pec Deck', p),
      pair('Overhead Rope Ext', 'Cable Curl', p),
    ]),
  ];
}

function splitElite(p: number): SeedSession[] {
  // Advanced split, re-id'd to the elite template, plus an extra weak-point day.
  const base = splitAdvanced(p).map((s) => ({ ...s, sessionId: 'el' + s.sessionId.slice(2) }));
  base.push(sess('el' + p + 'e', 'Upper (weak-point)', 2, 'none', [
    [compound('Incline Barbell Bench', p)],
    [compound('Chest-supported Row', p)],
    pair('DB Lateral Raise', 'Rear-delt Fly', p),
    pair('Skull Crusher', 'Incline DB Curl', p),
  ]));
  return base;
}

export function buildSeed(tier: string): SeedPhases {
  const f = tier === 'beginner' ? fbBeginner
    : tier === 'intermediate' ? fbIntermediate
    : tier === 'advanced' ? splitAdvanced
    : splitElite;
  return { 1: f(1), 2: f(2), 3: f(3) };
}
