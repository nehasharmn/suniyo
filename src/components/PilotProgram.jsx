
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Star, Users } from 'lucide-react';

const pilotBenefits = [
  {
    icon: Star,
    title: "Higher GSS, ADR, RevPAR",
    description: "Evidence-backed improvements from peer studies"
  },
  {
    icon: CheckCircle,
    title: "Fewer Negative Reviews",
    description: "Proactive issue resolution and chargeback reduction"
  },
  {
    icon: Users,
    title: "Engaged Associates",
    description: "Staff who feel seen, heard, and rewarded for excellence"
  }
];

export default function PilotProgram({ onScrollToContact }) {
  return (
    <section className="relative py-32 overflow-hidden">
      <img 
        src="https://images.unsplash.com/photo-1551836022-deb4988cc6c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
        alt="Professional hotel staff at front desk" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>
      
      <div className="relative container mx-auto px-6 text-white">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400 mb-6">
            Join the ARS<sup className="text-xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">360</sup> Pilot Program
          </h2>
          <p className="text-xl text-gray-200 leading-relaxed mb-8">
            ARS<sup className="text-xs text-gray-200">360</sup> is currently in pilot phase. Be among the first to unlock:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {pilotBenefits.map((benefit, index) => (
            <Card key={index} className="bg-white/10 border-white/20 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 flex items-center justify-center mb-6 mx-auto bg-teal-400/10 rounded-2xl">
                  <benefit.icon className="w-10 h-10 text-teal-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              onClick={onScrollToContact}
              className="px-8 py-6 text-lg font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-0"
            >
              Request Pilot Access
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            {[
              "Raise your rating, raise your revenue",
              "One point up = thousands more per month",
              "Coach today, profit tomorrow"
            ].map((copy, index) => (
              <div key={index} className="text-sm text-cyan-300 italic font-light bg-black/30 backdrop-blur-sm rounded-lg p-3 border border-white/10">
                "{copy}"
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
