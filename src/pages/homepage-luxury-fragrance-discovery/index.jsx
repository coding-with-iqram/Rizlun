import React, { useState } from 'react';
import { motion } from 'framer-motion';
import HeroSection from './components/HeroSection';
import FeaturedFragranceCarousel from './components/FeaturedFragranceCarousel';
import ProductsSection from './components/ProductsSection';
import TrustBadges from './components/TrustBadges';
import NewsletterSection from './components/NewsletterSection';
import Footer from './components/Footer';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import toast from 'react-hot-toast';

const Homepage = () => {
  const { addToCart, addToWishlist } = useCart();
  const { addLoyaltyPoints } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState('Featured');

  const handleAddToCart = (product) => {
    const cartItem = {
      ...product,
      selectedSize: product.selectedSize || '50ml',
      quantity: 1,
      id: `${product.id}-${product.selectedSize || '50ml'}`
    };
    
    addToCart(cartItem);
    addLoyaltyPoints(5); // Add loyalty points for purchase
    
    toast.success(
      <div>
        <strong>{product.name}</strong> added to cart!
        <div className="text-sm opacity-75">+5 loyalty points earned</div>
      </div>
    );
  };

  const handleAddToWishlist = (product) => {
    addToWishlist(product);
    toast.success(`${product.name} added to wishlist!`);
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div 
      className="min-h-screen bg-background"
      initial="initial"
      animate="animate"
      variants={stagger}
    >
      {/* Hero Section */}
      <motion.div variants={fadeInUp}>
        <HeroSection />
      </motion.div>

      {/* Trust Badges Section */}
      <motion.div variants={fadeInUp}>
        <TrustBadges />
      </motion.div>

      {/* Featured Fragrance with Storytelling */}
      <motion.div variants={fadeInUp}>
        <FeaturedFragranceCarousel />
      </motion.div>

      {/* Scent Categories Navigation */}
      <motion.section 
        className="py-16 bg-surface/50"
        variants={fadeInUp}
      >
        <div className="container-luxury">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
              Explore by Scent Journey
            </h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Each fragrance tells a unique story. Discover yours through our carefully curated scent families.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { 
                name: 'Floral', 
                icon: '🌸', 
                description: 'Romantic & Feminine',
                gradient: 'from-pink-100 to-rose-200'
              },
              { 
                name: 'Woody', 
                icon: '🌲', 
                description: 'Warm & Sophisticated',
                gradient: 'from-amber-100 to-orange-200'
              },
              { 
                name: 'Citrus', 
                icon: '🍊', 
                description: 'Fresh & Energizing',
                gradient: 'from-yellow-100 to-orange-200'
              },
              { 
                name: 'Oriental', 
                icon: '✨', 
                description: 'Mysterious & Exotic',
                gradient: 'from-purple-100 to-indigo-200'
              }
            ].map((category, index) => (
              <motion.div
                key={category.name}
                className="luxury-card p-6 text-center cursor-pointer hover-lift"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.gradient} flex items-center justify-center text-2xl`}>
                  {category.icon}
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {category.name}
                </h3>
                <p className="text-sm text-text-secondary">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Products Section with Enhanced Filtering */}
      <motion.div variants={fadeInUp}>
        <ProductsSection 
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />
      </motion.div>

      {/* Discovery Tool Teaser */}
      <motion.section 
        className="py-20 bg-gradient-to-br from-primary/5 to-accent/5"
        variants={fadeInUp}
      >
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              className="mb-8"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-6">
                Not Sure Where to Start?
              </h2>
              <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
                Take our personalized fragrance quiz to discover scents that match your personality, 
                mood, and lifestyle. Our expert algorithm analyzes your preferences to recommend 
                your perfect fragrance match.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="btn-primary text-lg px-8 py-4"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.location.href = '/fragrance-discovery-tool'}
                >
                  Take the Quiz
                </motion.button>
                <div className="text-sm text-text-secondary">
                  ⏱️ Takes only 2 minutes
                </div>
              </div>
            </motion.div>

            {/* Quiz Preview Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              {[
                { 
                  step: '1', 
                  title: 'Personality', 
                  desc: 'Tell us about your style' 
                },
                { 
                  step: '2', 
                  title: 'Preferences', 
                  desc: 'Share your scent likes' 
                },
                { 
                  step: '3', 
                  title: 'Match', 
                  desc: 'Get personalized results' 
                }
              ].map((item, index) => (
                <motion.div
                  key={item.step}
                  className="luxury-card p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-primary mb-2">{item.title}</h3>
                  <p className="text-sm text-text-secondary">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.div variants={fadeInUp}>
        <NewsletterSection />
      </motion.div>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default Homepage;