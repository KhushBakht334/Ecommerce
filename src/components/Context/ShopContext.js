import { createContext, useContext, useState } from "react";
import all_product from "../Assets/all_product"
export const ShopContext=createContext();

const getCartItems=()=>{
    let cart={};
    for(let index=0; index<all_product.length; index++){
        cart[index]=0;
    }
    return cart;
}
export const ShopProvider=({children})=>{
    const [token, setToken]=useState(localStorage.getItem("token"));
    const [cartItems, setCartItems]=useState(getCartItems());
    console.log(cartItems);
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]+1
        }))
    }
    const storeTokenInLS=(token)=>{
        return localStorage.setItem("token", token)
    }
    const logoutUser=()=>{
        setToken("");
        return localStorage.removeItem("token");
    }
    const removeFromCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]-1
        }))
    }
    const getTotalCartAmount=()=>{
        let totalAmount=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let itemInfo=all_product.find((e)=>e.id===Number(item));
            totalAmount+= itemInfo.new_price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const getTotalCartItems=()=>{
        let totalItem=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                totalItem+=cartItems[item];
            }
        }
        return totalItem;
    }
    const shopProducts={all_product, cartItems,removeFromCart,addToCart,getTotalCartAmount,getTotalCartItems,storeTokenInLS,logoutUser};
    return <ShopContext.Provider value={shopProducts}>
        {children}
    </ShopContext.Provider>
}

export const useAuth=()=>{
    const authContextValue=useContext(ShopContext);
    return authContextValue;
}
//key values= product Id
//product value= quantity of product