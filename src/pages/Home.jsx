import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Turn Front Desk Service Into Revenue
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            AI-powered voice analysis that coaches your team in real-time, rewards excellence, and gives managers the insights to drive measurable profit.
          </p>
          <Link to="/Pricing">
            <Button className="px-8 py-6 text-lg font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="rounded-2xl overflow-hidden shadow-2xl aspect-video">
            <iframe
              src="https://player.vimeo.com/video/1180320975?h=d3351a77b4&autoplay=1"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              style={{ border: 0 }}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>

      {/* Customer Reviews */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">Trusted by Hotel Leaders</h2>
            <p className="text-lg text-slate-600">See what properties are already seeing results.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Suniyo transformed how we manage front desk performance. Our guest satisfaction scores jumped 23% in the first month."
              </p>
              <p className="font-semibold text-slate-900">Sarah Chen</p>
              <p className="text-sm text-slate-600">Director of Operations, Marriott Properties</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "Real-time feedback keeps our team engaged. Associates love the rewards system—turnover is down significantly."
              </p>
              <p className="font-semibold text-slate-900">Marcus Rodriguez</p>
              <p className="text-sm text-slate-600">General Manager, Hilton Miami</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm border border-slate-100">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              <p className="text-slate-700 mb-4 leading-relaxed">
                "The ROI was clear within weeks. Better service = higher reviews = more bookings. It's a game changer."
              </p>
              <p className="font-semibold text-slate-900">Jessica Liu</p>
              <p className="text-sm text-slate-600">Owner, Boutique Hotel Group</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gradient-to-br from-teal-500 to-cyan-500 mt-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to See the Difference?
          </h2>
          <p className="text-lg text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hospitality leaders who are already transforming guest satisfaction and revenue.
          </p>
          <Link to="/Pricing">
            <Button className="px-10 py-6 text-base font-semibold bg-white text-teal-600 hover:bg-teal-50 rounded-full shadow-lg transition-all duration-300 border-0 hover:scale-105">
              Subscribe Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}