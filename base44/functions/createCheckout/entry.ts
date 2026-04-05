import Stripe from 'npm:stripe@14.21.0';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY'));

Deno.serve(async (req) => {
  try {
    const { plan, successUrl, cancelUrl, discountCode } = await req.json();

    // Bahubali26: $1 one-time pilot start fee
    if (discountCode === 'bahubali') {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          { price: 'price_1TIw1aRVSiGowRJkKaSU7SGQ', quantity: 1 }, // $1 pilot start fee
        ],
        mode: 'payment',
        success_url: successUrl,
        cancel_url: cancelUrl,
        metadata: {
          base44_app_id: Deno.env.get('BASE44_APP_ID'),
          plan,
          discount_code: discountCode,
        },
      });
      return Response.json({ url: session.url });
    }

    // AAHOACON26: $200/mo or $2100/yr + $350 hardware (one-time on first invoice)
    // No discount:  $350/mo or $3000/yr + $500 hardware (one-time on first invoice)
    const isAahoa = discountCode === 'aahoacon26';

    const subscriptionLineItem = isAahoa
      ? {
          price_data: {
            currency: 'usd',
            product_data: { name: 'Suniyo Monthly Subscription (AAHOA Rate)', description: 'AI Hotel DeskBuddy · AAHOA member discount' },
            unit_amount: plan === 'monthly' ? 20000 : 210000,
            recurring: plan === 'monthly' ? { interval: 'month' } : { interval: 'year' },
          },
          quantity: 1,
        }
      : {
          price: plan === 'monthly'
            ? 'price_1TIuzgRVSiGowRJkVJ7P4A7g'   // $350/mo
            : 'price_1TIuzgRVSiGowRJkqwo9TCzo',   // $3000/yr
          quantity: 1,
        };

    const hardwareAmount = isAahoa ? 35000 : 50000; // $350 or $500 in cents

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [subscriptionLineItem],
      mode: 'subscription',
      subscription_data: {
        add_invoice_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: 'One-Time Hardware Fee',
                description: 'Mobile Phone · Phone Stand · Preinstalled App · Activated eSIM · Shipping',
              },
              unit_amount: hardwareAmount,
            },
            quantity: 1,
          },
        ],
      },
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
        plan,
        discount_code: discountCode || 'none',
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});