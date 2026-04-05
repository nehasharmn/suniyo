import React from 'react';
import Challenge from '../components/Challenge';
import Revenue from '../components/Revenue';
import RevenueEstimator from '../components/RevenueEstimator';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import BrandCarousel from '../components/BrandCarousel';
import EvidenceChain from '../components/EvidenceChain';

export default function Product() {
  return (
    <div className="bg-white">
      {/* The Challenge Section */}
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

      {/* Our Solution Section */}
      <div className="bg-gradient-to-br from-primary/5 via-white to-teal-50 pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            How It Works
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Solution
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Transforming service delivery with AI-powered insights, associate rewards, and measurable revenue growth.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-4">
            <h2 className="text-xl font-extrabold text-slate-900 tracking-tight mb-1">See It in Action</h2>
            <p className="text-slate-500 text-sm">Watch how Suniyo transforms front desk service into measurable results.</p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1179238131?h=1005580fcf&autoplay=1&muted=0"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              style={{ border: 0 }}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      <Solution />
      <EvidenceChain />
      <HowItWorks />
      <UseCases />
      <BrandCarousel />
    </div>
  );
}