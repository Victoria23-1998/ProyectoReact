import { useContext } from "react"
import { CartContext } from "../../context/cart.context"
import { TotalCom } from "./totalCompra";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import { useEffect } from "react";
import './cart.scss';

export const Cart =()=>{

    const {cart,deleteItem,vaciarCart,getLocalStorageCart}= useContext(CartContext);
    
  useEffect(() => {
    getLocalStorageCart()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
 
    return(
        <>
        <div className="content-carrito">
           <Link to='/categoria/playa'> <Button variant="dark" className="btnC">Seguir Comprando</Button></Link>

            <div className="cart-vacio">{cart.length === 0 && <h2>Carrito Vacio :c</h2>}</div>
                
                
                <div className="contentGen">
                <div className="cCart">
                    {cart.map((prod) => {
                        
                        return (

                            <div key={prod.id} className="cardCart" >
                                <div>
                                    <p className="title">{prod.title}</p>
                                    <img src={prod.image} className="imgCart" alt='' />
                                </div>

                              
                                <div className='contentCom'>
                                {/*eslint-disable-next-line  */} 
                                    <img src="https://img.icons8.com/material-two-tone/24/000000/delete-trash.png" onClick={()=>deleteItem(prod.id)}/>
                                    
                                   
                                    <p>Cantidad: {prod.cantidad}</p>
                                    <p >Precio $USD{prod.price}.00</p>
                                    <p>SubTotal $USD{prod.subTotal}.00</p>

                                </div>
                            </div>

                        )
                    })}
                </div>
                <div>
                    <TotalCom />

                </div>
            </div>
            
            
           {cart.length !==0 && <Button variant="dark" className="btnC" onClick={()=>vaciarCart()}>Vaciar Carrito</Button> } 
        </div>
        </>
    )
      
 }
   
   
    
   
    

    
   
    
