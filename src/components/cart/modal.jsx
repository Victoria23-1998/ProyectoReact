import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';
import { LoginContext } from '../../context/login.context';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import { LoginFormulario } from '../loginForm/loginForm';

import getFirestore from '../../firebase/firebaseConfig';
import swal from 'sweetalert';
import './cart.scss';

export function Example() {
    const [show, setShow] = useState(false);
    const{userLogin,userEmail}=useContext(LoginContext)
    const {cart,PriceTot,vaciarCart}=useContext(CartContext)
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    let priceTot= PriceTot()

   const generarOrden= (e)=>{

     
     const orden={}
     //orden.date= firebase.firestore.Timestamp.fromDate(new Date())
     orden.buye={email:userEmail}
     orden.items=cart.map((item)=>{
       return{
        id:item.id,
        nombre:item.title,
        precio:item.price
       }
    })
    orden.total=PriceTot()
  
    const db= getFirestore()
     db.collection('orders').add(orden)
    .then(  resp=>{
      
      swal({
        title: "Compra Realizada con éxito",
        text: `su numero de ordén es: ${resp.id}`,
        icon: "success",
      })
    
    }
   )
    vaciarCart()
   }

    return (
      <>
      
       <div>
          
          <Button variant="dark" className='btnComprar' onClick={handleShow}>
            Comprar
          </Button>
  
        <Modal show={show} onHide={handleClose} className='content-modal'>
          <Modal.Header closeButton>
            <Modal.Title>Compra</Modal.Title>
          </Modal.Header>
          <Modal.Body >
            {userLogin?
            <div >
             <h3>La compra se Realiza a nombre de: {userEmail}</h3>
             <div className="content-compra">
             <h3 className='detalle'>Detalle de la compra:</h3>
             {cart.map((prod)=>{
              return(
               <div key={prod.id}>
                 
                 <div className='text-content'>
                    <h4>Paquete: {prod.title}</h4>
                    <h4>Cantidad:{prod.cantidad}</h4>
                </div>
               </div>
              )
             })}
               <h3 className='border-top'>Total: $USD{priceTot}.00</h3>
               </div>
             </div>
             :
             <div>
              <h3 className='text-compra'>Para continuar con la compra</h3>
              <LoginFormulario vista={'modal'}/>
             </div>  
            }
         
          
          
          
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={generarOrden} >
              Comprar
            </Button>
          </Modal.Footer>
        </Modal>
        </div>
       
      
      
      </>
        
     
    );
  }
  
  