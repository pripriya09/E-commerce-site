import React, { useState, createContext } from 'react';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
import Header from './Header';
import Home from './Home';
import Cart from './Cart';
import "./style.css"
import Contact from './Contact';
export const DataContext = createContext(null); 

function Main() {


  const [cart, setCart] = useState(
    localStorage ? localStorage.getItem("storeitem") 
    ? JSON.parse(localStorage.getItem("storeitem"))
    :[]
    :[]
  )

  return (
  
      <DataContext.Provider value={{ cart, setCart }}>
        <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Contact/>} />

        </Routes>
        </BrowserRouter>
      </DataContext.Provider>
   
  );
}

export default Main;
