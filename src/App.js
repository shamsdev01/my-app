import React from 'react'
// import { ReactDOM } from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './components/pages/Home';
import Services from './components/pages/Services'
import Products from './components/pages/Products'
import SignUp from './components/pages/SignUp'


function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/services" element={<Services/>}></Route>
        <Route path="/Products" element={<Products/>}></Route>
        <Route path="/sign-up" element={<SignUp/>}></Route>
     

      </Routes>
    </BrowserRouter>
  );
}
export default App;
