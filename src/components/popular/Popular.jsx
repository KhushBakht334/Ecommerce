import React, { useEffect, useState } from 'react'
import "./Popular.css"
import { Item } from '../Item/Item'

export const Popular = () => {
  const [data_product,setData_product]=useState([]);

  const fetchData=async()=>{
    const response=await fetch("http://localhost:2000/api/auth/popularinwomen",{
      method:"GET",
    })
    const data=await response.json();
    setData_product(data);
  }
  useEffect(()=>{
    fetchData();
  },[])
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
