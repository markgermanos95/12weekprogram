// 12WP starter programs — four tiers × three phases, authored via a coach
// draft→critique→revise workflow + head-coach holistic pass, then edited here.
// Beginner/Intermediate are full-body (P1 juiciest compounds · P2 important
// secondary · P3 peripheral iso (limbs) · P4 central iso (torso & hips)).
// Advanced is Legs + Push+Pull (both P1) · P2 posterior/volume · P3 arms pump.
// Elite is First–Fourth, fully hybrid. Phases: P1 hypertrophy, P2 strength,
// P3 power — the power character escalating by tier (intent → bridge → real →
// hybrid). RIR rides the working-set cue; coachCue carries power/technique
// intent (shown in place of the rep-chase cue). Draft programming — edit freely.

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
        "name": "Full body A",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Leg Press",
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
            "name": "Lat Pulldown",
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
            "name": "Seated Cable Row",
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
            "name": "Dumbbell Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Full body B",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Dumbbell Walking Lunge",
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
            "name": "Incline Dumbbell Press",
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
                "target": "8–12"
              },
              {
                "type": "W",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Chest-Supported Dumbbell Row",
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
            "rir": "1",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms & calves",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Biceps Curl",
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
            "name": "Cable Triceps Pushdown",
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
            "name": "Dumbbell Lateral Raise",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
                "target": "12–20"
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
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
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
        "name": "Core & glutes",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
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
            "name": "Cable Crunch",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Brace hard, resist the rotation — slow and controlled, both sides.",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Back Extension",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Dead Bug",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Flat lower back into the floor, slow opposite arm and leg — no arching.",
            "sets": [
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
      }
    ],
    "2": [
      {
        "name": "Full body A",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Goblet Squat",
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
            "name": "Lat Pulldown",
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
                "target": "5"
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
            "name": "Seated Cable Row",
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
          }
        ]
      },
      {
        "name": "Full body B",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Dumbbell Walking Lunge",
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
          },
          {
            "name": "Incline Dumbbell Press",
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
                "target": "6–10"
              },
              {
                "type": "W",
                "target": "6–10"
              }
            ]
          },
          {
            "name": "Chest-Supported Dumbbell Row",
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
            "group": "",
            "role": "",
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
          }
        ]
      },
      {
        "name": "Arms & calves",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Biceps Curl",
            "group": "",
            "role": "",
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
            "name": "Cable Triceps Pushdown",
            "group": "",
            "role": "",
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
            "name": "Dumbbell Lateral Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
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
                "target": "10–15"
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
            "name": "Standing Calf Raise",
            "group": "",
            "role": "",
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
          }
        ]
      },
      {
        "name": "Core & glutes",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
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
            "name": "Cable Crunch",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
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
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Brace hard, resist the rotation — slow and controlled, both sides.",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Back Extension",
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
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Dead Bug",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Flat lower back into the floor, slow opposite arm and leg — no arching.",
            "sets": [
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
      }
    ],
    "3": [
      {
        "name": "Full body A",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Goblet Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Sit down under control, then stand up FAST and tall — drive through the floor, ~60%, no failure.",
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
            "name": "Machine Chest Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Control the lower, then punch it out fast — explosive press, ~60%, no failure.",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Lat Pulldown",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Pull the bar to your chest fast and hard, control it back up slow — drive with intent.",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seated Cable Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Snap the handle to you fast, slow return — explosive pull, leave reps in the tank.",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Dumbbell Romanian Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
                "target": "8–10"
              }
            ]
          }
        ]
      },
      {
        "name": "Full body B",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Dumbbell Walking Lunge",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Step and lower under control, then drive up off the front leg FAST and tall — ~60%, explosive, no failure.",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Control down, press up fast and hard — explosive intent, ~60%, stop short of failure.",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Lower slow, drive the dumbbells up fast — punch them to the top, leave reps in reserve.",
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
            "name": "Chest-Supported Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Row the dumbbells up fast, lower under control — explosive pull, ~60%.",
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
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms & calves",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Biceps Curl",
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
            "name": "Cable Triceps Pushdown",
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
            "name": "Dumbbell Lateral Raise",
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
                "type": "W",
                "target": "12–15"
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
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive up onto the toes fast and powerful, control the stretch down — explosive bounce-free reps.",
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
                "type": "W",
                "target": "8–10"
              }
            ]
          }
        ]
      },
      {
        "name": "Core & glutes",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Barbell Hip Thrust",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive the hips up FAST and squeeze the glutes hard at the top, lower under control — ~60%, explosive.",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Pallof Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Brace hard, resist the rotation — slow and controlled, both sides.",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Back Extension",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Dead Bug",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Flat lower back into the floor, slow opposite arm and leg — no arching.",
            "sets": [
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
      }
    ]
  },
  "intermediate": {
    "1": [
      {
        "name": "Full Body A — Squat Focus",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Barbell Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "coachCue": "",
            "sets": [
              {
                "type": "R",
                "target": "6"
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
            "name": "Walking Lunge",
            "group": "leg-ss",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
            "group": "leg-ss",
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
          }
        ]
      },
      {
        "name": "Full Body B — Horizontal Push/Pull",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Barbell Bent-Over Row",
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
            "name": "Incline Dumbbell Press",
            "group": "hp-ss",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Lat Pulldown",
            "group": "hp-ss",
            "role": "superset",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body C — Arms & Delts (Giant Sets)",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Seated Dumbbell Shoulder Press",
            "group": "arm-giant",
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
            "name": "Incline Dumbbell Curl",
            "group": "arm-giant",
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
            "name": "Overhead Cable Triceps Extension",
            "group": "arm-giant",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
            "group": "delt-ss",
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
            "name": "Reverse Pec Deck",
            "group": "delt-ss",
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
                "type": "W",
                "target": "15–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body D — Core & Posterior Chain",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Hip Thrust",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Back Extension",
            "group": "core-ss",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Hanging Knee Raise",
            "group": "core-ss",
            "role": "superset",
            "rir": "2",
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
                "type": "W",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Cable Pallof Press",
            "group": "ab-ss",
            "role": "superset",
            "rir": "",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "12–15"
              },
              {
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Cable Crunch",
            "group": "ab-ss",
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
          }
        ]
      }
    ],
    "2": [
      {
        "name": "Full Body A — Squat Focus",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Barbell Back Squat",
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
                "target": "4–6"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "M",
                "target": "4–6"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
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
            "name": "Bulgarian Split Squat",
            "group": "leg-ss",
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
            "name": "Standing Calf Raise",
            "group": "leg-ss",
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
          }
        ]
      },
      {
        "name": "Full Body B — Horizontal Push/Pull",
        "priority": 2,
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
                "target": "4–6"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "M",
                "target": "4–6"
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
            "name": "Seated Cable Row",
            "group": "hp-ss",
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
            "name": "Weighted Dip",
            "group": "hp-ss",
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
          }
        ]
      },
      {
        "name": "Full Body C — Arms & Delts (Giant Sets)",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Seated Barbell Overhead Press",
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
            "name": "Barbell Curl",
            "group": "arm-ss",
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
            "name": "Close-Grip Bench Press",
            "group": "arm-ss",
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
            "name": "Cable Lateral Raise",
            "group": "delt-ss",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Face Pull",
            "group": "delt-ss",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body D — Core & Posterior Chain",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Hip Thrust",
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
            "name": "Weighted Back Extension",
            "group": "core-ss",
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
            "name": "Hanging Leg Raise",
            "group": "core-ss",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Weighted Cable Crunch",
            "group": "ab-ss",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
            "name": "Cable Pallof Press",
            "group": "ab-ss",
            "role": "superset",
            "rir": "",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
              }
            ]
          }
        ]
      }
    ],
    "3": [
      {
        "name": "Full Body A — Squat Focus",
        "priority": 1,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Box Jump",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Step off, reset, full intent on every jump — land soft and tall, full recovery between sets. Quality over fatigue.",
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
            "name": "Speed Barbell Back Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "~55–65% — drive out of the hole as fast as you can, controlled descent. Max bar speed, not max weight. Full rest between sets.",
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
            "group": "leg-ss",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
            "name": "Standing Calf Raise",
            "group": "leg-ss",
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
          }
        ]
      },
      {
        "name": "Full Body B — Horizontal Push/Pull",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Med-Ball Chest Pass (Explosive)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Fire the ball off the chest as hard as you can — full intent, reset between throws. Power, not endurance.",
            "sets": [
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              }
            ]
          },
          {
            "name": "Speed Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "~55–65% — touch and drive the bar up explosively, control the lower. Max bar speed. Full rest between sets.",
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
            "name": "Weighted Pull-Up",
            "group": "hp-ss",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
            "name": "Incline Dumbbell Press",
            "group": "hp-ss",
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
          }
        ]
      },
      {
        "name": "Full Body C — Arms & Delts (Giant Sets)",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Dip and drive the bar up off the legs explosively — ~60%, full rest. Speed off the floor of the dip.",
            "sets": [
              {
                "type": "R",
                "target": "5"
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
            "name": "EZ-Bar Curl",
            "group": "arm-ss",
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
            "name": "Overhead Cable Triceps Extension",
            "group": "arm-ss",
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
            "name": "Cable Lateral Raise",
            "group": "delt-ss",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Face Pull",
            "group": "delt-ss",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Full Body D — Core & Posterior Chain",
        "priority": 4,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Med-Ball Slam (Explosive)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Reach tall, slam the ball down with everything you've got — full intent each rep, reset between. Power, not a burn-out.",
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
            "name": "Hip Thrust",
            "group": "core-ss",
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
            "name": "Back Extension",
            "group": "core-ss",
            "role": "superset",
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
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Hanging Leg Raise",
            "group": "ab-ss",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
            "name": "Cable Pallof Press",
            "group": "ab-ss",
            "role": "superset",
            "rir": "",
            "coachCue": "",
            "sets": [
              {
                "type": "W",
                "target": "10–12"
              },
              {
                "type": "W",
                "target": "10–12"
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
            "name": "Back Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "coachCue": "",
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
                "type": "W",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
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
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              },
              {
                "type": "W",
                "target": "12–20"
              }
            ]
          },
          {
            "name": "Seated Calf Raise",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
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
            "name": "Barbell Bench Press",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Chest-Supported Row",
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
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
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
                "type": "W",
                "target": "10–15"
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
            "name": "Dumbbell Lateral Raise",
            "group": "shoulderArmsP1",
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
                "type": "W",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "EZ-Bar Curl",
            "group": "shoulderArmsP1",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Posterior + Pull (Volume)",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Trap-Bar Deadlift",
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
            "name": "Incline Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Face Pull",
            "group": "rearP1",
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
                "type": "W",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "rearP1",
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
                "type": "W",
                "target": "15–20"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms + Delts + Calves (Pump)",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Lateral Raise",
            "group": "",
            "role": "",
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
                "type": "W",
                "target": "15–20"
              }
            ]
          },
          {
            "name": "Incline Dumbbell Curl",
            "group": "armsP1b",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Rope Triceps Pushdown",
            "group": "armsP1b",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
            "group": "",
            "role": "",
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
                "type": "W",
                "target": "15–20"
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
            "name": "Back Squat",
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
                "target": "3"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "M",
                "target": "4–6"
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
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
            "name": "Hack Squat",
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
            "name": "Lying Leg Curl",
            "group": "",
            "role": "",
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
                "type": "W",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Seated Calf Raise",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
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
                "type": "W",
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
                "target": "3"
              },
              {
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "M",
                "target": "4–6"
              }
            ]
          },
          {
            "name": "Pendlay Row",
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
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
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
            "name": "Standing Overhead Press",
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
            "name": "Dumbbell Lateral Raise",
            "group": "shoulderArmsP2",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Barbell Curl",
            "group": "shoulderArmsP2",
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
                "type": "W",
                "target": "8–12"
              }
            ]
          }
        ]
      },
      {
        "name": "Posterior + Pull (Volume)",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Trap-Bar Deadlift",
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
            "name": "Incline Dumbbell Press",
            "group": "",
            "role": "",
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
                "type": "W",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "T-Bar Row",
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
            "name": "Face Pull",
            "group": "rearP2",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Reverse Pec Deck",
            "group": "rearP2",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms + Delts + Calves (Pump)",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Lateral Raise",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Preacher Curl",
            "group": "armsP2b",
            "role": "superset",
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
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Lying EZ-Bar Triceps Extension",
            "group": "armsP2b",
            "role": "superset",
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
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
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
                "type": "W",
                "target": "12–15"
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
            "name": "Box Jump",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explode off the floor, land soft and tall on the box. Reset every rep — quality over fatigue, full recovery between sets.",
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
            "name": "Speed Back Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "~55–65% bar. Drive up as fast as humanly possible, control the descent. Stop the set if speed drops — full rest between sets.",
            "sets": [
              {
                "type": "R",
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
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Leg Press",
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
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "10–15"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
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
            "name": "Speed Bench Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "~50–60% bar. Lower under control, then fire it off the chest as fast as possible. Stop if speed dies — full rest between sets.",
            "sets": [
              {
                "type": "R",
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
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Plyometric Push-Up",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Push hard enough to leave the floor. Land soft, absorb, explode again — max intent, no grinding, reset between reps.",
            "sets": [
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              }
            ]
          },
          {
            "name": "Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Dip and drive the legs, punch the bar overhead. ~70%, full recovery — speed and lockout, not a grind.",
            "sets": [
              {
                "type": "R",
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
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Hang High Pull",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explode from the hang, lead with the elbows, pull the bar to chest height. Light and fast — it's a speed lift, full rest.",
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
            "name": "Weighted Pull-Up",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Incline Dumbbell Press",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
                "target": "8–10"
              }
            ]
          }
        ]
      },
      {
        "name": "Posterior + Pull (Volume)",
        "priority": 2,
        "cardioPos": "none",
        "exercises": [
          {
            "name": "Trap-Bar Jump",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Load light, jump as high as you can each rep — full triple extension, reset between reps. Power, not fatigue.",
            "sets": [
              {
                "type": "R",
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
              },
              {
                "type": "W",
                "target": "3"
              }
            ]
          },
          {
            "name": "Trap-Bar Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
                "type": "W",
                "target": "6–8"
              }
            ]
          },
          {
            "name": "Chest-Supported Row",
            "group": "",
            "role": "",
            "rir": "2",
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
                "type": "W",
                "target": "8–12"
              }
            ]
          },
          {
            "name": "Rotational Med-Ball Throw",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Wind up and fire the ball into the wall as hard as you can. Each rep is a max-effort throw — reset and repeat.",
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
            "name": "Face Pull",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          }
        ]
      },
      {
        "name": "Arms + Delts + Calves (Pump)",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Dumbbell Lateral Raise",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Hammer Curl",
            "group": "armsP3b",
            "role": "superset",
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
                "type": "W",
                "target": "10–12"
              }
            ]
          },
          {
            "name": "Rope Triceps Pushdown",
            "group": "armsP3b",
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
                "type": "W",
                "target": "12–15"
              }
            ]
          },
          {
            "name": "Seated Calf Raise",
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
                "type": "W",
                "target": "12–15"
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
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Trap Bar Jump Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explode off the floor, leave the ground — ~25% of squat, reset every rep, full recovery between sets.",
            "sets": [
              {
                "type": "R",
                "target": "5"
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
            "name": "Back Squat",
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
                "type": "R",
                "target": "6"
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
            "name": "Bulgarian Split Squat",
            "group": "A",
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
            "name": "Lying Leg Curl",
            "group": "A",
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
            "name": "Standing Calf Raise",
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
                "target": "12–15 + lengthened partials"
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
            "name": "Plyo Push-Up (off boxes)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive through the floor, hands leave the surface — land soft, reset. Speed over reps, full rest.",
            "sets": [
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
              },
              {
                "type": "W",
                "target": "4"
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
                "target": "8"
              },
              {
                "type": "R",
                "target": "6"
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
            "name": "Standing Dumbbell Overhead Press",
            "group": "B",
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
            "name": "Weighted Dip",
            "group": "B",
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
                "target": "10–12 + drop set"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
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
                "target": "15–20 + lengthened partials"
              }
            ]
          },
          {
            "name": "Cable Triceps Pushdown",
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
        "name": "Third",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Kettlebell Swing",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Snap the hips, float the bell — it's a hinge not a squat. Explosive, crisp, full rest.",
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
                "type": "W",
                "target": "6"
              }
            ]
          },
          {
            "name": "Conventional Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Weighted Pull-Up",
            "group": "C",
            "role": "superset",
            "rir": "2",
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
            "name": "Chest-Supported Row",
            "group": "C",
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
                "target": "10–12 + rest-pause"
              }
            ]
          },
          {
            "name": "Face Pull",
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
          }
        ]
      },
      {
        "name": "Fourth",
        "priority": 4,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Dip, drive, punch overhead — let the legs throw it. Crisp lockout, control down, full rest.",
            "sets": [
              {
                "type": "R",
                "target": "5"
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
            "name": "Single-Arm Dumbbell Row",
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
            "group": "D",
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
                "target": "10–12 + lengthened partials"
              }
            ]
          },
          {
            "name": "Overhead Cable Triceps Extension",
            "group": "D",
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
                "target": "12–15 + lengthened partials"
              }
            ]
          },
          {
            "name": "Dumbbell Lateral Raise",
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
                "target": "15–20 + drop set"
              }
            ]
          },
          {
            "name": "Hanging Leg Raise",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
    "2": [
      {
        "name": "First",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Trap Bar Jump Squat",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Explode off the floor, leave the ground — ~30%, reset every rep, full recovery.",
            "sets": [
              {
                "type": "R",
                "target": "4"
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
            "name": "Back Squat",
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
                "type": "R",
                "target": "3"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "W",
                "target": "4–6"
              },
              {
                "type": "M",
                "target": "4–6"
              }
            ]
          },
          {
            "name": "Bulgarian Split Squat",
            "group": "A",
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
            "group": "A",
            "role": "superset",
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
                "target": "10–12 + lengthened partials"
              }
            ]
          },
          {
            "name": "Standing Calf Raise",
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
                "target": "10–12 + lengthened partials"
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
            "name": "Plyo Push-Up (off boxes)",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Drive hard, hands off the surface, land soft and reset. Pure speed, full rest.",
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
              }
            ]
          },
          {
            "name": "Flat Barbell Bench Press",
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
            "name": "Standing Barbell Overhead Press",
            "group": "B",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
          },
          {
            "name": "Weighted Dip",
            "group": "B",
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
                "target": "8–10 + rest-pause"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
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
                "target": "12–15 + lengthened partials"
              }
            ]
          },
          {
            "name": "Close-Grip Bench Press",
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
          }
        ]
      },
      {
        "name": "Third",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Hang Power Clean",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Violent hip snap, pull yourself under — catch tall. Quality reps, reset each, full rest. ~65%, strong and crisp.",
            "sets": [
              {
                "type": "R",
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
            "name": "Conventional Deadlift",
            "group": "",
            "role": "",
            "rir": "1",
            "coachCue": "",
            "sets": [
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
                "target": "3–5"
              },
              {
                "type": "W",
                "target": "3–5"
              },
              {
                "type": "M",
                "target": "3–5"
              }
            ]
          },
          {
            "name": "Weighted Pull-Up",
            "group": "C",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
            "name": "Pendlay Row",
            "group": "C",
            "role": "superset",
            "rir": "1",
            "coachCue": "",
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
            "name": "Face Pull",
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
          }
        ]
      },
      {
        "name": "Fourth",
        "priority": 4,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Dip, drive, punch — legs throw it overhead. ~70%, crisp lockout, full rest.",
            "sets": [
              {
                "type": "R",
                "target": "4"
              },
              {
                "type": "W",
                "target": "2"
              },
              {
                "type": "W",
                "target": "2"
              },
              {
                "type": "W",
                "target": "2"
              }
            ]
          },
          {
            "name": "Single-Arm Dumbbell Row",
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
            "name": "EZ-Bar Curl",
            "group": "D",
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
            "name": "Lying EZ-Bar Triceps Extension",
            "group": "D",
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
                "target": "8–10 + drop set"
              }
            ]
          },
          {
            "name": "Dumbbell Lateral Raise",
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
                "target": "12–15 + lengthened partials"
              }
            ]
          },
          {
            "name": "Hanging Leg Raise",
            "group": "",
            "role": "",
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
          }
        ]
      }
    ],
    "3": [
      {
        "name": "First",
        "priority": 1,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Back Squat (Speed / Dynamic Effort)",
            "group": "F",
            "role": "superset",
            "rir": "",
            "coachCue": "Sit, then drive up as fast as humanly possible — ~55%, bar speed is the lift. Full rest between pairs.",
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
              }
            ]
          },
          {
            "name": "Seated Box Jump",
            "group": "F",
            "role": "superset",
            "rir": "",
            "coachCue": "Contrast pair — sit on the box, explode up from a dead stop after the speed squat. Maximal intent, land soft, full rest.",
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
              }
            ]
          },
          {
            "name": "Romanian Deadlift",
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
            "name": "Walking Lunge",
            "group": "G",
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
            "name": "Lying Leg Curl",
            "group": "G",
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
                "target": "12–15 + lengthened partials"
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
            "name": "Bench Press (Speed / Dynamic Effort)",
            "group": "H",
            "role": "superset",
            "rir": "",
            "coachCue": "~50%, drive the bar off the chest as fast as possible — bar speed is the lift. Full rest between pairs.",
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
              }
            ]
          },
          {
            "name": "Plyo Push-Up (off boxes)",
            "group": "H",
            "role": "superset",
            "rir": "",
            "coachCue": "Contrast pair — explode after the speed bench, hands off the surface, land soft. Maximal, full rest.",
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
                "target": "4"
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
            "name": "Standing Dumbbell Overhead Press",
            "group": "I",
            "role": "superset",
            "rir": "2",
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
            "name": "Weighted Dip",
            "group": "I",
            "role": "superset",
            "rir": "2",
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
                "target": "8–10 + drop set"
              }
            ]
          },
          {
            "name": "Cable Lateral Raise",
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
                "target": "15–20 + lengthened partials"
              }
            ]
          }
        ]
      },
      {
        "name": "Third",
        "priority": 3,
        "cardioPos": "bottom",
        "exercises": [
          {
            "name": "Jump Shrug",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "From the hang, violent triple extension — shrug hard, rise to the toes. ~60%, crisp, reset each rep, full rest.",
            "sets": [
              {
                "type": "R",
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
            "name": "Trap Bar Deadlift",
            "group": "",
            "role": "",
            "rir": "2",
            "coachCue": "",
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
            "name": "Weighted Pull-Up",
            "group": "J",
            "role": "superset",
            "rir": "2",
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
            "name": "Chest-Supported Row",
            "group": "J",
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
                "target": "10–12 + rest-pause"
              }
            ]
          },
          {
            "name": "Face Pull",
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
          }
        ]
      },
      {
        "name": "Fourth",
        "priority": 4,
        "cardioPos": "top",
        "exercises": [
          {
            "name": "Push Press",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Dip, drive, punch overhead — legs throw it. ~65%, explosive and crisp, full lockout, full rest.",
            "sets": [
              {
                "type": "R",
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
            "name": "Overhead Med-Ball Slam",
            "group": "",
            "role": "",
            "rir": "",
            "coachCue": "Reach tall, drive the ball into the floor with everything — full-body whip. Maximal intent, reset each rep.",
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
            "name": "Incline Dumbbell Curl",
            "group": "K",
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
                "target": "10–12 + lengthened partials"
              }
            ]
          },
          {
            "name": "Overhead Cable Triceps Extension",
            "group": "K",
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
                "target": "12–15 + lengthened partials"
              }
            ]
          },
          {
            "name": "Seated Calf Raise",
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
                "target": "12–15 + lengthened partials"
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
// Convert authored data to the app's shape: assign a sessionId, and turn each
// consecutive run of exercises sharing a non-empty "group" label into one
// superset groupId.
function toSession(raw: RawSession, tier: string, phase: number, idx: number): SeedSession {
  let curLabel = '\u0000', curGid = '';
  const exercises: SeedExercise[] = raw.exercises.map((e) => {
    let groupId = '';
    if (e.group) {
      if (e.group !== curLabel) { curGid = 'sg' + (++_g); curLabel = e.group; }
      groupId = curGid;
    } else { curLabel = '\u0000'; }
    return { name: e.name, sets: e.sets, groupId, role: e.role || '', rir: e.rir || '', coachCue: e.coachCue || '' };
  });
  return { sessionId: PREFIX[tier] + phase + String.fromCharCode(97 + idx), name: raw.name, priority: raw.priority, cardioPos: raw.cardioPos, exercises };
}
export function buildSeed(tier: string): SeedPhases {
  const p = PROGRAMS[tier] || {};
  return {
    1: (p['1'] || []).map((s, i) => toSession(s, tier, 1, i)),
    2: (p['2'] || []).map((s, i) => toSession(s, tier, 2, i)),
    3: (p['3'] || []).map((s, i) => toSession(s, tier, 3, i)),
  };
}
