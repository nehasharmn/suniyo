import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Search, Gift, TrendingUp } from 'lucide-react';

const steps = [
  { icon: Mic, title: "Voice Capture", description: "Front desk interactions are recorded and analyzed, 24/7.", color: "bg-blue-50 text-blue-500" },
  { icon: Search, title: "Voice Analysis", description: "AI evaluates greeting, loyalty recognition, upselling, clarity, and issue handling.", color: "bg-purple-50 text-purple-500" },
  { icon: Gift, title: "Feedback & Rewards", description: "Associates receive shift-end summaries and reward points.", color: "bg-emerald-50 text-emerald-500" },
  { icon: TrendingUp, title: "Manager Insights", description: "Dashboards show trends so managers can act fast on what matters.", color: "bg-amber-50 text-amber-500" }
];

export default function HowItWorks() {
  return (
    <section className="py-10 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">How It Works</h2>
          <p className="text-lg text-slate-500 leading-relaxed">A seamless four-step process that transforms service delivery.</p>
        </div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-4 gap-4 mb-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-slate-200 z-0" />
              )}
              <Card className="relative z-10 bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-6 text-center">
                  <div className={`w-14 h-14 ${step.color} rounded-2xl flex items-center justify-center mb-4 mx-auto`}>
                    <step.icon className="w-7 h-7" />
                  </div>
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">Step {index + 1}</div>
                  <h3 className="text-sm font-bold text-slate-800 mb-2">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm">
          <blockquote className="text-lg md:text-xl text-slate-600 italic leading-relaxed">
            "Would you rather know today what exactly happened at your property—or wait until bad reviews appear days later?"
          </blockquote>
        </div>
      </div>
    </section>
  );
}