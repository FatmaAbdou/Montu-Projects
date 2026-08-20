import { useSelector, useDispatch } from 'react-redux';
import { ChevronLeft, ChevronRight, LayoutDashboard } from 'lucide-react';
import { Button } from './ui/button';
import { sidebarLinks } from '../data/appData';
import { RootState } from '../store';
import { toggleSidebar, setActiveSection } from '../store/uiSlice';

export default function AppSidebar() {
  const dispatch = useDispatch();
  const { isSidebarCollapsed, activeSection } = useSelector((state: RootState) => state.ui);

  return (
    <aside
      className={`relative flex flex-col border-r border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-all duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      } min-h-screen p-4`}
    >
      <div className="flex items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800">
        <div className="flex items-center gap-3 overflow-hidden">
          <div className="p-2 bg-indigo-600 text-white rounded-lg flex-shrink-0">
            <LayoutDashboard className="w-5 h-5" />
          </div>
          {!isSidebarCollapsed && (
            <span className="font-bold text-slate-800 dark:text-white text-lg whitespace-nowrap">
              DevStudio
            </span>
          )}
        </div>
      </div>

      <Button
        variant="outline"
        size="icon"
        onClick={() => dispatch(toggleSidebar())}
        className="absolute -right-3 top-7 rounded-full w-7 h-7 bg-white dark:bg-slate-800 dark:text-white shadow-sm hover:bg-slate-100 dark:hover:bg-slate-700"
        aria-label="Toggle Sidebar"
      >
        {isSidebarCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
      </Button>

      <nav className="mt-6 flex-1 space-y-1">
        {sidebarLinks.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.href;

          return (
            <a
              key={item.name}
              href={item.href}
              onClick={() => dispatch(setActiveSection(item.href))}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg font-medium transition-colors ${
                isActive
                  ? 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white'
              }`}
            >
              {Icon && <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-indigo-600 dark:text-indigo-400' : 'text-slate-400'}`} />}
              {!isSidebarCollapsed && (
                <span className="whitespace-nowrap text-sm">{item.name}</span>
              )}
            </a>
          );
        })}
      </nav>
    </aside>
  );
}