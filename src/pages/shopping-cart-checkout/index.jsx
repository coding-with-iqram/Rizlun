import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import CartItem from './components/CartItem';
import OrderSummary from './components/OrderSummary';
import RecommendedProducts from './components/RecommendedProducts';
import CheckoutForm from './components/CheckoutForm';
import EmptyCart from './components/EmptyCart';

const ShoppingCartCheckout = () => {
  const [cartItems, setCartItems] = useState([]);
  const [showCheckout, setShowCheckout] = useState(false);
  const [promoCode, setPromoCode] = useState('');
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Mock cart data
  useEffect(() => {
    const mockCartItems = [
      {
        id: 1,
        name: 'Midnight Oud Intense',
        brand: 'Azmeera Signature',
        price: 189,
        quantity: 1,
        size: '50ml',
        image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400',
        notes: ['Oud', 'Rose', 'Amber', 'Sandalwood']
      },
      {
        id: 2,
        name: 'Citrus Bloom Fresh',
        brand: 'Fresh Collection',
        price: 129,
        quantity: 2,
        size: '50ml',
        image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=400',
        notes: ['Bergamot', 'Neroli', 'White Tea', 'Grapefruit']
      },
      {
        id: 3,
        name: 'Velvet Rose Luxe',
        brand: 'Azmeera Luxe',
        price: 159,
        quantity: 1,
        size: '30ml',
        image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=400',
        notes: ['Bulgarian Rose', 'Vanilla', 'Musk', 'Patchouli']
      }
    ];
    setCartItems(mockCartItems);
  }, []);

  const handleUpdateQuantity = (itemId, newQuantity) => {
    setCartItems(prev => 
      prev.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (itemId) => {
    setCartItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleAddSample = (itemId) => {
    console.log('Adding sample for item:', itemId);
    // Add sample logic here
  };

  const handleAddToCart = (product) => {
    console.log('Adding recommended product to cart:', product);
    // Add to cart logic here
  };

  const handleApplyPromo = (code) => {
    setPromoCode(code);
    console.log('Applying promo code:', code);
  };

  const handleProceedToCheckout = () => {
    setShowCheckout(true);
  };

  const handlePlaceOrder = (orderData) => {
    console.log('Placing order:', orderData);
    setOrderPlaced(true);
    // Order placement logic here
  };

  // Calculate totals
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 150 ? 0 : 15;
  const tax = subtotal * 0.08;
  const promoDiscount = promoCode ? 25 : 0;
  const total = subtotal + shipping + tax - promoDiscount;

  // If cart is empty, show empty cart component
  if (cartItems.length === 0 && !orderPlaced) {
    return <EmptyCart />;
  }

  // Order confirmation page
  if (orderPlaced) {
    return (
      <div className="min-h-screen bg-background">
        <Helmet>
          <title>Order Confirmed - Azmeera Perfume</title>
          <meta name="description" content="Your order has been confirmed. Thank you for choosing Azmeera." />
        </Helmet>
        <Header />
        
        <div className="pt-20 pb-16">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <div className="bg-card rounded-lg p-8 shadow-luxury border border-border">
              <div className="w-20 h-20 mx-auto mb-6 bg-success/10 rounded-full flex items-center justify-center">
                <Icon name="CheckCircle" size={40} className="text-success" />
              </div>
              
              <h1 className="font-display text-3xl font-bold text-primary mb-4">
                Order Confirmed!
              </h1>
              
              <p className="text-text-secondary text-lg mb-6">
                Thank you for your purchase. Your fragrance journey continues with order #AZ-2025-001234
              </p>

              <div className="bg-accent/5 rounded-lg p-6 mb-8">
                <h3 className="font-display font-semibold text-primary mb-4">
                  What's Next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start space-x-3">
                    <Icon name="Mail" size={16} className="text-accent mt-1" />
                    <span className="text-sm">Order confirmation sent to your email</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Package" size={16} className="text-accent mt-1" />
                    <span className="text-sm">Your fragrances will be carefully packaged within 24 hours</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="Truck" size={16} className="text-accent mt-1" />
                    <span className="text-sm">Tracking information will be provided once shipped</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Icon name="BookOpen" size={16} className="text-accent mt-1" />
                    <span className="text-sm">Fragrance care guide and application tips included</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button variant="default" className="bg-luxury-gold hover:bg-luxury-amber">
                  <Link to="/personal-fragrance-profile" className="flex items-center">
                    <Icon name="User" size={18} className="mr-2" />
                    View Order Status
                  </Link>
                </Button>
                
                <Button variant="outline">
                  <Link to="/collections-gallery" className="flex items-center">
                    <Icon name="Grid3X3" size={18} className="mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Shopping Cart & Checkout - Azmeera Perfume</title>
        <meta name="description" content="Review your fragrance selection and complete your purchase with secure checkout." />
      </Helmet>
      <Header />
      
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center space-x-2 text-sm text-text-secondary mb-8">
            <Link to="/homepage-luxury-fragrance-discovery" className="hover:text-accent transition-colors">
              Home
            </Link>
            <Icon name="ChevronRight" size={16} />
            <span className="text-primary">
              {showCheckout ? 'Checkout' : 'Shopping Cart'}
            </span>
          </nav>

          {!showCheckout ? (
            <>
              {/* Cart Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="font-display text-3xl font-bold text-primary">
                    Your Fragrance Collection
                  </h1>
                  <p className="text-text-secondary mt-2">
                    {cartItems.length} {cartItems.length === 1 ? 'item' : 'items'} in your cart
                  </p>
                </div>
                
                <Button variant="outline" size="sm">
                  <Link to="/collections-gallery" className="flex items-center">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Continue Shopping
                  </Link>
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2 space-y-6">
                  {cartItems.map((item) => (
                    <CartItem
                      key={item.id}
                      item={item}
                      onUpdateQuantity={handleUpdateQuantity}
                      onRemove={handleRemoveItem}
                      onAddSample={handleAddSample}
                    />
                  ))}
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <OrderSummary
                    subtotal={subtotal}
                    shipping={shipping}
                    tax={tax}
                    total={total}
                    promoCode={promoCode}
                    onApplyPromo={handleApplyPromo}
                    onProceedToCheckout={handleProceedToCheckout}
                  />
                </div>
              </div>

              {/* Recommended Products */}
              <div className="mt-12">
                <RecommendedProducts onAddToCart={handleAddToCart} />
              </div>
            </>
          ) : (
            <>
              {/* Checkout Header */}
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h1 className="font-display text-3xl font-bold text-primary">
                    Secure Checkout
                  </h1>
                  <p className="text-text-secondary mt-2">
                    Complete your fragrance journey
                  </p>
                </div>
                
                <Button 
                  variant="ghost" 
                  onClick={() => setShowCheckout(false)}
                  className="flex items-center"
                >
                  <Icon name="ArrowLeft" size={16} className="mr-2" />
                  Back to Cart
                </Button>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Checkout Form */}
                <div className="lg:col-span-2">
                  <CheckoutForm 
                    onPlaceOrder={handlePlaceOrder}
                    orderTotal={total}
                  />
                </div>

                {/* Order Summary */}
                <div className="lg:col-span-1">
                  <div className="bg-card rounded-lg p-6 shadow-luxury border border-border sticky top-24">
                    <h3 className="font-display text-xl font-semibold text-primary mb-6">
                      Order Summary
                    </h3>
                    
                    <div className="space-y-4 mb-6">
                      {cartItems.map((item) => (
                        <div key={item.id} className="flex items-center space-x-3">
                          <div className="w-12 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-grow min-w-0">
                            <p className="font-medium text-primary text-sm truncate">
                              {item.name}
                            </p>
                            <p className="text-xs text-text-secondary">
                              {item.size} × {item.quantity}
                            </p>
                          </div>
                          <span className="font-medium text-primary text-sm">
                            ${(item.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-3 pt-4 border-t border-border">
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Subtotal</span>
                        <span className="text-primary">${subtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Shipping</span>
                        <span className="text-primary">
                          {shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}
                        </span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-text-secondary">Tax</span>
                        <span className="text-primary">${tax.toFixed(2)}</span>
                      </div>
                      {promoCode && (
                        <div className="flex justify-between text-sm text-success">
                          <span>Promo Discount</span>
                          <span>-$25.00</span>
                        </div>
                      )}
                      <div className="flex justify-between text-lg font-display font-semibold pt-3 border-t border-border">
                        <span className="text-primary">Total</span>
                        <span className="text-primary">${total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCheckout;