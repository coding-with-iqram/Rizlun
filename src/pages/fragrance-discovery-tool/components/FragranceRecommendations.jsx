import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FragranceRecommendations = ({ userProfile, onRequestSamples, onSaveProfile }) => {
  const getRecommendations = () => {
    const baseRecommendations = [
      {
        id: 'azure-dreams',
        name: 'Azure Dreams',
        brand: 'Azmeera Signature',
        image: 'https://images.pexels.com/photos/1961795/pexels-photo-1961795.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 145,
        matchPercentage: 95,
        description: `A sophisticated blend that captures the essence of ocean breezes and morning dew. This fragrance opens with sparkling bergamot and sea salt, evolving into a heart of white florals and marine accords.`,
        topNotes: ['Bergamot', 'Sea Salt', 'Lemon'],
        heartNotes: ['White Jasmine', 'Marine Accord', 'Lily'],
        baseNotes: ['White Musk', 'Driftwood', 'Ambergris'],
        wearTime: '6-8 hours',
        seasonality: ['Spring', 'Summer'],
        occasions: ['Daytime', 'Casual', 'Professional'],
        personality: 'modern',
        scentFamily: 'aquatic'
      },
      {
        id: 'velvet-mystique',
        name: 'Velvet Mystique',
        brand: 'Azmeera Exclusive',
        image: 'https://images.pexels.com/photos/1961794/pexels-photo-1961794.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 185,
        matchPercentage: 92,
        description: `An enchanting oriental composition that weaves together exotic spices and precious woods. This mysterious fragrance tells the story of ancient silk routes and hidden treasures.`,
        topNotes: ['Pink Pepper', 'Cardamom', 'Bergamot'],
        heartNotes: ['Rose', 'Saffron', 'Jasmine'],
        baseNotes: ['Oud', 'Vanilla', 'Sandalwood'],
        wearTime: '8-10 hours',
        seasonality: ['Fall', 'Winter'],
        occasions: ['Evening', 'Special Events', 'Romantic'],
        personality: 'bold',
        scentFamily: 'oriental'
      },
      {
        id: 'garden-reverie',
        name: 'Garden Reverie',
        brand: 'Azmeera Classic',
        image: 'https://images.pexels.com/photos/1961793/pexels-photo-1961793.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 125,
        matchPercentage: 88,
        description: `A timeless floral bouquet that captures the romance of an English garden in full bloom. Delicate petals dance with green stems in this elegant composition.`,
        topNotes: ['Peony', 'Green Leaves', 'Dewdrops'],
        heartNotes: ['Rose', 'Lily of the Valley', 'Magnolia'],
        baseNotes: ['White Musk', 'Cedar', 'Soft Amber'],
        wearTime: '5-7 hours',
        seasonality: ['Spring', 'Summer'],
        occasions: ['Romantic', 'Daytime', 'Special Events'],
        personality: 'classic',
        scentFamily: 'floral'
      },
      {
        id: 'urban-essence',
        name: 'Urban Essence',
        brand: 'Azmeera Modern',
        image: 'https://images.pexels.com/photos/1961792/pexels-photo-1961792.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 155,
        matchPercentage: 90,
        description: `A contemporary woody fragrance that embodies the energy of city life. Clean lines meet warm woods in this sophisticated urban interpretation.`,
        topNotes: ['Grapefruit', 'Black Pepper', 'Mint'],
        heartNotes: ['Vetiver', 'Geranium', 'Cedar'],
        baseNotes: ['Sandalwood', 'White Musk', 'Tonka Bean'],
        wearTime: '7-9 hours',
        seasonality: ['All Seasons'],
        occasions: ['Professional', 'Casual', 'Evening'],
        personality: 'modern',
        scentFamily: 'woody'
      },
      {
        id: 'bohemian-soul',
        name: 'Bohemian Soul',
        brand: 'Azmeera Artisan',
        image: 'https://images.pexels.com/photos/1961791/pexels-photo-1961791.jpeg?auto=compress&cs=tinysrgb&w=400',
        price: 165,
        matchPercentage: 87,
        description: `An artistic blend that celebrates free spirit and creativity. Earthy patchouli meets exotic florals in this unconventional masterpiece.`,
        topNotes: ['Orange Blossom', 'Pink Pepper', 'Artemisia'],
        heartNotes: ['Patchouli', 'Iris', 'Ylang-Ylang'],
        baseNotes: ['Vanilla', 'Benzoin', 'White Musk'],
        wearTime: '6-8 hours',
        seasonality: ['Fall', 'Spring'],
        occasions: ['Creative', 'Casual', 'Artistic'],
        personality: 'bohemian',
        scentFamily: 'oriental'
      }
    ];

    // Filter recommendations based on user profile
    return baseRecommendations
      .filter(fragrance => {
        if (userProfile.personality && fragrance.personality !== userProfile.personality) {
          return false;
        }
        if (userProfile.scentFamily && fragrance.scentFamily !== userProfile.scentFamily) {
          return false;
        }
        return true;
      })
      .slice(0, 4)
      .sort((a, b) => b.matchPercentage - a.matchPercentage);
  };

  const recommendations = getRecommendations();

  const getMatchReason = (fragrance) => {
    const reasons = [];
    
    if (userProfile.mood === 'confident' && fragrance.personality === 'bold') {
      reasons.push('Matches your confident mood with bold, statement-making presence');
    }
    if (userProfile.mood === 'fresh' && fragrance.scentFamily === 'aquatic') {
      reasons.push('Perfect for your fresh, energetic vibe with clean marine notes');
    }
    if (userProfile.mood === 'romantic' && fragrance.scentFamily === 'floral') {
      reasons.push('Complements your romantic mood with elegant floral bouquet');
    }
    if (userProfile.lifestyle === 'professional' && fragrance.occasions.includes('Professional')) {
      reasons.push('Ideal for your professional lifestyle with sophisticated presence');
    }
    if (userProfile.memory === 'ocean' && fragrance.scentFamily === 'aquatic') {
      reasons.push('Echoes your ocean memories with marine and salt air notes');
    }
    if (userProfile.memory === 'garden' && fragrance.scentFamily === 'floral') {
      reasons.push('Captures your garden memories with blooming floral harmony');
    }

    return reasons.length > 0 ? reasons[0] : 'Carefully selected based on your unique fragrance profile';
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
          <Icon name="Sparkles" size={20} className="text-accent" />
          <span className="font-body font-medium text-accent">Your Perfect Matches</span>
        </div>
        
        <h2 className="font-display text-3xl font-bold text-primary">
          Personalized Fragrance Recommendations
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
          Based on your unique profile, we've curated these exceptional fragrances that align with your personality, preferences, and lifestyle.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {recommendations.map((fragrance, index) => (
          <div
            key={fragrance.id}
            className="group bg-card rounded-2xl overflow-hidden shadow-luxury hover:shadow-luxury-lg transition-all duration-500 scent-trail"
          >
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden">
                <Image
                  src={fragrance.image}
                  alt={fragrance.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              
              <div className="absolute top-4 right-4 bg-accent text-primary px-3 py-1 rounded-full font-body font-bold text-sm">
                {fragrance.matchPercentage}% Match
              </div>
              
              <div className="absolute top-4 left-4 bg-primary/80 text-white px-3 py-1 rounded-full font-body text-sm">
                #{index + 1} Pick
              </div>
            </div>

            <div className="p-6 space-y-6">
              <div className="space-y-3">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-xl font-bold text-primary breathing-text">
                      {fragrance.name}
                    </h3>
                    <p className="text-text-secondary font-body">
                      {fragrance.brand}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-display text-2xl font-bold text-accent">
                      ${fragrance.price}
                    </p>
                  </div>
                </div>

                <p className="text-text-secondary font-body text-sm leading-relaxed">
                  {fragrance.description}
                </p>

                <div className="p-4 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-body font-semibold text-primary mb-2 flex items-center">
                    <Icon name="Target" size={16} className="mr-2 text-accent" />
                    Why This Matches You:
                  </h4>
                  <p className="text-text-secondary font-body text-sm italic">
                    {getMatchReason(fragrance)}
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div>
                    <h4 className="font-body font-medium text-primary text-xs mb-2">Top Notes</h4>
                    <div className="space-y-1">
                      {fragrance.topNotes.map((note, idx) => (
                        <span key={idx} className="block text-text-secondary text-xs font-body">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-primary text-xs mb-2">Heart Notes</h4>
                    <div className="space-y-1">
                      {fragrance.heartNotes.map((note, idx) => (
                        <span key={idx} className="block text-text-secondary text-xs font-body">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-body font-medium text-primary text-xs mb-2">Base Notes</h4>
                    <div className="space-y-1">
                      {fragrance.baseNotes.map((note, idx) => (
                        <span key={idx} className="block text-text-secondary text-xs font-body">
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm pt-4 border-t border-border">
                  <div className="flex items-center space-x-4">
                    <span className="text-text-secondary font-body">
                      <Icon name="Clock" size={14} className="inline mr-1" />
                      {fragrance.wearTime}
                    </span>
                    <span className="text-text-secondary font-body">
                      <Icon name="Calendar" size={14} className="inline mr-1" />
                      {fragrance.seasonality.join(', ')}
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {fragrance.occasions.map((occasion, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full"
                    >
                      {occasion}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3">
                <Link to="/individual-fragrance-experience" className="flex-1">
                  <Button variant="outline" fullWidth>
                    Learn More
                  </Button>
                </Link>
                <Link to="/shopping-cart-checkout" className="flex-1">
                  <Button variant="default" fullWidth className="bg-luxury-gold hover:bg-luxury-amber">
                    Add to Cart
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() => onRequestSamples(recommendations.map(r => r.id))}
            iconName="Package"
            iconPosition="left"
          >
            Request Sample Set
          </Button>
          
          <Button
            variant="default"
            size="lg"
            onClick={onSaveProfile}
            iconName="Heart"
            iconPosition="left"
            className="bg-luxury-gold hover:bg-luxury-amber"
          >
            Save My Profile
          </Button>
        </div>

        <div className="max-w-2xl mx-auto p-6 bg-muted/50 rounded-2xl">
          <h3 className="font-display text-lg font-semibold text-primary mb-3">
            Your Fragrance Journey Continues
          </h3>
          <p className="text-text-secondary font-body text-sm leading-relaxed">
            These recommendations are based on your current preferences. As you explore and discover new scents, 
            your profile will evolve, and we'll continue to refine our suggestions to match your growing fragrance sophistication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default FragranceRecommendations;