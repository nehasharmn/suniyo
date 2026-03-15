import React from 'react';
import Solution from '../components/Solution';
import HowItWorks from '../components/HowItWorks';
import UseCases from '../components/UseCases';
import BrandCarousel from '../components/BrandCarousel';

export default function OurSolution() {
  return (
    <div className="bg-gray-900 text-white">
       <div className="relative py-32 text-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Smiling hotel receptionist helping guests"
          className="absolute inset-0 w-full h-full object-cover grayscale"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">The ARS<sup className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400 relative -top-8">360</sup> Solution</h1>
          <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">Transforming service delivery with AI-powered insights, associate rewards, and measurable revenue growth.</p>
        </div>
      </div>
      <Solution />
      <HowItWorks />
      <UseCases />
      <BrandCarousel />
    </div>
  );
}