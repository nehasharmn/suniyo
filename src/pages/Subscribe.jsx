import React from 'react';
import Contact from '../components/Contact';
import { CheckCircle } from 'lucide-react';

export default function Subscribe() {
  const params = new URLSearchParams(window.location.search);
  const success = params.get('success') === 'true';

  if (success) {
    return (
      <section className="py-24 bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-teal-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Welcome to Suniyo!</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Your subscription is confirmed. We'll be in touch shortly to get your AI DeskBuddy device shipped and your account set up.
            </p>
            <p className="text-sm text-slate-400">Check your email for a confirmation receipt.</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div>
      <Contact />
    </div>
  );
}