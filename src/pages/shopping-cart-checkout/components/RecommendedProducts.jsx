import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const RecommendedProducts = ({ onAddToCart }) => {
  const recommendations = [
    {
      id: 'rec1',
      name: 'Midnight Oud Travel Size',
      brand: 'Azmeera Signature',
      price: 45,
      originalPrice: 65,
      size: '15ml',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
      notes: ['Oud', 'Rose', 'Amber'],
      reason: 'Perfect travel companion'
    },
    {
      id: 'rec2',
      name: 'Citrus Bloom Sample Set',
      brand: 'Discovery Collection',
      price: 28,
      size: '3x2ml',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400',
      notes: ['Bergamot', 'Neroli', 'White Tea'],
      reason: 'Explore fresh scents'
    },
    {
      id: 'rec3',
      name: 'Velvet Rose Intense',
      brand: 'Azmeera Luxe',
      price: 159,
      size: '50ml',
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400',
      notes: ['Bulgarian Rose', 'Vanilla', 'Musk'],
      reason: 'Complete your collection'
    }
  ];

  return (
    <div className="bg-card rounded-lg p-6 shadow-luxury border border-border">
      <div className="flex items-center space-x-2 mb-6">
        <Icon name="Sparkles" size={20} className="text-accent" />
        <h3 className="font-display text-xl font-semibold text-primary">
          Complete Your Scent Story
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((product) => (
          <div key={product.id} className="group">
            <div className="relative overflow-hidden rounded-lg mb-4">
              <div className="aspect-square bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              {product.originalPrice && (
                <div className="absolute top-3 left-3 bg-destructive text-destructive-foreground px-2 py-1 rounded-full text-xs font-medium">
                  Save ${product.originalPrice - product.price}
                </div>
              )}
            </div>

            <div className="space-y-3">
              <div>
                <h4 className="font-display font-semibold text-primary group-hover:text-accent transition-colors">
                  {product.name}
                </h4>
                <p className="text-sm text-text-secondary">{product.brand}</p>
                <p className="text-xs text-accent font-medium mt-1">
                  {product.reason}
                </p>
              </div>

              <div className="flex flex-wrap gap-1">
                {product.notes.map((note, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full"
                  >
                    {note}
                  </span>
                ))}
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span className="font-display font-semibold text-primary">
                    ${product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-text-secondary line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                <span className="text-xs text-text-secondary">
                  {product.size}
                </span>
              </div>

              <Button
                variant="outline"
                size="sm"
                fullWidth
                onClick={() => onAddToCart(product)}
                className="group-hover:bg-accent group-hover:text-accent-foreground transition-colors"
              >
                <Icon name="Plus" size={14} className="mr-2" />
                Add to Cart
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 bg-accent/5 rounded-lg border border-accent/20">
        <div className="flex items-start space-x-3">
          <Icon name="Gift" size={20} className="text-accent mt-1" />
          <div>
            <h4 className="font-medium text-primary mb-1">
              Gift Wrapping Available
            </h4>
            <p className="text-sm text-text-secondary">
              Add elegant gift packaging and a personalized message card for $15
            </p>
            <Button variant="link" size="sm" className="p-0 h-auto mt-2">
              Add Gift Options
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecommendedProducts;