import BannerCarousel from '../components/Home/BannerCarousel';
import './Home.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <BannerCarousel />

      {/* Welcome message */}
      <section className="welcome-section">
        <h1>Welcome to Mystic Campers</h1>
        <button className="cta-button">Shop Now</button>
      </section>

      {/* Featured products row */}
      <section className="recommended-section">
        <h2>Our picks for you</h2>
        <div className="product-row">
          <div className="product-card">
            <img src="../../assets/images/products/tent.jpg" alt="Mothemans Shadow Spark" />
            <div className="product-info">
              <h3>Mothemans Shadow Spark</h3>
              <p>$15.99</p>
            </div>
          </div>
          <div className="product-card">
            <img src="../../assets/images/products/stove.jpg" alt="Mystic Campfire Cooking Set" />
            <div className="product-info">
              <h3>Mystic Campfire Cooking Set</h3>
              <p>$87.00</p>
            </div>
          </div>
          <div className="product-card">
            <img src="../../assets/images/products/wraith_cloak.jpg" alt="Shadow Stalker Wraith Cloak" />
            <div className="product-info">
              <h3>Shadow Stalker Wraith Cloak</h3>
              <p>$109.00</p>
            </div>
          </div>
          <div className="product-card">
            <img src="../../assets/images/products/wall_repel.jpg" alt="Banehoe's Wall Ultrasonic Pest Repleller" />
            <div className="product-info">
              <h3>Banehoe's Wall Ultrasonic Pest Repleller</h3>
              <p>$24.99</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;


