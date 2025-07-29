import React from 'react';
import Icon from '../../../components/AppIcon';

const ScentDNAWheel = ({ scentProfile }) => {
  const scentFamilies = [
    { name: 'Citrus', percentage: scentProfile.citrus, color: 'from-yellow-400 to-orange-400', icon: 'Sun' },
    { name: 'Floral', percentage: scentProfile.floral, color: 'from-pink-400 to-purple-400', icon: 'Flower' },
    { name: 'Woody', percentage: scentProfile.woody, color: 'from-amber-600 to-orange-800', icon: 'TreePine' },
    { name: 'Oriental', percentage: scentProfile.oriental, color: 'from-red-500 to-purple-600', icon: 'Sparkles' },
    { name: 'Fresh', percentage: scentProfile.fresh, color: 'from-blue-400 to-cyan-400', icon: 'Wind' },
    { name: 'Gourmand', percentage: scentProfile.gourmand, color: 'from-pink-500 to-red-400', icon: 'Cookie' }
  ];

  const radius = 120;
  const centerX = 150;
  const centerY = 150;

  const createArcPath = (startAngle, endAngle, innerRadius, outerRadius) => {
    const start = polarToCartesian(centerX, centerY, outerRadius, endAngle);
    const end = polarToCartesian(centerX, centerY, outerRadius, startAngle);
    const innerStart = polarToCartesian(centerX, centerY, innerRadius, endAngle);
    const innerEnd = polarToCartesian(centerX, centerY, innerRadius, startAngle);
    
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";
    
    return [
      "M", start.x, start.y, 
      "A", outerRadius, outerRadius, 0, largeArcFlag, 0, end.x, end.y,
      "L", innerEnd.x, innerEnd.y,
      "A", innerRadius, innerRadius, 0, largeArcFlag, 1, innerStart.x, innerStart.y,
      "Z"
    ].join(" ");
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  let currentAngle = 0;

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="text-center mb-6">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">Your Scent DNA</h3>
        <p className="text-text-secondary font-body">Discover your unique fragrance personality</p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8">
        {/* SVG Wheel */}
        <div className="relative">
          <svg width="300" height="300" className="transform -rotate-90">
            <defs>
              {scentFamilies.map((family, index) => (
                <linearGradient key={index} id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor={family.color.split(' ')[0].replace('from-', '')} />
                  <stop offset="100%" stopColor={family.color.split(' ')[2].replace('to-', '')} />
                </linearGradient>
              ))}
            </defs>
            
            {scentFamilies.map((family, index) => {
              const angle = (family.percentage / 100) * 360;
              const path = createArcPath(currentAngle, currentAngle + angle, 60, radius);
              const result = (
                <path
                  key={index}
                  d={path}
                  fill={`url(#gradient-${index})`}
                  stroke="white"
                  strokeWidth="2"
                  className="hover:opacity-80 transition-opacity duration-300"
                />
              );
              currentAngle += angle;
              return result;
            })}
            
            {/* Center circle */}
            <circle cx={centerX} cy={centerY} r="50" fill="var(--color-background)" stroke="var(--color-border)" strokeWidth="2" />
            <text x={centerX} y={centerY - 5} textAnchor="middle" className="fill-primary font-display font-bold text-sm">Scent</text>
            <text x={centerX} y={centerY + 10} textAnchor="middle" className="fill-primary font-display font-bold text-sm">DNA</text>
          </svg>
        </div>

        {/* Legend */}
        <div className="space-y-4 flex-1">
          {scentFamilies.map((family, index) => (
            <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-background hover:bg-muted transition-colors duration-300">
              <div className="flex items-center space-x-3">
                <div className={`w-4 h-4 rounded-full bg-gradient-to-r ${family.color}`}></div>
                <Icon name={family.icon} size={18} className="text-text-secondary" />
                <span className="font-body font-medium text-primary">{family.name}</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-20 h-2 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full bg-gradient-to-r ${family.color} transition-all duration-500`}
                    style={{ width: `${family.percentage}%` }}
                  ></div>
                </div>
                <span className="font-body font-semibold text-primary text-sm w-8">{family.percentage}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 p-4 bg-accent/10 rounded-lg">
        <p className="text-sm text-text-secondary font-body text-center">
          Your scent profile shows a strong preference for <span className="font-semibold text-accent">
            {scentFamilies.reduce((max, family) => family.percentage > max.percentage ? family : max).name}
          </span> fragrances with balanced <span className="font-semibold text-accent">
            {scentFamilies.filter(f => f.percentage > 15).map(f => f.name).join(' and ')}
          </span> notes.
        </p>
      </div>
    </div>
  );
};

export default ScentDNAWheel;