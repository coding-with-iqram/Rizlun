import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturedFragranceCarousel from './components/FeaturedFragranceCarousel';
import ProductsSection from './components/ProductsSection';
import Footer from './components/Footer';
import { useCart } from '../../contexts/CartContext';

const Homepage = () => {
  const { addToCart, addToWishlist } = useCart();

  const handleAddToCart = (product) => {
    addToCart(product);
    // You could add a toast notification here
    console.log('Added to cart:', product);
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    // You could add a toast notification here
    console.log('Added to wishlist:', product);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturedFragranceCarousel />
      <ProductsSection 
        onAddToCart={handleAddToCart}
        onAddToWishlist={handleAddToWishlist}
      />
      <Footer />
    </div>
  );
};

export default Homepage;