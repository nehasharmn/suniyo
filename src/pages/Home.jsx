import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import MeetKelly from '../components/MeetKelly';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <MeetKelly />

      {/* Challenge + Solution Cards */}
      <section className="py-4 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight">The Problem & Our Solution</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white rounded-2xl border border-rose-100 shadow-sm p-8 flex flex-col gap-4">
              <div className="w-12 h-12 bg-rose-50 rounded-2xl flex items-center justify-center">
                <Lightbulb className="w-6 h-6 text-rose-500" />
              </div>
              <h2 className="text-xl font-bold text-slate-900">The Challenge</h2>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                The front desk is your first impression, but inconsistent service, reactive management, and limited visibility lead to lost revenue and high staff turnover.
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
              <h2 className="text-xl font-bold text-slate-900">Our Solution</h2>
              <p className="text-slate-500 leading-relaxed text-sm flex-1">
                Our platform uses AI-powered voice analysis to provide real-time feedback, reward associates, and give managers the insights needed to turn service into measurable profit.
              </p>
              <Link to={createPageUrl('OurSolution')}>
                <Button variant="outline" className="group border-teal-200 text-teal-600 hover:bg-teal-50 rounded-full px-5 text-sm w-fit">
                  Discover How It Works
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-6 bg-gradient-to-br from-teal-500 to-cyan-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-2 tracking-tight">
            Ready to Unlock Your Revenue Potential?
          </h2>
          <p className="text-sm text-teal-100 mb-4 max-w-2xl mx-auto leading-relaxed">
            Be among the first to see how data-driven service coaching can transform your guest satisfaction scores and your bottom line.
          </p>
          <Link to="/Pricing">
            <Button className="group px-12 py-6 text-base font-semibold bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-lg transition-all duration-300 border-0 hover:scale-105">
              Subscribe
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}