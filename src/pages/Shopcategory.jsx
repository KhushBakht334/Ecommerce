import React from 'react'
import { useAuth } from '../components/Context/ShopContext'
import dropdown_icon from "../components/Assets/dropdown_icon.png"
import { Item } from '../components/Item/Item';
import "./CSS/ShopCategory.css"

export const ShopCategory = ({banner, category}) => {
  const {all_product}=useAuth();
  return (
    <>
    <div className="shop-category">
      <img className="shopcategory-banner" src={banner} alt=""/>
      <div className="shopcategory-indexsort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className="shopcategory-sort">
          Sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className="shopcategory-products">
        {all_product.map((e, id)=>{
          if(category===e.category){
            return <Item name={e.name} image={e.image} new_price={e.new_price} old_price={e.old_price} key={id} id={e.id}/> 
          }else{
            return null
          }
        })}
      </div>
      <div className="shopcategory-loadMore">
      Explore More
    </div>
    </div>
    </>
  )
}
