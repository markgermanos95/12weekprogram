// Faithful port of buildSeed_() from Code.gs (Apps Script). Same program
// data, same nested shape: sessions -> blocks (single/superset) -> items -> sets.

export type SeedSet = { type: 'R' | 'W' | 'M'; target: string };
export type SeedItem = { exId?: string; name: string; sets: SeedSet[] };
export type SeedBlock = { kind: 'single' | 'superset'; items: SeedItem[] };
export type SeedSession = {
  sessionId: string; name: string; priority: number;
  cardioPos: 'top' | 'bottom' | 'none'; blocks: SeedBlock[];
};

export function buildSeed(): { 1: SeedSession[]; 2: SeedSession[] } {
  const R = (t: string): SeedSet => ({ type: 'R', target: t });
  const W = (t: string): SeedSet => ({ type: 'W', target: t });
  const M = (t: string): SeedSet => ({ type: 'M', target: t });
  const single = (name: string, sets: SeedSet[]): SeedBlock => ({ kind: 'single', items: [{ name, sets }] });
  const ss = (items: SeedItem[]): SeedBlock => ({ kind: 'superset', items });

  const P1 = [
    { sessionId: 'p1a', name: 'Legs', priority: 1, cardioPos: 'top', blocks: [
      single('Leg Press', [R('~50% × 8'), R('~70% × 6'), W('12–15'), W('12–15'), W('12–15'), M('12–15')]),
      ss([
        { name: 'Romanian Deadlift', sets: [R('light × 8'), W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Seated Leg Curl', sets: [W('12–15'), W('12–15'), W('12–15')] }
      ]),
      single('Walking Lunge', [W('12–15'), W('12–15'), W('12–15')]),
      single('Standing Calf Raise', [W('15–20'), W('15–20'), W('15–20'), M('15–20')])
    ]},
    { sessionId: 'p1b', name: 'Push + Pull', priority: 1, cardioPos: 'none', blocks: [
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
    ]},
    { sessionId: 'p1c', name: 'Full-body Pump', priority: 2, cardioPos: 'bottom', blocks: [
      single('Goblet Squat', [R('light × 8'), W('12–15'), W('12–15'), W('12–15')]),
      ss([
        { name: 'Chest-supported Row', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Push-up', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Lateral Raise', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Hammer Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ])
    ]},
    { sessionId: 'p1e', name: 'Compound Pump', priority: 3, cardioPos: 'none', blocks: [
      ss([
        { name: 'Leg Press', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Lying Leg Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Chest Press Machine', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Lat Pulldown', sets: [W('12–15'), W('12–15'), W('12–15')] }
      ]),
      single('Romanian Deadlift', [W('12–15'), W('12–15'), W('12–15')])
    ]},
    { sessionId: 'p1d', name: 'Isolation Pump', priority: 4, cardioPos: 'none', blocks: [
      ss([
        { name: 'Pec Deck', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Reverse Pec Deck', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      ss([
        { name: 'Overhead Rope Ext', sets: [W('15–20'), W('15–20'), W('15–20')] },
        { name: 'Cable Curl', sets: [W('15–20'), W('15–20'), W('15–20')] }
      ]),
      single('Cable Crunch', [W('15–20'), W('15–20'), W('15–20')])
    ]}
  ];

  const P2 = [
    { sessionId: 'p2a', name: 'Legs', priority: 1, cardioPos: 'top', blocks: [
      single('Back Squat', [R('bar × 8'), R('60% × 5'), W('8–10'), W('8–10'), W('8–10'), M('8–10')]),
      ss([
        { name: 'Bulgarian Split Squat', sets: [R('light × 6'), W('8–10'), W('8–10'), W('8–10')] },
        { name: 'Lying Leg Curl', sets: [W('8–10'), W('8–10'), W('8–10')] }
      ]),
      single('Barbell Hip Thrust', [W('8–10'), W('8–10'), W('8–10')]),
      single('Seated Calf Raise', [W('12–15'), W('12–15'), W('12–15'), M('12–15')])
    ]},
    { sessionId: 'p2b', name: 'Push + Pull', priority: 1, cardioPos: 'none', blocks: [
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
    ]},
    { sessionId: 'p2c', name: 'Full-body Pump', priority: 2, cardioPos: 'bottom', blocks: [
      single('Trap-bar Deadlift', [R('light × 6'), W('8–10'), W('8–10'), W('8–10')]),
      ss([
        { name: 'Incline Machine Press', sets: [W('8–10'), W('8–10'), W('8–10')] },
        { name: 'Single-arm DB Row', sets: [W('8–10'), W('8–10'), W('8–10')] }
      ]),
      ss([
        { name: 'Cable Lateral Raise', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Incline DB Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ])
    ]},
    { sessionId: 'p2e', name: 'Compound Pump', priority: 3, cardioPos: 'none', blocks: [
      ss([
        { name: 'Hack Squat', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Lying Leg Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ]),
      ss([
        { name: 'Incline Machine Press', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Chest-supported Row', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ]),
      single('Weighted Pull-up', [W('8–10'), W('8–10'), W('8–10')])
    ]},
    { sessionId: 'p2d', name: 'Isolation Pump', priority: 4, cardioPos: 'none', blocks: [
      ss([
        { name: 'Cable Lateral Raise', sets: [W('12–15'), W('12–15'), W('12–15')] },
        { name: 'Reverse Pec Deck', sets: [W('12–15'), W('12–15'), W('12–15')] }
      ]),
      ss([
        { name: 'Rope Pushdown', sets: [W('10–12'), W('10–12'), W('10–12')] },
        { name: 'Preacher Curl', sets: [W('10–12'), W('10–12'), W('10–12')] }
      ]),
      single('Hanging Leg Raise', [W('10–15'), W('10–15'), W('10–15')])
    ]}
  ];

  return { 1: P1, 2: P2 } as { 1: SeedSession[]; 2: SeedSession[] };
}
