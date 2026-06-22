// Faithful port of buildSeed_() from Code.gs (Apps Script), updated to the
// flat exercise model: each session has an ordered exercises[]; supersets are
// just consecutive exercises that share a groupId and carry role 'superset'.

export type SeedSet = { type: 'R' | 'W' | 'M'; target: string };
export type SeedExercise = { name: string; sets: SeedSet[]; groupId?: string; role?: string };
export type SeedSession = {
  sessionId: string; name: string; priority: number;
  cardioPos: 'top' | 'bottom' | 'none'; exercises: SeedExercise[];
};

export function buildSeed(): { 1: SeedSession[]; 2: SeedSession[] } {
  const R = (t: string): SeedSet => ({ type: 'R', target: t });
  const W = (t: string): SeedSet => ({ type: 'W', target: t });
  const M = (t: string): SeedSet => ({ type: 'M', target: t });

  let g = 0;
  const gid = () => 'sg' + (++g);
  // single(): one standalone exercise. ss(): a superset group (>=2 exercises
  // sharing a fresh groupId, role 'superset'). Both return arrays so a session
  // is just the concatenation of its blocks into one flat exercises[].
  const single = (name: string, sets: SeedSet[]): SeedExercise[] => [{ name, sets, groupId: '', role: '' }];
  const ss = (items: { name: string; sets: SeedSet[] }[]): SeedExercise[] => {
    const id = gid();
    return items.map((it) => ({ name: it.name, sets: it.sets, groupId: id, role: 'superset' }));
  };
  const sess = (
    sessionId: string, name: string, priority: number,
    cardioPos: 'top' | 'bottom' | 'none', blocks: SeedExercise[][]
  ): SeedSession => ({ sessionId, name, priority, cardioPos, exercises: ([] as SeedExercise[]).concat(...blocks) });

  const P1 = [
    sess('p1a', 'Legs', 1, 'top', [
      single('Leg Press', [R('~50% × 8'), R('~70% × 6'), W('12–15'), W('12–15'), W('12–15'), M('12–15')]),
      ss([
        { name: 'Romanian Deadlift', sets: [R('light × 8'), W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Seated Leg Curl', sets: [W('12–15'), W('12–15'), W('12–15')] }
      ]),
      single('Walking Lunge', [W('12–15'), W('12–15'), W('12–15')]),
      single('Standing Calf Raise', [W('15–20'), W('15–20'), W('15–20'), M('15–20')])
    ]),
    sess('p1b', 'Push + Pull', 1, 'none', [
      single('Incline DB Press', [R('light × 8'), W('12–15'), W('12–15'), W('12–15'), M('12–15')]),
      single('Lat Pulldown', [R('light × 8'), W('12–15'), W('12–15'), W('12–15')]),
      ss([
        { name: 'Cable Fly', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Face Pull', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Triceps Pushdown', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'DB Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ])
    ]),
    sess('p1c', 'Full-body Pump', 2, 'bottom', [
      single('Goblet Squat', [R('light × 8'), W('12–15'), W('12–15'), W('12–15')]),
      ss([
        { name: 'Chest-supported Row', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Push-up', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Lateral Raise', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Hammer Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ])
    ]),
    sess('p1e', 'Compound Pump', 3, 'none', [
      ss([
        { name: 'Leg Press', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Lying Leg Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Chest Press Machine', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Lat Pulldown', sets: [W('12–15'), W('12–15'), W('12–15')] }
      ]),
      single('Romanian Deadlift', [W('12–15'), W('12–15'), W('12–15')])
    ]),
    sess('p1d', 'Isolation Pump', 4, 'none', [
      ss([
        { name: 'Pec Deck', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Reverse Pec Deck', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Overhead Rope Ext', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Cable Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      single('Cable Crunch', [W('15–20'), W('15–20'), W('15–20')])
    ])
  ];

  const P2 = [
    sess('p2a', 'Legs', 1, 'top', [
      single('Back Squat', [R('bar × 8'), R('60% × 5'), W('8–10'), W('8–10'), W('8–10'), M('8–10')]),
      ss([
        { name: 'Bulgarian Split Squat', sets: [R('light × 6'), W('8–10'), W('8–10'), W('8–10')] },
        { name: 'Lying Leg Curl', sets: [W('8–10'), W('8–10'), W('8–10')] }
      ]),
      single('Barbell Hip Thrust', [W('8–10'), W('8–10'), W('8–10')]),
      single('Seated Calf Raise', [W('12–15'), W('12–15'), W('12–15'), M('12–15')])
    ]),
    sess('p2b', 'Push + Pull', 1, 'none', [
      single('Flat Barbell Bench', [R('bar × 8'), R('60% × 5'), W('8–10'), W('8–10'), W('8–10'), M('8–10')]),
      single('Pendlay Row', [R('light × 6'), W('8–10'), W('8–10'), W('8–10')]),
      ss([
        { name: 'Seated Overhead Press', sets: [W('8–10'), W('8–10'), W('8–10')] },
        { name: 'Chest-supported Cable Row', sets: [W('8–10'), W('8–10'), W('8–10')] }
      ]),
      ss([
        { name: 'Skull Crusher', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Barbell Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ])
    ]),
    sess('p2c', 'Full-body Pump', 2, 'bottom', [
      single('Trap-bar Deadlift', [R('light × 6'), W('8–10'), W('8–10'), W('8–10')]),
      ss([
        { name: 'Incline Machine Press', sets: [W('8–10'), W('8–10'), W('8–10')] },
        { name: 'Single-arm DB Row', sets: [W('8–10'), W('8–10'), W('8–10')] }
      ]),
      ss([
        { name: 'Cable Lateral Raise', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Incline DB Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ])
    ]),
    sess('p2e', 'Compound Pump', 3, 'none', [
      ss([
        { name: 'Hack Squat', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Lying Leg Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ]),
      ss([
        { name: 'Incline Machine Press', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Chest-supported Row', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ]),
      single('Weighted Pull-up', [W('8–10'), W('8–10'), W('8–10')])
    ]),
    sess('p2d', 'Isolation Pump', 4, 'none', [
      ss([
        { name: 'Cable Lateral Raise', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Reverse Pec Deck', sets: [W('12–15'), W('12–15'), W('12–15')] }
      ]),
      ss([
        { name: 'Rope Pushdown', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Preacher Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ]),
      single('Hanging Leg Raise', [W('10–15'), W('10–15'), W('10–15')])
    ])
  ];

  return { 1: P1, 2: P2 };
}