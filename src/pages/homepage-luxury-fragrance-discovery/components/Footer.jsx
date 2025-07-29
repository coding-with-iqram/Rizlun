import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerSections = [
    {
      title: 'Discover',
      links: [
        { name: 'Fragrance Finder', path: '/fragrance-discovery-tool' },
        { name: 'Collections', path: '/collections-gallery' },
        { name: 'New Arrivals', path: '/collections-gallery' },
        { name: 'Best Sellers', path: '/collections-gallery' },
        { name: 'Sample Sets', path: '/collections-gallery' }
      ]
    },
    {
      title: 'Learn',
      links: [
        { name: 'Scent Academy', path: '/fragrance-discovery-tool' },
        { name: 'Fragrance Families', path: '/fragrance-discovery-tool' },
        { name: 'Application Guide', path: '/fragrance-discovery-tool' },
        { name: 'Layering Tips', path: '/fragrance-discovery-tool' },
        { name: 'Seasonal Guide', path: '/fragrance-discovery-tool' }
      ]
    },
    {
      title: 'Services',
      links: [
        { name: 'Personal Consultation', path: '/personal-fragrance-profile' },
        { name: 'Bespoke Fragrances', path: '/personal-fragrance-profile' },
        { name: 'Gift Curation', path: '/shopping-cart-checkout' },
        { name: 'Subscription Box', path: '/personal-fragrance-profile' },
        { name: 'VIP Program', path: '/personal-fragrance-profile' }
      ]
    },
    {
      title: 'Support',
      links: [
        { name: 'Contact Us', path: '/personal-fragrance-profile' },
        { name: 'Shipping Info', path: '/shopping-cart-checkout' },
        { name: 'Returns & Exchanges', path: '/shopping-cart-checkout' },
        { name: 'Size Guide', path: '/individual-fragrance-experience' },
        { name: 'FAQ', path: '/personal-fragrance-profile' }
      ]
    }
  ];

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#' },
    { name: 'Facebook', icon: 'Facebook', url: '#' },
    { name: 'Twitter', icon: 'Twitter', url: '#' },
    { name: 'YouTube', icon: 'Youtube', url: '#' },
    { name: 'Pinterest', icon: 'Zap', url: '#' }
  ];

  return (
    <footer className="bg-gradient-to-b from-surface to-primary text-primary-foreground">
      
      {/* Newsletter Section */}
      <div className="border-b border-primary-foreground/10">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="font-display text-3xl font-bold mb-4">
              Join the Azmeera Scent Society
            </h3>
            <p className="text-primary-foreground/80 font-body text-lg mb-8 max-w-2xl mx-auto">
              Be the first to discover new fragrances, receive exclusive offers, and get personalized scent recommendations delivered to your inbox
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <div className="flex-1">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="w-full px-4 py-3 rounded-xl bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder-primary-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                />
              </div>
              <Button 
                variant="default"
                className="bg-accent hover:bg-accent/90 text-primary"
                iconName="Mail"
                iconPosition="right"
              >
                Subscribe
              </Button>
            </div>

            <div className="flex items-center justify-center gap-6 text-sm text-primary-foreground/60">
              <div className="flex items-center gap-2">
                <Icon name="Gift" size={16} />
                <span>Exclusive Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Sparkles" size={16} />
                <span>New Arrivals</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Heart" size={16} />
                <span>Personalized Tips</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-6 gap-12">
          
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link to="/homepage-luxury-fragrance-discovery" className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <svg width="48" height="48" viewBox="0 0 48 48">
                  <defs>
                    <linearGradient id="footerLogoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="var(--color-accent)" />
                      <stop offset="100%" stopColor="var(--color-secondary)" />
                    </linearGradient>
                  </defs>
                  <circle cx="24" cy="24" r="22" fill="url(#footerLogoGradient)" opacity="0.2" />
                  <path 
                    d="M14 34c0-5.5 4.5-10 10-10s10 4.5 10 10M24 14v10M19 19l10 10M29 19l-10 10" 
                    stroke="var(--color-primary-foreground)" 
                    strokeWidth="2" 
                    fill="none"
                  />
                </svg>
              </div>
              <div>
                <h1 className="font-display font-bold text-2xl">Azmeera</h1>
                <p className="font-accent text-accent">Perfume</p>
              </div>
            </Link>
            
            <p className="text-primary-foreground/80 font-body leading-relaxed mb-6">
              Discover your signature story through our curated collection of luxury fragrances. Where scent meets soul, and every bottle tells a unique tale of artistry and emotion.
            </p>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <Icon name="MapPin" size={18} className="text-accent" />
                <span className="text-primary-foreground/80 font-body text-sm">
                  123 Fragrance Avenue, Luxury District, NY 10001
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Phone" size={18} className="text-accent" />
                <span className="text-primary-foreground/80 font-body text-sm">
                  1-800-AZMEERA (1-800-296-3372)
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Icon name="Mail" size={18} className="text-accent" />
                <span className="text-primary-foreground/80 font-body text-sm">
                  hello@azmeera.com
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="w-10 h-10 bg-primary-foreground/10 rounded-xl flex items-center justify-center hover:bg-accent/20 transition-colors duration-300 group"
                  aria-label={social.name}
                >
                  <Icon 
                    name={social.icon} 
                    size={18} 
                    className="text-primary-foreground/80 group-hover:text-accent transition-colors duration-300" 
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-lg font-semibold text-primary-foreground mb-6">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-primary-foreground/80 hover:text-accent transition-colors duration-300 font-body text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-primary-foreground/10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            
            {/* Copyright */}
            <div className="text-primary-foreground/60 font-body text-sm text-center lg:text-left">
              <p>© {currentYear} Azmeera Perfume. All rights reserved.</p>
              <p className="mt-1">Crafted with passion for fragrance enthusiasts worldwide.</p>
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6 text-sm">
              <Link 
                to="/personal-fragrance-profile" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/personal-fragrance-profile" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link 
                to="/personal-fragrance-profile" 
                className="text-primary-foreground/60 hover:text-accent transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 py-2">
                <Icon name="Shield" size={16} className="text-accent" />
                <span className="text-primary-foreground/80 font-body text-xs">SSL Secured</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-3 py-2">
                <Icon name="CheckCircle" size={16} className="text-accent" />
                <span className="text-primary-foreground/80 font-body text-xs">Authentic</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;