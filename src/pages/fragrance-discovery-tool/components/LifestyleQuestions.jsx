import React from 'react';
import Icon from '../../../components/AppIcon';

const LifestyleQuestions = ({ selectedLifestyle, onLifestyleSelect }) => {
  const lifestyleOptions = [
    {
      id: 'adventure',
      title: 'Outdoor adventures and exploration',
      description: 'Hiking trails, camping under stars, discovering new places',
      icon: 'Mountain',
      occasions: ['Casual', 'Weekend', 'Travel'],
      intensity: 'Light to Medium',
      color: 'from-green-600 to-teal-500'
    },
    {
      id: 'social',
      title: 'Social gatherings and celebrations',
      description: 'Dinner parties, networking events, festive occasions',
      icon: 'Users',
      occasions: ['Evening', 'Special Events', 'Social'],
      intensity: 'Medium to Strong',
      color: 'from-purple-600 to-pink-500'
    },
    {
      id: 'intimate',
      title: 'Quiet moments and self-reflection',
      description: 'Reading by the fireplace, meditation, peaceful solitude',
      icon: 'Heart',
      occasions: ['Personal', 'Relaxation', 'Home'],
      intensity: 'Soft and Subtle',
      color: 'from-rose-600 to-red-500'
    },
    {
      id: 'professional',
      title: 'Professional meetings and work',
      description: 'Office environments, client meetings, business travel',
      icon: 'Briefcase',
      occasions: ['Daytime', 'Professional', 'Meetings'],
      intensity: 'Light and Clean',
      color: 'from-blue-600 to-indigo-500'
    },
    {
      id: 'creative',
      title: 'Creative pursuits and artistic expression',
      description: 'Art studios, music venues, creative workshops',
      icon: 'Palette',
      occasions: ['Artistic', 'Inspiration', 'Creative'],
      intensity: 'Unique and Bold',
      color: 'from-orange-600 to-yellow-500'
    },
    {
      id: 'luxury',
      title: 'Luxury experiences and fine dining',
      description: 'Elegant restaurants, theater nights, sophisticated venues',
      icon: 'Crown',
      occasions: ['Formal', 'Evening', 'Luxury'],
      intensity: 'Rich and Complex',
      color: 'from-amber-600 to-gold'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl font-bold text-primary">
          Your ideal evening involves...
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
          Your lifestyle choices help us understand the perfect fragrance occasions and intensities for you.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {lifestyleOptions.map((lifestyle) => (
          <div
            key={lifestyle.id}
            onClick={() => onLifestyleSelect(lifestyle.id)}
            className={`relative group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-500 scent-trail ${
              selectedLifestyle === lifestyle.id
                ? 'border-accent bg-accent/10 shadow-luxury-lg transform scale-105'
                : 'border-border bg-card hover:border-accent/50 hover:shadow-luxury'
            }`}
          >
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div className={`p-3 rounded-xl bg-gradient-to-br ${lifestyle.color} text-white`}>
                  <Icon name={lifestyle.icon} size={24} />
                </div>
                
                {selectedLifestyle === lifestyle.id && (
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <h3 className="font-display text-xl font-semibold text-primary breathing-text">
                  {lifestyle.title}
                </h3>
                <p className="text-text-secondary font-body">
                  {lifestyle.description}
                </p>
              </div>

              <div className="space-y-3">
                <div>
                  <h4 className="font-body font-medium text-primary text-sm mb-2">
                    Perfect Occasions:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {lifestyle.occasions.map((occasion, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-muted text-muted-foreground text-xs font-body rounded-full"
                      >
                        {occasion}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between text-sm">
                  <span className="font-body font-medium text-primary">
                    Intensity:
                  </span>
                  <span className="text-text-secondary font-body">
                    {lifestyle.intensity}
                  </span>
                </div>
              </div>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 scent-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LifestyleQuestions;