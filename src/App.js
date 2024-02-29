import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';
import { Product } from './pages/Product';
import { Shop } from './pages/Shop';
import { ShopCategory } from './pages/ShopCategory';
function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/loginsignup' element={<LoginSignup/>}/>
      <Route path='/men' element={<ShopCategory/>}/>
      <Route path='/women' element={<ShopCategory/>}/>
      <Route path='/kids' element={<ShopCategory/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
