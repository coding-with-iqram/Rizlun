import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../../components/ui/Header';
import FragranceHero from './components/FragranceHero';
import ScentPyramid from './components/ScentPyramid';
import ScentJourneyTimeline from './components/ScentJourneyTimeline';
import UserReviews from './components/UserReviews';
import StyleThisScent from './components/StyleThisScent';
import RelatedFragrances from './components/RelatedFragrances';

const IndividualFragranceExperience = () => {
  const location = useLocation();
  const [fragrance, setFragrance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Mock fragrance data - in a real app, this would come from an API or route params
  const mockFragrance = {
    id: 1,
    name: "Enchanted Garden",
    subtitle: "A Symphony of Blooming Elegance",
    brand: "Azmeera",
    price: 165,
    originalPrice: 185,
    size: "50ml",
    concentration: "Eau de Parfum",
    rating: 4.8,
    reviewCount: 342,
    longevity: "8-10 hours",
    sillage: "Moderate to Strong",
    season: "Spring/Summer",
    occasion: "Day & Evening",
    mainImage: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=600&h=600&fit=crop",
    detailImage: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=600&fit=crop",
    lifestyleImage: "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=600&h=600&fit=crop",
    ingredientImage: "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?w=600&h=600&fit=crop",
    sizeOptions: [
      { size: "30ml", price: 125 },
      { size: "50ml", price: 165 },
      { size: "100ml", price: 245 }
    ],
    notes: {
      top: [
        { name: "Bergamot", origin: "Calabria, Italy", description: "Bright and zesty citrus that opens with sparkling freshness" },
        { name: "Pink Pepper", origin: "Madagascar", description: "Delicate spicy warmth that adds complexity to the opening" },
        { name: "Lemon Zest", origin: "Sicily, Italy", description: "Crisp and invigorating citrus brightness" }
      ],
      heart: [
        { name: "Bulgarian Rose", origin: "Valley of Roses, Bulgaria", description: "The queen of flowers, rich and velvety with honeyed facets" },
        { name: "Jasmine Sambac", origin: "India", description: "Intoxicating white floral with creamy, narcotic qualities" },
        { name: "Peony", origin: "France", description: "Soft, powdery floral with a fresh, dewy character" },
        { name: "Lily of the Valley", origin: "France", description: "Delicate spring flower with green, crystalline beauty" }
      ],
      base: [
        { name: "Sandalwood", origin: "Mysore, India", description: "Creamy, smooth wood with a meditative quality" },
        { name: "White Musk", origin: "Synthetic", description: "Clean, soft, and enveloping with skin-like warmth" },
        { name: "Amber", origin: "Synthetic", description: "Warm, resinous sweetness that adds depth and longevity" },
        { name: "Cedarwood", origin: "Virginia, USA", description: "Dry, woody base that provides structure and elegance" }
      ]
    },
    journey: {
      opening: `The first spray reveals a burst of Sicilian lemon and Calabrian bergamot, creating an immediate sense of joy and vitality. Pink pepper adds a gentle spice that tingles the senses without overwhelming.`,
      development: `As the citrus begins to settle, the first hints of Bulgarian rose emerge, supported by the green freshness of lily of the valley. The transition is seamless and elegant.`,
      heart: `The heart reveals itself in full glory - Bulgarian rose takes center stage, accompanied by the intoxicating jasmine sambac and soft peony petals. This is where the fragrance shows its true romantic character.`,
      settling: `The florals begin to meld with the emerging base notes. Sandalwood provides a creamy backdrop while white musk adds skin-like warmth. The fragrance becomes more intimate and personal.`,
      base: `The dry down is a sophisticated blend of sandalwood, amber, and cedarwood. White musk envelops everything in a soft, clean embrace that feels like a second skin.`,
      drydown: `In its final hours, Enchanted Garden becomes a whisper of warm woods and clean musk, staying close to the skin as a beautiful, comforting presence.`
    },
    ratingDistribution: {
      5: 198,
      4: 89,
      3: 34,
      2: 15,
      1: 6
    },
    topMentions: ["Romantic", "Long-lasting", "Perfect for dates", "Sophisticated", "Versatile"],
    reviews: [
      {
        id: 1,
        name: "Sarah Mitchell",
        avatar: "https://randomuser.me/api/portraits/women/32.jpg",
        rating: 5,
        title: "My signature scent!",
        content: `I've been searching for the perfect romantic fragrance for years, and Enchanted Garden is absolutely it. The rose is prominent but not overwhelming, and the way it develops throughout the day is magical. I get compliments every time I wear it, and it lasts beautifully on my skin for 8+ hours.`,
        date: "2025-01-15",
        verified: true,
        helpful: 23,
        wearTime: "8+ hours",
        occasion: "Date nights and special occasions",
        seasonal: "Perfect for spring and summer",
        scentDescription: "Romantic rose garden with creamy woods"
      },
      {
        id: 2,
        name: "Emma Rodriguez",
        avatar: "https://randomuser.me/api/portraits/women/45.jpg",
        rating: 4,
        title: "Beautiful but strong",
        content: `This is a gorgeous fragrance with incredible quality. The rose note is very realistic and the longevity is impressive. However, it can be quite strong, so I recommend going light on the application. Perfect for cooler weather or evening wear.`,
        date: "2025-01-10",
        verified: true,
        helpful: 18,
        wearTime: "6-8 hours",
        occasion: "Evening events",
        seasonal: "Better for fall and winter",
        scentDescription: "Rich, sophisticated floral with woody base"
      },
      {
        id: 3,
        name: "Jessica Chen",
        avatar: "https://randomuser.me/api/portraits/women/28.jpg",
        rating: 5,
        title: "Exceeded expectations",
        content: `I was hesitant about rose fragrances, but this one converted me. It's not your grandmother's rose - it's modern, sophisticated, and incredibly well-blended. The jasmine adds a beautiful complexity, and the base is so comforting. Worth every penny!`,
        date: "2025-01-05",
        verified: true,
        helpful: 31,
        wearTime: "7-9 hours",
        occasion: "Work and weekend",
        seasonal: "Year-round favorite",
        scentDescription: "Modern rose with jasmine and creamy sandalwood"
      },
      {
        id: 4,
        name: "Amanda Foster",
        avatar: "https://randomuser.me/api/portraits/women/38.jpg",
        rating: 4,
        title: "Romantic and elegant",
        content: `This fragrance makes me feel feminine and confident. The rose is the star, but the supporting notes create such a beautiful harmony. I love wearing it to dinner dates and special occasions. The bottle is also gorgeous on my vanity!`,
        date: "2024-12-28",
        verified: true,
        helpful: 15,
        wearTime: "6-7 hours",
        occasion: "Romantic dinners",
        seasonal: "Spring favorite",
        scentDescription: "Elegant rose bouquet with soft woods"
      },
      {
        id: 5,
        name: "Rachel Thompson",
        avatar: "https://randomuser.me/api/portraits/women/42.jpg",
        rating: 5,
        title: "Perfect for layering",
        content: `I love how versatile this fragrance is. On its own, it's beautiful, but it also layers wonderfully with other scents in my collection. The quality is outstanding - you can tell this is a premium fragrance from the first spray.`,
        date: "2024-12-20",
        verified: true,
        helpful: 12,
        wearTime: "8+ hours",
        occasion: "Daily wear",
        seasonal: "All seasons",
        scentDescription: "Versatile floral that plays well with others"
      }
    ]
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setFragrance(mockFragrance);
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    // Mock add to cart functionality
    console.log('Added to cart:', fragrance.name);
    // In a real app, this would dispatch to cart state or call an API
  };

  const handleAddToWishlist = () => {
    // Mock add to wishlist functionality
    console.log('Added to wishlist:', fragrance.name);
    // In a real app, this would dispatch to wishlist state or call an API
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
            <p className="text-text-secondary">Loading fragrance experience...</p>
          </div>
        </div>
      </div>
    );
  }

  if (!fragrance) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-center space-y-4">
            <p className="text-text-secondary">Fragrance not found</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Main Content */}
      <main className="pt-16">
        {/* Hero Section */}
        <FragranceHero 
          fragrance={fragrance}
          onAddToCart={handleAddToCart}
          onAddToWishlist={handleAddToWishlist}
        />

        {/* Scent Pyramid */}
        <ScentPyramid fragrance={fragrance} />

        {/* Scent Journey Timeline */}
        <ScentJourneyTimeline fragrance={fragrance} />

        {/* User Reviews */}
        <UserReviews fragrance={fragrance} />

        {/* Style This Scent */}
        <StyleThisScent fragrance={fragrance} />

        {/* Related Fragrances */}
        <RelatedFragrances fragrance={fragrance} />
      </main>

      {/* Footer */}
      <footer className="bg-primary text-background py-12">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
          <div className="space-y-4">
            <h3 className="font-display text-2xl font-bold">Azmeera Perfume</h3>
            <p className="text-background/80 max-w-2xl mx-auto">
              Crafting olfactory experiences that transcend the ordinary, where each fragrance tells a story and becomes part of your personal signature.
            </p>
            <div className="flex justify-center space-x-6 text-sm">
              <span>Premium Quality</span>
              <span>•</span>
              <span>Authentic Ingredients</span>
              <span>•</span>
              <span>Sustainable Practices</span>
            </div>
            <div className="pt-8 border-t border-background/20">
              <p className="text-background/60 text-sm">
                © {new Date().getFullYear()} Azmeera Perfume. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default IndividualFragranceExperience;