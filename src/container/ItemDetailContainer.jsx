import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../components/Detail/ItemDetail";

import * as ReactBoostrap from 'react-bootstrap';

export const ItemDetailContainer=()=>{
  
  const [productIndividual, setProductInd]= useState({})// se persiste un solo producto
    const [loading, setLoading]= useState(false);
    const {itemId}= useParams();
    
    useEffect(()=>{
        getProductsList()
        // eslint-disable-next-line
    },[itemId])
    const getProductsList = async () => {
        try {
      
          
            
            let respuesta = await fetch ('../../data/data.json');
            let data= await respuesta.json();
            setProductInd(data.find(producto=> producto.id === itemId))
            setTimeout(()=>{
                setLoading(true);
              },2000)
        } catch (error) {
          console.log(error)
        }
      } 
      
   
    
    console.log(productIndividual)

    //se ejecuta cada vez que la url cambia
 
   
      
   

    return(
        <>
        { loading ?
             <ItemDetail item={productIndividual}/> 
             :
             <ReactBoostrap.Spinner animation="grow" variant="info" className="loading" />
        }   
                     
     
    </>
    )
} 