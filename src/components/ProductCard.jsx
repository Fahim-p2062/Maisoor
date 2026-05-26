import React, { useState } from 'react';

const ProductCard = ({ product, addToCart }) => {
  const [added, setAdded] = useState(false);

  const handleAdd = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={`/products/${product.image}`} alt={product.title} className="product-image" />
      </div>
      <h3 className="product-title text-body-lg" style={{ fontFamily: 'var(--font-display)' }}>{product.title}</h3>
      <p className="product-price text-body-md" style={{ color: 'var(--color-brand-accent)', marginBottom: '16px' }}>{product.price}</p>
      <button 
        className={`btn-primary ${added ? 'added' : ''}`} 
        onClick={handleAdd}
        style={{ width: '100%', padding: '12px 24px' }}
      >
        {added ? 'Added to Cart' : 'Add to Cart'}
      </button>
    </div>
  );
};

export default ProductCard;
