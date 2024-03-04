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
    const [cartItems, setCartItems]=useState(getCartItems());
    console.log(cartItems);
    const shopProducts={all_product, cartItems};
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]+1
        }))
    }
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