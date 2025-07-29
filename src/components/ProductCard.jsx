import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Eye, ShoppingCart, Star, Minus, Plus } from 'lucide-react';
import { useCart } from '../contexts/CartContext';
import { sizes } from '../data/perfumes';

const ProductCard = ({ product, onAddToCart, onAddToWishlist, viewMode = 'grid' }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const { isInWishlist, isInCart } = useCart();

  const selectedSizeData = sizes.find(size => size.value === selectedSize);
  const currentPrice = product.price + (selectedSizeData?.price || 0);
  const inWishlist = isInWishlist(product.id);
  const inCart = isInCart(product.id, selectedSize);

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToCart) {
      onAddToCart({
        ...product,
        selectedSize,
        quantity,
        price: currentPrice
      });
    }
  };

  const handleAddToWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const formatPrice = (price) => {
    return `$${price}`;
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <Star key={i} size={14} className="text-accent fill-current" />
      );
    }

    if (hasHalfStar) {
      stars.push(
        <Star key="half" size={14} className="text-accent fill-current opacity-50" />
      );
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <Star key={`empty-${i}`} size={14} className="text-muted-foreground" />
      );
    }

    return stars;
  };

  const getIntensityLevel = (intensity) => {
    switch (intensity) {
      case 'Light': return 2;
      case 'Moderate': return 3;
      case 'Strong': return 4;
      case 'Intense': return 5;
      default: return 2;
    }
  };

  const intensityLevel = getIntensityLevel(product.intensity);

  if (viewMode === 'list') {
    return (
      <motion.div
        className="luxury-card p-6 hover-lift"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.02 }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="flex gap-6">
          {/* Image */}
          <div className="relative w-32 h-32 flex-shrink-0">
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-full object-cover rounded-lg"
            />
            {product.discount > 0 && (
              <div className="absolute top-2 left-2 bg-error text-error-foreground px-2 py-1 rounded-full text-xs font-medium">
                -{product.discount}%
              </div>
            )}
          </div>

          {/* Content */}
          <div className="flex-1">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm text-accent font-medium">{product.brand}</p>
                <h3 className="font-display text-lg font-semibold text-primary">
                  {product.name}
                </h3>
                <p className="text-sm text-text-secondary">{product.scentFamily}</p>
              </div>
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="text-sm text-text-secondary ml-1">
                  ({product.reviewCount})
                </span>
              </div>
            </div>

            <p className="text-sm text-text-secondary mb-3 line-clamp-2">
              {product.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="font-display text-xl font-bold text-primary">
                  {formatPrice(currentPrice)}
                </span>
                {product.originalPrice > product.price && (
                  <span className="text-sm text-text-secondary line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleAddToWishlist}
                  className={`p-2 rounded-full border transition-colors ${
                    inWishlist 
                      ? 'border-accent bg-accent/10 text-accent' 
                      : 'border-border hover:border-accent hover:text-accent'
                  }`}
                >
                  <Heart size={16} className={inWishlist ? 'fill-current' : ''} />
                </button>
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="btn-primary px-6 py-2"
                >
                  <ShoppingCart size={16} className="mr-2" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="product-card group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/individual-fragrance-experience/${product.id}`}>
        {/* Product Image */}
        <div className="relative overflow-hidden aspect-square rounded-lg mb-4">
          <img
            src={product.thumbnail}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          
          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.isNew && (
              <span className="badge badge-secondary">New</span>
            )}
            {product.category.includes('Limited Edition') && (
              <span className="badge bg-error text-error-foreground">Limited</span>
            )}
            {product.discount > 0 && (
              <span className="badge bg-success text-success-foreground">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Quick Actions */}
          <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
          }`}>
            <button
              onClick={handleAddToWishlist}
              className={`w-10 h-10 glass-effect rounded-full flex items-center justify-center transition-all duration-200 ${
                inWishlist 
                  ? 'bg-accent/20 text-accent' 
                  : 'hover:bg-white/20 text-white'
              }`}
            >
              <Heart size={18} className={inWishlist ? 'fill-current' : ''} />
            </button>
            <button className="w-10 h-10 glass-effect rounded-full flex items-center justify-center hover:bg-white/20 text-white transition-all duration-200">
              <Eye size={18} />
            </button>
          </div>

          {/* Stock Status */}
          {!product.inStock && (
            <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
              <span className="bg-error text-error-foreground px-4 py-2 rounded-lg font-medium">
                Out of Stock
              </span>
            </div>
          )}
        </div>
      </Link>

      {/* Product Info */}
      <div className="space-y-3">
        {/* Brand & Rating */}
        <div className="flex items-center justify-between">
          <span className="text-sm text-accent font-medium">{product.brand}</span>
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
            <span className="text-xs text-text-secondary ml-1">
              ({product.reviewCount})
            </span>
          </div>
        </div>

        {/* Product Name */}
        <div>
          <h3 className="font-display text-lg font-semibold text-primary mb-1 line-clamp-1">
            {product.name}
          </h3>
          <p className="text-sm text-text-secondary">
            {product.scentFamily}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-text-secondary line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="font-display text-xl font-bold text-primary">
            {formatPrice(currentPrice)}
          </span>
          {product.originalPrice > product.price && (
            <span className="text-sm text-text-secondary line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Size Selection */}
        <div>
          <label className="text-xs text-text-secondary mb-2 block">Size:</label>
          <div className="flex gap-2">
            {sizes.map((size) => (
              <button
                key={size.value}
                onClick={(e) => {
                  e.preventDefault();
                  setSelectedSize(size.value);
                }}
                className={`px-3 py-1 rounded-lg text-xs font-medium transition-colors ${
                  selectedSize === size.value
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-text-secondary hover:bg-accent/10'
                }`}
              >
                {size.label}
              </button>
            ))}
          </div>
        </div>

        {/* Intensity & Longevity */}
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <span className="text-text-secondary block mb-1">Intensity:</span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full ${
                    i < intensityLevel ? 'bg-accent' : 'bg-border'
                  }`}
                />
              ))}
            </div>
          </div>
          <div>
            <span className="text-text-secondary block mb-1">Longevity:</span>
            <p className="text-primary">{product.longevity}</p>
          </div>
        </div>

        {/* Quantity & Add to Cart */}
        <div className="space-y-3 pt-2">
          <div className="flex items-center gap-3">
            <span className="text-sm text-text-secondary">Qty:</span>
            <div className="quantity-selector">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(Math.max(1, quantity - 1));
                }}
                className="quantity-btn"
              >
                <Minus size={14} />
              </button>
              <span className="w-10 h-8 flex items-center justify-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  setQuantity(quantity + 1);
                }}
                className="quantity-btn"
              >
                <Plus size={14} />
              </button>
            </div>
          </div>

          <motion.button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            className={`w-full btn-primary py-3 ${
              !product.inStock ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={{ scale: product.inStock ? 1.02 : 1 }}
            whileTap={{ scale: product.inStock ? 0.98 : 1 }}
          >
            <ShoppingCart size={16} className="mr-2" />
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </motion.button>

          <div className="flex gap-2">
            <motion.button
              onClick={handleAddToWishlist}
              className={`flex-1 btn-ghost py-2 text-sm ${
                inWishlist ? 'text-accent' : ''
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Heart size={14} className={`mr-2 ${inWishlist ? 'fill-current' : ''}`} />
              {inWishlist ? 'In Wishlist' : 'Wishlist'}
            </motion.button>
            <Link to={`/individual-fragrance-experience/${product.id}`} className="flex-1">
              <motion.button
                className="w-full btn-ghost py-2 text-sm"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye size={14} className="mr-2" />
                Details
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard; 