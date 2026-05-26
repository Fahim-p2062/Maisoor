import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.json';

const Shop = ({ addToCart }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Cotton', 'Striped', 'Popcorn', 'Silk'];

  const filteredProducts = productsData.filter(p => {
    if (activeCategory === 'All') return true;
    return p.title.toLowerCase().includes(activeCategory.toLowerCase());
  });

  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="text-display-lg">Shop Categories</h1>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', marginTop: '32px' }}>
          {categories.map(cat => (
            <button 
              key={cat} 
              className={activeCategory === cat ? 'btn-primary' : 'btn-outline'}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <ProductGrid 
        products={filteredProducts} 
        addToCart={addToCart} 
        title={activeCategory === 'All' ? 'All Products' : `${activeCategory} Collection`}
        subtitle={`${filteredProducts.length} products found`}
      />
    </main>
  );
};

export default Shop;
