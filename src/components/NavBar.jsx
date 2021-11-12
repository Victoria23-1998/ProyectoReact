import logo from '../img/logo.png';
import IconCart from './CartWidget';
import { A,Li,Ul,Nav } from '../estilosComponents/NavStyled';
const NavBar =()=>{
    return(
        <Nav>
            <Ul>
                <Li><A href="index"><img  src={logo} className="imgLogo" alt="logo" /></A></Li>
                <Li><A href="quienesSomos">QUIENES SOMOS</A></Li>
                <Li><A href="destinos">DESTINOS</A></Li>
                <Li><A href="formaPago">FORMAS DE PAGO</A></Li>
                <Li><A href="contacto">CONTACTO</A></Li>
                < IconCart />
            </Ul>
          
        </Nav>
    );
}
export default NavBar;