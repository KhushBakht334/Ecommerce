import { useEffect } from "react";
import { createContext, useContext, useState } from "react";
export const ShopContext=createContext();

const getCartItems=()=>{
    let cart={};
    for(let index=0; index<300+1; index++){
        cart[index]=0;
    }
    return cart;
}
export const ShopProvider=({children})=>{
    const [all_product, setAll_product]=useState([]);
    const [token, setToken]=useState(localStorage.getItem("token"));
    const [cartItems, setCartItems]=useState(getCartItems());
    const isLoggedIn=token;
    console.log(cartItems);
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('http://localhost:2000/api/auth/getallproducts', {
                method: "GET"
            });
            const data = await response.json();
            setAll_product(data);
        }
        fetchData();
    }, []);
    
    const addToCart=(itemId)=>{
        setCartItems((prev)=>({
            ...prev,
            [itemId]:prev[itemId]+1
        })
        )
        if(isLoggedIn){
            fetch("http://localhost:2000/api/auth/addtocart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                   "Authorization":`${token}`,
                   'Content-Type':"application/json"
                },
                body:JSON.stringify({"itemId":itemId})
            })
            .then((response)=>response.json())
            .then((data)=>console.log("data",data))
        }
    }
    const storeTokenInLS=(token)=>{
        setToken(token);
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
    const shopProducts={all_product, cartItems,removeFromCart,addToCart,getTotalCartAmount,getTotalCartItems,storeTokenInLS,logoutUser,isLoggedIn};
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