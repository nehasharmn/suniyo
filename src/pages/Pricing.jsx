import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Pricing() {
  const [billing, setBilling] = useState('monthly');

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-32 pb-16">
        <div className="container mx-auto px-6 max-w-5xl text-center">
          <p className="text-blue-600 font-semibold text-xs uppercase tracking-widest mb-3">Simple, Transparent Pricing</p>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
            Pricing That Pays for Itself
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Hardware + AI-powered coaching. Measurable impact on guest satisfaction and RevPAR from day one.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-6 max-w-5xl py-16">

        {/* Hardware Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">1. Your Hardware</h2>
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Enabled Mobile Device</h3>
              <p className="text-slate-600 leading-relaxed">
                Preinstalled with Suniyo app, includes stand, activated eSIM, and shipping. Ready to deploy on your front desk with zero IT setup required.
              </p>
            </div>
            <div className="text-center md:text-right flex-shrink-0">
              <span className="text-5xl font-extrabold text-slate-900">$500</span>
              <p className="text-slate-500 text-sm mt-2">one-time purchase</p>
            </div>
          </div>
        </div>

        {/* Subscription Section */}
        <div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">2. Your Subscription Plan</h2>
          <p className="text-slate-600 mb-8">Choose the commitment that works for you.</p>

          {/* Billing Toggle */}
          <div className="text-center mb-10">
            <div className="inline-flex items-center bg-slate-100 rounded-full p-1 gap-1">
              <button
                onClick={() => setBilling('monthly')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${billing === 'monthly' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}
              >
                Month to Month
              </button>
              <button
                onClick={() => setBilling('annual')}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${billing === 'annual' ? 'bg-white text-slate-900 shadow' : 'text-slate-500'}`}
              >
                Annual <span className="text-blue-600 font-bold ml-1">Save $1,200</span>
              </button>
            </div>
          </div>

          {/* Subscription Plans */}
          <div className="grid md:grid-cols-2 gap-8">

            {/* Monthly */}
            <div className={`rounded-2xl border-2 p-8 transition-all ${billing === 'monthly' ? 'border-blue-400 bg-blue-50 shadow-lg' : 'border-slate-200 bg-white opacity-60'}`}>
              <div className="mb-6">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Flexible Plan</p>
                <h3 className="text-2xl font-extrabold text-slate-900">Month-to-Month</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-5xl font-extrabold text-slate-900">$350</span>
                <span className="text-slate-500 text-lg">/month</span>
              </div>
              <p className="text-slate-600 text-sm mb-8">Pause or cancel anytime. Perfect for testing the impact.</p>
              {billing === 'monthly' && (
                <Link to="/Subscribe">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
                    Get Started →
                  </button>
                </Link>
              )}
            </div>

            {/* Annual */}
            <div className={`rounded-2xl border-2 p-8 transition-all relative ${billing === 'annual' ? 'border-blue-400 bg-blue-50 shadow-lg' : 'border-slate-200 bg-white opacity-60'}`}>
              <div className="mb-6">
                <p className="text-xs font-semibold text-blue-600 uppercase tracking-widest mb-2">Best Value</p>
                <h3 className="text-2xl font-extrabold text-slate-900">Annual Commitment</h3>
              </div>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-extrabold text-slate-900">$3,000</span>
                <span className="text-slate-500 text-lg">/year</span>
              </div>
              <p className="text-blue-600 text-sm font-semibold mb-4">Just $250/month — Save $1,200</p>
              <p className="text-slate-600 text-sm mb-8">Billed upfront. Best for committed properties ready to see results.</p>
              {billing === 'annual' && (
                <Link to="/Subscribe" className="block">
                  <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold px-6 py-3 rounded-full text-sm transition-colors">
                    Get Started →
                  </button>
                </Link>
              )}
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="mt-16 bg-slate-50 rounded-2xl p-8 text-center">
          <h3 className="text-xl font-bold text-slate-900 mb-3">What's Included</h3>
          <div className="grid md:grid-cols-3 gap-8 text-sm text-slate-600">
            <div>
              <p className="font-semibold text-slate-900 mb-1">Hardware</p>
              <p>Mobile device + app + eSIM + stand</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Coaching</p>
              <p>Real-time AI feedback to your team</p>
            </div>
            <div>
              <p className="font-semibold text-slate-900 mb-1">Insights</p>
              <p>Manager dashboard + performance tracking</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}