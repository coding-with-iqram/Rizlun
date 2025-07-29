import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const StyleThisScent = ({ fragrance }) => {
  const [activeTab, setActiveTab] = useState('layering');

  const tabs = [
    { id: 'layering', label: 'Layering', icon: 'Layers' },
    { id: 'occasions', label: 'Occasions', icon: 'Calendar' },
    { id: 'seasons', label: 'Seasons', icon: 'Sun' },
    { id: 'pairings', label: 'Style Pairings', icon: 'Palette' }
  ];

  const layeringOptions = [
    {
      id: 1,
      name: "Mystic Rose Elixir",
      brand: "Azmeera",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
      compatibility: 95,
      reason: "The rose heart notes create a beautiful harmony with the floral elements",
      layerOrder: "Apply first as base",
      result: "Creates a sophisticated floral bouquet with enhanced longevity"
    },
    {
      id: 2,
      name: "Vanilla Noir",
      brand: "Azmeera",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop",
      compatibility: 88,
      reason: "Vanilla base notes complement the woody undertones perfectly",
      layerOrder: "Apply after main fragrance",
      result: "Adds warmth and sweetness while maintaining sophistication"
    },
    {
      id: 3,
      name: "Citrus Dawn",
      brand: "Azmeera",
      image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop",
      compatibility: 82,
      reason: "Bright citrus top notes enhance the opening freshness",
      layerOrder: "Apply simultaneously",
      result: "Creates a more vibrant and energetic opening"
    }
  ];

  const occasions = [
    {
      type: "Business Meetings",
      description: "Professional yet memorable presence",
      application: "2-3 sprays on pulse points",
      timing: "30 minutes before meeting",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      tips: ["Apply to wrists and behind ears", "Avoid over-application in close quarters"]
    },
    {
      type: "Romantic Dinner",
      description: "Intimate and alluring evening scent",
      application: "4-5 sprays including décolletage",
      timing: "1 hour before date",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=300&fit=crop",
      tips: ["Layer with matching body lotion", "Spray on hair brush and run through hair"]
    },
    {
      type: "Weekend Brunch",
      description: "Fresh and approachable daytime wear",
      application: "2 sprays, light application",
      timing: "Just before leaving",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=300&fit=crop",
      tips: ["Focus on lower pulse points", "Perfect for casual social settings"]
    },
    {
      type: "Special Events",
      description: "Memorable and sophisticated presence",
      application: "5-6 sprays for maximum impact",
      timing: "45 minutes before event",
      image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=400&h=300&fit=crop",
      tips: ["Include clothing spray", "Reapply after 4-6 hours if needed"]
    }
  ];

  const seasons = [
    {
      season: "Spring",
      suitability: 92,
      description: "Perfect for blooming season with fresh floral notes",
      application: "Light to moderate application",
      image: "https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop",
      notes: "Emphasizes the fresh top notes and floral heart"
    },
    {
      season: "Summer",
      suitability: 78,
      description: "Moderate wear for warm weather, best for evenings",
      application: "Light application, focus on lower body",
      image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
      notes: "Base notes provide warmth without being overwhelming"
    },
    {
      season: "Autumn",
      suitability: 95,
      description: "Ideal season showcasing the full complexity",
      application: "Full application, all pulse points",
      image: "https://images.unsplash.com/photo-1507371341162-763b5e419618?w=400&h=300&fit=crop",
      notes: "Woody and warm notes perfectly complement the season"
    },
    {
      season: "Winter",
      suitability: 88,
      description: "Rich base notes provide comfort and warmth",
      application: "Generous application, includes clothing",
      image: "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=400&h=300&fit=crop",
      notes: "Deep base notes create a cozy, enveloping aura"
    }
  ];

  const stylePairings = [
    {
      style: "Elegant Evening",
      description: "Sophisticated formal wear",
      image: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=300&fit=crop",
      clothing: ["Little black dress", "Silk blouse", "Tailored suit"],
      accessories: ["Pearl jewelry", "Leather handbag", "Classic heels"],
      mood: "Confident and refined"
    },
    {
      style: "Casual Chic",
      description: "Effortless daytime elegance",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=400&h=300&fit=crop",
      clothing: ["Cashmere sweater", "Well-fitted jeans", "Blazer"],
      accessories: ["Delicate jewelry", "Leather boots", "Structured bag"],
      mood: "Approachable yet polished"
    },
    {
      style: "Bohemian Romance",
      description: "Free-spirited and artistic",
      image: "https://images.unsplash.com/photo-1502716119720-b23a93e5fe1b?w=400&h=300&fit=crop",
      clothing: ["Flowing dresses", "Vintage pieces", "Layered textures"],
      accessories: ["Statement jewelry", "Scarves", "Artisan pieces"],
      mood: "Creative and expressive"
    }
  ];

  const renderCompatibilityBar = (percentage) => (
    <div className="flex items-center space-x-2">
      <div className="flex-1 bg-border rounded-full h-2">
        <div 
          className="h-2 bg-gradient-to-r from-accent to-secondary rounded-full transition-all duration-500"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="text-sm font-medium text-accent">{percentage}%</span>
    </div>
  );

  return (
    <div className="bg-card py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            Style This Scent
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover the perfect ways to wear {fragrance.name} and create your signature style with expert recommendations.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-accent text-primary shadow-luxury'
                  : 'bg-background text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              <Icon name={tab.icon} size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-background rounded-2xl p-8 shadow-luxury-lg">
          {activeTab === 'layering' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  Perfect Layering Companions
                </h3>
                <p className="text-text-secondary">
                  Create unique scent combinations with these expertly curated fragrance pairings
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {layeringOptions.map(option => (
                  <div key={option.id} className="bg-card rounded-xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all scent-trail">
                    <div className="flex items-center space-x-4 mb-4">
                      <Image
                        src={option.image}
                        alt={option.name}
                        className="w-16 h-16 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <h4 className="font-medium text-primary">{option.name}</h4>
                        <p className="text-sm text-text-secondary">{option.brand}</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium text-primary">Compatibility</span>
                        </div>
                        {renderCompatibilityBar(option.compatibility)}
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Icon name="Info" size={14} className="text-accent mt-0.5" />
                          <p className="text-sm text-text-secondary">{option.reason}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Icon name="ArrowRight" size={14} className="text-accent mt-0.5" />
                          <p className="text-sm text-primary font-medium">{option.layerOrder}</p>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Icon name="Sparkles" size={14} className="text-accent mt-0.5" />
                          <p className="text-sm text-text-secondary">{option.result}</p>
                        </div>
                      </div>

                      <Button variant="outline" size="sm" fullWidth>
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'occasions' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  Perfect Occasions
                </h3>
                <p className="text-text-secondary">
                  Discover when and how to wear {fragrance.name} for maximum impact
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {occasions.map((occasion, index) => (
                  <div key={index} className="bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={occasion.image}
                        alt={occasion.type}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-primary mb-2">
                          {occasion.type}
                        </h4>
                        <p className="text-text-secondary">{occasion.description}</p>
                      </div>

                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div>
                          <span className="text-text-secondary">Application:</span>
                          <p className="font-medium text-primary">{occasion.application}</p>
                        </div>
                        <div>
                          <span className="text-text-secondary">Timing:</span>
                          <p className="font-medium text-primary">{occasion.timing}</p>
                        </div>
                      </div>

                      <div>
                        <h5 className="font-medium text-primary mb-2">Pro Tips:</h5>
                        <ul className="space-y-1">
                          {occasion.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start space-x-2 text-sm text-text-secondary">
                              <Icon name="Check" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                              <span>{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'seasons' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  Seasonal Suitability
                </h3>
                <p className="text-text-secondary">
                  Understand how {fragrance.name} performs throughout the year
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {seasons.map((season, index) => (
                  <div key={index} className="bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src={season.image}
                        alt={season.season}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div className="flex items-center justify-between">
                        <h4 className="font-display text-xl font-bold text-primary">
                          {season.season}
                        </h4>
                        <div className="flex items-center space-x-2">
                          <Icon name="Thermometer" size={16} className="text-accent" />
                          <span className="font-medium text-accent">{season.suitability}%</span>
                        </div>
                      </div>

                      {renderCompatibilityBar(season.suitability)}

                      <p className="text-text-secondary">{season.description}</p>

                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Icon name="Droplets" size={14} className="text-accent mt-0.5" />
                          <div>
                            <span className="text-sm font-medium text-primary">Application: </span>
                            <span className="text-sm text-text-secondary">{season.application}</span>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Icon name="Nose" size={14} className="text-accent mt-0.5" />
                          <div>
                            <span className="text-sm font-medium text-primary">Notes: </span>
                            <span className="text-sm text-text-secondary">{season.notes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'pairings' && (
            <div className="space-y-8">
              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-2">
                  Style Pairings
                </h3>
                <p className="text-text-secondary">
                  Complete your look with fashion choices that complement {fragrance.name}
                </p>
              </div>

              <div className="grid lg:grid-cols-3 gap-6">
                {stylePairings.map((pairing, index) => (
                  <div key={index} className="bg-card rounded-xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all">
                    <div className="aspect-square overflow-hidden">
                      <Image
                        src={pairing.image}
                        alt={pairing.style}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="font-display text-xl font-bold text-primary mb-2">
                          {pairing.style}
                        </h4>
                        <p className="text-text-secondary">{pairing.description}</p>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <h5 className="font-medium text-primary mb-2 flex items-center">
                            <Icon name="Shirt" size={16} className="mr-2" />
                            Clothing
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {pairing.clothing.map((item, itemIndex) => (
                              <span 
                                key={itemIndex}
                                className="px-2 py-1 bg-accent/10 text-accent rounded text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h5 className="font-medium text-primary mb-2 flex items-center">
                            <Icon name="Watch" size={16} className="mr-2" />
                            Accessories
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {pairing.accessories.map((item, itemIndex) => (
                              <span 
                                key={itemIndex}
                                className="px-2 py-1 bg-secondary/10 text-secondary rounded text-sm"
                              >
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center space-x-2 pt-2">
                          <Icon name="Heart" size={16} className="text-accent" />
                          <span className="text-sm font-medium text-primary">
                            Mood: {pairing.mood}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StyleThisScent;