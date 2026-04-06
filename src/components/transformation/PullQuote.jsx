import React from 'react';

export default function PullQuote() {
  return (
    <section className="py-24 bg-amber-50">
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <blockquote
          className="text-2xl md:text-4xl text-slate-800 italic leading-snug mb-8"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          "The front desk is where revenue is won or lost. Most owners only find out which one happened after the fact."
        </blockquote>
        <p className="text-xs font-bold uppercase tracking-widest text-amber-600">Suniyo changes that.</p>
      </div>
    </section>
  );
}