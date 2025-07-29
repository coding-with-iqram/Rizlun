import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [selectedMood, setSelectedMood] = useState('Fresh');
  const [particleAnimation, setParticleAnimation] = useState(false);
  const [windowWidth, setWindowWidth] = useState(1024); // Default to desktop size

  const moodOptions = [
    {
      id: 'Fresh',
      name: 'Fresh',
      description: 'Crisp morning air with citrus awakening',
      color: 'from-blue-100 to-green-100',
      icon: 'Droplets',
      angle: 0
    },
    {
      id: 'Romantic',
      name: 'Romantic',
      description: 'Soft florals dancing in moonlight',
      color: 'from-pink-100 to-rose-100',
      icon: 'Heart',
      angle: 90
    },
    {
      id: 'Mysterious',
      name: 'Mysterious',
      description: 'Deep woods with whispered secrets',
      color: 'from-purple-100 to-indigo-100',
      icon: 'Moon',
      angle: 180
    },
    {
      id: 'Energizing',
      name: 'Energizing',
      description: 'Vibrant spices igniting your spirit',
      color: 'from-orange-100 to-yellow-100',
      icon: 'Zap',
      angle: 270
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setParticleAnimation(prev => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // Handle window resize for responsive calculations
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWindowWidth(window.innerWidth);
      }
    };

    // Set initial width
    handleResize();

    // Add event listener
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.id);
    setParticleAnimation(true);
    setTimeout(() => setParticleAnimation(false), 1000);
  };

  // Safe radius calculation
  const getRadius = () => {
    if (windowWidth < 640) return 100;
    if (windowWidth < 1024) return 120;
    return 140;
  };

  const getCenterSize = () => {
    if (windowWidth < 1024) return 56;
    return 64;
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-card overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 scent-particles opacity-30"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24 pb-12 sm:pb-16">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center min-h-[70vh] sm:min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary leading-tight breathing-text">
                Discover Your
                <span className="text-luxury-gold block">Signature Story</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-body leading-relaxed max-w-lg mx-auto lg:mx-0">
                Where scent meets soul. Embark on a sensory journey through our curated collection of luxury fragrances, each crafted to become part of your unique identity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link to="/fragrance-discovery-tool" className="w-full sm:w-auto">
                <Button 
                  variant="default" 
                  size="lg"
                  fullWidth
                  className="bg-luxury-gold hover:bg-luxury-amber text-primary-foreground shadow-luxury-lg text-sm sm:text-base"
                  iconName="Search"
                  iconPosition="right"
                >
                  Start Your Scent Journey
                </Button>
              </Link>
              
              <Link to="/collections-gallery" className="w-full sm:w-auto">
                <Button 
                  variant="outline" 
                  size="lg"
                  fullWidth
                  className="border-accent text-accent hover:bg-accent/10 text-sm sm:text-base"
                  iconName="Grid3X3"
                  iconPosition="right"
                >
                  Explore Collections
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={16} className="text-accent sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm text-text-secondary font-body">Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={16} className="text-accent sm:w-5 sm:h-5" />
                <span className="text-xs sm:text-sm text-text-secondary font-body">Free Samples</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Mood Selector */}
          <div className="flex justify-center items-center order-first lg:order-last">
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
              
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-24 h-24 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br ${moodOptions.find(m => m.id === selectedMood)?.color} shadow-luxury-lg transition-all duration-500 ${particleAnimation ? 'scale-110' : 'scale-100'}`}>
                  <div className="w-full h-full rounded-full flex items-center justify-center scent-particles">
                    <Icon 
                      name={moodOptions.find(m => m.id === selectedMood)?.icon} 
                      size={32} 
                      className="text-primary sm:w-8 sm:h-8 lg:w-10 lg:h-10"
                    />
                  </div>
                </div>
              </div>

              {/* Mood Options */}
              {moodOptions.map((mood, index) => {
                const isSelected = selectedMood === mood.id;
                const radius = getRadius();
                const angle = (index * 90) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood)}
                    className={`absolute w-16 h-16 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full transition-all duration-300 scent-trail ${
                      isSelected 
                        ? 'scale-110 shadow-luxury-lg' 
                        : 'scale-100 hover:scale-105 shadow-luxury'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 2rem)`,
                      top: `calc(50% + ${y}px - 2rem)`,
                    }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${mood.color} flex items-center justify-center border-2 ${
                      isSelected ? 'border-accent' : 'border-border'
                    }`}>
                      <Icon 
                        name={mood.icon} 
                        size={20} 
                        className={`${isSelected ? 'text-accent' : 'text-primary'} sm:w-6 sm:h-6 lg:w-6 lg:h-6`}
                      />
                    </div>
                  </button>
                );
              })}

              {/* Connecting Lines - Hidden on mobile for cleaner look */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none hidden sm:block">
                {moodOptions.map((mood, index) => {
                  const isSelected = selectedMood === mood.id;
                  const radius = getRadius();
                  const angle = (index * 90) * (Math.PI / 180);
                  const centerSize = getCenterSize();
                  const x1 = 192 + Math.cos(angle) * (centerSize / 2);
                  const y1 = 192 + Math.sin(angle) * (centerSize / 2);
                  const x2 = 192 + Math.cos(angle) * (radius - 40);
                  const y2 = 192 + Math.sin(angle) * (radius - 40);

                  return (
                    <line
                      key={mood.id}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke={isSelected ? 'var(--color-accent)' : 'var(--color-border)'}
                      strokeWidth={isSelected ? 2 : 1}
                      strokeDasharray={isSelected ? '0' : '4 4'}
                      className="transition-all duration-300"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Selected Mood Description */}
        <div className="text-center mt-8 sm:mt-12">
          <div className="inline-block bg-card/80 backdrop-blur-sm rounded-xl sm:rounded-2xl px-6 sm:px-8 py-3 sm:py-4 shadow-luxury">
            <h3 className="font-display text-lg sm:text-xl lg:text-2xl font-semibold text-primary mb-1 sm:mb-2">
              {selectedMood} Essence
            </h3>
            <p className="text-xs sm:text-sm lg:text-base text-text-secondary font-body">
              {moodOptions.find(m => m.id === selectedMood)?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-accent opacity-60 sm:w-8 sm:h-8" />
      </div>
    </section>
  );
};

export default HeroSection;