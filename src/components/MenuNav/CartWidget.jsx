import iconCart from '../../img/carrito-de-compras.png'

const IconCart =()=>{
    return(
        <div>
        <a href="cart"><img src={iconCart} className="iconCart" alt="" /></a>
        </div>
    );
}
export default IconCart;