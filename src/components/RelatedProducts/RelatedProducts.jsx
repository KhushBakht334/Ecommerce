import React from 'react'
import './RelatedProducts.css'
import data_product from '../Assets/data'
import { Item } from '../Item/Item'

const RelatedProducts = () => {
  return (
    <div className='relatedproducts'>
        <h1>Related Products</h1>
        <hr/>
        <div className="relatedproducts-item">
            {data_product.map((e, i)=>{
                return <Item  key={i} id={e.id} name={e.name} old_price={e.old_price} new_price={e.new_price} 
                image={e.image}/>
            })}
        </div>
    </div>
  )
}

export default RelatedProducts