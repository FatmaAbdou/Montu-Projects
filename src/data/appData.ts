import { Home, BarChart2, Users, Settings } from 'lucide-react';
import { NavItem, SectionData, StatMetric } from '../types';

export const navbarLinks: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Services', href: '#services' },
  { name: 'Contact', href: '#contact' },
];

export const sidebarLinks: NavItem[] = [
  { name: 'Dashboard', href: '#dashboard', icon: Home },
  { name: 'Analytics', href: '#analytics', icon: BarChart2 },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Settings', href: '#settings', icon: Settings },
];

export const dashboardMetrics: StatMetric[] = [
  { id: 'revenue', label: 'Total Revenue', value: '$24,500', change: '+12%' },
  { id: 'users', label: 'Active Users', value: '1,248', change: '+8%' },
  { id: 'conversion', label: 'Conversion Rate', value: '3.42%', change: '-0.2%' },
];

export const navbarSections: SectionData[] = [
  { id: 'home', title: 'Home Section', description: 'Welcome to the main homepage section.', badge: 'Navbar Anchor', badgeColor: 'indigo' },
  { id: 'about', title: 'About Us', description: 'Information about the application development studio.', badge: 'Navbar Anchor', badgeColor: 'indigo' },
  { id: 'services', title: 'Services', description: 'Frontend component architecture and full-stack integration.', badge: 'Navbar Anchor', badgeColor: 'indigo' },
  { id: 'contact', title: 'Contact', description: 'Reach out for project collaboration and feedback.', badge: 'Navbar Anchor', badgeColor: 'indigo' },
];

export const sidebarSections: SectionData[] = [
  { id: 'analytics', title: 'Analytics', description: 'Data insights and usage metrics.', badge: 'Sidebar Anchor', badgeColor: 'emerald' },
  { id: 'team', title: 'Team Management', description: 'Manage team members and role permissions.', badge: 'Sidebar Anchor', badgeColor: 'emerald' },
  { id: 'settings', title: 'Settings', description: 'System configurations and preferences.', badge: 'Sidebar Anchor', badgeColor: 'emerald' },
];