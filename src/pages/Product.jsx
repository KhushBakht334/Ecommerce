import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../components/Context/ShopContext';
import Breadcrum from '../components/Breadcum/Breadcum';
import { ProductDisplay } from '../components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../components/RelatedProducts/RelatedProducts';

export const Product = () => {
  const {all_product}=useAuth();
  const {productId}=useParams();
  console.log(productId);
  const product=all_product.find((e)=>e.id===Number(productId));
  console.log('Product:', product);
  return (
    <>
    <Breadcrum product={product}/>
    <ProductDisplay product={product}/>
    <DescriptionBox/>
    <RelatedProducts/>
    </>
  );
  
}
