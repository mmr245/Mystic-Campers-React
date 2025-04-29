import React from 'react';
// Import components
import BannerCarousel from '../components/Home/BannerCarousel';
import './Home.css'; // import styles
import FeaturedProducts from '../components/Home/FeaturedProducts';

const HomePage = () => (
  <div className="home-container">
    {/* Banner Carousel */}
    <BannerCarousel />

    {/* Hero Section */}
    <section className="hero-section">
      <h1>Explore the Unknown with Mystic Campers</h1>
      <p>Gear up for your next adventure with our top-quality camping equipment.</p>
      <a href="/pages/shopping/shopping.html" className="cta-button">Shop Now</a>
    </section>

    {/* Featured Products */}
    <section className="recommended-section">
      <h2>Our picks for you</h2>
      <div className="product-row">
        {/* Your featured products will load here */}
        <FeaturedProducts />
      </div>
    </section>
  </div>
);

export default HomePage;


