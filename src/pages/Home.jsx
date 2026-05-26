import React from 'react';
import Hero from '../components/Hero';
import Marquee from '../components/Marquee';
import ProductGrid from '../components/ProductGrid';
import productsData from '../data/products.json';

const Home = ({ addToCart }) => {
  // Show only first 3 products as "New Arrivals" on home page
  const featuredProducts = productsData.slice(0, 3);

  return (
    <main>
      <Hero />
      <Marquee />
      <ProductGrid products={featuredProducts} addToCart={addToCart} />
    </main>
  );
};

export default Home;
