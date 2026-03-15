import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, MessageSquareX, Eye, TrendingDown } from 'lucide-react';

const challenges = [
  {
    icon: Clock,
    title: "24/7 Operations, Inconsistent Service",
    description: "Different staff across shifts with little consistent feedback"
  },
  {
    icon: MessageSquareX,
    title: "Reactive, Not Proactive",
    description: "Relying on guest reviews & complaints after damage is done"
  },
  {
    icon: Eye,
    title: "Limited Visibility",
    description: "Managers can't observe every service touchpoint every hour"
  },
  {
    icon: TrendingDown,
    title: "Unrecognized Potential",
    description: "Associate talent goes unseen, leading to disengagement & turnover"
  }
];

export default function Challenge() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            The Challenge We're Solving
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            The front desk is the first impression—and often the place where guest challenges surface. Yet most hotels:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {challenges.map((challenge, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-red-500/10 rounded-2xl flex items-center justify-center mb-6 mx-auto">
                  <challenge.icon className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 text-center">
                  {challenge.title}
                </h3>
                <p className="text-gray-500 text-center leading-relaxed">
                  {challenge.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Evocative Questions */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-12 text-center overflow-hidden border border-white/10">
             <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1780&q=80" alt="Hotel front desk bell" className="absolute inset-0 w-full h-full object-cover" />
             <div className="absolute inset-0 bg-gray-900/70"></div>
            <div className="relative">
              <blockquote className="text-xl md:text-2xl text-white italic mb-8 leading-relaxed">
                "Can you be at the front desk 24 hours a day, 365 days a year to closely observe how your associates are delivering service?"
              </blockquote>
              <blockquote className="text-xl md:text-2xl text-yellow-400 italic leading-relaxed">
                "Do you know the challenges your guests face every day that are easily controllable?"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}