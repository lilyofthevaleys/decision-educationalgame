import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { ProgressBar } from './ProgressBar';
import { ChoiceCard } from './ChoiceCard';
import { X, HelpCircle } from 'lucide-react';

interface Choice {
  id: string;
  text: string;
  impacts: {
    integrity: number;
    trust: number;
    sustainability: number;
  };
  consequence: string;
}

interface ScenarioScreenProps {
  scenarioNumber: number;
  totalScenarios: number;
  title: string;
  description: string;
  choices: Choice[];
  onChoiceSelect: (choiceId: string, consequence: string, impacts: any) => void;
  onExit: () => void;
  imageSrc?: string;
}

export function ScenarioScreen({
  scenarioNumber,
  totalScenarios,
  title,
  description,
  choices,
  onChoiceSelect,
  onExit,
  imageSrc,
}: ScenarioScreenProps) {
  const [selectedChoice, setSelectedChoice] = useState<string | null>(null);

  // Reset selected choice when scenario changes
  useEffect(() => {
    setSelectedChoice(null);
  }, [scenarioNumber]);

  const handleChoiceClick = (choice: Choice) => {
    if (selectedChoice) return; // Prevent multiple selections

    setSelectedChoice(choice.id);

    // Wait a moment for visual feedback, then proceed
    setTimeout(() => {
      onChoiceSelect(choice.id, choice.consequence, choice.impacts);
    }, 650);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0118] via-[#1A0933] to-[#2d1154] p-4 md:p-8 relative overflow-hidden">
      {/* Animated background gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-[#00FF9F]/10 rounded-full blur-3xl"
        animate={{
          x: [0, 50, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ top: '20%', left: '10%' }}
      />
      <motion.div
        className="absolute w-96 h-96 bg-[#7B2CBF]/10 rounded-full blur-3xl"
        animate={{
          x: [0, -50, 0],
          y: [0, 50, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{ bottom: '20%', right: '10%' }}
      />

      {/* Top Bar */}
      <div className="flex justify-between items-center mb-8 relative z-10">
        <ProgressBar current={scenarioNumber} total={totalScenarios} />
        <motion.button
          onClick={onExit}
          whileHover={{ scale: 1.1, rotate: 90 }}
          whileTap={{ scale: 0.9 }}
          className="text-gray-400 hover:text-[#00FF9F] transition-colors backdrop-blur-sm bg-black/30 rounded-full p-2 border border-white/10"
          aria-label="Exit game"
        >
          <X size={28} />
        </motion.button>
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10"
      >
        {/* Illustration with enhanced styling */}
        <motion.div
          className="w-full max-w-[600px] mx-auto aspect-video bg-gradient-to-br from-[#7B2CBF]/30 via-[#1A0933]/40 to-[#00FF9F]/30 rounded-3xl mb-8 flex items-center justify-center border-2 border-white/10 backdrop-blur-sm relative overflow-hidden shadow-[0_0_40px_rgba(123,44,191,0.3)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          {/* Animated rings in background */}
          <motion.div
            className="absolute inset-0 border-4 border-[#00FF9F]/20 rounded-3xl"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          {imageSrc ? (
            <img
              src={imageSrc}
              alt="Scenario illustration"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl"
            />
          ) : (
            <motion.div
              className="text-9xl relative z-10"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <HelpCircle size={120} className="text-[#00FF9F] opacity-50" />
            </motion.div>
          )}
        </motion.div>

        {/* Scenario Title with enhanced styling */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-[#00FF9F] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl mb-4 md:mb-6 drop-shadow-[0_0_20px_rgba(0,255,159,0.5)] tracking-tight" style={{ fontFamily: 'Space Grotesk, sans-serif' }}>
            {title}
          </h2>
          <motion.div
            className="w-48 sm:w-64 md:w-80 h-1 mx-auto rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #00FF9F, transparent)',
            }}
            animate={{
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
        </motion.div>

        {/* Scenario Description with glassmorphism */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="backdrop-blur-md bg-white/5 rounded-2xl p-8 mb-8 border border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
        >
          <p className="text-white text-xl leading-relaxed text-center">
            {description}
          </p>
        </motion.div>

        {/* Choice Prompt */}
        <motion.h3
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-white text-3xl mb-8 text-center font-semibold tracking-wide"
        >
          What do you do?
        </motion.h3>

        {/* Choices */}
        <div className="flex flex-col items-center">
          {choices.map((choice, index) => (
            <motion.div
              key={choice.id}
              initial={{ opacity: 0, x: -50 }}
              animate={
                selectedChoice && selectedChoice !== choice.id
                  ? { opacity: 0.45, scale: 0.98 }
                  : { opacity: 1, x: 0, scale: 1 }
              }
              transition={{ delay: 0.6 + index * 0.1, duration: 0.35, ease: 'easeOut' }}
            >
              <ChoiceCard
                option={choice.id as 'A' | 'B' | 'C' | 'D'}
                text={choice.text}
                impact={choice.impacts}
                onClick={() => handleChoiceClick(choice)}
                disabled={selectedChoice !== null}
                selected={selectedChoice === choice.id}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
