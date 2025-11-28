import { motion } from 'motion/react';
import { Button } from './Button';

interface Character {
  id: string;
  name: string;
  subtitle: string;
  icon: string;
}

const characters: Character[] = [
  {
    id: 'student',
    name: 'Student',
    subtitle: 'Just trying to graduate with dignity',
    icon: '🎓',
  },
  {
    id: 'teacher',
    name: 'Teacher',
    subtitle: 'Shaping minds (and budgets)',
    icon: '👨‍🏫',
  },
  {
    id: 'entrepreneur',
    name: 'Entrepreneur',
    subtitle: 'Building empires, one choice at a time',
    icon: '💼',
  },
];

interface CharacterSelectionProps {
  onSelect: (characterId: string) => void;
}

export function CharacterSelection({ onSelect }: CharacterSelectionProps) {
  const glitchSquares = [
    { id: 1, size: 44, x: '6%', y: '14%', duration: 4, delay: 0 },
    { id: 2, size: 32, x: '16%', y: '32%', duration: 5, delay: 0.5 },
    { id: 3, size: 64, x: '26%', y: '12%', duration: 4.5, delay: 1 },
    { id: 4, size: 30, x: '36%', y: '38%', duration: 5.5, delay: 1.5 },
    { id: 5, size: 56, x: '48%', y: '20%', duration: 4.8, delay: 2 },
    { id: 6, size: 42, x: '60%', y: '34%', duration: 5.2, delay: 2.5 },
    { id: 7, size: 68, x: '72%', y: '14%', duration: 4.3, delay: 3 },
    { id: 8, size: 50, x: '82%', y: '30%', duration: 5.8, delay: 3.5 },
    { id: 9, size: 34, x: '14%', y: '64%', duration: 4.6, delay: 0.8 },
    { id: 10, size: 56, x: '28%', y: '72%', duration: 5.3, delay: 1.3 },
    { id: 11, size: 36, x: '42%', y: '66%', duration: 4.9, delay: 1.8 },
    { id: 12, size: 52, x: '56%', y: '70%', duration: 5.1, delay: 2.3 },
    { id: 13, size: 40, x: '70%', y: '63%', duration: 4.7, delay: 2.8 },
    { id: 14, size: 60, x: '84%', y: '68%', duration: 5.4, delay: 3.3 },
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
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[#00FF9F] text-4xl md:text-5xl mb-4">
            Choose Your Role
          </h1>
          <div className="w-32 h-1 bg-[#00FF9F] mx-auto" />
        </motion.div>

        <div className="mb-8 flex flex-col items-center gap-6 md:flex-row md:flex-nowrap md:justify-center">
          {characters.map((character, index) => (
            <motion.button
              key={character.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              onClick={() => onSelect(character.id)}
              className="w-full md:w-64 group bg-black/40 backdrop-blur-sm rounded-xl p-6 border-2 border-transparent hover:border-[#00FF9F] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,255,159,0.3)] hover:-translate-y-2"
            >
              <div className="text-6xl mb-4">{character.icon}</div>
              <h3 className="text-white text-xl mb-2">{character.name}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {character.subtitle}
              </p>
            </motion.button>
          ))}
        </div>

        
      </div>
    </div>
  );
}
