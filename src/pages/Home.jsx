import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Hero from '../components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      <Hero />

      {/* Video Section */}
      <section className="py-3 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/LPv44XDItio?autoplay=1&mute=1&rel=0"
              allow="autoplay; encrypted-media"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Challenge + Solution Cards */}
      <section className="py-4 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {/* The Challenge */}
            <Card className="border border-slate-100 shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/4fdde6290_HotelCheck-InDisruption.png"
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-rose-50 rounded-xl flex items-center justify-center">
                    <Lightbulb className="w-5 h-5 text-rose-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">The Challenge</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  The front desk is your first impression, but inconsistent service, reactive management, and limited visibility lead to lost revenue and high staff turnover.
                </p>
                <Link to={createPageUrl('TheChallenge')}>
                  <Button variant="outline" className="group border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full px-5 text-sm">
                    See the Financial Impact
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Our Solution */}
            <Card className="border border-slate-100 shadow-md overflow-hidden bg-white hover:shadow-lg transition-shadow duration-300">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/0ec336ed6_image.png"
                  alt=""
                  className="w-full h-full object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
              </div>
              <CardContent className="p-5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-teal-50 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-teal-500" />
                  </div>
                  <h2 className="text-2xl font-bold text-slate-900">Our Solution</h2>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">
                  Our platform uses AI-powered voice analysis to provide real-time feedback, reward associates, and give managers the insights needed to turn service into measurable profit.
                </p>
                <Link to={createPageUrl('OurSolution')}>
                  <Button variant="outline" className="group border-teal-200 text-teal-600 hover:bg-teal-50 rounded-full px-5 text-sm">
                    Discover How It Works
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-8 bg-gradient-to-br from-teal-500 to-cyan-500">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-3 tracking-tight">
            Ready to Unlock Your Revenue Potential?
          </h2>
          <p className="text-sm md:text-base text-teal-100 mb-5 max-w-2xl mx-auto leading-relaxed">
            Be among the first to see how data-driven service coaching can transform your guest satisfaction scores and your bottom line.
          </p>
          <Link to={createPageUrl('PilotProgram')}>
            <Button className="group px-10 py-6 text-base font-semibold bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-lg transition-all duration-300 border-0">
              Join the Pilot Program
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}