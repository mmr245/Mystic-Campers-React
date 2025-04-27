// src/components/Layout/Header.jsx
import React from 'react';
import './Layout.css';

const Header = () => (
  <header className="site-header">
    <div className="header-top">
      <img className="logo" src="/images/top-logo.png" alt="Mystic Campers Logo" />
      <div className="branding">
        <h1>Mystic Campers</h1>
        <h3>Where the wild meets the weird.</h3>
      </div>
      <button className="menu-toggle" aria-label="Toggle menu">
        <span className="hamburger-icon">☰</span>
      </button>
    </div>
    <nav className="nav-links">
      <ul>
        <li><a href="/">Home</a></li>
        <li><a href="/shop">Shop</a></li>
        <li><a href="/about-us">About Us</a></li>
        <li><a href="/the-hunt">The Hunt</a></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/account">Account</a></li>
        <li><a href="/cart">Cart</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;