import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';

import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [selectedMood, setSelectedMood] = useState('Fresh');
  const [particleAnimation, setParticleAnimation] = useState(false);

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

  const handleMoodSelect = (mood) => {
    setSelectedMood(mood.id);
    setParticleAnimation(true);
    setTimeout(() => setParticleAnimation(false), 1000);
  };

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-surface to-card overflow-hidden">
      {/* Background Particles */}
      <div className="absolute inset-0 scent-particles opacity-30"></div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h1 className="font-display text-5xl lg:text-7xl font-bold text-primary leading-tight breathing-text">
                Discover Your
                <span className="text-luxury-gold block">Signature Story</span>
              </h1>
              
              <p className="text-xl text-text-secondary font-body leading-relaxed max-w-lg">
                Where scent meets soul. Embark on a sensory journey through our curated collection of luxury fragrances, each crafted to become part of your unique identity.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/fragrance-discovery-tool">
                <Button 
                  variant="default" 
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-amber text-primary-foreground shadow-luxury-lg"
                  iconName="Search"
                  iconPosition="right"
                >
                  Start Your Scent Journey
                </Button>
              </Link>
              
              <Link to="/collections-gallery">
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-accent text-accent hover:bg-accent/10"
                  iconName="Grid3X3"
                  iconPosition="right"
                >
                  Explore Collections
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Icon name="Shield" size={20} className="text-accent" />
                <span className="text-sm text-text-secondary font-body">Authenticity Guaranteed</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Truck" size={20} className="text-accent" />
                <span className="text-sm text-text-secondary font-body">Free Samples</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Mood Selector */}
          <div className="flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              
              {/* Central Circle */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className={`w-32 h-32 rounded-full bg-gradient-to-br ${moodOptions.find(m => m.id === selectedMood)?.color} shadow-luxury-lg transition-all duration-500 ${particleAnimation ? 'scale-110' : 'scale-100'}`}>
                  <div className="w-full h-full rounded-full flex items-center justify-center scent-particles">
                    <Icon 
                      name={moodOptions.find(m => m.id === selectedMood)?.icon} 
                      size={40} 
                      className="text-primary"
                    />
                  </div>
                </div>
              </div>

              {/* Mood Options */}
              {moodOptions.map((mood, index) => {
                const isSelected = selectedMood === mood.id;
                const radius = 140;
                const angle = (index * 90) * (Math.PI / 180);
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;

                return (
                  <button
                    key={mood.id}
                    onClick={() => handleMoodSelect(mood)}
                    className={`absolute w-20 h-20 rounded-full transition-all duration-300 scent-trail ${
                      isSelected 
                        ? 'scale-110 shadow-luxury-lg' 
                        : 'scale-100 hover:scale-105 shadow-luxury'
                    }`}
                    style={{
                      left: `calc(50% + ${x}px - 2.5rem)`,
                      top: `calc(50% + ${y}px - 2.5rem)`,
                    }}
                  >
                    <div className={`w-full h-full rounded-full bg-gradient-to-br ${mood.color} flex items-center justify-center border-2 ${
                      isSelected ? 'border-accent' : 'border-border'
                    }`}>
                      <Icon 
                        name={mood.icon} 
                        size={24} 
                        className={isSelected ? 'text-accent' : 'text-primary'}
                      />
                    </div>
                  </button>
                );
              })}

              {/* Connecting Lines */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none">
                {moodOptions.map((mood, index) => {
                  const isSelected = selectedMood === mood.id;
                  const radius = 140;
                  const angle = (index * 90) * (Math.PI / 180);
                  const x1 = 192 + Math.cos(angle) * 64;
                  const y1 = 192 + Math.sin(angle) * 64;
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
        <div className="text-center mt-12">
          <div className="inline-block bg-card/80 backdrop-blur-sm rounded-2xl px-8 py-4 shadow-luxury">
            <h3 className="font-display text-2xl font-semibold text-primary mb-2">
              {selectedMood} Essence
            </h3>
            <p className="text-text-secondary font-body">
              {moodOptions.find(m => m.id === selectedMood)?.description}
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={32} className="text-accent opacity-60" />
      </div>
    </section>
  );
};

export default HeroSection;