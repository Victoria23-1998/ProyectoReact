import { ItemCard } from "../../estilosComponents/cardStyled";
import { InfoIcons } from "./infoIcon";
//import { ItemCount } from "../ItemCount/ItemCount";
//import { onAdd } from "../../container/ItemListContainer";
//import { infoIcons } from "./infoIcon";
import { Link } from "react-router-dom";
const style= {width: "18rem"}

export const Item=({item})=>{
  
    return(
      <>
      
        <ItemCard className="card"  style={style}>
          <Link  to={`/detalle/${item.id}`}>
          <img src={item.image} className="card-img-top" alt={item.Title}/>
          </Link>
          <InfoIcons/>
          <div className="card-body">
     {/* <ItemCount initial={1} stock={parseInt(stock)} onAdd={onAdd}/>*/}
            <p className="card-title">{item.Title}</p>
            <p className="card-text">{item.price}</p>
            <p>Por persona</p>
            
              <Link to={`/detalle/${item.id}`} className="btn btn-primary">Más info</Link>
            
          </div>
          
          </ItemCard>
     
        </>
    )
  
}