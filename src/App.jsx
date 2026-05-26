import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <ProductGrid />
      </main>
      <Footer />
    </>
  );
}

export default App;
