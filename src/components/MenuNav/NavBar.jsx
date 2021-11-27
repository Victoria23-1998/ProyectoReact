import logo from '../../img/logo.png';
import IconCart from '../MenuNav/CartWidget';
import { Nav,Ul,Li } from '../../estilosComponents/NavStyled';
import IconSesion from '../MenuNav/SesionIcon';
import { Link } from 'react-router-dom';

const NavBar =()=>{
    return(
      <Nav>
  
           <Ul>   
              
            <Li><Link to='/' ><img  src={logo} className="imgLogo" alt="logo" /></Link></Li>
            <Li><Link to='/' className="link">INICIO</Link></Li>
            <Li><Link to='destinos' className="link">DESTINOS</Link></Li>
               
                <Li><Link to='contacto' className="link">CONTACTO</Link></Li>
                <IconSesion />
                < IconCart />
           </Ul>
          
        </Nav>
    );
}
export default NavBar;


