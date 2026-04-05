import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Smartphone, Wifi, Package, Check } from 'lucide-react';
import { createCheckout } from '@/functions/createCheckout';

export default function PaymentStep() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);

  const handleCheckout = async () => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      alert('Checkout is only available from the published app. Please open the app directly.');
      return;
    }
    setIsLoading(true);
    const successUrl = `${window.location.origin}/Subscribe?success=true`;
    const cancelUrl = window.location.href;
    const res = await createCheckout({ plan: selectedPlan, successUrl, cancelUrl });
    if (res.data?.url) {
      window.location.href = res.data.url;
    } else {
      alert('Could not initiate checkout. Please try again.');
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-1">Complete Your Subscription</h3>
        <p className="text-sm text-slate-500">Review what's included and choose your billing plan.</p>
      </div>

      {/* One-time charge */}
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">One-Time Charge (All Plans)</p>
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
            <span className="text-sm font-bold text-slate-900">Hardware fee</span>
            <span className="text-lg font-extrabold text-slate-900">$500</span>
          </div>
        </div>
      </div>

      {/* Plan selection */}
      <div>
        <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">Choose Your Subscription Plan</p>
        <div className="grid grid-cols-2 gap-3">
          {/* Monthly */}
          <button
            onClick={() => setSelectedPlan('monthly')}
            className={`rounded-xl border-2 px-4 py-4 text-left transition-all duration-200 ${
              selectedPlan === 'monthly'
                ? 'border-teal-500 bg-teal-50'
                : 'border-slate-200 bg-white hover:border-teal-300'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-800">Monthly</span>
              {selectedPlan === 'monthly' && <Check className="w-4 h-4 text-teal-500" />}
            </div>
            <span className="text-xl font-extrabold text-teal-600">$350</span>
            <span className="text-xs text-slate-500">/mo</span>
            <p className="text-xs text-slate-400 mt-1">Billed monthly</p>
          </button>

          {/* Annual */}
          <button
            onClick={() => setSelectedPlan('annual')}
            className={`rounded-xl border-2 px-4 py-4 text-left transition-all duration-200 relative ${
              selectedPlan === 'annual'
                ? 'border-teal-500 bg-teal-50'
                : 'border-slate-200 bg-white hover:border-teal-300'
            }`}
          >
            <div className="absolute -top-2 right-3 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">Save $200</div>
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-800">Annual</span>
              {selectedPlan === 'annual' && <Check className="w-4 h-4 text-teal-500" />}
            </div>
            <span className="text-xl font-extrabold text-teal-600">$3,000</span>
            <span className="text-xs text-slate-500">/yr</span>
            <p className="text-xs text-slate-400 mt-1">~$250/mo · billed yearly</p>
          </button>
        </div>
      </div>

      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        className="w-full py-3 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md border-0 transition-all duration-300"
      >
        <CreditCard className="mr-2 w-4 h-4" />
        {isLoading ? 'Redirecting...' : 'Proceed to Secure Checkout'}
      </Button>

      <p className="text-center text-xs text-slate-400">Powered by Stripe · No card info stored on our servers</p>
    </div>
  );
}