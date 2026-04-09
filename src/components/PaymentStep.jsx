import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { CreditCard, Check, Tag } from 'lucide-react';

const PAYMENT_LINK = 'https://buy.stripe.com/aFadRadVZcMab3L5Ai0co01';

const DISCOUNT_CODES = {
  AAHOACON26: 'aahoacon26',
  BAHUBALI26: 'bahubali',
};

const hardwareItems = 'Mobile Phone · Phone Stand · Preinstalled App · Activated eSIM · Shipping';

const getPlans = (discountType, numDevices = 1) => {
   const multiplier = numDevices || 1;
   if (discountType === 'bahubali') {
     return [
       {
         id: 'monthly',
         label: 'Monthly',
         badge: '3 Months Free',
         subscriptionPrice: `$${200 * multiplier}`,
         subscriptionPeriod: '/mo',
         subscriptionNote: `Free for 3 months, then $${200 * multiplier}/mo`,
       },
       {
         id: 'annual',
         label: 'Annual',
         badge: 'Save $1,200',
         subscriptionPrice: `$${2100 * multiplier}`,
         subscriptionPeriod: '/yr',
         subscriptionNote: `~$${Math.round(1750 * multiplier / 10) * 10}/mo · billed yearly`,
       },
     ];
   }
   return [
     {
       id: 'monthly',
       label: 'Monthly',
       badge: null,
       subscriptionPrice: discountType === 'aahoacon26' ? `$${200 * multiplier}` : `$${350 * multiplier}`,
       subscriptionPeriod: '/mo',
       subscriptionNote: 'Billed monthly',
     },
     {
       id: 'annual',
       label: 'Annual',
       badge: 'Save $1,200',
       subscriptionPrice: discountType === 'aahoacon26' ? `$${2100 * multiplier}` : `$${3000 * multiplier}`,
       subscriptionPeriod: '/yr',
       subscriptionNote: discountType === 'aahoacon26' ? `~$${Math.round(1750 * multiplier / 10) * 10}/mo · billed yearly` : `~$${Math.round(2500 * multiplier / 10) * 10}/mo · billed yearly`,
     },
   ];
 };

export default function PaymentStep({ formData }) {
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

  const numDevices = formData?.num_devices || 1;
  const plans = getPlans(discountApplied, numDevices);
  const activePlan = plans.find(p => p.id === selectedPlan);
  const baseHardware = discountApplied === 'bahubali' ? 1 : discountApplied === 'aahoacon26' ? 350 : 500;
  const hardwarePrice = `$${baseHardware * numDevices}`;

  const handleCheckout = () => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      alert('Checkout is only available from the published app. Please open the app directly.');
      return;
    }
    window.location.href = PAYMENT_LINK;
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
        {discountApplied === 'bahubali' && <p className="text-xs text-teal-600 font-semibold mt-1">✓ Deal applied! Pay $1 to start your pilot — 3 months free, then $200/mo.</p>}
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
                <p className="text-sm font-semibold text-slate-800 mb-1">One-Time Hardware Fee {numDevices > 1 ? `(${numDevices} devices)` : ''}</p>
                <p className="text-xs text-slate-500 leading-relaxed">{hardwareItems} {numDevices > 1 ? `× ${numDevices}` : ''}</p>
              </div>
              <div className="text-right whitespace-nowrap">
                {discountApplied && <p className="text-xs line-through text-slate-400">${500 * numDevices}</p>}
                <span className="text-base font-extrabold text-teal-600">{hardwarePrice}</span>
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
          <div className="px-4 py-4 bg-slate-50">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-bold text-slate-900">Total Due Today</p>
                <p className="text-xs text-slate-500">Hardware + first {activePlan.id === 'annual' ? 'year' : 'month'} subscription</p>
              </div>
              <span className="text-xl font-extrabold text-slate-900 whitespace-nowrap">
                ${(baseHardware * numDevices) + parseInt(activePlan.subscriptionPrice.replace(/[^0-9]/g, ''))}
              </span>
            </div>
          </div>
        </div>
      </div>

      <Button
        onClick={handleCheckout}
        className="w-full py-3 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md border-0 transition-all duration-300"
      >
        <CreditCard className="mr-2 w-4 h-4" />
        {discountApplied === 'bahubali' ? 'Pay $1 to Start the Pilot' : 'Proceed to Secure Checkout'}
      </Button>

      <p className="text-center text-xs text-slate-400">Powered by Stripe · No card info stored on our servers</p>
    </div>
  );
}