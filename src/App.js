
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
import Cart from './pages/CartPage';
import NotFound from './pages/NotFoundPage';

function App() {
  return (
    <Layout>
      {/* TODO: Replace with your routes or page components */}
      <h1>Welcome to Mystic Campers</h1>
      <p>Explore the unknown with our top-tier camping gear
        Hi
      </p>
    </Layout>
  );
}

export default App;
