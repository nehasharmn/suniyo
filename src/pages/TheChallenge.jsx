import React from 'react';
import Challenge from '../components/Challenge';
import Revenue from '../components/Revenue';
import RevenueEstimator from '../components/RevenueEstimator';

export default function TheChallenge() {
  return (
    <div className="bg-white">
      {/* Hero with Context */}
      <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Industry Insight
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The High Cost of Inconsistent Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            When your front desk isn't performing at peak level, the impact ripples through guest satisfaction, online reputation, and your revenue.
          </p>
        </div>
      </div>

      {/* Revenue Impact */}
      <Revenue />

      {/* Detailed Challenge Breakdown */}
      <Challenge />

      {/* Revenue Estimator */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-3">Calculate Your Revenue Loss</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">See how much you could be missing out on with inconsistent front desk performance.</p>
          </div>
          <RevenueEstimator />
        </div>
      </section>
    </div>
  );
}