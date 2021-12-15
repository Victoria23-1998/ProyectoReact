
import { useState } from "react";
import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import { Link } from "react-router-dom";
import './detal.css'
export const ItemDetail =({item})=>{
    
    const [count, setCount] = useState(1)
    const {addProduct}= useContext(CartContext)
    const [buttonType,setButton]= useState('button agregar');
    const [subTotal,setSubTotal]=useState(item.price)
    let cantidad=0;

    let productToCart={
        id: "",
        image: "",
        Title:"",
        price: "",
        Category:"",
        stock:"",
        cantidad:0,
        subTotal:0
    }
    
    function sumar(){
        cantidad= count+1;
        if(cantidad< item.stock){
            setCount(cantidad)
            
            setSubTotal(parseInt(item.price) * (cantidad))
           
        }
    }
    function restar(){
        cantidad= count-1;
        if(cantidad <= 1){
            setCount(cantidad)
            setSubTotal(parseInt(item.price) * (cantidad))
            
        }
    }

    const Agregar=()=>{
        productToCart={
            id: item.id,
            image:item.image ,
            title: item.title,
            price: item.price ,
            cantidad:count,
            subTotal:subTotal
        }
       addProduct(productToCart)
    } 
    function ambasFunciones(){
        Agregar()
        cambiar()
    }
    const cambiar=()=>{
        return(
           
           setButton('button terminar')
        )
    }
    const ButtonTerminar=()=>{
        return(
           <Link to={`/detalle/${item.id}/carrito`}> <button className="terminar" onClick={()=> console.log('hola')}>Terminar Compra</button></Link>
        )
    }
    const ButtonAgregar=({funciones})=>{
        
        
         return(<button onClick={()=>{funciones()}} className="agregar">Agregar al carrito</button>)
        
    }
    

    return(
        <section className="principal">
            <div className="contentImg">
               <div className="cImg">
                   <img src={item.image} alt="" />
                   <h3>{item.title}</h3>
                   <h3>Precio por persona:$USD{subTotal}.00</h3>
                   
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
                
                    <div className="count">
                        <div className="contSumRest">
                            <button onClick={sumar} className="sum" >+</button>
                            {count}
                            <button onClick={restar} className="res" >-</button>
                        </div>

                        {

                            buttonType === 'button agregar' ?
                                <ButtonAgregar funciones={ambasFunciones} />
                                :
                                <ButtonTerminar />

                        }
                    </div>

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