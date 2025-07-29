import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const RelatedFragrances = ({ fragrance }) => {
  const [activeCategory, setActiveCategory] = useState('similar');

  const categories = [
    { id: 'similar', label: 'Similar Scents', icon: 'Layers' },
    { id: 'complement', label: 'Complementary', icon: 'Heart' },
    { id: 'collection', label: 'Same Collection', icon: 'Grid3X3' },
    { id: 'trending', label: 'Trending Now', icon: 'TrendingUp' }
  ];

  const relatedFragrances = {
    similar: [
      {
        id: 1,
        name: "Rose Mystique",
        brand: "Azmeera",
        price: 145,
        originalPrice: 165,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 234,
        similarity: 92,
        reason: "Shares the same rose heart with complementary woody base notes",
        keyNotes: ["Bulgarian Rose", "Sandalwood", "Vanilla"],
        isNew: false,
        isBestseller: true
      },
      {
        id: 2,
        name: "Amber Dreams",
        brand: "Azmeera",
        price: 135,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 189,
        similarity: 88,
        reason: "Similar warm amber base with floral heart notes",
        keyNotes: ["Amber", "Jasmine", "Cedarwood"],
        isNew: true,
        isBestseller: false
      },
      {
        id: 3,
        name: "Velvet Petals",
        brand: "Azmeera",
        price: 155,
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 312,
        similarity: 85,
        reason: "Luxurious floral composition with similar sophistication",
        keyNotes: ["Peony", "Musk", "Patchouli"],
        isNew: false,
        isBestseller: true
      }
    ],
    complement: [
      {
        id: 4,
        name: "Citrus Burst",
        brand: "Azmeera",
        price: 125,
        image: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop",
        rating: 4.5,
        reviewCount: 156,
        similarity: 75,
        reason: "Fresh citrus top notes create perfect daytime contrast",
        keyNotes: ["Bergamot", "Lemon", "White Tea"],
        isNew: false,
        isBestseller: false
      },
      {
        id: 5,
        name: "Midnight Oud",
        brand: "Azmeera",
        price: 185,
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=400&h=400&fit=crop",
        rating: 4.9,
        reviewCount: 98,
        similarity: 70,
        reason: "Deep, mysterious scent perfect for evening layering",
        keyNotes: ["Oud", "Black Rose", "Incense"],
        isNew: true,
        isBestseller: false
      }
    ],
    collection: [
      {
        id: 6,
        name: "Garden Symphony",
        brand: "Azmeera",
        price: 140,
        image: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=400&h=400&fit=crop",
        rating: 4.6,
        reviewCount: 203,
        similarity: 80,
        reason: "Part of the Botanical Elegance collection",
        keyNotes: ["Lily", "Green Leaves", "White Musk"],
        isNew: false,
        isBestseller: true
      },
      {
        id: 7,
        name: "Iris Bloom",
        brand: "Azmeera",
        price: 150,
        image: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 167,
        similarity: 78,
        reason: "Elegant iris-focused fragrance from the same collection",
        keyNotes: ["Iris", "Violet", "Cashmere Wood"],
        isNew: false,
        isBestseller: false
      }
    ],
    trending: [
      {
        id: 8,
        name: "Solar Radiance",
        brand: "Azmeera",
        price: 160,
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=400&fit=crop",
        rating: 4.8,
        reviewCount: 445,
        similarity: 65,
        reason: "Currently trending for its unique solar accord",
        keyNotes: ["Solar Accord", "Coconut", "Driftwood"],
        isNew: true,
        isBestseller: true
      },
      {
        id: 9,
        name: "Spiced Vanilla",
        brand: "Azmeera",
        price: 145,
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=400&fit=crop",
        rating: 4.7,
        reviewCount: 289,
        similarity: 72,
        reason: "Popular warm spicy-sweet combination",
        keyNotes: ["Vanilla", "Cinnamon", "Tonka Bean"],
        isNew: false,
        isBestseller: true
      }
    ]
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, i) => (
      <Icon
        key={i}
        name="Star"
        size={14}
        className={i < Math.floor(rating) ? 'text-accent fill-current' : 'text-border'}
      />
    ));
  };

  const renderSimilarityBar = (percentage) => (
    <div className="flex items-center space-x-2">
      <div className="flex-1 bg-border rounded-full h-1.5">
        <div 
          className="h-1.5 bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-xs font-medium text-accent">{percentage}%</span>
    </div>
  );

  return (
    <div className="bg-background py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            If You Love This, Try...
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover fragrances that share similar characteristics or perfectly complement {fragrance.name} in your collection.
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-accent text-primary shadow-luxury'
                  : 'bg-card text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Icon name={category.icon} size={18} />
              <span>{category.label}</span>
            </button>
          ))}
        </div>

        {/* Fragrances Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {relatedFragrances[activeCategory]?.map((item) => (
            <div key={item.id} className="bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-300 group">
              {/* Image Section */}
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {item.isNew && (
                    <span className="bg-accent text-primary px-3 py-1 rounded-full text-xs font-medium">
                      New
                    </span>
                  )}
                  {item.isBestseller && (
                    <span className="bg-secondary text-background px-3 py-1 rounded-full text-xs font-medium">
                      Bestseller
                    </span>
                  )}
                </div>

                {/* Quick Actions */}
                <div className="absolute top-4 right-4 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors scent-trail">
                    <Icon name="Heart" size={18} />
                  </button>
                  <button className="w-10 h-10 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors scent-trail">
                    <Icon name="Eye" size={18} />
                  </button>
                </div>

                {/* Similarity Indicator */}
                {activeCategory === 'similar' && (
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-background/90 backdrop-blur-sm rounded-lg p-3">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs font-medium text-primary">Similarity</span>
                      </div>
                      {renderSimilarityBar(item.similarity)}
                    </div>
                  </div>
                )}
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-secondary font-medium text-sm mb-1">{item.brand}</p>
                  <h3 className="font-display text-xl font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {item.name}
                  </h3>
                  
                  {/* Rating */}
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="flex">
                      {renderStars(item.rating)}
                    </div>
                    <span className="text-sm text-text-secondary">
                      {item.rating} ({item.reviewCount})
                    </span>
                  </div>
                </div>

                {/* Price */}
                <div className="flex items-baseline space-x-2">
                  <span className="text-2xl font-bold text-primary">${item.price}</span>
                  {item.originalPrice && (
                    <span className="text-lg text-text-secondary line-through">
                      ${item.originalPrice}
                    </span>
                  )}
                </div>

                {/* Reason */}
                <div className="bg-accent/5 rounded-lg p-3">
                  <p className="text-sm text-text-secondary italic">
                    "{item.reason}"
                  </p>
                </div>

                {/* Key Notes */}
                <div>
                  <h4 className="text-sm font-medium text-primary mb-2">Key Notes</h4>
                  <div className="flex flex-wrap gap-2">
                    {item.keyNotes.map((note, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-accent/10 text-accent rounded text-xs"
                      >
                        {note}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex space-x-3 pt-2">
                  <Button
                    variant="default"
                    size="sm"
                    className="flex-1 bg-luxury-gold hover:bg-luxury-amber"
                    iconName="ShoppingBag"
                    iconPosition="left"
                  >
                    Add to Cart
                  </Button>
                  <Link 
                    to="/individual-fragrance-experience"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      fullWidth
                      iconName="Eye"
                      iconPosition="left"
                    >
                      View Details
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Personalized Recommendations CTA */}
        <div className="bg-card rounded-2xl p-8 mt-12 text-center shadow-luxury">
          <div className="max-w-2xl mx-auto space-y-6">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
              <Icon name="Sparkles" size={24} className="text-accent" />
            </div>
            <div>
              <h3 className="font-display text-2xl font-bold text-primary mb-4">
                Get Personalized Recommendations
              </h3>
              <p className="text-text-secondary mb-6">
                Take our fragrance quiz to discover scents perfectly matched to your preferences and style. Our AI-powered recommendations consider your scent history, lifestyle, and personal taste.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/fragrance-discovery-tool">
                <Button 
                  variant="default" 
                  className="bg-luxury-gold hover:bg-luxury-amber"
                  iconName="Compass"
                  iconPosition="left"
                >
                  Take Fragrance Quiz
                </Button>
              </Link>
              <Link to="/personal-fragrance-profile">
                <Button 
                  variant="outline"
                  iconName="User"
                  iconPosition="left"
                >
                  View My Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RelatedFragrances;