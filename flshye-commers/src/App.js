import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProductsOnly from './Components/ProductsOnly';
import Navbar from './layout/Navbar/Navbar';
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
        
      </Routes>
    </>
  );
}

export default App;
