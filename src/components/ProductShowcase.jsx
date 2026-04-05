import React from 'react';

export default function ProductShowcase() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">Performance Visibility

            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Get instant insights into front desk performance across all shifts. Track KPIs that matter: check-in quality, upsell success, guest reviews, and more. Identify improvement opportunities before they impact revenue.
            </p>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-bold">📊</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Performance Tracking</h3>
                  <p className="text-slate-600">Monitor check-in scores, soft skills, and operational issues in real-time</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-bold">📈</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Shift Analytics</h3>
                  <p className="text-slate-600">Compare performance across night, morning, and evening shifts</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                  <span className="text-teal-600 font-bold">🎯</span>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Actionable Insights</h3>
                  <p className="text-slate-600">Identify top performers and areas for coaching instantly</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Visual Report Demo */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl p-8 shadow-xl border border-slate-200">
            <div className="bg-white rounded-lg p-6 space-y-6">
              {/* Report Header */}
              <div className="border-b pb-4">
                <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">Daily Performance Report</h3>
                <div className="grid grid-cols-3 gap-4">
                  <div className="bg-teal-50 rounded-lg p-3">
                    <p className="text-xs text-slate-600 mb-1">Sales Leads</p>
                    <p className="text-2xl font-bold text-teal-600">2</p>
                  </div>
                  <div className="bg-cyan-50 rounded-lg p-3">
                    <p className="text-xs text-slate-600 mb-1">Review Requests</p>
                    <p className="text-2xl font-bold text-cyan-600">9</p>
                  </div>
                  <div className="bg-green-50 rounded-lg p-3">
                    <p className="text-xs text-slate-600 mb-1">Upsell Attempts</p>
                    <p className="text-2xl font-bold text-green-600">3</p>
                  </div>
                </div>
              </div>

              {/* Performance Scores */}
              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-900">Performance Scores</p>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Check-in Score</span>
                    <span className="font-bold text-slate-900">69.8%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '69.8%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Check-out Score</span>
                    <span className="font-bold text-slate-900">68%</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '68%' }}></div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-600">Soft Skills</span>
                    <span className="font-bold text-slate-900">3.8/5</span>
                  </div>
                  <div className="w-full bg-slate-200 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                  </div>
                </div>
              </div>

              {/* Ops Issues */}
              <div className="pt-3 border-t">
                <p className="text-sm font-semibold text-slate-900 mb-2">Ops Issues</p>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="bg-orange-50 rounded p-2">
                    <p className="text-slate-600">Maintenance</p>
                    <p className="font-bold text-orange-600 text-lg">3</p>
                  </div>
                  <div className="bg-orange-50 rounded p-2">
                    <p className="text-slate-600">Admin</p>
                    <p className="font-bold text-orange-600 text-lg">1</p>
                  </div>
                  <div className="bg-orange-50 rounded p-2">
                    <p className="text-slate-600">Housekeeping</p>
                    <p className="font-bold text-orange-600 text-lg">5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>);

}