import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CommunitySection = () => {
  const reviews = [
    {
      id: 1,
      user: {
        name: "Emma Thompson",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
        location: "New York, NY"
      },
      fragrance: "Mediterranean Dawn",
      rating: 5,
      title: "My signature scent for 3 years now",
      review: "This fragrance takes me back to my honeymoon in Santorini every single time. The bergamot opening is like sunshine on my skin, and the jasmine heart makes me feel feminine and confident.",
      date: "2 weeks ago"
    },
    {
      id: 2,
      user: {
        name: "Marcus Chen",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
        location: "San Francisco, CA"
      },
      fragrance: "Midnight Oud",
      rating: 5,
      title: "Sophisticated and mysterious",
      review: "As someone who collects niche fragrances, this one stands out. The oud is beautifully balanced - not overwhelming like some others I've tried.",
      date: "1 week ago"
    },
    {
      id: 3,
      user: {
        name: "Sophie Laurent",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        location: "Paris, France"
      },
      fragrance: "Garden Reverie",
      rating: 4,
      title: "Delicate and romantic",
      review: "This reminds me of walking through my grandmother's garden in Provence. The peony is so realistic and fresh. Perfect for daytime wear.",
      date: "3 days ago"
    }
  ];

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(
        <Icon 
          key={i} 
          name="Star" 
          size={16} 
          className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'} sm:w-4 sm:h-4`} 
        />
      );
    }
    return stars;
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Our Community
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-body max-w-2xl mx-auto px-4">
            Join thousands of fragrance enthusiasts who have discovered their signature scents with Azmeera
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* User Info */}
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-12 h-12 sm:w-16 sm:h-16 flex-shrink-0">
                  <img
                    src={review.user.avatar}
                    alt={review.user.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-display font-semibold text-primary text-sm sm:text-base truncate">
                    {review.user.name}
                  </h3>
                  <p className="text-text-secondary text-xs sm:text-sm">
                    {review.user.location}
                  </p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mb-3 sm:mb-4">
                <div className="flex gap-1">
                  {renderStars(review.rating)}
                </div>
                <span className="text-xs sm:text-sm text-text-secondary">
                  {review.rating}/5
                </span>
              </div>

              {/* Fragrance */}
              <div className="mb-3 sm:mb-4">
                <span className="text-accent font-medium text-xs sm:text-sm">
                  {review.fragrance}
                </span>
              </div>

              {/* Review Title */}
              <h4 className="font-display font-semibold text-primary text-sm sm:text-base mb-2 sm:mb-3">
                {review.title}
              </h4>

              {/* Review Text */}
              <p className="text-text-secondary text-xs sm:text-sm leading-relaxed mb-4 sm:mb-6">
                "{review.review}"
              </p>

              {/* Date */}
              <div className="text-xs text-text-secondary">
                {review.date}
              </div>
            </div>
          ))}
        </div>

        {/* Community Stats */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
              10K+
            </div>
            <p className="text-text-secondary text-xs sm:text-sm font-body">
              Happy Customers
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
              50K+
            </div>
            <p className="text-text-secondary text-xs sm:text-sm font-body">
              Reviews
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
              4.8
            </div>
            <p className="text-text-secondary text-xs sm:text-sm font-body">
              Average Rating
            </p>
          </div>
          <div className="text-center">
            <div className="text-2xl sm:text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
              95%
            </div>
            <p className="text-text-secondary text-xs sm:text-sm font-body">
              Would Recommend
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="default"
            size="lg"
            className="bg-luxury-gold hover:bg-luxury-amber"
            iconName="Users"
            iconPosition="right"
          >
            Join Our Community
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;