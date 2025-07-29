import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const CuratorStory = ({ curator }) => {
  return (
    <div className="bg-card rounded-xl p-8 shadow-luxury mb-12">
      <div className="flex flex-col lg:flex-row gap-8 items-start">
        <div className="flex-shrink-0">
          <div className="relative">
            <Image
              src={curator.image}
              alt={curator.name}
              className="w-24 h-24 lg:w-32 lg:h-32 rounded-full object-cover shadow-luxury"
            />
            <div className="absolute -bottom-2 -right-2 bg-accent rounded-full p-2">
              <Icon name="Sparkles" size={16} className="text-primary" />
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="mb-4">
            <h3 className="font-display font-bold text-xl text-primary mb-1">
              {curator.name}
            </h3>
            <p className="text-accent font-body font-medium">
              {curator.title}
            </p>
          </div>
          
          <blockquote className="relative">
            <Icon 
              name="Quote" 
              size={24} 
              className="absolute -top-2 -left-2 text-accent/30" 
            />
            <p className="font-body text-text-primary leading-relaxed pl-6 italic">
              {curator.story}
            </p>
          </blockquote>
          
          <div className="mt-6 flex flex-wrap gap-3">
            {curator.expertise.map((skill, index) => (
              <span 
                key={index}
                className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm rounded-full font-body"
              >
                {skill}
              </span>
            ))}
          </div>
          
          <div className="mt-4 flex items-center text-text-secondary text-sm font-body">
            <Icon name="Award" size={16} className="mr-2" />
            <span>{curator.experience} years of expertise</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CuratorStory;