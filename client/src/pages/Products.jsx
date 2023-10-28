import React from 'react'
import ProductList from '../components/ProductList';
import MacbookPromotion from '../components/MacbookPromotion';
import IpadPromotion from '../components/IpadPromotion';
import {useParams} from 'react-router-dom';

const Products = () => {

  const { id } = useParams();

  return (
    <div className="bg-white">
      {id ==='1' &&    <MacbookPromotion/> }
      {id ==='2' &&    <IpadPromotion/> }
    
        <ProductList/>
    </div>
  )
}

export default Products