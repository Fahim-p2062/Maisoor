import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ cartCount = 0 }) => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <img src="/logo.jpg" alt="Maisoor Logo" style={{ height: '50px', objectFit: 'contain' }} />
        </Link>
      </div>
      
      <ul className="nav-links">
        <li><Link to="/" className="nav-link text-label-caps">Home</Link></li>
        <li><Link to="/shop" className="nav-link text-label-caps">Shop</Link></li>
        <li><Link to="/collection" className="nav-link text-label-caps">Collections</Link></li>
        <li><Link to="/#fabrics" className="nav-link text-label-caps">Fabrics</Link></li>
        <li><Link to="/#about" className="nav-link text-label-caps">About</Link></li>
      </ul>

      <div className="nav-utility">
        <Link to="/collection" className="nav-link text-label-caps">Search</Link>
        <div className="nav-divider"></div>
        <Link to="/account" className="nav-link text-label-caps">Account</Link>
        <Link to="/cart" className="nav-link text-label-caps">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
};

export default Navbar;
