import React, { useState } from 'react'
import './CSS/LoginSignup.css'
import { useAuth } from '../components/Context/ShopContext';

export const LoginSignup = () => {
  const {storeTokenInLS}=useAuth();
  const [state, setState]=useState("Login");
  const [formData, setFormData]=useState({
    username:"",
    email:"",
    password:""
  })

  const changeHandler=(e)=>{
    let name=e.target.name;
    let value=e.target.value;
    setFormData({
      ...formData,
      [name]:value
    })
  }
  const login=async()=>{
    const response=await fetch("http://localhost:2000/user/api/auth/login",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    if(response.ok){
      const data=await response.json();
      console.log("data saved", data);
      storeTokenInLS(data.token);
      alert("Logged in successfully");
      setFormData({
        email:"",
        password:""
      })
    }
  }
  const signup=async()=>{
    try {
      const response=await fetch("http://localhost:2000/user/api/auth/register",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(formData)
    })
    if(response.ok){
      const data=await response.json();
      console.log("registred successfully", data);
      storeTokenInLS(data.token);
      alert("Registered successfully");
      setFormData({
        username:"",
        email:"",
        password:""
      })
    }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
      <div className="loginsignup-fields">
        {state==="Signup"? <input type='text' name="username" placeholder='Your Name' value={formData.username} onChange={changeHandler}/> :<></>}
        <input type='email' name='email' placeholder='Your email' value={formData.email} onChange={changeHandler}/>
        <input type='password' name='password' placeholder='Your password' value={formData.password} onChange={changeHandler}/>
      </div>
      <button onClick={()=>{state==="Login"? login(): signup()}}>Continue</button>
      {state==="Signup"?
      <p className='loginsignup-login'>Already Have an account?<span onClick={()=>setState("Login")}> Login</span></p>
      :
      <p className='loginsignup-login'>Create an account?<span onClick={()=>setState("Signup")}> Click here</span></p>
      }
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id=''/>
        <p>By continuing, i agree to terms of use and privacy policy.</p>
      </div>
      </div>
    </div>
  )
}