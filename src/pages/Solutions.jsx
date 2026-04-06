import React from 'react';
import ProductShowcase from '../components/ProductShowcase';
import UseCases from '../components/UseCases';
import BrandCarousel from '../components/BrandCarousel';

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-teal-50 via-white to-cyan-50 pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Our Solution
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Transforming service delivery with AI-powered insights, associate rewards, and measurable revenue growth.
          </p>
        </div>
      </div>
      <ProductShowcase />
      <UseCases />
      <BrandCarousel />
    </div>
  );
}