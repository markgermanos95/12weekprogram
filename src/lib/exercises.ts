// Typed access to the rated exercise library (exercises.data.ts). This is the
// query layer the program-authoring selects through — and what a future in-app
// exercise picker would read. Pick deliberately: filter by muscle/tier/pattern,
// require a stimulus/stretch floor or a supported intensity technique, sort by
// what matters. This is what stops a beginner's calf raise landing in an elite
// program — selection is a query over ratings, not a guess.

import { EXERCISES_DATA } from "./exercises.data";

export type Tier = "beginner" | "intermediate" | "advanced" | "elite";

export type Exercise = {
  id: string;
  name: string;
  aliases?: string[];
  category: string;          // one of the 12 muscle-group buckets
  muscle: string;            // specific primary muscle
  secondary?: string[];
  pattern: string;
  equipment: string;         // barbell | dumbbell | machine | cable | bodyweight | kettlebell | smith | specialty
  unilateral?: boolean;
  stimulus: number;          // 1–5, hypertrophy value for the primary muscle
  skill: number;             // 1–5, technical demand (gates tier)
  stretch: number;           // 1–5, lengthened-bias
  loadability: number;       // 1–5, how easily load is added/tracked
  stability: number;         // 1–5, supported vs balance-demanding
  fatigue: number;           // 1–5, systemic cost
  power: number;             // 1–5, explosive/ballistic suitability
  techniques: string[];      // intensity techniques it suits
  tierFit: Tier[];           // which program tiers may use it
  isPower: boolean;          // primary purpose is power/explosive output
  notes?: string;
};

export const EXERCISES: Exercise[] = EXERCISES_DATA as unknown as Exercise[];

export const exerciseById = (id: string): Exercise | undefined =>
  EXERCISES.find((e) => e.id === id);

export type SelectOpts = {
  muscle?: string;
  category?: string;
  pattern?: string;
  tier?: Tier;
  equipment?: string;
  minStimulus?: number;
  minStretch?: number;
  technique?: string;
  isPower?: boolean;
  includeSecondary?: boolean; // also match exercises where `muscle` is a secondary mover
  sortBy?: "stimulus" | "stretch" | "skill" | "power" | "loadability";
};

export function selectExercises(o: SelectOpts = {}): Exercise[] {
  let r = EXERCISES.filter((e) => {
    if (o.muscle && e.muscle !== o.muscle && !(o.includeSecondary && (e.secondary || []).includes(o.muscle))) return false;
    if (o.category && e.category !== o.category) return false;
    if (o.pattern && e.pattern !== o.pattern) return false;
    if (o.equipment && e.equipment !== o.equipment) return false;
    if (o.tier && !e.tierFit.includes(o.tier)) return false;
    if (o.minStimulus !== undefined && e.stimulus < o.minStimulus) return false;
    if (o.minStretch !== undefined && e.stretch < o.minStretch) return false;
    if (o.technique && !e.techniques.includes(o.technique)) return false;
    if (o.isPower !== undefined && e.isPower !== o.isPower) return false;
    return true;
  });
  if (o.sortBy) {
    const k = o.sortBy;
    r = r.slice().sort((a, b) => (b[k] as number) - (a[k] as number));
  }
  return r;
}

export const MUSCLES: string[] = [...new Set(EXERCISES.map((e) => e.muscle))].sort();
export const CATEGORIES: string[] = [...new Set(EXERCISES.map((e) => e.category))];
