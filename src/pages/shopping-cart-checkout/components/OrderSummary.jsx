import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OrderSummary = ({ 
  subtotal, 
  shipping, 
  tax, 
  total, 
  promoCode, 
  onApplyPromo, 
  onProceedToCheckout 
}) => {
  const [promoInput, setPromoInput] = React.useState('');

  const handleApplyPromo = () => {
    onApplyPromo(promoInput);
    setPromoInput('');
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-luxury border border-border sticky top-24">
      <h3 className="font-display text-xl font-semibold text-primary mb-6">
        Order Summary
      </h3>

      {/* Price Breakdown */}
      <div className="space-y-4 mb-6">
        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Subtotal</span>
          <span className="font-medium text-primary">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Shipping</span>
          <span className="font-medium text-primary">
            {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-text-secondary">Tax</span>
          <span className="font-medium text-primary">${tax.toFixed(2)}</span>
        </div>

        {promoCode && (
          <div className="flex justify-between items-center text-success">
            <span className="flex items-center">
              <Icon name="Tag" size={16} className="mr-2" />
              Promo Applied
            </span>
            <span className="font-medium">-$25.00</span>
          </div>
        )}

        <div className="border-t border-border pt-4">
          <div className="flex justify-between items-center">
            <span className="text-lg font-display font-semibold text-primary">
              Total
            </span>
            <span className="text-2xl font-display font-bold text-primary">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>
      </div>

      {/* Promo Code */}
      <div className="mb-6">
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Promo code"
            value={promoInput}
            onChange={(e) => setPromoInput(e.target.value)}
            className="flex-1 px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-input"
          />
          <Button
            variant="outline"
            onClick={handleApplyPromo}
            disabled={!promoInput.trim()}
          >
            Apply
          </Button>
        </div>
      </div>

      {/* Free Shipping Notice */}
      <div className="bg-accent/10 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2">
          <Icon name="Truck" size={16} className="text-accent" />
          <span className="text-sm font-medium text-accent">
            Free shipping on orders over $150
          </span>
        </div>
        <div className="mt-2 bg-accent/20 rounded-full h-2">
          <div 
            className="bg-accent h-2 rounded-full transition-all duration-300"
            style={{ width: `${Math.min((subtotal / 150) * 100, 100)}%` }}
          ></div>
        </div>
        {subtotal < 150 && (
          <p className="text-xs text-text-secondary mt-2">
            Add ${(150 - subtotal).toFixed(2)} more for free shipping
          </p>
        )}
      </div>

      {/* Checkout Button */}
      <Button
        variant="default"
        fullWidth
        onClick={onProceedToCheckout}
        className="bg-luxury-gold hover:bg-luxury-amber text-lg py-3"
      >
        <Icon name="Lock" size={18} className="mr-2" />
        Secure Checkout
      </Button>

      {/* Security Badges */}
      <div className="mt-4 flex items-center justify-center space-x-4 text-xs text-text-secondary">
        <div className="flex items-center space-x-1">
          <Icon name="Shield" size={14} />
          <span>SSL Secured</span>
        </div>
        <div className="flex items-center space-x-1">
          <Icon name="Award" size={14} />
          <span>Authentic</span>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;