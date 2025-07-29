import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FragranceCard = ({ fragrance, onAddToSample }) => {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 group">
      <div className="relative">
        <Link to={`/individual-fragrance-experience?id=${fragrance.id}`}>
          <div className="relative h-64 overflow-hidden">
            <Image
              src={fragrance.image}
              alt={fragrance.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </Link>
        
        {fragrance.isNew && (
          <div className="absolute top-4 left-4">
            <span className="inline-block px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
              New
            </span>
          </div>
        )}
        
        <button 
          className="absolute top-4 right-4 p-2 bg-white/90 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white scent-trail"
          onClick={(e) => {
            e.preventDefault();
            // Add to wishlist functionality
          }}
        >
          <Icon name="Heart" size={16} className="text-primary" />
        </button>
      </div>
      
      <div className="p-6">
        <Link to={`/individual-fragrance-experience?id=${fragrance.id}`}>
          <h3 className="font-display font-bold text-lg text-primary mb-2 group-hover:text-accent transition-colors duration-300">
            {fragrance.name}
          </h3>
        </Link>
        
        <p className="text-text-secondary text-sm mb-3 font-body">
          {fragrance.brand}
        </p>
        
        <div className="mb-4">
          <div className="flex flex-wrap gap-1 mb-2">
            {fragrance.topNotes.slice(0, 3).map((note, index) => (
              <span 
                key={index}
                className="inline-block px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-body"
              >
                {note}
              </span>
            ))}
          </div>
          <p className="text-text-secondary text-xs font-body">
            Top Notes
          </p>
        </div>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <span className="font-display font-bold text-lg text-primary">
              ${fragrance.price}
            </span>
            {fragrance.originalPrice && (
              <span className="text-text-secondary text-sm line-through">
                ${fragrance.originalPrice}
              </span>
            )}
          </div>
          
          <div className="flex items-center space-x-1">
            <Icon name="Star" size={14} className="text-accent fill-current" />
            <span className="text-sm font-body text-text-secondary">
              {fragrance.rating} ({fragrance.reviews})
            </span>
          </div>
        </div>
        
        <div className="flex gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onAddToSample(fragrance)}
            className="flex-1 text-xs"
            iconName="Plus"
            iconSize={14}
          >
            Sample
          </Button>
          
          <Button
            variant="default"
            size="sm"
            className="flex-1 text-xs bg-luxury-gold hover:bg-luxury-amber"
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FragranceCard;