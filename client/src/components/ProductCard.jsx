import React from 'react';
import { Link } from 'react-router-dom';
// import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { imgURL, name, price, oldPrice, id, type } = product
    return (

        <Link to={`/${type}/${id}`}>

            <div className='flex flex-1 flex-col w-full max-sm:w-full font-SFPro border-gray-light border-2 rounded-lg gap-1 py-4 px-2 hover:shadow-md text-center' >
                <img src={imgURL} alt={name} className='  rounded-sm' />

                <h3 className='mt-2 text-2xl  font-medium  text-black'>
                    {name}
                </h3>
                <p className='mt-2 font-medium text-lg  text-black'>
                    {price}
                </p>
                {oldPrice !== null ? (
                    <p className='mt-2 font-medium text-lg text-gray line-through'>
                        {oldPrice}
                    </p>
                ) : (
                    <p className='mt-2 font-medium text-lg text-gray'>
                        <br />
                    </p>

                )}
            </div>
        </Link>


    )
}

export default ProductCard;