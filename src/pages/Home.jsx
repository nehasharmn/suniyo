import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import BrandCarousel from '../components/BrandCarousel';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            Turn Front Desk Service Into Revenue
          </h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">AI-powered voice analysis that coaches your team, rewards excellence, and gives managers the insights to drive profit.

          </p>
          <Link to="/Pricing">
            <Button className="px-8 py-6 text-lg font-semibold bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg transition-all duration-300">
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
              src="https://player.vimeo.com/video/1180379848/f7915c583a?autoplay=1"
              width="100%"
              height="100%"
              allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
              allowFullScreen
              style={{ border: 0 }}
              className="w-full h-full" />
            
          </div>
        </div>
      </section>

      {/* Inspired by the Best in Service */}
      <BrandCarousel />

      {/* CTA Banner */}
      <section className="py-20 mt-16" style={{ backgroundColor: '#0e172a' }}>
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
            Ready to See the Difference?
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            Join hospitality leaders who are already transforming guest satisfaction and revenue.
          </p>
          <Link to="/Pricing">
            <Button className="px-10 py-6 text-base font-semibold bg-white text-slate-900 hover:bg-slate-100 rounded-full shadow-lg transition-all duration-300 border-0 hover:scale-105">
              Subscribe Now
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>);

}