import React, { useContext, useState } from 'react'
import './Navbar.css'
import logo from '../Assets/logo.png'
import cart_icon from '../Assets/cart_icon.png'
import { NavLink } from 'react-router-dom'
import { shopContext } from '../../context/ShopContext'
const Navbar = () => {
    const [menu, setMenu]=useState('shop');
    const {getTotalCartItems}=useContext(shopContext);
  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={logo} alt=''/>
            <p>Shopper</p>
        </div>
        <div className="nav-menu">
            <li onClick={()=>setMenu("shop")}><NavLink to="/" style={{textDecoration:'none', color: "#626262"}}>Shop</NavLink>{menu==="shop"?<hr/>: <></>}</li>
            <li onClick={()=>setMenu("men")}><NavLink to="/men" style={{textDecoration:'none', color: "#626262"}}>Men</NavLink>{menu==="men"?<hr/>: <></>}</li>
            <li onClick={()=>setMenu("women")}><NavLink to="/women" style={{textDecoration:'none', color: "#626262"}}>Women</NavLink>{menu==="women"?<hr/>: <></>}</li>
            <li onClick={()=>setMenu("kids")}><NavLink to="/kids" style={{textDecoration:'none', color: "#626262"}}>Kids</NavLink>{menu==="kids"?<hr/>: <></>}</li>
        </div>
        <div className="nav-login-cart">
            <NavLink to="/login"><button>Login</button></NavLink>
            <NavLink to="/cart"><img src={cart_icon} alt=''/></NavLink>
            <div className="nav-cart-count">
                {getTotalCartItems()}
            </div>
        </div>
    </div>
  )
}

export default Navbar