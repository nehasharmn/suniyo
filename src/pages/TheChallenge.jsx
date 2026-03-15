import React from 'react';
import Challenge from '../components/Challenge';
import Revenue from '../components/Revenue';
import RevenueEstimator from '../components/RevenueEstimator';

export default function TheChallenge() {
  return (
    <div className="bg-gray-900 text-white">
      <div className="relative py-32 text-center overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1596700238634-15938c23454b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">The High Cost of Inconsistent Service</h1>
          <p className="text-xl text-slate-300 mt-6 max-w-3xl mx-auto">Understanding the hidden challenges that impact your guest experience and your bottom line.</p>
        </div>
      </div>
      <Challenge />
      <Revenue />
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <RevenueEstimator />
        </div>
      </section>
    </div>
  );
}