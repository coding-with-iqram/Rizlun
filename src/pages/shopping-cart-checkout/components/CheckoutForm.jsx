import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';

const CheckoutForm = ({ onPlaceOrder, orderTotal }) => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    country: 'US',
    phone: '',
    shippingMethod: 'standard',
    paymentMethod: 'card',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    nameOnCard: '',
    createAccount: false,
    giftMessage: '',
    giftWrap: false
  });

  const [errors, setErrors] = useState({});

  const countryOptions = [
    { value: 'US', label: 'United States' },
    { value: 'CA', label: 'Canada' },
    { value: 'UK', label: 'United Kingdom' },
    { value: 'AU', label: 'Australia' }
  ];

  const stateOptions = [
    { value: 'CA', label: 'California' },
    { value: 'NY', label: 'New York' },
    { value: 'TX', label: 'Texas' },
    { value: 'FL', label: 'Florida' }
  ];

  const shippingOptions = [
    { value: 'standard', label: 'Standard Shipping (5-7 days) - Free' },
    { value: 'expedited', label: 'Expedited Shipping (2-3 days) - $15' },
    { value: 'overnight', label: 'Overnight Delivery - $35' },
    { value: 'white-glove', label: 'White Glove Service - $75' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.address) newErrors.address = 'Address is required';
    if (!formData.city) newErrors.city = 'City is required';
    if (!formData.zipCode) newErrors.zipCode = 'ZIP code is required';
    
    if (formData.paymentMethod === 'card') {
      if (!formData.cardNumber) newErrors.cardNumber = 'Card number is required';
      if (!formData.expiryDate) newErrors.expiryDate = 'Expiry date is required';
      if (!formData.cvv) newErrors.cvv = 'CVV is required';
      if (!formData.nameOnCard) newErrors.nameOnCard = 'Name on card is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onPlaceOrder(formData);
    }
  };

  return (
    <div className="bg-card rounded-lg p-6 shadow-luxury border border-border">
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Contact Information */}
        <div>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Contact Information
          </h3>
          <div className="space-y-4">
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              required
              placeholder="your@email.com"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input
                label="First Name"
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                error={errors.firstName}
                required
              />
              <Input
                label="Last Name"
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                error={errors.lastName}
                required
              />
            </div>
            <Input
              label="Phone Number"
              type="tel"
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              placeholder="(555) 123-4567"
            />
          </div>
        </div>

        {/* Shipping Address */}
        <div>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Shipping Address
          </h3>
          <div className="space-y-4">
            <Input
              label="Street Address"
              value={formData.address}
              onChange={(e) => handleInputChange('address', e.target.value)}
              error={errors.address}
              required
            />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                error={errors.city}
                required
              />
              <Select
                label="State"
                options={stateOptions}
                value={formData.state}
                onChange={(value) => handleInputChange('state', value)}
              />
              <Input
                label="ZIP Code"
                value={formData.zipCode}
                onChange={(e) => handleInputChange('zipCode', e.target.value)}
                error={errors.zipCode}
                required
              />
            </div>
            <Select
              label="Country"
              options={countryOptions}
              value={formData.country}
              onChange={(value) => handleInputChange('country', value)}
            />
          </div>
        </div>

        {/* Shipping Method */}
        <div>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Shipping Method
          </h3>
          <Select
            options={shippingOptions}
            value={formData.shippingMethod}
            onChange={(value) => handleInputChange('shippingMethod', value)}
          />
        </div>

        {/* Gift Options */}
        <div>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Gift Options
          </h3>
          <div className="space-y-4">
            <Checkbox
              label="Add gift wrapping (+$15)"
              checked={formData.giftWrap}
              onChange={(e) => handleInputChange('giftWrap', e.target.checked)}
            />
            <div className="space-y-2">
              <label className="block text-sm font-medium text-text-primary">
                Gift Message (Optional)
              </label>
              <textarea
                value={formData.giftMessage}
                onChange={(e) => handleInputChange('giftMessage', e.target.value)}
                placeholder="Add a personal message..."
                rows={3}
                className="w-full px-3 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent bg-input resize-none"
              />
            </div>
          </div>
        </div>

        {/* Payment Method */}
        <div>
          <h3 className="font-display text-xl font-semibold text-primary mb-4">
            Payment Method
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <button
                type="button"
                onClick={() => handleInputChange('paymentMethod', 'card')}
                className={`p-4 border rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                  formData.paymentMethod === 'card' ?'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50'
                }`}
              >
                <Icon name="CreditCard" size={20} />
                <span>Credit Card</span>
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('paymentMethod', 'paypal')}
                className={`p-4 border rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                  formData.paymentMethod === 'paypal' ?'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50'
                }`}
              >
                <Icon name="Wallet" size={20} />
                <span>PayPal</span>
              </button>
              <button
                type="button"
                onClick={() => handleInputChange('paymentMethod', 'apple')}
                className={`p-4 border rounded-lg flex items-center justify-center space-x-2 transition-colors ${
                  formData.paymentMethod === 'apple' ?'border-accent bg-accent/10 text-accent' :'border-border hover:border-accent/50'
                }`}
              >
                <Icon name="Smartphone" size={20} />
                <span>Apple Pay</span>
              </button>
            </div>

            {formData.paymentMethod === 'card' && (
              <div className="space-y-4 mt-6">
                <Input
                  label="Card Number"
                  value={formData.cardNumber}
                  onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                  error={errors.cardNumber}
                  placeholder="1234 5678 9012 3456"
                  required
                />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Input
                    label="Expiry Date"
                    value={formData.expiryDate}
                    onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                    error={errors.expiryDate}
                    placeholder="MM/YY"
                    required
                  />
                  <Input
                    label="CVV"
                    value={formData.cvv}
                    onChange={(e) => handleInputChange('cvv', e.target.value)}
                    error={errors.cvv}
                    placeholder="123"
                    required
                  />
                  <Input
                    label="Name on Card"
                    value={formData.nameOnCard}
                    onChange={(e) => handleInputChange('nameOnCard', e.target.value)}
                    error={errors.nameOnCard}
                    required
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Account Creation */}
        <div>
          <Checkbox
            label="Create an account for faster checkout and fragrance profiling"
            description="Save your preferences and get personalized recommendations"
            checked={formData.createAccount}
            onChange={(e) => handleInputChange('createAccount', e.target.checked)}
          />
        </div>

        {/* Place Order Button */}
        <div className="pt-6 border-t border-border">
          <Button
            type="submit"
            variant="default"
            fullWidth
            className="bg-luxury-gold hover:bg-luxury-amber text-lg py-4"
          >
            <Icon name="Lock" size={18} className="mr-2" />
            Place Order - ${orderTotal.toFixed(2)}
          </Button>
          
          <div className="mt-4 flex items-center justify-center space-x-6 text-xs text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Shield" size={14} />
              <span>256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Award" size={14} />
              <span>100% Authentic Guarantee</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="RotateCcw" size={14} />
              <span>30-Day Return Policy</span>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CheckoutForm;