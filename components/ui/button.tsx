import type { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  children: ReactNode;
};

export function Button({
  variant = 'primary',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const styles = {
    primary: 'bg-brand-500 text-white hover:bg-brand-600',
    secondary: 'border border-slate-200 bg-white text-slate-700 hover:border-brand-200 hover:text-brand-700',
    ghost: 'bg-slate-100 text-slate-700 hover:bg-slate-200',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition ${styles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
