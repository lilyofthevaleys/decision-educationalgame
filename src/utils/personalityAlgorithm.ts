import { Scores } from './scoreCalculations';
import { personalitiesData } from '../data/personalities';

export interface Personality {
  id: string;
  title: string;
  icon: string;
  description: string;
  reflection: string;
  color: string;
}

export function determinePersonalityType(finalScores: Scores): Personality {
  const { integrity, trust, sustainability } = finalScores;

  let personalityId: string;

  // High Integrity (80+)
  if (integrity >= 80) {
    if (trust >= 75) {
      personalityId = 'idealist';
    } else if (sustainability >= 70) {
      personalityId = 'principled_loner';
    } else {
      personalityId = 'uncompromising_critic';
    }
  }
  // Medium-High Integrity (60-79)
  else if (integrity >= 60) {
    if (trust >= 70) {
      personalityId = 'mediator';
    } else if (sustainability >= 65) {
      personalityId = 'pragmatic_reformist';
    } else {
      personalityId = 'realist';
    }
  }
  // Medium-Low Integrity (40-59)
  else if (integrity >= 40) {
    if (trust >= 60) {
      personalityId = 'opportunist';
    } else if (sustainability < 50) {
      personalityId = 'short_term_thinker';
    } else {
      personalityId = 'conflicted';
    }
  }
  // Low Integrity (0-39)
  else {
    if (trust < 40) {
      personalityId = 'corrupted_clown';
    } else if (sustainability < 40) {
      personalityId = 'desperate_survivor';
    } else {
      personalityId = 'lost';
    }
  }

  // Find and return the personality object
  const personality = personalitiesData.personalities.find(
    (p) => p.id === personalityId
  );

  if (!personality) {
    // Fallback to realist if something goes wrong
    return personalitiesData.personalities.find((p) => p.id === 'realist')!;
  }

  return personality as Personality;
}