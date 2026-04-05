import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Building2, Users, UserCheck } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: "Owners / Executives",
    color: "bg-blue-50 text-blue-500",
    benefits: [
      "See measurable ROI from data-driven service improvements.",
      "Strengthen brand reputation for more repeat and direct bookings.",
      "Scale excellence consistently across multiple properties."
    ],
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/2eab6e511_image.png"
  },
  {
    icon: Users,
    title: "Managers",
    color: "bg-purple-50 text-purple-500",
    benefits: [
      "Effective coaching tools to pinpoint and develop staff potential.",
      "Proactively reduce chargebacks and guest complaints.",
      "Act on issues immediately instead of reacting to negative reviews."
    ],
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/9189f78b5_image.png"
  },
  {
    icon: UserCheck,
    title: "Associates",
    color: "bg-teal-50 text-teal-500",
    benefits: [
      "Get recognized and rewarded for delivering excellent service.",
      "Receive clear, actionable guidance for professional growth.",
      "Feel empowered and valued as a key part of the guest experience."
    ],
    image: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/ac0ac62a5_image.png"
  }
];

export default function UseCases() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Value for Every Stakeholder</h2>
          <p className="text-lg text-slate-500 leading-relaxed">Our platform creates wins across your entire organization.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-14">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
              <div className="h-52 overflow-hidden">
                <img
                  src={useCase.image}
                  alt={useCase.title}
                  className="w-full h-full object-cover grayscale"
                  style={{ objectPosition: useCase.title === 'Associates' ? 'center 20%' : 'center top' }}
                />
              </div>
              <CardContent className="p-7">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 ${useCase.color} rounded-xl flex items-center justify-center`}>
                    <useCase.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{useCase.title}</h3>
                </div>
                <ul className="space-y-3">
                  {useCase.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-teal-400 rounded-full flex-shrink-0 mt-2" />
                      <p className="text-sm text-slate-500 leading-relaxed">{benefit}</p>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto bg-slate-50 rounded-2xl p-10 text-center border border-slate-100">
          <blockquote className="text-sm md:text-base font-bold text-slate-800 leading-relaxed">
            Where Service Gets Rewarded.
          </blockquote>
        </div>
      </div>
    </section>
  );
}