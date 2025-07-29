import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const PersonalizedRecommendations = ({ recommendations }) => {
  const [activeCategory, setActiveCategory] = useState('for-you');

  const categories = [
    { id: 'for-you', label: 'Curated for You', icon: 'User', count: recommendations.forYou?.length || 0 },
    { id: 'seasonal', label: 'Seasonal Picks', icon: 'Calendar', count: recommendations.seasonal?.length || 0 },
    { id: 'trending', label: 'Trending Now', icon: 'TrendingUp', count: recommendations.trending?.length || 0 },
    { id: 'similar', label: 'Similar to Owned', icon: 'Copy', count: recommendations.similar?.length || 0 }
  ];

  const getRecommendationReason = (reason) => {
    const reasons = {
      'scent-profile': { icon: 'User', text: 'Matches your scent profile', color: 'text-blue-500' },
      'purchase-history': { icon: 'ShoppingBag', text: 'Based on purchase history', color: 'text-green-500' },
      'seasonal': { icon: 'Calendar', text: 'Perfect for current season', color: 'text-orange-500' },
      'trending': { icon: 'TrendingUp', text: 'Popular with similar users', color: 'text-purple-500' },
      'wishlist': { icon: 'Heart', text: 'Similar to wishlist items', color: 'text-red-500' },
      'quiz-result': { icon: 'Brain', text: 'Based on quiz results', color: 'text-indigo-500' }
    };
    return reasons[reason] || { icon: 'Star', text: 'Recommended for you', color: 'text-accent' };
  };

  const getCurrentRecommendations = () => {
    switch (activeCategory) {
      case 'for-you': return recommendations.forYou || [];
      case 'seasonal': return recommendations.seasonal || [];
      case 'trending': return recommendations.trending || [];
      case 'similar': return recommendations.similar || [];
      default: return [];
    }
  };

  const currentRecommendations = getCurrentRecommendations();

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">Curated for You</h3>
        <p className="text-text-secondary font-body">Personalized fragrance recommendations based on your unique preferences</p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-body font-medium transition-all duration-300 ${
              activeCategory === category.id
                ? 'bg-accent text-accent-foreground shadow-luxury'
                : 'bg-background text-text-secondary hover:bg-muted hover:text-primary'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.label}</span>
            <span className="bg-current bg-opacity-20 text-xs px-2 py-0.5 rounded-full">
              {category.count}
            </span>
          </button>
        ))}
      </div>

      {/* Recommendations Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentRecommendations.map((item) => {
          const reasonData = getRecommendationReason(item.reason);
          return (
            <div key={item.id} className="group bg-background rounded-xl p-6 border border-border hover:shadow-luxury transition-all duration-300">
              <div className="relative mb-4">
                <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="absolute top-2 right-2 flex space-x-1">
                  {item.isNew && (
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      New
                    </span>
                  )}
                  {item.onSale && (
                    <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      Sale
                    </span>
                  )}
                </div>
                <div className="absolute top-2 left-2">
                  <div className={`flex items-center space-x-1 bg-white bg-opacity-90 px-2 py-1 rounded-full text-xs ${reasonData.color}`}>
                    <Icon name={reasonData.icon} size={12} />
                    <span className="font-medium">
                      {item.matchPercentage}% match
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-display font-semibold text-primary group-hover:text-accent transition-colors duration-300">
                    {item.name}
                  </h4>
                  <p className="text-sm text-text-secondary font-body">{item.brand}</p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`font-semibold ${item.onSale ? 'text-red-500' : 'text-primary'}`}>
                      ${item.onSale ? item.salePrice : item.price}
                    </span>
                    {item.onSale && (
                      <span className="text-sm text-text-secondary line-through">${item.price}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-1 text-sm text-text-secondary">
                    <Icon name="Star" size={14} className="text-yellow-500" />
                    <span>{item.rating}</span>
                    <span>({item.reviews})</span>
                  </div>
                </div>

                <div className={`flex items-center space-x-2 text-xs ${reasonData.color}`}>
                  <Icon name={reasonData.icon} size={12} />
                  <span>{reasonData.text}</span>
                </div>

                <div className="flex flex-wrap gap-1 mb-3">
                  {item.notes.slice(0, 3).map((note, index) => (
                    <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-1 rounded-full">
                      {note}
                    </span>
                  ))}
                  {item.notes.length > 3 && (
                    <span className="text-xs text-text-secondary px-2 py-1">
                      +{item.notes.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex space-x-2">
                  <Button variant="default" size="sm" className="flex-1" iconName="ShoppingCart">
                    Add to Cart
                  </Button>
                  <Button variant="outline" size="sm" iconName="Heart">
                  </Button>
                  <Button variant="outline" size="sm" iconName="Droplets">
                  </Button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {currentRecommendations.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="font-display font-semibold text-primary mb-2">No recommendations yet</h4>
          <p className="text-text-secondary font-body mb-4">
            Complete your fragrance profile to get personalized recommendations.
          </p>
          <Button variant="default" iconName="Brain">
            Take Fragrance Quiz
          </Button>
        </div>
      )}

      {/* Recommendation Insights */}
      {currentRecommendations.length > 0 && (
        <div className="mt-8 p-6 bg-accent/10 rounded-xl">
          <h4 className="font-display font-semibold text-primary mb-3">Why These Recommendations?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h5 className="font-medium text-primary text-sm">Based on Your Profile:</h5>
              <ul className="space-y-1 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={12} className="text-green-500" />
                  <span>Strong preference for {recommendations.insights?.topFamily || 'woody'} fragrances</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={12} className="text-green-500" />
                  <span>Enjoys {recommendations.insights?.preferredIntensity || 'moderate'} intensity scents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Check" size={12} className="text-green-500" />
                  <span>Typically wears fragrance for {recommendations.insights?.commonOccasion || 'daily'} occasions</span>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h5 className="font-medium text-primary text-sm">Trending Insights:</h5>
              <ul className="space-y-1 text-sm text-text-secondary">
                <li className="flex items-center space-x-2">
                  <Icon name="TrendingUp" size={12} className="text-blue-500" />
                  <span>Users with similar profiles love these scents</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Calendar" size={12} className="text-orange-500" />
                  <span>Perfect for the current season</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Icon name="Star" size={12} className="text-yellow-500" />
                  <span>Highly rated by fragrance enthusiasts</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalizedRecommendations;