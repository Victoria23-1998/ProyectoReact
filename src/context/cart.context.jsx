import { createContext, useState } from "react";
// se crea el contexto
export const CartContext= createContext();

export const CartProvider=({children})=>{
    const [cart,setcart]= useState([]);

    const addProduct =(item)=>{
        //omitir dulicados
        let index = cart.findIndex(el => el.id === item.id);
        if(index === -1){
            setcart([...cart,{...item,cantidad: item.cantidad} ])
        }else{
            const qyt= cart[index].cantidad;
            cart.splice(index,1)
            setcart([...cart,{...item,cantidad: item.cantidad + qyt} ])
        }
        
    }
    console.log(cart)
    const vaciarCart=()=>{
        setcart([])
       
    }

    const deleteItem=(id)=>{
        let newCart = cart.filter(el => el.id !== id);
        setcart(newCart)
    }
    const updateItem=(updCart)=>{
        
        setcart(updCart)
       
    }
    const PriceTot=()=>{
        
        return cart.reduce((a, v)=>(a + (v.cantidad * parseInt(v.price))), 0) 
    }
    const cantItem = () =>{
        return cart.reduce( (acum, item)=> acum = acum + item.cantidad , 0)
    }
    
    return(
        <CartContext.Provider value={{cart,addProduct,deleteItem,vaciarCart,PriceTot,cantItem,updateItem,setcart}}>
            {children}
        </CartContext.Provider>
    )
}