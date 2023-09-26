import React from 'react'
import ProductCard from './ProductCard';
// import { Macbook } from '../constants';

const ProductList = (props) => {
    return (

        // <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 '>
        //     {props.map((product) => (
        //         <ProductCard key={product.name} {...product} />
        //     ))}
        // </div>
        <div className='mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 sm:gap-6 gap-14 '>
            {props.products.map((product) => (
                <ProductCard
                    key={product.name}
                    imgURL={product.imgURL}
                    name={product.name}
                    price={product.price}
                    oldPrice={product.oldPrice}
                    link={product.link}
                />
            ))}
        </div>

    );
}

export default ProductList