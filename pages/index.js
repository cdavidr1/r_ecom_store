import { Product, FooterBanner, HeroBanner } from '@/components';
import { client } from '@/lib/client';

import { urlFor } from '@/lib/client';
import Link from 'next/link';

export default function Home({ products }) {

  return (
    <main
      className={`min-h-screen`}>
      <HeroBanner />

      <div>
        <h1 className='font-extrabold text-3xl'>RARE Advanced Clothing For a Conscious Society</h1>
        <br />
        <h2 className='font-medium text-2xl text-center'>Product Selection</h2>
      </div>
      
      <div className='flex flex-row flex-wrap'>
        {products?.map(
          (product, key) => (
            <div key={key} className='max-w-sm text-center w-1/4'>
              <Link href={`/product/${product.slug.current}`}>
                <button className='btn bg-slate-700' >
                  Buy {product.name}
                </button>
              </Link>
              <img src={urlFor(product.image[0])} className='mx-auto' />
            </div>
          ))}
        {products?.map(
          (product, key) => (
            <div key={key} className='max-w-sm text-center w-1/4'>
              <Link href={`/product/${product.slug.current}`}>
                <button className='btn bg-slate-700' >
                  Buy {product.name}
                </button>
              </Link>
              <img src={urlFor(product.image[0])} className='mx-auto' />
            </div>
          ))}
          {products?.map(
          (product, key) => (
            <div key={key} className='max-w-sm text-center w-1/4'>
              <Link href={`/product/${product.slug.current}`}>
                <button className='btn bg-slate-700' >
                  Buy {product.name}
                </button>
              </Link>
              <img src={urlFor(product.image[0])} className='mx-auto' />
            </div>
          ))}
          {products?.map(
          (product, key) => (
            <div key={key} className='max-w-sm text-center w-1/4'>
              <Link href={`/product/${product.slug.current}`}>
                <button className='btn bg-slate-700' >
                  Buy {product.name}
                </button>
              </Link>
              <img src={urlFor(product.image[0])} className='mx-auto' />
            </div>
          ))}
          {products?.map(
          (product, key) => (
            <div key={key} className='max-w-sm text-center w-1/4'>
              <Link href={`/product/${product.slug.current}`}>
                <button className='btn bg-slate-700' >
                  Buy {product.name}
                </button>
              </Link>
              <img src={urlFor(product.image[0])} className='mx-auto' />
            </div>
          ))}

      </div>


      <FooterBanner />
    </main>
  )
}

export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  return {
    props: { products }
  }
}