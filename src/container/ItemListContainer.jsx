import { useState,useEffect } from "react";
import { ItemList } from "../components/Products/ItemList";
//import { Loading } from "../components/loading/loading";

import * as ReactBoostrap from 'react-bootstrap';
export function onAdd(cant){
  console.log(cant)
}
export const ItemListContainer=()=>{

 const [loading, setLoading]= useState(false);
 const [products, setProducts] = useState([]);

 useEffect(() => {
  getProducts();
   
},[])


//Consumo de datos con Fetch
 const getProducts = async () => {
  try {

    
      
      let respuesta = await fetch ('../../data/data.json');
      let data= await respuesta.json();
      setProducts(data);
      setTimeout(()=>{
        setLoading(true);
      },2000)
      
     

  } catch (error) {
    console.log(error)
  }
} 



return (
    <>
      {loading?

    <>

      <ItemList productos={products}/> 

    </>
      :
      <ReactBoostrap.Spinner animation="grow" variant="info" className="loading" />}
    </>
  );
}