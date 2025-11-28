import { motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { getScoreColor } from '../utils/scoreCalculations';

interface ScoreBarProps {
  icon: string;
  label: string;
  value: number;
  maxValue?: number;
  animated?: boolean;
  showChange?: boolean;
  oldValue?: number;
}

export function ScoreBar({
  icon,
  label,
  value,
  maxValue = 100,
  animated = false,
  showChange = false,
  oldValue,
}: ScoreBarProps) {
  const [displayValue, setDisplayValue] = useState(animated ? 0 : value);
  const percentage = (value / maxValue) * 100;
  const color = getScoreColor(value);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setDisplayValue(value);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [value, animated]);

  const getChangeIndicator = () => {
    if (!showChange || oldValue === undefined) return null;
    if (value > oldValue) return <span className="text-[#00FF9F] ml-2">↑</span>;
    if (value < oldValue) return <span className="text-[#FF4444] ml-2">↓</span>;
    return <span className="text-gray-500 ml-2">→</span>;
  };

  return (
    <div className="w-full max-w-[500px] mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl">{icon}</span>
          <span className="text-white">{label}</span>
        </div>
        <div className="flex items-center">
          {showChange && oldValue !== undefined && (
            <span className="text-gray-400 text-sm mr-2">{oldValue}% →</span>
          )}
          <span className="text-white">{displayValue}%</span>
          {getChangeIndicator()}
        </div>
      </div>
      <div className="w-full h-10 bg-gray-800 rounded-full overflow-hidden">
        {animated ? (
          <motion.div
            className="h-full rounded-full"
            style={{
              background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            }}
            initial={{ width: 0 }}
            animate={{ width: `${percentage}%` }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
          />
        ) : (
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{
              width: `${percentage}%`,
              background: `linear-gradient(90deg, ${color}, ${color}dd)`,
            }}
          />
        )}
      </div>
    </div>
  );
}
