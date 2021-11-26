import logo from '../../img/logo.png';
import IconCart from '../MenuNav/CartWidget';
import { A,Nav,Ul,Li } from '../../estilosComponents/NavStyled';
import IconSesion from '../MenuNav/SesionIcon';
import { Link } from 'react-router-dom';

const NavBar =()=>{
    return(
      <Nav>
  
           <Ul>   
              
            <Li><Link to='/' ><img  src={logo} className="imgLogo" alt="logo" /></Link></Li>
            <Li><Link to='/' className="link">INICIO</Link></Li>
                <Li><A href="quienesSomos">QUIENES SOMOS</A></Li>
                <Li><A href="destinos">DESTINOS</A></Li>
                <Li><A href="formaPago">FORMAS DE PAGO</A></Li>
                <Li><A href="contacto">CONTACTO</A></Li>
                <IconSesion />
                < IconCart />
           </Ul>
          
        </Nav>
    );
}
export default NavBar;


