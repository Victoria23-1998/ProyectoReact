import {useState} from "react";
import "../ItemCount/itemCount.css"
export const ItemCount =({initial,stock,onAdd})=>{
    const [count, setCount] = useState(initial)
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
    function Agregar(){
        onAdd(count)
    } 
    return(
        <>
            <div className="count">
                
                <button onClick={Sumar} className="sum">+</button>
                     {count}
                <button onClick={Restar} className="res">-</button>
                <button onClick={Agregar} className="agregar">Agregar al carrito</button>
            </div>
        </>
    );
}