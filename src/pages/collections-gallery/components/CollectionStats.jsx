import React from 'react';
import Icon from '../../../components/AppIcon';

const CollectionStats = ({ stats }) => {
  const statItems = [
    {
      icon: 'Package',
      label: 'Total Fragrances',
      value: stats.totalFragrances,
      color: 'text-accent'
    },
    {
      icon: 'Star',
      label: 'Avg Rating',
      value: `${stats.avgRating}/5`,
      color: 'text-accent'
    },
    {
      icon: 'DollarSign',
      label: 'Price Range',
      value: `$${stats.priceRange.min} - $${stats.priceRange.max}`,
      color: 'text-secondary'
    },
    {
      icon: 'Clock',
      label: 'Longevity',
      value: `${stats.avgLongevity}h avg`,
      color: 'text-secondary'
    }
  ];

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      {statItems.map((item, index) => (
        <div 
          key={index}
          className="bg-card rounded-lg p-4 text-center shadow-luxury hover:shadow-luxury-lg transition-all duration-300"
        >
          <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-accent/10 mb-3`}>
            <Icon name={item.icon} size={20} className={item.color} />
          </div>
          <div className="font-display font-bold text-lg text-primary mb-1">
            {item.value}
          </div>
          <div className="text-text-secondary text-sm font-body">
            {item.label}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionStats;