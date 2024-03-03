import React from 'react'
import { useParams } from 'react-router-dom'
import { useAuth } from '../components/Context/ShopContext';
import arrow_icon from "../components/Assets/arrow.png"

export const Product = () => {
  const {shopProducts}=useAuth();
  const {productId}=useParams();
  const product=shopProducts.find((e)=>e.id===Number(productId))
  return (
   <>
   <div className="breadcrum">
    HOME <img src={arrow_icon} alt=''/> SHOP <img src={arrow_icon} alt=''/> {product.name}
   </div>
    </>
  )
}
