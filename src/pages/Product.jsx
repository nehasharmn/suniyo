import React from 'react';
import Challenge from '../components/Challenge';
import Revenue from '../components/Revenue';
import RevenueEstimator from '../components/RevenueEstimator';
import { Link } from 'react-router-dom';

export default function Product() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-50 via-white to-orange-50 pt-32 pb-16">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            The High Cost of Inconsistent Service
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            When your front desk isn't performing at peak level, the impact ripples through guest satisfaction, online reputation, and your revenue.
          </p>
        </div>
      </div>

      {/* Current Challenges */}
      <Challenge />

      {/* Revenue Impact */}
      <Revenue />

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

      {/* Product Teaser */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
            Meet Suniyo
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-4">
            See How We Solve It
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto mb-8 leading-relaxed">
            Suniyo captures every front desk interaction, surfaces real-time insights, and rewards your team — turning inconsistent service into a competitive advantage.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video mb-8">
            <iframe
              src="https://player.vimeo.com/video/1179238131?h=1005580fcf&autoplay=0&muted=0"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              style={{ border: 0 }}
              className="w-full h-full"
            />
          </div>
          <Link
            to="/Solutions"
            className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-full transition-colors duration-200"
          >
            Explore Our Solution →
          </Link>
        </div>
      </section>
    </div>
  );
}
