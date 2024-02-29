import React from 'react'
import "./Popular.css"
import data_product from '../Assets/data'
import { Item } from '../Item/Item'

export const Popular = () => {
  return (
    <div className='popular'>
        <h1>Popular in women</h1>
        <hr/>
        <div className="popular-item">
            {data_product.map((e, i)=>{
                return <Item key={i} name={e.name} image={e.image} id={e.id} old_price={e.old_price} new_price={e.new_price}/>
            })}
        </div>
    </div>
  )
}
