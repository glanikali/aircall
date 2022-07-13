import React from 'react';
import { ModularComponent } from '../Types';
import { twMerge } from 'tailwind-merge';

interface Button extends ModularComponent {
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
}
export function Button({
  className = '',
  type = 'button',
  onClick,
  children,
}: Button) {
  const baseClasses =
    'transition-all bg-amber-500 text-white py-2 px-6 rounded hover:bg-amber-800 shadow-md';
  const mergedClasses = twMerge(baseClasses, className);
  return (
    <button type={type} className={mergedClasses} onClick={onClick}>
      {children}
    </button>
  );
}
