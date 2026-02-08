import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface RomanticButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export default function RomanticButton({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}: RomanticButtonProps) {
  const baseStyles = 'romantic-button font-bubble transition-all duration-300 ease-out flex items-center justify-center';
  
  const variantStyles = {
    primary: 'bg-romantic-pink text-white hover:bg-romantic-pink-dark shadow-romantic hover:shadow-romantic-lg hover:scale-105',
    secondary: 'bg-romantic-lavender text-white hover:bg-romantic-lavender-dark shadow-romantic hover:shadow-romantic-lg hover:scale-105',
    ghost: 'bg-white/80 text-romantic-deep hover:bg-white shadow-sm hover:shadow-md',
  };
  
  const sizeStyles = {
    sm: 'px-4 py-2 text-sm rounded-2xl',
    md: 'px-8 py-4 text-xl rounded-3xl',
    lg: 'px-12 py-5 text-2xl rounded-full',
  };

  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
