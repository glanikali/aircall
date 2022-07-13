import React from 'react';
import { twMerge } from 'tailwind-merge';
import { ModularComponent } from '../Types';

export default function Card({ className = '', children }: ModularComponent) {
  const baseClasses = '';
  const mergedClasses = twMerge(baseClasses, className);
  return <div className={mergedClasses}>{children}</div>;
}
