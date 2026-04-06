export default function EvidenceChain() {
  const evidence = [
  {
    number: 1,
    metric: '12%',
    metricLabel: 'productivity uplift',
    title: 'Rewarded staff work harder — and stay',
    details: 'Incentive programs also reduce staff turnover by 17%, preserving service quality and cutting hiring costs.'
  },
  {
    number: 2,
    metric: '+79',
    metricLabel: 'pts above industry avg',
    title: 'Engaged staff push guests above satisfaction threshold',
    details: '81.8% of highly satisfied guests plan to return — scores are a leading indicator of repeat revenue.'
  },
  {
    number: 3,
    metric: '+13.5%',
    metricLabel: 'booking likelihood per +1 star',
    title: 'Better reviews attract more guests at higher rates',
    details: 'Impact reaches corporate negotiated rates and group bookings — not just OTA conversions.'
  },
  {
    number: 4,
    metric: '+1.42%',
    metricLabel: 'RevPAR per reputation point',
    title: 'Every point gained compounds into rate and occupancy',
    details: '+0.89% ADR and +0.54% occupancy move simultaneously. Effect is largest at midscale properties.'
  },
  {
    number: 5,
    metric: '25:1',
    metricLabel: 'average ROI on incentive programs',
    title: 'Every $1 in incentives returns $25 in high-margin upsell revenue',
    details: 'Upsell revenue delivers 5–10× more gross operating profit than an incremental reservation.'
  }];


  const colors = ['teal', 'cyan', 'orange', 'pink', 'purple'];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className="text-[hsl(var(--sidebar-ring))] mb-3 text-sm font-semibold uppercase tracking-widest">RESEARCH-BACKED FRAMEWORK</p>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Sora', sans-serif" }}>
              How front desk scoring<br />
              <span className="text-[hsl(var(--sidebar-ring))]">drives revenue</span>
            </h2>
          </div>

          {/* Evidence Chain */}
          <div className="space-y-6">
            {evidence.map((item, index) => {
              const accentColors = {
                teal: 'bg-teal-100 text-teal-700 border-teal-200',
                cyan: 'bg-cyan-100 text-cyan-700 border-cyan-200',
                orange: 'bg-orange-100 text-orange-700 border-orange-200',
                pink: 'bg-pink-100 text-pink-700 border-pink-200',
                purple: 'bg-purple-100 text-purple-700 border-purple-200'
              };
              const colorKey = colors[index];
              const colorClass = accentColors[colorKey];
              const metricColorClass = {
                teal: 'text-teal-600',
                cyan: 'text-cyan-600',
                orange: 'text-orange-600',
                pink: 'text-pink-600',
                purple: 'text-purple-600'
              }[colorKey];

              return (
                <div key={item.number} className="flex gap-6 items-start">
                  {/* Number badge */}
                  <div className={`flex-shrink-0 w-12 h-12 rounded-full ${colorClass} flex items-center justify-center font-bold text-lg border`}>
                    {item.number}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pt-1">
                    <div className="flex items-baseline gap-3 mb-2">
                      <span className={`text-3xl md:text-4xl font-bold ${metricColorClass}`}>{item.metric}</span>
                      <span className="text-sm text-slate-500">{item.metricLabel}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{item.details}</p>
                  </div>
                </div>);

            })}
          </div>

          {/* Footer credit */}
          <div className="mt-12 text-center text-xs text-slate-500">
            <p>Sources: Cornell University CHR, J.D. Power, University of Warwick, Gallup, Frontline Performance Group</p>
          </div>
        </div>
      </div>
    </section>);

}