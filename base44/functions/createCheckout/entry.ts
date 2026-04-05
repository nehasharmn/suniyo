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

    // Monthly: $350/mo recurring + $500 device one-time
    // Annual: $3000/yr recurring + $500 device one-time
    const lineItems = plan === 'monthly'
      ? [
          { price: 'price_1TIuzgRVSiGowRJkVJ7P4A7g', quantity: 1 }, // $350/mo
          { price: 'price_1TIuzfRVSiGowRJkmpFu8ZR4', quantity: 1 }, // $500 device
        ]
      : [
          { price: 'price_1TIuzgRVSiGowRJkqwo9TCzo', quantity: 1 }, // $3000/yr
          { price: 'price_1TIuzfRVSiGowRJkcH3onQ3X', quantity: 1 }, // $500 device
        ];

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: lineItems,
      mode: 'subscription',
      success_url: successUrl,
      cancel_url: cancelUrl,
      metadata: {
        base44_app_id: Deno.env.get('BASE44_APP_ID'),
        plan,
      },
    });

    return Response.json({ url: session.url });
  } catch (error) {
    console.error('Checkout error:', error);
    return Response.json({ error: error.message }, { status: 500 });
  }
});