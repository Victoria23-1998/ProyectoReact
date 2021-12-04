import { Item } from "./Item"
import '../Products/item.css'
//Agrupador de items
export const ItemList =(props)=>{
   
    return(
       
        props.productos.map(product => (
            
            < Item key={product.id} item={{...product}}/>
     
        ))
       
   )
    
}