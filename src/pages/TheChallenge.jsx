import React from 'react';
import Challenge from '../components/Challenge';
import Revenue from '../components/Revenue';
import RevenueEstimator from '../components/RevenueEstimator';

export default function TheChallenge() {
  return (
    <div className="bg-white">
      {/* Page Hero spacer */}
      <div className="pt-24" />
      <Revenue />
      <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 py-8 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-medium px-4 py-1 rounded-full mb-3">
            Industry Insight
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-2">
            The High Cost of Inconsistent Service
          </h1>
          <p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Understanding the hidden challenges that impact your guest experience and your bottom line.
          </p>
        </div>
      </div>
      <Challenge />
      <section className="py-8 bg-slate-50">
        <div className="container mx-auto px-6">
          <RevenueEstimator />
        </div>
      </section>
    </div>
  );
}