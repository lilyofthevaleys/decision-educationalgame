interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Button({
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  children,
  className = '',
}: ButtonProps) {
  const baseClasses = 'transition-all duration-300 rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variantClasses = {
    primary: 'bg-[#00FF9F] text-black hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,159,0.4)]',
    secondary: 'bg-transparent border-2 border-[#7B2CBF] text-white hover:bg-[#7B2CBF]/20 hover:shadow-[0_0_20px_rgba(123,44,191,0.4)]',
    danger: 'bg-[#FF4444] text-white hover:bg-[#dd3333]',
  };

  const sizeClasses = {
    small: 'px-4 py-2 text-sm',
    medium: 'px-6 py-3 text-base',
    large: 'px-8 py-4 text-lg',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
