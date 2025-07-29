import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    {
      name: 'Discover',
      path: '/fragrance-discovery-tool',
      icon: 'Search'
    },
    {
      name: 'Collections',
      path: '/collections-gallery',
      icon: 'Grid3X3'
    },
    {
      name: 'Profile',
      path: '/personal-fragrance-profile',
      icon: 'User'
    },
    {
      name: 'Cart',
      path: '/shopping-cart-checkout',
      icon: 'ShoppingBag'
    }
  ];

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-background/95 backdrop-blur-md shadow-luxury border-b border-border' 
        : 'bg-transparent'
    }`}>
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-4 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage-luxury-fragrance-discovery" 
            className="flex items-center space-x-3 scent-trail group"
          >
            <div className="relative">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="transition-transform duration-300 group-hover:scale-105"
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-accent)" />
                    <stop offset="100%" stopColor="var(--color-secondary)" />
                  </linearGradient>
                </defs>
                <circle cx="20" cy="20" r="18" fill="url(#logoGradient)" opacity="0.1" />
                <path 
                  d="M12 28c0-4.4 3.6-8 8-8s8 3.6 8 8M20 12v8M16 16l8 8M24 16l-8 8" 
                  stroke="var(--color-primary)" 
                  strokeWidth="2" 
                  fill="none"
                  className="transition-colors duration-300 group-hover:stroke-accent"
                />
              </svg>
              <div className="absolute inset-0 scent-particles opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="font-display font-bold text-xl text-primary breathing-text">
                Azmeera
              </h1>
              <p className="font-accent text-sm text-secondary -mt-1">
                Perfume
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-300 scent-trail ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent/10 shadow-luxury'
                    : 'text-text-primary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={item.icon} size={18} />
                <span className="font-body font-medium">{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="relative"
            >
              <Icon 
                name={isMenuOpen ? 'X' : 'Menu'} 
                size={24} 
                className="transition-transform duration-300"
              />
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`lg:hidden transition-all duration-400 overflow-hidden ${
          isMenuOpen 
            ? 'max-h-96 opacity-100 bg-background/95 backdrop-blur-md border-b border-border' :'max-h-0 opacity-0'
        }`}>
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsMenuOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActivePath(item.path)
                    ? 'text-accent bg-accent/10 shadow-luxury'
                    : 'text-text-primary hover:text-accent hover:bg-accent/5'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span className="font-body font-medium">{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 mt-4 border-t border-border">
              <Button 
                variant="default" 
                fullWidth 
                className="bg-luxury-gold hover:bg-luxury-amber"
                onClick={() => setIsMenuOpen(false)}
              >
                <Link to="/fragrance-discovery-tool" className="w-full">
                  Start Your Scent Journey
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;