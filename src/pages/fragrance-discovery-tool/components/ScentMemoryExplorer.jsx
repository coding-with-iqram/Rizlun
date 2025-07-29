import React from 'react';
import Icon from '../../../components/AppIcon';

const ScentMemoryExplorer = ({ selectedMemory, onMemorySelect }) => {
  const scentMemories = [
    {
      id: 'ocean',
      title: 'Ocean breeze and salt air',
      description: 'Coastal walks with waves crashing nearby',
      icon: 'Waves',
      notes: ['Marine', 'Salt', 'Seaweed', 'Fresh Air'],
      color: 'from-blue-600 to-cyan-500'
    },
    {
      id: 'library',
      title: 'Library books and leather',
      description: 'Quiet corners filled with knowledge',
      icon: 'BookOpen',
      notes: ['Paper', 'Leather', 'Wood', 'Vanilla'],
      color: 'from-amber-700 to-yellow-600'
    },
    {
      id: 'garden',
      title: 'Blooming garden after rain',
      description: 'Petrichor and fresh florals dancing',
      icon: 'Flower2',
      notes: ['Petrichor', 'Rose', 'Jasmine', 'Green Leaves'],
      color: 'from-green-600 to-emerald-500'
    },
    {
      id: 'bakery',
      title: 'Warm bakery in the morning',
      description: 'Fresh bread and sweet pastries',
      icon: 'Coffee',
      notes: ['Vanilla', 'Cinnamon', 'Butter', 'Caramel'],
      color: 'from-orange-600 to-red-500'
    },
    {
      id: 'forest',
      title: 'Deep forest after rainfall',
      description: 'Moss, earth, and ancient trees',
      icon: 'Trees',
      notes: ['Pine', 'Moss', 'Earth', 'Cedar'],
      color: 'from-green-800 to-green-600'
    },
    {
      id: 'spice',
      title: 'Exotic spice market',
      description: 'Vibrant aromas from distant lands',
      icon: 'Sparkles',
      notes: ['Cardamom', 'Saffron', 'Black Pepper', 'Incense'],
      color: 'from-purple-600 to-pink-500'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl font-bold text-primary">
          What fragrance reminds you of your favorite place?
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
          Scent memories are powerful connectors to our emotions. Choose the memory that speaks to your soul.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {scentMemories.map((memory) => (
          <div
            key={memory.id}
            onClick={() => onMemorySelect(memory.id)}
            className={`relative group cursor-pointer p-6 rounded-2xl border-2 transition-all duration-500 scent-trail ${
              selectedMemory === memory.id
                ? 'border-accent bg-accent/10 shadow-luxury-lg transform scale-105'
                : 'border-border bg-card hover:border-accent/50 hover:shadow-luxury'
            }`}
          >
            <div className="flex items-start space-x-4">
              <div className={`p-4 rounded-xl bg-gradient-to-br ${memory.color} text-white flex-shrink-0`}>
                <Icon name={memory.icon} size={24} />
              </div>
              
              <div className="flex-1 space-y-3">
                <div>
                  <h3 className="font-display text-xl font-semibold text-primary mb-1 breathing-text">
                    {memory.title}
                  </h3>
                  <p className="text-text-secondary font-body">
                    {memory.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {memory.notes.map((note, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-muted text-muted-foreground text-sm font-body rounded-full"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>

              {selectedMemory === memory.id && (
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Check" size={16} className="text-primary" />
                  </div>
                </div>
              )}
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 scent-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScentMemoryExplorer;