import Stripe from "stripe";

const stripe = new Stripe(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body)
    try {
        const params = 
        {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'auto',
            shipping_options: [
                {shipping_rate:'shr_1NObHfD0E2os4wPuVUQVo0xH'},
                {shipping_rate:'shr_1NObH8D0E2os4wPuibBzLmZC'}  
            ],
            line_items: [
              {
                price_data: {
                  currency: 'usd',
                  product_data: {
                    name: "test tee"

                  },
                  unit_amount: 10 * 100,
                },
                adjustable_quantity: {
                  enabled: true,
                  minimum: 1
                },
                quantity: 1
              },
            ],
            success_url: `${req.headers.origin}/paymentSuccess`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
        }

      // Create Checkout Sessions from body params.
      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}