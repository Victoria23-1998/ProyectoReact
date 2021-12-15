import { useState,useEffect } from "react";
import { ItemList } from "../components/Products/ItemList";
//import { Loading } from "../components/loading/loading";
import { useParams } from "react-router";

import * as ReactBoostrap from 'react-bootstrap';
import { Tabs } from "../components/taps/taps";
import '../container/list.css'
import getFirestore from "../firebase/firebaseConfig";

export function onAdd(cant){
  console.log(cant)
}
export const ItemListContainer=()=>{


 
 const [loading, setLoading]= useState(false);
 const [products, setProducts] = useState([]);

 const {itemCategoria}= useParams();
 useEffect(() => {
  const db = getFirestore()
  const dbQuery= db.collection('productos').where('category', '==', itemCategoria)
  dbQuery.get()
  .then(data => setProducts(data.docs.map(item =>({id:item.id,...item.data()}))))

   const timeoutID= setTimeout(()=>{
    setLoading(true);
  },2000)
  return () => window.clearTimeout(timeoutID )
  // eslint-disable-next-line
},[itemCategoria])

//Consumo de datos con Fetch
 
  
 
return (
   
  <>
          
  <Tabs categoria={itemCategoria}/>
    
    
    {loading?

  <>
  
  <div className="flex">

    <ItemList productos={products}/> 
  </div>
  </>
    :
    <ReactBoostrap.Spinner animation="grow" variant="info" className="loading" />}
  </>
);
} 


