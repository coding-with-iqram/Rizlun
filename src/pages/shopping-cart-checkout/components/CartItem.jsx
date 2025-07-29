import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';

const CartItem = ({ item, onUpdateQuantity, onRemove, onAddSample }) => {
  const [quantity, setQuantity] = useState(item.quantity);

  const sizeOptions = [
    { value: '30ml', label: '30ml - $89' },
    { value: '50ml', label: '50ml - $129' },
    { value: '100ml', label: '100ml - $189' }
  ];

  const handleQuantityChange = (newQuantity) => {
    setQuantity(newQuantity);
    onUpdateQuantity(item.id, newQuantity);
  };

  const handleSizeChange = (newSize) => {
    // Handle size change logic
    console.log('Size changed to:', newSize);
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-luxury border border-border">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Product Image */}
        <div className="flex-shrink-0">
          <div className="w-32 h-32 lg:w-40 lg:h-40 rounded-lg overflow-hidden bg-muted">
            <Image
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="flex-grow space-y-4">
          <div>
            <h3 className="font-display text-xl font-semibold text-primary">
              {item.name}
            </h3>
            <p className="text-text-secondary font-body text-sm mt-1">
              {item.brand}
            </p>
          </div>

          {/* Fragrance Notes */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-text-primary">Key Notes:</p>
            <div className="flex flex-wrap gap-2">
              {item.notes.map((note, index) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium"
                >
                  {note}
                </span>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="w-full lg:w-48">
            <Select
              label="Size"
              options={sizeOptions}
              value={item.size}
              onChange={handleSizeChange}
            />
          </div>

          {/* Sample Option */}
          <div className="flex items-center space-x-2">
            <Icon name="Droplets" size={16} className="text-accent" />
            <button
              onClick={() => onAddSample(item.id)}
              className="text-sm text-accent hover:text-accent/80 font-medium transition-colors"
            >
              Add 2ml sample (+$12)
            </button>
          </div>
        </div>

        {/* Price and Actions */}
        <div className="flex flex-col justify-between items-end space-y-4 lg:w-48">
          <div className="text-right">
            <p className="text-2xl font-display font-semibold text-primary">
              ${item.price}
            </p>
            <p className="text-sm text-text-secondary">
              ${(item.price / item.quantity).toFixed(2)} each
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center space-x-3 bg-muted rounded-lg p-1">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(Math.max(1, quantity - 1))}
              disabled={quantity <= 1}
              className="h-8 w-8"
            >
              <Icon name="Minus" size={16} />
            </Button>
            <span className="w-8 text-center font-medium">{quantity}</span>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleQuantityChange(quantity + 1)}
              className="h-8 w-8"
            >
              <Icon name="Plus" size={16} />
            </Button>
          </div>

          {/* Remove Button */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => onRemove(item.id)}
            className="text-destructive hover:text-destructive/80"
          >
            <Icon name="Trash2" size={16} className="mr-2" />
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;