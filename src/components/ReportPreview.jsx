import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Button } from '@/components/ui/button';

export default function ReportPreview() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 bg-teal-50 border border-teal-100 text-teal-700 text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                AI-Generated Daily Reports
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
                Every shift, every score — in one clear report
              </h2>
              <p className="text-base text-slate-500 leading-relaxed mb-4">
                Our platform automatically generates a daily performance report for your property — covering check-in scores, soft skills, upsell attempts, review requests, and operational issues across every shift.
              </p>
              <ul className="space-y-2 mb-6">
                {[
                  "Check-in performance scored across Night Audit, Morning & Evening shifts",
                  "Soft skills tracking: greetings, loyalty recognition, name usage & more",
                  "Ops issues surfaced and categorized — before guests complain",
                  "7-day trend charts so you can spot patterns instantly",
                  "Strengths & coaching opportunities highlighted automatically"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-5 h-5 bg-teal-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-2 h-2 bg-teal-500 rounded-full" />
                    </div>
                    <p className="text-base text-slate-600 leading-relaxed">{item}</p>
                  </li>
                ))}
              </ul>
              <Link to={createPageUrl('PilotProgram')}>
                <Button className="group px-8 py-5 text-sm font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md border-0 transition-all duration-300">
                  Get Reports Like This
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right: Report Image */}
            <div className="relative">
              {/* Shadow / frame effect */}
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-3xl blur-xl opacity-50" />
              <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden">
                <div className="bg-slate-50 border-b border-slate-100 px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 bg-red-300 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-300 rounded-full" />
                    <div className="w-3 h-3 bg-green-300 rounded-full" />
                  </div>
                  <span className="text-xs text-slate-400 ml-2 font-mono">Hotel Inn — Daily Report</span>
                </div>
                <img
                  src="https://media.base44.com/images/public/68ceff2e17a02290721df37f/8c2be1979_HotelInnSuniyoreport.png"
                  alt="Sample Daily Report"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}