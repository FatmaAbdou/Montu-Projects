import React, { ReactNode } from 'react';
import { SectionData } from '../types';

interface SectionCardProps extends SectionData {
  children?: ReactNode;
}

export default function SectionCard({
  id,
  title,
  description,
  badge,
  badgeColor = 'indigo',
  children,
}: SectionCardProps) {
  const badgeStyles = {
    indigo: 'text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60',
    emerald: 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60',
  };

  return (
    <section
      id={id}
      className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm transition-colors duration-200"
    >
      {badge && (
        <span className={`text-xs font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full ${badgeStyles[badgeColor]}`}>
          {badge}
        </span>
      )}
      <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">{title}</h2>
      {description && <p className="text-slate-600 dark:text-slate-300 mt-1">{description}</p>}
      {children}
    </section>
  );
}