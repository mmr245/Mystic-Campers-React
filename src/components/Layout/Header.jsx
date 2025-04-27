import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-top">
        <img className="tab-desk logo"
          src={process.env.PUBLIC_URL + '/images/top-logo.png'}
          alt="Mystic Campers Logo"
        />
        <div className="mobile branding">
          <h1>Mystic Campers</h1>
          <h3>Where the wild meets the weird.</h3>
        </div>
        <button className="menu-toggle" aria-label="Toggle menu">
          {/* …burger icons… */}
        </button>
      </div>
      <nav>
        <ul className="nav-links">
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/shop">Shop</NavLink></li>
          <li><NavLink to="/about">About Us</NavLink></li>
          <li><NavLink to="/hunt">The Hunt</NavLink></li>
          <li><NavLink to="/contact">Contact</NavLink></li>
          <li><NavLink to="/account">Account</NavLink></li>
          <li><NavLink to="/cart">Cart</NavLink></li>
        </ul>
      </nav>
    </header>
  );
}