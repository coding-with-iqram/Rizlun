import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const PerfumerSpotlight = () => {
  const perfumers = [
    {
      id: 1,
      name: "Isabella Moreau",
      title: "Master Perfumer",
      location: "Grasse, France",
      experience: "25 Years",
      specialty: "Floral & Oriental Compositions",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
      signature: "Mediterranean Dawn, Garden Reverie",
      philosophy: `"Each fragrance is a poem written in scent, where every note tells a story of emotion and memory."`,
      achievements: [
        "Prix International du Parfum 2023",
        "Featured in Vogue's Top Perfumers",
        "Creator of 50+ Award-winning Fragrances"
      ]
    },
    {
      id: 2,
      name: "Alexandre Chen",
      title: "Artisan Perfumer",
      location: "Tokyo, Japan",
      experience: "18 Years",
      specialty: "Woody & Spicy Blends",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
      signature: "Midnight Oud, Spice Route",
      philosophy: `"Perfumery is the art of invisible sculpture. I craft scents that evolve like a beautiful story."`,
      achievements: [
        "Tokyo Fragrance Innovation Award",
        "Collaboration with Luxury Fashion Houses",
        "Pioneer in Sustainable Perfumery"
      ]
    },
    {
      id: 3,
      name: "Sofia Rodriguez",
      title: "Creative Director",
      location: "Barcelona, Spain",
      experience: "22 Years",
      specialty: "Fresh & Citrus Innovations",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
      signature: "Citrus Symphony, Ocean Breeze",
      philosophy: `"I find inspiration in the Mediterranean lifestyle - the warmth of sun-kissed skin, the freshness of sea breeze."`,
      achievements: [
        "Spanish Perfumery Excellence Award",
        "Sustainable Sourcing Pioneer",
        "Mediterranean Fragrance Ambassador"
      ]
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-card to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-primary mb-3 sm:mb-4">
            Perfumer Spotlight
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-text-secondary font-body max-w-2xl mx-auto px-4">
            Meet the master craftspeople behind our signature fragrances, each bringing decades of artistry and passion to every bottle
          </p>
        </div>

        {/* Perfumers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {perfumers.map((perfumer) => (
            <div
              key={perfumer.id}
              className="bg-card rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Perfumer Image */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-4 sm:mb-6">
                <img
                  src={perfumer.image}
                  alt={perfumer.name}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>

              {/* Perfumer Info */}
              <div className="text-center mb-4 sm:mb-6">
                <h3 className="font-display font-bold text-lg sm:text-xl text-primary mb-1">
                  {perfumer.name}
                </h3>
                <p className="font-accent text-secondary text-sm sm:text-base mb-2">
                  {perfumer.title}
                </p>
                <div className="flex items-center justify-center gap-2 text-xs sm:text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} className="sm:w-4 sm:h-4" />
                  <span>{perfumer.location}</span>
                </div>
              </div>

              {/* Specialty & Experience */}
              <div className="mb-4 sm:mb-6">
                <div className="flex items-center justify-between text-xs sm:text-sm text-text-secondary mb-2">
                  <span>Specialty:</span>
                  <span className="font-medium">{perfumer.specialty}</span>
                </div>
                <div className="flex items-center justify-between text-xs sm:text-sm text-text-secondary">
                  <span>Experience:</span>
                  <span className="font-medium">{perfumer.experience}</span>
                </div>
              </div>

              {/* Philosophy */}
              <blockquote className="text-xs sm:text-sm text-text-secondary italic mb-4 sm:mb-6 text-center">
                "{perfumer.philosophy}"
              </blockquote>

              {/* Signature Fragrances */}
              <div className="mb-4 sm:mb-6">
                <h4 className="font-display font-semibold text-sm sm:text-base text-primary mb-2">
                  Signature Fragrances
                </h4>
                <p className="text-xs sm:text-sm text-text-secondary">
                  {perfumer.signature}
                </p>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="font-display font-semibold text-sm sm:text-base text-primary mb-2">
                  Achievements
                </h4>
                <ul className="space-y-1">
                  {perfumer.achievements.slice(0, 2).map((achievement, index) => (
                    <li key={index} className="text-xs sm:text-sm text-text-secondary flex items-start gap-2">
                      <Icon name="Award" size={12} className="text-accent mt-0.5 flex-shrink-0 sm:w-3 sm:h-3" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent/10"
            iconName="Users"
            iconPosition="right"
          >
            Meet Our Full Team
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PerfumerSpotlight;