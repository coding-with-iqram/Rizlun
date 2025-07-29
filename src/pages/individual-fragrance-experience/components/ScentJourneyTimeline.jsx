import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ScentJourneyTimeline = ({ fragrance }) => {
  const [activePhase, setActivePhase] = useState(0);

  const journeyPhases = [
    {
      time: '0-15 min',
      title: 'Opening Burst',
      description: fragrance.journey.opening,
      intensity: 90,
      notes: fragrance.notes.top.slice(0, 3),
      color: 'from-yellow-400 to-orange-400',
      icon: 'Sparkles'
    },
    {
      time: '15-30 min',
      title: 'First Development',
      description: fragrance.journey.development,
      intensity: 75,
      notes: [...fragrance.notes.top.slice(-2), ...fragrance.notes.heart.slice(0, 2)],
      color: 'from-orange-400 to-pink-400',
      icon: 'Flower'
    },
    {
      time: '30min-2hr',
      title: 'Heart Revelation',
      description: fragrance.journey.heart,
      intensity: 85,
      notes: fragrance.notes.heart,
      color: 'from-pink-400 to-rose-400',
      icon: 'Heart'
    },
    {
      time: '2-4 hours',
      title: 'Settling Phase',
      description: fragrance.journey.settling,
      intensity: 60,
      notes: [...fragrance.notes.heart.slice(-2), ...fragrance.notes.base.slice(0, 2)],
      color: 'from-rose-400 to-amber-400',
      icon: 'Waves'
    },
    {
      time: '4-8 hours',
      title: 'Base Foundation',
      description: fragrance.journey.base,
      intensity: 45,
      notes: fragrance.notes.base,
      color: 'from-amber-400 to-brown-400',
      icon: 'Mountain'
    },
    {
      time: '8+ hours',
      title: 'Skin Scent',
      description: fragrance.journey.drydown,
      intensity: 25,
      notes: fragrance.notes.base.slice(-3),
      color: 'from-brown-400 to-gray-400',
      icon: 'Moon'
    }
  ];

  return (
    <div className="bg-card py-16">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-primary mb-4">
            Scent Journey Timeline
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Experience how {fragrance.name} evolves throughout the day, revealing different facets of its complex composition.
          </p>
        </div>

        {/* Timeline Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {journeyPhases.map((phase, index) => (
            <button
              key={index}
              onClick={() => setActivePhase(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activePhase === index
                  ? 'bg-accent text-primary shadow-luxury'
                  : 'bg-background text-text-secondary hover:bg-accent/10 hover:text-accent'
              }`}
            >
              {phase.time}
            </button>
          ))}
        </div>

        {/* Active Phase Display */}
        <div className="bg-background rounded-2xl p-8 shadow-luxury-lg mb-8">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${journeyPhases[activePhase].color} flex items-center justify-center shadow-luxury`}>
                  <Icon 
                    name={journeyPhases[activePhase].icon} 
                    size={24} 
                    className="text-white"
                  />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold text-primary">
                    {journeyPhases[activePhase].title}
                  </h3>
                  <p className="text-accent font-medium">
                    {journeyPhases[activePhase].time}
                  </p>
                </div>
              </div>

              <p className="text-text-secondary text-lg leading-relaxed">
                {journeyPhases[activePhase].description}
              </p>

              {/* Intensity Meter */}
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-primary">Intensity</span>
                  <span className="text-sm text-accent">{journeyPhases[activePhase].intensity}%</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div 
                    className={`h-2 rounded-full bg-gradient-to-r ${journeyPhases[activePhase].color} transition-all duration-500`}
                    style={{ width: `${journeyPhases[activePhase].intensity}%` }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Prominent Notes */}
            <div className="space-y-4">
              <h4 className="font-medium text-primary">Prominent Notes in This Phase</h4>
              <div className="grid grid-cols-2 gap-3">
                {journeyPhases[activePhase].notes.map((note, noteIndex) => (
                  <div 
                    key={noteIndex}
                    className="p-3 bg-card rounded-lg border border-border hover:border-accent transition-colors scent-trail"
                  >
                    <div className="font-medium text-primary text-sm">{note.name}</div>
                    <div className="text-xs text-text-secondary mt-1">{note.origin}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Complete Timeline Visualization */}
        <div className="bg-background rounded-2xl p-8 shadow-luxury">
          <h3 className="font-medium text-primary mb-6 text-center">Complete 8-Hour Journey</h3>
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute top-8 left-0 right-0 h-1 bg-gradient-to-r from-yellow-200 via-pink-200 via-rose-200 via-amber-200 to-brown-200 rounded-full"></div>
            
            {/* Timeline Points */}
            <div className="relative flex justify-between">
              {journeyPhases.map((phase, index) => (
                <button
                  key={index}
                  onClick={() => setActivePhase(index)}
                  className={`flex flex-col items-center space-y-2 transition-all duration-300 ${
                    activePhase === index ? 'transform scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-6 h-6 rounded-full bg-gradient-to-r ${phase.color} border-2 border-background shadow-luxury ${
                    activePhase === index ? 'ring-2 ring-accent' : ''
                  }`}></div>
                  <div className="text-center">
                    <div className="text-xs font-medium text-primary">{phase.time}</div>
                    <div className="text-xs text-text-secondary mt-1 max-w-16 leading-tight">
                      {phase.title}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScentJourneyTimeline;