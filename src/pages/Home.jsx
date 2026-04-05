import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import MeetKelly from '../components/MeetKelly';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <MeetKelly />

      {/* Problem & Solution Overview */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Gap Between Service and Revenue</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg">Your front desk impacts every guest interaction. But without visibility and incentives, you're leaving money on the table.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-rose-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">The Challenge</h3>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                Inconsistent service, reactive management, and limited visibility into front desk performance lead to lost revenue opportunities and high staff turnover.
              </p>
              <Link to={createPageUrl('TheChallenge')}>
                <Button variant="outline" className="group border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full px-5 text-sm w-fit">
                  See the Financial Impact
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            <div className="bg-white rounded-2xl border border-teal-100 shadow-sm p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-teal-50 rounded-2xl flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-teal-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Our Solution</h3>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                AI-powered voice analysis combined with intelligent incentives gives your team real-time feedback and managers actionable insights to drive measurable profit.
              </p>
              <Link to={createPageUrl('OurSolution')}>
                <Button variant="outline" className="group border-teal-200 text-teal-600 hover:bg-teal-50 rounded-full px-5 text-sm w-fit">
                  How It Works
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA to Pricing */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-cyan-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">
            Ready to Turn Service Into Revenue?
          </h2>
          <p className="text-lg text-teal-100 mb-6 max-w-2xl mx-auto leading-relaxed">
            See pricing and subscribe to get started. Get your hardware, activate your AI agent, and start tracking impact from day one.
          </p>
          <Link to="/Pricing">
            <Button className="group px-12 py-6 text-base font-semibold bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-lg transition-all duration-300 border-0 hover:scale-105">
              View Pricing & Subscribe
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}