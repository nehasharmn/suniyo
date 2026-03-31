import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Star, Users } from 'lucide-react';

const studies = [
  { icon: TrendingUp, title: "RevPAR Gains with Better Review Scores", finding: "A one-point increase in review score can boost RevPAR by up to 1.42%", source: "Cornell-based study via Atomize", iconColor: "bg-green-50 text-green-500" },
  { icon: DollarSign, title: "Pricing Power Without Losing Occupancy", finding: "Raising online reputation by one point allows hotels to increase room rates by ~11.2%", source: "Cornell study via eHotelier", iconColor: "bg-blue-50 text-blue-500" },
  { icon: Star, title: "Revenue Boost from Online Reputation", finding: "Higher review scores correlate with improved ADR and occupancy rates", source: "Switch Hotel Solutions & Hospitality Net", iconColor: "bg-amber-50 text-amber-500" },
  { icon: Users, title: "Strategic Value of Guest Satisfaction", finding: "Hotels using GSS as operational tools outperform peers in revenue growth", source: "Customer Alliance & Hospitality Net", iconColor: "bg-purple-50 text-purple-500" }
];

export default function Revenue() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Why Guest Satisfaction = Revenue
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Recent data shows the financial payoff of high guest satisfaction and strong service:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-12 max-w-4xl mx-auto">
          {studies.map((study, index) => (
            <Card key={index} className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <CardHeader className="pb-3">
                <div className="flex items-center gap-4">
                  <div className={`w-11 h-11 ${study.iconColor} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <study.icon className="w-5 h-5" />
                  </div>
                  <CardTitle className="text-base text-slate-800 flex-1 leading-snug">{study.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0 px-6 pb-6">
                <p className="text-slate-700 mb-2 font-medium text-sm leading-relaxed">{study.finding}</p>
                <p className="text-xs text-slate-400 italic">Source: {study.source}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-10 text-center border border-slate-100 shadow-sm">
          <blockquote className="text-xl md:text-2xl font-bold text-slate-800 mb-4 leading-relaxed">
            "How much more revenue can you earn if your guest satisfaction goes up? We know — just ask."
          </blockquote>
          <p className="text-slate-500 text-sm leading-relaxed">
            Hotels see RevPAR increases, ADR improvements, and more direct bookings — all tied to improvements in guest satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}