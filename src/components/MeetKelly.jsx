import React from 'react';
import { Mic, BarChart2, Star, Users } from 'lucide-react';

const capabilities = [
  { icon: Mic, label: "Listens & Analyzes" },
  { icon: BarChart2, label: "Scores & Categorizes" },
  { icon: Star, label: "Rewards Excellence" },
  { icon: Users, label: "Coaches Associates" },
];

export default function MeetKelly() {
  return (
    <section className="py-6 bg-white">
      <div className="container mx-auto px-6 max-w-5xl">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-shrink-0 flex flex-col items-center">
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-teal-100 to-cyan-100 blur-2xl opacity-70 scale-110" />
              <img
                src="https://media.base44.com/images/public/68ceff2e17a02290721df37f/aed7b422d_KellyPic.jpg"
                alt="Kelly - Hotel DeskBuddy"
                className="relative w-40 h-44 object-cover object-top rounded-full border-4 border-white shadow-xl"
              />
            </div>
            <div className="mt-2 inline-flex items-center gap-2 bg-teal-50 border border-teal-200 text-teal-700 text-xs font-semibold px-3 py-1 rounded-full">
              <span className="w-2 h-2 bg-teal-400 rounded-full animate-pulse" />
              AI Agent · Always On
            </div>
          </div>

          <div className="flex-1 text-center md:text-left">
            <p className="text-teal-600 font-semibold text-xs uppercase tracking-widest mb-1">Meet Your DeskBuddy</p>
            <h2 className="text-2xl md:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Meet <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-cyan-500">Kelly</span>, the Hotel DeskBuddy
            </h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-3 max-w-xl">
              Kelly is an AI agent that helps increase revenue and guest satisfaction as she listens, analyzes, categorizes, scores, and provides feedback to agents and managers — helping you <strong className="text-slate-700">reward, coach, and recognize</strong> your associates like never before.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {capabilities.map(({ icon: Icon, label }) => (
                <div key={label} className="flex flex-col items-center md:items-start gap-1.5 bg-slate-50 border border-slate-100 rounded-xl px-3 py-2">
                  <div className="w-7 h-7 bg-teal-50 rounded-lg flex items-center justify-center">
                    <Icon className="w-3.5 h-3.5 text-teal-500" />
                  </div>
                  <span className="text-xs font-semibold text-slate-700 text-center md:text-left">{label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}