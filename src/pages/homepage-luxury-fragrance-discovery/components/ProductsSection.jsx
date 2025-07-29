import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import ProductCard from '../../../components/ProductCard';
import { products, getBestSellers, getNewArrivals, getLimitedEdition } from '../../../data/products';

const ProductsSection = ({ onAddToCart, onAddToWishlist }) => {
  const [activeTab, setActiveTab] = useState('featured');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);

  const tabs = [
    { id: 'featured', label: 'Featured', icon: 'Star' },
    { id: 'new', label: 'New Arrivals', icon: 'Sparkles' },
    { id: 'limited', label: 'Limited Edition', icon: 'Clock' },
    { id: 'bestsellers', label: 'Best Sellers', icon: 'TrendingUp' }
  ];

  useEffect(() => {
    let filteredProducts = [];
    
    switch (activeTab) {
      case 'featured':
        filteredProducts = products.slice(0, 6);
        break;
      case 'new':
        filteredProducts = getNewArrivals();
        break;
      case 'limited':
        filteredProducts = getLimitedEdition();
        break;
      case 'bestsellers':
        filteredProducts = getBestSellers();
        break;
      default:
        filteredProducts = products.slice(0, 6);
    }

    setDisplayedProducts(showAll ? filteredProducts : filteredProducts.slice(0, 6));
  }, [activeTab, showAll]);

  const handleAddToCart = (product) => {
    if (onAddToCart) {
      onAddToCart(product);
    }
  };

  const handleAddToWishlist = (product) => {
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Shop Our Collection
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-body max-w-2xl mx-auto px-4">
            Discover our curated selection of luxury fragrances, each crafted with the finest ingredients and designed to become part of your unique story.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => {
                setActiveTab(tab.id);
                setShowAll(false);
              }}
              className={`flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full font-body font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground shadow-luxury'
                  : 'bg-muted text-text-secondary hover:text-primary hover:bg-accent/10'
              }`}
            >
              <Icon name={tab.icon} size={16} className="sm:w-5 sm:h-5" />
              <span className="text-sm sm:text-base">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {displayedProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>

        {/* Load More / View All Button */}
        {displayedProducts.length > 0 && (
          <div className="text-center">
            {!showAll ? (
              <Button
                onClick={() => setShowAll(true)}
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10"
                iconName="ArrowDown"
                iconPosition="right"
              >
                View All {activeTab === 'featured' ? 'Products' : tabs.find(t => t.id === activeTab)?.label}
              </Button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => setShowAll(false)}
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10"
                  iconName="ArrowUp"
                  iconPosition="right"
                >
                  Show Less
                </Button>
                <Link to="/collections-gallery">
                  <Button
                    variant="default"
                    size="lg"
                    className="bg-luxury-gold hover:bg-luxury-amber"
                    iconName="Grid3X3"
                    iconPosition="right"
                  >
                    Browse All Collections
                  </Button>
                </Link>
              </div>
            )}
          </div>
        )}

        {/* Empty State */}
        {displayedProducts.length === 0 && (
          <div className="text-center py-12">
            <Icon name="Package" size={48} className="text-text-secondary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-primary mb-2">
              No products found
            </h3>
            <p className="text-text-secondary font-body mb-4">
              Check back soon for new arrivals in this category.
            </p>
            <Link to="/collections-gallery">
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
              >
                Browse All Products
              </Button>
            </Link>
          </div>
        )}

        {/* Shopping Features */}
        <div className="mt-16 sm:mt-20 lg:mt-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Authenticity Guaranteed</h3>
              <p className="text-text-secondary text-sm">Every fragrance is authentic and sourced directly from the finest perfumeries.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Free Samples</h3>
              <p className="text-text-secondary text-sm">Try before you buy with our complimentary sample program.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Heart" size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Personalized Service</h3>
              <p className="text-text-secondary text-sm">Get expert guidance to find your perfect signature scent.</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="RefreshCw" size={24} className="text-accent" />
              </div>
              <h3 className="font-display font-semibold text-primary mb-2">Easy Returns</h3>
              <p className="text-text-secondary text-sm">30-day return policy for your complete peace of mind.</p>
            </div>
          </div>
        </div>

        {/* Quick Purchase CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-2xl p-6 sm:p-8">
            <h3 className="font-display font-bold text-xl sm:text-2xl text-primary mb-3">
              Ready to Find Your Signature Scent?
            </h3>
            <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
              Start your fragrance journey today with our expert-curated collection. 
              Add your favorites to cart and experience luxury perfumery at its finest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/collections-gallery">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-amber"
                  iconName="ShoppingCart"
                  iconPosition="right"
                >
                  Shop Now
                </Button>
              </Link>
              <Link to="/fragrance-discovery-tool">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10"
                  iconName="Search"
                  iconPosition="right"
                >
                  Take Scent Quiz
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection; 