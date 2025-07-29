import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FragranceWardrobe = ({ fragrances }) => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [viewMode, setViewMode] = useState('grid');

  const filters = [
    { id: 'all', label: 'All Fragrances', icon: 'Grid3X3' },
    { id: 'spring', label: 'Spring', icon: 'Flower2' },
    { id: 'summer', label: 'Summer', icon: 'Sun' },
    { id: 'autumn', label: 'Autumn', icon: 'Leaf' },
    { id: 'winter', label: 'Winter', icon: 'Snowflake' },
    { id: 'daily', label: 'Daily Wear', icon: 'Coffee' },
    { id: 'evening', label: 'Evening', icon: 'Moon' },
    { id: 'special', label: 'Special Occasions', icon: 'Sparkles' }
  ];

  const filteredFragrances = activeFilter === 'all' 
    ? fragrances 
    : fragrances.filter(fragrance => 
        fragrance.categories.includes(activeFilter) || fragrance.season === activeFilter
      );

  const getUsageColor = (usage) => {
    if (usage >= 80) return 'text-red-500';
    if (usage >= 50) return 'text-yellow-500';
    return 'text-green-500';
  };

  const getUsageLabel = (usage) => {
    if (usage >= 80) return 'Reorder Soon';
    if (usage >= 50) return 'Half Used';
    return 'Plenty Left';
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-2">My Fragrance Wardrobe</h3>
          <p className="text-text-secondary font-body">Your curated collection of signature scents</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button
            variant={viewMode === 'grid' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('grid')}
            iconName="Grid3X3"
          >
            Grid
          </Button>
          <Button
            variant={viewMode === 'list' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setViewMode('list')}
            iconName="List"
          >
            List
          </Button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {filters.map((filter) => (
          <button
            key={filter.id}
            onClick={() => setActiveFilter(filter.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
              activeFilter === filter.id
                ? 'bg-accent text-accent-foreground shadow-luxury'
                : 'bg-background text-text-secondary hover:bg-muted hover:text-primary'
            }`}
          >
            <Icon name={filter.icon} size={16} />
            <span>{filter.label}</span>
          </button>
        ))}
      </div>

      {/* Fragrances Display */}
      {viewMode === 'grid' ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFragrances.map((fragrance) => (
            <div key={fragrance.id} className="group bg-background rounded-xl p-4 hover:shadow-luxury transition-all duration-300 border border-border">
              <div className="relative mb-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={fragrance.image}
                    alt={fragrance.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-2 right-2 flex space-x-1">
                  {fragrance.categories.includes('favorite') && (
                    <div className="bg-red-500 text-white p-1 rounded-full">
                      <Icon name="Heart" size={12} />
                    </div>
                  )}
                  {fragrance.categories.includes('signature') && (
                    <div className="bg-accent text-accent-foreground p-1 rounded-full">
                      <Icon name="Star" size={12} />
                    </div>
                  )}
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-display font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {fragrance.name}
                  </h4>
                  <p className="text-sm text-text-secondary font-body">{fragrance.brand}</p>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-text-secondary font-body">Usage</span>
                  <span className={`font-semibold ${getUsageColor(fragrance.usage)}`}>
                    {getUsageLabel(fragrance.usage)}
                  </span>
                </div>

                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full transition-all duration-500 ${
                      fragrance.usage >= 80 ? 'bg-red-500' : 
                      fragrance.usage >= 50 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${fragrance.usage}%` }}
                  ></div>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center space-x-1 text-xs text-text-secondary">
                    <Icon name="Calendar" size={12} />
                    <span>Last worn: {fragrance.lastWorn}</span>
                  </div>
                  <Button variant="outline" size="xs" iconName="RotateCcw">
                    Reorder
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredFragrances.map((fragrance) => (
            <div key={fragrance.id} className="flex items-center space-x-4 p-4 bg-background rounded-xl border border-border hover:shadow-luxury transition-all duration-300">
              <div className="w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                <Image
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-primary truncate">{fragrance.name}</h4>
                    <p className="text-sm text-text-secondary font-body">{fragrance.brand}</p>
                  </div>
                  <div className="flex items-center space-x-2 ml-4">
                    {fragrance.categories.includes('favorite') && (
                      <Icon name="Heart" size={16} className="text-red-500" />
                    )}
                    {fragrance.categories.includes('signature') && (
                      <Icon name="Star" size={16} className="text-accent" />
                    )}
                  </div>
                </div>

                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-xs text-text-secondary">Usage:</span>
                      <span className={`text-xs font-semibold ${getUsageColor(fragrance.usage)}`}>
                        {getUsageLabel(fragrance.usage)}
                      </span>
                    </div>
                    <div className="flex items-center space-x-1 text-xs text-text-secondary">
                      <Icon name="Calendar" size={12} />
                      <span>Last: {fragrance.lastWorn}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="xs" iconName="RotateCcw">
                    Reorder
                  </Button>
                </div>

                <div className="mt-2 w-full bg-muted rounded-full h-1.5">
                  <div 
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      fragrance.usage >= 80 ? 'bg-red-500' : 
                      fragrance.usage >= 50 ? 'bg-yellow-500' : 'bg-green-500'
                    }`}
                    style={{ width: `${fragrance.usage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {filteredFragrances.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Package" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="font-display font-semibold text-primary mb-2">No fragrances found</h4>
          <p className="text-text-secondary font-body mb-4">Try adjusting your filter or add new fragrances to your collection.</p>
          <Button variant="default" iconName="Plus">
            Add Fragrance
          </Button>
        </div>
      )}
    </div>
  );
};

export default FragranceWardrobe;