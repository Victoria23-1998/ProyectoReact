
import './style/App.scss';
import {Routes, Route} from 'react-router-dom'
import NavBar from './components/MenuNav/NavBar';
import { ItemListContainer } from './container/ItemListContainer';
import { DivCards } from './estilosComponents/cardStyled';
import { ItemDetailContainer } from './container/ItemDetailContainer';
function App() {
 
  return (
    <>
    
        <NavBar />
        <Routes>
          <Route exact path= '/' element={<DivCards>
            <ItemListContainer />
          </DivCards>} />
          <Route exact path= 'detalle/:itemId' element={<ItemDetailContainer/>}/>
          
        </Routes>
 
    </>
  );
}

export default App;
