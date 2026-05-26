import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h2 className="footer-logo text-display-lg" style={{ fontSize: '32px' }}>Maisoor</h2>
          <p className="text-body-md" style={{ maxWidth: '300px', opacity: 0.8 }}>
            Elevating traditional attire with contemporary elegance and uncompromising craftsmanship.
          </p>
        </div>
        
        <div>
          <h4 className="text-label-caps" style={{ marginBottom: '24px', color: 'var(--color-detail-accent)' }}>Explore</h4>
          <ul className="footer-links">
            <li><a href="#brand" className="footer-link text-body-md">Brand Story</a></li>
            <li><a href="#collections" className="footer-link text-body-md">Collections</a></li>
            <li><a href="#sustainability" className="footer-link text-body-md">Sustainability</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-caps" style={{ marginBottom: '24px', color: 'var(--color-detail-accent)' }}>Support</h4>
          <ul className="footer-links">
            <li><a href="#shipping" className="footer-link text-body-md">Shipping & Returns</a></li>
            <li><a href="#contact" className="footer-link text-body-md">Contact Us</a></li>
            <li><a href="#privacy" className="footer-link text-body-md">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-label-caps" style={{ marginBottom: '24px', color: 'var(--color-detail-accent)' }}>Connect</h4>
          <div style={{ display: 'flex', gap: '16px' }}>
            <a href="#instagram" className="footer-link">IG</a>
            <a href="#facebook" className="footer-link">FB</a>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="footer-bottom text-label-caps">
          <p>&copy; {new Date().getFullYear()} Maisoor. Crafted with Heritage.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
