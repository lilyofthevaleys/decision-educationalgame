import { motion } from 'motion/react';
import { Button } from './Button';

interface GameIntroProps {
  characterName: string;
  onBegin: () => void;
}

export function GameIntro({ characterName, onBegin }: GameIntroProps) {
  const glitchSquares = [
    { id: 1, size: 44, x: '7%', y: '12%', duration: 4, delay: 0 },
    { id: 2, size: 32, x: '17%', y: '30%', duration: 5, delay: 0.5 },
    { id: 3, size: 64, x: '27%', y: '10%', duration: 4.5, delay: 1 },
    { id: 4, size: 30, x: '37%', y: '36%', duration: 5.5, delay: 1.5 },
    { id: 5, size: 56, x: '49%', y: '20%', duration: 4.8, delay: 2 },
    { id: 6, size: 42, x: '61%', y: '34%', duration: 5.2, delay: 2.5 },
    { id: 7, size: 68, x: '73%', y: '14%', duration: 4.3, delay: 3 },
    { id: 8, size: 50, x: '83%', y: '30%', duration: 5.8, delay: 3.5 },
    { id: 9, size: 34, x: '15%', y: '64%', duration: 4.6, delay: 0.8 },
    { id: 10, size: 56, x: '29%', y: '72%', duration: 5.3, delay: 1.3 },
    { id: 11, size: 36, x: '43%', y: '66%', duration: 4.9, delay: 1.8 },
    { id: 12, size: 52, x: '57%', y: '70%', duration: 5.1, delay: 2.3 },
    { id: 13, size: 40, x: '71%', y: '63%', duration: 4.7, delay: 2.8 },
    { id: 14, size: 60, x: '85%', y: '68%', duration: 5.4, delay: 3.3 },
  ];
  const squares = glitchSquares.map((sq, i) => ({ ...sq, alpha: [0.18, 0.22, 0.28][i % 3] }));
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0933] via-[#2d1154] to-[#1A0933] flex items-center justify-center p-4">
      <div className="absolute inset-0 pointer-events-none hidden md:block">
        {squares.map((sq) => (
          <div key={sq.id} className="absolute" style={{ left: sq.x, top: sq.y, width: sq.size, height: sq.size }}>
            <motion.div
              className="absolute"
              style={{ width: '100%', height: '100%', background: `rgba(0,255,159,${sq.alpha})`, boxShadow: `0 0 14px rgba(0,255,159,${sq.alpha})` }}
              animate={{ opacity: [0, Math.min(0.5, sq.alpha + 0.15), sq.alpha, 0], scale: [0.92, 1, 1.02, 1], x: [0, 3, -3, 0] }}
              transition={{ duration: sq.duration, repeat: Infinity, ease: 'easeInOut', delay: sq.delay }}
            />
            <motion.div
              className="absolute"
              style={{ width: '100%', height: '100%', background: `rgba(123,44,191,${Math.max(0.16, sq.alpha - 0.06)})`, mixBlendMode: 'screen' }}
              animate={{ opacity: [0, Math.min(0.35, sq.alpha + 0.08), 0], x: [-4, -6, -4] }}
              transition={{ duration: sq.duration, repeat: Infinity, ease: 'easeInOut', delay: sq.delay }}
            />
            <motion.div
              className="absolute"
              style={{ width: '100%', height: '100%', background: `rgba(0,255,159,${Math.max(0.16, sq.alpha - 0.06)})`, mixBlendMode: 'screen' }}
              animate={{ opacity: [0, Math.min(0.35, sq.alpha + 0.08), 0], x: [4, 6, 4] }}
              transition={{ duration: sq.duration, repeat: Infinity, ease: 'easeInOut', delay: sq.delay }}
            />
          </div>
        ))}
      </div>
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
