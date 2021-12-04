import Nav from 'react-bootstrap/Nav'
import { Link } from 'react-router-dom'
import '../taps/taps.css'

export const Tabs =({categoria})=>{

    return(
        <>
        
        <Nav variant="tabs" defaultActiveKey={`/categoria/${categoria}`} className="ff">
        <Nav.Item>
         <Link to="/categoria/playa" className="color">PLAYA</Link>
      
             
        </Nav.Item>
        <Nav.Item>
          <Link to="/categoria/montaña" className="color">MONTAÑA</Link>
          
        </Nav.Item>
        <Nav.Item>
          <Link to="/categoria/selva" className="color">SELVA</Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/categoria/llano" className="color">LLANO</Link>
        </Nav.Item>
      </Nav>
      </>
    )
}

