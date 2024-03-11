import React, { useState } from 'react'
import "./AddProduct.css"
import upload_area from "../../assets/upload_area.svg"

const AddProduct = () => {
  const [image,setImage]=useState(false);
  const [productDetails, setProductDetails]=useState({
    name:"",
    category:"women",
    old_price:"",
    new_price:"",
    image:""
  })
  const changeHandler=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setProductDetails({
      ...productDetails,
      [name]:value
    })
  }
  const imageHandler=(e)=>{
    setImage(e.target.files[0]);
  }
  const addMyProduct=async(e)=>{
    e.preventDefault();
    let formData=new FormData();
    formData.append("product", image);
    try {
      let response=await fetch("http://localhost:2000/api/auth/upload", {
        method:"POST",
        headers:{
          Accept:'application/json'
        },
        body:formData,
      })
      const data=await response.json();
      let responseData= data;
      console.log(responseData);
      if(responseData.success){
        productDetails.image=responseData.image_url;
        console.log(productDetails);
        let response=await fetch("http://localhost:2000/api/auth/addproduct",{
          method:"POST",
          headers:{
            // Accept:'application/json',
            "Content-Type":"application/json"
          },
          body:JSON.stringify(productDetails)
        })
        let data=await response.json();
        if(data.success){
          alert("Product added");
        }else{
          alert("Not added");
        }
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='add-product'>
        <div className="addproduct-itemfield">
          <p>Product Title</p>
          <input type='text' name='name' placeholder='type something' value={productDetails.name} onChange={changeHandler}/>
        </div>
        <div className="addproduct-price">
          <div className="addproduct-itemfield">
            <p>Price</p>
            <input type='text' name='old_price' placeholder='type here' value={productDetails.old_price} onChange={changeHandler}/>
          </div>
          <div className="addproduct-itemfield">
            <p>Offer Price</p>
            <input type='text' name='new_price' placeholder='type here' value={productDetails.new_price} onChange={changeHandler}/>
          </div>
        </div>
        <div className="addproduct-itemfield">
          <p>Product Category</p>
          <select name='category' className='add-product-selector' value={productDetails.category} onChange={changeHandler}>
            <option value="women">Women</option>
            <option value="men">Men</option>
            <option  value="kids">Kids</option>
          </select>
        </div>
        <div className="addproduct-itemfield">
          <label htmlFor='file-input'>
            <img src={image? URL.createObjectURL(image): upload_area} alt='' className='addproduct-thumbnail-img'/>
          </label>
          <input onClick={imageHandler} type='file' name='image' id='file-input' hidden/>
        </div>
        <button className='addproduct-btn' onClick={addMyProduct}>ADD</button>
    </div>
  )
}

export default AddProduct