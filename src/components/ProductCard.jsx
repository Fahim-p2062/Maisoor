import React from 'react';

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={image} alt={title} className="product-image" />
      </div>
      <h3 className="product-title text-body-lg" style={{ fontFamily: 'var(--font-display)' }}>{title}</h3>
      <p className="product-price text-body-md" style={{ color: 'var(--color-brand-accent)' }}>{price}</p>
    </div>
  );
};

export default ProductCard;
