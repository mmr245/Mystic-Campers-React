import React from 'react';
import BannerCarousel from '../components/Home/BannerCarousel';
import FeaturedProducts from '../components/Home/FeaturedProducts';

const HomePage = () => {
  return (
    <div>
      <BannerCarousel />
      {/* Optional: Hero or other sections */}
      <section className="hero">
        <h1>Welcome to Mystic Campers</h1>
        <p>Explore the unknown with our top-tier camping gear.</p>
        <a href="/pages/shopping/shopping.html" className="cta-button">Shop Now</a>
      </section>
      <FeaturedProducts />
    </div>
  );
};

export default HomePage;
