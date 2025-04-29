import React from 'react';
import './Home.css';

import BannerCarousel from '../components/Home/BannerCarousel';
import FeaturedProducts from '../components/Home/FeaturedProducts';

const HomePage = () => (
  <div className="container">
    {/* Top half: banner with hero inside */}
    <div className="half top-half">
      <BannerCarousel />
      <div className="hero">
        <h1>Explore the Unknown with Mystic Campers</h1>
        <p>Gear up for your next adventure with our top camping gear.</p>
        <a href="/pages/shopping/shopping.html" className="cta-button">Shop Now</a>
      </div>
    </div>

    {/* Bottom half: our picks */}
    <div className="half bottom-half">
      <h2>Our picks for you</h2>
      <div className="product-row">
        <FeaturedProducts />
      </div>
    </div>
  </div>
);

export default HomePage;

