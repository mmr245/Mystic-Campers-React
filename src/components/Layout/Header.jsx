import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className="header-top">
        {/* … logo and toggle … */}
      </div>
      <nav>
        <ul className="nav-links">
          {[
            { to: '/',     label: 'Home',   end: true },
            { to: '/shop', label: 'Shop'              },
            { to: '/about',label: 'About Us'          },
            { to: '/hunt', label: 'The Hunt'          },
            { to: '/contact',label: 'Contact'         },
            { to: '/account',label: 'Account'         },
            { to: '/cart', label: 'Cart'              },
          ].map(({ to, label, end }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={end}
                className={({ isActive }) => isActive ? 'active' : ''}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}