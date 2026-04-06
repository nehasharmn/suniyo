import React from 'react';

const levers = [
  {
    num: '01',
    title: 'Better scores unlock premium pricing',
    body: 'Higher guest satisfaction scores translate directly into review score improvements. Cornell research shows a one-point increase can lift RevPAR by up to 1.42%, letting you price up instead of discounting to compete.',
  },
  {
    num: '02',
    title: 'Fewer complaints mean fewer chargebacks',
    body: 'Catching a service failure the morning after it happens, not three weeks later in a review, gives you the window to recover the guest. Resolved complaints rarely become chargebacks or public one-star posts.',
  },
  {
    num: '03',
    title: 'Captured upsells add direct revenue',
    body: 'Every missed upgrade offer is a fixed dollar amount left on the table. Suniyo quantifies that gap shift by shift, giving you a concrete training target and a measurable before/after when it improves.',
  },
  {
    num: '04',
    title: 'Lower turnover cuts your biggest hidden cost',
    body: 'Replacing a front desk associate costs an average of $3,000 to $5,000 in recruiting and retraining. Recognition-driven retention is one of the fastest-payback investments a select-service hotel can make.',
  },
];

export default function FourLevers() {
  return (
    <section id="revenue-outcomes" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Revenue Outcomes</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Four Levers
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
          {levers.map((lever) => (
            <div key={lever.num} className="p-8 border border-slate-100 rounded-2xl hover:shadow-md transition-shadow duration-300">
              <p className="text-4xl font-black text-slate-100 mb-4" style={{ fontFamily: 'Sora, sans-serif' }}>{lever.num}</p>
              <h3 className="text-lg font-bold text-slate-900 mb-3" style={{ fontFamily: 'Sora, sans-serif' }}>{lever.title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{lever.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}