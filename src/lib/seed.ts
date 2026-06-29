// 12WP starter programs — four tiers x three BIASES (4-week blocks), authored
// from the rated library (exercises.data.ts) via a parallel author->verify workflow.
// Beginner/Intermediate: full-body, RANKED priority — B1 capacity (full-body
// compound x2 + peripheral/central iso), B2 tension (bilateral + unilateral
// push/pull), B3 power (upper/lower power + push/pull, + timed circuits).
// Advanced/Elite: FLAT-priority split — B1/B2 = Legs1/Legs2/Press/Row (same shells,
// capacity vs tension reps), B3 = full-body Power/Capacity/Tension.
// Intermediate = Beginner + harder variants; Elite = Advanced + harder variants.
// Rep bands: high 10-15 / med 8-12 / low 3-8. Power = explosive intent (no plyos).
// Cardio sits FIRST on any leg session. Starter programming — edit freely.

export type SeedSet = { type: 'R' | 'W' | 'M'; target: string; unit?: 'reps' | 'secs' };
export type SeedExercise = { name: string; sets: SeedSet[]; groupId?: string; role?: string; rir?: string; coachCue?: string };
export type SeedSession = { sessionId: string; name: string; priority: number; cardioPos: 'top' | 'bottom' | 'none'; exercises: SeedExercise[] };
export type SeedPhases = { 1: SeedSession[]; 2: SeedSession[]; 3: SeedSession[] };

type RawEx = { name: string; group: string; role: string; rir: string; coachCue: string; sets: SeedSet[] };
type RawSession = { name: string; priority: number; cardioPos: 'top' | 'bottom' | 'none'; exercises: RawEx[] };

