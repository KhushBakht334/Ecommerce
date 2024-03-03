import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
      <div className="loginsignup-fields">
        <input type='text' placeholder='Your Name'/>
        <input type='email' placeholder='Your email'/>
        <input type='password' placeholder='Your password'/>
      </div>
      <button>Continue</button>
      <p className='loginsignup-login'>Already Have an account?<span> Login</span></p>
      <div className="loginsignup-agree">
        <input type='checkbox' name='' id=''/>
        <p>By continuing, i agree to terms of use and privacy policy.</p>
      </div>
      </div>
    </div>
  )
}