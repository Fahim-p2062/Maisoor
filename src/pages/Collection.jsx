import React, { useState } from 'react';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.json';

const Collection = ({ addToCart }) => {
  const [search, setSearch] = useState('');

  const filteredProducts = productsData.filter(p => 
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main style={{ paddingTop: '120px', minHeight: '80vh' }}>
      <div className="container" style={{ textAlign: 'center', marginBottom: '40px' }}>
        <h1 className="text-display-lg">Full Collection</h1>
        <div style={{ marginTop: '32px', maxWidth: '500px', margin: '32px auto 0' }}>
          <input 
            type="text" 
            placeholder="Search products..." 
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: '100%',
              padding: '16px',
              fontSize: '16px',
              fontFamily: 'var(--font-body)',
              border: '1px solid var(--color-outline)',
              borderRadius: 'var(--radius-sm)',
              outline: 'none',
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-charcoal-black)'
            }}
          />
        </div>
      </div>
      <ProductGrid 
        products={filteredProducts} 
        addToCart={addToCart} 
        title={search ? 'Search Results' : 'Explore the Heritage'}
        subtitle={search ? `${filteredProducts.length} products found` : 'Every piece in our catalog.'}
      />
    </main>
  );
};

export default Collection;
