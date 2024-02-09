import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { Navbar } from './components/NavBar/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito/carrito';
import Checkout from './components/Checkout/Checkout';


function App() {
  return (

    <BrowserRouter >
      <CartProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<ItemListContainer saludo="Somos Verde, bienvenidos!" />} />
          <Route path="/categoria/:categoria" element={<ItemListContainer />} />
          <Route path="/detalle/:id" element={<ItemDetailContainer />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<Error />} />
        </Routes>

      </CartProvider>
    </BrowserRouter>

  );
}

export default App
