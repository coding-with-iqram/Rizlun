import React from 'react';
import Icon from '../../../components/AppIcon';

const ScentPersonalityQuiz = ({ selectedPersonality, onPersonalitySelect }) => {
  const personalities = [
    {
      id: 'classic',
      name: 'Classic Elegance',
      description: 'Timeless sophistication with refined taste',
      traits: ['Sophisticated', 'Refined', 'Timeless', 'Graceful'],
      fragranceStyle: 'Traditional florals, elegant woods, and refined compositions',
      icon: 'Crown',
      color: 'from-rose-600 to-pink-500',
      bgPattern: 'bg-gradient-to-br from-rose-50 to-pink-50'
    },
    {
      id: 'modern',
      name: 'Modern Minimalist',
      description: 'Clean lines and contemporary sensibilities',
      traits: ['Clean', 'Contemporary', 'Streamlined', 'Fresh'],
      fragranceStyle: 'Crisp citrus, clean musks, and modern aquatic notes',
      icon: 'Zap',
      color: 'from-blue-600 to-cyan-500',
      bgPattern: 'bg-gradient-to-br from-blue-50 to-cyan-50'
    },
    {
      id: 'bohemian',
      name: 'Bohemian Spirit',
      description: 'Free-spirited and creatively inspired',
      traits: ['Creative', 'Free-spirited', 'Artistic', 'Unconventional'],
      fragranceStyle: 'Exotic spices, earthy patchouli, and unique blends',
      icon: 'Feather',
      color: 'from-purple-600 to-indigo-500',
      bgPattern: 'bg-gradient-to-br from-purple-50 to-indigo-50'
    },
    {
      id: 'bold',
      name: 'Bold Adventurer',
      description: 'Fearless explorer of new experiences',
      traits: ['Adventurous', 'Confident', 'Dynamic', 'Fearless'],
      fragranceStyle: 'Rich orientals, bold spices, and statement-making scents',
      icon: 'Compass',
      color: 'from-orange-600 to-red-500',
      bgPattern: 'bg-gradient-to-br from-orange-50 to-red-50'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl font-bold text-primary">
          What's Your Scent Personality?
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
          Your personality influences your fragrance preferences. Discover which scent archetype matches your unique character and style.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {personalities.map((personality) => (
          <div
            key={personality.id}
            onClick={() => onPersonalitySelect(personality.id)}
            className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 scent-trail ${
              selectedPersonality === personality.id
                ? 'ring-4 ring-accent shadow-luxury-lg'
                : 'hover:shadow-luxury'
            }`}
          >
            <div className={`${personality.bgPattern} p-8 h-full`}>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`p-4 rounded-xl bg-gradient-to-br ${personality.color} text-white`}>
                    <Icon name={personality.icon} size={32} />
                  </div>
                  
                  {selectedPersonality === personality.id && (
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={20} className="text-primary" />
                    </div>
                  )}
                </div>

                <div className="space-y-4">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-primary breathing-text mb-2">
                      {personality.name}
                    </h3>
                    <p className="text-text-secondary font-body text-lg">
                      {personality.description}
                    </p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-body font-semibold text-primary mb-3">
                        Your Traits:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {personality.traits.map((trait, index) => (
                          <span
                            key={index}
                            className="px-3 py-2 bg-white/80 text-primary font-body font-medium text-sm rounded-full shadow-sm"
                          >
                            {trait}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-4 border-t border-primary/20">
                      <h4 className="font-body font-semibold text-primary mb-2">
                        Your Fragrance Style:
                      </h4>
                      <p className="text-text-secondary font-body text-sm italic">
                        {personality.fragranceStyle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 scent-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScentPersonalityQuiz;