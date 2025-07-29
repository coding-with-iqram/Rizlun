import React from 'react';
import { Link } from 'react-router-dom';
import Icon from './AppIcon';
import Image from './AppImage';
import Button from './ui/Button';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { 
    items, 
    cartTotal, 
    cartItemCount, 
    removeFromCart, 
    updateQuantity, 
    clearCart, 
    setCartVisible 
  } = useCart();

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'BDT',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleQuantityChange = (item, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(item);
    } else {
      updateQuantity(item, newQuantity);
    }
  };

  const handleCheckout = () => {
    // Navigate to checkout page
    setCartVisible(false);
    window.location.href = '/checkout';
  };

  if (items.length === 0) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
        <div className="bg-card rounded-2xl p-6 sm:p-8 max-w-md w-full mx-4 shadow-luxury-lg">
          <div className="text-center">
            <Icon name="ShoppingCart" size={48} className="text-text-secondary mx-auto mb-4" />
            <h3 className="font-display font-bold text-xl text-primary mb-2">
              Your cart is empty
            </h3>
            <p className="text-text-secondary font-body mb-6">
              Start shopping to add your favorite fragrances to your cart.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={() => setCartVisible(false)}
                variant="outline"
                fullWidth
                className="border-accent text-accent hover:bg-accent/10"
              >
                Continue Shopping
              </Button>
              <Link to="/collections-gallery" className="flex-1">
                <Button
                  variant="default"
                  fullWidth
                  className="bg-luxury-gold hover:bg-luxury-amber"
                  onClick={() => setCartVisible(false)}
                >
                  Browse Collections
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-card rounded-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-hidden shadow-luxury-lg">
        {/* Header */}
        <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
          <h2 className="font-display font-bold text-xl text-primary">
            Shopping Cart ({cartItemCount} items)
          </h2>
          <button
            onClick={() => setCartVisible(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-muted transition-colors"
          >
            <Icon name="X" size={20} className="text-text-secondary" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          <div className="space-y-4">
            {items.map((item, index) => (
              <div key={`${item.id}-${item.selectedSize}-${index}`} className="flex gap-4 p-4 bg-muted/30 rounded-xl">
                {/* Product Image */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>

                {/* Product Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display font-semibold text-primary text-sm sm:text-base truncate">
                        {item.name}
                      </h3>
                      <p className="font-accent text-secondary text-xs sm:text-sm">
                        {item.subtitle}
                      </p>
                      <p className="text-text-secondary text-xs mt-1">
                        Size: {item.selectedSize}
                      </p>
                    </div>
                    <button
                      onClick={() => removeFromCart(item)}
                      className="w-6 h-6 rounded-full flex items-center justify-center hover:bg-red-100 transition-colors ml-2"
                    >
                      <Icon name="Trash2" size={14} className="text-red-500" />
                    </button>
                  </div>

                  {/* Price and Quantity */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <span className="font-display font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center border border-border rounded-md">
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Icon name="Minus" size={14} />
                        </button>
                        <span className="w-8 h-8 flex items-center justify-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-muted transition-colors"
                        >
                          <Icon name="Plus" size={14} />
                        </button>
                      </div>
                    </div>

                    <div className="text-right">
                      <span className="font-display font-bold text-primary">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 border-t border-border bg-muted/20">
          {/* Summary */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-body font-medium text-primary">Subtotal:</span>
            <span className="font-display font-bold text-xl text-primary">
              {formatPrice(cartTotal)}
            </span>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              onClick={clearCart}
              variant="outline"
              fullWidth
              className="border-red-300 text-red-600 hover:bg-red-50"
              iconName="Trash2"
              iconPosition="left"
            >
              Clear Cart
            </Button>
            <Button
              onClick={handleCheckout}
              variant="default"
              fullWidth
              className="bg-luxury-gold hover:bg-luxury-amber"
              iconName="CreditCard"
              iconPosition="right"
            >
              Proceed to Checkout
            </Button>
          </div>

          {/* Continue Shopping */}
          <div className="text-center mt-4">
            <button
              onClick={() => setCartVisible(false)}
              className="text-accent hover:text-accent/80 font-body font-medium text-sm transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 