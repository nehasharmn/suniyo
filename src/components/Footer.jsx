import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="mb-4">
                <img 
                  src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/68ceff2e17a02290721df37f/fd3f1a952_ARS360logo.png" 
                  alt="ARS360" 
                  className="h-20 w-auto object-contain brightness-0 invert opacity-90"
                />
                <p className="text-gray-500 text-xs -mt-2">Associate Rewards System 360</p>
            </div>
            <p className="text-sm">Where Service Gets Rewarded.</p>
          </div>
          {/* Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigate</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to={createPageUrl('Home')} className="hover:text-accent">Home</Link></li>
              <li><Link to={createPageUrl('TheChallenge')} className="hover:text-accent">The Challenge</Link></li>
              <li><Link to={createPageUrl('OurSolution')} className="hover:text-accent">Our Solution</Link></li>
              <li><Link to={createPageUrl('PilotProgram')} className="hover:text-accent">Pilot Program</Link></li>
            </ul>
          </div>
          {/* CTA */}
          <div>
            <h4 className="font-semibold text-white mb-4">Ready to boost your revenue?</h4>
            <p className="text-sm">Join the pilot and see the difference data-driven service coaching can make.</p>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-800 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Suniyo LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}