import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export default function Button({
  children,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-semibold rounded-full transition-all duration-500 inline-flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-gradient-to-r from-[#1F5FBF] to-[#3A7DFF] hover:shadow-2xl hover:shadow-[#1F5FBF]/40 hover:scale-105',
    secondary: 'bg-white/5 backdrop-blur-xl border border-white/10 hover:bg-white/10 hover:border-white/20',
    outline: 'bg-transparent border-2 border-[#1F5FBF] hover:bg-[#1F5FBF]/10',
  };

  const sizes = {
    sm: 'px-6 py-3 text-sm',
    md: 'px-8 py-4 text-base',
    lg: 'px-10 py-5 text-lg',
  };

  return (
    <motion.button
      whileHover={{ scale: variant === 'primary' ? 1.05 : 1.02 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
    >
      {children}
    </motion.button>
  );
}
