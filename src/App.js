
import './App.css';
import NavBar from './components/NavBar';
import { ListContainer } from './container/ItemListContainer';
function App() {

  
  return (
    <>
    <NavBar />
    <ListContainer greeting="¡Bienvenido!" />
    </>
  );
}

export default App;
