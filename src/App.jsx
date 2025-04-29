
import React from 'react';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'; 
import Header from './components/Layout/Header';
import Shop from './pages/ShopPage';
import About from './pages/AboutPage';
import Hunt from './pages/HuntPage';
import Contact from './pages/ContactPage';
import Account from './pages/AccountPage';
import Cart from './pages/CartPage';
import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hunt" element={<Hunt />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
