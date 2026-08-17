import React from 'react';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-100 text-slate-800 scroll-smooth">
      <Navbar />
     
      <main className="max-w-7xl mx-auto p-6 space-y-12">
        <section id="home" className="h-96 bg-white rounded-lg p-8 shadow-xs flex items-center justify-center">
          <h2 className="text-3xl font-bold text-indigo-600">Home Section</h2>
        </section>

        <section id="about" className="h-96 bg-white rounded-lg p-8 shadow-xs flex items-center justify-center">
          <h2 className="text-3xl font-bold text-indigo-600">About Section</h2>
        </section>

        <section id="services" className="h-96 bg-white rounded-lg p-8 shadow-xs flex items-center justify-center">
          <h2 className="text-3xl font-bold text-indigo-600">Services Section</h2>
        </section>

        <section id="contact" className="h-96 bg-white rounded-lg p-8 shadow-xs flex items-center justify-center">
          <h2 className="text-3xl font-bold text-indigo-600">Contact Section</h2>
        </section>
      </main>
    </div>
  );
}