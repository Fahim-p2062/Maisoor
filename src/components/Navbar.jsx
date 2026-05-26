import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <a href="/" className="text-display-lg" style={{ color: 'var(--color-detail-accent)', fontSize: '32px', textDecoration: 'none' }}>
          Maisoor
        </a>
      </div>
      
      <ul className="nav-links">
        <li><a href="#home" className="nav-link text-label-caps">Home</a></li>
        <li><a href="#shop" className="nav-link text-label-caps">Shop</a></li>
        <li><a href="#collections" className="nav-link text-label-caps">Collections</a></li>
        <li><a href="#fabrics" className="nav-link text-label-caps">Fabrics</a></li>
        <li><a href="#about" className="nav-link text-label-caps">About</a></li>
      </ul>

      <div className="nav-utility">
        <a href="#search" className="nav-link text-label-caps">Search</a>
        <div className="nav-divider"></div>
        <a href="#account" className="nav-link text-label-caps">Account</a>
        <a href="#cart" className="nav-link text-label-caps">Cart (0)</a>
      </div>
    </nav>
  );
};

export default Navbar;
