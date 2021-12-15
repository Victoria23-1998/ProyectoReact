import iconCart from '../../img/carrito-de-compras.png'
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/cart.context';
import { useContext } from 'react';
import './iconCart.css'
const IconCart =()=>{

    const{cantItem}=useContext(CartContext)
    let cantiItems=cantItem()
   
        if(cantiItems !== 0){
            return (
                <div className="content-icon-cart">
                    <Link to='carrito'><img src={iconCart} className="iconCart" alt="" /></Link>
                    <h3 className="cant">{cantiItems}</h3>
                </div>
            )
        }else{
            return(
                <div className="content-icon-cart">
                    <Link to='carrito'><img src={iconCart} className="iconCart" alt="" /></Link>
                    <h3 className="cant"  style={{display:'none'}}>{cantiItems}</h3>
                </div>
        )
        }
        
    
}
export default IconCart;