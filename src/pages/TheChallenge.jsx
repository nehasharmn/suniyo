import React from 'react';
import Challenge from '../components/Challenge';
import Revenue from '../components/Revenue';
import RevenueEstimator from '../components/RevenueEstimator';

export default function TheChallenge() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Industry Insight
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            The High Cost of Inconsistent Service
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Understanding the hidden challenges that impact your guest experience and your bottom line.
          </p>
        </div>
      </div>
      <Challenge />
      <Revenue />
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-6">
          <RevenueEstimator />
        </div>
      </section>
    </div>
  );
}