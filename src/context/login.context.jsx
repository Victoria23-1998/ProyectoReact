import { createContext, useState} from "react";
import { app } from "../firebase/firebaseConfig";
import swal from 'sweetalert';
// se crea el contexto
export const LoginContext= createContext();

export const LoginProvider=({children})=>{
    const [datos,setDatos]= useState({
        email:'',
        password:''
    })
    const [userLogin,setUserLogin]=useState(false)
    const [userEmail,setUserEmail]=useState(false)

     const handleInputChange=(event)=>{
       
       setDatos({
           ...datos,
           [event.target.name]:event.target.value,
        })
      
     }
     const enviarDatos=(event)=>{
         event.preventDefault()
        app.auth().signInWithEmailAndPassword(datos.email,datos.password).then(usuarioFirebase=>{
            
            setUserLogin(true)
            localStorage.setItem('usuario',JSON.stringify(usuarioFirebase.user.email))
        },error=>{
            swal({
                title: "Oops",
                text: "Usuario no existe",
                icon: "error",
              });
        })
        
        
    }
   const mantenerSesión=()=>{
    const user=JSON.parse(localStorage.getItem('usuario'))
    if(user !== null){
        setUserLogin(true)
        setUserEmail(user)
    }else{
        setUserLogin(false)
    }
  
   }

    const cerrarSesion=()=>{
        app.auth().signOut()
        setUserLogin(false)
        localStorage.removeItem('usuario')
    }
    return(
        <LoginContext.Provider value={{datos,setDatos,handleInputChange,enviarDatos,userLogin,userEmail,
        cerrarSesion,mantenerSesión}}>
            {children}
        </LoginContext.Provider>
    )
}