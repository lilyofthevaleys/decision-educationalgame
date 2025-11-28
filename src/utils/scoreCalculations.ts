export interface Scores {
  integrity: number;
  trust: number;
  sustainability: number;
}

export interface ScoreImpact {
  integrity: number;
  trust: number;
  sustainability: number;
}

export const INITIAL_SCORES: Scores = {
  integrity: 75,
  trust: 70,
  sustainability: 65,
};

export function updateScores(currentScores: Scores, impacts: ScoreImpact): Scores {
  const newScores: Scores = {
    integrity: 0,
    trust: 0,
    sustainability: 0,
  };

  // Update each metric
  for (const metric in currentScores) {
    const key = metric as keyof Scores;
    let newValue = currentScores[key] + impacts[key];

    // Clamp between 0 and 100
    newValue = Math.max(0, Math.min(100, newValue));

    // Round to whole number
    newScores[key] = Math.round(newValue);
  }

  return newScores;
}

export function getScoreColor(score: number): string {
  if (score >= 80) return '#00FF9F'; // Neon Green
  if (score >= 60) return '#FFD700'; // Gold
  if (score >= 40) return '#FFA500'; // Orange
  return '#FF4444'; // Red
}

export function getScoreChangeIndicator(oldScore: number, newScore: number): {
  arrow: string;
  color: string;
} {
  if (newScore > oldScore) {
    return { arrow: '↑', color: '#00FF9F' };
  } else if (newScore < oldScore) {
    return { arrow: '↓', color: '#FF4444' };
  } else {
    return { arrow: '→', color: '#9E9E9E' };
  }
}
