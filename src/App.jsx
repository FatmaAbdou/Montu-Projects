import React from 'react';
import Navbar from './components/Navbar';
import AppSidebar from './components/AppSidebar';
import PostWidget from './components/PostWidget';
import { useTheme } from './context/ThemeContext';

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-slate-900 text-slate-100 dark' : 'bg-slate-50 text-slate-900'
    }`}>
      {/* Task 2.1 Top Responsive Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Body Workspace */}
      <div className="flex flex-1">
        {/* Task 2.2 Collapsible Sidebar */}
        <AppSidebar />

        {/* Scrollable Content Container */}
        <main className="flex-1 p-8 space-y-8 max-w-7xl">

          {/* Task 2.3 Global Controls */}
          <div className="flex items-center justify-between pb-6 border-b border-slate-200 dark:border-slate-800">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                Integrated Workspace
              </h1>
              <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                Tasks 2.1, 2.2, and 2.3 Unified App
              </p>
            </div>

            <button
              onClick={toggleTheme}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-indigo-600 text-white hover:bg-indigo-700 transition-colors shadow-sm cursor-pointer"
            >
              Toggle {theme === 'dark' ? 'Light' : 'Dark'} Mode
            </button>
          </div>

          {/* 1. DASHBOARD AT THE VERY TOP */}
          <section id="dashboard" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Dashboard Overview</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Total Revenue</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">$24,500</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Active Users</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">1,248</p>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Conversion Rate</p>
                <p className="text-xl font-bold text-slate-900 dark:text-white mt-1">3.42%</p>
              </div>
            </div>
          </section>

          {/* 2. TASK 2.3 WIDGET IN ITS OWN SECTION DIRECTLY BELOW DASHBOARD */}
          <section id="task2-3" className="scroll-mt-24">
            <PostWidget />
          </section>

          <hr className="border-slate-200 dark:border-slate-800 my-6" />

          {/* NAVBAR & SIDEBAR REMAINING ANCHOR SECTIONS */}

          <section id="home" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mt-3">Home Section</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Welcome to the main homepage section.</p>
          </section>

          <section id="about" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[120px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">About Us</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Information about the application development studio.</p>
          </section>

          <section id="services" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[120px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">Services</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Frontend component architecture and full-stack integration.</p>
          </section>

          <section id="contact" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[120px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/60 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">Contact</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Reach out for project collaboration and feedback.</p>
          </section>

          <section id="analytics" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[120px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">Analytics</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Data insights and usage metrics.</p>
          </section>

          <section id="team" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[120px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">Team Management</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">Manage team members and role permissions.</p>
          </section>

          <section id="settings" className="scroll-mt-24 p-6 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm min-h-[120px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mt-3">Settings</h2>
            <p className="text-slate-600 dark:text-slate-300 mt-1">System configurations and preferences.</p>
          </section>

        </main>
      </div>
    </div>
  );
}