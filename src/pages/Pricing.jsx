import React, { useState } from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="pt-24 pb-16 bg-white min-h-screen">
      <div className="container mx-auto px-6 max-w-5xl">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-2">Simple, Transparent Pricing</p>
          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
            Invest in Your Guest Experience
          </h1>
          <p className="text-slate-500 text-sm max-w-xl mx-auto">
            One device. One AI agent. Measurable results from day one.
          </p>
        </div>

        {/* Hardware Card */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 mb-6 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 w-14 h-14 bg-teal-100 rounded-2xl flex items-center justify-center">
            <svg className="w-7 h-7 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">One-Time Purchase</p>
            <h2 className="text-xl font-extrabold text-slate-900 mb-1">AI-Enabled Hardware Device</h2>
            <p className="text-slate-500 text-sm">Mobile device with preinstalled app, stand, activated eSIM, and shipping. Ready to deploy on day one — no IT setup required.</p>
          </div>
          <div className="text-center md:text-right flex-shrink-0">
            <span className="text-4xl font-extrabold text-slate-900">$500</span>
            <p className="text-slate-400 text-xs mt-1">one-time fee</p>
          </div>
        </div>

        {/* Subscription Toggle */}
        <div className="text-center mb-6">
          <p className="text-slate-600 font-semibold text-sm mb-3">Choose your subscription plan</p>
          <div className="inline-flex items-center bg-slate-100 rounded-full p-1 gap-1">
            <button
              onClick={() => setBilling('monthly')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}
            >
              Month to Month
            </button>
            <button
              onClick={() => setBilling('annual')}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${billing === 'annual' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}
            >
              Annual <span className="text-teal-600 font-bold ml-1">Save $1,200</span>
            </button>
          </div>
        </div>

        {/* Subscription Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-10">

          {/* Monthly */}
          <div className={`rounded-2xl border-2 p-6 transition-all ${billing === 'monthly' ? 'border-teal-400 bg-teal-50 shadow-lg' : 'border-slate-200 bg-white opacity-60'}`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">Month to Month</p>
                <h3 className="text-xl font-extrabold text-slate-900">Monthly Subscription</h3>
              </div>
              {billing === 'monthly' && (
                <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">Selected</span>
              )}
            </div>
            <div className="flex items-end gap-1 mb-4">
              <span className="text-5xl font-extrabold text-slate-900">$350</span>
              <span className="text-slate-400 text-sm mb-2">/month</span>
            </div>
            <p className="text-slate-500 text-sm mb-5">Flexible month-to-month commitment. Cancel anytime.</p>
            {billing === 'monthly' && (
              <Link to="/Subscribe">
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
                  Subscribe Monthly →
                </button>
              </Link>
            )}
          </div>

          {/* Annual */}
          <div className={`rounded-2xl border-2 p-6 transition-all relative ${billing === 'annual' ? 'border-teal-400 bg-teal-50 shadow-lg' : 'border-slate-200 bg-white opacity-60'}`}>
            <div className="flex items-center justify-between mb-4">
              <div>
                <p className="text-xs font-semibold text-teal-600 uppercase tracking-widest mb-1">Best Value</p>
                <h3 className="text-xl font-extrabold text-slate-900">Annual Subscription</h3>
              </div>
              {billing === 'annual' && (
                <span className="bg-teal-500 text-white text-xs font-bold px-3 py-1 rounded-full">Selected</span>
              )}
            </div>
            <div className="flex items-end gap-1 mb-1">
              <span className="text-5xl font-extrabold text-slate-900">$3,000</span>
              <span className="text-slate-400 text-sm mb-2">/year</span>
            </div>
            <p className="text-teal-600 text-xs font-semibold mb-1">That's just $250/month — save $1,200 vs monthly</p>
            <p className="text-slate-500 text-sm mb-5">Billed once per year. Best value for committed properties.</p>
            {billing === 'annual' && (
              <Link to="/Subscribe" className="block mt-5">
                <button className="w-full bg-teal-500 hover:bg-teal-400 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
                  Subscribe Annually →
                </button>
              </Link>
            )}
          </div>
        </div>



      </div>
    </div>
  );
}