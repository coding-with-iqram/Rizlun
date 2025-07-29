import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CollectionCard = ({ collection }) => {
  return (
    <Link 
      to={`/collections-gallery?collection=${collection.id}`}
      className="group block bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 scent-trail"
    >
      <div className="relative h-64 overflow-hidden">
        <Image
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent"></div>
        
        {collection.isLimited && (
          <div className="absolute top-4 left-4">
            <span className="inline-flex items-center px-3 py-1 bg-accent text-primary text-xs font-semibold rounded-full">
              <Icon name="Clock" size={12} className="mr-1" />
              Limited Edition
            </span>
          </div>
        )}
        
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="font-display font-bold text-xl text-white mb-1 group-hover:text-accent transition-colors duration-300">
            {collection.name}
          </h3>
          <p className="text-white/80 text-sm font-body">
            {collection.fragranceCount} Fragrances
          </p>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-text-secondary font-body text-sm mb-4 line-clamp-3">
          {collection.shortDescription}
        </p>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-primary font-body font-semibold">
              From ${collection.priceRange.min}
            </span>
            <span className="text-text-secondary text-sm">
              - ${collection.priceRange.max}
            </span>
          </div>
          
          <Icon 
            name="ArrowRight" 
            size={16} 
            className="text-accent group-hover:translate-x-1 transition-transform duration-300" 
          />
        </div>
      </div>
    </Link>
  );
};

export default CollectionCard;