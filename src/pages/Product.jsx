import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';
import { ArrowRight, Mic, BarChart2, Star, Eye, TrendingUp, Users, AlertTriangle, Award, CheckCircle } from 'lucide-react';
import { sendDemoRequest } from '@/functions/sendDemoRequest';
import RevenueEstimator from '../components/RevenueEstimator';
import ProductShowcase from '../components/ProductShowcase';

const steps = [
  {
    number: '01',
    title: 'Always Listening',
    description: 'A compact device captures every guest interaction 24/7 across all shifts. no manual input, no gaps, no blind spots.',
    icon: Mic,
  },
  {
    number: '02',
    title: 'Next-Day Insights',
    description: 'Managers receive a daily summary of missed upsells, service gaps, and standout moments without watching hours of footage.',
    icon: BarChart2,
  },
  {
    number: '03',
    title: 'Coach and Reward',
    description: 'Use real data to coach underperformers, recognize top associates, and reduce turnover with evidence-backed decisions.',
    icon: Star,
  },
];

const problems = [
  {
    title: 'Inconsistent service across shifts',
    description: 'The morning crew performs differently than the night shift. Without visibility into every interaction, inconsistency becomes the norm and guests notice before you do.',
  },
  {
    title: "You're always reacting, never preventing",
    description: 'By the time a bad review surfaces, the damage is done. Most hotel owners learn about service failures days or weeks after they happen, when it\'s too late to act.',
  },
  {
    title: 'Managers have no visibility at scale',
    description: 'A manager can observe one associate at a time. With multiple shifts, multiple associates, and hundreds of interactions daily, the math simply doesn\'t work.',
  },
  {
    title: 'Hidden talent and high turnover',
    description: 'Your best associates go unrecognized because there\'s no system to surface their performance. Without recognition, they leave and you start over.',
  },
];

const features = [
  {
    title: '24/7 Passive Capture',
    description: 'The device listens continuously across every shift with zero effort from your team. No buttons to press, no logins required.',
    icon: Mic,
  },
  {
    title: 'Daily Manager Reports',
    description: 'Every morning, managers receive a concise digest of what happened at the front desk the day before.',
    icon: BarChart2,
  },
  {
    title: 'Upsell Opportunity Tracking',
    description: 'Identify exactly which interactions missed revenue opportunities and coach associates on how to capture them next time.',
    icon: TrendingUp,
  },
  {
    title: 'Associate-Level Coaching',
    description: 'Performance data is tied to individual associates, so coaching conversations are grounded in real examples not guesswork.',
    icon: Users,
  },
  {
    title: 'Controllable Problem Detection',
    description: 'Surface recurring service gaps before they become negative reviews. Catch patterns early and fix them at the source.',
    icon: AlertTriangle,
  },
  {
    title: 'Satisfaction Score Correlation',
    description: 'See how front desk performance connects to your guest satisfaction scores and understand which behaviors move the needle.',
    icon: CheckCircle,
  },
];

export default function Product() {
  const [demoEmail, setDemoEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetInTouch = async () => {
    if (!demoEmail) return;
    setIsLoading(true);
    try {
      await sendDemoRequest({ email: demoEmail });
      toast({
        title: "Thanks!",
        description: "We'll be in touch soon.",
        duration: 5000,
      });
      setDemoEmail('');
    } catch (error) {
      console.error('Error sending email:', error);
      toast({
        title: "Error",
        description: "Failed to send email. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-white">



      {/* How It Works */}
      <section id="how-it-works" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              How Suniyo Works
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              Three simple steps from passive capture to measurable improvement.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="relative text-center group">
                  <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-5 group-hover:bg-blue-100 transition-colors duration-200">
                    <Icon className="w-7 h-7 text-blue-600" />
                  </div>
                  <div className="text-xs font-bold text-blue-400 tracking-widest uppercase mb-2">{step.number}</div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-500 leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Performance Visibility */}
      <ProductShowcase />

      {/* The Problem */}
      <section id="problem" className="py-24 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Most hotel owners operate blind.
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              The gap between what you think is happening and what's actually happening at your front desk is costing you.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {problems.map((problem, i) => (
              <div key={i} className="bg-white border border-slate-100 rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow duration-200">
                <div className="w-8 h-8 bg-red-50 rounded-lg flex items-center justify-center mb-4">
                  <Eye className="w-4 h-4 text-red-400" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{problem.title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{problem.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull Quote */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <blockquote className="text-2xl md:text-4xl font-light text-white leading-relaxed mb-8 italic">
            "Can you be at the front desk 24 hours a day, 365 days a year, closely observing how your associates deliver service?"
          </blockquote>
          <p className="text-xl font-bold text-blue-400 tracking-wide">Suniyo can.</p>
        </div>
      </section>

      {/* Revenue Calculator */}
      <section id="calculator" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
              Calculate Your Revenue Potential
            </h2>
            <p className="text-lg text-slate-500 max-w-xl mx-auto">
              See what a measurable improvement in guest satisfaction could mean for your bottom line.
            </p>
          </div>
          <RevenueEstimator />
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-slate-900">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Ready to see your front desk clearly?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto leading-relaxed">
            Join select-service hotel owners who are replacing guesswork with clarity — one shift at a time.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="your@email.com"
              value={demoEmail}
              onChange={(e) => setDemoEmail(e.target.value)}
              className="bg-white/10 border-white/20 text-white placeholder:text-slate-400 rounded-full px-5 focus:border-blue-400 focus:ring-blue-400"
            />
            <Button 
              onClick={handleGetInTouch}
              disabled={isLoading || !demoEmail}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-7 py-3 rounded-full border-0 whitespace-nowrap transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Sending...' : 'Get in Touch'}
            </Button>
          </div>
        </div>
      </section>

    </div>
  );
}