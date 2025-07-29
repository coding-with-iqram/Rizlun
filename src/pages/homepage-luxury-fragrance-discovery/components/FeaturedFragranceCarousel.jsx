// src/pages/components/FeaturedFragranceCarousel.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const FeaturedFragranceCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const featuredFragrances = [
    {
      id: 1,
      name: "Mediterranean Dawn",
      subtitle: "Bergamot Whispers",
      description: "A luminous opening of Sicilian bergamot dances with morning dew, while jasmine petals unfold like secrets shared at sunrise.",
      image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
      price: "BDT 18,500",
      category: "Citrus Floral",
      topNotes: ["Bergamot", "Lemon", "Pink Pepper"],
      heartNotes: ["Jasmine", "Rose", "Lily of Valley"],
      baseNotes: ["White Musk", "Cedar", "Amber"],
      mood: "Fresh & Romantic",
      intensity: 3,
      longevity: "6-8 hours"
    },
    {
      id: 2,
      name: "Midnight Oud",
      subtitle: "Velvet Shadows",
      description: "Rich oud wood embraces smoky incense, creating an intoxicating symphony that speaks of ancient mysteries and modern sophistication.",
      image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
      price: "BDT 29,500",
      category: "Oriental Woody",
      topNotes: ["Black Pepper", "Cardamom", "Saffron"],
      heartNotes: ["Oud", "Rose", "Incense"],
      baseNotes: ["Sandalwood", "Vanilla", "Musk"],
      mood: "Mysterious & Luxurious",
      intensity: 5,
      longevity: "10-12 hours"
    },
    {
      id: 3,
      name: "Garden Reverie",
      subtitle: "Peony Dreams",
      description: "Delicate peony petals float on a breeze of green leaves, capturing the essence of an English garden in full bloom.",
      image: "https://images.unsplash.com/photo-1190829/pexels-photo-1190829.jpeg?w=400&h=500&fit=crop",
      price: "BDT 16,500",
      category: "Fresh Floral",
      topNotes: ["Green Leaves", "Dewdrops", "Citrus"],
      heartNotes: ["Peony", "Magnolia", "Freesia"],
      baseNotes: ["White Tea", "Musk", "Blonde Woods"],
      mood: "Fresh & Feminine",
      intensity: 2,
      longevity: "4-6 hours"
    },
    {
      id: 4,
      name: "Spice Route",
      subtitle: "Amber Expedition",
      description: "Warm cardamom and cinnamon bark create a journey through ancient spice markets, finished with golden amber and precious woods.",
      image: "https://images.unsplash.com/photo-2020/05/11/22/31/perfume-5160517_1280.jpg?w=400&h=500&fit=crop",
      price: "BDT 22,500",
      category: "Spicy Oriental",
      topNotes: ["Cardamom", "Cinnamon", "Orange"],
      heartNotes: ["Clove", "Nutmeg", "Rose"],
      baseNotes: ["Amber", "Sandalwood", "Vanilla"],
      mood: "Energizing & Warm",
      intensity: 4,
      longevity: "8-10 hours"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredFragrances.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [featuredFragrances.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredFragrances.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredFragrances.length) % featuredFragrances.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    }
    if (isRightSwipe) {
      prevSlide();
    }

    setTouchStart(null);
    setTouchEnd(null);
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-background to-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Featured Fragrance Journey
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-body max-w-2xl mx-auto px-4">
            Discover our signature scents, each telling a unique story through carefully crafted notes and memories
          </p>
        </div>

        <div className="relative max-w-7xl mx-auto">
          
          <div className="overflow-hidden rounded-2xl lg:rounded-3xl shadow-luxury-lg">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              {featuredFragrances.map((fragrance, index) => (
                <div key={fragrance.id} className="w-full flex-shrink-0">
                  <div className="grid lg:grid-cols-2 gap-0 bg-card min-h-[500px] sm:min-h-[550px] lg:min-h-[600px]">
                    
                    <div className="relative overflow-hidden order-2 lg:order-1">
                      <Image
                        src={fragrance.image}
                        alt={fragrance.name}
                        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                      
                      <div className="absolute top-4 right-4 sm:top-6 sm:right-6 bg-accent text-primary-foreground px-3 py-1 sm:px-4 sm:py-2 rounded-full font-body font-semibold shadow-luxury text-sm sm:text-base">
                        {fragrance.price}
                      </div>
                    </div>

                    <div className="p-6 sm:p-8 lg:p-12 flex flex-col justify-center space-y-4 sm:space-y-6 order-1 lg:order-2">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-4">
                        <span className="bg-accent/10 text-accent px-2 py-1 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm font-body font-medium">
                          {fragrance.category}
                        </span>
                        <span className="text-text-secondary text-xs sm:text-sm font-body">
                          {fragrance.mood}
                        </span>
                      </div>

                      <div>
                        <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-1 sm:mb-2">
                          {fragrance.name}
                        </h3>
                        <p className="font-accent text-lg sm:text-xl text-secondary">
                          {fragrance.subtitle}
                        </p>
                      </div>

                      <p className="text-text-secondary font-body text-sm sm:text-base lg:text-lg leading-relaxed">
                        {fragrance.description}
                      </p>

                      <div 
                        className={`transition-all duration-500 overflow-hidden ${
                          hoveredCard === index ? 'max-h-80 sm:max-h-96 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        <div className="bg-surface/50 rounded-xl sm:rounded-2xl p-4 sm:p-6 space-y-3 sm:space-y-4">
                          <h4 className="font-display text-base sm:text-lg font-semibold text-primary mb-3 sm:mb-4">Scent Pyramid</h4>
                          
                          <div className="space-y-2 sm:space-y-3">
                            <div>
                              <span className="text-xs sm:text-sm font-body font-medium text-accent">Top Notes:</span>
                              <p className="text-xs sm:text-sm text-text-secondary">{fragrance.topNotes.join(', ')}</p>
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-body font-medium text-accent">Heart Notes:</span>
                              <p className="text-xs sm:text-sm text-text-secondary">{fragrance.heartNotes.join(', ')}</p>
                            </div>
                            <div>
                              <span className="text-xs sm:text-sm font-body font-medium text-accent">Base Notes:</span>
                              <p className="text-xs sm:text-sm text-text-secondary">{fragrance.baseNotes.join(', ')}</p>
                            </div>
                          </div>

                          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 pt-2">
                            <div className="flex items-center gap-2">
                              <span className="text-xs sm:text-sm font-body text-text-secondary">Intensity:</span>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <div
                                    key={i}
                                    className={`w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full ${
                                      i < fragrance.intensity ? 'bg-accent' : 'bg-border'
                                    }`}
                                  />
                                ))}
                              </div>
                            </div>
                            <div className="text-xs sm:text-sm text-text-secondary">
                              <span className="font-body">Longevity:</span> {fragrance.longevity}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4">
                        <Link to="/individual-fragrance-experience" className="flex-1">
                          <Button 
                            variant="default" 
                            fullWidth
                            size="sm"
                            className="bg-luxury-gold hover:bg-luxury-amber text-sm sm:text-base"
                            iconName="Eye"
                            iconPosition="right"
                          >
                            Explore Fragrance
                          </Button>
                        </Link>
                        
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="border-accent text-accent hover:bg-accent/10 text-sm sm:text-base"
                          iconName="Heart"
                          iconPosition="left"
                          onMouseEnter={() => setHoveredCard(index)}
                        >
                          <span className="hidden sm:inline">Add to Wishlist</span>
                          <span className="sm:hidden">Wishlist</span>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons - Hidden on mobile, shown on tablet+ */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-luxury items-center justify-center hover:bg-accent/10 transition-colors duration-300 z-10"
          >
            <Icon name="ChevronLeft" size={20} className="text-primary" />
          </button>
          
          <button
            onClick={nextSlide}
            className="hidden sm:flex absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-background/90 backdrop-blur-sm rounded-full shadow-luxury items-center justify-center hover:bg-accent/10 transition-colors duration-300 z-10"
          >
            <Icon name="ChevronRight" size={20} className="text-primary" />
          </button>

          {/* Mobile Navigation Dots */}
          <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
            {featuredFragrances.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index 
                    ? 'bg-accent scale-125' :'bg-border hover:bg-accent/50'
                }`}
              />
            ))}
          </div>

          {/* Mobile Swipe Indicator */}
          <div className="sm:hidden text-center mt-4">
            <p className="text-xs text-text-secondary font-body">
              Swipe to explore more fragrances
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedFragranceCarousel;
