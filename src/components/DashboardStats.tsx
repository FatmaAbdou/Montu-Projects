import React from 'react';
import { StatMetric } from '../types';

interface DashboardStatsProps {
  stats: StatMetric[];
}

export default function DashboardStats({ stats }: DashboardStatsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
      {stats.map(({ id, label, value, change }) => (
        <div
          key={id}
          className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
        >
          <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
          <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">{value}</p>
          {change && (
            <span
              className={`text-xs font-medium mt-1 inline-block ${
                change.startsWith('+') ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-500'
              }`}
            >
              {change} from last month
            </span>
          )}
        </div>
      ))}
    </div>
  );
}