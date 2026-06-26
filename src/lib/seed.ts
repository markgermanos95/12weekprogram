// 12WP starter programs — four tiers x three phases, SELECTED from the rated
// exercise library (src/lib/exercises.data.ts) via a library-driven
// author->critique->revise workflow + head-coach holistic pass + escalation fixes.
// Beginner/Intermediate full-body (P1 compounds / P2 secondary / P3 limbs /
// P4 torso-hips); Advanced Legs + Push+Pull (both P1) + P2 + P3; Elite First-Fourth
// fully hybrid. Phases: P1 hypertrophy, P2 strength, P3 power (character escalating
// by tier). Every pick is library-rated and tier-gated. Draft programming - edit freely.

export type SeedSet = { type: 'R' | 'W' | 'M'; target: string };
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
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Machine Chest Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Machine Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body B",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Dumbbell Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Incline Machine Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Machine Shoulder Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Seated Cable Row (Neutral Grip)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body C",
        "priority": 3,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Machine Lateral Raise",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body D",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Machine Hip Thrust",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Machine Crunch",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Anti-rotation hold: resist the twist, brace hard, 3s pause each rep.",
            "sets": [
              {
                "type": "W",
                "target": "10–12 each side"
              },
              {
                "type": "W",
                "target": "10–12 each side"
              }
            ]
          },
          {
            "name": "Horizontal Back Extension",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Full Body A",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Machine Chest Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Machine Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body B",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Dumbbell Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Incline Machine Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Machine Shoulder Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seated Cable Row (Neutral Grip)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body C",
        "priority": 3,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Machine Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body D",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Machine Hip Thrust",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Anti-rotation hold: heavier load this phase, brace and resist the twist, 3s pause.",
            "sets": [
              {
                "type": "W",
                "target": "8–10 each side"
              },
              {
                "type": "W",
                "target": "8–10 each side"
              }
            ]
          },
          {
            "name": "Horizontal Back Extension",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Full Body A",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "3",
            "coachCue": "Learn the bar - light and controlled, perfect reps; leave ~3 in reserve.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "3",
            "coachCue": "Learn the bar - light and controlled, perfect reps; leave ~3 in reserve.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Machine Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explosive pull: snap the bar down hard and fast, control it back up. Keep every rep sharp.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "",
            "role": "",
            "rir": "3",
            "coachCue": "Learn the bar - light and controlled, perfect reps; leave ~3 in reserve.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body B",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Dumbbell Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explosive hip snap: slow stretch down, then drive the hips through fast to lockout. Keep the back flat.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Dumbbell Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Dip and drive: use the legs to launch the dumbbells overhead fast, control them down. Pure speed, light load.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              }
            ]
          },
          {
            "name": "Incline Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "3",
            "coachCue": "Learn the bar - light and controlled, perfect reps; leave ~3 in reserve.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Seated Cable Row (Neutral Grip)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explosive row: snap the handle to the stomach fast, slow return. Keep reps crisp.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body C",
        "priority": 3,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Machine Lateral Raise",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body D",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Jump Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Light dumbbells: sink to a quarter squat and jump as high as you can. Land soft, reset each rep. All-out speed.",
            "sets": [
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              }
            ]
          },
          {
            "name": "Machine Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explosive lockout: drive the hips up fast and hard, control the descent. Squeeze at the top.",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Machine Crunch",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Anti-rotation hold: brace and resist the twist, 3s pause each rep.",
            "sets": [
              {
                "type": "W",
                "target": "10–12 each side"
              },
              {
                "type": "W",
                "target": "10–12 each side"
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
        "name": "Lower A — Squat Pattern",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Control the stretch — feel the hamstrings load",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Pendulum Squat",
            "group": "sup-quad",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "sup-quad",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Pause the stretch, full squeeze at top",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper A — Push",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Incline Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Lean forward, deep bottom stretch",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Brace hard, drive the bar to a locked-out overhead",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Machine Lateral Raise",
            "group": "sup-push",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "sup-push",
            "role": "superset",
            "rir": "1",
            "coachCue": "Full overhead stretch each rep",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Lower B — Hinge & Posterior",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Pause and squeeze hard at lockout",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Torso forward, sink into the front-leg stretch",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "45° Hyperextension",
            "group": "sup-post",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Leg Extension",
            "group": "sup-post",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Pause the stretch every rep",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper B — Pull & Arms",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full stretch at the bottom, drive elbows back",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Neutral-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "sup-arm",
            "role": "superset",
            "rir": "1",
            "coachCue": "Let the arm hang back into full stretch",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "sup-arm",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Lead with the elbow, constant tension",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Lower A — Squat Pattern",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "5–6"
              },
              {
                "type": "W",
                "target": "5–6"
              },
              {
                "type": "M",
                "target": "5–6"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Load the stretch, no bounce",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Hack Squat (Machine)",
            "group": "sup-quad",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "sup-quad",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Pause the bottom stretch",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper A — Push",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "5–6"
              },
              {
                "type": "W",
                "target": "5–6"
              },
              {
                "type": "M",
                "target": "5–6"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Deep stretch at the bottom",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Press to a hard lockout, control the negative",
            "sets": [
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Lean-Away Lateral Raise",
            "group": "sup-push",
            "role": "superset",
            "rir": "1",
            "coachCue": "Lean away, stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Skullcrusher (EZ Bar, to forehead)",
            "group": "sup-push",
            "role": "superset",
            "rir": "1",
            "coachCue": "Lower past the forehead for the stretch",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Lower B — Hinge & Posterior",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Hard lockout squeeze, pause",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Smith Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Sink deep into the front-leg stretch",
            "sets": [
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Glute-Ham Raise",
            "group": "sup-post",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Leg Extension",
            "group": "sup-post",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Pause every stretch",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper B — Pull & Arms",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Bent-Over Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Strict torso angle, drive to the lower ribs",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Wide-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "EZ-Bar Preacher Curl",
            "group": "sup-arm",
            "role": "superset",
            "rir": "1",
            "coachCue": "Full lockout of the elbow at the stretch",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "sup-arm",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Constant tension, controlled",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Lower A — Squat Speed & Jumps",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Speed work ~55–65% — explode out of the hole, every rep fast",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3–5"
              },
              {
                "type": "W",
                "target": "3–5"
              },
              {
                "type": "W",
                "target": "3–5"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Controlled stretch, drive hips fast",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Pendulum Squat",
            "group": "sup-quad",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "sup-quad",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper A — Push Speed & Throws",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Speed bench ~55–65% — drive the bar up as fast as possible",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3–5"
              },
              {
                "type": "W",
                "target": "3–5"
              },
              {
                "type": "W",
                "target": "3–5"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Deep stretch, controlled down, fast up",
            "sets": [
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Seated Cable Fly (Chest-Supported)",
            "group": "sup-push",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "sup-push",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Full overhead stretch",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Lower B — Hinge Power & Swings",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Conventional Deadlift",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Submaximal — drive to lockout as explosively as possible",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Sink the stretch, drive up with intent",
            "sets": [
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "45° Hyperextension",
            "group": "sup-post",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Leg Extension",
            "group": "sup-post",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Pause the stretch",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper B — Pull Power & Arms",
        "priority": 2,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Seal Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full stretch, drive elbows back hard",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "W",
                "target": "8–10"
              },
              {
                "type": "M",
                "target": "8–10"
              }
            ]
          },
          {
            "name": "Neutral-Grip Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "sup-arm",
            "role": "superset",
            "rir": "1",
            "coachCue": "Full stretch at the bottom",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "sup-arm",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Constant tension",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
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
        "name": "Legs",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Brace hard against the bar, sit straight down between the hips, drive the floor away — full depth every rep.",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Push hips back, feel the hamstring stretch — bar stays close.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: double drop, strip ~25% and ~25% again, each to failure.",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Final set: rest-pause — failure, 15s breath, go again, twice.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: lengthened partials from the bottom stretch to failure.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Push + Pull",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Deep stretch at the bottom, drive through the clavicular chest.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Final set: lengthened partials from the stretched bottom to failure.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Full dead-hang stretch each rep; add belt load as reps climb.",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Brace the core, press in a tight arc to lockout — don't let the dumbbells drift forward.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "arms1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Step forward so the cable pulls the arm behind you — load the deep stretch on the long head, strict.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Overhead Cable Extension (Rope)",
            "group": "arms1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Reach long overhead for the stretch; superset straight off the curl.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper Volume (Back & Chest Focus)",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "T-Bar Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Chest pinned to the bench — pure lat/mid-back, no body english.",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Seated Cable Fly (Chest-Supported)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Final set: drop set — failure, lower the stack one pin, go again.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Cable Pullover",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Constant tension through the deep overhead stretch — drive with the lats, not the arms.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Cable Lean-Away Shrug",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Lean away from the stack for the loaded stretch — shrug straight up, no roll.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "delts1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Lead with the elbow, raise to shoulder height — control the lower, no swing.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "delts1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Superset off the laterals — squeeze rear delts, no momentum.",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms & Core Pump",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Incline Dumbbell Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Arms hang back for the stretch — don't swing the elbows forward.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "EZ-Bar Skullcrusher (Behind Head)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Lower behind the head for the long-head stretch; control the eccentric.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Rope Hammer Curl",
            "group": "arms2",
            "role": "superset",
            "rir": "0",
            "coachCue": "Neutral grip for the brachialis — pull the rope apart at the top.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Single-Arm Cable Pushdown",
            "group": "arms2",
            "role": "superset",
            "rir": "0",
            "coachCue": "Superset off the curl — lock the elbow, full squeeze.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Round the spine down, crunch the ribs to the pelvis.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Legs",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Heavier now — brace hard, sit between the hips, drive.",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Stiff-Leg Deadlift",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Knees near-locked, bar from the floor — longest hamstring range under load.",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Pendulum Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Final set: rest-pause — failure, short breath, push again twice.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Lying Leg Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: double drop, strip the stack twice, each to failure.",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: lengthened partials from full stretch to failure.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Push + Pull",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Incline Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Heavier and lower rep — tight arch, controlled touch, explode up.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Bent-Over Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Flat back, pull to the lower ribs — heavy and strict.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Weighted Chin-Up",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Add load — full stretch at the bottom, chin clears the bar.",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Strict press — brace, drive the bar past the forehead, lock out.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Preacher Curl (EZ)",
            "group": "arms1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Arms pinned to the pad — full stretch at the bottom, no bounce off the elbows.",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Close-Grip Bench Press",
            "group": "arms1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Heavy tricep press, superset off the preacher — elbows tucked.",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper Volume (Back & Chest Focus)",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Machine Row (Converging)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Converging path — drive elbows back, squeeze the mid-back hard.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Lean forward, sink deep for the sternal stretch; belt-load it.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–10"
              },
              {
                "type": "W",
                "target": "6–10"
              },
              {
                "type": "M",
                "target": "6–10"
              }
            ]
          },
          {
            "name": "Machine Pullover",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Final set: drop set — hold tension through the stretch, then strip and go.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Behind-Body Cable Lateral Raise",
            "group": "delts1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Cable behind the body for the deep stretch on the side delt.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "delts1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Superset off the laterals — wide arc, lead with the elbows.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms & Core Pump",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Spider Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Chest on the incline, arms vertical — strict peak squeeze.",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Deep overhead stretch on the long head; control the lower.",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "M",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Cable Rope Hammer Curl",
            "group": "arms2",
            "role": "superset",
            "rir": "0",
            "coachCue": "Neutral grip for the brachialis — pull the rope apart at the top.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Overhead Machine Extension",
            "group": "arms2",
            "role": "superset",
            "rir": "0",
            "coachCue": "Superset off the hammer curl — stretch loaded, push to lockout.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Hanging Leg Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Curl the pelvis up, no swing — lower under control.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Legs",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Speed Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "~55–65% — drive out of the hole with maximal bar speed, then REST 2–3 min before the jump. Heavy intent primes the jump.",
            "sets": [
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Trap Bar Jump",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Contrast off the speed squat after full rest — light load, jump for max height, soft landing.",
            "sets": [
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Keep the hinge pattern strong — controlled stretch, snap the hips through.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: lengthened partials from the stretch to failure.",
            "sets": [
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "W",
                "target": "10–15"
              },
              {
                "type": "M",
                "target": "10–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Push + Pull",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Speed Bench",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "~50–60% pressed with explosive intent, then REST 2–3 min before the throw. Speed press primes the ballistic.",
            "sets": [
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "Hold the vertical-pull strength — full stretch, pull explosively off the bottom.",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "W",
                "target": "6–8"
              },
              {
                "type": "M",
                "target": "6–8"
              }
            ]
          }
        ]
      },
      {
        "name": "Upper Volume (Hypertrophy Maintain)",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Chest-Supported Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Chest pinned — row to the hip, full stretch at the bottom.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Incline Machine Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Final set: lengthened partials from the stretched bottom to failure.",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Cable Pullover",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Constant tension through the deep overhead stretch — lats only.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Behind-Body Cable Lateral Raise",
            "group": "delts1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Cable behind the body for the deep stretch on the side delt.",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "delts1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Superset off the laterals — wide arc, controlled squeeze, no swing.",
            "sets": [
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "W",
                "target": "15–20"
              },
              {
                "type": "M",
                "target": "15–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms, Calves & Core Pump",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Reclined Cable Curl",
            "group": "arms1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Reclined for the deep stretch on the long head; strict.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Single-Arm Overhead Cable Extension",
            "group": "arms1",
            "role": "superset",
            "rir": "0",
            "coachCue": "Superset off the curl — long overhead stretch, per side.",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "M",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: drop set — failure, strip the stack, lengthened partials to finish.",
            "sets": [
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "M",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Ab Wheel Rollout",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Brace hard, roll out long for the stretch — don't let the hips sag.",
            "sets": [
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
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
        "name": "First",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Stiff-Leg Deadlift",
            "group": "sup1",
            "role": "superset",
            "rir": "2",
            "coachCue": "Push hips back, feel the stretch through the hamstring, control the lower.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              }
            ]
          },
          {
            "name": "Pendulum Squat",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: double drop — strip ~20% twice, push each to failure in the stretch.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Drive the hips tall, squeeze the glutes hard at lockout. Last set: drop set, full contraction each rep.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Donkey Calf Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          }
        ]
      },
      {
        "name": "Second",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Deep-Stretch Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Incline Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Weighted Chest Dip",
            "group": "sup1",
            "role": "superset",
            "rir": "2",
            "coachCue": "Forward lean, sink into the deep stretch at the bottom.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              }
            ]
          },
          {
            "name": "Seated Cable Fly (Chest-Supported)",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: lengthened partials to failure at the stretched, open position.",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Behind-the-Body Cable Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: double drop in the stretched, behind-the-body position.",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "15"
              }
            ]
          },
          {
            "name": "Skullcrusher to Behind Head (EZ Bar)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          }
        ]
      },
      {
        "name": "Third",
        "priority": 3,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Weighted Chin-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Seal Row",
            "group": "sup1",
            "role": "superset",
            "rir": "2",
            "coachCue": "Full dead-hang stretch at the bottom, no body english.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              }
            ]
          },
          {
            "name": "Cross-Body Single-Arm Lat Pulldown",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: lengthened partials to failure across the body in the stretch.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: drop set, squeeze hard at peak each rep.",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "15"
              }
            ]
          },
          {
            "name": "Glute-Ham Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          }
        ]
      },
      {
        "name": "Fourth",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "10"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              },
              {
                "type": "M",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: drop set, no swing, constant tension.",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "15"
              }
            ]
          },
          {
            "name": "Bayesian Cable Curl",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Last set: lengthened partials to failure from the stretched behind-body position.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "EZ-Bar Overhead Extension (Seated/Standing)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "15"
              }
            ]
          }
        ]
      }
    ],
    "2": [
      {
        "name": "First",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "High-Bar Back Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "M",
                "target": "5"
              }
            ]
          },
          {
            "name": "Stiff-Leg Deadlift",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Knees soft and locked, longest hamstring range — own the stretch under load.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "M",
                "target": "6"
              }
            ]
          },
          {
            "name": "Hack Squat (Machine)",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: double drop — strip and push each to failure deep in the stretch.",
            "sets": [
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Drive explosively to lockout, squeeze the glutes hard. Last set: rest-pause past failure.",
            "sets": [
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Seated Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          }
        ]
      },
      {
        "name": "Second",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "M",
                "target": "5"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Bench Press",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Deep stretch on the upper chest, control the bottom.",
            "sets": [
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Pec Deck Fly",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: drop set, hold the stretched open position one count each rep.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Lean-Away Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: lengthened partials to failure from the bottom stretch.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Weighted Triceps Dip",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "6"
              }
            ]
          }
        ]
      },
      {
        "name": "Third",
        "priority": 3,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Pendlay Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Strict flat torso, dead-stop each rep, explode to the chest.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "M",
                "target": "6"
              }
            ]
          },
          {
            "name": "Weighted Chin-Up",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Full dead-hang stretch at the bottom, drive elbows down.",
            "sets": [
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "M",
                "target": "6"
              }
            ]
          },
          {
            "name": "Single-Arm Seated Cable Row",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: drop set, let the torso open for max stretch each rep.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Chest-Supported Dumbbell Rear Delt Fly",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: lengthened partials to failure, no momentum.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Seated Leg Curl",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          }
        ]
      },
      {
        "name": "Fourth",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "M",
                "target": "5"
              }
            ]
          },
          {
            "name": "Behind-the-Body Cable Lateral Raise",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: double drop in the deep stretched position.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Last set: lengthened partials to failure at full stretch behind the body.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Skullcrusher to Behind Head (EZ Bar)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Hanging Leg Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Controlled, no swing, curl the pelvis up.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "First",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Hack Squat (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Pendulum Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Front Squat",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "W",
                "target": "5"
              },
              {
                "type": "M",
                "target": "5"
              }
            ]
          },
          {
            "name": "Smith Bulgarian Split Squat",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Last set: lengthened partials to failure deep in the front-leg stretch.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Barbell Hip Thrust",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Drive tall, hard glute squeeze at lockout. Last set: drop set, full contraction each rep.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Standing Calf Raise (Machine)",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          }
        ]
      },
      {
        "name": "Second",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Weighted Chest Dip",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Incline Machine Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Last set: double drop to failure.",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Deep-Stretch Dumbbell Press",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Sink into the deep bottom stretch, slow the eccentric.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: drop set, constant tension, no swing.",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "15"
              }
            ]
          },
          {
            "name": "Single-Arm Overhead Cable Extension",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          }
        ]
      },
      {
        "name": "Third",
        "priority": 3,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Cable Lean-Away Shrug",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Weighted Chin-Up",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "W",
                "target": "6"
              },
              {
                "type": "M",
                "target": "6"
              }
            ]
          },
          {
            "name": "Chest-Supported T-Bar Row",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Last set: drop set, full protracted stretch at the bottom.",
            "sets": [
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "W",
                "target": "10"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Machine Pullover",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Final set: lengthened partials to failure through the deep stretch.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "12"
              }
            ]
          },
          {
            "name": "Cable Rear Delt Fly",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "W",
                "target": "15"
              },
              {
                "type": "M",
                "target": "15"
              }
            ]
          }
        ]
      },
      {
        "name": "Fourth",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Overhead Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Hanging Oblique Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
              },
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "W",
                "target": "5–8"
              },
              {
                "type": "M",
                "target": "5–8"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "W",
                "target": "8"
              },
              {
                "type": "M",
                "target": "8"
              }
            ]
          },
          {
            "name": "Reclined Cable Curl",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Last set: drop set from the deep stretched, reclined position.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Overhead Machine Extension (Loaded-Stretch Machine)",
            "group": "sup1",
            "role": "superset",
            "rir": "1",
            "coachCue": "Last set: double drop to failure in the stretch.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
              }
            ]
          },
          {
            "name": "Ab Wheel Rollout",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "Slow extension to full stretch, brace hard, don't let the hips sag.",
            "sets": [
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "W",
                "target": "12"
              },
              {
                "type": "M",
                "target": "10"
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
