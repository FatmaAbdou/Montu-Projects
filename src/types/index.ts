import { ComponentType } from 'react';

export interface NavItem {
  name: string;
  href: string;
  icon?: ComponentType<{ className?: string }>;
}

export interface SectionData {
  id: string;
  title: string;
  description?: string;
  badge?: string;
  badgeColor?: 'indigo' | 'emerald';
}

export interface StatMetric {
  id: string;
  label: string;
  value: string;
  change?: string;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface FetchResult<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}