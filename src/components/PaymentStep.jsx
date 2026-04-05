import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, CreditCard, Loader2 } from 'lucide-react';
import { createCheckout } from '@/functions/createCheckout';

const plans = [
  {
    id: 'monthly',
    label: 'Monthly',
    price: '$350',
    period: '/mo',
    device: '+ $500 device (one-time)',
    total: '$850 first month, then $350/mo',
    highlight: false,
  },
  {
    id: 'annual',
    label: 'Annual',
    price: '$3,000',
    period: '/yr',
    device: '+ $500 device (one-time)',
    total: '$3,500 first year, then $3,000/yr',
    highlight: true,
    savings: 'Save $1,200/yr',
  },
];

export default function PaymentStep({ formData }) {
  const [selectedPlan, setSelectedPlan] = useState('annual');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheckout = async () => {
    const isInIframe = window.self !== window.top;
    if (isInIframe) {
      alert('Checkout is only available from the published app. Please open the app directly.');
      return;
    }

    setIsLoading(true);
    setError('');
    try {
      const successUrl = `${window.location.origin}/Subscribe?success=true`;
      const cancelUrl = `${window.location.origin}/Subscribe`;
      const res = await createCheckout({ plan: selectedPlan, successUrl, cancelUrl });
      if (res.data?.url) {
        window.location.href = res.data.url;
      } else {
        setError('Could not start checkout. Please try again.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h3 className="text-xl font-bold text-slate-800 mb-1">Choose Your Plan</h3>
        <p className="text-sm text-slate-500">All plans include the AI DeskBuddy device + full platform access</p>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {plans.map((plan) => (
          <button
            key={plan.id}
            type="button"
            onClick={() => setSelectedPlan(plan.id)}
            className={`relative text-left rounded-2xl border-2 p-5 transition-all duration-200 w-full ${
              selectedPlan === plan.id
                ? 'border-teal-500 bg-teal-50 shadow-md'
                : 'border-slate-200 bg-white hover:border-slate-300'
            }`}
          >
            {plan.savings && (
              <span className="absolute top-3 right-3 bg-teal-500 text-white text-xs font-semibold px-2 py-0.5 rounded-full">
                {plan.savings}
              </span>
            )}
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${
                selectedPlan === plan.id ? 'border-teal-500' : 'border-slate-300'
              }`}>
                {selectedPlan === plan.id && <div className="w-2 h-2 rounded-full bg-teal-500" />}
              </div>
              <span className="font-semibold text-slate-700">{plan.label}</span>
            </div>
            <div className="ml-6">
              <div className="flex items-baseline gap-1">
                <span className="text-2xl font-extrabold text-slate-900">{plan.price}</span>
                <span className="text-slate-500 text-sm">{plan.period}</span>
              </div>
              <p className="text-xs text-slate-400 mt-0.5">{plan.device}</p>
              <p className="text-xs text-teal-600 font-medium mt-2">{plan.total}</p>
            </div>
          </button>
        ))}
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <p className="text-xs text-slate-500 flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
          You'll be redirected to a secure Stripe checkout page to complete your payment. No card info is stored on our servers.
        </p>
      </div>

      {error && <p className="text-sm text-red-500 text-center">{error}</p>}

      <Button
        onClick={handleCheckout}
        disabled={isLoading}
        className="w-full py-3 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md border-0 transition-all duration-300"
      >
        {isLoading ? (
          <><Loader2 className="mr-2 w-4 h-4 animate-spin" /> Redirecting to checkout...</>
        ) : (
          <><CreditCard className="mr-2 w-4 h-4" /> Proceed to Payment</>
        )}
      </Button>
    </div>
  );
}