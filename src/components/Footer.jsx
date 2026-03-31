import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-100 text-slate-500">
      <div className="container mx-auto px-6 py-8">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <img
              src="https://media.base44.com/images/public/68ceff2e17a02290721df37f/e18c4d4d6_suniyo_logo_darker_only.png"
              alt="Logo"
              className="h-10 w-auto object-contain mb-3"
            />
            
            <p className="text-sm text-slate-500">Where Service Gets Rewarded.</p>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wide">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to={createPageUrl('Home')} className="hover:text-teal-600 transition-colors">Home</Link></li>
              <li><Link to={createPageUrl('TheChallenge')} className="hover:text-teal-600 transition-colors">The Challenge</Link></li>
              <li><Link to={createPageUrl('OurSolution')} className="hover:text-teal-600 transition-colors">Our Solution</Link></li>
              <li><Link to={createPageUrl('PilotProgram')} className="hover:text-teal-600 transition-colors">Pilot Program</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wide">Ready to boost revenue?</h4>
            <p className="text-sm leading-relaxed">Subscribe and see the difference data-driven service coaching can make for your property.</p>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Suniyo LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}