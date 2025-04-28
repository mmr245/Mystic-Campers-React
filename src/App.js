
import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/HomePage';
import Shop from './pages/ShopPage';
import About from './pages/AboutPage';
import Hunt from './pages/HuntPage';
import Contact from './pages/ContactPage';
import Account from './pages/AccountPage';

import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/hunt" element={<Hunt />} />
      </Routes>
    </Layout>
  );
}

export default App;
