import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsOnly from './Components/ProductsOnly';
import Navbar from './layout/Navbar/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={
          <>
            <Home />
          </>
        }/>
        <Route path='/product/:Id' element={
          <>
            <ProductsOnly />
          </>
        }/>
        <Route path='/products' element={
          <>
            <Home />
          </>
        }/>
        <Route path='/cart' element={
          <>
            <Cart />
          </>
        }/>
        
      </Routes>
    </>
  );
}

export default App;
