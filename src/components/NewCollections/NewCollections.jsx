import React, { useEffect, useState } from 'react'
import "./NewCollections.css"
import { Item } from '../Item/Item'

export const NewCollections = () => {
  const [new_collections, setNew_collections]=useState([]);

  const fetchData=async()=>{
    const response=await fetch("http://localhost:2000/api/auth/newcollections",{
      method:"GET",
    })
    const data=await response.json();
    setNew_collections(data);
  }
  useEffect(()=>{
    fetchData();
  },[])
  return (
    <>
    <div className="new-collections">
    <h1>New Collections</h1>
        <hr/>
        <div className="collections">
            {
                new_collections.map((e, i)=>{
                    return <Item key={i} name={e.name} image={e.image} id={e.id} old_price={e.old_price} new_price={e.new_price}/>
                })
            }
        </div>
    </div>
    </>
  )
}