const PROGRAMS: Record<string, Record<string, RawSession[]>> = {
  "beginner": {
    "1": [
      {
        "name": "Full Body A",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Knees track over toes, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Chest Press",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Drive handles together, full lockout",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Cable Row (Neutral Grip)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pull to belly, squeeze shoulder blades",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Shoulder Press",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Press tall, don't shrug",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Lat Pulldown",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with elbows, chest up",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze hard at the top",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body B",
        "priority": 2,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Dumbbell Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hinge at hips, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Goblet Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Chest proud, sit between the knees",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Machine Press",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Press up and slightly in",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Drive elbows back, no momentum",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Curl heels to glutes, control the return",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at bottom, pause at top",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Peripheral Iso",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Machine Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbows, control down",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze rear delts, thumbs down",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Preacher Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Elbows in, reach long overhead",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rope Hammer Curl",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Neutral grip, no swinging",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Rope Pushdown",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Spread the rope at lockout",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Deep stretch, slow tempo",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Central Iso",
        "priority": 4,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Squeeze glutes hard, ribs down",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "45° Hyperextension",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Round up one vertebra at a time",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Hip Abduction Machine",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean forward slightly, push knees out",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Crunch with the abs, not the hips",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Hanging Knee Raise",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Curl the pelvis up, no swing",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Resist the rotation, brace hard",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Bilateral Push",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Deep, controlled, drive through mid-foot",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Chest Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Big chest, smooth press",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press tall, full lockout",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Triceps Extension (Seated Dip/Press Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full lockout each rep",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Slow on the way down",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Bilateral Pull",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Trap Bar Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Flat back, push the floor away",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Neutral-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drive elbows to ribs, chest up",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze blades, no body english",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Chest-Supported Dumbbell Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the pinkies",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Unilateral Push",
        "priority": 2,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Static Split Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drop straight down, front heel planted",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Control the stretch, press evenly",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Dumbbell Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Slight leg drive, press one to lockout",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Dumbbell Kickback",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lock the elbow, squeeze the tricep",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Dumbbell Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pour the water, no swing",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Unilateral Pull",
        "priority": 2,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Single-Leg Hip Thrust",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hip extension, squeeze each rep",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Pull to the hip, big stretch at the bottom",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Underhand Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive elbows down and back",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Dumbbell Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "No swing, full squeeze at the top",
            "sets": [
              {
                "type": "W",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Face Pull",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pull to the eyes, externally rotate",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Upper Power",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Machine Chest Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Explosive press up, control the lower",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Machine Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drive elbows back fast, control the return",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Punch up with intent",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Fast pull to chest, controlled stretch",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Dumbbell Farmer's Carry",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Tall and braced, walk with purpose",
            "sets": [
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              }
            ]
          },
          {
            "name": "Sled Push",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive hard, short fast steps",
            "sets": [
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              }
            ]
          }
        ]
      },
      {
        "name": "Lower Power",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Controlled down, drive up explosively",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Trap Bar Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Push the floor away fast, flat back",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explosive press, no lockout slam",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Snap the curl, control the return",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Full stretch, drive up",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Sled Push",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Low and hard, fast short steps",
            "sets": [
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              }
            ]
          }
        ]
      },
      {
        "name": "Push",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Incline Machine Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Big stretch, press up and in",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Control the stretch, press to lockout",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Deep stretch, squeeze the chest",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Constant tension, slow descent",
            "sets": [
              {
                "type": "W",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Machine Extension (Loaded-Stretch Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead, hard lockout",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Pull",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Wide-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Chest up, drive elbows down",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Converging Plate-Loaded Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Squeeze the blades, control the stretch",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Machine Pullover",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Reach long, pull with the lats",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze rear delts, thumbs down",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ]
  },
  "intermediate": {
    "1": [
      {
        "name": "Full Body A",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Knees track over toes, deep and controlled",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Stretch at the bottom, press up and in",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pull to belly, dead stop each rep",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Press tall, don't shrug",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Neutral-Grip Pull-Up",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with elbows, full stretch at the bottom",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Reclined for the stretch, squeeze hard at the top",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Curl heels to glutes, control the return",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body B",
        "priority": 2,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hinge at hips, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drop straight down, big stretch on the front leg",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Barbell Bench Press",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Touch high, press up and slightly in",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Drive elbows back, no momentum",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Lying Leg Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Curl hard, control the negative",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Deep stretch at bottom, pause at top",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Peripheral Iso",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Constant tension, lead with the elbow",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze rear delts, pull across the body",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Hang back for the stretch, full range",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Elbows in, reach long overhead",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rope Hammer Curl",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Neutral grip, no swinging",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Rope Pushdown",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Spread the rope at lockout",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Deep stretch, slow tempo",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Central Iso",
        "priority": 4,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Squeeze glutes hard, ribs down",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "45° Hyperextension",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Round up one vertebra at a time",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Hip Abduction Machine",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean forward slightly, push knees out",
            "sets": [
              {
                "type": "R",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Crunch with the abs, not the hips",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Hanging Leg Raise",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Curl the pelvis up, no swing",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Ab Wheel Rollout",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Brace hard, don't let the hips sag",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Bilateral Push",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Deep, controlled, drive through mid-foot",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Big chest, smooth controlled press",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press tall, full lockout",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension (Seated/Standing)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead, hard lockout",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Constant tension, slow on the way down",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Bilateral Pull",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Trap Bar Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Flat back, push the floor away",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Neutral-Grip Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full stretch at the bottom, drive elbows to ribs",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze blades, no body english",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Chest-Supported Dumbbell Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the pinkies",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Unilateral Push",
        "priority": 2,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drop straight down, front heel planted",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Control the stretch, press evenly",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Arnold Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Rotate through, press to lockout",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Single-Arm Overhead Cable Extension",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Reach long, lock the elbow out",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Lean-Away Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean out for the stretch, no swing",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Unilateral Pull",
        "priority": 2,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "B-Stance Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hinge over the working leg, feel the stretch",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Pull to the hip, big stretch at the bottom",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Underhand Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive elbows down and back",
            "sets": [
              {
                "type": "R",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Hang back for the stretch, full squeeze",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Face Pull",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pull to the eyes, externally rotate",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Upper Power",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Explosive press up, control the lower",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Bent-Over Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drive elbows back fast, control the return",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Punch up with intent",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pull-Up",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Fast pull to chest, controlled stretch",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Farmer's Walk (Handles)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Tall and braced, walk with purpose",
            "sets": [
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              }
            ]
          },
          {
            "name": "Sled Push",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive hard, short fast steps",
            "sets": [
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              }
            ]
          }
        ]
      },
      {
        "name": "Lower Power",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Controlled down, drive up explosively",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Trap Bar Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Push the floor away fast, flat back",
            "sets": [
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "5-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-6",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-6",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explosive press, no lockout slam",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Snap the curl, control the return",
            "sets": [
              {
                "type": "R",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "5-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "5-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Full stretch, drive up",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Sled Push",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Low and hard, fast short steps",
            "sets": [
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              }
            ]
          }
        ]
      },
      {
        "name": "Push",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Big stretch, press up and in",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Control the stretch, press to lockout",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Deep stretch, squeeze the chest",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Constant tension, slow descent",
            "sets": [
              {
                "type": "W",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Dumbbell Overhead Extension (Two-Hand, Seated)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead, hard lockout",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Pull",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Wide-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Chest up, drive elbows down",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Squeeze the blade, control the stretch",
            "sets": [
              {
                "type": "R",
                "target": "8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "6-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "6-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Dumbbell Pullover",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Reach long, pull with the lats",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Hang back for the stretch, full range",
            "sets": [
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-10",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-10",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze rear delts, thumbs down",
            "sets": [
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "12-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "12-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ]
  },
  "advanced": {
    "1": [
      {
        "name": "Legs 1",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full depth, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Knees track over toes",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stride, drive through heel",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pause at lockout, slow eccentric",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Big stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Full ROM, pause up top",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Legs 2",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hips back, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze hard, slow the negative",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Chin tucked, full lockout squeeze",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Glute-Ham Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Control all the way down",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Deep stretch, full contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Press",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Stretch at the bottom, drive up",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lean forward, deep stretch",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press to lockout, control down",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze the pecs, hold the contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbow, no swing",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Skullcrusher to Behind Head (EZ Bar)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Reach back, keep elbows in",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Row",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hang, pull chest to bar",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull to lower chest, no momentum",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stretch, drive elbow back",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Pullover",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Long lat stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean away, stretch behind body",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Legs 1",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full depth, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Knees track over toes",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stride, drive through heel",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pause at lockout, slow eccentric",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Big stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Full ROM, pause up top",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Legs 2",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hips back, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze hard, slow the negative",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Chin tucked, full lockout squeeze",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Glute-Ham Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Control all the way down",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Deep stretch, full contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Press",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Stretch at the bottom, drive up",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lean forward, deep stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press to lockout, control down",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze the pecs, hold the contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbow, no swing",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Skullcrusher to Behind Head (EZ Bar)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Reach back, keep elbows in",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Row",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hang, pull chest to bar",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull to lower chest, no momentum",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stretch, drive elbow back",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Pullover",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Long lat stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean away, stretch behind body",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Full Body Power",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Explode up, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drive the bar fast off the chest",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Bent-Over Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Powerful pull, controlled lower",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hinge with intent, snap the hips",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press fast, brace the core",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Farmer's Walk (Handles)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Heavy, tall, fast steps",
            "sets": [
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              }
            ]
          },
          {
            "name": "Ab Wheel Rollout",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Brace hard, full extension",
            "sets": [
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body Capacity",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full depth, smooth tempo",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Stretch at the bottom, drive up",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull to the chest, full stretch up top",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze hard, slow negative",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pause at lockout",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbow",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body Tension",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hips back, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lean forward, deep stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hang, pull chest to bar",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stride, drive through heel",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press to lockout, control down",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Full ROM, pause up top",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean away, stretch behind body",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ]
  },
  "elite": {
    "1": [
      {
        "name": "Legs 1",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Pendulum Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full depth, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Knees track over toes",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Smith Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stride, drive through heel",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pause at lockout, slow eccentric",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Big stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Deep stretch, pause up top",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Legs 2",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Stiff-Leg Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hips back, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze hard, slow the negative",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Chin tucked, full lockout squeeze",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Nordic Hamstring Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Resist hard, control all the way down",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Deep stretch, full contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Press",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Deep-Stretch Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Stretch at the bottom, drive up",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lean forward, deep stretch",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press to lockout, control down",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze the pecs, hold the contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Behind-the-Body Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbow, no swing",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension (Seated/Standing)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Skullcrusher to Behind Head (EZ Bar)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Reach back, keep elbows in",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Row",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hang, pull chest to bar",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull to lower chest, no momentum",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Meadows Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stretch, drive elbow back",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Pullover",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Long lat stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean away, stretch behind body",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Legs 1",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Pendulum Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full depth, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Press (45-degree)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Knees track over toes",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Smith Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stride, drive through heel",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pause at lockout, slow eccentric",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Big stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Deep stretch, pause up top",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Legs 2",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Stiff-Leg Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hips back, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Squeeze hard, slow the negative",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Chin tucked, full lockout squeeze",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Nordic Hamstring Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Resist hard, control all the way down",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Deep stretch, full contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Press",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Deep-Stretch Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Stretch at the bottom, drive up",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lean forward, deep stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press to lockout, control down",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze the pecs, hold the contraction",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Behind-the-Body Cable Lateral Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbow, no swing",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension (Seated/Standing)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Skullcrusher to Behind Head (EZ Bar)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Reach back, keep elbows in",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Row",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hang, pull chest to bar",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull to lower chest, no momentum",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Meadows Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stretch, drive elbow back",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Pullover",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Long lat stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean away, stretch behind body",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Full Body Power",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Front Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Explode up, control the descent",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Drive the bar fast off the chest",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Pendlay Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Powerful pull, controlled lower",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Snatch-Grip Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hinge with intent, snap the hips",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press fast, brace the core",
            "sets": [
              {
                "type": "R",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "3-8",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "3-8",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Farmer's Walk (Handles)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Heavy, tall, fast steps",
            "sets": [
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "40",
                "unit": "secs"
              }
            ]
          },
          {
            "name": "Ab Wheel Rollout",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Brace hard, full extension",
            "sets": [
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              },
              {
                "type": "W",
                "target": "30",
                "unit": "secs"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body Capacity",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Pendulum Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full depth, smooth tempo",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Deep-Stretch Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Stretch at the bottom, drive up",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Neutral-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull to the chest, full stretch up top",
            "sets": [
              {
                "type": "R",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Squeeze hard, slow negative",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Leg Extension (Reclined / Stretch-Bias)",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Pause at lockout",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Behind-the-Body Cable Lateral Raise",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lead with the elbow",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension (Seated/Standing)",
            "group": "g3",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body Tension",
        "priority": 1,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Stiff-Leg Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hips back, feel the hamstring stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lean forward, deep stretch",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full hang, pull chest to bar",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Smith Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Long stride, drive through heel",
            "sets": [
              {
                "type": "R",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Press to lockout, control down",
            "sets": [
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "8-12",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "8-12",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Wide arc, squeeze rear delts",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "g1",
            "role": "superset",
            "rir": "",
            "coachCue": "Deep stretch, pause up top",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Lean away, stretch behind body",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension (Seated/Standing)",
            "group": "g2",
            "role": "superset",
            "rir": "",
            "coachCue": "Full stretch overhead",
            "sets": [
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "W",
                "target": "10-15",
                "unit": "reps"
              },
              {
                "type": "M",
                "target": "10-15",
                "unit": "reps"
              }
            ]
          }
        ]
      }
    ]
  }
};

const PREFIX: Record<string, string> = { beginner: 'be', intermediate: 'in', advanced: 'ad', elite: 'el' };
let _g = 0;
function toSession(raw: RawSession, tier: string, phase: number, idx: number): SeedSession {
  let curLabel = '\u0000', curGid = '';
  const exercises: SeedExercise[] = raw.exercises.map((e) => {
    let groupId = '';
    if (e.group) { if (e.group !== curLabel) { curGid = 'sg' + (++_g); curLabel = e.group; } groupId = curGid; } else { curLabel = '\u0000'; }
    return { name: e.name, sets: e.sets, groupId, role: e.role || '', rir: e.rir || '', coachCue: e.coachCue || '' };
  });
  return { sessionId: PREFIX[tier] + phase + String.fromCharCode(97 + idx), name: raw.name, priority: raw.priority, cardioPos: raw.cardioPos, exercises };
}
export function buildSeed(tier: string): SeedPhases {
  const p = PROGRAMS[tier] || {};
  return { 1: (p['1'] || []).map((s, i) => toSession(s, tier, 1, i)), 2: (p['2'] || []).map((s, i) => toSession(s, tier, 2, i)), 3: (p['3'] || []).map((s, i) => toSession(s, tier, 3, i)) };
}
