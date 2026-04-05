import React from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Wifi, Package } from 'lucide-react';

const STRIPE_PAYMENT_LINK = 'https://buy.stripe.com/aFadRadVZcMab3L5Ai0co01';

export default function PaymentStep() {
  const handleCheckout = () => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      alert('Checkout is only available from the published app. Please open the app directly.');
      return;
    }
    window.location.href = STRIPE_PAYMENT_LINK;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-1">Complete Your Subscription</h3>
        <p className="text-sm text-slate-500">Review what's included and proceed to secure checkout.</p>
      </div>

      {/* One-time charge */}
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">One-Time Charge</p>
        </div>
        <div className="px-4 py-4 space-y-3">
          <div className="flex items-center gap-3">
            <Smartphone className="w-4 h-4 text-teal-500 flex-shrink-0" />
            <span className="text-sm text-slate-700 flex-1">Mobile device with preinstalled app</span>
          </div>
          <div className="flex items-center gap-3">
            <Wifi className="w-4 h-4 text-teal-500 flex-shrink-0" />
            <span className="text-sm text-slate-700 flex-1">Stand + Activated eSIM</span>
          </div>
          <div className="flex items-center gap-3">
            <Package className="w-4 h-4 text-teal-500 flex-shrink-0" />
            <span className="text-sm text-slate-700 flex-1">Shipping</span>
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-slate-100">
            <span className="text-sm font-bold text-slate-900">Total due today</span>
            <span className="text-lg font-extrabold text-slate-900">$500</span>
          </div>
        </div>
      </div>

      {/* Recurring charge */}
      <div className="rounded-xl border border-teal-200 bg-teal-50 px-4 py-3 flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-slate-800">Monthly Subscription</p>
          <p className="text-xs text-slate-500">AI Hotel DeskBuddy — billed monthly after first payment</p>
        </div>
        <span className="text-lg font-extrabold text-teal-600">$350<span className="text-xs font-normal text-slate-500">/mo</span></span>
      </div>

      <Button
        onClick={handleCheckout}
        className="w-full py-3 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md border-0 transition-all duration-300"
      >
        <CreditCard className="mr-2 w-4 h-4" /> Proceed to Secure Checkout
      </Button>

      <p className="text-center text-xs text-slate-400">Powered by Stripe · No card info stored on our servers</p>
    </div>
  );
}