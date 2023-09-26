import React from 'react'
import { useParams } from 'react-router-dom'
import { Iphone, Macbook } from '../constants';

const ProductPage = () => {
    const { id, type } = useParams();
    const data = {
        Macbook: Macbook,
        Iphone: Iphone
    }
    const product = data[type].find(item => item.id === id)
    return (
        <div>
            {id}
            {type}

        </div>
    )
}

export default ProductPage