import React from 'react';
import EvidenceChain from '../components/EvidenceChain';

export default function Resources() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Research & Insights
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Resources
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Research-backed insights on how service quality drives revenue, loyalty, and long-term growth in hospitality.
          </p>
        </div>
      </div>
      <EvidenceChain />
    </div>
  );
}