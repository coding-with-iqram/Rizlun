import React from 'react';
import Image from '../../../components/AppImage';

const MoodSelector = ({ selectedMood, onMoodSelect }) => {
  const moods = [
    {
      id: 'confident',
      title: 'Confident & Powerful',
      description: 'Bold and commanding presence',
      image: 'https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-amber-900 to-amber-700'
    },
    {
      id: 'romantic',
      title: 'Romantic & Sensual',
      description: 'Intimate and alluring moments',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-rose-900 to-rose-700'
    },
    {
      id: 'fresh',
      title: 'Fresh & Energetic',
      description: 'Clean and invigorating vibes',
      image: 'https://images.pexels.com/photos/1029604/pexels-photo-1029604.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-cyan-900 to-cyan-700'
    },
    {
      id: 'mysterious',
      title: 'Mysterious & Elegant',
      description: 'Sophisticated and enigmatic',
      image: 'https://images.pexels.com/photos/1040945/pexels-photo-1040945.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-purple-900 to-purple-700'
    },
    {
      id: 'peaceful',
      title: 'Peaceful & Serene',
      description: 'Calm and harmonious energy',
      image: 'https://images.pexels.com/photos/1029141/pexels-photo-1029141.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-green-900 to-green-700'
    },
    {
      id: 'playful',
      title: 'Playful & Joyful',
      description: 'Fun and spirited moments',
      image: 'https://images.pexels.com/photos/1040424/pexels-photo-1040424.jpeg?auto=compress&cs=tinysrgb&w=400',
      gradient: 'from-orange-900 to-orange-700'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <h2 className="font-display text-3xl font-bold text-primary">
          How do you want to feel today?
        </h2>
        <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
          Your mood shapes your fragrance journey. Select the feeling that resonates with your current state of mind.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {moods.map((mood) => (
          <div
            key={mood.id}
            onClick={() => onMoodSelect(mood.id)}
            className={`relative group cursor-pointer rounded-2xl overflow-hidden transition-all duration-500 transform hover:scale-105 scent-trail ${
              selectedMood === mood.id 
                ? 'ring-4 ring-accent shadow-luxury-lg' 
                : 'hover:shadow-luxury'
            }`}
          >
            <div className="aspect-[4/5] relative">
              <Image
                src={mood.image}
                alt={mood.title}
                className="w-full h-full object-cover"
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${mood.gradient} opacity-60 group-hover:opacity-50 transition-opacity duration-300`} />
              
              {/* Selection Indicator */}
              {selectedMood === mood.id && (
                <div className="absolute top-4 right-4 w-8 h-8 bg-accent rounded-full flex items-center justify-center shadow-luxury">
                  <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
              )}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <h3 className="font-display text-xl font-semibold mb-2 breathing-text">
                {mood.title}
              </h3>
              <p className="font-body text-sm opacity-90">
                {mood.description}
              </p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 scent-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSelector;