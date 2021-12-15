import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../components/Detail/ItemDetail";
import getFirestore from "../firebase/firebaseConfig";
import * as ReactBoostrap from 'react-bootstrap';

export const ItemDetailContainer=()=>{
  
  const [productIndividual, setProductInd]= useState({})// se persiste un solo producto
    const [loading, setLoading]= useState(false);
    const {itemId}= useParams();
    
    useEffect(()=>{
      const db = getFirestore()
      const dbQuery= db.collection('productos').doc(itemId)
      dbQuery.get()
      .then(data => setProductInd({id: data.id,...data.data()}))
    
        const timeoutID= setTimeout(()=>{
          setLoading(true);
        },2000)
        return () => window.clearTimeout(timeoutID )
        // eslint-disable-next-line
    },[itemId])

  
  
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