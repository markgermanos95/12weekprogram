// Rated exercise library — 277 exercises across 12 muscle categories.
// Built via author->critique->revise per category + cross-category calibration.
// Each rated 1-5 on: stimulus, skill, stretch (lengthened-bias), loadability,
// stability, fatigue, power. tierFit gates which programs may use it; techniques
// lists the intensity methods it suits; isPower flags explosive drills.
// Source of truth — edit here (or via Claude). Consumed by exercises.ts.

export const EXERCISES_DATA = [
  {
    "id": "high-bar-back-squat",
    "name": "High-Bar Back Squat",
    "aliases": [
      "Olympic Back Squat",
      "High Bar Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors",
      "spinal-erectors"
    ],
    "pattern": "squat",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 4,
    "loadability": 5,
    "stability": 2,
    "fatigue": 5,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Upright torso, knees forward — most quad-biased barbell squat. Huge loadability but high CNS cost and skill; failure-training too risky for intensity techniques."
  },
  {
    "id": "low-bar-back-squat",
    "name": "Low-Bar Back Squat",
    "aliases": [
      "Powerlifting Squat",
      "Low Bar Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors",
      "spinal-erectors",
      "hamstrings"
    ],
    "pattern": "squat",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 2,
    "fatigue": 5,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "More hip-dominant than high-bar; lifts most load but shifts demand off quads. A strength lift more than a quad builder."
  },
  {
    "id": "front-squat",
    "name": "Front Squat",
    "aliases": [
      "Barbell Front Squat",
      "Clean-Grip Front Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "spinal-erectors",
      "abs"
    ],
    "pattern": "squat",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 4,
    "loadability": 4,
    "stability": 2,
    "fatigue": 4,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Front-loaded forces upright torso and deep knee flexion — strongly quad-biased. Rack position and mobility gate it; upper-back/grip often fails before quads."
  },
  {
    "id": "safety-bar-squat",
    "name": "Safety-Bar Squat",
    "aliases": [
      "SSB Squat",
      "Yoke Bar Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "spinal-erectors",
      "upper-back"
    ],
    "pattern": "squat",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 5,
    "stability": 2,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Cambered bar drives an upright, quad-biased squat with less shoulder mobility demand than front squat. Easier to learn than barbell front/high-bar, still heavy and fatiguing."
  },
  {
    "id": "smith-machine-squat",
    "name": "Smith Machine Squat",
    "aliases": [
      "Smith Squat",
      "Machine Squat (Smith)"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "squat",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 3,
    "techniques": [
      "lengthened-partials",
      "cluster",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fixed bar path lets you place feet forward and load deep knee flexion safely with no balance demand — strong, accessible quad builder; rack the hooks mid-set to push near failure."
  },
  {
    "id": "hack-squat",
    "name": "Hack Squat (Machine)",
    "aliases": [
      "Machine Hack Squat",
      "Plate-Loaded Hack"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 5,
    "skill": 2,
    "stretch": 5,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "cluster",
      "slow-eccentric",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elite quad builder — back supported, deep loaded stretch, trivially loadable, safe to take to failure. The benchmark machine for hypertrophy. Suits every intensity technique."
  },
  {
    "id": "pendulum-squat",
    "name": "Pendulum Squat",
    "aliases": [
      "Pendulum Hack"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes"
    ],
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 5,
    "skill": 2,
    "stretch": 5,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "cluster",
      "slow-eccentric",
      "rest-pause"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Arc path keeps near-constant tension and a brutal loaded stretch at the bottom with the spine fully unloaded. Premium quad machine; failure-friendly."
  },
  {
    "id": "leg-press",
    "name": "Leg Press (45-degree)",
    "aliases": [
      "45 Degree Leg Press",
      "Sled Press"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "cluster",
      "slow-eccentric",
      "rest-pause",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Fully supported, day-one easy, loads huge and tracks cleanly; deep ROM gives a real stretch. Spine-spared, so it absorbs high volume and every intensity technique."
  },
  {
    "id": "horizontal-leg-press",
    "name": "Seated Leg Press",
    "aliases": [
      "Cybex Leg Press",
      "Seated Leg Press"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes"
    ],
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "rest-pause",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Seated selectorised press — lowest-fatigue, most accessible leg press. Great beginner squat-pattern entry and high-volume finisher."
  },
  {
    "id": "leg-extension",
    "name": "Leg Extension",
    "aliases": [
      "Knee Extension",
      "Quad Extension"
    ],
    "category": "quads",
    "muscle": "quads",
    "pattern": "leg-extension",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric",
      "iso-hold",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Only true quad isolation; uniquely loads the rectus femoris. Shortened-biased by default — loaded portion is at the short end, so no lengthened partials. Suits every other technique."
  },
  {
    "id": "leg-extension-stretch-bias",
    "name": "Leg Extension (Reclined / Stretch-Bias)",
    "aliases": [
      "Reclined Leg Extension",
      "Rectus-Bias Leg Extension"
    ],
    "category": "quads",
    "muscle": "quads",
    "pattern": "leg-extension",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "rest-pause",
      "myo-reps",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Lying back lengthens rectus femoris at the hip, biasing the stretched position — strong rectus emphasis and the variant that earns lengthened partials. A deliberate setup, not the default."
  },
  {
    "id": "bulgarian-split-squat",
    "name": "Bulgarian Split Squat",
    "aliases": [
      "Rear-Foot-Elevated Split Squat",
      "RFESS"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "lunge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 3,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Deep loaded stretch on the front-leg quad with long ROM; brutal stimulus per unit load. Balance demand caps load and makes partials-to-failure unsafe — quad emphasis with a torso-forward lean."
  },
  {
    "id": "smith-bulgarian-split-squat",
    "name": "Smith Bulgarian Split Squat",
    "aliases": [
      "Smith RFESS",
      "Machine Split Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "lunge",
    "equipment": "smith",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials",
      "dropset",
      "rest-pause"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Fixed bar removes the balance tax, so you load the deep front-leg stretch hard and can push to failure. One of the best single-leg quad builders."
  },
  {
    "id": "front-foot-elevated-split-squat",
    "name": "Front-Foot-Elevated Split Squat",
    "aliases": [
      "Deficit Split Squat",
      "FFE Split Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "lunge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 3,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elevating the front foot deepens knee flexion past the floor for an extreme quad stretch. Specialty, balance-demanding — advanced/elite only."
  },
  {
    "id": "static-split-squat",
    "name": "Static Split Squat",
    "aliases": [
      "Split Squat",
      "Stationary Lunge"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "lunge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Both feet on the floor — far more stable than Bulgarian, gentler entry to single-leg quad work. Good unilateral teaching tool before progressing to RFESS."
  },
  {
    "id": "walking-lunge",
    "name": "Walking Lunge",
    "aliases": [
      "Dumbbell Walking Lunge",
      "Barbell Walking Lunge"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors",
      "hamstrings"
    ],
    "pattern": "lunge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 3,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Long-step ROM gives moderate stretch, but balance and step-tracking make load progression messy and overall fatigue high. Quad/glute split depends on step length."
  },
  {
    "id": "reverse-lunge",
    "name": "Reverse Lunge",
    "aliases": [
      "Step-Back Lunge",
      "Dumbbell Reverse Lunge"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "lunge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 3,
    "stability": 3,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "More stable and knee-friendly than forward/walking lunge. A clean unilateral quad option from beginner up."
  },
  {
    "id": "step-up",
    "name": "Step-Up",
    "aliases": [
      "Dumbbell Step-Up",
      "Box Step-Up"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes"
    ],
    "pattern": "lunge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 3,
    "stability": 2,
    "fatigue": 3,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Quad/glute emphasis scales with box height; can be driven explosively. Balance and push-off cheating limit clean loading — keep the trailing leg passive."
  },
  {
    "id": "sissy-squat",
    "name": "Sissy Squat",
    "aliases": [
      "Free Sissy Squat",
      "Sissy Squat (Bodyweight)"
    ],
    "category": "quads",
    "muscle": "quads",
    "pattern": "squat",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 4,
    "stretch": 5,
    "loadability": 1,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Knees travel far forward for an extreme rectus-femoris stretch with no hip involvement. High skill, hard to load and balance — a specialty stretch tool, advanced/elite."
  },
  {
    "id": "machine-sissy-squat",
    "name": "Sissy Squat Machine",
    "aliases": [
      "Sissy Squat (Machine)",
      "Belt Sissy Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 5,
    "loadability": 3,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials",
      "iso-hold",
      "myo-reps"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Pad-supported sissy removes the balance demand, so the deep rectus stretch becomes usable and progressible. Strong stretch-focused accessory."
  },
  {
    "id": "goblet-squat",
    "name": "Goblet Squat",
    "aliases": [
      "Dumbbell Goblet Squat",
      "Kettlebell Goblet Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors",
      "abs"
    ],
    "pattern": "squat",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Front-loaded counterweight teaches an upright, deep, quad-biased squat — the best beginner squat-pattern entry. Load ceiling is low (grip/carry), so trainees outgrow it."
  },
  {
    "id": "belt-squat",
    "name": "Belt Squat",
    "aliases": [
      "Machine Belt Squat",
      "Pit Shark Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "cluster",
      "rest-pause"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Loads the hips/legs with zero spinal compression — heavy quad squat pattern that spares the back. Great for high volume and around-injury training."
  },
  {
    "id": "zercher-squat",
    "name": "Zercher Squat",
    "aliases": [
      "Barbell Zercher Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "upper-back",
      "abs"
    ],
    "pattern": "squat",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 4,
    "stretch": 3,
    "loadability": 4,
    "stability": 2,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elbow-cradle load forces a deep, upright, quad-biased squat. Awkward and uncomfortable to hold — high skill, specialty; elbows/back fatigue before quads."
  },
  {
    "id": "pistol-squat",
    "name": "Pistol Squat",
    "aliases": [
      "Single-Leg Squat",
      "Full Pistol"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors",
      "abs"
    ],
    "pattern": "squat",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 3,
    "skill": 5,
    "stretch": 3,
    "loadability": 1,
    "stability": 1,
    "fatigue": 3,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "elite"
    ],
    "isPower": false,
    "notes": "Full single-leg ROM with deep knee flexion, but mobility/balance dominate over quad tension and load is near-unprogressible. A skill display more than a builder."
  },
  {
    "id": "cyclist-squat",
    "name": "Cyclist Squat (Heels-Elevated)",
    "aliases": [
      "Cyclist Squat",
      "Heel-Elevated Squat",
      "Quad Squat"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "squat",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Heel elevation drives knees forward and maximises quad bias / depth with a narrow stance. Accessible quad-focus variant; carry load limits the ceiling."
  },
  {
    "id": "v-squat",
    "name": "V-Squat",
    "aliases": [
      "Plate-Loaded V-Squat",
      "Squat Machine"
    ],
    "category": "quads",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "adductors"
    ],
    "pattern": "squat",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "cluster",
      "rest-pause",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Chest/shoulder-supported squat machine — fully stable, deep stretch, trivially loadable and failure-safe. Hack-squat-class builder with a friendlier learning curve."
  },
  {
    "id": "romanian-deadlift",
    "name": "Romanian Deadlift",
    "aliases": [
      "RDL",
      "Barbell RDL"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors",
      "adductors"
    ],
    "pattern": "hinge",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 3,
    "stretch": 5,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 3,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The hamstring builder — heavy loaded stretch through the hinge, trivially loadable. Hip-hinge skill keeps it off day one."
  },
  {
    "id": "dumbbell-romanian-deadlift",
    "name": "Dumbbell Romanian Deadlift",
    "aliases": [
      "DB RDL"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Easier to learn than the barbell, DBs let you sit back and reach deeper stretch. Grip caps load at the top end."
  },
  {
    "id": "stiff-leg-deadlift",
    "name": "Stiff-Leg Deadlift",
    "aliases": [
      "SLDL",
      "Straight-leg Deadlift",
      "Deficit Stiff-leg Deadlift"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 4,
    "stretch": 5,
    "loadability": 5,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Bar from the floor, knees near-locked — longest hamstring range of the deadlift family, maximal loaded stretch. Higher spinal demand than RDL; gates to skilled lifters."
  },
  {
    "id": "conventional-deadlift",
    "name": "Conventional Deadlift",
    "aliases": [
      "Deadlift",
      "Barbell Deadlift"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "spinal-erectors",
      "quads",
      "traps"
    ],
    "pattern": "hinge",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 5,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "King strength lift, but as a hypertrophy tool the hams work in a shortened range. Brutal systemic cost; heavy loads rarely express as power; suits no failure technique."
  },
  {
    "id": "trap-bar-deadlift",
    "name": "Trap Bar Deadlift",
    "aliases": [
      "Hex Bar Deadlift"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "quads",
      "hamstrings",
      "spinal-erectors",
      "traps"
    ],
    "pattern": "hinge",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 4,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Centered load, neutral handles — most beginner-friendly deadlift and the best for explosive pulls. Quad-dominant, so a borderline glute/ham entry; less hamstring stretch than the hinge lifts."
  },
  {
    "id": "deficit-deadlift",
    "name": "Deficit Deadlift",
    "aliases": [
      "Deficit Conventional Deadlift"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors",
      "quads"
    ],
    "pattern": "hinge",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 5,
    "stretch": 4,
    "loadability": 5,
    "stability": 2,
    "fatigue": 5,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "elite"
    ],
    "isPower": false,
    "notes": "Pull from a deficit deepens hip flexion and hamstring range. Highest skill/CNS cost in the family — elite strength tool."
  },
  {
    "id": "snatch-grip-deadlift",
    "name": "Snatch-Grip Deadlift",
    "aliases": [
      "Wide-grip Deadlift"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors",
      "upper-back",
      "traps"
    ],
    "pattern": "hinge",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 5,
    "stretch": 4,
    "loadability": 5,
    "stability": 2,
    "fatigue": 5,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "elite"
    ],
    "isPower": false,
    "notes": "Wide grip drops the hips and lengthens the range — more posterior-chain stretch than conventional. High skill, big upper-back tax."
  },
  {
    "id": "good-morning",
    "name": "Good Morning",
    "aliases": [
      "Barbell Good Morning"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 5,
    "loadability": 5,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Bar on the back makes the hinge a pure hamstring stretch under load. Spinal demand and balance gate it to skilled lifters."
  },
  {
    "id": "seated-leg-curl",
    "name": "Seated Leg Curl",
    "aliases": [
      "Seated Hamstring Curl"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "pattern": "leg-curl",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 5,
    "skill": 1,
    "stretch": 5,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Hip flexion lengthens the hams under load — elite stretch and stimulus from a machine. Outgrows nobody; takes every intensity technique."
  },
  {
    "id": "lying-leg-curl",
    "name": "Lying Leg Curl",
    "aliases": [
      "Prone Hamstring Curl"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "calves"
    ],
    "pattern": "leg-curl",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Hip extended, so less stretch than seated — still a clean knee-flexion builder. Takes every technique; great dropset finisher."
  },
  {
    "id": "standing-leg-curl",
    "name": "Standing Leg Curl",
    "aliases": [
      "Single-leg Standing Curl"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "pattern": "leg-curl",
    "equipment": "machine",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Unilateral knee-flexion, easy to load and isolate. Useful for fixing side asymmetry; lower stretch than seated."
  },
  {
    "id": "nordic-ham-curl",
    "name": "Nordic Hamstring Curl",
    "aliases": [
      "Nordic Curl",
      "Russian Leg Curl"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "calves"
    ],
    "pattern": "leg-curl",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 4,
    "loadability": 1,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Supramaximal eccentric knee-flexion — gold standard for hamstring resilience. Bodyweight-gated load and high difficulty keep it advanced."
  },
  {
    "id": "glute-ham-raise",
    "name": "Glute-Ham Raise",
    "aliases": [
      "GHR",
      "GHD Raise"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors",
      "calves"
    ],
    "pattern": "leg-curl",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 5,
    "skill": 3,
    "stretch": 4,
    "loadability": 3,
    "stability": 4,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Combines knee flexion and hip extension on the GHD pad — more scalable and loadable than the Nordic. Add weight at the chest to progress; the trainable elite knee+hip-flexion builder."
  },
  {
    "id": "barbell-hip-thrust",
    "name": "Barbell Hip Thrust",
    "aliases": [
      "Hip Thrust"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "quads"
    ],
    "pattern": "hip-thrust",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 2,
    "stretch": 2,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 4,
    "techniques": [
      "rest-pause",
      "iso-hold",
      "cluster"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Peak-contraction glute builder, trivially loadable, can be driven explosively. Shortened-biased — pair with a stretch-loaded hinge. Fails safely, so a few techniques apply despite the load."
  },
  {
    "id": "machine-hip-thrust",
    "name": "Machine Hip Thrust",
    "aliases": [
      "Glute Drive",
      "Pendulum Hip Thrust"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings"
    ],
    "pattern": "hip-thrust",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 3,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "iso-hold",
      "cluster"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "All the glute peak-contraction of a hip thrust, none of the barbell setup. Fully supported — best dropset glute tool there is."
  },
  {
    "id": "single-leg-hip-thrust",
    "name": "Single-Leg Hip Thrust",
    "aliases": [
      "Unilateral Hip Thrust",
      "One-leg Hip Thrust"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings"
    ],
    "pattern": "hip-thrust",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "iso-hold",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Unilateral glute peak-contraction for evening out sides. Loadability capped by what you can hold on one hip."
  },
  {
    "id": "glute-bridge",
    "name": "Barbell Glute Bridge",
    "aliases": [
      "Floor Glute Bridge"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings"
    ],
    "pattern": "hip-thrust",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 1,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "iso-hold",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Floor-range glute contraction — entry-level hip thrust with shorter ROM. A beginner staple an advanced lifter has outgrown."
  },
  {
    "id": "cable-pull-through",
    "name": "Cable Pull-Through",
    "aliases": [
      "Pull-through"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings"
    ],
    "pattern": "hinge",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Cable teaches the hinge with constant tension into the stretch and contraction. Low-fatigue glute/ham accessory; great dropsets."
  },
  {
    "id": "45-degree-hyperextension",
    "name": "45° Hyperextension",
    "aliases": [
      "45-degree Back Extension",
      "Hip Extension"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 3,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "myo-reps",
      "iso-hold",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Rounded-back bias hits glutes, flat-back bias hits hams — both loaded into the stretch. Low fatigue, big stimulus; loadability caps progress."
  },
  {
    "id": "reverse-hyperextension",
    "name": "Reverse Hyperextension",
    "aliases": [
      "Reverse Hyper"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "spinal-erectors"
    ],
    "pattern": "hip-extension",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "myo-reps",
      "iso-hold",
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Torso fixed, legs swing the load — glute/ham/erector work with low spinal compression and a loaded bottom stretch. Low-fatigue posterior-chain staple."
  },
  {
    "id": "back-extension",
    "name": "Horizontal Back Extension",
    "aliases": [
      "90° Back Extension",
      "Roman Chair Extension"
    ],
    "category": "hamstrings-glutes",
    "muscle": "spinal-erectors",
    "secondary": [
      "glutes",
      "hamstrings"
    ],
    "pattern": "hinge",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 3,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "myo-reps",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Horizontal angle shifts emphasis toward the erectors with glute/ham support. Solid low-back accessory; loadability limits it."
  },
  {
    "id": "single-leg-rdl",
    "name": "Single-Leg Romanian Deadlift",
    "aliases": [
      "SLDL Single-leg",
      "Unilateral RDL"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 4,
    "stretch": 5,
    "loadability": 3,
    "stability": 1,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Deep unilateral hamstring stretch with a heavy balance tax. Load is capped by stability, not strength — skill pick."
  },
  {
    "id": "b-stance-rdl",
    "name": "B-Stance Romanian Deadlift",
    "aliases": [
      "Kickstand RDL",
      "Staggered RDL"
    ],
    "category": "hamstrings-glutes",
    "muscle": "hamstrings",
    "secondary": [
      "glutes",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Kickstand gives near-unilateral stretch with far more stability than a true SLDL. The practical way to load one leg deep."
  },
  {
    "id": "cable-glute-kickback",
    "name": "Cable Glute Kickback",
    "aliases": [
      "Cable Hip Extension",
      "Glute Kickback"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings"
    ],
    "pattern": "hip-extension",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Isolated unilateral hip extension with constant cable tension. Low fatigue and tech-friendly — a clean glute pump finisher."
  },
  {
    "id": "machine-glute-kickback",
    "name": "Machine Glute Kickback",
    "aliases": [
      "Pendulum Kickback",
      "Glute Press Machine"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "secondary": [
      "hamstrings"
    ],
    "pattern": "hip-extension",
    "equipment": "machine",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fully supported unilateral glute isolation, easy load tracking. Best beginner glute drill and a strong dropset tool."
  },
  {
    "id": "hip-abduction-machine",
    "name": "Hip Abduction Machine",
    "aliases": [
      "Seated Abduction",
      "Glute Med Machine"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "pattern": "abduction",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Targets glute medius the other movements miss — lean the torso forward to bias upper glutes. Fully supported, takes every technique."
  },
  {
    "id": "cable-hip-abduction",
    "name": "Cable Hip Abduction",
    "aliases": [
      "Standing Cable Abduction"
    ],
    "category": "hamstrings-glutes",
    "muscle": "glutes",
    "pattern": "abduction",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 2,
    "skill": 2,
    "stretch": 3,
    "loadability": 3,
    "stability": 2,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Standing glute-med isolation with a loaded stretch across the body. Standing balance limits load vs the machine version."
  },
  {
    "id": "barbell-bench-press",
    "name": "Barbell Bench Press",
    "aliases": [
      "Flat Bench",
      "Bench Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The strength staple — trivially loadable and trackable, but the fixed bar limits depth and the dangerous failure point bars intensity techniques. Moderate stretch; DBs out-stretch it."
  },
  {
    "id": "incline-barbell-bench-press",
    "name": "Incline Barbell Bench Press",
    "aliases": [
      "Incline Bench"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "front-delts",
      "triceps"
    ],
    "pattern": "incline-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "30-45deg biases the underdeveloped upper/clavicular fibres with a deeper stretch than flat. Loadable staple; failure point still gates intensity techniques."
  },
  {
    "id": "dumbbell-bench-press",
    "name": "Dumbbell Bench Press",
    "aliases": [
      "DB Bench",
      "Flat DB Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 2,
    "fatigue": 3,
    "power": 3,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Independent arms allow a deeper stretch and greater ROM than the barbell. Lower stability taxes balance; getting heavy DBs into position is the loadability ceiling."
  },
  {
    "id": "incline-dumbbell-bench-press",
    "name": "Incline Dumbbell Bench Press",
    "aliases": [
      "Incline DB Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "front-delts",
      "triceps"
    ],
    "pattern": "incline-press",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elite upper-chest builder — incline angle plus DB ROM gives a deep loaded stretch on the clavicular head exactly where modern emphasis sits."
  },
  {
    "id": "decline-barbell-bench-press",
    "name": "Decline Barbell Bench Press",
    "aliases": [
      "Decline Bench"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps"
    ],
    "pattern": "horizontal-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 2,
    "loadability": 5,
    "stability": 3,
    "fatigue": 3,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Hits the sternal/lower fibres but the short ROM and shortened-bias make it a lesser builder than flat or incline. Heavy-loadable; weighted dip generally beats it."
  },
  {
    "id": "machine-chest-press",
    "name": "Machine Chest Press",
    "aliases": [
      "Seated Chest Press",
      "Hammer Strength Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Fully supported and dial-loadable — the safe-failure workhorse that suits every intensity technique. Spans all tiers; elite programs still run machine-press dropsets."
  },
  {
    "id": "incline-machine-press",
    "name": "Incline Machine Press",
    "aliases": [
      "Seated Incline Press Machine"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "front-delts",
      "triceps"
    ],
    "pattern": "incline-press",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Supported upper-chest builder with a good stretch and safe failure — ideal vehicle for dropsets and lengthened partials. Plate-loaded variants (Hammer) track cleanly; usable at every tier."
  },
  {
    "id": "smith-machine-bench-press",
    "name": "Smith Machine Bench Press",
    "aliases": [
      "Smith Bench"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fixed bar path removes balance demand, letting you push closer to failure safely and run lengthened partials. As a feature lift it fades for elite; good bridge for newer lifters."
  },
  {
    "id": "smith-incline-press",
    "name": "Smith Machine Incline Press",
    "aliases": [
      "Smith Incline"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "front-delts",
      "triceps"
    ],
    "pattern": "incline-press",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Stable upper-chest pressing with a strong stretch; fixed path lets you train to failure and stretch-partial without a spotter."
  },
  {
    "id": "weighted-chest-dip",
    "name": "Weighted Chest Dip",
    "aliases": [
      "Chest Dip",
      "Weighted Dip"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 5,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elite lower/sternal builder — forward lean plus deep bottom gives a brutal loaded stretch, exactly where lengthened partials live. Add load via belt; deep stretch and shoulder demand keep it off beginners."
  },
  {
    "id": "push-up",
    "name": "Push-Up",
    "aliases": [
      "Pushup",
      "Press-Up"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "The entry-point press — anyone day one, no kit. Floor stops ROM short so the stretch is limited; loadability is the weak point (plates/bands awkward)."
  },
  {
    "id": "deficit-push-up",
    "name": "Deficit Push-Up",
    "aliases": [
      "Ring Push-Up",
      "Push-Up on Handles"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 2,
    "stability": 2,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "slow-eccentric",
      "myo-reps"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Hands elevated on rings/handles restores the deep stretch a floor push-up loses. Rings add instability; the loaded lengthened position is the value."
  },
  {
    "id": "clap-push-up",
    "name": "Plyometric (Clap) Push-Up",
    "aliases": [
      "Clap Push-Up",
      "Explosive Push-Up"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "throw",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 1,
    "stability": 2,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "A genuine ballistic upper-body power drill — ground is thrown away explosively. Poor hypertrophy stimulus and unloadable; included for the power dimension."
  },
  {
    "id": "barbell-bench-throw",
    "name": "Barbell Bench Press Throw (Smith)",
    "aliases": [
      "Bench Throw",
      "Ballistic Bench"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "throw",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 4,
    "stability": 4,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Loadable upper-body ballistic — bar is released/projected explosively in a Smith for safety. Power-development tool, not a builder; needs the supported track and experience."
  },
  {
    "id": "pec-deck",
    "name": "Pec Deck Fly",
    "aliases": [
      "Pec Deck",
      "Butterfly Machine"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "fly",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 5,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The isolation staple — fully supported, dial-loadable, deep loaded stretch at the open position, and it suits every intensity technique. Pure adduction with near-zero CNS cost."
  },
  {
    "id": "cable-fly-high-to-low",
    "name": "Cable Fly (High-to-Low)",
    "aliases": [
      "High Cable Fly",
      "Cable Crossover"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "fly",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Constant tension through the full adduction arc with a loaded stretch at the open position — high-to-low biases lower/sternal fibres. Standing balance lowers stability slightly."
  },
  {
    "id": "cable-fly-low-to-high",
    "name": "Cable Fly (Low-to-High)",
    "aliases": [
      "Low Cable Fly",
      "Incline Cable Fly"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "fly",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Upward arc with constant tension biases the upper/clavicular fibres and loads them stretched. A clean upper-chest isolation that takes dropsets and partials well."
  },
  {
    "id": "seated-cable-fly",
    "name": "Seated Cable Fly (Chest-Supported)",
    "aliases": [
      "Seated Cable Crossover",
      "Bench Cable Fly"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "fly",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 5,
    "loadability": 4,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Seated against a bench removes balance so the cable's loaded stretch can be chased to failure. Deep lengthened position plus full technique compatibility — a top isolation pick."
  },
  {
    "id": "dumbbell-fly",
    "name": "Dumbbell Fly (Flat)",
    "aliases": [
      "DB Fly",
      "Flat Fly"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "fly",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Deep loaded stretch at the bottom is the whole point; tension drops off near the top where DBs go vertical. Shoulder-position skill and instability keep it off true beginners."
  },
  {
    "id": "incline-dumbbell-fly",
    "name": "Incline Dumbbell Fly",
    "aliases": [
      "Incline DB Fly"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "fly",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Deep stretch on the upper-chest fibres specifically; top-end tension still falls off. Best run with a slow eccentric and stretch-emphasis rather than heavy load."
  },
  {
    "id": "deep-stretch-dumbbell-press",
    "name": "Deep-Stretch Dumbbell Press",
    "aliases": [
      "Stretch-Emphasis DB Press",
      "Floor-Off Bench DB Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 2,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Press driven into a maximal bottom stretch — combines DB ROM with deliberate lengthened-position loading. Advanced/elite stretch-hypertrophy tool; shoulder-aware execution required."
  },
  {
    "id": "single-arm-cable-press",
    "name": "Single-Arm Cable Chest Press",
    "aliases": [
      "Unilateral Cable Press",
      "Standing Cable Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "iso-hold",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Unilateral cable press with a horizontal adduction component and constant tension — stretch behind the body, but not a deep loaded lengthened position like a fly. Per-side work for imbalances; anti-rotation core cost."
  },
  {
    "id": "guillotine-press",
    "name": "Guillotine Press (Neck Press)",
    "aliases": [
      "Neck Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "secondary": [
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 5,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Flared elbows and bar-to-neck path maximise sternal stretch and chest bias — strong builder but high shoulder risk. Elite-only curio; run light with control, never to grinding failure."
  },
  {
    "id": "svend-press",
    "name": "Svend Press / Plate Squeeze Press",
    "aliases": [
      "Plate Press",
      "Squeeze Press"
    ],
    "category": "chest",
    "muscle": "chest",
    "pattern": "horizontal-press",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 2,
    "skill": 2,
    "stretch": 1,
    "loadability": 2,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Inner-chest squeeze finisher — shortened-bias adduction with no loaded stretch and awkward loading. Niche burnout/iso-hold tool, not a primary builder."
  },
  {
    "id": "pull-up",
    "name": "Pull-Up",
    "aliases": [
      "Pronated Pull-Up",
      "Overhand Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "lower-traps",
      "rhomboids",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Full dead-hang loads lats deeply stretched; bodyweight makes load granularity poor until weight is added. Gated by needing to own bodyweight first."
  },
  {
    "id": "weighted-pull-up",
    "name": "Weighted Pull-Up",
    "aliases": [
      "Loaded Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major",
      "lower-traps",
      "rhomboids"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 5,
    "skill": 4,
    "stretch": 4,
    "loadability": 3,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "cluster"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elite lat builder — deep stretch under heavy load. Belt/dumbbell loading trackable but coarser than a stack. High skill and stabilisation cost; not a beginner lift."
  },
  {
    "id": "chin-up",
    "name": "Chin-Up",
    "aliases": [
      "Supinated Pull-Up",
      "Underhand Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "brachialis",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Supinated grip adds heavy biceps involvement and is slightly easier to own than pronated; strong lat stretch at the bottom."
  },
  {
    "id": "weighted-chin-up",
    "name": "Weighted Chin-Up",
    "aliases": [
      "Loaded Chin-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "brachialis",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 5,
    "skill": 4,
    "stretch": 4,
    "loadability": 3,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "cluster"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "One of the best simultaneous lat+biceps builders under load. Loading coarser than a machine; high stabilisation and CNS cost place it advanced+."
  },
  {
    "id": "neutral-grip-pull-up",
    "name": "Neutral-Grip Pull-Up",
    "aliases": [
      "Hammer-Grip Pull-Up",
      "Parallel-Grip Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "brachialis",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Joint-friendliest grip; strong lat and brachialis recruitment. Slightly easier to own than pronated, deep stretch retained."
  },
  {
    "id": "assisted-pull-up-machine",
    "name": "Assisted Pull-Up (Machine)",
    "aliases": [
      "Gravitron",
      "Counterweight Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major",
      "rhomboids"
    ],
    "pattern": "vertical-pull",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Bridges a beginner to real pull-ups: full-ROM with kneeling support and stack-tracked assistance. Backwards assistance curve — most help comes at the stretched bottom, offloading the best range — so stretch only moderate. Outgrown once bodyweight is owned."
  },
  {
    "id": "band-assisted-pull-up",
    "name": "Band-Assisted Pull-Up",
    "aliases": [
      "Resistance Band Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 2,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Band gives most help at the stretched bottom — backwards assistance curve — and load tracking is poor. A capable on-ramp, not a precise tool."
  },
  {
    "id": "lat-pulldown",
    "name": "Lat Pulldown",
    "aliases": [
      "Wide-Grip Pulldown",
      "Cable Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major",
      "rhomboids",
      "lower-traps"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The vertical-pull workhorse: full stretch at top, trivially loaded and tracked, thigh pad lets you train near failure safely. Spans every tier."
  },
  {
    "id": "neutral-grip-pulldown",
    "name": "Neutral-Grip Lat Pulldown",
    "aliases": [
      "Close-Grip Pulldown",
      "Parallel-Grip Pulldown",
      "V-Bar Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "brachialis",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Close neutral grip lets the elbow drive deeper for a bigger lat contraction; strongest stretch overhead. Very intensity-technique friendly."
  },
  {
    "id": "underhand-pulldown",
    "name": "Underhand Lat Pulldown",
    "aliases": [
      "Supinated Pulldown",
      "Reverse-Grip Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Supinated grip shortens the stretch slightly but biases lower lats and recruits biceps hard. Solid staple across every tier."
  },
  {
    "id": "wide-grip-pulldown",
    "name": "Wide-Grip Lat Pulldown",
    "aliases": [
      "Wide Overhand Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "rhomboids",
      "lower-traps"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Wide grip emphasises lat width and upper-back sweep; strong overhead stretch. Slightly shorter ROM at the bottom than close grip."
  },
  {
    "id": "single-arm-pulldown",
    "name": "Single-Arm Cable Pulldown",
    "aliases": [
      "Unilateral Lat Pulldown",
      "One-Arm Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "biceps"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Straight-down unilateral pull lets the torso open for extra ROM and a deeper loaded stretch than two-arm; fixes side imbalances. Slightly more skill to brace."
  },
  {
    "id": "machine-pulldown",
    "name": "Machine Lat Pulldown",
    "aliases": [
      "Iso-Lateral Pulldown",
      "Hammer Strength Pulldown",
      "Pendulum Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major",
      "rhomboids"
    ],
    "pattern": "vertical-pull",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Chest-supported path removes all balance demand — point-and-shoot lat stimulus. Iso-lateral arms allow unilateral training and big stretch. Beginner entry that stays a staple into advanced bodybuilding back work."
  },
  {
    "id": "kneeling-cable-pulldown",
    "name": "Kneeling Cable Lat Pulldown",
    "aliases": [
      "Half-Kneeling Pulldown",
      "Tall-Kneeling Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "biceps"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Free-standing kneeling version when no seated station is available; some anti-extension core demand limits loading vs a pad-anchored machine."
  },
  {
    "id": "straight-arm-pulldown",
    "name": "Straight-Arm Pulldown",
    "aliases": [
      "Cable Straight-Arm Pulldown",
      "Lat Pushdown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "long-head-triceps",
      "rear-delts"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Pure shoulder-extension lat isolation — no biceps involvement. Tension peaks at the bottom/shortened position and is lowest overhead, so it's a peak-contraction tool, not lengthened-bias. Best way to isolate lats from arm fatigue; very low systemic cost."
  },
  {
    "id": "cable-pullover",
    "name": "Cable Pullover",
    "aliases": [
      "Standing Cable Pullover",
      "Bent-Over Cable Pullover"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "long-head-triceps",
      "lower-pec"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Constant cable tension through a deep overhead stretch — excellent lengthened-bias lat isolator. Bench-supported variant adds stability for heavier load."
  },
  {
    "id": "dumbbell-pullover",
    "name": "Dumbbell Pullover",
    "aliases": [
      "Cross-Bench Pullover",
      "Lat Pullover"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "long-head-triceps",
      "serratus",
      "pecs"
    ],
    "pattern": "vertical-pull",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Deep loaded stretch at the bottom is its whole point; tension falls off near the top. Cross-bench setup and shoulder position need some skill. Classic stretch builder."
  },
  {
    "id": "machine-pullover",
    "name": "Machine Pullover",
    "aliases": [
      "Nautilus Pullover",
      "Plate-Loaded Pullover"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "lower-pec",
      "serratus"
    ],
    "pattern": "vertical-pull",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 5,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Resistance profile matches the strength curve — loaded stretch held all the way through, fully supported and stack-tracked. One of the best isolated lat builders; rare machine."
  },
  {
    "id": "incline-bench-db-pullover",
    "name": "Incline Bench Dumbbell Pullover",
    "aliases": [
      "Incline Pullover"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "long-head-triceps",
      "serratus"
    ],
    "pattern": "vertical-pull",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 5,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Incline keeps tension on the lat deeper into the stretched range than flat cross-bench. Specialty stretch-focus drill for sophisticated trainees."
  },
  {
    "id": "cross-body-single-arm-pulldown",
    "name": "Cross-Body Single-Arm Lat Pulldown",
    "aliases": [
      "Lengthened Lat Pulldown",
      "Cross-Body Cable Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "biceps"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "High cable pulled across and down the body adds adduction to the line of pull, biasing the lat's stretched, lengthened position harder than the straight-down single-arm pulldown. Premier lengthened-bias unilateral isolator for advanced work."
  },
  {
    "id": "kipping-pull-up",
    "name": "Kipping Pull-Up",
    "aliases": [
      "CrossFit Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "teres-major",
      "hip-flexors",
      "rhomboids"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 3,
    "loadability": 2,
    "stability": 1,
    "fatigue": 3,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Ballistic hip-driven pull for work-capacity/sport, not hypertrophy — momentum offloads the lats. High skill and unstable; included as the power expression of the pattern."
  },
  {
    "id": "behind-neck-pulldown",
    "name": "Behind-the-Neck Lat Pulldown",
    "aliases": [
      "BTN Pulldown"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "upper-traps",
      "rhomboids",
      "teres-major"
    ],
    "pattern": "vertical-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced"
    ],
    "isPower": false,
    "notes": "Forces full external rotation and shoulder strain to clear the head; ROM and lat stretch are actually worse than to-the-front. Niche, demands healthy shoulders — not a default."
  },
  {
    "id": "archer-pull-up",
    "name": "Archer Pull-Up",
    "aliases": [
      "Side-to-Side Pull-Up"
    ],
    "category": "back-vertical",
    "muscle": "lats",
    "secondary": [
      "biceps",
      "teres-major",
      "core"
    ],
    "pattern": "vertical-pull",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 3,
    "skill": 5,
    "stretch": 4,
    "loadability": 2,
    "stability": 1,
    "fatigue": 3,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "elite"
    ],
    "isPower": false,
    "notes": "Near-unilateral bodyweight pull shifting most load to one lat — a step toward the one-arm chin. High skill, low stability, hard to load; elite calisthenic only."
  },
  {
    "id": "barbell-bent-over-row",
    "name": "Barbell Bent-Over Row",
    "aliases": [
      "Bent Row",
      "BB Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "spinal-erectors",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 2,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Heaviest loadable horizontal pull; hip-hinge hold taxes erectors and gates skill. Stretch only moderate — partial ROM, no support."
  },
  {
    "id": "pendlay-row",
    "name": "Pendlay Row",
    "aliases": [
      "Dead-stop Row",
      "Floor Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "spinal-erectors",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 2,
    "fatigue": 5,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Strict horizontal torso, each rep from a floor dead-stop. The reset kills the stretch-shortening cycle so power tops at 3; high CNS cost and position discipline keep it advanced/elite."
  },
  {
    "id": "t-bar-row",
    "name": "T-Bar Row",
    "aliases": [
      "Landmine Row",
      "Corner Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 3,
    "loadability": 5,
    "stability": 2,
    "fatigue": 4,
    "power": 3,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Fixed arc more forgiving than free barbell, but still a hinge-held bent row — same erector/balance tax, so stability stays low. Neutral close grip loads heavy on the mid-back."
  },
  {
    "id": "chest-supported-t-bar-row",
    "name": "Chest-Supported T-Bar Row",
    "aliases": [
      "Plate-Loaded Chest-Supported Row",
      "Hammer Strength Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 5,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "lengthened-partials",
      "myo-reps",
      "cluster"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Pad removes erector/balance cost so all effort goes to the back; full protracted stretch at bottom. Elite builder that still suits clusters and dropsets — spans every tier."
  },
  {
    "id": "seal-row",
    "name": "Seal Row",
    "aliases": [
      "Bench Seal Row",
      "Prone Bench Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 2,
    "stretch": 5,
    "loadability": 5,
    "stability": 5,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Fully prone on a raised bench — zero momentum, zero erector involvement, full dead-hang bottom. Among the deepest loaded mid-back stretches available; only catch is bench setup height."
  },
  {
    "id": "dumbbell-row",
    "name": "Single-Arm Dumbbell Row",
    "aliases": [
      "One-Arm DB Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 4,
    "fatigue": 3,
    "power": 3,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Bench-braced so stable and beginner-safe; long ROM lets the lat reach deep into stretch and full protraction. The universal staple — every tier."
  },
  {
    "id": "chest-supported-dumbbell-row",
    "name": "Chest-Supported Dumbbell Row",
    "aliases": [
      "Incline Bench DB Row",
      "Prone Incline Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 4,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "dropset",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Incline bench kills cheating and erector load — pure back. Deep stretch at the bottom; DB cap limits top-end loadability vs machine, so less an elite feature lift."
  },
  {
    "id": "meadows-row",
    "name": "Meadows Row",
    "aliases": [
      "Landmine Meadows Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "barbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 3,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Perpendicular landmine stance gives a huge cross-body stretch and long arc to the lat. Skill and unilateral balance demand keep it advanced/elite."
  },
  {
    "id": "cable-seated-row-neutral",
    "name": "Seated Cable Row (Neutral Grip)",
    "aliases": [
      "Low Row",
      "V-Bar Cable Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "lengthened-partials",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Constant cable tension, easy stretch on the reach, trivially loadable and trackable. A default beginner horizontal pull; ubiquitous staple through advanced."
  },
  {
    "id": "cable-seated-row-wide",
    "name": "Wide-Grip Seated Cable Row",
    "aliases": [
      "Wide Cable Row",
      "Rope/Bar Wide Row"
    ],
    "category": "back-horizontal",
    "muscle": "mid-traps",
    "secondary": [
      "rhomboids",
      "rear-delts",
      "lats",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "lengthened-partials",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Wide grip with high elbows shifts bias to rhomboids/mid-traps and upper-back thickness. Constant tension, fully loadable — the go-to mid-back detail row at any tier."
  },
  {
    "id": "single-arm-cable-row",
    "name": "Single-Arm Seated Cable Row",
    "aliases": [
      "Unilateral Cable Row",
      "One-Arm Low Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "rhomboids",
      "rear-delts",
      "mid-traps",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "lengthened-partials",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Letting the torso rotate open lets the lat reach into a deep loaded stretch and full protraction. Constant tension, intensity-technique-friendly — an advanced/elite stretch tool."
  },
  {
    "id": "machine-row-converging",
    "name": "Converging Plate-Loaded Row",
    "aliases": [
      "Hammer Strength Iso-Row",
      "Converging Machine Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "lengthened-partials",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Chest pad + converging arc gives a long stretched-to-contracted path with zero balance cost. Foolproof and dropset-ready — beginner through advanced, but an elite has outgrown it as a feature."
  },
  {
    "id": "machine-row-seated",
    "name": "Seated Machine Row",
    "aliases": [
      "Selectorized Row",
      "Pin-Stack Row"
    ],
    "category": "back-horizontal",
    "muscle": "mid-traps",
    "secondary": [
      "rhomboids",
      "lats",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fully supported pin-stack with instant load changes — THE beginner anchor: lowest floor, trivial tracking, foolproof groove. Fixed path caps stretch, so an advanced trainee outgrows it as a feature."
  },
  {
    "id": "smith-machine-row",
    "name": "Smith Machine Bent-Over Row",
    "aliases": [
      "Smith Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fixed bar path removes the balance element of a free bent row, so you can chase load with less skill. Still requires the hinge hold; mid-tier convenience option."
  },
  {
    "id": "inverted-row",
    "name": "Inverted Row",
    "aliases": [
      "Bodyweight Row",
      "Australian Pull-Up",
      "Ring Row"
    ],
    "category": "back-horizontal",
    "muscle": "mid-traps",
    "secondary": [
      "rhomboids",
      "lats",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "iso-hold",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Bar height scales difficulty for true beginners and rehab; great mid-back contraction. Loadability poor (bodyweight + vest only) — caps it below advanced as a primary."
  },
  {
    "id": "kroc-row",
    "name": "Kroc Row (Heavy Cheat DB Row)",
    "aliases": [
      "Heavy Dumbbell Row",
      "Cheat Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps",
      "spinal-erectors"
    ],
    "pattern": "horizontal-pull",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "rest-pause"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Heavy high-rep DB row with controlled body english for overload and grip past normal limits. It's a fatigue grind, not a ballistic — body english is momentum-cheating under fatigue, so power is low. Advanced/elite only."
  },
  {
    "id": "landmine-two-hand-row",
    "name": "Landmine Bent-Over Row (Two-Hand)",
    "aliases": [
      "Double-Handle Landmine Row",
      "V-Handle Landmine Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 3,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Landmine arc plus close neutral handle gives long ROM and a friendly stretch on the lats. More forgiving than a free barbell row; solid mid-tier thickness builder."
  },
  {
    "id": "incline-prone-cable-row",
    "name": "Incline-Supported Cable Row",
    "aliases": [
      "Chest-Supported Cable Row",
      "Prone Cable Row"
    ],
    "category": "back-horizontal",
    "muscle": "lats",
    "secondary": [
      "mid-traps",
      "rhomboids",
      "rear-delts",
      "biceps"
    ],
    "pattern": "horizontal-pull",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "lengthened-partials",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Incline bench in front of a low pulley: constant tension plus full chest support plus deep protracted stretch. A near-perfect stretch-biased row that still drops and myo-reps easily."
  },
  {
    "id": "barbell-overhead-press",
    "name": "Barbell Overhead Press",
    "aliases": [
      "Standing Military Press",
      "OHP",
      "Strict Press"
    ],
    "category": "shoulders",
    "muscle": "front delts",
    "secondary": [
      "side delts",
      "triceps",
      "upper chest"
    ],
    "pattern": "vertical-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 2,
    "loadability": 5,
    "stability": 2,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The strength benchmark for delts — front-delt biased, heavy, trackable. Standing core/balance demand keeps stability low; too risky to push intensity techniques."
  },
  {
    "id": "seated-dumbbell-shoulder-press",
    "name": "Seated Dumbbell Shoulder Press",
    "aliases": [
      "DB Overhead Press",
      "Seated DB Press"
    ],
    "category": "shoulders",
    "muscle": "front delts",
    "secondary": [
      "side delts",
      "triceps"
    ],
    "pattern": "vertical-press",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Back-supported, freer ROM than barbell with a bit more stretch at the bottom. A true staple across every tier."
  },
  {
    "id": "machine-shoulder-press",
    "name": "Machine Shoulder Press",
    "aliases": [
      "Plate-Loaded Shoulder Press",
      "Hammer Strength Press"
    ],
    "category": "shoulders",
    "muscle": "front delts",
    "secondary": [
      "side delts",
      "triceps"
    ],
    "pattern": "vertical-press",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fixed path, fully supported — ideal beginner press and a low-fatigue intensity-technique vehicle that advanced trainees still use on a fatigue budget."
  },
  {
    "id": "smith-machine-shoulder-press",
    "name": "Smith Machine Shoulder Press",
    "aliases": [
      "Smith Overhead Press"
    ],
    "category": "shoulders",
    "muscle": "front delts",
    "secondary": [
      "side delts",
      "triceps"
    ],
    "pattern": "vertical-press",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fixed bar path removes all balance cost while keeping barbell loadability — functionally machine-stable, so it carries meaningful load with no skill tax."
  },
  {
    "id": "arnold-press",
    "name": "Arnold Press",
    "aliases": [
      "Rotational DB Press"
    ],
    "category": "shoulders",
    "muscle": "front delts",
    "secondary": [
      "side delts",
      "triceps"
    ],
    "pattern": "vertical-press",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Rotation through the press adds front/side delt time under tension but caps load and can't be done explosively. A flavour variant, not a benchmark."
  },
  {
    "id": "z-press",
    "name": "Z Press",
    "aliases": [
      "Seated Floor Press",
      "Barbell Z Press"
    ],
    "category": "shoulders",
    "muscle": "front delts",
    "secondary": [
      "side delts",
      "triceps",
      "core"
    ],
    "pattern": "vertical-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 4,
    "stretch": 2,
    "loadability": 4,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Seated on the floor with no leg drive — strict, brutally honest pressing strength and heavy core demand. High skill, niche, advanced+ only."
  },
  {
    "id": "dumbbell-lateral-raise",
    "name": "Dumbbell Lateral Raise",
    "aliases": [
      "DB Side Raise",
      "Lateral Raise"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "pattern": "lateral-raise",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The side-delt staple. Resistance drops off at the bottom (gravity vertical), so stretch is modest — but universal across tiers."
  },
  {
    "id": "cable-lateral-raise",
    "name": "Cable Lateral Raise",
    "aliases": [
      "Single-Arm Cable Side Raise"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "pattern": "lateral-raise",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "iso-hold",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Cable from low/behind keeps tension through the stretched bottom where DBs go slack — arguably the best everyday side-delt builder. Trivial fatigue, technique-friendly."
  },
  {
    "id": "behind-body-cable-lateral-raise",
    "name": "Behind-the-Body Cable Lateral Raise",
    "aliases": [
      "Behind-Back Cable Raise",
      "Stretch Lateral Raise"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "pattern": "lateral-raise",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Cable run behind the torso loads the side delt in deep adduction — maximal lengthened tension. A specialty stretch drill for advanced+."
  },
  {
    "id": "machine-lateral-raise",
    "name": "Machine Lateral Raise",
    "aliases": [
      "Lateral Raise Machine",
      "Side Delt Machine"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "pattern": "lateral-raise",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Cam keeps tension even, fully supported, trivially loadable — the best beginner side-delt option and a clean dropset tool. Pad-against-arm versions blunt the stretch slightly."
  },
  {
    "id": "lean-away-lateral-raise",
    "name": "Lean-Away Lateral Raise",
    "aliases": [
      "Leaning DB Lateral Raise"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "pattern": "lateral-raise",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Leaning off an upright shifts the resistance curve so the bottom is loaded — DBs that finally challenge the stretch. Holding-on balance keeps stability low-ish."
  },
  {
    "id": "incline-side-lying-lateral-raise",
    "name": "Incline Side-Lying Lateral Raise",
    "aliases": [
      "Side-Lying DB Raise",
      "Bench Side Raise"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "pattern": "lateral-raise",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 2,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "myo-reps",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Side-lying loads peak tension at mid-range and goes light in the lengthened (arm-across) position — a peak-contraction tool, not a stretch one. Light loads, awkward to progress."
  },
  {
    "id": "cable-upright-row",
    "name": "Cable Upright Row",
    "aliases": [
      "Rope Upright Row",
      "Wide-Grip Upright Row"
    ],
    "category": "shoulders",
    "muscle": "side delts",
    "secondary": [
      "traps",
      "front delts"
    ],
    "pattern": "lateral-raise",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 2,
    "skill": 2,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Constant cable tension and a rope let the elbows flare comfortably — the safer upright-row expression. Still indirect for delts vs a true lateral raise; included for completeness, not as a primary."
  },
  {
    "id": "reverse-pec-deck",
    "name": "Reverse Pec Deck",
    "aliases": [
      "Rear Delt Machine",
      "Reverse Fly Machine"
    ],
    "category": "shoulders",
    "muscle": "rear delts",
    "secondary": [
      "mid traps",
      "rhomboids"
    ],
    "pattern": "rear-delt",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Chest-supported, trivially loadable, low fatigue — the most reliable rear-delt builder and a perfect dropset tool. Cam loads the contracted end, so true stretch is modest. Spans all tiers."
  },
  {
    "id": "cable-rear-delt-fly",
    "name": "Cable Rear Delt Fly",
    "aliases": [
      "Bayesian Rear Delt",
      "Cross-Body Cable Rear Fly",
      "Cable Reverse Fly"
    ],
    "category": "shoulders",
    "muscle": "rear delts",
    "secondary": [
      "mid traps"
    ],
    "pattern": "rear-delt",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 2,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Crossing the body gives the rear delt a loaded stretch at the start and constant tension throughout. Standing balance keeps stability low — advanced flavour over the machine."
  },
  {
    "id": "dumbbell-rear-delt-fly",
    "name": "Bent-Over Dumbbell Rear Delt Fly",
    "aliases": [
      "Bent-Over Reverse Fly",
      "Rear Delt Raise"
    ],
    "category": "shoulders",
    "muscle": "rear delts",
    "secondary": [
      "mid traps",
      "rhomboids"
    ],
    "pattern": "rear-delt",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Resistance falls off at the stretched bottom and the bent-over hold taxes the low back — serviceable but bettered by the chest-supported version."
  },
  {
    "id": "chest-supported-dumbbell-rear-delt-fly",
    "name": "Chest-Supported Dumbbell Rear Delt Fly",
    "aliases": [
      "Incline Bench Reverse Fly",
      "Prone Rear Delt Raise"
    ],
    "category": "shoulders",
    "muscle": "rear delts",
    "secondary": [
      "mid traps",
      "rhomboids"
    ],
    "pattern": "rear-delt",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 3,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "iso-hold",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Bench takes the low back out, letting the rear delt work clean and supported. The free-weight rear-delt option that earns a spot at every tier."
  },
  {
    "id": "face-pull",
    "name": "Face Pull",
    "aliases": [
      "Rope Face Pull",
      "Cable Face Pull"
    ],
    "category": "shoulders",
    "muscle": "rear delts",
    "secondary": [
      "mid traps",
      "external rotators"
    ],
    "pattern": "rear-delt",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Rear delt plus external rotators and scap health — high-rep shoulder insurance. Constant tension, near-zero fatigue, every tier benefits."
  },
  {
    "id": "cable-rear-delt-row",
    "name": "Wide-Grip Cable Rear Delt Row",
    "aliases": [
      "Rope Rear Delt Row",
      "High Elbow Row"
    ],
    "category": "shoulders",
    "muscle": "rear delts",
    "secondary": [
      "mid traps",
      "rhomboids"
    ],
    "pattern": "rear-delt",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "High-elbow rowing with a wide grip biases rear delts over lats — heavier loadable than a fly, with a decent stretch from the protracted start."
  },
  {
    "id": "ez-bar-curl",
    "name": "EZ-Bar Curl",
    "aliases": [
      "EZ Curl",
      "Cambered Bar Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "forearms"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "cluster",
      "slow-eccentric",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Wrist-friendly bread-and-butter loaded curl; trivially loadable, standing ROM gives moderate stretch only."
  },
  {
    "id": "barbell-curl",
    "name": "Standing Barbell Curl",
    "aliases": [
      "Straight Bar Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "forearms"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "cluster",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Heaviest straight-bar curl; supinated grip taxes wrists, cheat-prone but loads hard. Moderate stretch from standing position."
  },
  {
    "id": "dumbbell-curl",
    "name": "Standing Dumbbell Curl",
    "aliases": [
      "Alternating DB Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "forearms"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "slow-eccentric",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Supination through ROM with free peak contraction; lifelong staple that stays useful at every level — not a stability crutch. Moderate stretch."
  },
  {
    "id": "incline-dumbbell-curl",
    "name": "Incline Dumbbell Curl",
    "aliases": [
      "Incline Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "dropset",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Arm behind torso pulls the long head into deep loaded stretch — premier stretch-biased biceps builder."
  },
  {
    "id": "bayesian-cable-curl",
    "name": "Bayesian Cable Curl",
    "aliases": [
      "Behind-Body Cable Curl",
      "Bayesian Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 5,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "slow-eccentric",
      "rest-pause"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Standing, cable from behind keeps tension in the stretched position with constant resistance — elite stretch stimulus; the unsupported stance adds balance/setup skill."
  },
  {
    "id": "reclined-cable-curl",
    "name": "Reclined Cable Curl",
    "aliases": [
      "45-Degree Incline Cable Curl",
      "Lying Cable Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 5,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "lengthened-partials",
      "slow-eccentric",
      "rest-pause"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Bench-supported Bayesian variant — reclined torso in front of a low pulley puts the arm behind the body; the bench removes the balance demand so you can push the deep stretch harder than standing."
  },
  {
    "id": "cable-curl",
    "name": "Standing Cable Curl",
    "aliases": [
      "Cable Bar Curl",
      "Low Pulley Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "forearms"
    ],
    "pattern": "curl",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Constant tension throughout ROM; easy to load and run intensity techniques. Solid trackable staple."
  },
  {
    "id": "preacher-curl-ez",
    "name": "EZ-Bar Preacher Curl",
    "aliases": [
      "Preacher Curl",
      "Scott Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials",
      "cluster"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Pad fixes the arm forward of torso — strongest loaded stretch at the bottom; fully supported, easy to load."
  },
  {
    "id": "machine-preacher-curl",
    "name": "Machine Preacher Curl",
    "aliases": [
      "Biceps Curl Machine",
      "Plate-Loaded Preacher"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fully fixed path, day-one easy, ideal for failure-pushing intensity techniques. Beginner-grade staple an elite has outgrown as a feature lift."
  },
  {
    "id": "dumbbell-preacher-curl",
    "name": "Single-Arm Dumbbell Preacher Curl",
    "aliases": [
      "DB Preacher Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials",
      "dropset"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Unilateral preacher with free supination; deep stretch at the bottom, lets you push the lengthened position hard one arm at a time."
  },
  {
    "id": "spider-curl",
    "name": "Spider Curl",
    "aliases": [
      "Prone Incline Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Prone on incline bench, arm hangs vertical — resistance loads the biceps at the bottom/lengthened position (mirror of the preacher's loaded bottom). Strict, no cheat."
  },
  {
    "id": "concentration-curl",
    "name": "Concentration Curl",
    "aliases": [
      "Seated Concentration Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 3,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "iso-hold",
      "dropset"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Highest EMG peak but peak/shortened-biased; elbow braced on thigh for strict isolation. Good for mind-muscle, not a stretch builder."
  },
  {
    "id": "hammer-curl",
    "name": "Dumbbell Hammer Curl",
    "aliases": [
      "Neutral-Grip Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "brachioradialis",
      "forearms"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 2,
    "techniques": [
      "slow-eccentric",
      "dropset",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Neutral grip emphasizes brachialis/brachioradialis; heavier than supinated but secondary-emphasis for the biceps — calibrated to the standard-curl staple anchor."
  },
  {
    "id": "cross-body-hammer-curl",
    "name": "Cross-Body Hammer Curl",
    "aliases": [
      "Pinwheel Curl",
      "Cross-Body Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "brachioradialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "dropset"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Curling across the body maximizes brachialis line of pull; strongest brachialis-thickness option, secondary-emphasis for the biceps proper."
  },
  {
    "id": "cable-rope-hammer-curl",
    "name": "Cable Rope Hammer Curl",
    "aliases": [
      "Rope Hammer Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis",
      "brachioradialis"
    ],
    "pattern": "curl",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Neutral-grip with constant cable tension; brachialis-biased, ideal for high-rep failure work with intensity techniques."
  },
  {
    "id": "reverse-curl",
    "name": "Reverse Curl",
    "aliases": [
      "Pronated Curl",
      "EZ Reverse Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachioradialis",
      "brachialis",
      "forearm-extensors"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "dropset"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Pronated grip shifts load to brachioradialis/brachialis and forearm extensors; weaker leverage so lighter, builds elbow-flexor completeness."
  },
  {
    "id": "seated-dumbbell-curl",
    "name": "Seated Dumbbell Curl",
    "aliases": [
      "Seated Incline-Back DB Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "dropset"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Upright seated curl removes lower-back cheat; cleaner than standing for strict beginners. Moderate stretch."
  },
  {
    "id": "high-cable-curl",
    "name": "High Cable Curl",
    "aliases": [
      "Overhead Cable Curl",
      "Double Biceps Cable Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "iso-hold",
      "slow-eccentric",
      "myo-reps"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Arms abducted overhead — the long head is stretched at the SHOULDER while the elbow flexes, so stretch is driven by shoulder position. Strong peak/stretch combo, niche setup."
  },
  {
    "id": "drag-curl",
    "name": "Drag Curl",
    "aliases": [
      "Barbell Drag Curl"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Bar dragged up the torso, elbows back — shortens at top for long-head peak; shortened-biased, no bottom stretch."
  },
  {
    "id": "machine-curl",
    "name": "Selectorized Biceps Curl Machine",
    "aliases": [
      "Seated Curl Machine"
    ],
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fixed-path pin-loaded curl; the most beginner-proof option and best vehicle for failure-pushing techniques. Outgrown as a feature lift by elite."
  },
  {
    "id": "zottman-curl",
    "name": "Zottman Curl",
    "category": "biceps",
    "muscle": "biceps",
    "secondary": [
      "brachioradialis",
      "forearms",
      "brachialis"
    ],
    "pattern": "curl",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Supinated concentric, pronated eccentric — loads biceps up and forearms/brachioradialis on the negative; skill-heavy hybrid for advanced."
  },
  {
    "id": "cable-pushdown-bar",
    "name": "Cable Pushdown (Straight/EZ Bar)",
    "aliases": [
      "Tricep Pushdown",
      "Pressdown",
      "Bar Pushdown"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "The default beginner pushdown — fully supported, trivially loadable, near-zero skill. Pushdown line keeps tension at the short end, so stretch is low; arms-fixed-at-sides means modest lateral-head emphasis. Solid staple, not elite."
  },
  {
    "id": "cable-pushdown-rope",
    "name": "Rope Pushdown",
    "aliases": [
      "Tricep Rope Pressdown"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Rope lets you spread/pronate at lockout for a harder peak contraction. Same shortened bias as bar pushdown — low loaded stretch. Forgiving on the elbows, beginner-friendly staple."
  },
  {
    "id": "single-arm-cable-pushdown",
    "name": "Single-Arm Cable Pushdown (Reverse/Underhand Grip)",
    "aliases": [
      "Underhand Pushdown",
      "Reverse-Grip Pressdown",
      "Supinated Pushdown"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Supinated grip biases the medial head and lets you target each arm. Still a shortened-range pushdown so stretch stays low; the unilateral focus earns its intermediate/advanced slot."
  },
  {
    "id": "overhead-cable-extension-rope",
    "name": "Overhead Cable Extension (Rope)",
    "aliases": [
      "Cable Overhead Tricep Extension",
      "Rope Overhead Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Overhead shoulder flexion fully stretches the long head under constant cable tension — elite stretch-mediated builder, and easier on elbows than skullcrushers. Loads the lengthened position exactly where modern hypertrophy wants it. Spans all tiers."
  },
  {
    "id": "single-arm-overhead-cable-extension",
    "name": "Single-Arm Overhead Cable Extension",
    "aliases": [
      "Unilateral Overhead Cable Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Single-arm overhead with a long deep stretch and full ROM; more setup/control demand than the rope version. Excellent lengthened loading per arm — an advanced/elite detail tool."
  },
  {
    "id": "bayesian-cable-extension",
    "name": "Bayesian Cable Triceps Extension",
    "aliases": [
      "Cable Tricep Kickback",
      "Behind-Body Cable Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Cable behind the body keeps tension at the shortened lockout AND through the stretched start — far superior to the DB kickback's tensionless top. Peak-contraction and lengthened both covered; a smart isolation pick."
  },
  {
    "id": "ez-skullcrusher",
    "name": "Skullcrusher (EZ Bar, to forehead)",
    "aliases": [
      "Lying Triceps Extension",
      "Nose-Breaker",
      "French Press"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 5,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Free-weight lying extension loading a real stretch at the bottom; the staple long-head builder. Bar at failure is dicey, so few intensity techniques. Elbow-cranky for some — needs technique, hence intermediate+."
  },
  {
    "id": "ez-skullcrusher-behind-head",
    "name": "Skullcrusher to Behind Head (EZ Bar)",
    "aliases": [
      "Behind-Head Extension",
      "Long-Length Skullcrusher"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 3,
    "stretch": 5,
    "loadability": 5,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Lowering past the head adds shoulder flexion, maximizing long-head stretch — a top-tier lengthened builder. Demands control and healthy elbows/shoulders; advanced/elite only."
  },
  {
    "id": "db-skullcrusher",
    "name": "Dumbbell Skullcrusher",
    "aliases": [
      "DB Lying Extension",
      "Neutral-Grip Skullcrusher"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Neutral grip is easier on elbows than the bar and lets you lower toward the shoulders for extra stretch. Per-arm balance, good loaded lengthened position. Solid stretch-biased alternative to the EZ bar."
  },
  {
    "id": "db-overhead-extension-two-hand",
    "name": "Dumbbell Overhead Extension (Two-Hand, Seated)",
    "aliases": [
      "Seated DB French Press",
      "Two-Hand Overhead Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Both hands on one bell overhead — deep long-head stretch, easy to load heavy, low skill. A strong stretch builder, but heavy overhead loading at failure isn't a day-one move, so it starts at intermediate; beginners get the long-head stretch from the rope and overhead machine. Free-weight at failure limits drops/rest-pause; eccentrics and partials suit it well."
  },
  {
    "id": "db-overhead-extension-single",
    "name": "Single-Arm Dumbbell Overhead Extension",
    "aliases": [
      "One-Arm Overhead DB Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Per-arm deep overhead stretch with full ROM; balance/stability cost is real and load is capped by what one arm can control overhead. Advanced detail work for the long head."
  },
  {
    "id": "ez-overhead-extension",
    "name": "EZ-Bar Overhead Extension (Seated/Standing)",
    "aliases": [
      "Standing French Press",
      "EZ Overhead Triceps Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 5,
    "skill": 3,
    "stretch": 5,
    "loadability": 5,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "EZ bar overhead loads the long head deep and heavy with easy progression — elite stretch builder. More core/shoulder demand standing; the bar makes failure risky so intensity techniques are limited."
  },
  {
    "id": "machine-triceps-extension",
    "name": "Machine Triceps Extension (Seated Dip/Press Machine)",
    "aliases": [
      "Tricep Press Machine",
      "Seated Dip Machine"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fully supported, fixed-path, trivially loadable — the safest way to take triceps to true failure and pile on intensity techniques. Stretch is moderate (path-dependent). Ideal beginner/intermediate failure tool."
  },
  {
    "id": "overhead-machine-extension",
    "name": "Overhead Machine Extension (Loaded-Stretch Machine)",
    "aliases": [
      "Plate-Loaded Overhead Tricep Machine"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 5,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Best of both worlds — overhead long-head stretch with full machine support, so you can hammer drops/myo-reps/partials safely at failure. Where available, an elite-grade isolation that still suits beginners."
  },
  {
    "id": "close-grip-bench",
    "name": "Close-Grip Bench Press",
    "aliases": [
      "CGBP",
      "Narrow-Grip Bench"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "secondary": [
      "chest",
      "front delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 3,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The heavy compound for triceps mass and lockout strength — loads them under big weight but not in a deep stretch. Systemically taxing, can be driven explosively. Bench-press skill required; no intensity techniques at failure."
  },
  {
    "id": "close-grip-smith-press",
    "name": "Close-Grip Smith Machine Press",
    "aliases": [
      "Smith Close-Grip Press"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "secondary": [
      "chest",
      "front delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "dropset",
      "rest-pause",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fixed bar path removes the balance demand of free CGBP, so it's more accessible and safer to push near failure. Good triceps-biased compound for those who lack pressing skill."
  },
  {
    "id": "jm-press",
    "name": "JM Press",
    "aliases": [
      "JM Blakley Press"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "secondary": [
      "chest"
    ],
    "pattern": "triceps-extension",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Hybrid of close-grip press and skullcrusher — heavy triceps overload with a press-like groove. High skill to groove safely; an advanced/elite strength-builder for the triceps, not a beginner move."
  },
  {
    "id": "weighted-triceps-dip",
    "name": "Weighted Triceps Dip",
    "aliases": [
      "Triceps Dip",
      "Parallel Bar Dip"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "secondary": [
      "chest",
      "front delts"
    ],
    "pattern": "vertical-press",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 4,
    "loadability": 4,
    "stability": 2,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Upright torso makes the dip a strong loadable triceps compound hitting a deep bottom stretch — but that deep stretch is chest-biased, so stimulus is a strong 4 not a clean 5. Bodyweight floor makes it too hard for many beginners; balance and shoulder demand keep it intermediate+."
  },
  {
    "id": "machine-assisted-dip",
    "name": "Machine / Assisted Dip",
    "aliases": [
      "Assisted Dip",
      "Dip Machine"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "secondary": [
      "chest",
      "front delts"
    ],
    "pattern": "vertical-press",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Brings the dip's deep stretch to beginners by removing the bodyweight floor and the balance demand; supported and easy to load up or down. The on-ramp to weighted dips."
  },
  {
    "id": "bench-dip",
    "name": "Bench Dip (Feet Elevated)",
    "aliases": [
      "Tricep Bench Dip"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "secondary": [
      "front delts"
    ],
    "pattern": "vertical-press",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner"
    ],
    "isPower": false,
    "notes": "Bodyweight triceps work for the equipment-poor — awkward to load (plates on lap) and shoulder-unfriendly in the deep position. A beginner stopgap, not a serious builder."
  },
  {
    "id": "db-tate-press",
    "name": "Tate Press",
    "aliases": [
      "Elbows-Out DB Extension"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Elbows-out DB extension to the chest, biases the lateral head with a hard contraction. Niche groove that takes practice; an advanced variation tool rather than a primary builder."
  },
  {
    "id": "db-kickback",
    "name": "Dumbbell Kickback",
    "aliases": [
      "Tricep Kickback"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 2,
    "skill": 2,
    "stretch": 1,
    "loadability": 2,
    "stability": 2,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner"
    ],
    "isPower": false,
    "notes": "Peak tension only at the shortened lockout, none in the stretch — the resistance curve fights hypertrophy. Inferior to the cable kickback in every way. Beginner/finisher novelty; the named floor reference for poor stimulus."
  },
  {
    "id": "band-pushdown",
    "name": "Band Triceps Pushdown",
    "aliases": [
      "Resistance Band Pushdown"
    ],
    "category": "triceps",
    "muscle": "triceps",
    "pattern": "triceps-extension",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 2,
    "skill": 1,
    "stretch": 1,
    "loadability": 1,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "myo-reps"
    ],
    "tierFit": [
      "beginner"
    ],
    "isPower": false,
    "notes": "Ascending band tension peaks at the already-easy lockout and offers nothing in the stretch — poor resistance profile and hard to track progress. Home/travel option only."
  },
  {
    "id": "standing-calf-raise-machine",
    "name": "Standing Calf Raise (Machine)",
    "aliases": [
      "Shoulder-Pad Calf Raise",
      "Standing Calf Machine"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Knee-straight loads gastroc; pad-supported and trivially loadable. Full ROM with a paused stretch and lengthened partials scales it from staple to elite."
  },
  {
    "id": "seated-calf-raise-machine",
    "name": "Seated Calf Raise (Machine)",
    "aliases": [
      "Soleus Raise",
      "Seated Calf Machine"
    ],
    "category": "calves",
    "muscle": "soleus",
    "secondary": [
      "gastrocnemius"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Bent knee shortens gastroc and isolates the soleus — the only way to truly load it. Fully supported, the soleus staple at every tier."
  },
  {
    "id": "leg-press-calf-raise",
    "name": "Leg Press Calf Raise",
    "aliases": [
      "Calf Press",
      "Toe Press on Leg Press"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Heaviest loadable gastroc option; sled supported so no spinal load. Watch foot security at the deep stretch — that's the only skill cost."
  },
  {
    "id": "smith-machine-calf-raise",
    "name": "Smith Machine Standing Calf Raise",
    "aliases": [
      "Smith Calf Raise"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Fixed bar path off a block gives machine-grade gastroc loading anywhere. Needs a platform for the stretch; bar on traps adds minor balance demand."
  },
  {
    "id": "barbell-standing-calf-raise",
    "name": "Barbell Standing Calf Raise",
    "aliases": [
      "Free Barbell Calf Raise"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 2,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Balance limits load long before the calves fail, capping stimulus and stretch depth. A garage-gym fallback, not a feature lift."
  },
  {
    "id": "dumbbell-single-leg-calf-raise",
    "name": "Single-Leg Dumbbell Calf Raise",
    "aliases": [
      "DB One-Leg Calf Raise"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "One hand braces, one holds the DB off a step — full stretch and unilateral focus, but grip and DB size cap top-end load."
  },
  {
    "id": "bodyweight-single-leg-calf-raise",
    "name": "Bodyweight Single-Leg Calf Raise",
    "aliases": [
      "One-Leg Calf Raise",
      "Step Calf Raise"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 2,
    "skill": 1,
    "stretch": 4,
    "loadability": 1,
    "stability": 2,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "myo-reps"
    ],
    "tierFit": [
      "beginner"
    ],
    "isPower": false,
    "notes": "Half bodyweight on one leg off a step — full stretch but unloadable past high reps. Entry point only; trainees outgrow the resistance fast."
  },
  {
    "id": "donkey-calf-raise",
    "name": "Donkey Calf Raise",
    "aliases": [
      "Bent-Over Calf Raise",
      "Donkey Press"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 5,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Hip flexion pre-stretches the gastroc for the deepest loaded lengthened position of any standing variant. Rated as the donkey machine (loadable); the connoisseur's gastroc builder."
  },
  {
    "id": "hack-squat-calf-raise",
    "name": "Hack Squat Calf Raise",
    "aliases": [
      "Hack Press Calf Raise"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Toes on the plate, knees straight — heavy machine-loaded gastroc work with full back support. Excellent loadable alternative to the standing machine."
  },
  {
    "id": "cable-standing-calf-raise",
    "name": "Cable Standing Calf Raise",
    "aliases": [
      "Belt Cable Calf Raise"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 4,
    "loadability": 4,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Belt or low-pulley resistance on a block. Smooth tension and easy dropsets, but stack weight caps top-end load below a machine."
  },
  {
    "id": "single-leg-leg-press-calf-raise",
    "name": "Single-Leg Leg Press Calf Raise",
    "aliases": [
      "One-Leg Calf Press"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "All the loadability and support of the leg press concentrated on one leg — fixes side-to-side asymmetry without sacrificing load."
  },
  {
    "id": "seated-calf-raise-plate-loaded",
    "name": "Seated Calf Raise (Plate-Loaded / DB on Knee)",
    "aliases": [
      "Dumbbell Seated Calf Raise",
      "Plate Seated Soleus Raise"
    ],
    "category": "calves",
    "muscle": "soleus",
    "secondary": [
      "gastrocnemius"
    ],
    "pattern": "calf-raise",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 4,
    "loadability": 2,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "DBs or a plate balanced on the knees off a block — the home-gym soleus answer. Works the right joint angle but loading past moderate is clumsy."
  },
  {
    "id": "tibialis-raise",
    "name": "Tibialis Raise",
    "aliases": [
      "Tib Raise",
      "Dorsiflexion Raise"
    ],
    "category": "calves",
    "muscle": "tibialis anterior",
    "pattern": "calf-raise",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 2,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "myo-reps",
      "slow-eccentric",
      "rest-pause"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The antagonist nobody trains — dorsiflexion against bodyweight off a wall. Builds shin mass and ankle resilience; bodyweight load barely reaches plantarflexion stretch, so stretch is low."
  },
  {
    "id": "weighted-tibialis-raise-machine",
    "name": "Tibialis Raise (Machine / Tib-Bar)",
    "aliases": [
      "Loaded Tib Raise",
      "Tib Bar Raise"
    ],
    "category": "calves",
    "muscle": "tibialis anterior",
    "pattern": "calf-raise",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "slow-eccentric",
      "rest-pause",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Tib-bar over the toes or a dedicated machine makes the tibialis properly loadable and lets you load into dorsiflexion range. The serious shin-developer's pick."
  },
  {
    "id": "seated-calf-raise-single-leg",
    "name": "Single-Leg Seated Calf Raise",
    "aliases": [
      "One-Leg Soleus Raise"
    ],
    "category": "calves",
    "muscle": "soleus",
    "secondary": [
      "gastrocnemius"
    ],
    "pattern": "calf-raise",
    "equipment": "machine",
    "unilateral": true,
    "stimulus": 4,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric",
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Seated machine worked one leg at a time — full support and loadability with unilateral correction for the soleus. Low fatigue lets you push close to failure."
  },
  {
    "id": "pogo-jumps",
    "name": "Pogo Jumps (Stiff-Ankle Hops)",
    "aliases": [
      "Ankle Hops",
      "Pogos"
    ],
    "category": "calves",
    "muscle": "gastrocnemius",
    "secondary": [
      "soleus"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 1,
    "stability": 2,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Reactive stiff-ankle hops train the calves' stretch-shortening cycle and tendon stiffness. A power/plyo drill, not a hypertrophy tool."
  },
  {
    "id": "cable-crunch",
    "name": "Cable Crunch",
    "aliases": [
      "kneeling cable crunch",
      "rope crunch"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "obliques"
    ],
    "pattern": "ab-flexion",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "The premier loadable ab builder: spinal flexion against resistance, easy progressive overload. Stretch is moderate — flexion ROM is limited, not a deep loaded stretch. Keep hips fixed and crunch ribcage to pelvis."
  },
  {
    "id": "machine-crunch",
    "name": "Machine Crunch",
    "aliases": [
      "ab crunch machine",
      "selectorized crunch"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "pattern": "ab-flexion",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Fully supported, trivially loadable spinal flexion. Stretch moderate — flexion ROM is short. Day-one accessible and technique-friendly; elite trainees prefer cable crunch for ROM."
  },
  {
    "id": "decline-weighted-situp",
    "name": "Decline Weighted Sit-Up",
    "aliases": [
      "decline sit-up",
      "weighted sit-up"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors",
      "obliques"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Decline angle plus a held plate gives real progressive overload over a long flexion ROM. Some hip-flexor share; stretch is moderate, not deep. A strong loadable builder."
  },
  {
    "id": "hanging-leg-raise",
    "name": "Hanging Leg Raise",
    "aliases": [
      "toes-to-bar",
      "hanging straight-leg raise"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors",
      "obliques"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 4,
    "stretch": 4,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Straight legs raise the difficulty sharply; must posteriorly tilt the pelvis to load abs not hip flexors. Loaded stretch at the bottom hang. Hard to load beyond ankle weights."
  },
  {
    "id": "weighted-hanging-leg-raise",
    "name": "Weighted Hanging Leg Raise",
    "aliases": [
      "dip-belt hanging leg raise",
      "dumbbell hanging leg raise",
      "loaded toes-to-bar"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors",
      "obliques"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 5,
    "skill": 4,
    "stretch": 4,
    "loadability": 3,
    "stability": 2,
    "fatigue": 4,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "slow-eccentric"
    ],
    "tierFit": [
      "elite"
    ],
    "isPower": false,
    "notes": "The elite direct-flexion builder: dumbbell pinched between the feet or a dip belt adds genuine overload to straight-leg hanging work. Loaded stretch at the hang plus real progressive load — the one loadable rectus move that isn't a crunch. Very high skill and grip demand."
  },
  {
    "id": "hanging-knee-raise",
    "name": "Hanging Knee Raise",
    "aliases": [
      "hanging knee tuck"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors",
      "obliques"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 2,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "The accessible entry to hanging work — bent knees shorten the lever. Cue the posterior pelvic tilt to bias abs over hip flexors. Outgrown by stronger trainees who progress to straight-leg."
  },
  {
    "id": "captains-chair-leg-raise",
    "name": "Captain's Chair Leg Raise",
    "aliases": [
      "roman chair leg raise",
      "vertical bench knee raise"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors",
      "obliques"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 2,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Back-supported version removes the grip and swing of hanging — easier to isolate abs with a pelvic tilt. Good beginner-to-intermediate flexion option; ceiling on loadability."
  },
  {
    "id": "lying-leg-raise",
    "name": "Lying Leg Raise",
    "aliases": [
      "floor leg raise",
      "supine leg raise"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 1,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Floor-based lower-ab work; lift the hips slightly off the floor at the top to add flexion. Low loadability and a fair amount of hip-flexor involvement keep it a beginner staple."
  },
  {
    "id": "reverse-crunch",
    "name": "Reverse Crunch",
    "aliases": [
      "hip lift crunch",
      "decline reverse crunch"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "hip flexors"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "lengthened-partials",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Pelvis curls toward ribcage to bias the lower rectus with less hip-flexor dominance than leg raises. Decline adds ROM; loadability is the limit."
  },
  {
    "id": "ab-wheel-rollout",
    "name": "Ab Wheel Rollout",
    "aliases": [
      "ab roller",
      "wheel rollout"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "obliques",
      "lats",
      "hip flexors"
    ],
    "pattern": "anti-extension",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Premier anti-extension drill — the abs are loaded hard in a fully lengthened position at extension. Knees first, then standing. Progress by ROM/leverage rather than external load."
  },
  {
    "id": "barbell-rollout",
    "name": "Barbell Rollout",
    "aliases": [
      "loaded barbell rollout"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "obliques",
      "lats",
      "hip flexors"
    ],
    "pattern": "anti-extension",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 3,
    "stretch": 5,
    "loadability": 3,
    "stability": 2,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Barbell version lets you add plates for genuine overload on anti-extension — same brutal lengthened load as the wheel with better loadability. Demands a braced spine throughout."
  },
  {
    "id": "dragon-flag",
    "name": "Dragon Flag",
    "aliases": [
      "Bruce Lee dragon flag"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "obliques",
      "hip flexors"
    ],
    "pattern": "anti-extension",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 5,
    "stretch": 3,
    "loadability": 1,
    "stability": 2,
    "fatigue": 4,
    "power": 1,
    "techniques": [
      "slow-eccentric",
      "lengthened-partials"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Long-lever anti-extension held rigid — high skill, high tension. More max-tension isometric/eccentric than a deep loaded stretch, so stretch is moderate. Load comes from leverage, not plates."
  },
  {
    "id": "plank",
    "name": "Plank",
    "aliases": [
      "front plank",
      "forearm plank",
      "RKC plank"
    ],
    "category": "core",
    "muscle": "rectus abdominis",
    "secondary": [
      "obliques",
      "transverse abdominis"
    ],
    "pattern": "anti-extension",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 1,
    "stretch": 1,
    "loadability": 2,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner"
    ],
    "isPower": false,
    "notes": "Isometric anti-extension — teaches bracing but no loaded stretch and a low hypertrophy ceiling. A beginner/rehab staple; stronger trainees graduate to rollouts."
  },
  {
    "id": "side-plank",
    "name": "Side Plank",
    "aliases": [
      "lateral plank"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "quadratus lumborum",
      "transverse abdominis"
    ],
    "pattern": "anti-extension",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 2,
    "skill": 1,
    "stretch": 1,
    "loadability": 2,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner"
    ],
    "isPower": false,
    "notes": "Isometric lateral-flexion/anti-lateral-flexion hold for the obliques and QL. Good frontal-plane bracing entry point; minimal growth stimulus once you can hold it easily."
  },
  {
    "id": "copenhagen-plank",
    "name": "Copenhagen Plank",
    "aliases": [
      "Copenhagen side plank",
      "adductor plank"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "adductors",
      "quadratus lumborum"
    ],
    "pattern": "anti-extension",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 1,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Top-foot-elevated side plank hammering adductors and lateral core isometrically. A specialty athletic/injury-resilience tool, not an ab hypertrophy builder — low direct stimulus despite higher tier."
  },
  {
    "id": "cable-pallof-press",
    "name": "Pallof Press",
    "aliases": [
      "anti-rotation press",
      "cable Pallof"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "transverse abdominis",
      "rectus abdominis"
    ],
    "pattern": "anti-rotation",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 2,
    "skill": 2,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "True anti-rotation against a cable — resists rotation, trains core bracing isometrically. Loadable and trackable but low hypertrophy value; a stability/bracing primer, not a builder."
  },
  {
    "id": "cable-woodchopper",
    "name": "Cable Woodchopper",
    "aliases": [
      "high-to-low chop",
      "cable chop"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "rectus abdominis",
      "serratus anterior"
    ],
    "pattern": "rotation",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 3,
    "skill": 3,
    "stretch": 3,
    "loadability": 4,
    "stability": 2,
    "fatigue": 2,
    "power": 3,
    "techniques": [
      "myo-reps"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Dynamic trunk rotation through the obliques with a loaded stretch into the wind-up. Loadable on a cable and can be driven with explosive intent for athletic carryover. True rotation, not anti-rotation."
  },
  {
    "id": "cable-side-bend",
    "name": "Cable Side Bend",
    "aliases": [
      "standing cable lateral flexion"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "quadratus lumborum"
    ],
    "pattern": "lateral-flexion",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Loaded lateral flexion — the most directly loadable oblique builder. Lateral-flexion ROM is short so stretch is moderate. Cable keeps tension through ROM; dumbbell version loses tension at the contracted end."
  },
  {
    "id": "hanging-oblique-raise",
    "name": "Hanging Oblique Raise",
    "aliases": [
      "twisting hanging leg raise"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "rectus abdominis",
      "hip flexors"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 4,
    "skill": 4,
    "stretch": 4,
    "loadability": 1,
    "stability": 2,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Hanging leg raise driven to one side — heavy oblique tension with a loaded stretch at the hang. High skill and grip demand; load is hard to add beyond leverage."
  },
  {
    "id": "hanging-windshield-wiper",
    "name": "Hanging Windshield Wiper",
    "aliases": [
      "windshield wipers"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "rectus abdominis",
      "hip flexors"
    ],
    "pattern": "rotation",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 4,
    "skill": 5,
    "stretch": 4,
    "loadability": 1,
    "stability": 1,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "slow-eccentric"
    ],
    "tierFit": [
      "elite"
    ],
    "isPower": false,
    "notes": "Legs held to the bar and swept side to side under control — elite-only rotational strength with a long lever. Very high skill and core demand; leverage-loaded only."
  },
  {
    "id": "rotary-torso-machine",
    "name": "Rotary Torso Machine",
    "aliases": [
      "torso rotation machine"
    ],
    "category": "core",
    "muscle": "obliques",
    "pattern": "rotation",
    "equipment": "machine",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fully supported, trivially loadable rotation for the obliques. Controlled ROM lowers lumbar risk versus free rotation; basic enough that advanced trainees prefer cable work."
  },
  {
    "id": "decline-oblique-crunch",
    "name": "Decline Oblique Crunch",
    "aliases": [
      "twisting decline sit-up"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "rectus abdominis"
    ],
    "pattern": "ab-flexion",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 3,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "lengthened-partials"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Decline sit-up rotated toward each knee to bias the obliques; a plate adds load. Combines flexion and rotation with a decent stretch at the bottom."
  },
  {
    "id": "kettlebell-windmill",
    "name": "Kettlebell Windmill",
    "aliases": [
      "windmill"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "quadratus lumborum",
      "shoulders",
      "hamstrings"
    ],
    "pattern": "lateral-flexion",
    "equipment": "kettlebell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 4,
    "stretch": 4,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 1,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Deep loaded lateral flexion under an overhead-supported bell — a big stretch through the obliques and QL, but skill/mobility-gated and load stays light. High skill and mobility demand."
  },
  {
    "id": "weighted-russian-twist",
    "name": "Weighted Russian Twist",
    "aliases": [
      "seated rotation",
      "Russian twist"
    ],
    "category": "core",
    "muscle": "obliques",
    "secondary": [
      "rectus abdominis",
      "hip flexors"
    ],
    "pattern": "rotation",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 2,
    "stretch": 2,
    "loadability": 3,
    "stability": 2,
    "fatigue": 2,
    "power": 2,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Seated rotation with a held weight; short-range and momentum-prone, modest stimulus. Useful entry-level oblique work but easily replaced by cable rotation for better loading."
  },
  {
    "id": "kettlebell-swing",
    "name": "Kettlebell Swing (Two-Hand)",
    "aliases": [
      "Russian Kettlebell Swing",
      "Hardstyle Swing"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "spinal-erectors",
      "lats"
    ],
    "pattern": "hinge",
    "equipment": "kettlebell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 3,
    "stability": 4,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "The entry point to ballistic hip power — float-the-bell is hip snap, not a squat. Low stimulus as a builder; rated for power. Spans all tiers as a conditioning/power staple."
  },
  {
    "id": "single-arm-kettlebell-swing",
    "name": "Single-Arm Kettlebell Swing",
    "aliases": [
      "One-Arm Swing"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "obliques",
      "lats"
    ],
    "pattern": "hinge",
    "equipment": "kettlebell",
    "unilateral": true,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 3,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Adds an anti-rotation demand to the swing — higher skill, drops beginner. Same hip ballistic, more core integrity required."
  },
  {
    "id": "kettlebell-snatch",
    "name": "Kettlebell Snatch",
    "aliases": [
      "KB Snatch",
      "One-Arm KB Snatch"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "traps",
      "front-delts",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "kettlebell",
    "unilateral": true,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 3,
    "stability": 3,
    "fatigue": 4,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "The canonical single-implement overhead ballistic — hip snap drives the bell floor-to-overhead in one arc. Fills the no-overhead-KB gap. Skill of the catch drops beginner."
  },
  {
    "id": "counter-movement-jump",
    "name": "Countermovement Jump",
    "aliases": [
      "Vertical Jump",
      "CMJ",
      "Jump and Reach"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves",
      "hamstrings"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 1,
    "skill": 1,
    "stretch": 1,
    "loadability": 1,
    "stability": 3,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "The day-one baseline power expression and the literal vertical-power test — dip and drive, jump and reach. No equipment, no landing skill. All tiers; box jump is the low-landing variant of this."
  },
  {
    "id": "box-jump",
    "name": "Box Jump",
    "aliases": [
      "Vertical Box Jump"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves",
      "hamstrings"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 1,
    "skill": 2,
    "stretch": 1,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": true,
    "notes": "The low-landing variant of the CMJ — you land high, not far, so eccentric impact is minimal. Concentric power with a soft catch. Elite trainees use it as a teaching/warm-up jump, not a feature lift, so it drops elite."
  },
  {
    "id": "broad-jump",
    "name": "Broad Jump",
    "aliases": [
      "Standing Long Jump",
      "Horizontal Jump"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "quads",
      "hamstrings",
      "calves"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 1,
    "skill": 3,
    "stretch": 1,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Horizontal force production with a hard landing — higher hamstring/glute eccentric cost than a box jump. Distance is cleanly tracked. Needs landing competence, drops beginner."
  },
  {
    "id": "depth-jump",
    "name": "Depth Jump",
    "aliases": [
      "Drop Jump",
      "Shock-Method Jump"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves",
      "hamstrings"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 1,
    "skill": 4,
    "stretch": 2,
    "loadability": 1,
    "stability": 2,
    "fatigue": 4,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "True reactive/plyometric stress — step off, absorb, rebound fast off the stretch-shortening cycle. High tissue and CNS cost; only for trained athletes with a base. Advanced/elite only."
  },
  {
    "id": "hurdle-hop",
    "name": "Hurdle Hops",
    "aliases": [
      "Repeat Hurdle Jumps",
      "Continuous Hops"
    ],
    "category": "power-athletic",
    "muscle": "calves",
    "secondary": [
      "quads",
      "glutes",
      "hamstrings"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 1,
    "skill": 3,
    "stretch": 1,
    "loadability": 1,
    "stability": 2,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Repeat-jump reactive drill — short ground contacts, ankle/calf stiffness. Builds elastic SSC qualities. Drops beginner for the reactive landing demand."
  },
  {
    "id": "tuck-jump",
    "name": "Tuck Jump",
    "aliases": [
      "Knee Tuck Jump"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves",
      "hip-flexors"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 1,
    "skill": 2,
    "stretch": 1,
    "loadability": 1,
    "stability": 3,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": true,
    "notes": "Vertical jump with a knee tuck — teaches repeat takeoff with minimal load. Beginner-accessible plyometric; elite trainees outgrow it for loaded/reactive work."
  },
  {
    "id": "trap-bar-jump",
    "name": "Trap-Bar Jump",
    "aliases": [
      "Hex-Bar Jump",
      "Loaded Jump"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "hamstrings",
      "calves"
    ],
    "pattern": "jump",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 1,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "The most loadable, trackable jump — neutral grip and centered load let you add real weight to triple extension safely. Best bridge from gym strength to athletic power. Needs strength base, drops beginner."
  },
  {
    "id": "dumbbell-jump-squat",
    "name": "Dumbbell Jump Squat",
    "aliases": [
      "Loaded Jump Squat",
      "DB Squat Jump"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves",
      "hamstrings"
    ],
    "pattern": "jump",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 2,
    "stretch": 2,
    "loadability": 3,
    "stability": 3,
    "fatigue": 3,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": true,
    "notes": "Light-load vertical jump holding dumbbells — accessible loaded power. Keep load light (under ~20% 1RM) or velocity dies. Good beginner-to-advanced ballistic squat."
  },
  {
    "id": "speed-squat",
    "name": "Dynamic-Effort Speed Squat",
    "aliases": [
      "DE Squat",
      "Speed Squat",
      "Compensatory Acceleration Squat"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "hamstrings",
      "spinal-erectors"
    ],
    "pattern": "squat",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 3,
    "power": 4,
    "techniques": [
      "cluster"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Sub-maximal load (~50-60% +/- bands/chains) driven with maximal bar speed — rate of force development for the squat pattern. Cluster sets are the native format. High skill; advanced/elite only."
  },
  {
    "id": "speed-bench",
    "name": "Dynamic-Effort Speed Bench",
    "aliases": [
      "DE Bench",
      "Speed Bench Press"
    ],
    "category": "power-athletic",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 5,
    "stability": 3,
    "fatigue": 2,
    "power": 4,
    "techniques": [
      "cluster"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "~50% load pressed with explosive intent for upper-body RFD. Cluster/short-set format. Skill and a real bench base required; advanced/elite."
  },
  {
    "id": "sled-push",
    "name": "Sled Push",
    "aliases": [
      "Sled Drive",
      "Prowler Push",
      "Sled Sprint"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves",
      "hamstrings"
    ],
    "pattern": "squat",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 2,
    "skill": 1,
    "stretch": 1,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Concentric-only horizontal acceleration against load — no eccentric, no skill, trivially loadable by plates. The safest all-tier athletic-power tool; drive hard for RFD or heavy for strength-speed. Spans every tier."
  },
  {
    "id": "hang-power-clean",
    "name": "Hang Power Clean",
    "aliases": [
      "Hang Clean (Power)"
    ],
    "category": "power-athletic",
    "muscle": "traps",
    "secondary": [
      "glutes",
      "hamstrings",
      "quads",
      "spinal-erectors",
      "front-delts"
    ],
    "pattern": "olympic",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 4,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "The teachable entry to the clean family — starting from the hang removes the floor pull, so technique loads faster than the full lift. Triple extension into a catch. Skill gates it above beginner."
  },
  {
    "id": "power-clean",
    "name": "Power Clean",
    "aliases": [
      "Clean (Power Catch)"
    ],
    "category": "power-athletic",
    "muscle": "traps",
    "secondary": [
      "glutes",
      "hamstrings",
      "quads",
      "spinal-erectors",
      "front-delts"
    ],
    "pattern": "olympic",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 5,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 5,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Full-floor pull into a power catch — the benchmark gym power lift. Highest RFD per rep but high skill and CNS cost. Advanced/elite; coaching-dependent."
  },
  {
    "id": "hang-high-pull",
    "name": "Hang High Pull",
    "aliases": [
      "Hang Pull",
      "Snatch-Grip High Pull"
    ],
    "category": "power-athletic",
    "muscle": "traps",
    "secondary": [
      "rear-delts",
      "glutes",
      "hamstrings",
      "spinal-erectors"
    ],
    "pattern": "olympic",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Triple extension into a high pull, no catch — the clean's power without the wrist/rack skill. The most accessible olympic-derivative for general athletes. Drops beginner for the hip-snap timing."
  },
  {
    "id": "jump-shrug",
    "name": "Jump Shrug",
    "aliases": [
      "Loaded Jump Shrug"
    ],
    "category": "power-athletic",
    "muscle": "traps",
    "secondary": [
      "glutes",
      "hamstrings",
      "calves"
    ],
    "pattern": "olympic",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 2,
    "stretch": 1,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Triple extension with a violent shrug, bar stays low — the simplest olympic-pull teaching drill and a heavy-loadable power expression. Lower skill than the high pull (skill 2 vs 3); still drops beginner for timing."
  },
  {
    "id": "push-press",
    "name": "Push Press",
    "aliases": [
      "Barbell Push Press"
    ],
    "category": "power-athletic",
    "muscle": "front-delts",
    "secondary": [
      "triceps",
      "quads",
      "glutes",
      "side-delts"
    ],
    "pattern": "vertical-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 2,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Leg-driven overhead press — a dip-and-drive transfers lower-body power overhead and lets you overload the press. Genuine delt stimulus on top of power, unusual for this category. Drops beginner for the dip-drive timing."
  },
  {
    "id": "push-jerk",
    "name": "Push Jerk",
    "aliases": [
      "Power Jerk"
    ],
    "category": "power-athletic",
    "muscle": "front-delts",
    "secondary": [
      "triceps",
      "quads",
      "glutes"
    ],
    "pattern": "vertical-press",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 4,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Push press with a re-dip catch under the bar — more load, more skill than the push press. Overhead RFD with a catch. Advanced/elite."
  },
  {
    "id": "dumbbell-push-press",
    "name": "Dumbbell Push Press",
    "aliases": [
      "DB Push Press"
    ],
    "category": "power-athletic",
    "muscle": "front-delts",
    "secondary": [
      "triceps",
      "quads",
      "side-delts"
    ],
    "pattern": "vertical-press",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 2,
    "loadability": 3,
    "stability": 2,
    "fatigue": 3,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": true,
    "notes": "More forgiving than the barbell — dumbbells let the wrists and shoulders find a natural path, easier to learn the dip-drive. Good beginner overhead power option."
  },
  {
    "id": "medicine-ball-chest-pass",
    "name": "Medicine Ball Chest Pass",
    "aliases": [
      "MB Chest Pass",
      "Explosive Chest Throw"
    ],
    "category": "power-athletic",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "throw",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 1,
    "skill": 2,
    "stretch": 2,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Upper-body throw with full release — no deceleration, so true ballistic press power. Easiest ballistic to coach. Spans all tiers; the press-power equivalent of a box jump."
  },
  {
    "id": "medicine-ball-slam",
    "name": "Medicine Ball Slam",
    "aliases": [
      "Overhead Slam",
      "MB Slam"
    ],
    "category": "power-athletic",
    "muscle": "lats",
    "secondary": [
      "abs",
      "shoulders"
    ],
    "pattern": "throw",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 1,
    "skill": 2,
    "stretch": 2,
    "loadability": 2,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Overhead-to-floor slam — explosive trunk flexion and lat drive with a full release. Simple, universally accessible ballistic. All tiers."
  },
  {
    "id": "medicine-ball-rotational-throw",
    "name": "Medicine Ball Rotational Throw",
    "aliases": [
      "Rotational Scoop Toss",
      "MB Side Throw",
      "Shotput Throw"
    ],
    "category": "power-athletic",
    "muscle": "obliques",
    "secondary": [
      "abs",
      "glutes",
      "shoulders"
    ],
    "pattern": "throw",
    "equipment": "specialty",
    "unilateral": true,
    "stimulus": 1,
    "skill": 3,
    "stretch": 2,
    "loadability": 2,
    "stability": 3,
    "fatigue": 2,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Hip-to-shoulder sequenced rotation into a wall throw — the prime rotational power drill, transfers to every swing/throw sport. Full-release ballistic, so near-zero growth stimulus. All tiers."
  },
  {
    "id": "medicine-ball-overhead-throw",
    "name": "Medicine Ball Overhead Backward Throw",
    "aliases": [
      "Backward Overhead Toss",
      "MB Reverse Throw"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "spinal-erectors",
      "shoulders"
    ],
    "pattern": "throw",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 1,
    "skill": 3,
    "stretch": 2,
    "loadability": 2,
    "stability": 2,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Full triple extension into a backward release — a whole-body throw expressing hinge power with no eccentric. Drops beginner for the coordinated whole-body sequence."
  },
  {
    "id": "plyo-push-up",
    "name": "Plyometric Push-Up",
    "aliases": [
      "Clap Push-Up",
      "Explosive Push-Up"
    ],
    "category": "power-athletic",
    "muscle": "chest",
    "secondary": [
      "triceps",
      "front-delts"
    ],
    "pattern": "horizontal-press",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 1,
    "stability": 3,
    "fatigue": 2,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Push-up driven off the ground — reactive upper-body SSC with a hard hand landing. Needs press strength to absorb the catch; drops beginner. Loadability poor (bodyweight only)."
  },
  {
    "id": "banded-kettlebell-swing",
    "name": "Band-Resisted Kettlebell Swing",
    "aliases": [
      "Banded Swing"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "spinal-erectors"
    ],
    "pattern": "hinge",
    "equipment": "kettlebell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 3,
    "stretch": 2,
    "loadability": 2,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Band adds accommodating resistance at the top, forcing a harder hip snap and faster overspeed eccentric. Variation for trained swingers; drops beginner."
  },
  {
    "id": "dead-stop-jump-squat",
    "name": "Concentric-Only Jump Squat (Pins)",
    "aliases": [
      "Dead-Stop Jump Squat",
      "Pin Jump Squat"
    ],
    "category": "power-athletic",
    "muscle": "quads",
    "secondary": [
      "glutes",
      "calves"
    ],
    "pattern": "jump",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 4,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 5,
    "techniques": [
      "cluster"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Bar starts dead on pins, no countermovement — isolates pure concentric RFD with no stretch-shortening assist. Loadable in a rack. High skill, advanced/elite; cluster format."
  },
  {
    "id": "single-leg-bound",
    "name": "Single-Leg Bound",
    "aliases": [
      "Bounding",
      "Alternating Bounds"
    ],
    "category": "power-athletic",
    "muscle": "glutes",
    "secondary": [
      "hamstrings",
      "quads",
      "calves"
    ],
    "pattern": "jump",
    "equipment": "bodyweight",
    "unilateral": true,
    "stimulus": 1,
    "skill": 4,
    "stretch": 1,
    "loadability": 1,
    "stability": 1,
    "fatigue": 3,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Maximal single-leg horizontal projection with reactive landing — high balance and reactive-strength demand, transfers directly to sprinting. Advanced/elite; unstable and skill-heavy."
  },
  {
    "id": "barbell-shrug",
    "name": "Barbell Shrug",
    "aliases": [
      "BB Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "levator scapulae",
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "rest-pause",
      "cluster",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Trivially loadable trap staple; grip-limited and short ROM from the front, so stretch is modest. Pause at top, no rolling; pulse partials at the bottom."
  },
  {
    "id": "dumbbell-shrug",
    "name": "Dumbbell Shrug",
    "aliases": [
      "DB Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "levator scapulae",
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "rest-pause",
      "myo-reps",
      "cluster",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "DBs hang slightly behind the body line allowing a touch more depth and stretch than the bar; grip eventually caps load."
  },
  {
    "id": "trap-bar-shrug",
    "name": "Trap Bar Shrug",
    "aliases": [
      "Hex Bar Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 3,
    "power": 2,
    "techniques": [
      "rest-pause",
      "cluster",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Neutral handles centre load over the body — the heaviest, cleanest-line shrug; best of the family, but still short-ROM with no loaded stretch, so stimulus tops at 3."
  },
  {
    "id": "smith-machine-shrug",
    "name": "Smith Machine Shrug",
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "smith",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 2,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "rest-pause",
      "cluster",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fixed bar path removes balance demand so you grind the traps without stabilising — beginner-friendly, but short ROM caps it."
  },
  {
    "id": "machine-shrug",
    "name": "Machine Shrug",
    "aliases": [
      "Hammer Strength Shrug",
      "Plate-Loaded Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "machine",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 5,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Fully supported, dropset-friendly, no grip cap when using handles — ideal high-volume trap pump tool for newer lifters."
  },
  {
    "id": "cable-shrug",
    "name": "Cable Shrug",
    "aliases": [
      "Cable Trap Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Constant tension and a fixed line of pull; easy dropsets. Solid trap isolation, low systemic cost."
  },
  {
    "id": "cable-lean-away-shrug",
    "name": "Cable Lean-Away Shrug",
    "aliases": [
      "Cross-Body Cable Shrug",
      "Lean-Away Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "levator scapulae",
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "cable",
    "unilateral": true,
    "stimulus": 4,
    "skill": 2,
    "stretch": 4,
    "loadability": 5,
    "stability": 3,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "iso-hold"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Lean away from the stack so the arm hangs across the body — loads the upper trap in its lengthened, depressed position the way no vertical shrug can. The category's only loaded-stretch trap builder; constant cable tension holds the stretch."
  },
  {
    "id": "behind-back-barbell-shrug",
    "name": "Behind-the-Back Barbell Shrug",
    "aliases": [
      "Behind-Back Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms"
    ],
    "pattern": "shrug",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 2,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "rest-pause"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Bar behind the glutes biases a more retracted, posterior trap line; awkward to set up and groove, modest stretch."
  },
  {
    "id": "trap-bar-farmers-carry",
    "name": "Trap Bar Farmer's Carry",
    "aliases": [
      "Farmer's Walk",
      "Loaded Carry"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms",
      "core",
      "glutes"
    ],
    "pattern": "carry",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Heavy isometric trap and grip loading with a gait challenge — huge real-world carryover, systemically taxing. Isometric with no ROM, so a work-capacity/grip tool more than a hypertrophy builder."
  },
  {
    "id": "farmers-walk-handles",
    "name": "Farmer's Walk (Handles)",
    "aliases": [
      "Farmer's Handles",
      "Implement Carry"
    ],
    "category": "traps-forearms",
    "muscle": "forearms",
    "secondary": [
      "upper traps",
      "core"
    ],
    "pattern": "carry",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 1,
    "loadability": 5,
    "stability": 3,
    "fatigue": 4,
    "power": 2,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Dedicated handles let you load grip past any other tool; brutal isometric forearm/grip builder. No ROM or loaded stretch, so stimulus is grip-driven not hypertrophy-driven."
  },
  {
    "id": "dumbbell-farmers-carry",
    "name": "Dumbbell Farmer's Carry",
    "aliases": [
      "DB Carry"
    ],
    "category": "traps-forearms",
    "muscle": "forearms",
    "secondary": [
      "upper traps",
      "core"
    ],
    "pattern": "carry",
    "equipment": "dumbbell",
    "unilateral": false,
    "stimulus": 2,
    "skill": 1,
    "stretch": 1,
    "loadability": 4,
    "stability": 3,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Most accessible loaded carry — every gym has DBs. Grip and trap endurance under load; an easy entry point, but isometric with no ROM, so low direct hypertrophy value."
  },
  {
    "id": "suitcase-carry",
    "name": "Suitcase Carry",
    "aliases": [
      "Single-Arm Carry",
      "Unilateral Carry"
    ],
    "category": "traps-forearms",
    "muscle": "forearms",
    "secondary": [
      "core",
      "upper traps"
    ],
    "pattern": "carry",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 2,
    "skill": 2,
    "stretch": 1,
    "loadability": 4,
    "stability": 2,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "One-sided load forces hard anti-lateral-flexion bracing alongside grip — low stability, strong core/oblique tax; primarily a grip/core drill, low direct forearm hypertrophy."
  },
  {
    "id": "barbell-wrist-curl",
    "name": "Barbell Wrist Curl",
    "aliases": [
      "Seated Wrist Curl"
    ],
    "category": "traps-forearms",
    "muscle": "forearm flexors",
    "pattern": "wrist-curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 4,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Forearms over knees, let the bar roll to the fingertips for a deep flexor stretch then curl — direct flexor builder, trivial fatigue."
  },
  {
    "id": "dumbbell-wrist-curl",
    "name": "Dumbbell Wrist Curl",
    "aliases": [
      "Single-Arm Wrist Curl"
    ],
    "category": "traps-forearms",
    "muscle": "forearm flexors",
    "pattern": "wrist-curl",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 4,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Per-arm loading and an even deeper roll-out stretch than the bar; the loaded stretch at the bottom is the whole point."
  },
  {
    "id": "cable-wrist-curl",
    "name": "Cable Wrist Curl",
    "aliases": [
      "Behind-Back Cable Wrist Curl"
    ],
    "category": "traps-forearms",
    "muscle": "forearm flexors",
    "pattern": "wrist-curl",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 4,
    "loadability": 5,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Constant tension holds load through the stretched position; easiest flexor variant to run dropsets on."
  },
  {
    "id": "barbell-wrist-extension",
    "name": "Barbell Wrist Extension",
    "aliases": [
      "Reverse Wrist Curl"
    ],
    "category": "traps-forearms",
    "muscle": "forearm extensors",
    "pattern": "wrist-extension",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials",
      "1.5-reps"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Palms-down wrist extension — the neglected extensor side, critical for elbow health. Light loads, high reps, trivial fatigue."
  },
  {
    "id": "dumbbell-wrist-extension",
    "name": "Dumbbell Wrist Extension",
    "aliases": [
      "Reverse DB Wrist Curl"
    ],
    "category": "traps-forearms",
    "muscle": "forearm extensors",
    "pattern": "wrist-extension",
    "equipment": "dumbbell",
    "unilateral": true,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Per-arm extensor work; weak muscle so loadability is real but absolute loads stay tiny."
  },
  {
    "id": "cable-wrist-extension",
    "name": "Cable Wrist Extension",
    "aliases": [
      "Reverse Cable Wrist Curl"
    ],
    "category": "traps-forearms",
    "muscle": "forearm extensors",
    "pattern": "wrist-extension",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 3,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 1,
    "power": 1,
    "techniques": [
      "dropset",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Constant tension on a small muscle that fatigues on the stretch under load — cable holds it best; dropset-friendly."
  },
  {
    "id": "barbell-reverse-curl",
    "name": "Barbell Reverse Curl",
    "aliases": [
      "Pronated Curl",
      "Overhand Curl"
    ],
    "category": "traps-forearms",
    "muscle": "brachioradialis",
    "secondary": [
      "forearm extensors",
      "biceps"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Pronated grip drives the brachioradialis and upper forearm hard — best mass builder for forearm girth, more loadable than wrist curls."
  },
  {
    "id": "ez-bar-reverse-curl",
    "name": "EZ-Bar Reverse Curl",
    "aliases": [
      "EZ Reverse Curl"
    ],
    "category": "traps-forearms",
    "muscle": "brachioradialis",
    "secondary": [
      "forearm extensors",
      "biceps"
    ],
    "pattern": "curl",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 4,
    "skill": 2,
    "stretch": 3,
    "loadability": 4,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Angled grip eases wrist strain of the straight bar while keeping the pronated brachioradialis bias — usually more usable load."
  },
  {
    "id": "cable-reverse-curl",
    "name": "Cable Reverse Curl",
    "aliases": [
      "Cable Pronated Curl"
    ],
    "category": "traps-forearms",
    "muscle": "brachioradialis",
    "secondary": [
      "forearm extensors",
      "biceps"
    ],
    "pattern": "curl",
    "equipment": "cable",
    "unilateral": false,
    "stimulus": 4,
    "skill": 1,
    "stretch": 3,
    "loadability": 5,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "dropset",
      "rest-pause",
      "myo-reps",
      "lengthened-partials"
    ],
    "tierFit": [
      "beginner",
      "intermediate",
      "advanced"
    ],
    "isPower": false,
    "notes": "Constant tension on the brachioradialis with easy dropsets; the most fatigue-efficient way to overload the forearm in a curl pattern."
  },
  {
    "id": "wrist-roller",
    "name": "Wrist Roller",
    "aliases": [
      "Forearm Roller"
    ],
    "category": "traps-forearms",
    "muscle": "forearm flexors",
    "secondary": [
      "forearm extensors",
      "grip"
    ],
    "pattern": "wrist-curl",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 2,
    "loadability": 3,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Continuous flexor/extensor work to deep burn; loads both sides via repeated winding. Hard to track precisely, brutal finisher."
  },
  {
    "id": "plate-pinch",
    "name": "Plate Pinch Hold",
    "aliases": [
      "Pinch Grip Hold"
    ],
    "category": "traps-forearms",
    "muscle": "forearms",
    "secondary": [
      "grip"
    ],
    "pattern": "carry",
    "equipment": "specialty",
    "unilateral": true,
    "stimulus": 3,
    "skill": 2,
    "stretch": 1,
    "loadability": 3,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "intermediate",
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Pinch-grip isometric trains the thumb adductors and pinch strength no curl reaches; specialty grip drill, hard to load progressively."
  },
  {
    "id": "dead-hang",
    "name": "Dead Hang",
    "aliases": [
      "Bar Hang"
    ],
    "category": "traps-forearms",
    "muscle": "forearms",
    "secondary": [
      "grip",
      "upper traps"
    ],
    "pattern": "carry",
    "equipment": "bodyweight",
    "unilateral": false,
    "stimulus": 2,
    "skill": 1,
    "stretch": 2,
    "loadability": 2,
    "stability": 4,
    "fatigue": 2,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "beginner",
      "intermediate"
    ],
    "isPower": false,
    "notes": "Bodyweight grip endurance hold — accessible entry to grip training but capped by bodyweight, hard to progress without added load."
  },
  {
    "id": "fat-grip-hold",
    "name": "Fat-Grip Hold",
    "aliases": [
      "Axle Hold",
      "Thick-Bar Hold"
    ],
    "category": "traps-forearms",
    "muscle": "forearms",
    "secondary": [
      "grip"
    ],
    "pattern": "carry",
    "equipment": "specialty",
    "unilateral": false,
    "stimulus": 3,
    "skill": 2,
    "stretch": 1,
    "loadability": 4,
    "stability": 4,
    "fatigue": 3,
    "power": 1,
    "techniques": [
      "iso-hold"
    ],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": false,
    "notes": "Thick-bar/axle isometric overloads the crush grip far past a normal bar — advanced grip specialty, demanding and slow to progress."
  },
  {
    "id": "power-shrug",
    "name": "Power Shrug",
    "aliases": [
      "Explosive Shrug",
      "Dynamic Shrug"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "forearms",
      "posterior chain"
    ],
    "pattern": "shrug",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 3,
    "stretch": 2,
    "loadability": 5,
    "stability": 3,
    "fatigue": 3,
    "power": 4,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Heavy explosive shrug from a hang — ballistic trap drive with supramaximal loads. Skill-dependent, a genuine power expression but short, so fatigue is moderate not maximal."
  },
  {
    "id": "snatch-grip-high-pull",
    "name": "Snatch-Grip High Pull",
    "aliases": [
      "High Pull"
    ],
    "category": "traps-forearms",
    "muscle": "upper traps",
    "secondary": [
      "rear delts",
      "posterior chain",
      "forearms"
    ],
    "pattern": "olympic",
    "equipment": "barbell",
    "unilateral": false,
    "stimulus": 3,
    "skill": 4,
    "stretch": 3,
    "loadability": 5,
    "stability": 3,
    "fatigue": 5,
    "power": 5,
    "techniques": [],
    "tierFit": [
      "advanced",
      "elite"
    ],
    "isPower": true,
    "notes": "Explosive triple-extension pull driving the traps ballistically through a long ROM; its value is power and CNS output, not trap hypertrophy — an elite power drill, not an isolation."
  }
];
