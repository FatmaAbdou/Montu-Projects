import { useSelector } from 'react-redux';
import Navbar from './components/Navbar';
import AppSidebar from './components/AppSidebar';
import PostWidget from './components/PostWidget';
import SectionCard from './components/SectionCard';
import DashboardStats from './components/DashboardStats';
import { useTheme } from './context/ThemeContext';
import { RootState } from './store';
import { dashboardMetrics, navbarSections, sidebarSections } from './data/appData';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const activeSection = useSelector((state: RootState) => state.ui.activeSection);

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900 text-slate-100 dark' : 'bg-slate-50 text-slate-900'
    }`}>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="flex flex-1">
        <AppSidebar />

        <main className="flex-1 p-8 space-y-8 max-w-7xl">
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Integrated Workspace
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Active Section: <span className="font-semibold text-indigo-500">{activeSection}</span>
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          <SectionCard id="dashboard" title="Dashboard Overview" badge="Sidebar Anchor" badgeColor="emerald">
            <DashboardStats stats={dashboardMetrics} />
          </SectionCard>

          <section id="task2-3" className="scroll-mt-24">
            <PostWidget />
          </section>

          {navbarSections.map((section) => (
            <SectionCard key={section.id} {...section} />
          ))}

          {sidebarSections.map((section) => (
            <SectionCard key={section.id} {...section} />
          ))}
        </main>
      </div>
    </div>
  );
}