
import './App.css';
import React from 'react';
import Layout from './components/Layout/Layout';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Hunt from './pages/Hunt';
import Contact from './pages/Contact';
import Account from './pages/Account';
import Cart from './pages/Cart';
import NotFound from './pages/NotFound';

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
