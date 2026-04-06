import React, { useState } from 'react';
import { Check } from 'lucide-react';

const tabs = [
  {
    label: 'Owners & Executives',
    headline: 'You invested in this property. Now you can actually protect that investment.',
    body: "Most owners are flying blind between quarterly reports and star ratings. By the time a pattern shows up in your data, you've already lost the revenue and the guests. Suniyo gives you a continuous, honest signal from the floor. Not filtered through a manager's summary. Not delayed by the review cycle. The actual truth about what guests experience when you're not there.",
    outcomes: [
      'Turn satisfaction score improvements into real pricing power. A 1-point increase can lift RevPAR by up to 1.42%.',
      'Protect your brand reputation before a single negative review goes live.',
      'Scale consistent service standards across multiple properties without being on-site.',
      'Reduce high-cost associate turnover with recognition and structured feedback loops.',
    ],
  },
  {
    label: 'General Managers',
    headline: "You can't be everywhere. Now you don't have to be.",
    body: "You're managing multiple shifts, fielding owner calls, and trying to build a team, all while having no real visibility into what happened at 2am. Suniyo gives you the information you need to coach with confidence, address problems while they're still fixable, and show up to every shift briefing with real data instead of assumptions. You stop reacting. You start leading.",
    outcomes: [
      'Start every morning with a clear overnight summary. No more black-box night shifts.',
      'Coach staff with specific, timestamped examples instead of vague impressions.',
      'Catch guest complaints before they escalate to chargebacks or negative reviews.',
      'Spot upsell training gaps early and address them in your next team briefing.',
    ],
  },
  {
    label: 'Associates',
    headline: 'Great work that used to go unnoticed now gets recognized.',
    body: "Most associates never get meaningful feedback. Just occasional complaints and annual reviews that feel disconnected from day-to-day reality. Suniyo changes that dynamic entirely. When you handle a difficult guest with skill, it's seen. When you nail an upsell, it's recorded. The path to growth stops being a mystery and starts being something you can actually work toward.",
    outcomes: [
      'Get recognized and rewarded for excellent service, not just corrected for mistakes.',
      'Receive clear, specific feedback so you know exactly what to work on and why.',
      'Build a documented track record of performance that supports your career growth.',
      'Feel like a valued part of the guest experience, not just a face behind a counter.',
    ],
  },
];

export default function StakeholderTabs() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <section id="who-it-helps" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-xs font-bold uppercase tracking-widest text-amber-500 mb-3">Who It Helps</p>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900" style={{ fontFamily: 'Sora, sans-serif' }}>
            Built for every role
          </h2>
        </div>

        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((t, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                active === i
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-white text-slate-600 border border-slate-200 hover:border-slate-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 bg-white rounded-2xl p-10 shadow-sm border border-slate-100">
          <div>
            <h3 className="text-2xl text-center font-bold text-slate-900 mb-5 leading-snug" style={{ fontFamily: 'Sora, sans-serif' }}>
              {tab.headline}
            </h3>
            <p className="text-slate-500 leading-relaxed text-sm">{tab.body}</p>
          </div>
          <div>
            <ul className="space-y-4">
              {tab.outcomes.map((outcome, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-amber-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-amber-600" />
                  </div>
                  <p className="text-slate-700 text-sm leading-relaxed">{outcome}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}