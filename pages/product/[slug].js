import React from 'react';
import getStripe from '@/lib/getStripe';

import { client, urlFor } from '@/lib/client';

// 1:43

const Product = ({ product }) => {
  const { image, name, details, price, stock } = product;

  const handleCheckout = async () => {
    const stripe = await getStripe();

    const response = await fetch('/api/stripe',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({})
      });

    if (response.statusCode === 500) return;

    const data = await response.json();

    stripe.redirectToCheckout({ sessionId: data.id });
  }


  return (
    <div className='border border-red-300'>
      --
      <div className='border border-red-300'>
        {name}
        <div className='border border-red-300'>
          {details}
          <div>
            <img src={urlFor(image && image[0])} />
          </div>
        </div>
        {"$" + price + ", Only " + stock + " Left"}
      </div>
      <button
        className='bg-green-300'
        onClick={handleCheckout}
      >
        Buy Now
      </button>
    </div>
  )
}

export const getStaticPaths = async () => {
  const paths = []
  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == "${slug}"][0]`;
  const product = await client.fetch(query);

  return {
    props: { product }
  }
}

export default Product