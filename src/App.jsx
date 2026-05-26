import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Collection from './pages/Collection';
import Login from './pages/Login';
import Account from './pages/Account';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [user, setUser] = useState(null);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const handleLogin = (username) => {
    setUser(username);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Navbar cartCount={cartItems.length} />
      <Routes>
        <Route path="/" element={<Home addToCart={addToCart} />} />
        <Route path="/shop" element={<Shop addToCart={addToCart} />} />
        <Route path="/collection" element={<Collection addToCart={addToCart} />} />
        <Route path="/login" element={<Login handleLogin={handleLogin} />} />
        <Route path="/account" element={<Account user={user} handleLogout={handleLogout} />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
