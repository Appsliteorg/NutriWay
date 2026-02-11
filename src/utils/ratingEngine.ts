"use client";

export type HealthStatus = 'success' | 'warning' | 'danger' | 'unknown';

export interface RatingResult {
  label: string;
  status: HealthStatus;
  emoji: string;
}

/**
 * Converts Nutri-Score grade (a-e) into Arabic health labels and status.
 */
export function evaluateNutriScore(grade?: string): RatingResult {
  if (!grade) {
    return { label: "غير متوفر", status: "unknown", emoji: "" };
  }

  const g = grade.toLowerCase();
  switch (g) {
    case "a":
    case "b":
      return { label: "صحي", status: "success", emoji: "🟢" };
    case "c":
      return { label: "متوسط", status: "warning", emoji: "🟡" };
    case "d":
    case "e":
      return { label: "غير صحي", status: "danger", emoji: "🔴" };
    default:
      return { label: "غير متوفر", status: "unknown", emoji: "" };
  }
}

/**
 * Evaluates specific nutrient levels (sugar, fat, salt) based on standard thresholds.
 */
export function evaluateNutrient(value: number | undefined, type: 'sugar' | 'fat' | 'salt'): { label: string, status: HealthStatus, width: string } {
  if (value === undefined) {
    return { label: "غير متوفر", status: "unknown", width: "0%" };
  }
  
  const thresholds = {
    sugar: { low: 5, high: 22.5 },
    fat: { low: 3, high: 17.5 },
    salt: { low: 0.3, high: 1.5 }
  };

  const t = thresholds[type];
  if (value <= t.low) return { label: "منخفض", status: "success", width: "33%" };
  if (value <= t.high) return { label: "متوسط", status: "warning", width: "66%" };
  return { label: "مرتفع", status: "danger", width: "100%" };
}