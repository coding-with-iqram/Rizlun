import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const UserReviews = ({ fragrance }) => {
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [sortBy, setSortBy] = useState('recent');

  const filterOptions = [
    { value: 'all', label: 'All Reviews', count: fragrance.reviews.length },
    { value: 'verified', label: 'Verified Purchase', count: fragrance.reviews.filter(r => r.verified).length },
    { value: 'seasonal', label: 'Seasonal Notes', count: fragrance.reviews.filter(r => r.seasonal).length },
    { value: 'occasions', label: 'Occasion Reviews', count: fragrance.reviews.filter(r => r.occasion).length }
  ];

  const sortOptions = [
    { value: 'recent', label: 'Most Recent' },
    { value: 'helpful', label: 'Most Helpful' },
    { value: 'rating', label: 'Highest Rating' }
  ];

  const filteredReviews = fragrance.reviews.filter(review => {
    if (selectedFilter === 'all') return true;
    if (selectedFilter === 'verified') return review.verified;
    if (selectedFilter === 'seasonal') return review.seasonal;
    if (selectedFilter === 'occasions') return review.occasion;
    return true;
  });

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={16}
        className={i < rating ? 'text-accent fill-current' : 'text-border'}
      />
    ));
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-background py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            Community Reviews
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover what fellow fragrance enthusiasts are saying about {fragrance.name} and how it performs in real-world scenarios.
          </p>
        </div>

        {/* Review Summary */}
        <div className="bg-card rounded-2xl p-8 mb-8 shadow-luxury">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">{fragrance.rating}</div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.floor(fragrance.rating))}
              </div>
              <div className="text-text-secondary">Based on {fragrance.reviewCount} reviews</div>
            </div>
            
            <div className="space-y-2">
              {[5, 4, 3, 2, 1].map(star => (
                <div key={star} className="flex items-center space-x-2">
                  <span className="text-sm w-8">{star}★</span>
                  <div className="flex-1 bg-border rounded-full h-2">
                    <div 
                      className="h-2 bg-accent rounded-full"
                      style={{ width: `${(fragrance.ratingDistribution[star] / fragrance.reviewCount) * 100}%` }}
                    ></div>
                  </div>
                  <span className="text-sm text-text-secondary w-8">
                    {fragrance.ratingDistribution[star]}
                  </span>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <div>
                <div className="text-sm text-text-secondary mb-1">Most Mentioned</div>
                <div className="flex flex-wrap gap-2">
                  {fragrance.topMentions.map((mention, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {mention}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters and Sort */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap gap-2">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setSelectedFilter(option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === option.value
                    ? 'bg-accent text-primary shadow-luxury'
                    : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
                }`}
              >
                {option.label} ({option.count})
              </button>
            ))}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 bg-card border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-accent"
          >
            {sortOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Reviews List */}
        <div className="space-y-6">
          {filteredReviews.map((review) => (
            <div key={review.id} className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-luxury-lg transition-shadow">
              <div className="flex items-start space-x-4">
                <Image
                  src={review.avatar}
                  alt={review.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <h4 className="font-medium text-primary">{review.name}</h4>
                      {review.verified && (
                        <span className="flex items-center space-x-1 text-xs bg-success/10 text-success px-2 py-1 rounded-full">
                          <Icon name="CheckCircle" size={12} />
                          <span>Verified Purchase</span>
                        </span>
                      )}
                    </div>
                    <span className="text-sm text-text-secondary">{formatDate(review.date)}</span>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="flex">
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-text-secondary">
                      {review.wearTime} wear time
                    </span>
                  </div>

                  <div className="space-y-3">
                    <h5 className="font-medium text-primary">{review.title}</h5>
                    <p className="text-text-secondary leading-relaxed">{review.content}</p>
                  </div>

                  {/* Review Tags */}
                  {(review.occasion || review.seasonal || review.scentDescription) && (
                    <div className="space-y-2">
                      {review.occasion && (
                        <div className="flex items-center space-x-2">
                          <Icon name="Calendar" size={14} className="text-accent" />
                          <span className="text-sm text-text-secondary">
                            Perfect for: <span className="text-primary font-medium">{review.occasion}</span>
                          </span>
                        </div>
                      )}
                      {review.seasonal && (
                        <div className="flex items-center space-x-2">
                          <Icon name="Sun" size={14} className="text-accent" />
                          <span className="text-sm text-text-secondary">
                            Season: <span className="text-primary font-medium">{review.seasonal}</span>
                          </span>
                        </div>
                      )}
                      {review.scentDescription && (
                        <div className="flex items-start space-x-2">
                          <Icon name="Nose" size={14} className="text-accent mt-0.5" />
                          <span className="text-sm text-text-secondary">
                            Scent: <span className="text-primary font-medium">{review.scentDescription}</span>
                          </span>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Review Actions */}
                  <div className="flex items-center space-x-4 pt-2">
                    <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-accent transition-colors">
                      <Icon name="ThumbsUp" size={14} />
                      <span>Helpful ({review.helpful})</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-accent transition-colors">
                      <Icon name="MessageCircle" size={14} />
                      <span>Reply</span>
                    </button>
                    <button className="flex items-center space-x-1 text-sm text-text-secondary hover:text-accent transition-colors">
                      <Icon name="Share2" size={14} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-8">
          <Button variant="outline" className="px-8">
            Load More Reviews
          </Button>
        </div>

        {/* Write Review CTA */}
        <div className="bg-card rounded-2xl p-8 mt-12 text-center shadow-luxury">
          <h3 className="font-display text-2xl font-bold text-primary mb-4">
            Share Your Experience
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Help fellow fragrance lovers by sharing your thoughts on {fragrance.name}. Your review helps others make informed decisions.
          </p>
          <Button 
            variant="default" 
            className="bg-luxury-gold hover:bg-luxury-amber"
            iconName="Edit3"
            iconPosition="left"
          >
            Write a Review
          </Button>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;