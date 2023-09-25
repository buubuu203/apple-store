import React from 'react'
import ProductCard from './ProductCard';
import { Macbook } from '../constants';

const ProductList = () => {
    return (
        <section id='products' className='max-container max-sm:mt-12 font-SFPro p-2 text-center my-3'>
            <div className='flex flex-col justify-start gap-5 mt-2 pt-5 border-t-neutral-200'>
                <h2 className='text-5xl font-medium '>
                    Macbook - iMac
                </h2>
                <p className=' mt-2 text-center text-slate-gray'>
                    Experience top-notch quality and style with our sought-after
                    selections. Discover a world of comfort, design, and value
                </p>
            </div>

            <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 '>
                {Macbook.map((product) => (
                    <ProductCard key={product.name} {...product} />
                ))}
            </div>
        </section>
    );
}

export default ProductList