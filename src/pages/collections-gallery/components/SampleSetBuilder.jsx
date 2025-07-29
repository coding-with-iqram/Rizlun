import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const SampleSetBuilder = ({ selectedSamples, onRemoveSample, onCheckout }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const samplePrice = 8;
  const totalPrice = selectedSamples.length * samplePrice;
  const maxSamples = 6;

  if (selectedSamples.length === 0) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Sample Set Panel */}
      <div className={`
        bg-card rounded-xl shadow-luxury-lg border border-border
        transition-all duration-300 overflow-hidden
        ${isOpen ? 'w-80 h-96' : 'w-16 h-16'}
      `}>
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="absolute top-4 right-4 p-2 bg-accent rounded-full text-primary hover:bg-accent/90 transition-colors duration-200"
        >
          <Icon name={isOpen ? 'X' : 'TestTube'} size={16} />
        </button>

        {/* Collapsed State */}
        {!isOpen && (
          <div className="absolute top-2 left-2 bg-accent text-primary text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
            {selectedSamples.length}
          </div>
        )}

        {/* Expanded State */}
        {isOpen && (
          <div className="p-6 h-full flex flex-col">
            <div className="mb-4">
              <h3 className="font-display font-bold text-lg text-primary mb-1">
                Sample Set Builder
              </h3>
              <p className="text-text-secondary text-sm font-body">
                {selectedSamples.length}/{maxSamples} samples selected
              </p>
            </div>

            {/* Sample List */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {selectedSamples.map((sample) => (
                <div 
                  key={sample.id}
                  className="flex items-center space-x-3 p-2 bg-background rounded-lg"
                >
                  <Image
                    src={sample.image}
                    alt={sample.name}
                    className="w-10 h-10 rounded object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-body font-medium text-sm text-primary truncate">
                      {sample.name}
                    </p>
                    <p className="text-text-secondary text-xs">
                      ${samplePrice}
                    </p>
                  </div>
                  <button
                    onClick={() => onRemoveSample(sample.id)}
                    className="p-1 text-text-secondary hover:text-destructive transition-colors duration-200"
                  >
                    <Icon name="Trash2" size={14} />
                  </button>
                </div>
              ))}
            </div>

            {/* Total and Checkout */}
            <div className="border-t border-border pt-4">
              <div className="flex items-center justify-between mb-3">
                <span className="font-body font-medium text-primary">
                  Total:
                </span>
                <span className="font-display font-bold text-lg text-primary">
                  ${totalPrice}
                </span>
              </div>
              
              <Button
                variant="default"
                fullWidth
                onClick={onCheckout}
                className="bg-luxury-gold hover:bg-luxury-amber"
                iconName="ShoppingCart"
                iconSize={16}
              >
                Add to Cart
              </Button>
              
              <p className="text-text-secondary text-xs text-center mt-2">
                Free shipping on sample sets
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SampleSetBuilder;