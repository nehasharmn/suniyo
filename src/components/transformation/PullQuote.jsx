import React from 'react';

export default function PullQuote() {
  return (
    <section className="py-24" style={{ backgroundColor: '#0e172a' }}>
      <div className="container mx-auto px-6 text-center max-w-3xl">
        <blockquote
          className="text-2xl md:text-4xl text-white italic leading-snug mb-8"
          style={{ fontFamily: 'Georgia, serif' }}
        >
          "The front desk is where revenue is won or lost. Most owners only find out which one happened after the fact."
        </blockquote>
        <p className="text-xs font-bold uppercase tracking-widest text-blue-500">Suniyo changes that.</p>
      </div>
    </section>
  );
}