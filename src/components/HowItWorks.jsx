import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Mic, Search, Gift, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: Mic,
    title: "Voice Capture",
    description: "ARS360 records front desk interactions, 24/7",
    color: "from-blue-500 to-indigo-600"
  },
  {
    icon: Search,
    title: "Voice Analysis",
    description: "AI evaluates key service moments: greeting, loyalty recognition, upselling, clarity, issue handling",
    color: "from-purple-500 to-pink-600"
  },
  {
    icon: Gift,
    title: "Immediate Feedback & Rewards",
    description: "Associates receive shift-end summaries + reward points",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: TrendingUp,
    title: "Manager Insights & Alerts",
    description: "Dashboards show trends and signal areas for improvement so managers can act fast",
    color: "from-amber-500 to-orange-600"
  }
];

export default function HowItWorks() {
  return (
    <section className="py-20"> {/* Removed bg-gray-900/70 for unified background */}
      <div className="container mx-auto px-6">
        {/* Header Block with distinct background for visual depth */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            A seamless, four-step process that transforms service delivery
          </p>
        </div>

        {/* Process Flow */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gray-200 z-0" />
                )}
                
                <Card className="relative z-10 border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-teal-400/10 rounded-full flex items-center justify-center mb-6 mx-auto"> {/* Changed to teal-400 */}
                      <step.icon className="w-8 h-8 text-teal-400" /> {/* Changed to teal-400 */}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* Evocative Question */}
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl p-12 text-center overflow-hidden border border-gray-200">
             <img src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Happy guest in a hotel" className="absolute inset-0 w-full h-full object-cover grayscale" />
             <div className="absolute inset-0 bg-black/60"></div>
            <div className="relative">
              <blockquote className="text-xl md:text-2xl text-white italic leading-relaxed">
                "Would you rather know today what exactly happened at your property—or wait until bad reviews appear days later?"
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}