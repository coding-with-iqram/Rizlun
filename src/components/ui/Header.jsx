import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';
import { useCart } from '../../contexts/CartContext';
import Cart from '../Cart';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { cartItemCount, setCartVisible, isCartVisible } = useCart();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const navigation = [
    { name: 'Home', href: '/homepage-luxury-fragrance-discovery' },
    { name: 'Collections', href: '/collections-gallery' },
    { name: 'Discovery Tool', href: '/fragrance-discovery-tool' },
    { name: 'Profile', href: '/personal-fragrance-profile' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Blog', href: '/blog' },
    { name: 'Reviews', href: '/reviews' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-luxury">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            
            {/* Logo - Left Side */}
            <Link to="/homepage-luxury-fragrance-discovery" className="flex items-center space-x-2">
              <div className="w-8 h-8 sm:w-10 sm:h-10 bg-accent rounded-full flex items-center justify-center">
                <Icon name="Droplets" size={20} className="text-accent-foreground sm:w-6 sm:h-6" />
              </div>
              <div>
                <h1 className="font-display font-bold text-lg sm:text-xl text-primary">Rizlun</h1>
                <p className="font-accent text-xs sm:text-sm text-secondary">Perfume</p>
              </div>
            </Link>

            {/* Desktop Navigation & Actions - Right Side */}
            <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {/* Navigation Items */}
              {navigation.slice(0, 4).map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="font-body font-medium text-text-secondary hover:text-primary transition-colors duration-200"
                >
                  {item.name}
                </Link>
              ))}

              {/* Cart Button */}
              <button
                onClick={() => setCartVisible(true)}
                className="relative p-2 rounded-full hover:bg-muted transition-colors duration-200"
              >
                <Icon name="ShoppingCart" size={20} className="text-primary" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                    {cartItemCount > 99 ? '99+' : cartItemCount}
                  </span>
                )}
              </button>

              {/* Wishlist Button */}
              <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200">
                <Icon name="Heart" size={20} className="text-primary" />
              </button>

              {/* Menu Button */}
              <div className="relative group">
                <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200">
                  <Icon name="Menu" size={20} className="text-primary" />
                </button>
                {/* Dropdown Menu */}
                <div className="absolute right-0 top-full mt-2 w-48 bg-card rounded-lg shadow-luxury-lg border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="py-2">
                    {navigation.slice(4).map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-4 py-2 text-sm text-text-secondary hover:text-primary hover:bg-muted transition-colors duration-200"
                      >
                        {item.name}
                      </Link>
                    ))}
                    <div className="border-t border-border my-1"></div>
                    <Link
                      to="/fragrance-discovery-tool"
                      className="block px-4 py-2 text-sm text-accent hover:bg-accent/10 transition-colors duration-200"
                    >
                      Find Your Scent
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-muted flex items-center justify-center hover:bg-accent/10 transition-colors duration-200"
            >
              <Icon 
                name={isMenuOpen ? "X" : "Menu"} 
                size={20} 
                className="text-primary sm:w-6 sm:h-6" 
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-border">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <nav className="flex flex-col space-y-1">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="font-body font-medium text-text-secondary hover:text-primary py-2 px-3 rounded-lg hover:bg-muted transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
              {/* Mobile Actions */}
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-border">
                <div className="flex items-center space-x-2">
                  {/* Cart Button */}
                  <button
                    onClick={() => {
                      setCartVisible(true);
                      setIsMenuOpen(false);
                    }}
                    className="relative p-2 rounded-full hover:bg-muted transition-colors duration-200"
                  >
                    <Icon name="ShoppingCart" size={20} className="text-primary" />
                    {cartItemCount > 0 && (
                      <span className="absolute -top-1 -right-1 w-5 h-5 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-xs font-bold">
                        {cartItemCount > 99 ? '99+' : cartItemCount}
                      </span>
                    )}
                  </button>
                  {/* Wishlist Button */}
                  <button className="p-2 rounded-full hover:bg-muted transition-colors duration-200">
                    <Icon name="Heart" size={20} className="text-primary" />
                  </button>
                </div>
                <Link to="/fragrance-discovery-tool" onClick={() => setIsMenuOpen(false)}>
                  <Button 
                    variant="default" 
                    size="sm"
                    className="bg-luxury-gold hover:bg-luxury-amber text-sm sm:text-base"
                  >
                    Find Your Scent
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>
      {/* Cart Modal */}
      {isCartVisible && <Cart />}
    </>
  );
};

export default Header;