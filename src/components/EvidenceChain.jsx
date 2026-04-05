export default function EvidenceChain() {
  const evidence = [
    {
      number: 1,
      title: 'Incentives Lift Engagement',
      metric: '12%',
      metricLabel: 'productivity uplift',
      description: 'Rewarded staff work harder — and stay',
      details: 'Incentive programs also reduce staff turnover by 17%, preserving service quality and cutting hiring costs.'
    },
    {
      number: 2,
      title: 'Engagement Drives Satisfaction Scores',
      metric: '+79',
      metricLabel: 'pts above industry avg (J.D. Power)',
      description: 'Engaged staff push guests above the satisfaction threshold',
      details: '81.8% of highly satisfied guests plan to return — scores are a leading indicator of repeat revenue.'
    },
    {
      number: 3,
      title: 'Satisfaction Lifts Online Reputation',
      metric: '+13.5%',
      metricLabel: 'booking likelihood per +1 star',
      description: 'Better reviews attract more guests at higher rates',
      details: 'Impact reaches corporate negotiated rates and group bookings — not just OTA conversions.'
    },
    {
      number: 4,
      title: 'Reputation Directly Moves RevPAR',
      metric: '+1.42%',
      metricLabel: 'RevPAR per reputation point',
      description: 'Every point gained compounds into rate and occupancy',
      details: '+0.89% ADR and +0.54% occupancy move simultaneously. Effect is largest at midscale properties.'
    },
    {
      number: 5,
      title: 'Front Desk Upsells Add Direct Margin',
      metric: '25:1',
      metricLabel: 'average ROI on incentive programs',
      description: 'Every $1 in incentives returns $25 in high-margin upsell revenue',
      details: 'Upsell revenue delivers 5–10× more gross operating profit than an incremental reservation.'
    }
  ];

  const colors = ['bg-teal-500', 'bg-blue-500', 'bg-orange-400', 'bg-pink-500', 'bg-purple-500'];

  return (
    <section className="py-20 bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-xs font-semibold text-teal-400 tracking-widest uppercase mb-3">Research-Backed Framework</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">How front desk scoring<br /><span className="text-teal-400">drives revenue</span></h2>
          </div>

          {/* Evidence Chain */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-500 via-blue-500 to-purple-500"></div>

            {/* Evidence items */}
            <div className="space-y-8">
              {evidence.map((item, index) => (
                <div key={item.number} className="relative pl-24">
                  {/* Numbered circle */}
                  <div className={`absolute -left-3 top-0 w-12 h-12 rounded-full ${colors[index]} flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                    {item.number}
                  </div>

                  {/* Content card */}
                  <div className="bg-slate-800 border border-slate-700 rounded-lg p-6 hover:border-teal-500/50 transition-colors">
                    <p className="text-xs font-semibold text-teal-400 tracking-widest uppercase mb-2">{item.title}</p>
                    
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-3xl md:text-4xl font-bold text-teal-400">{item.metric}</span>
                      <span className="text-xs text-slate-400">{item.metricLabel}</span>
                    </div>

                    <h3 className="text-lg font-semibold text-white mb-2">{item.description}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer credit */}
          <div className="mt-12 text-center text-xs text-slate-500">
            <p>Sources: Cornell University CHR, J.D. Power, University of Warwick, Gallup, Frontline Performance Group</p>
          </div>
        </div>
      </div>
    </section>
  );
}