import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ScentPyramid = ({ fragrance }) => {
  const [activeNote, setActiveNote] = useState(null);

  const pyramidLevels = [
    {
      level: 'top',
      title: 'Top Notes',
      subtitle: 'First Impression (0-15 minutes)',
      notes: fragrance.notes.top,
      color: 'from-yellow-100 to-orange-100',
      borderColor: 'border-yellow-300'
    },
    {
      level: 'heart',
      title: 'Heart Notes',
      subtitle: 'The Soul (15 minutes - 3 hours)',
      notes: fragrance.notes.heart,
      color: 'from-pink-100 to-rose-100',
      borderColor: 'border-pink-300'
    },
    {
      level: 'base',
      title: 'Base Notes',
      subtitle: 'The Foundation (3+ hours)',
      notes: fragrance.notes.base,
      color: 'from-amber-100 to-brown-100',
      borderColor: 'border-amber-300'
    }
  ];

  return (
    <div className="bg-background py-16">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            Scent Pyramid
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Discover how {fragrance.name} unfolds its aromatic journey through carefully crafted layers of premium ingredients.
          </p>
        </div>

        <div className="relative">
          {/* Pyramid Structure */}
          <div className="space-y-6">
            {pyramidLevels.map((level, index) => (
              <div
                key={level.level}
                className={`relative mx-auto transition-all duration-500 ${
                  index === 0 ? 'w-full max-w-2xl' :
                  index === 1 ? 'w-full max-w-3xl': 'w-full max-w-4xl'
                }`}
              >
                <div className={`bg-gradient-to-r ${level.color} border-2 ${level.borderColor} rounded-2xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300`}>
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <h3 className="font-display text-xl font-bold text-primary">
                        {level.title}
                      </h3>
                      <p className="text-text-secondary text-sm">
                        {level.subtitle}
                      </p>
                    </div>
                    <Icon 
                      name={level.level === 'top' ? 'Sparkles' : level.level === 'heart' ? 'Heart' : 'Mountain'} 
                      size={24} 
                      className="text-primary opacity-60"
                    />
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                    {level.notes.map((note) => (
                      <button
                        key={note.name}
                        onMouseEnter={() => setActiveNote(note)}
                        onMouseLeave={() => setActiveNote(null)}
                        className="relative p-3 bg-background/60 rounded-lg border border-border hover:border-accent transition-all duration-300 text-left group scent-trail"
                      >
                        <div className="font-medium text-primary text-sm group-hover:text-accent transition-colors">
                          {note.name}
                        </div>
                        <div className="text-xs text-text-secondary mt-1">
                          {note.origin}
                        </div>
                        
                        {/* Hover Tooltip */}
                        {activeNote?.name === note.name && (
                          <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-64 p-4 bg-popover border border-border rounded-lg shadow-luxury-lg z-10 scent-fade-enter-active">
                            <h4 className="font-medium text-primary mb-2">{note.name}</h4>
                            <p className="text-sm text-text-secondary mb-2">{note.description}</p>
                            <div className="text-xs text-accent">
                              <Icon name="MapPin" size={12} className="inline mr-1" />
                              {note.origin}
                            </div>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Connecting Lines */}
                {index < pyramidLevels.length - 1 && (
                  <div className="flex justify-center mt-4 mb-2">
                    <div className="w-px h-8 bg-gradient-to-b from-border to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Interactive Legend */}
          <div className="mt-12 bg-card p-6 rounded-xl">
            <h3 className="font-medium text-primary mb-4 flex items-center">
              <Icon name="Info" size={20} className="mr-2" />
              Understanding Fragrance Evolution
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full"></div>
                  <span className="font-medium">Top Notes</span>
                </div>
                <p className="text-text-secondary">
                  The first impression that greets you immediately upon application. These volatile notes evaporate quickly but create the opening statement.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-pink-300 to-rose-300 rounded-full"></div>
                  <span className="font-medium">Heart Notes</span>
                </div>
                <p className="text-text-secondary">
                  The core character of the fragrance that emerges as top notes fade. This is the main theme that defines the scent's personality.
                </p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-gradient-to-r from-amber-300 to-brown-300 rounded-full"></div>
                  <span className="font-medium">Base Notes</span>
                </div>
                <p className="text-text-secondary">
                  The foundation that provides depth and longevity. These rich, heavy notes linger longest and create the fragrance's lasting impression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScentPyramid;