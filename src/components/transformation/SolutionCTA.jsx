import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

export default function SolutionCTA() {
  return (
    <section id="cta" className="py-24 bg-slate-900">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight"
          style={{ fontFamily: 'Sora, sans-serif' }}
        >
          See what Suniyo surfaces at a property like yours.
        </h2>
        <p className="text-slate-400 text-lg leading-relaxed mb-12">
          Whether you're an owner evaluating ROI or a GM looking for better coaching tools, we'll show you exactly what Suniyo sees at your front desk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/Subscribe">
            <Button className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-full text-sm border-0 transition-all duration-200">
              Book a Demo
            </Button>
          </Link>
          <Link to="/Subscribe">
            <Button variant="outline" className="px-8 py-3 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold rounded-full text-sm transition-all duration-200">
              I'm an Owner / Executive
            </Button>
          </Link>
          <Link to="/Subscribe">
            <Button variant="outline" className="px-8 py-3 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white font-semibold rounded-full text-sm transition-all duration-200">
              I'm a General Manager
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}