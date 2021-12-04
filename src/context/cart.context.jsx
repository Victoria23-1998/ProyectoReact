import { createContext, useState } from "react";
// se crea el contexto
export const CartContext= createContext();

export const CartProvider=({children})=>{
    const [cart,setcart]= useState([]);

    const addProduct =(item)=>{
        //omitir dulicados
        let index = cart.findIndex(el => el.id === item.id);
        if(index === -1){
            setcart([...cart, item])
        }else{
            setcart(cart)
        }
        
    }

    /*const vaciarCart=()=>{
        setcart([])
    }*/
    return(
        <CartContext.Provider value={{cart,addProduct}}>
            {children}
        </CartContext.Provider>
    )
}