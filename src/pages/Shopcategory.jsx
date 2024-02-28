import React, { useContext } from 'react'
import './CSS/Shopcategory.css' 
import { shopContext } from '../context/ShopContext'
import dropdown_icon from '../components/Assets/dropdown_icon.png'
import Item from '../components/Item/Item'
const Shopcategory = (props) => {
  const {all_product}=useContext(shopContext);
  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt=''/>
    <div className="shopcategory-indexSort">
      <p>
        <span>Showing 1-12</span> out of 36 Products
      </p>
    </div>
    <div className="shopcategory-sort">
      Sort By <img src={dropdown_icon} alt=''/>
    </div>
    <div className="shopcategory-products">
      {
        all_product.map((item, i)=>{
          if(props.category===item.category){
            return <Item key={i} id={item.id} name={item.name} old_price={item.old_price} new_price={item.new_price} 
          image={item.image}/>
          }else{
            return null;
          }
        })
      }
    </div>
    <div className="shopcategory-loadMore">
      Explore More
    </div>
    </div>
  )
}

export default Shopcategory