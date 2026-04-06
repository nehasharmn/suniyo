import React from 'react';
import TransformationSection from '../components/transformation/TransformationSection';
import StakeholderTabs from '../components/transformation/StakeholderTabs';
import FourLevers from '../components/transformation/FourLevers';
import PullQuote from '../components/transformation/PullQuote';
import SolutionCTA from '../components/transformation/SolutionCTA';

export default function TheOutcomes() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-slate-900 pt-36 pb-24 text-center">
        <div className="container mx-auto px-6 max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">Outcomes</p>
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: 'Sora, sans-serif' }}
          >
            What changes when every shift is visible.
          </h1>
          <p className="text-lg text-slate-400 leading-relaxed max-w-xl mx-auto">
            Suniyo doesn't just capture what happens at your front desk. It turns that signal into coaching, recognition, and revenue.
          </p>
        </div>
      </div>

      <TransformationSection />
      <StakeholderTabs />
      <FourLevers />
      <PullQuote />
      <SolutionCTA />
    </div>
  );
}