
import './style/App.scss';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/MenuNav/NavBar';
import { ItemListContainer } from './container/ItemListContainer';
import { ItemDetailContainer } from './container/ItemDetailContainer';
import { Home } from './components/home/home';
import { Contacto } from './components/contacto/contacto';
import { CartProvider } from './context/cart.context';
import { Cart } from './components/cart/cart';

import { LoginContainer } from './container/login/login';
import { LoginProvider } from './context/login.context';

function App() {
 
  return (
    <>
    <LoginProvider>
    <CartProvider>
        <NavBar />
       
        <Routes>
          
          <Route exact path= 'categoria/:itemCategoria' element={
            <ItemListContainer />
         } />
       
          <Route exact path= 'detalle/:itemId' element={<ItemDetailContainer/> }/>
          <Route exact path= '/' element={<Home/>} />  
          <Route exact path= 'contacto' element={<Contacto/>} />  
          <Route exact path= 'carrito' element={<Cart/>} />  
          <Route exact path= '/detalle/:id/carrito' element={<Cart/>} />  
          
          <Route exact path= 'login' element={<LoginContainer/> } /> 
       
        </Routes>
      </CartProvider>  
    </LoginProvider> 
    </>
  );
}

export default App;
