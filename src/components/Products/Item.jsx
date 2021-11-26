import { ItemCard } from "../../estilosComponents/cardStyled";
import { InfoIcons } from "./infoIcon";
//import { ItemCount } from "../ItemCount/ItemCount";
//import { onAdd } from "../../container/ItemListContainer";
//import { infoIcons } from "./infoIcon";
import { Link } from "react-router-dom";
const style= {width: "18rem"}

export const Item=({id, image,Title,price,Category,stock})=>{
  
    return(
      <>
        <ItemCard className="card"  style={style}>
          <Link  to={`/detalle/${id}`}>
          <img src={image} className="card-img-top" alt={Title}/>
          </Link>
          <InfoIcons/>
          <div className="card-body">
     {/* <ItemCount initial={1} stock={parseInt(stock)} onAdd={onAdd}/>*/}
            <p className="card-title">{Title}</p>
            <p className="card-text">{price}</p>
            <p>Por persona</p>
            
              <Link to={`/detalle/${id}`} className="btn btn-primary">Más info</Link>
            
          </div>
          
          </ItemCard>
     
        </>
    )
  
}