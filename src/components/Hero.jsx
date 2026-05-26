import React from 'react';
import { useNavigate } from 'react-router-dom';
import heroImage from '../assets/hero_image_1779824502529.png';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="hero">
      <img src={heroImage} alt="Modern Gentleman" className="hero-bg animate-ken-burns" />
      <div className="hero-overlay"></div>
      
      <div className="hero-content">
        <h1 className="text-display-lg animate-fade-up">Crafted for the Modern<br/>Gentleman</h1>
        <p className="text-body-lg animate-fade-up delay-100" style={{ marginTop: '24px', opacity: 0.9 }}>
          Embrace the heritage of bespoke tailoring with our latest collection of premium Panjabis, designed to elevate your presence with understated luxury.
        </p>
        
        <div className="hero-actions animate-fade-up delay-200">
          <button className="btn-primary" onClick={() => navigate('/collection')}>Explore Collection</button>
          <button className="btn-outline" onClick={() => navigate('/shop')}>Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
