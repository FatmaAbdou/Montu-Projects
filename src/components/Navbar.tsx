import React, { useState } from 'react';
import { navbarLinks } from '../data/appData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="shrink-0 font-bold text-xl tracking-wide text-indigo-400">
            DevStudio
          </div>

          {/* Mapped Desktop Navigation */}
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            {navbarLinks.map((link) => (
              <a key={link.name} href={link.href} className="hover:text-indigo-400 transition-colors">
                {link.name}
              </a>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen((prev) => !prev)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-slate-800 focus:outline-hidden focus:ring-2 focus:ring-indigo-500"
              aria-label="Toggle Menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mapped Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-slate-800 px-4 pt-2 pb-4 space-y-2 text-base font-medium border-t border-slate-700">
          {navbarLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md hover:bg-slate-700 hover:text-indigo-400"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}