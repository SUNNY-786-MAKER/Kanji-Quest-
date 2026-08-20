import React from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-theme-accent text-white hover:bg-theme-accent-hover shadow-md hover:shadow-lg',
      secondary: 'bg-gray-100/50 text-theme-text hover:bg-gray-200/50 border border-theme-border',
      danger: 'bg-red-500 text-white hover:bg-red-600',
      ghost: 'bg-transparent text-theme-text hover:bg-theme-accent-bg'
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-5 py-2.5 text-base',
      lg: 'px-8 py-4 text-lg'
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';
