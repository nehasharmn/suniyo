import React from 'react';

const withoutPoints = [
  "You find out about service problems weeks later, buried in a TripAdvisor review.",
  "Coaching conversations are based on gut feel, not evidence. Associates don't know what to improve.",
  "Upsell opportunities disappear silently. No one knows how much revenue was left on the table.",
  "Great associates go unrecognized. Frustration builds. Turnover costs compound quietly.",
  "Night shift operates in a black box. Anything can happen and often does.",
];

const withPoints = [
  "Managers start the morning with a clear digest of what happened overnight, before the next shift begins.",
  "Coaching is specific, fair, and grounded in real interactions. Associates trust the feedback.",
  "Every missed upsell is flagged and quantified so you can close the gap with targeted training.",
  "Top performers are recognized by name. Engagement rises. Turnover drops.",
  "Every shift, day, evening, and overnight, operates under the same standard of visibility.",
];

export default function TransformationSection() {
  return (
    <section id="transformation" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">The Transformation</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Before and After
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Without Suniyo */}
          <div className="pr-0 md:pr-12 pb-12 md:pb-0">
            <h3 className="text-xl font-bold text-slate-900 mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
              Without Suniyo
            </h3>
            <ul className="space-y-5">
              {withoutPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                  <p className="text-slate-600 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* With Suniyo */}
          <div className="pl-0 md:pl-12 pt-12 md:pt-0 bg-slate-900 md:bg-transparent rounded-2xl md:rounded-none p-8 md:p-0">
            <h3 className="text-xl font-bold text-white md:text-slate-900 mb-8" style={{ fontFamily: 'Sora, sans-serif' }}>
              With Suniyo
            </h3>
            <ul className="space-y-5">
              {withPoints.map((point, i) => (
                <li key={i} className="flex items-start gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 flex-shrink-0 mt-1.5" />
                  <p className="text-slate-300 md:text-slate-600 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}