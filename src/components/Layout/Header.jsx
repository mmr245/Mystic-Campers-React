// src/components/Layout/Header.jsx
import React from 'react';
import desktopLogo from '../../assets/images/top-logo.png';
import mobileLogo from '../../assets/images/mobile-logo.png';
import { NavLink } from 'react-router-dom';
import './Layout.css';

const Header = () => (
  <header className="site-header">
    <div className="header-top">
      {/* Desktop logo hidden on small screens */}
      <img className="logo desktop-logo" src={desktopLogo} alt="Mystic Campers Logo" />
      {/* Mobile logo shown on small screens */}
      <img className="logo mobile-logo" src={mobileLogo} alt="Mystic Campers" />
      {/* Branding only visible on mobile */}
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
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/hunt">The Hunt</NavLink></li>
        <li><a href="/contact">Contact</a></li>
        <li><a href="/account">Account</a></li>
        <li>
          <NavLink to="/cart" className={({ isActive }) => isActive ? 'active' : ''}>
            Cart
          </NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
