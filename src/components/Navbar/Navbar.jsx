import React, { useState } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'

export const Navbar = () => {
    const [menu, setMenu]=useState("shop");
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>Shopper</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>setMenu("shop")}><Link to="/" style={{textDecoration:"none"}}>Shop</Link>{menu==="shop"? <hr/>:""}</li>
            <li onClick={()=>setMenu("men")}><Link to="/men" style={{textDecoration:"none"}}>Man</Link>{menu==="men"? <hr/>:""}</li>
            <li onClick={()=>setMenu("women")}><Link to="/women" style={{textDecoration:"none"}}>Women</Link>{menu==="women"? <hr/>:""}</li>
            <li onClick={()=>setMenu("kids")}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link>{menu==="kids"? <hr/>:""}</li>
        </ul>
        <div className="nav-login-cart">
            <button><Link to="/loginsignup" style={{textDecoration:"none"}}>Login</Link></button>
           <Link to="/cart"> <img src={cart} alt=''/></Link>
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}
