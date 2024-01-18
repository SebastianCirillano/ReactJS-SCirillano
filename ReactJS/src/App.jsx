import { Navbar } from './components/NavBar/NavBar';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (

    <BrowserRouter >
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer saludo="Somos Verde, bienvenidos!"/>} />
        <Route path="/categoria/:categoria" element={<ItemListContainer />} />
        <Route path="/detalle/:idProducto" element={ < ItemDetailContainer />} />
      </Routes>

    </BrowserRouter>

  );
}

export default App
