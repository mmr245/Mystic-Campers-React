
import React from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage'; 
import Header from './components/Layout/Header';
import Shop from './pages/ShopPage';
import About from './pages/AboutUs/AboutPage';
import Lore from './pages/AboutUs/Lore';
import Team from './pages/AboutUs/Team';
import Hunt from './pages/TheHunt/HuntPage';
import Blog from './pages/TheHunt/Blog';
import BrushWithTheWendingo from './pages/TheHunt/Blog/BrushWithTheWendingo';
import IntoTheUnknown from './pages/TheHunt/Blog/IntoTheUnknown';
import TheNightItStarted from './pages/TheHunt/Blog/TheNightItStarted';
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
        <Route path="/blog" element={<Blog />} />
        <Route path="/brushwiththewendingo" element={<BrushWithTheWendingo />} />
        <Route path="/intotheunknown" element={<IntoTheUnknown />} />
        <Route path="/thenightitstarted" element={<TheNightItStarted />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/hunt" element={<Hunt />} />
        <Route path="/lore" element={<Lore />} />
        <Route path="/team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
