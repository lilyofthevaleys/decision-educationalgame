import { ScoreImpact } from '../utils/scoreCalculations';
import { motion } from 'motion/react';

interface ChoiceCardProps {
  option: 'A' | 'B' | 'C' | 'D';
  text: string;
  impact: ScoreImpact;
  onClick: () => void;
  disabled?: boolean;
  selected?: boolean;
}

export function ChoiceCard({
  option,
  text,
  impact,
  onClick,
  disabled = false,
  selected = false,
}: ChoiceCardProps) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02, x: 10 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      layout
      animate={selected ? { scale: 1.02 } : { scale: 1 }}
      transition={{ type: 'spring', stiffness: 190, damping: 24 }}
      className={`
        w-full max-w-[750px] min-h-[100px] p-6 mb-4 text-left rounded-2xl
        border-2 transition-all duration-300 flex items-center
        backdrop-blur-sm relative overflow-hidden group
        ${
          selected
            ? 'border-[#00FF9F] bg-gradient-to-r from-[#00FF9F]/20 to-[#00FF9F]/10 shadow-[0_0_30px_rgba(0,255,159,0.4)]'
            : 'border-gray-700/50 bg-gradient-to-r from-black/60 to-black/40 hover:border-[#00FF9F] hover:bg-gradient-to-r hover:from-[#00FF9F]/10 hover:to-[#00FF9F]/5 hover:shadow-[0_0_20px_rgba(0,255,159,0.2)]'
      }
      ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
      `}
    >
      {/* Animated gradient border effect on hover */}
      {!disabled && !selected && (
        <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#00FF9F]/20 via-[#7B2CBF]/20 to-[#00FF9F]/20 blur-sm" />
        </div>
      )}
      
      <div className="flex gap-5 w-full relative z-10">
        <div className="flex-shrink-0">
          <motion.div
            className={`
              w-10 h-10 rounded-xl flex items-center justify-center text-xl
              transition-all duration-300
              ${
                selected
                  ? 'bg-[#00FF9F] text-black shadow-[0_0_20px_rgba(0,255,159,0.6)]'
                  : 'bg-gradient-to-br from-[#7B2CBF] to-[#5a1f99] text-[#00FF9F] group-hover:from-[#00FF9F] group-hover:to-[#00d682] group-hover:text-black'
              }
            `}
            whileHover={!disabled ? { rotate: [0, -10, 10, 0] } : {}}
            transition={{ duration: 0.5 }}
          >
            <span className="font-bold">{option}</span>
          </motion.div>
        </div>
        <div className="flex-1 flex items-center">
          <p className="text-white text-base sm:text-lg leading-relaxed">{text}</p>
        </div>
      </div>

      {/* Corner accent */}
      {selected && (
        <motion.div
          className="absolute top-0 right-0 w-16 h-16 bg-[#00FF9F]/20 rounded-bl-full"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}

      {selected && (
        <motion.div
          className="absolute inset-0 rounded-2xl"
          initial={{ opacity: 0.25, scale: 0.95 }}
          animate={{ opacity: 0, scale: 1.08 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          style={{ boxShadow: '0 0 30px rgba(0,255,159,0.4)' }}
        />
      )}
    </motion.button>
  );
}
