/* eslint-disable react/prop-types */
import { createContext,  useState } from "react";
import { food_list } from "../assets/assets";
export const StoreContex=createContext(null);
const StoreContextProvider=(props)=>{
    const [cartItems,setCartItems]=useState({});

    const addtocart=(itemId)=>{
        if(!cartItems[itemId]){
            setCartItems((priv)=>({...priv,[itemId]:1}))
        }
        else{
            setCartItems((priv)=>({...priv,[itemId]:priv[itemId]+1}))
        }

    }

    const removefromCart=(itemId)=>{
        setCartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))

    }
    const gettotal=()=>{
        let total=0;
        for(const item in cartItems){
            if(cartItems[item]>0){
                let iteninfo=food_list.find((e)=>e._id===item);
                total += iteninfo.price * cartItems[item];

            }
           
        }
        return total;

    }
    
    const contexValue={
        food_list,
        cartItems,
        setCartItems,
        addtocart,
        removefromCart,
        gettotal

      
    }
    return(
        <StoreContex.Provider value={contexValue}>
            {props.children}
        </StoreContex.Provider>
            
    )

}
export default StoreContextProvider;
