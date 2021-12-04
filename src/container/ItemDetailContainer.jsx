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
        const timeoutID= setTimeout(()=>{
          setLoading(true);
        },2000)
        return () => window.clearTimeout(timeoutID )
        // eslint-disable-next-line
    },[itemId])

    const getProductsList = async () => {
        try {
           let respuesta = await fetch ('../../data/data.json');
            let data= await respuesta.json();
            setProductInd(data.find(producto=> producto.id === itemId))
           
        } catch (error) {
          console.log(error)
        }
      } 
  
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