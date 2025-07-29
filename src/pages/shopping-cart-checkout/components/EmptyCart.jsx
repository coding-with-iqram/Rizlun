import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Image from '../../../components/AppImage';

const EmptyCart = () => {
  const featuredFragrances = [
    {
      id: 1,
      name: 'Midnight Oud',
      brand: 'Azmeera Signature',
      price: 189,
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300',
      notes: ['Oud', 'Rose', 'Amber']
    },
    {
      id: 2,
      name: 'Citrus Bloom',
      brand: 'Fresh Collection',
      price: 129,
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300',
      notes: ['Bergamot', 'Neroli', 'White Tea']
    },
    {
      id: 3,
      name: 'Velvet Rose',
      brand: 'Azmeera Luxe',
      price: 159,
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300',
      notes: ['Bulgarian Rose', 'Vanilla', 'Musk']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 py-16">
        {/* Empty Cart Message */}
        <div className="text-center mb-12">
          <div className="w-32 h-32 mx-auto mb-6 bg-muted rounded-full flex items-center justify-center">
            <Icon name="ShoppingBag" size={48} className="text-text-secondary" />
          </div>
          
          <h1 className="font-display text-3xl font-bold text-primary mb-4">
            Your Cart is Empty
          </h1>
          
          <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
            Discover your perfect fragrance and start building your scent collection
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="default"
              size="lg"
              className="bg-luxury-gold hover:bg-luxury-amber"
            >
              <Link to="/fragrance-discovery-tool" className="flex items-center">
                <Icon name="Search" size={18} className="mr-2" />
                Find Your Scent
              </Link>
            </Button>
            
            <Button variant="outline" size="lg">
              <Link to="/collections-gallery" className="flex items-center">
                <Icon name="Grid3X3" size={18} className="mr-2" />
                Browse Collections
              </Link>
            </Button>
          </div>
        </div>

        {/* Featured Fragrances */}
        <div className="bg-card rounded-lg p-8 shadow-luxury border border-border">
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl font-semibold text-primary mb-2">
              Start Your Scent Journey
            </h2>
            <p className="text-text-secondary">
              Explore our most beloved fragrances, carefully curated for every personality
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredFragrances.map((fragrance) => (
              <div key={fragrance.id} className="group text-center">
                <div className="relative overflow-hidden rounded-lg mb-4">
                  <div className="aspect-square bg-muted">
                    <Image
                      src={fragrance.image}
                      alt={fragrance.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">
                      {fragrance.name}
                    </h3>
                    <p className="text-sm text-text-secondary">{fragrance.brand}</p>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1">
                    {fragrance.notes.map((note, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                      >
                        {note}
                      </span>
                    ))}
                  </div>

                  <div className="space-y-3">
                    <p className="font-display font-semibold text-xl text-primary">
                      ${fragrance.price}
                    </p>
                    
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
                    >
                      <Link to="/individual-fragrance-experience" className="flex items-center justify-center w-full">
                        <Icon name="Eye" size={14} className="mr-2" />
                        Explore
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Truck" size={24} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-primary mb-2">
              Free Shipping
            </h3>
            <p className="text-sm text-text-secondary">
              Complimentary shipping on orders over $150
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Droplets" size={24} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-primary mb-2">
              Sample Program
            </h3>
            <p className="text-sm text-text-secondary">
              Try before you buy with our 2ml sample collection
            </p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-accent/10 rounded-full flex items-center justify-center">
              <Icon name="Award" size={24} className="text-accent" />
            </div>
            <h3 className="font-display font-semibold text-primary mb-2">
              Authenticity Guarantee
            </h3>
            <p className="text-sm text-text-secondary">
              100% authentic fragrances with certificate of authenticity
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmptyCart;