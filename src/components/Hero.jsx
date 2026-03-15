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
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Overlay — light enough to see the image, dark enough for text legibility */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-900/70 via-slate-900/60 to-gray-900/70"></div>
      
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center text-center min-h-screen justify-center">
        {/* Logo + Headline */}
        <div className="max-w-5xl mx-auto mb-10">
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4 leading-tight drop-shadow-2xl">
            ARS<sup className="text-3xl md:text-4xl relative -top-10">360</sup>
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Where Service Gets
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-cyan-300"> Rewarded</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
            Boost guest satisfaction, reward associates, and drive revenue—while never letting bad service go unnoticed.
          </p>
        </div>

        {/* Rotating Questions */}
        <div className="max-w-3xl mx-auto mb-10 min-h-[100px] flex items-center justify-center w-full">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl px-8 py-6 border border-white/20 shadow-xl w-full">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentQuestion}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="text-base md:text-lg text-white italic leading-relaxed font-light"
              >
                "{evocativeQuestions[currentQuestion]}"
              </motion.blockquote>
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="flex gap-2 mb-10">
          {evocativeQuestions.map((_, index) => (
            <div
              key={index}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                index === currentQuestion 
                  ? 'w-10 bg-teal-400' 
                  : 'w-4 bg-white/30'
              }`}
            />
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Link to={createPageUrl('PilotProgram')}>
            <Button className="group px-10 py-6 text-lg font-bold bg-gradient-to-r from-teal-400 to-cyan-500 hover:from-teal-500 hover:to-cyan-600 text-white rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300 border-0 min-w-[260px]">
              Request Pilot Access
              <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          
          <Link to={createPageUrl('OurSolution')}>
            <Button className="group px-10 py-6 text-lg font-bold border-2 border-white/60 text-white hover:bg-white hover:text-gray-900 rounded-full backdrop-blur-sm bg-white/10 transition-all duration-300 hover:scale-105 min-w-[260px]">
              <Play className="mr-3 w-5 h-5 group-hover:scale-125 transition-transform duration-300" />
              Discover ARS360 Impact
            </Button>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-teal-400 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
}