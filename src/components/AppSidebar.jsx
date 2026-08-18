import React, { useState } from 'react';
import { 
  Home, 
  BarChart2, 
  Users, 
  Settings, 
  ChevronLeft, 
  ChevronRight, 
  LayoutDashboard 
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const navigationItems = [
  { name: 'Dashboard', href: '#dashboard', icon: Home },
  { name: 'Analytics', href: '#analytics', icon: BarChart2 },
  { name: 'Team', href: '#team', icon: Users },
  { name: 'Settings', href: '#settings', icon: Settings },
];

export default function AppSidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('#dashboard');

  return (
    <aside 
      className={`relative flex flex-col border-r border-slate-200 bg-white transition-all duration-300 ease-in-out ${
        isCollapsed ? 'w-16' : 'w-64'
      } min-h-screen p-4`}
    >
      {/* Brand / Header */}
      <div className="flex items-center justify-between pb-6 border-b border-slate-100">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-indigo-600 text-white rounded-lg flex-shrink-0">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          {!isCollapsed && (
            <span className="font-bold text-slate-800 text-lg whitespace-nowrap">
              DevStudio
            </span>
          )}
        </div>
      </div>

      {/* Collapse Toggle Button */}
      <Button
        variant="outline"
        size="icon"
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="absolute -right-3 top-7 rounded-full w-7 h-7 bg-white shadow-sm hover:bg-slate-100"
        aria-label="Toggle Sidebar"
      >
        {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </Button>

      {/* Navigation Links with Active State */}
      <nav className="mt-6 flex-1 space-y-1">
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveTab(item.href)}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-50 text-indigo-600'
                  : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'
              }`}
            >
              <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-indigo-600' : 'text-slate-400'}`} />
              {!isCollapsed && (
                <span className="whitespace-nowrap text-sm">{item.name}</span>
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}