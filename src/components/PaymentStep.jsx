import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Check, Tag } from 'lucide-react';
import { createCheckout } from '@/functions/createCheckout';

const DISCOUNT_CODES = {
  AAHOACON26: 'aahoacon26',
  BAHUBALI: 'bahubali',
};

const hardwareItems = 'Mobile Phone · Phone Stand · Preinstalled App · Activated eSIM · Shipping';

const getPlans = (discountType) => {
  if (discountType === 'bahubali') {
    return [
      {
        id: 'monthly',
        label: 'Monthly',
        badge: '3 Months Free',
        subscriptionPrice: '$200',
        subscriptionPeriod: '/mo',
        subscriptionNote: 'Free for 3 months, then $200/mo',
      },
      {
        id: 'annual',
        label: 'Annual',
        badge: 'Save $1,200',
        subscriptionPrice: '$2,100',
        subscriptionPeriod: '/yr',
        subscriptionNote: '~$175/mo · billed yearly',
      },
    ];
  }
  return [
    {
      id: 'monthly',
      label: 'Monthly',
      badge: null,
      subscriptionPrice: discountType === 'aahoacon26' ? '$200' : '$350',
      subscriptionPeriod: '/mo',
      subscriptionNote: 'Billed monthly',
    },
    {
      id: 'annual',
      label: 'Annual',
      badge: 'Save $1,200',
      subscriptionPrice: discountType === 'aahoacon26' ? '$2,100' : '$3,000',
      subscriptionPeriod: '/yr',
      subscriptionNote: discountType === 'aahoacon26' ? '~$175/mo · billed yearly' : '~$250/mo · billed yearly',
    },
  ];
};

export default function PaymentStep() {
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [isLoading, setIsLoading] = useState(false);
  const [discountCode, setDiscountCode] = useState('');
  const [discountApplied, setDiscountApplied] = useState(null); // null | 'aahoacon26' | 'bahubali'
  const [discountError, setDiscountError] = useState('');

  const handleApplyDiscount = () => {
    const code = discountCode.trim().toUpperCase();
    if (DISCOUNT_CODES[code]) {
      setDiscountApplied(DISCOUNT_CODES[code]);
      setDiscountError('');
    } else {
      setDiscountError('Invalid discount code.');
      setDiscountApplied(null);
    }
  };

  const plans = getPlans(discountApplied);
  const activePlan = plans.find(p => p.id === selectedPlan);
  const hardwarePrice = discountApplied === 'bahubali' ? 'Free' : discountApplied === 'aahoacon26' ? '$350' : '$500';

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
        <p className="text-sm text-slate-500">Choose your billing plan and proceed to secure checkout.</p>
      </div>

      {/* Discount code */}
      <div className="rounded-xl border border-slate-200 px-4 py-3 bg-slate-50">
        <p className="text-xs font-semibold text-slate-600 mb-2 flex items-center gap-1"><Tag className="w-3 h-3" /> Discount Code</p>
        <div className="flex gap-2">
          <Input
            value={discountCode}
            onChange={e => { setDiscountCode(e.target.value); setDiscountError(''); setDiscountApplied(null); }}
            placeholder="Enter code"
            className="bg-white border-slate-200 text-slate-900 uppercase text-sm"
          />
          <Button
            type="button"
            onClick={handleApplyDiscount}
            variant="outline"
            className="whitespace-nowrap border-teal-400 text-teal-600 hover:bg-teal-50"
          >
            Apply
          </Button>
        </div>
        {discountApplied === 'bahubali' && <p className="text-xs text-teal-600 font-semibold mt-1">✓ Bahubali deal applied! Free hardware + 3 months free trial.</p>}
        {discountApplied === 'aahoacon26' && <p className="text-xs text-teal-600 font-semibold mt-1">✓ Discount applied!</p>}
        {discountError && <p className="text-xs text-red-500 mt-1">{discountError}</p>}
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

      {/* Cost breakdown */}
      <div className="rounded-xl border border-slate-200 overflow-hidden">
        <div className="bg-slate-50 px-4 py-2 border-b border-slate-200">
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-widest">What's Included</p>
        </div>
        <div className="divide-y divide-slate-100">
          <div className="px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">One-Time Hardware Fee</p>
                <p className="text-xs text-slate-500 leading-relaxed">{hardwareItems}</p>
              </div>
              <div className="text-right whitespace-nowrap">
                {discountApplied && <p className="text-xs line-through text-slate-400">$500</p>}
                <span className={`text-base font-extrabold ${discountApplied === 'bahubali' ? 'text-teal-600' : 'text-slate-900'}`}>{hardwarePrice}</span>
              </div>
            </div>
          </div>
          <div className="px-4 py-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold text-slate-800 mb-1">{activePlan.label} Subscription</p>
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