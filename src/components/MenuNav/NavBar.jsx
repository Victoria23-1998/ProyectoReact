import logo from '../../img/logo.png';
import IconCart from '../MenuNav/CartWidget';
import { A,Li,Ul,Nav } from '../../estilosComponents/NavStyled';
import IconSesion from '../MenuNav/SesionIcon';
const NavBar =()=>{
    return(
        <Nav>
            <Ul>
                <Li><A href="index"><img  src={logo} className="imgLogo" alt="logo" /></A></Li>
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