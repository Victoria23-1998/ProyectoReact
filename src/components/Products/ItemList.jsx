import { Item } from "./Item"
import '../Products/item.css'
//Agrupador de items
export const ItemList =(props)=>{
   
    return(
       
        props.productos.map(product => (
            
            < Item
            key={product.id}
            id={product.id}
            image={product.image}
            Title={product.Title}
            price={product.price}
            Category={product.Category}
            stock={product.stock}
            />
     
        ))
       
   )
    
}