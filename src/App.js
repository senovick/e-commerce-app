import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import "./App.css";
import Header from './common/header/Header'
import Pages from './pages/Pages';
import Cart from './common/cart/Cart';

function App() {
  return (
    <>
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Pages />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
