
import './style/App.scss';
//import {BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/MenuNav/NavBar';
import { ItemListContainer } from './container/ItemListContainer';
import { DivCards } from './estilosComponents/cardStyled';
function App() {
 
  return (
    <>
   
    <NavBar />
    <DivCards>
   < ItemListContainer />
   </DivCards>
    </>
  );
}

export default App;
