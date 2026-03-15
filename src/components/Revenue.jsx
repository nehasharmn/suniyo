import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, DollarSign, Star, Users } from 'lucide-react';

const studies = [
  {
    icon: TrendingUp,
    title: "RevPAR Gains with Better Review Scores",
    finding: "A one-point increase in review score can boost RevPAR by up to 1.42%",
    source: "Cornell-based study via Atomize",
    color: "text-green-400 bg-green-500/10"
  },
  {
    icon: DollarSign,
    title: "Pricing Power Without Losing Occupancy",
    finding: "Raising online reputation by one point allows hotels to increase room rates by ≈11.2%",
    source: "Cornell study via eHotelier",
    color: "text-blue-400 bg-blue-500/10"
  },
  {
    icon: Star,
    title: "Revenue Boost from Online Reputation",
    finding: "Higher review scores correlate with improved ADR and occupancy rates",
    source: "Switch Hotel Solutions & Hospitality Net",
    color: "text-yellow-400 bg-yellow-500/10"
  },
  {
    icon: Users,
    title: "Strategic Value of Guest Satisfaction",
    finding: "Hotels using GSS as operational tools outperform peers in revenue growth",
    source: "Customer Alliance & Hospitality Net",
    color: "text-purple-400 bg-purple-500/10"
  }
];

export default function Revenue() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Guest Satisfaction = Revenue
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Recent data shows the financial payoff of high guest satisfaction and strong service:
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {studies.map((study, index) => (
            <Card key={index} className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${study.color} rounded-xl flex items-center justify-center`}>
                    <study.icon className="w-6 h-6" />
                  </div>
                  <CardTitle className="text-lg text-gray-900 flex-1">
                    {study.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-gray-700 mb-4 font-medium leading-relaxed">
                  {study.finding}
                </p>
                <p className="text-sm text-gray-400 italic">
                  Source: {study.source}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Revenue Impact Quote with Background Image */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-12 text-center overflow-hidden border border-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" 
              alt="Happy hotel guests at reception" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/70"></div>
            <div className="relative z-10">
              <blockquote className="text-2xl md:text-3xl font-bold text-white mb-6 leading-relaxed">
                "How much more revenue can you earn if your guest satisfaction goes up? We know—just ask."
              </blockquote>
              <p className="text-lg text-gray-200">
                With ARS360, that question isn't theoretical. Hotels see RevPAR increases, ADR improvements, and more direct bookings—all tied to improvements in guest satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}