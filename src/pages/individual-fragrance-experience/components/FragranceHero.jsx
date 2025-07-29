import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FragranceHero = ({ fragrance, onAddToCart, onAddToWishlist }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const images = [
    fragrance.mainImage,
    fragrance.detailImage,
    fragrance.lifestyleImage,
    fragrance.ingredientImage
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square bg-card rounded-2xl overflow-hidden shadow-luxury-lg">
              <Image
                src={images[currentImageIndex]}
                alt={`${fragrance.name} - View ${currentImageIndex + 1}`}
                className={`w-full h-full object-cover transition-transform duration-500 cursor-zoom-in ${
                  isZoomed ? 'scale-150' : 'scale-100'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              
              {/* Navigation Arrows */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-luxury"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors shadow-luxury"
              >
                <Icon name="ChevronRight" size={20} />
              </button>

              {/* 360° Indicator */}
              <div className="absolute top-4 right-4 bg-accent/90 text-primary px-3 py-1 rounded-full text-sm font-medium">
                360° View
              </div>
            </div>

            {/* Thumbnail Navigation */}
            <div className="flex space-x-3">
              {images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    currentImageIndex === index
                      ? 'border-accent shadow-luxury'
                      : 'border-border hover:border-accent/50'
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${fragrance.name} thumbnail ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Information */}
          <div className="space-y-6">
            {/* Brand & Name */}
            <div>
              <p className="text-secondary font-medium text-lg mb-2">{fragrance.brand}</p>
              <h1 className="font-display text-4xl lg:text-5xl font-bold text-primary breathing-text">
                {fragrance.name}
              </h1>
              <p className="text-text-secondary mt-2 font-accent text-xl">
                {fragrance.subtitle}
              </p>
            </div>

            {/* Rating & Reviews */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Icon
                    key={i}
                    name="Star"
                    size={20}
                    className={i < Math.floor(fragrance.rating) ? 'text-accent fill-current' : 'text-border'}
                  />
                ))}
                <span className="text-primary font-medium ml-2">{fragrance.rating}</span>
              </div>
              <span className="text-text-secondary">({fragrance.reviewCount} reviews)</span>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-baseline space-x-3">
                <span className="text-3xl font-bold text-primary">${fragrance.price}</span>
                {fragrance.originalPrice && (
                  <span className="text-xl text-text-secondary line-through">
                    ${fragrance.originalPrice}
                  </span>
                )}
              </div>
              <p className="text-text-secondary">
                {fragrance.size} • {fragrance.concentration}
              </p>
            </div>

            {/* Size Options */}
            <div className="space-y-3">
              <h3 className="font-medium text-primary">Size Options</h3>
              <div className="grid grid-cols-3 gap-3">
                {fragrance.sizeOptions.map((option) => (
                  <button
                    key={option.size}
                    className={`p-3 rounded-lg border-2 text-center transition-all ${
                      option.size === fragrance.size
                        ? 'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="font-medium">{option.size}</div>
                    <div className="text-sm text-text-secondary">${option.price}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button
                  variant="default"
                  className="flex-1 bg-luxury-gold hover:bg-luxury-amber"
                  onClick={onAddToCart}
                  iconName="ShoppingBag"
                  iconPosition="left"
                >
                  Add to Cart
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={onAddToWishlist}
                  className="scent-trail"
                >
                  <Icon name="Heart" size={20} />
                </Button>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button variant="outline" iconName="Gift" iconPosition="left">
                  Gift Wrap
                </Button>
                <Button variant="outline" iconName="Droplets" iconPosition="left">
                  Try Sample
                </Button>
              </div>
            </div>

            {/* Key Features */}
            <div className="bg-card p-6 rounded-xl space-y-4">
              <h3 className="font-medium text-primary">Fragrance Details</h3>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-text-secondary">Longevity:</span>
                  <span className="ml-2 font-medium">{fragrance.longevity}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Sillage:</span>
                  <span className="ml-2 font-medium">{fragrance.sillage}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Season:</span>
                  <span className="ml-2 font-medium">{fragrance.season}</span>
                </div>
                <div>
                  <span className="text-text-secondary">Occasion:</span>
                  <span className="ml-2 font-medium">{fragrance.occasion}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FragranceHero;