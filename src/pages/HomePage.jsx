import React from 'react';
import BannerCarousel from '../components/Home/BannerCarousel';
import FeaturedProducts from '../components/Home/FeaturedProducts';
import './Home.css';

const HomePage = () => (
  <div className="home-container">
    {/* Top half: Banner carousel */}
    <div className="half top-half">
      <BannerCarousel />
      <div className="hero-overlay">
        <h1>Explore the Unknown with Mystic Campers</h1>
        <p>Gear up for your next adventure with our top-quality camping equipment.</p>
        <a href="/pages/shopping/shopping.html" className="cta-button">Shop Now</a>
      </div>
    </div>
    {/* Bottom half: Featured products */}
    <div className="half bottom-half">
      <section className="recommended-section">
        <h2>Our picks for you</h2>
        <div className="product-row">
          <FeaturedProducts />
        </div>
      </section>
    </div>
  </div>
);

export default HomePage;

