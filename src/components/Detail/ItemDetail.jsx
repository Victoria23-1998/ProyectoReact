import { ItemCount } from "../ItemCount/ItemCount"
import { onAdd } from "../../container/ItemListContainer";
//import { useContext } from "react";
//import { CartContext } from "../../context/cart.context";
export const ItemDetail =({item})=>{
    
    /*const {cart} = useContext(CartContext)
    console.log(cart)*/
    return(
        <section className="principal">
            <div className="contentImg">
               <div className="cImg">
                   <img src={item.image} alt="" />
                   <h3>{item.Title}</h3>
                   <h3>Precio por persona:{item.price}</h3>
                   
                </div> 
                <div className="contentProg">
                    <h3>SALIDAS PROGRAMADAS</h3>
                    <div>
                        <p>Salida: LUNES 01 Noviembre 
                        Llegada: SABADO 06 Noviembre. a la tarde</p>
                        <p>Salida: MARTES 03 Noviembre 
                        Llegada: DOMINGO 09 Noviembre. a la tarde</p>
                        <p>Salida: JUEVES 10 Noviembre 
                        Llegada: MIERCOLES 16 Noviembre. a la tarde</p>
                    </div>
                    <h3>HOTELES</h3>
                    <div>
                        <p>Hoteles ANTÁRTIDA + COSTA</p>
                        <p>Hoteles PSI + COSTA</p>
                        <p>Hoteles CEREZA + COSTA</p>
                    </div>
                    
                    <ItemCount initial={1} stock={parseInt(item.stock)} onAdd={onAdd} product={item}/>
                    
                </div> 
            </div>

                <div className="contentDetalles">
                    <h3>DETALLES:</h3>
                    <p>
                        Lorem ipsum dolor 
                        sit amet consectetur adipisicing elit. Beatae, in. Harum deserunt qui aut vitae.
                         Fugit eaque fuga quaerat expedita
                         iusto sint, numquam magni dolor eligendi neque sunt eius debitis.
                         sit amet consectetur adipisicing elit. Beatae, in. Harum deserunt qui aut vitae.
                         Fugit eaque fuga quaerat expedita
                         iusto sint, numquam magni dolor eligendi neque sunt eius debitis.
                         sit amet consectetur adipisicing elit. Beatae, in. Harum deserunt qui aut vitae.
                         Fugit eaque fuga quaerat expedita
                         iusto sint, numquam magni dolor eligendi neque sunt eius debitis.
                    </p>
                </div>
           
        </section>
    )
}