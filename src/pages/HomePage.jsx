import React from 'react';
import BannerCarousel from '../components/Home/BannerCarousel';
import './Home.css';
import FeaturedProducts from '../components/Home/FeaturedProducts';

const HomePage = () => (
  <div className="home-container">
    <BannerCarousel />

    {/* Hero section */}
    <section className="hero-section">
      <h1>Explore the Unknown with Mystic Campers</h1>
      <p>Gear up for your next adventure with our top-quality camping equipment.</p>
      <a href="/pages/shopping/shopping.html" className="cta-button">Shop Now</a>
    </section>

    {/* Featured products */}
    <section className="recommended-section">
      <FeaturedProducts />
    </section>
  </div>
);

export default HomePage;

