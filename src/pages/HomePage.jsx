import React from 'react';
// import components
import BannerCarousel from '../components/Home/BannerCarousel';
import FeaturedProducts from '../components/Home/FeaturedProducts';

// import CSS
import './Home.css';

const HomePage = () => (
  <div className="home-container">
    <BannerCarousel />
    <FeaturedProducts />
  </div>
);

export default HomePage;



