// src/components/ui/Button.tsx
'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'outline' | 'secondary';
  className?: string;
  onClick?: () => void;
};

export function Button({ 
  children, 
  href, 
  variant = 'primary', 
  className = '',
  onClick
}: ButtonProps) {
  const baseStyles = 'px-6 py-3 rounded-lg font-medium flex items-center justify-center transition-colors';
  
  const variantStyles = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white',
    outline: 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800',
    secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600'
  };
  
  const styles = `${baseStyles} ${variantStyles[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }
  
  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}