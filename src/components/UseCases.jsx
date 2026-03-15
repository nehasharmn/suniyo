
import React from 'react';
import { Card, CardTitle } from '@/components/ui/card';
import { Building2, Users, UserCheck } from 'lucide-react';

const useCases = [
  {
    icon: Building2,
    title: "Owners / Executives",
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
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Value for Every Stakeholder
          </h2>
          <p className="text-xl text-slate-300 leading-relaxed">
            ARS<sup className="text-xs text-slate-300">360</sup> creates wins across your entire organization
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {useCases.map((useCase, index) => (
            <Card key={index} className="border-white/10 bg-white/5 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col group">
                <div className="relative">
                    <img 
                      src={useCase.image} 
                      alt={useCase.title} 
                      className="h-80 w-full object-cover transition-transform duration-500 grayscale"
                      style={{
                        objectPosition: useCase.title === 'Associates' ? 'center 20%' : 'center top'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>
                </div>
              <div className="p-6 flex flex-col flex-grow">
                  <CardTitle className="text-xl text-white flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-teal-400/10">
                        <useCase.icon className="w-6 h-6 text-teal-400" />
                    </div>
                    {useCase.title}
                  </CardTitle>
                  <div className="flex-grow">
                    <ul className="space-y-4">
                      {useCase.benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-teal-400 rounded-full flex-shrink-0 mt-2" />
                          <p className="text-slate-400 leading-relaxed">{benefit}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Evocative Question with Background */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-12 text-center overflow-hidden border border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
              alt="Hotel staff working together" 
              className="absolute inset-0 w-full h-full object-cover grayscale"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
                "Customers earn reward points, managers get paid well, owners make profits. What does an associate get?"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
