interface ProgressBarProps {
  current: number;
  total: number;
  showPercentage?: boolean;
}

export function ProgressBar({ current, total, showPercentage = true }: ProgressBarProps) {
  const percentage = Math.round((current / total) * 100);

  return (
    <div className="w-full max-w-[200px]">
      <div className="text-sm text-white mb-2">
        Progress: {current}/{total}
      </div>
      <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
        <div
          className="h-full bg-[#00FF9F] transition-all duration-500 ease-out"
          style={{ width: `${percentage}%` }}
        />
      </div>
      {showPercentage && (
        <div className="text-xs text-gray-400 mt-1">{percentage}%</div>
      )}
    </div>
  );
}
