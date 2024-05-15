import React, { useState } from 'react';
import './App.css'
import { Routes, Route } from "react-router-dom"
import LandingPageLayout from './layout/LandingPageLayout'
import CustomRouter from './router/CustomRouter'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Cart from './Pages/Cart';
import Products from './Pages/Products';

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (id) => {
    if (!cartItems.includes(id)) {
      setCartItems([...cartItems, id]);
    }
  };

  return (
    <>
      <Nav />
      <LandingPageLayout>
        <Routes>
          {CustomRouter.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))}
          <Route path='/cart' element={<Cart cartItems={cartItems} />} />
          <Route path='/products' element={<Products cartItems={cartItems} addToCart={addToCart} />} />
          {/* bu hisseni daha seliqeli nece yazmaq olar? */}
        </Routes>
      </LandingPageLayout>
      <Footer />
    </>
  );
}

export default App;