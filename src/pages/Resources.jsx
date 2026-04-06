import React from 'react';
import EvidenceChain from '../components/EvidenceChain';

export default function Resources() {
  return (
    <div className="bg-white">
      {/* Page Hero */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-36 pb-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-4">
            Resources
          </h1>
          <p className="text-lg text-slate-500 mt-4 max-w-2xl mx-auto leading-relaxed">
            Research-backed insights on how service quality drives revenue, loyalty, and long-term growth in hospitality.
          </p>
        </div>
      </div>
      <EvidenceChain />

      {/* Meet Kelly Video */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-sm font-bold text-blue-500 tracking-widest uppercase mb-3">Meet Kelly</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            A Day in the Life at the Front Desk
          </h2>
          <p className="text-slate-500 mb-10 max-w-xl mx-auto">
            See how Suniyo fits naturally into a real hotel's daily operations through Kelly's story.
          </p>
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-[9/16] max-w-sm mx-auto">
            <iframe
              src="https://player.vimeo.com/video/1180360067?h=df0763725f&autoplay=0"
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
    </div>
  );
}