import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MessageSquareX, Eye, TrendingDown } from 'lucide-react';

const challenges = [
  { icon: Clock, title: "24/7 Operations, Inconsistent Service", description: "Different staff across shifts with little consistent feedback or coaching." },
  { icon: MessageSquareX, title: "Reactive, Not Proactive", description: "Relying on guest reviews & complaints after the damage is already done." },
  { icon: Eye, title: "Limited Visibility", description: "Managers can't observe every service touchpoint every hour of every day." },
  { icon: TrendingDown, title: "Unrecognized Potential", description: "Associate talent goes unseen, leading to disengagement and high turnover." }
];

export default function Challenge() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 mb-2 tracking-tight">
            The Challenge We're Solving
          </h2>
          <p className="text-sm text-slate-500 leading-relaxed">
            The front desk is the first impression — and often where guest challenges surface. Yet most hotels operate blind.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-0.5">
              <CardContent className="p-4">
                <div className="w-9 h-9 bg-rose-50 rounded-xl flex items-center justify-center mb-3">
                  <challenge.icon className="w-4 h-4 text-rose-500" />
                </div>
                <h3 className="text-sm font-bold text-slate-800 mb-1">{challenge.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{challenge.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="max-w-3xl mx-auto bg-slate-50 rounded-xl p-6 text-center border border-slate-100">
          <blockquote className="text-sm text-slate-700 italic mb-3 leading-relaxed">
            "Can you be at the front desk 24 hours a day, 365 days a year to closely observe how your associates deliver service?"
          </blockquote>
          <blockquote className="text-sm text-teal-600 italic font-medium leading-relaxed">
            "Do you know the challenges your guests face every day that are easily controllable?"
          </blockquote>
        </div>
      </div>
    </section>
  );
}