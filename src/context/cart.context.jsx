import { createContext, useState,useEffect } from "react";
// se crea el contexto
export const CartContext= createContext();

export const CartProvider=({children})=>{
    const [cart,setcart]= useState([]);
    
    useEffect(() => {
        setLocalStorageCart()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cart])
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
    
    const vaciarCart=()=>{
        setcart([])
        localStorage.removeItem('cart')
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
    const setLocalStorageCart=()=>{
        localStorage.setItem('cart',JSON.stringify(cart))
        
    }
    const getLocalStorageCart=()=>{
        const cartLocal= JSON.parse(localStorage.getItem('cart'))
        if(cartLocal !==null){
            setcart(cartLocal)
        }else{
            console.log('no hay nada')
        }
        
    }
    
    return(
        <CartContext.Provider value={{cart,addProduct,deleteItem,vaciarCart,PriceTot,cantItem,updateItem,setcart,setLocalStorageCart,getLocalStorageCart}}>
            {children}
        </CartContext.Provider>
    )
}