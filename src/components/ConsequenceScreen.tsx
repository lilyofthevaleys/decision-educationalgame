import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { Button } from './Button';
import { ScoreBar } from './ScoreBar';
import { Scores } from '../utils/scoreCalculations';

interface ConsequenceScreenProps {
  choiceSelected: string;
  consequence: string;
  oldScores: Scores;
  newScores: Scores;
  onContinue: () => void;
}

export function ConsequenceScreen({
  choiceSelected,
  consequence,
  oldScores,
  newScores,
  onContinue,
}: ConsequenceScreenProps) {
  const [showContinue, setShowContinue] = useState(false);
  const [autoAdvanceTimer, setAutoAdvanceTimer] = useState(5);

  useEffect(() => {
    // Show continue button after animations
    const timer = setTimeout(() => {
      setShowContinue(true);
    }, 1800);

    // Auto-advance countdown
    const countdown = setInterval(() => {
      setAutoAdvanceTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    // Auto-advance after 5 seconds
    const autoAdvance = setTimeout(() => {
      onContinue();
    }, 5000);

    return () => {
      clearTimeout(timer);
      clearTimeout(autoAdvance);
      clearInterval(countdown);
    };
  }, [onContinue]);

  // Determine outcome tone
  const getOutcomeIcon = () => {
    const integrityChange = newScores.integrity - oldScores.integrity;
    if (integrityChange > 10) return { icon: '✓', color: '#00FF9F' };
    if (integrityChange < -10) return { icon: '✗', color: '#FF4444' };
    return { icon: '~', color: '#FFD700' };
  };

  const outcome = getOutcomeIcon();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0933] via-[#2d1154] to-[#1A0933] flex items-center justify-center p-4">
      <div className="max-w-3xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-6"
        >
          <h2 className="text-[#00FF9F] text-2xl">
            YOU CHOSE: <span className="text-3xl">{choiceSelected}</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, type: 'spring' }}
          className="flex justify-center mb-8"
        >
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center text-5xl border-4"
            style={{
              borderColor: outcome.color,
              color: outcome.color,
              boxShadow: `0 0 30px ${outcome.color}40`,
            }}
          >
            {outcome.icon}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="bg-black/40 backdrop-blur-sm rounded-xl p-8 mb-8 border border-white/10"
        >
          <p className="text-white text-lg leading-relaxed text-center">
            {consequence}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="mb-8"
        >
          <h3 className="text-[#00FF9F] text-2xl mb-6 text-center">IMPACT:</h3>
          <div className="space-y-4 max-w-2xl mx-auto">
            <ScoreBar
              icon="💎"
              label="Integrity"
              value={newScores.integrity}
              oldValue={oldScores.integrity}
              showChange
              animated
            />
            <ScoreBar
              icon="🤝"
              label="Public Trust"
              value={newScores.trust}
              oldValue={oldScores.trust}
              showChange
              animated
            />
            <ScoreBar
              icon="🌱"
              label="Sustainability"
              value={newScores.sustainability}
              oldValue={oldScores.sustainability}
              showChange
              animated
            />
          </div>
        </motion.div>

        {showContinue && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-center"
          >
            <Button variant="primary" size="large" onClick={onContinue}>
              CONTINUE {autoAdvanceTimer > 0 && `(${autoAdvanceTimer})`}
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
