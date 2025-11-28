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
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1A0933] via-[#2d1154] to-[#1A0933] flex items-center justify-center p-4">
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
