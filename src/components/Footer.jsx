import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook } from 'lucide-react';
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
              <li><Link to="/Pricing" className="hover:text-teal-600 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-slate-800 mb-4 text-sm uppercase tracking-wide">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:919-230-1401" className="hover:text-teal-600 transition-colors">919-230-1401</a></li>
              <li><a href="mailto:sales@suniyo.ai" className="hover:text-teal-600 transition-colors">sales@suniyo.ai</a></li>
              <li className="text-xs leading-relaxed">11010 Lake Grove Blvd, Suite 100<br />Morrisville, NC 27560</li>
              <li className="pt-2">
                <a href="https://www.facebook.com/profile.php?id=61574741363578" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-teal-600 transition-colors inline-block">
                  <Facebook className="w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-slate-200 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Suniyo LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}