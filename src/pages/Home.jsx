
import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import Hero from '../components/Hero';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight, Lightbulb, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <Hero />
      
      <section className="py-32 relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/20 via-cyan-900/20 to-blue-900/20"></div>
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-teal-400/10 to-cyan-400/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400/10 to-teal-400/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
            {/* The Challenge Summary */}
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-red-600/10 via-red-500/5 to-pink-600/10 backdrop-blur-sm transition-all duration-500">
              <div className="relative">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/4fdde6290_HotelCheck-InDisruption.png" 
                  alt="" 
                  className="w-full h-64 object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-pink-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <Lightbulb className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">The Challenge</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                  The front desk is your first impression, but inconsistent service, a reactive approach to challenges, and lack of visibility often lead to lost revenue and high staff turnover.
                </p>
                <Link to={createPageUrl('TheChallenge')}>
                  <Button className="group font-bold border-2 border-red-400 text-red-400 hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500 hover:text-white rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 bg-transparent">
                    See the Financial Impact
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* The Solution Summary */}
            <Card className="border-0 shadow-2xl overflow-hidden bg-gradient-to-br from-teal-600/10 via-cyan-500/5 to-blue-600/10 backdrop-blur-sm transition-all duration-500">
              <div className="relative">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/0ec336ed6_image.png" 
                  alt="" 
                  className="w-full h-64 object-cover grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
              </div>
              <CardContent className="p-10">
                <div className="flex items-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-3xl flex items-center justify-center shadow-lg">
                    <TrendingUp className="w-10 h-10 text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-white">Our Solution</h2>
                </div>
                <p className="text-gray-300 leading-relaxed mb-10 text-lg">
                  ARS<sup className="text-xs text-gray-300">360</sup> uses AI-powered voice analysis to provide real-time feedback, reward associates, and give managers the insights needed to turn excellent service into measurable profit.
                </p>
                <Link to={createPageUrl('OurSolution')}>
                  <Button className="group font-bold border-2 border-teal-400 text-teal-400 hover:bg-gradient-to-r hover:from-teal-500 hover:via-cyan-500 hover:to-blue-500 hover:text-white rounded-full px-8 py-4 transition-all duration-300 hover:scale-105 bg-transparent">
                    Discover How It Works
                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <div className="relative py-32 overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/30 to-cyan-900/30"></div>
        
        <div className="relative container mx-auto px-6 text-center">
           <h2 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-200 to-teal-400 mb-8">Ready to Unlock Your Revenue Potential?</h2>
           <p className="text-xl md:text-2xl text-gray-200 mb-12 max-w-4xl mx-auto leading-relaxed">Be among the first to see how data-driven service coaching can transform your guest satisfaction scores and your bottom line.</p>
           <Link to={createPageUrl('PilotProgram')}>
            <Button className="group px-12 py-8 text-xl font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-600 text-white rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-0">
              Join the Pilot Program
              <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Button>
           </Link>
        </div>
      </div>
    </div>
  );
}
