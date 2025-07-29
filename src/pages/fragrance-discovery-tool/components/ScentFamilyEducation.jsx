import React from 'react';
import Icon from '../../../components/AppIcon';

const ScentFamilyEducation = ({ selectedFamily, onFamilySelect }) => {
  const scentFamilies = [
    {
      id: 'citrus',
      name: 'Citrus & Fresh',
      description: 'Bright, energizing, and clean scents that awaken the senses',
      characteristics: ['Uplifting', 'Clean', 'Energizing', 'Light'],
      notes: ['Lemon', 'Bergamot', 'Grapefruit', 'Orange Blossom'],
      personality: 'Perfect for those who love feeling refreshed and vibrant',
      icon: 'Sun',
      color: 'from-yellow-400 to-orange-400',
      bgColor: 'color-breathing-citrus'
    },
    {
      id: 'floral',
      name: 'Floral & Romantic',
      description: 'Elegant blooms that capture the essence of femininity and grace',
      characteristics: ['Romantic', 'Elegant', 'Soft', 'Timeless'],
      notes: ['Rose', 'Jasmine', 'Peony', 'Lily of the Valley'],
      personality: 'Ideal for romantic souls who appreciate classic beauty',
      icon: 'Flower2',
      color: 'from-pink-400 to-rose-400',
      bgColor: 'color-breathing-floral'
    },
    {
      id: 'woody',
      name: 'Woody & Warm',
      description: 'Rich, grounding scents that evoke strength and sophistication',
      characteristics: ['Sophisticated', 'Warm', 'Grounding', 'Complex'],
      notes: ['Sandalwood', 'Cedar', 'Vetiver', 'Patchouli'],
      personality: 'Perfect for confident individuals who command respect',
      icon: 'Trees',
      color: 'from-amber-600 to-brown-500',
      bgColor: 'color-breathing-woody'
    },
    {
      id: 'oriental',
      name: 'Oriental & Spicy',
      description: 'Mysterious and exotic blends that tell stories of distant lands',
      characteristics: ['Exotic', 'Mysterious', 'Rich', 'Sensual'],
      notes: ['Vanilla', 'Amber', 'Cinnamon', 'Cardamom'],
      personality: 'For adventurous spirits who embrace the extraordinary',
      icon: 'Sparkles',
      color: 'from-purple-500 to-red-500',
      bgColor: 'bg-gradient-to-br from-purple-100 to-red-100'
    },
    {
      id: 'aquatic',
      name: 'Aquatic & Marine',
      description: 'Ocean-inspired freshness that brings tranquility and peace',
      characteristics: ['Calming', 'Fresh', 'Clean', 'Peaceful'],
      notes: ['Sea Salt', 'Marine Accord', 'Cucumber', 'Water Lily'],
      personality: 'Ideal for those who find peace by the water',
      icon: 'Waves',
      color: 'from-blue-400 to-cyan-400',
      bgColor: 'bg-gradient-to-br from-blue-100 to-cyan-100'
    },
    {
      id: 'gourmand',
      name: 'Gourmand & Sweet',
      description: 'Deliciously tempting scents inspired by culinary delights',
      characteristics: ['Sweet', 'Comforting', 'Playful', 'Warm'],
      notes: ['Vanilla', 'Chocolate', 'Caramel', 'Coffee'],
      personality: 'Perfect for those who find joy in life\'s sweet moments',
      icon: 'Coffee',
      color: 'from-orange-500 to-pink-400',
      bgColor: 'bg-gradient-to-br from-orange-100 to-pink-100'
    }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl font-bold text-primary">
          Discover Your Scent Family
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-3xl mx-auto">
          Understanding fragrance families helps you identify your preferences. Each family has unique characteristics that resonate with different personalities and moods.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scentFamilies.map((family) => (
          <div
            key={family.id}
            onClick={() => onFamilySelect(family.id)}
            className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 scent-trail ${
              selectedFamily === family.id
                ? 'ring-4 ring-accent shadow-luxury-lg'
                : 'hover:shadow-luxury'
            }`}
          >
            <div className={`${family.bgColor} p-6 h-full`}>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${family.color} text-white`}>
                    <Icon name={family.icon} size={24} />
                  </div>
                  
                  {selectedFamily === family.id && (
                    <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                      <Icon name="Check" size={16} className="text-primary" />
                    </div>
                  )}
                </div>

                <div className="space-y-3">
                  <h3 className="font-display text-xl font-semibold text-primary breathing-text">
                    {family.name}
                  </h3>
                  <p className="text-text-secondary font-body text-sm">
                    {family.description}
                  </p>
                </div>

                <div className="space-y-3">
                  <div>
                    <h4 className="font-body font-medium text-primary text-sm mb-2">
                      Characteristics:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {family.characteristics.map((char, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-white/70 text-primary text-xs font-body rounded-full"
                        >
                          {char}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="font-body font-medium text-primary text-sm mb-2">
                      Key Notes:
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {family.notes.map((note, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-primary/10 text-primary text-xs font-body rounded-full"
                        >
                          {note}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-primary/20">
                    <p className="text-primary font-body text-xs italic">
                      {family.personality}
                    </p>
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

export default ScentFamilyEducation;