import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';

const pilotBenefits = [
  { icon: Star, title: "Higher GSS, ADR, RevPAR", description: "Evidence-backed improvements from peer studies.", color: "bg-amber-50 text-amber-500" },
  { icon: CheckCircle, title: "Fewer Negative Reviews", description: "Proactive issue resolution and chargeback reduction.", color: "bg-green-50 text-green-500" },
  { icon: Users, title: "Engaged Associates", description: "Staff who feel seen, heard, and rewarded for excellence.", color: "bg-blue-50 text-blue-500" }
];

export default function PilotProgram({ onScrollToContact }) {
  return (
    <section className="py-24 bg-gradient-to-br from-teal-500 to-cyan-600">
      <div className="container mx-auto px-6 text-white">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 bg-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Limited Availability
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-5 tracking-tight">
            Join the Pilot Program
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto">
          {pilotBenefits.map((benefit, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className={`w-14 h-14 ${benefit.color} rounded-2xl flex items-center justify-center mb-5 mx-auto`}>
                  <benefit.icon className="w-7 h-7" />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            onClick={onScrollToContact}
            className="px-10 py-6 text-base font-semibold bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-lg border-0 transition-all duration-300 hover:scale-105"
          >
            Request Pilot Access
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-3xl mx-auto mt-10">
            {["Raise your rating, raise your revenue", "One point up = thousands more per month", "Coach today, profit tomorrow"].map((copy, index) => (
              <div key={index} className="text-sm text-teal-100 italic bg-white/10 rounded-xl px-4 py-3 border border-white/20">
                "{copy}"
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}