import React from 'react'
import "./NewCollections.css"
import new_collections from "../Assets/new_collections"
import { Item } from '../Item/Item'

export const NewCollections = () => {
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
