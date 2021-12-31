import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { ItemDetail } from "../components/Detail/ItemDetail";
import getFirestore from "../firebase/firebaseConfig";
import * as ReactBoostrap from 'react-bootstrap';

export const ItemDetailContainer=()=>{
  
  const [productIndividual, setProductInd]= useState({})// se persiste un solo producto
    const [loading, setLoading]= useState(true);
    const {itemId}= useParams();
    
    useEffect(()=>{
      const db = getFirestore()
      const dbQuery= db.collection('productos').doc(itemId)
      dbQuery.get()
      .then(data => {
        setProductInd({id: data.id,...data.data()})
        setLoading(false)
      }
      )
    
        
        
        // eslint-disable-next-line
    },[itemId])

  
  
    return(
        <>
        { loading 
        ?
        <ReactBoostrap.Spinner animation="grow" variant="info" className="loading" />
        :
        <ItemDetail item={productIndividual}/> 
        }   
                     
     
    </>
    )
} 