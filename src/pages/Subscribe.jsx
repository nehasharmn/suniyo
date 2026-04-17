import React, { useEffect, useRef } from 'react';
import Contact from '../components/Contact';
import { CheckCircle } from 'lucide-react';
import { sendAuthLink } from '@/functions/sendAuthLink';

export default function Subscribe() {
  const params = new URLSearchParams(window.location.search);
  const success = params.get('success') === 'true';
  const email = params.get('email') || '';
  const firstName = params.get('first_name') || '';
  const hasSentRef = useRef(false);

  useEffect(() => {
    if (success && email && !hasSentRef.current) {
      hasSentRef.current = true;
      const appUrl = window.location.origin;
      sendAuthLink({ email, first_name: firstName, appUrl }).catch(err => {
        console.warn('Auth link email failed:', err);
      });
    }
  }, [success, email, firstName]);

  if (success) {
    return (
      <section className="py-24 bg-white min-h-screen flex items-center">
        <div className="container mx-auto px-6">
          <div className="max-w-lg mx-auto text-center">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-10 h-10 text-teal-500" />
            </div>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Welcome to Suniyo!</h2>
            <p className="text-slate-500 leading-relaxed mb-4">
              Your subscription is confirmed. We've sent an account setup link to <strong>{email || 'your email'}</strong>. Click it to create your password and finish setting up your account.
            </p>
            <p className="text-sm text-slate-400">Didn't receive it? Check your spam folder.</p>
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