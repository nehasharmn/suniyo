import React from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, CreditCard } from 'lucide-react';

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
        <p className="text-sm text-slate-500">You'll be taken to a secure Stripe checkout to finalize your plan.</p>
      </div>

      <div className="bg-slate-50 rounded-xl p-4 border border-slate-100">
        <p className="text-xs text-slate-500 flex items-start gap-2">
          <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
          You'll be redirected to a secure Stripe checkout page to complete your payment. No card info is stored on our servers.
        </p>
      </div>

      <Button
        onClick={handleCheckout}
        className="w-full py-3 font-semibold bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-md border-0 transition-all duration-300"
      >
        <CreditCard className="mr-2 w-4 h-4" /> Proceed to Payment
      </Button>
    </div>
  );
}