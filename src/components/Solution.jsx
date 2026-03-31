import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Brain, Gift, BarChart3 } from 'lucide-react';

const features = [
  { icon: Mic, title: "Voice Capture & Timely Feedback", description: "Prevent service failures before they become bad reviews." },
  { icon: Brain, title: "AI-Driven Analytics", description: "Track guest name usage, loyalty recognition, upselling opportunities, and issue escalation." },
  { icon: Gift, title: "Rewards for Associates", description: "Keep teams motivated; motivated associates deliver higher satisfaction." },
  { icon: BarChart3, title: "Managerial Dashboards", description: "Give visibility to management so they can see what's working and what's not." }
];

const benefits = [
  "Increase GSS/online review scores → leverage premium pricing",
  "Reduce negative feedback → avoid discounts due to reputation damage",
  "Improve consistency across shifts → make every stay excellent",
  "Empower new hires with actionable feedback → reduce training costs"
];

export default function Solution() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Service + Revenue Growth
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Not just measuring service—improving it, recognizing it, and turning that improvement into real, measurable profit.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-14">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardContent className="p-8 flex gap-5">
                <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-teal-500" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-800 mb-1">{feature.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-xl font-bold text-slate-900 text-center mb-8">How we help you capture revenue upside:</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-5 bg-teal-50 rounded-xl border border-teal-100">
                <div className="w-6 h-6 bg-teal-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-white font-bold text-xs">{index + 1}</span>
                </div>
                <p className="text-sm text-slate-700 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}