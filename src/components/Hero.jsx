import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const evocativeQuestions = [
  "You pay me $15/hr and I'm here alone delivering the promise of great service at your $20M hotel.",
  "How much more revenue can you earn if your guest satisfaction goes up? We know—just ask.",
  "Would you rather know today what happened at your property—or wait for bad reviews days later?",
  "Do you know why you get all those chargebacks? We do—just ask.",
  "Your new hire has been at the front desk 3 months. Do you know which areas they can improve?",
  "Avoid a franchise default notice because of failing guest satisfaction scores."
];

export default function Hero() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuestion((prev) => (prev + 1) % evocativeQuestions.length);
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-teal-50">
      {/* Decorative blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-teal-100 to-cyan-50 rounded-full blur-3xl opacity-60 -translate-y-1/4 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-blue-100 to-teal-50 rounded-full blur-3xl opacity-50 pointer-events-none" />

      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 min-h-screen flex flex-col justify-center items-center text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-8">
          <span className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></span>
          Now accepting pilot partners
        </div>

        {/* Headline */}
        <h1 className="text-7xl md:text-9xl font-extrabold text-slate-900 mb-4 leading-none tracking-tight">
          ARS<sup className="text-4xl md:text-5xl relative -top-10 font-bold text-teal-500">360</sup>
        </h1>
        <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-8 leading-tight max-w-5xl">
          Where Hotel Service Gets{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Rewarded</span>
        </h2>
        <p className="text-xl md:text-2xl text-slate-500 leading-relaxed max-w-3xl mx-auto mb-10">
          Boost guest satisfaction, reward associates, and drive revenue—while never letting bad service go unnoticed.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-14">
          <Link to={createPageUrl('PilotProgram')}>
            <Button className="group px-9 py-6 text-base font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-lg shadow-teal-200 hover:shadow-teal-300 transition-all duration-300 border-0 min-w-[240px]">
              Request Pilot Access
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
          <Link to={createPageUrl('OurSolution')}>
            <Button variant="outline" className="group px-9 py-6 text-base font-semibold border-2 border-slate-200 text-slate-700 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 rounded-full transition-all duration-300 min-w-[240px]">
              Discover ARS360
              <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </Link>
        </div>

        {/* Rotating quote card */}
        <div className="max-w-2xl w-full mx-auto">
          <div className="bg-white border border-slate-100 shadow-xl rounded-2xl px-8 py-6 min-h-[90px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={currentQuestion}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5 }}
                className="text-lg md:text-xl text-slate-600 italic leading-relaxed text-center"
              >
                "{evocativeQuestions[currentQuestion]}"
              </motion.blockquote>
            </AnimatePresence>
          </div>
          {/* Dots */}
          <div className="flex gap-2 justify-center mt-4">
            {evocativeQuestions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentQuestion(i)}
                className={`h-1.5 rounded-full transition-all duration-300 ${i === currentQuestion ? 'w-8 bg-teal-500' : 'w-2 bg-slate-200'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}