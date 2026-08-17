import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 font-bold text-xl tracking-wide text-indigo-400">
            DevStudio
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <a href="#home" className="hover:text-indigo-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-indigo-400 transition-colors">About</a>
            <a href="#services" className="hover:text-indigo-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              type="button"
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Menu"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 text-base font-medium border-t border-slate-700">
          <a href="#home" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-indigo-400">Home</a>
          <a href="#about" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-indigo-400">About</a>
          <a href="#services" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-indigo-400">Services</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-indigo-400">Contact</a>
        </div>
      )}
    </nav>
  );
}