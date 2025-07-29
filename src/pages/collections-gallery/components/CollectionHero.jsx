import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const CollectionHero = ({ collection, onExploreClick }) => {
  return (
    <div className="relative h-96 lg:h-[500px] overflow-hidden rounded-2xl shadow-luxury-lg mb-12">
      <div className="absolute inset-0">
        <Image
          src={collection.heroImage}
          alt={collection.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/40 to-transparent"></div>
      </div>
      
      <div className="relative h-full flex items-center">
        <div className="w-full px-6 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-4">
              <span className="inline-block px-4 py-2 bg-accent/20 text-accent font-body font-medium text-sm rounded-full backdrop-blur-sm">
                {collection.category}
              </span>
            </div>
            
            <h1 className="font-display font-bold text-4xl lg:text-6xl text-white mb-4 breathing-text">
              {collection.name}
            </h1>
            
            <p className="font-body text-lg lg:text-xl text-white/90 mb-8 leading-relaxed">
              {collection.description}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="default"
                size="lg"
                onClick={onExploreClick}
                className="bg-accent hover:bg-accent/90 text-primary font-semibold"
              >
                Explore Collection
              </Button>
              
              <Button
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
              >
                View Sample Set
              </Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 right-6 text-white/70 font-body text-sm">
        {collection.fragranceCount} Fragrances
      </div>
    </div>
  );
};

export default CollectionHero;