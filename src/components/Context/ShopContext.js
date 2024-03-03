import { createContext, useContext } from "react";
import all_product from "../Assets/all_product"
export const ShopContext=createContext();

export const ShopProvider=({children})=>{
    const shopProducts=all_product;
    return <ShopContext.Provider value={{shopProducts}}>
        {children}
    </ShopContext.Provider>
}

export const useAuth=()=>{
    const authContextValue=useContext(ShopContext);
    return authContextValue;
}