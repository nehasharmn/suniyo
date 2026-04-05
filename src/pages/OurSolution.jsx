import React from 'react';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import BrandCarousel from '../components/BrandCarousel';
import EvidenceChain from '../components/EvidenceChain';

export default function OurSolution() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
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