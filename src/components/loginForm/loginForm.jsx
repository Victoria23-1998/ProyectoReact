import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { useContext,useEffect} from 'react'
import { LoginContext } from '../../context/login.context'
import { Link } from 'react-router-dom'
import './login.css'

export  const LoginFormulario =(vista)=>{
    const{handleInputChange,enviarDatos,userLogin,mantenerSesión,userEmail}=useContext(LoginContext);
    
    useEffect(() => {
        mantenerSesión()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   
   
    return(
        <>  
         
            { userLogin === true && vista === 'login' ? 
            <div className='content-bienvenida'>
            <h2>Bienvenid@ {userEmail}</h2>
           <Link to='/categoria/playa'>
           <Button variant="primary" type="button">
                    Seguir Comprando
            </Button>
            </Link>
            </div>
            
            :
                <Form className='content-form' onSubmit={enviarDatos}>
                <h2 className='inicio'>Inicia sesión</h2>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" 
                    name="email" 
                    onChange={handleInputChange}
                    
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" 
                    name="password"
                    onChange={handleInputChange}
                    />
                </Form.Group>
                <Button variant="primary" type="submit" className='btn-subtmit'>
                    Iniciar
                </Button>
            </Form>

            }
            
        </>
    )
}