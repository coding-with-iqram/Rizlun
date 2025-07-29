import React, { useState, useEffect } from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ScentDNAWheel from './components/ScentDNAWheel';
import FragranceWardrobe from './components/FragranceWardrobe';
import ScentMemories from './components/ScentMemories';
import FragranceDreams from './components/FragranceDreams';
import DiscoveryJourney from './components/DiscoveryJourney';
import PersonalizedRecommendations from './components/PersonalizedRecommendations';
import LoyaltyProgram from './components/LoyaltyProgram';
import ConsultationBooking from './components/ConsultationBooking';

const PersonalFragranceProfile = () => {
  const [activeSection, setActiveSection] = useState('overview');
  const [userProfile, setUserProfile] = useState(null);

  useEffect(() => {
    // Mock user profile data
    const mockUserProfile = {
      name: "Isabella Martinez",
      email: "isabella.martinez@email.com",
      memberSince: "March 2023",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      preferences: {
        favoriteFamily: "Floral",
        preferredIntensity: "Moderate",
        occasionPreference: "Evening"
      }
    };

    // Mock scent DNA data
    const mockScentProfile = {
      citrus: 25,
      floral: 35,
      woody: 20,
      oriental: 15,
      fresh: 30,
      gourmand: 10
    };

    // Mock fragrance wardrobe
    const mockFragrances = [
      {
        id: 1,
        name: "Black Opium",
        brand: "Yves Saint Laurent",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
        usage: 75,
        lastWorn: "Jan 20, 2025",
        categories: ["evening", "signature", "winter"],
        season: "winter"
      },
      {
        id: 2,
        name: "Light Blue",
        brand: "Dolce & Gabbana",
        image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=300&fit=crop",
        usage: 45,
        lastWorn: "Jan 18, 2025",
        categories: ["daily", "summer", "fresh"],
        season: "summer"
      },
      {
        id: 3,
        name: "Flowerbomb",
        brand: "Viktor & Rolf",
        image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop",
        usage: 60,
        lastWorn: "Jan 15, 2025",
        categories: ["special", "favorite", "spring"],
        season: "spring"
      },
      {
        id: 4,
        name: "Coco Mademoiselle",
        brand: "Chanel",
        image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=300&fit=crop",
        usage: 30,
        lastWorn: "Jan 12, 2025",
        categories: ["daily", "signature", "autumn"],
        season: "autumn"
      }
    ];

    // Mock scent memories
    const mockMemories = [
      {
        id: 1,
        fragrance: "Black Opium",
        occasion: "Anniversary Dinner",
        memory: "Wore this on our 5th anniversary dinner at that beautiful rooftop restaurant. The scent perfectly complemented the romantic evening atmosphere, and my partner couldn't stop complimenting how amazing I smelled.",
        emotion: "Romance",
        date: "2025-01-14",
        likes: 12,
        image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=200&fit=crop"
      },
      {
        id: 2,
        fragrance: "Light Blue",
        occasion: "Beach Vacation",
        memory: "This became my signature scent during our Mediterranean cruise. Every time I smell it now, I'm transported back to those sunny mornings on the deck, feeling the ocean breeze.",
        emotion: "Joy",
        date: "2024-12-20",
        likes: 8
      },
      {
        id: 3,
        fragrance: "Flowerbomb",
        occasion: "Job Interview",
        memory: "Wore this to my dream job interview. It gave me such confidence and made me feel powerful yet feminine. I got the job, and now it's my lucky charm for important meetings!",
        emotion: "Confidence",
        date: "2024-11-15",
        likes: 15
      }
    ];

    // Mock wishlist
    const mockWishlist = [
      {
        id: 1,
        name: "Santal 33",
        brand: "Le Labo",
        image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop",
        price: 198,
        salePrice: 178,
        onSale: true,
        inStock: true,
        priority: "high",
        dateAdded: "Jan 10, 2025",
        priceDropAlert: true,
        sampleRequested: false,
        notes: "Everyone raves about this one - need to try it!"
      },
      {
        id: 2,
        name: "Baccarat Rouge 540",
        brand: "Maison Francis Kurkdjian",
        image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=300&fit=crop",
        price: 325,
        onSale: false,
        inStock: false,
        priority: "medium",
        dateAdded: "Jan 5, 2025",
        priceDropAlert: false,
        sampleRequested: true,
        notes: "Heard it\'s incredibly unique and long-lasting"
      },
      {
        id: 3,
        name: "Good Girl",
        brand: "Carolina Herrera",
        image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
        price: 135,
        onSale: false,
        inStock: true,
        priority: "low",
        dateAdded: "Dec 28, 2024",
        priceDropAlert: false,
        sampleRequested: false,
        notes: "Love the bottle design, curious about the scent"
      }
    ];

    // Mock journey data
    const mockJourneyData = {
      timeline: [
        {
          id: 1,
          type: "quiz",
          title: "Completed Fragrance Personality Quiz",
          description: "Discovered your scent DNA and preferences",
          date: "Jan 22, 2025",
          details: "Results showed strong preference for floral and woody notes with moderate intensity",
          insights: ["Floral lover", "Evening preference", "Moderate intensity"]
        },
        {
          id: 2,
          type: "sample",
          title: "Tried Sample Set - Oriental Collection",
          description: "Explored 5 different oriental fragrances",
          date: "Jan 18, 2025",
          details: "Rated Tom Ford Oud Wood highest, added to wishlist",
          insights: ["Oud appreciation", "Warm spices", "Evening wear"]
        },
        {
          id: 3,
          type: "purchase",
          title: "Purchased Black Opium 90ml",
          description: "Added signature evening fragrance to collection",
          date: "Jan 15, 2025",
          insights: ["Evening signature", "Coffee notes", "Date night"]
        }
      ],
      preferences: [
        {
          category: "Fragrance Families",
          evolution: [
            { period: "Early 2024", preference: "Fresh & Citrus", strength: 80 },
            { period: "Mid 2024", preference: "Floral", strength: 90 },
            { period: "Current", preference: "Floral & Woody", strength: 95 }
          ]
        },
        {
          category: "Intensity Preference",
          evolution: [
            { period: "Early 2024", preference: "Light", strength: 70 },
            { period: "Mid 2024", preference: "Moderate", strength: 85 },
            { period: "Current", preference: "Moderate to Strong", strength: 90 }
          ]
        }
      ],
      samples: [
        {
          id: 1,
          name: "Tom Ford Oud Wood",
          brand: "Tom Ford",
          rating: 5,
          dateTried: "Jan 18, 2025",
          status: "wishlist",
          notes: "Absolutely divine! Warm and sophisticated."
        },
        {
          id: 2,
          name: "Creed Aventus",
          brand: "Creed",
          rating: 4,
          dateTried: "Jan 10, 2025",
          status: "considered",
          notes: "Nice but too masculine for my taste"
        },
        {
          id: 3,
          name: "Chanel No. 5",
          brand: "Chanel",
          rating: 5,
          dateTried: "Dec 20, 2024",
          status: "purchased",
          notes: "Classic for a reason - timeless elegance"
        }
      ],
      quizzes: [
        {
          id: 1,
          title: "Fragrance Personality Assessment",
          date: "Jan 22, 2025",
          results: [
            { category: "Floral Affinity", score: 85 },
            { category: "Woody Preference", score: 70 },
            { category: "Oriental Interest", score: 60 },
            { category: "Fresh Appeal", score: 75 }
          ],
          insights: [
            "You have a sophisticated palate that appreciates complex floral compositions",
            "Woody base notes provide the grounding you seek in fragrances",
            "You prefer moderate to strong sillage for confident presence",
            "Evening and special occasions are your preferred wearing times"
          ]
        }
      ],
      stats: {
        totalActivities: 15,
        samplesTried: 12,
        quizzesCompleted: 3,
        daysSinceStart: 298
      }
    };

    // Mock recommendations
    const mockRecommendations = {
      forYou: [
        {
          id: 1,
          name: "Libre",
          brand: "Yves Saint Laurent",
          image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?w=300&h=300&fit=crop",
          price: 135,
          onSale: false,
          rating: 4.6,
          reviews: 1250,
          matchPercentage: 92,
          reason: "scent-profile",
          notes: ["Lavender", "Orange Blossom", "Vanilla"],
          isNew: false
        },
        {
          id: 2,
          name: "Mon Guerlain",
          brand: "Guerlain",
          image: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=300&fit=crop",
          price: 145,
          salePrice: 120,
          onSale: true,
          rating: 4.7,
          reviews: 890,
          matchPercentage: 88,
          reason: "purchase-history",
          notes: ["Lavender", "Jasmine", "Sandalwood"],
          isNew: false
        }
      ],
      seasonal: [
        {
          id: 3,
          name: "Daisy",
          brand: "Marc Jacobs",
          image: "https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=300&fit=crop",
          price: 95,
          onSale: false,
          rating: 4.4,
          reviews: 2100,
          matchPercentage: 85,
          reason: "seasonal",
          notes: ["Wild Berries", "White Violet", "Jasmine"],
          isNew: true
        }
      ],
      trending: [
        {
          id: 4,
          name: "Alien",
          brand: "Thierry Mugler",
          image: "https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=300&fit=crop",
          price: 125,
          onSale: false,
          rating: 4.5,
          reviews: 1800,
          matchPercentage: 80,
          reason: "trending",
          notes: ["Jasmine", "Cashmeran Wood", "Amber"],
          isNew: false
        }
      ],
      similar: [
        {
          id: 5,
          name: "La Vie Est Belle",
          brand: "Lancôme",
          image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=300&fit=crop",
          price: 130,
          onSale: false,
          rating: 4.6,
          reviews: 3200,
          matchPercentage: 87,
          reason: "wishlist",
          notes: ["Iris", "Patchouli", "Gourmand"],
          isNew: false
        }
      ],
      insights: {
        topFamily: "Floral",
        preferredIntensity: "Moderate",
        commonOccasion: "Evening"
      }
    };

    // Mock loyalty data
    const mockLoyaltyData = {
      points: 1250,
      tier: "Scent Connoisseur",
      nextTierPoints: 1500,
      memberSince: "March 2023"
    };

    // Mock consultations
    const mockConsultations = {
      upcoming: [
        {
          id: 1,
          type: "Fragrance Discovery Session",
          consultant: "Sarah Chen",
          date: "Jan 28, 2025",
          time: "2:00 PM",
          status: "confirmed"
        }
      ],
      past: [
        {
          id: 2,
          type: "Collection Building Consultation",
          consultant: "Elena Volkov",
          date: "Dec 15, 2024",
          rating: 5,
          notes: "Excellent session! Elena helped me understand how to build a versatile fragrance wardrobe for different seasons and occasions.",
          recommendations: ["Chanel Coco Mademoiselle", "Tom Ford Black Orchid", "Hermès Twilly"]
        }
      ]
    };

    setUserProfile({
      ...mockUserProfile,
      scentProfile: mockScentProfile,
      fragrances: mockFragrances,
      memories: mockMemories,
      wishlist: mockWishlist,
      journeyData: mockJourneyData,
      recommendations: mockRecommendations,
      loyaltyData: mockLoyaltyData,
      consultations: mockConsultations
    });
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview', icon: 'User' },
    { id: 'wardrobe', label: 'My Wardrobe', icon: 'Grid3X3' },
    { id: 'memories', label: 'Scent Memories', icon: 'BookOpen' },
    { id: 'wishlist', label: 'Fragrance Dreams', icon: 'Heart' },
    { id: 'journey', label: 'Discovery Journey', icon: 'Map' },
    { id: 'recommendations', label: 'Curated for You', icon: 'Sparkles' },
    { id: 'loyalty', label: 'Loyalty Program', icon: 'Crown' },
    { id: 'consultations', label: 'Consultations', icon: 'Calendar' }
  ];

  if (!userProfile) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center">
            <Icon name="Loader2" size={48} className="text-accent animate-spin mx-auto mb-4" />
            <p className="text-text-secondary font-body">Loading your fragrance profile...</p>
          </div>
        </div>
      </div>
    );
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'overview':
        return <ScentDNAWheel scentProfile={userProfile.scentProfile} />;
      case 'wardrobe':
        return <FragranceWardrobe fragrances={userProfile.fragrances} />;
      case 'memories':
        return <ScentMemories memories={userProfile.memories} />;
      case 'wishlist':
        return <FragranceDreams wishlist={userProfile.wishlist} />;
      case 'journey':
        return <DiscoveryJourney journeyData={userProfile.journeyData} />;
      case 'recommendations':
        return <PersonalizedRecommendations recommendations={userProfile.recommendations} />;
      case 'loyalty':
        return <LoyaltyProgram loyaltyData={userProfile.loyaltyData} />;
      case 'consultations':
        return <ConsultationBooking consultations={userProfile.consultations} />;
      default:
        return <ScentDNAWheel scentProfile={userProfile.scentProfile} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="pt-16">
        {/* Profile Header */}
        <div className="bg-gradient-to-r from-accent/10 to-secondary/10 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
              <div className="w-20 h-20 rounded-full overflow-hidden bg-muted flex-shrink-0">
                <img
                  src={userProfile.avatar}
                  alt={userProfile.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1">
                <h1 className="font-display text-3xl font-bold text-primary mb-2">
                  Welcome back, {userProfile.name.split(' ')[0]}!
                </h1>
                <p className="text-text-secondary font-body mb-3">
                  Member since {userProfile.memberSince} • {userProfile.fragrances.length} fragrances in collection
                </p>
                <div className="flex flex-wrap gap-3">
                  <div className="flex items-center space-x-2 bg-background px-3 py-1 rounded-full">
                    <Icon name="Heart" size={14} className="text-red-500" />
                    <span className="text-sm font-medium text-primary">Favorite: {userProfile.preferences.favoriteFamily}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background px-3 py-1 rounded-full">
                    <Icon name="Zap" size={14} className="text-blue-500" />
                    <span className="text-sm font-medium text-primary">Intensity: {userProfile.preferences.preferredIntensity}</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-background px-3 py-1 rounded-full">
                    <Icon name="Moon" size={14} className="text-purple-500" />
                    <span className="text-sm font-medium text-primary">Occasion: {userProfile.preferences.occasionPreference}</span>
                  </div>
                </div>
              </div>
              <div className="flex space-x-3">
                <Button variant="outline" iconName="Settings">
                  Edit Profile
                </Button>
                <Button variant="default" iconName="Share" className="bg-luxury-gold hover:bg-luxury-amber">
                  Share Profile
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:w-64 flex-shrink-0">
              <div className="bg-card rounded-2xl p-6 shadow-luxury sticky top-24">
                <nav className="space-y-2">
                  {sections.map((section) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(section.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg font-body font-medium transition-all duration-300 ${
                        activeSection === section.id
                          ? 'bg-accent text-accent-foreground shadow-luxury'
                          : 'text-text-secondary hover:text-primary hover:bg-muted'
                      }`}
                    >
                      <Icon name={section.icon} size={18} />
                      <span>{section.label}</span>
                    </button>
                  ))}
                </nav>

                {/* Quick Stats */}
                <div className="mt-8 pt-6 border-t border-border">
                  <h4 className="font-display font-semibold text-primary mb-4">Quick Stats</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Collection Size</span>
                      <span className="font-semibold text-primary">{userProfile.fragrances.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Wishlist Items</span>
                      <span className="font-semibold text-primary">{userProfile.wishlist.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Scent Memories</span>
                      <span className="font-semibold text-primary">{userProfile.memories.length}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-text-secondary">Loyalty Points</span>
                      <span className="font-semibold text-accent">{userProfile.loyaltyData.points.toLocaleString()}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {renderContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalFragranceProfile;