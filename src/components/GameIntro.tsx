import { motion } from 'motion/react';
import { Button } from './Button';

interface GameIntroProps {
  characterName: string;
  onBegin: () => void;
}

export function GameIntro({ characterName, onBegin }: GameIntroProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0933] via-[#2d1154] to-[#1A0933] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl w-full bg-black/40 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/10"
      >
        <motion.h1
          className="text-white text-3xl md:text-4xl mb-6 text-center"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Welcome, <span className="text-[#00FF9F]">{characterName}</span>
        </motion.h1>

        <motion.div
          className="space-y-6 text-gray-300 leading-relaxed mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-lg">
            You're about to face <span className="text-[#00FF9F]">20 decisions</span> that will test your integrity.
          </p>

          <p>
            Every choice affects three critical metrics:
          </p>

          <div className="space-y-3 ml-4">
            <div className="flex items-center gap-3">
              <span className="text-3xl">💎</span>
              <div>
                <span className="text-white">Integrity</span>
                <p className="text-sm text-gray-400">Personal honesty and ethical consistency</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🤝</span>
              <div>
                <span className="text-white">Public Trust</span>
                <p className="text-sm text-gray-400">How much others believe in you</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌱</span>
              <div>
                <span className="text-white">Sustainability</span>
                <p className="text-sm text-gray-400">Long-term thinking and future impact</p>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-400 italic">
            There are no "right" answers — only consequences. Your choices will reveal your moral profile.
          </p>
        </motion.div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <Button
            variant="primary"
            size="large"
            onClick={onBegin}
            className="text-xl px-16 animate-pulse"
          >
            BEGIN
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}