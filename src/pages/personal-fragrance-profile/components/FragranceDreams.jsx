import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FragranceDreams = ({ wishlist }) => {
  const [sortBy, setSortBy] = useState('added');
  const [filterBy, setFilterBy] = useState('all');

  const sortOptions = [
    { value: 'added', label: 'Recently Added' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'priority', label: 'Priority' }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Items' },
    { value: 'available', label: 'Available' },
    { value: 'sale', label: 'On Sale' },
    { value: 'samples', label: 'Sample Requested' }
  ];

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-500 bg-red-50';
      case 'medium': return 'text-yellow-500 bg-yellow-50';
      case 'low': return 'text-green-500 bg-green-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  const getPriorityIcon = (priority) => {
    switch (priority) {
      case 'high': return 'AlertTriangle';
      case 'medium': return 'Clock';
      case 'low': return 'Minus';
      default: return 'Circle';
    }
  };

  const sortedAndFilteredWishlist = wishlist
    .filter(item => {
      if (filterBy === 'all') return true;
      if (filterBy === 'available') return item.inStock;
      if (filterBy === 'sale') return item.onSale;
      if (filterBy === 'samples') return item.sampleRequested;
      return true;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low': return a.price - b.price;
        case 'price-high': return b.price - a.price;
        case 'priority': 
          const priorityOrder = { high: 3, medium: 2, low: 1 };
          return priorityOrder[b.priority] - priorityOrder[a.priority];
        default: return new Date(b.dateAdded) - new Date(a.dateAdded);
      }
    });

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Fragrance Dreams</h3>
          <p className="text-text-secondary font-body">Your curated wishlist of desired scents</p>
        </div>
        <div className="flex items-center space-x-2">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-input text-primary text-sm focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="px-3 py-2 border border-border rounded-lg bg-input text-primary text-sm focus:ring-2 focus:ring-accent focus:border-transparent"
          >
            {filterOptions.map(option => (
              <option key={option.value} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {sortedAndFilteredWishlist.map((item) => (
          <div key={item.id} className="group bg-background rounded-xl p-6 border border-border hover:shadow-luxury transition-all duration-300">
            <div className="flex space-x-4">
              <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between mb-2">
                  <div className="min-w-0 flex-1">
                    <h4 className="font-display font-semibold text-primary truncate group-hover:text-accent transition-colors duration-300">
                      {item.name}
                    </h4>
                    <p className="text-sm text-text-secondary font-body">{item.brand}</p>
                  </div>
                  <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(item.priority)}`}>
                    <Icon name={getPriorityIcon(item.priority)} size={12} />
                    <span className="capitalize">{item.priority}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-2">
                    <span className={`font-semibold ${item.onSale ? 'text-red-500' : 'text-primary'}`}>
                      ${item.onSale ? item.salePrice : item.price}
                    </span>
                    {item.onSale && (
                      <span className="text-sm text-text-secondary line-through">${item.price}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    {item.onSale && (
                      <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Sale
                      </span>
                    )}
                    {!item.inStock && (
                      <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs font-medium">
                        Out of Stock
                      </span>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm text-text-secondary mb-3">
                  <div className="flex items-center space-x-1">
                    <Icon name="Calendar" size={12} />
                    <span>Added {item.dateAdded}</span>
                  </div>
                  {item.priceDropAlert && (
                    <div className="flex items-center space-x-1 text-green-500">
                      <Icon name="TrendingDown" size={12} />
                      <span>Price dropped!</span>
                    </div>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant={item.inStock ? "default" : "outline"}
                    size="sm"
                    disabled={!item.inStock}
                    iconName="ShoppingCart"
                    className="flex-1"
                  >
                    {item.inStock ? 'Add to Cart' : 'Notify When Available'}
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    iconName={item.sampleRequested ? "Check" : "Droplets"}
                    disabled={item.sampleRequested}
                  >
                    {item.sampleRequested ? 'Requested' : 'Sample'}
                  </Button>
                  <Button variant="ghost" size="sm" iconName="X">
                  </Button>
                </div>
              </div>
            </div>

            {item.notes && (
              <div className="mt-4 p-3 bg-muted rounded-lg">
                <p className="text-sm text-text-secondary font-body italic">
                  "{item.notes}"
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      {sortedAndFilteredWishlist.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Heart" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="font-display font-semibold text-primary mb-2">No items in your wishlist</h4>
          <p className="text-text-secondary font-body mb-4">Start building your fragrance dreams by adding scents you'd love to try.</p>
          <Button variant="default" iconName="Plus">
            Explore Fragrances
          </Button>
        </div>
      )}

      {/* Wishlist Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">{wishlist.length}</div>
          <div className="text-sm text-text-secondary font-body">Total Items</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">
            ${wishlist.reduce((sum, item) => sum + (item.onSale ? item.salePrice : item.price), 0)}
          </div>
          <div className="text-sm text-text-secondary font-body">Total Value</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">
            {wishlist.filter(item => item.onSale).length}
          </div>
          <div className="text-sm text-text-secondary font-body">On Sale</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">
            {wishlist.filter(item => item.sampleRequested).length}
          </div>
          <div className="text-sm text-text-secondary font-body">Samples Requested</div>
        </div>
      </div>
    </div>
  );
};

export default FragranceDreams;