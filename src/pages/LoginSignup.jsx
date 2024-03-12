import React, { useState } from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  const [state, setState]=useState("Login");
  const login=()=>{
    console.log("login");
  }
  const signup=()=>{
    console.log("signup");
  }
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>{state}</h1>
      <div className="loginsignup-fields">
        {state==="Signup"? <input type='text' placeholder='Your Name'/> :<></>}
        <input type='email' placeholder='Your email'/>
        <input type='password' placeholder='Your password'/>
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