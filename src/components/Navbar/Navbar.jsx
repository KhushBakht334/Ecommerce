import React, { useState, useRef } from 'react'
import "./Navbar.css"
import logo from '../Assets/logo.png'
import cart from '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/ShopContext'
import nav_icon from "../Assets/nav_dropdown.jpg"

export const Navbar = () => {
    const dropDown_toggle=(e)=>{
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open')
    }
    const {getTotalCartItems, isLoggedIn}=useAuth();
    const [menu, setMenu]=useState("shop");
    const menuRef=useRef();
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>Shopper</p>
        </div>
        <img className='nav-dropdown' src={nav_icon} alt='' onClick={dropDown_toggle}/>
        <ul ref={menuRef} className="nav-menu">
            <li onClick={()=>setMenu("shop")}><Link to="/" style={{textDecoration:"none"}}>Shop</Link>{menu==="shop"? <hr/>:""}</li>
            <li onClick={()=>setMenu("men")}><Link to="/men" style={{textDecoration:"none"}}>Man</Link>{menu==="men"? <hr/>:""}</li>
            <li onClick={()=>setMenu("women")}><Link to="/women" style={{textDecoration:"none"}}>Women</Link>{menu==="women"? <hr/>:""}</li>
            <li onClick={()=>setMenu("kids")}><Link to="/kids" style={{textDecoration:"none"}}>Kids</Link>{menu==="kids"? <hr/>:""}</li>
        </ul>
        <div className="nav-login-cart">
            {isLoggedIn? 
            <button><Link to="/logout" style={{textDecoration:"none"}}>Logout</Link></button>
            :
            <button><Link to="/loginsignup" style={{textDecoration:"none"}}>Login</Link></button>
            }
           <Link to="/cart"> <img src={cart} alt=''/></Link>
            <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}
