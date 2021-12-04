import {useState} from "react";
import "../ItemCount/itemCount.css"
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";

import { Link } from "react-router-dom";
export const ItemCount =({initial,stock,onAdd,product})=>{

    const [count, setCount] = useState(initial)
    const {addProduct}= useContext(CartContext)
    const [buttonType,setButton]= useState('button agregar');

    function Sumar(){
        if(count<stock){
            setCount(count+1)
        }
      
    }
    function Restar(){
        if(count !== 0){
            setCount(count-1)
        }
    }
    const cambiar=()=>{
        return(
           
           setButton('button terminar')
        )
    }
    const Agregar=()=>{

        onAdd(count)

        addProduct({...product,cantidad:count})
    } 

    const ambasFunciones=()=>{
        Agregar()
        cambiar()
       
    }
    
    const ButtonTerminar=()=>{
        return(
           <Link to={`/detalle/${product.id}/carrito`}> <button className="terminar" onClick={()=> console.log('hola')}>Terminar Compra</button></Link>
        )
    }
    
    const ButtonAgregar=({funciones})=>{
        return (
            <button onClick={funciones} className="agregar">Agregar al carrito</button>
        )
    }


    return(
        <>
            <div className="count">
                
                <button onClick={Sumar} className="sum">+</button>
                     {count}
                <button onClick={Restar} className="res">-</button>
                 {
                        buttonType === 'button agregar' ?
                    <ButtonAgregar funciones={ambasFunciones}/>
                        :
                        <ButtonTerminar/>
                    }
            </div>
        </>
    );
}
