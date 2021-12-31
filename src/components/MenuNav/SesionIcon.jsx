import iconSesion from "../../img/usuario.png"
import { Link } from "react-router-dom";
import { LoginContext } from "../../context/login.context";
import { useContext } from "react";
import Button from 'react-bootstrap/Button'
import './iconCart.css'
const IconSesion =()=>{
    const {userLogin,cerrarSesion}=useContext(LoginContext)
    

    return(
        <div >
            {userLogin ? 
            <Button variant="primary" type="button" className="btn-cerrar" onClick={cerrarSesion}>
                Cerrar sesión
             </Button>
             :
             <Link to='login' className="content-login">
                <img src={iconSesion} className="iconCart" alt="" />
                <p className="text-login">Iniciar sesión</p>
             </Link>
            }
        
        </div>
    );
}
export default IconSesion;