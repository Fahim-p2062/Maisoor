import React from 'react';
import ProductCard from './ProductCard';

import imgEmerald from '../assets/product_emerald_1779824516363.png';
import imgIvory from '../assets/product_ivory_1779824530082.png';
import imgMidnight from '../assets/product_midnight_1779824551677.png';
import imgRoyal from '../assets/product_royal_1779824568279.png';
import imgCrimson from '../assets/product_crimson_1779824582918.png';
import imgSlate from '../assets/product_slate_1779824598859.png';

const products = [
  { id: 1, image: imgEmerald, title: "The Emerald Silk Reserve", price: "$245" },
  { id: 2, image: imgIvory, title: "Ivory Heritage Weave", price: "$195" },
  { id: 3, image: imgMidnight, title: "Midnight Azure Edition", price: "$285" },
  { id: 4, image: imgRoyal, title: "The Royal Blend", price: "$220" },
  { id: 5, image: imgCrimson, title: "Crimson Velvet Trim", price: "$310" },
  { id: 6, image: imgSlate, title: "Slate Grey Linen", price: "$180" }
];

const ProductGrid = () => {
  return (
    <section className="section container">
      <div className="section-header">
        <h2 className="text-display-lg" style={{ marginBottom: '16px' }}>New Arrivals</h2>
        <p className="text-subheading-lg" style={{ color: 'var(--color-outline)' }}>
          The latest expressions of our heritage.
        </p>
      </div>
      
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard 
            key={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
