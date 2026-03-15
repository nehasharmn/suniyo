
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const evocativeQuestions = [
  "You pay me $15 per hour and I'm here all alone to deliver on the promise of great service in a $20 million hotel.",
  "How much more revenue can you earn if your guest satisfaction goes up? We know—just ask.",
  "Would you rather know today what exactly happened all day at your $20M property rather than wait for bad reviews to come in several days later?",
  "Do you know why you get all those chargebacks? We do—just ask.",
  "Your new hire has been at the front desk for 3 months. Do you really know which areas they can improve? We do—just ask.",
  "Avoid a franchise default notice to lender because of failing guest satisfaction."
];

export default function Hero() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % evocativeQuestions.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen text-white overflow-hidden">
      {/* Background Image */}
      <img 
        src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/6927f1945_WhatsAppImage2025-09-22at14647PM.jpg"
        alt="Hotel front desk"
        className="absolute inset-0 w-full h-full object-cover grayscale"
      />
      {/* Lighter gradient overlay to make background more visible */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900/40 via-slate-900/30 to-gray-800/40">
        <div className="absolute inset-0 bg-gradient-to-tr from-teal-500/10 via-cyan-500/10 to-blue-500/10"></div>
        <div className="absolute inset-0 bg-black/30"></div>
      </div>
      
      {/* Floating geometric shapes with reduced opacity */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-teal-400/5 to-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-r from-blue-400/5 to-teal-400/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-cyan-400/5 to-blue-400/5 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center min-h-screen justify-center">
        {/* Main Headlines with lighter glassmorphism */}
        <div className="max-w-5xl mx-auto mb-12 backdrop-blur-sm bg-white/5 rounded-3xl p-12 border border-white/20">
          <h1 className="text-6xl md:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 mb-8 leading-tight drop-shadow-2xl">
            ARS<sup className="text-3xl md:text-4xl text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-cyan-300 to-blue-400 relative -top-12">360</sup>
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 leading-tight">
            Where Service Gets 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Rewarded</span>
          </h2>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed max-w-4xl mx-auto">
            Boost guest satisfaction, reward associates, and drive revenue—while never letting bad service go unnoticed.
          </p>
        </div>

        {/* Rotating Questions with modern design */}
        <div className="max-w-4xl mx-auto mb-12 h-48 flex items-center justify-center">
          <div className="backdrop-blur-md bg-black/20 rounded-3xl p-8 border border-white/30 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentQuestion}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -30, scale: 0.9 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="text-lg md:text-xl text-white italic leading-relaxed font-light"
              >
                "{evocativeQuestions[currentQuestion]}"
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-3 mb-16">
          {evocativeQuestions.map((_, index) => (
            <div
              key={index}
              className={`w-16 h-2 rounded-full transition-all duration-500 ${
                index === currentQuestion 
                  ? 'bg-gradient-to-r from-teal-400 to-cyan-400 shadow-lg' 
                  : 'bg-gray-500/50'
              }`}
            />
          ))}
        </div>

        {/* Modern CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 mb-20">
          <Link to={createPageUrl('PilotProgram')}>
            <Button className="group px-10 py-6 text-lg font-bold bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 hover:from-teal-500 hover:via-cyan-500 hover:to-blue-600 text-white rounded-full shadow-2xl transform hover:scale-110 transition-all duration-300 border-0 min-w-[280px]">
              Request Pilot Access
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          
          <Link to={createPageUrl('OurSolution')}>
            <Button className="group px-10 py-6 text-lg font-bold border-2 border-white/50 text-white hover:bg-white hover:text-gray-900 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-110 min-w-[280px]">
              <Play className="mr-3 w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              Discover ARS360 Impact
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator with animation */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm">
            <div className="w-1 h-4 bg-gradient-to-b from-teal-400 to-cyan-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}
