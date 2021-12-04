import { useContext } from "react"
import { CartContext } from "../../context/cart.context"

export const Cart =()=>{

    const {cart}= useContext(CartContext);
   
    return(
        
        <>
      {cart.map((prod) => {
           console.log(prod.image)
          return(
            <div key={prod.id} className="card">
                  <img src={prod.image} className="card-img-top" alt='' />
                 
            <div className="card-body">
                  {/* <ItemCount initial={1} stock={parseInt(stock)} onAdd={onAdd}/>*/}
                  <p className="card-title">{prod.Title}</p>
                  <p className="card-text">{prod.price}</p>

                  <p>Por persona</p>
            </div>
        </div>
        )
    })}
      
     
        </>
    )
}