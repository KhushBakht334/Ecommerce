import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Cart } from './pages/Cart';
import { LoginSignup } from './pages/LoginSignup';
import { Product } from './pages/Product';
import { Shop } from './pages/Shop';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kids_banner from './components/Assets/banner_kids.png'
import { ShopCategory } from './pages/Shopcategory';
import Logout from './components/Logout/Logout';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Shop/>}/>
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}/>
      <Route path='/women' element={<ShopCategory banner={women_banner} category="women"/>}/>
      <Route path='/kids' element={<ShopCategory banner={kids_banner} category="kids"/>}/>
      <Route path='/product' element={<Product/>}>
        <Route path=':productId' element={<Product/>}/> 
        </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/loginsignup' element={<LoginSignup/>}/>
      <Route path='/logout' element={<Logout/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
