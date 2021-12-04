import iconCart from '../../img/carrito-de-compras.png'
import { Link } from 'react-router-dom';
const IconCart =()=>{
    return(
        <div>
        <Link to='carrito'><img src={iconCart} className="iconCart" alt="" /></Link>
        </div>
    );
}
export default IconCart;