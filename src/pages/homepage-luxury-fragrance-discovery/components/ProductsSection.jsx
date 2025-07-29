import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Filter, Grid, List, Search } from 'lucide-react';
import ProductCard from '../../../components/ProductCard';
import { 
  perfumes, 
  categories,
  getPerfumesByCategory,
  getFeaturedPerfumes,
  getBestSellers,
  getNewArrivals,
  searchPerfumes,
  filterPerfumes,
  scentFamilies
} from '../../../data/perfumes';

const ProductsSection = ({ onAddToCart, onAddToWishlist, selectedCategory, onCategoryChange }) => {
  const [activeTab, setActiveTab] = useState(selectedCategory || 'Featured');
  const [displayedProducts, setDisplayedProducts] = useState([]);
  const [showAll, setShowAll] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    scentFamily: [],
    priceRange: { min: 0, max: 200 },
    inStock: true
  });

  const tabs = [
    { id: 'Featured', label: 'Featured', icon: '⭐' },
    { id: 'New Arrivals', label: 'New Arrivals', icon: '✨' },
    { id: 'Limited Edition', label: 'Limited Edition', icon: '⏰' },
    { id: 'Best Sellers', label: 'Best Sellers', icon: '📈' }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  useEffect(() => {
    let filteredProducts = [];
    
    // Get products by category
    switch (activeTab) {
      case 'Featured':
        filteredProducts = getFeaturedPerfumes();
        break;
      case 'New Arrivals':
        filteredProducts = getNewArrivals();
        break;
      case 'Limited Edition':
        filteredProducts = getPerfumesByCategory(categories.LIMITED_EDITION);
        break;
      case 'Best Sellers':
        filteredProducts = getBestSellers();
        break;
      default:
        filteredProducts = perfumes;
    }

    // Apply search
    if (searchQuery) {
      filteredProducts = searchPerfumes(searchQuery);
    }

    // Apply filters
    filteredProducts = filterPerfumes({
      ...filters,
      products: filteredProducts
    });

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filteredProducts.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filteredProducts.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filteredProducts.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filteredProducts.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        // Keep original order for featured
        break;
    }

    setDisplayedProducts(showAll ? filteredProducts : filteredProducts.slice(0, 6));
  }, [activeTab, showAll, searchQuery, filters, sortBy]);

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setShowAll(false);
    setSearchQuery('');
    if (onCategoryChange) {
      onCategoryChange(tabId);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters({ ...filters, ...newFilters });
  };

  const clearFilters = () => {
    setFilters({
      scentFamily: [],
      priceRange: { min: 0, max: 200 },
      inStock: true
    });
    setSearchQuery('');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-b from-background to-surface/50">
      <div className="container-luxury">
        
        {/* Section Header */}
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Curated Fragrance Collection
          </h2>
          <p className="text-lg text-text-secondary max-w-3xl mx-auto">
            Discover our handpicked selection of luxury fragrances, each telling a unique story 
            and crafted with the finest ingredients from around the world.
          </p>
        </motion.div>

        {/* Search and Filters */}
        <motion.div 
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary" />
              <input
                type="text"
                placeholder="Search fragrances..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="luxury-input pl-10 w-full"
              />
            </div>

            {/* Controls */}
            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="luxury-input min-w-[180px]"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-background hover:bg-muted'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-accent text-accent-foreground' 
                      : 'bg-background hover:bg-muted'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>

              {/* Filter Toggle */}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`btn-secondary flex items-center gap-2 ${
                  showFilters ? 'bg-accent/10' : ''
                }`}
              >
                <Filter size={18} />
                <span>Filters</span>
              </button>
            </div>
          </div>

          {/* Filter Panel */}
          {showFilters && (
            <motion.div
              className="luxury-card p-6 mb-6"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Scent Family Filter */}
                <div>
                  <h3 className="font-semibold text-primary mb-3">Scent Family</h3>
                  <div className="space-y-2">
                    {Object.values(scentFamilies).map(family => (
                      <label key={family} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          checked={filters.scentFamily.includes(family)}
                          onChange={(e) => {
                            const newScentFamily = e.target.checked
                              ? [...filters.scentFamily, family]
                              : filters.scentFamily.filter(f => f !== family);
                            handleFilterChange({ scentFamily: newScentFamily });
                          }}
                          className="rounded border-border text-accent focus:ring-accent"
                        />
                        <span className="text-sm">{family}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div>
                  <h3 className="font-semibold text-primary mb-3">Price Range</h3>
                  <div className="space-y-3">
                    <div className="flex gap-2">
                      <input
                        type="number"
                        placeholder="Min"
                        value={filters.priceRange.min}
                        onChange={(e) => handleFilterChange({
                          priceRange: { ...filters.priceRange, min: Number(e.target.value) }
                        })}
                        className="luxury-input text-sm"
                      />
                      <input
                        type="number"
                        placeholder="Max"
                        value={filters.priceRange.max}
                        onChange={(e) => handleFilterChange({
                          priceRange: { ...filters.priceRange, max: Number(e.target.value) }
                        })}
                        className="luxury-input text-sm"
                      />
                    </div>
                    <div className="text-sm text-text-secondary">
                      ${filters.priceRange.min} - ${filters.priceRange.max}
                    </div>
                  </div>
                </div>

                {/* Availability Filter */}
                <div>
                  <h3 className="font-semibold text-primary mb-3">Availability</h3>
                  <label className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      checked={filters.inStock}
                      onChange={(e) => handleFilterChange({ inStock: e.target.checked })}
                      className="rounded border-border text-accent focus:ring-accent"
                    />
                    <span className="text-sm">In Stock Only</span>
                  </label>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-border">
                <div className="text-sm text-text-secondary">
                  {displayedProducts.length} product(s) found
                </div>
                <button
                  onClick={clearFilters}
                  className="btn-ghost text-sm"
                >
                  Clear All Filters
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Tab Navigation */}
        <motion.div 
          className="flex flex-wrap justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-accent-foreground shadow-luxury'
                  : 'bg-muted text-text-secondary hover:text-primary hover:bg-accent/10'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Products Grid */}
        <motion.div
          className={`grid gap-6 mb-12 ${
            viewMode === 'grid'
              ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              : 'grid-cols-1'
          }`}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              custom={index}
            >
              <ProductCard
                product={product}
                onAddToCart={onAddToCart}
                onAddToWishlist={onAddToWishlist}
                viewMode={viewMode}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Load More / View All Button */}
        {displayedProducts.length > 0 && (
          <motion.div 
            className="text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {!showAll ? (
              <motion.button
                onClick={() => setShowAll(true)}
                className="btn-secondary text-lg px-8 py-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View All {activeTab}
              </motion.button>
            ) : (
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  onClick={() => setShowAll(false)}
                  className="btn-ghost"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Show Less
                </motion.button>
                <Link to="/collections-gallery">
                  <motion.button
                    className="btn-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Browse All Collections
                  </motion.button>
                </Link>
              </div>
            )}
          </motion.div>
        )}

        {/* Empty State */}
        {displayedProducts.length === 0 && (
          <motion.div 
            className="text-center py-16"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              <Search size={32} className="text-text-secondary" />
            </div>
            <h3 className="font-display text-xl font-bold text-primary mb-2">
              No fragrances found
            </h3>
            <p className="text-text-secondary mb-6 max-w-md mx-auto">
              Try adjusting your filters or search terms to discover more fragrances.
            </p>
            <button
              onClick={clearFilters}
              className="btn-secondary"
            >
              Clear All Filters
            </button>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default ProductsSection; 