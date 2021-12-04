import { useState,useEffect } from "react";
import { ItemList } from "../components/Products/ItemList";
//import { Loading } from "../components/loading/loading";
import { useParams } from "react-router";

import * as ReactBoostrap from 'react-bootstrap';
import { Tabs } from "../components/taps/taps";
import '../container/list.css'
export function onAdd(cant){
  console.log(cant)
}

export const ItemListContainer=()=>{


 
 const [loading, setLoading]= useState(false);
 const [products, setProducts] = useState([]);

 const {itemCategoria}= useParams();
 useEffect(() => {
      
 
  getProducts();
   
   const timeoutID= setTimeout(()=>{
    setLoading(true);
  },2000)
  return () => window.clearTimeout(timeoutID )
  // eslint-disable-next-line
},[itemCategoria])

//Consumo de datos con Fetch
 const getProducts = async () => {
  try {

    
      
      let respuesta = await fetch ('../../data/data.json');
      let data= await respuesta.json();
      setProducts(data.filter(producto => producto.Category === itemCategoria ));
   
     

  } catch (error) {
    console.log(error)
  }
} 
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


