import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CreditCard, Check } from 'lucide-react';
import { createCheckout } from '@/functions/createCheckout';

const plans = [
  {
    id: 'monthly',
    label: 'Monthly',
    badge: null,
    subscriptionPrice: '$350',
    subscriptionPeriod: '/mo',
    subscriptionNote: 'Billed monthly',
  },
  {
    id: 'annual',
    label: 'Annual',
    badge: 'Save $1,200',
    subscriptionPrice: '$3,000',
    subscriptionPeriod: '/yr',
    subscriptionNote: '~$250/mo · billed yearly',
  },
];

const hardwareItems = [
  'Mobile Phone',
  'Phone Stand',
  'Preinstalled App',
  'Activated eSIM',
  'Shipping',
];

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

  const activePlan = plans.find(p => p.id === selectedPlan);

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-1">Complete Your Subscription</h3>
        <p className="text-sm text-slate-500">Choose your billing plan and proceed to secure checkout.</p>
      </div>

      {/* Plan selector */}
      <div className="grid grid-cols-2 gap-3">
        {plans.map(plan => (
          <button
            key={plan.id}
            onClick={() => setSelectedPlan(plan.id)}
            className={`rounded-xl border-2 px-4 py-4 text-left transition-all duration-200 relative ${
              selectedPlan === plan.id
                ? 'border-teal-500 bg-teal-50'
                : 'border-slate-200 bg-white hover:border-teal-300'
            }`}
          >
            {plan.badge && (
              <div className="absolute -top-2 right-3 bg-teal-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {plan.badge}
              </div>
            )}
            <div className="flex items-center justify-between mb-1">
              <span className="text-sm font-bold text-slate-800">{plan.label}</span>
              {selectedPlan === plan.id && <Check className="w-4 h-4 text-teal-500" />}
            </div>
            <span className="text-xl font-extrabold text-teal-600">{plan.subscriptionPrice}</span>
            <span className="text-xs text-slate-500">{plan.subscriptionPeriod}</span>
            <p className="text-xs text-slate-400 mt-1">{plan.subscriptionNote}</p>
          </button>
        ))}
      </div>

      {/* Cost breakdown for selected plan */}
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">What's Included</p>
        </div>
        <div className="divide-y divide-slate-100">
          {/* One-time fee row */}
          <div className="px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">One-Time Hardware Fee</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {hardwareItems.join(' · ')}
                </p>
              </div>
              <span className="text-base font-extrabold text-slate-900 whitespace-nowrap">$500</span>
            </div>
          </div>

          {/* Subscription row */}
          <div className="px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">
                  {activePlan.label} Subscription
                </p>
                <p className="text-xs text-slate-500">AI Hotel DeskBuddy · {activePlan.subscriptionNote}</p>
              </div>
              <span className="text-base font-extrabold text-teal-600 whitespace-nowrap">
                {activePlan.subscriptionPrice}<span className="text-xs font-normal text-slate-500">{activePlan.subscriptionPeriod}</span>
              </span>
            </div>
          </div>
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