import React from 'react';
import ProductCard from './ProductCard';

const ProductGrid = ({ products, addToCart, title = "New Arrivals", subtitle = "The latest expressions of our heritage." }) => {
  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>{title}</h2>
        {subtitle && (
          <p className="text-subheading-lg" style={{ color: 'var(--color-outline)' }}>
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
