import React, { useEffect, useState } from 'react'
import  "./ListProduct.css"
import cross_icon from "../../assets/cross_icon.png"

const ListProduct = () => {
  const [allProducts, setAllProducts]=useState([]);
  const fetchAllProducts=async()=>{
    const response=await fetch("http://localhost:2000/api/auth/getallproducts",{
      method:"GET"
    })
    const data=await response.json();
    setAllProducts(data);
  }
  useEffect(()=>{
    fetchAllProducts();
  },[])
  const removeProduct=async(id)=>{
    const response=await fetch("http://localhost:2000/api/auth/removeproduct",{
      method:"POST",
      headers:{
        'Content-Type':"application/json"
      },
      body:JSON.stringify({id:id})
    })
    const data=await response.json();
    console.log("data", data);
    if(data.success){
      alert("Product deleted");
    }else{
      alert("Product not deleted")
    }
    fetchAllProducts();
  }
  return (
    <div className='list-product'>
        <h1>All Products List</h1>
        <div className="listproduct-format-main">
          <p>Products</p>
          <p>Title</p>
          <p>Old Price</p>
          <p>New price</p>
          <p>Category</p>
          <p>Remove</p>
        </div>
        <div className="listproduct-allproducts">
          <hr/>
          {allProducts.map((e, i)=>{
            return <>
             <div key={i} className="listproduct-format-main listproduct-format">
              <img src={e.image} alt='' className='listproduct-product-icon'/>
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <p>${e.old_price}</p>
              <p>{e.category}</p>
              <img className='listproduct-remove-icon'src={cross_icon} alt='' onClick={()=>removeProduct(e.id)}/>
            </div>
            <hr/>
            </>
          })}
        </div>
    </div>
  )
}

export default ListProduct