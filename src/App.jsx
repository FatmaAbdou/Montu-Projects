import React from 'react';
import Navbar from './components/Navbar';
import AppSidebar from './components/AppSidebar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Task 2.1 Top Responsive Navbar */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Body Workspace */}
      <div className="flex flex-1">
        {/* Task 2.2 Collapsible Sidebar */}
        <AppSidebar />

        {/* Scrollable Content Container */}
        <main className="flex-1 p-8 space-y-12 max-w-7xl">
          
          {/* ================================================= */}
          {/* NAVBAR TARGET SECTIONS                             */}
          {/* ================================================= */}

          {/* #home Section */}
          <section id="home" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h1 className="text-2xl font-bold text-slate-900 mt-3">Home Section</h1>
            
          </section>

          {/* #about Section */}
          <section id="about" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-3">About Us</h2>
            
          </section>

          {/* #services Section */}
          <section id="services" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-3">Services</h2>
            
          </section>

          {/* #contact Section */}
          <section id="contact" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-full">
              Navbar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-3">Contact</h2>
            
          </section>

          <hr className="border-slate-200 my-8" />

          {/* ================================================= */}
          {/* SIDEBAR TARGET SECTIONS                            */}
          {/* ================================================= */}

          {/* #dashboard Section */}
          <section id="dashboard" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-2xl font-bold text-slate-900 mt-3">Dashboard Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-medium text-slate-500">Total Revenue</p>
                <p className="text-xl font-bold text-slate-900 mt-1">$24,500</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-medium text-slate-500">Active Users</p>
                <p className="text-xl font-bold text-slate-900 mt-1">1,248</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <p className="text-xs font-medium text-slate-500">Conversion Rate</p>
                <p className="text-xl font-bold text-slate-900 mt-1">3.42%</p>
              </div>
            </div>
          </section>

          {/* #analytics Section */}
          <section id="analytics" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-3">Analytics</h2>
            
          </section>

          {/* #team Section */}
          <section id="team" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-3">Team Management</h2>
            
          </section>

          {/* #settings Section */}
          <section id="settings" className="scroll-mt-24 p-6 bg-white rounded-xl border border-slate-200 shadow-sm min-h-[250px]">
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-full">
              Sidebar Anchor
            </span>
            <h2 className="text-xl font-bold text-slate-900 mt-3">Settings</h2>
            
          </section>

        </main>
      </div>
    </div>
  );
}