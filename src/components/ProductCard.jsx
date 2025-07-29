import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from './AppIcon';
import Image from './AppImage';
import Button from './ui/Button';

const ProductCard = ({ product, onAddToCart, onAddToWishlist, showQuickView = true }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState(product.sizes[2]?.size || '100ml'); // Default to largest size
  const [quantity, setQuantity] = useState(1);

  const selectedSizeData = product.sizes.find(size => size.size === selectedSize);
  const currentPrice = selectedSizeData?.price || product.price;

  const handleAddToCart = () => {
    if (onAddToCart) {
      onAddToCart({
        ...product,
        selectedSize,
        quantity,
        price: currentPrice
      });
    }
  };

  const handleAddToWishlist = () => {
    if (onAddToWishlist) {
      onAddToWishlist(product);
    }
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: product.currency || 'BDT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Icon key={i} name="Star" size={14} className="text-yellow-400 fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Icon key="half" name="Star" size={14} className="text-yellow-400 fill-current opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty-${i}`} name="Star" size={14} className="text-gray-300" />);
    }

    return stars;
  };

  return (
    <div 
      className="group bg-card rounded-xl sm:rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image */}
      <div className="relative overflow-hidden aspect-square">
        <Image
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-2">
          {product.isNew && (
            <span className="bg-accent text-accent-foreground px-2 py-1 rounded-full text-xs font-medium">
              New
            </span>
          )}
          {product.isLimited && (
            <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Limited
            </span>
          )}
          {product.originalPrice > product.price && (
            <span className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              Sale
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className={`absolute top-3 right-3 flex flex-col gap-2 transition-all duration-300 ${
          isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'
        }`}>
          <button
            onClick={handleAddToWishlist}
            className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/10 transition-colors"
          >
            <Icon name="Heart" size={16} className="text-primary" />
          </button>
          {showQuickView && (
            <Link to={`/individual-fragrance-experience/${product.id}`}>
              <button className="w-8 h-8 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-accent/10 transition-colors">
                <Icon name="Eye" size={16} className="text-primary" />
              </button>
            </Link>
          )}
        </div>

        {/* Stock Status */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              Out of Stock
            </span>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className="p-4 sm:p-6">
        {/* Category & Rating */}
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs sm:text-sm text-accent font-medium">
            {product.category}
          </span>
          <div className="flex items-center gap-1">
            {renderStars(product.rating)}
            <span className="text-xs text-text-secondary ml-1">
              ({product.reviews})
            </span>
          </div>
        </div>

        {/* Product Name & Subtitle */}
        <div className="mb-2">
          <h3 className="font-display font-semibold text-primary text-sm sm:text-base mb-1">
            {product.name}
          </h3>
          <p className="font-accent text-secondary text-xs sm:text-sm">
            {product.subtitle}
          </p>
        </div>

        {/* Description */}
        <p className="text-text-secondary text-xs sm:text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price - Made More Prominent */}
        <div className="flex items-center gap-2 mb-3">
          <span className="font-display font-bold text-lg sm:text-xl text-primary">
            {formatPrice(currentPrice)}
          </span>
          {product.originalPrice > currentPrice && (
            <span className="text-sm text-text-secondary line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>

        {/* Size Selection */}
        <div className="mb-4">
          <label className="text-xs text-text-secondary mb-2 block">Size:</label>
          <div className="flex gap-2">
            {product.sizes.map((size) => (
              <button
                key={size.size}
                onClick={() => setSelectedSize(size.size)}
                className={`px-2 py-1 rounded text-xs font-medium transition-colors ${
                  selectedSize === size.size
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-muted text-text-secondary hover:bg-accent/10'
                }`}
              >
                {size.size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity & Add to Cart - Made More Prominent */}
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <label className="text-xs text-text-secondary">Qty:</label>
            <div className="flex items-center border border-border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon name="Minus" size={14} />
              </button>
              <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
              >
                <Icon name="Plus" size={14} />
              </button>
            </div>
          </div>

          {/* Primary Add to Cart Button */}
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock}
            fullWidth
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-amber text-primary-foreground font-semibold"
            iconName="ShoppingCart"
            iconPosition="left"
          >
            {product.inStock ? 'Add to Cart' : 'Out of Stock'}
          </Button>

          {/* Secondary Actions */}
          <div className="flex gap-2">
            <Button
              onClick={handleAddToWishlist}
              variant="outline"
              size="sm"
              className="flex-1 border-accent text-accent hover:bg-accent/10"
              iconName="Heart"
              iconPosition="left"
            >
              Wishlist
            </Button>
            <Link to={`/individual-fragrance-experience/${product.id}`} className="flex-1">
              <Button
                variant="outline"
                size="sm"
                className="w-full border-border text-text-secondary hover:bg-muted"
                iconName="Eye"
                iconPosition="left"
              >
                Details
              </Button>
            </Link>
          </div>
        </div>

        {/* Product Details */}
        <div className="mt-4 pt-4 border-t border-border">
          <div className="grid grid-cols-2 gap-2 text-xs text-text-secondary">
            <div>
              <span className="font-medium">Intensity:</span>
              <div className="flex gap-1 mt-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-1.5 h-1.5 rounded-full ${
                      i < product.intensity ? 'bg-accent' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
            </div>
            <div>
              <span className="font-medium">Longevity:</span>
              <p className="mt-1">{product.longevity}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard; 