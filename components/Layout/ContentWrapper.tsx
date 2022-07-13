import React from 'react';
import { ModularComponent } from 'components/Types/.';
import { twMerge } from 'tailwind-merge';

export default function ContentWrapper({
  className = '',
  children,
}: ModularComponent) {
  const baseClasses = 'p-2 sm:w-[980px] sm:mx-auto';
  const mergedClasses = twMerge(baseClasses, className);
  return <div className={mergedClasses}>{children}</div>;
}
