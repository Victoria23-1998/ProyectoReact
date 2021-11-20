import IconFecha from "../../img/fecha2.png";
import IconAvion from "../../img/aeroplanoBlanco.png";
import IconComida from "../../img/platob.png";
import IconEquipaje from "../../img/equipaje-de-viaje.png";
import IconHotel from "../../img/hotel b.png";
import { Icon,DivInfo,IconSize } from "../../estilosComponents/infoIconsStyled";
export const InfoIcons =()=>{
    return(
        <DivInfo>
        <div>
            <Icon src={IconFecha} alt="" />
        </div>
        <div>
            <p>7días/6noches</p>
        </div>
        <div>
            <IconSize src={IconAvion} alt=""  />
        </div>
        <div>
            <IconSize src={IconEquipaje} alt="" />
        </div>
        <div>
            <IconSize src={IconHotel} alt="" styled="width:25px"/>
        </div>
        <div>
            <IconSize src={IconComida} alt="" />
        </div>
    </DivInfo>
    );
   
}