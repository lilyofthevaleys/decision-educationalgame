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

  // TIER 1
  if (integrity >= 80 && trust >= 80 && sustainability >= 80) {
    personalityId = 'guardian';
  } else if (integrity >= 80 && sustainability >= 80 && trust >= 60 && trust < 80) {
    personalityId = 'crusader';
  }
  // TIER 2
  else if (integrity >= 60 && integrity < 80 && trust >= 80 && sustainability >= 60 && sustainability < 80) {
    personalityId = 'diplomat';
  } else if (integrity >= 60 && integrity < 80 && trust >= 60 && trust < 80 && sustainability >= 80) {
    personalityId = 'architect';
  }
  // TIER 2 fallback: all dimensions in 60–79 range (no single 80+)
  else if (
    integrity >= 60 && integrity < 80 &&
    trust >= 60 && trust < 80 &&
    sustainability >= 60 && sustainability < 80
  ) {
    personalityId = trust >= sustainability ? 'diplomat' : 'architect';
  }
  // TIER 3
  else if (integrity >= 60 && integrity < 80 && trust >= 40 && trust < 60 && sustainability >= 40 && sustainability < 60) {
    personalityId = 'pragmatist';
  } else if (integrity >= 40 && integrity < 60 && trust >= 40 && trust < 60 && sustainability >= 40 && sustainability < 60) {
    personalityId = 'aspiring_changemaker';
  }
  // TIER 4
  else if (integrity >= 40 && integrity < 60 && trust < 40 && sustainability < 40) {
    personalityId = 'spectator';
  } else {
    personalityId = 'corruptor';
  }

  // Find and return the personality object
  const personality = personalitiesData.personalities.find(
    (p) => p.id === personalityId
  );

  if (!personality) {
    return personalitiesData.personalities.find((p) => p.id === 'pragmatist')!;
  }

  return personality as Personality;
}
