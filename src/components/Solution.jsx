import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Brain, Gift, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Mic,
    title: "Voice Capture & Timely Feedback",
    description: "Prevent service failures before they become bad reviews",
  },
  {
    icon: Brain,
    title: "AI-Driven Analytics",
    description: "Track guest name usage, loyalty recognition, upselling opportunities, and guest issue escalation",
  },
  {
    icon: Gift,
    title: "Rewards for Associates",
    description: "Keep teams motivated; motivated associates deliver higher satisfaction",
  },
  {
    icon: BarChart3,
    title: "Managerial Dashboards",
    description: "Give visibility to management so they can see what's working and what's not",
  }
];

const benefits = [
  "Increase GSS/online review scores → leverage premium pricing",
  "Reduce negative feedback → avoid discounts due to reputation damage",
  "Improve consistency across shifts → make every stay excellent",
  "Empower new hires with actionable feedback → reduce training costs"
];

export default function Solution() {
  return (
    <section id="solution" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Solution: ARS<sup className="text-xl md:text-2xl text-white">360</sup> + Revenue Growth
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            ARS<sup className="text-xs text-slate-300">360</sup> isn't just about measuring service—it's about improving it, recognizing it, and turning that improvement into real, measurable profit.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className={`w-16 h-16 bg-teal-400/10 rounded-2xl flex items-center justify-center mb-6`}>
                  <feature.icon className="w-8 h-8 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Benefits */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 text-center mb-12">
            How ARS360 helps you capture revenue upside:
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-2xl border border-gray-200 shadow-sm">
                <div className="w-6 h-6 bg-teal-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-gray-900 font-bold text-sm">{index + 1}</span>
                </div>
                <p className="text-gray-600 leading-relaxed">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}