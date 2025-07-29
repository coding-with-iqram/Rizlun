import React from 'react';

import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const TrustSection = () => {
  const trustFeatures = [
    {
      icon: 'Shield',
      title: 'Authenticity Guaranteed',
      description: 'Every fragrance is sourced directly from authorized distributors with certificates of authenticity',
      details: [
        'Direct partnerships with luxury brands',
        'Batch verification system',
        '100% authentic guarantee',
        'Anti-counterfeit protection'
      ]
    },
    {
      icon: 'Gift',
      title: 'Free Sample Program',
      description: 'Try before you buy with our complimentary sample service for all premium fragrances',
      details: [
        '2ml samples of any fragrance',
        'Free shipping on sample orders',
        'Up to 3 samples per order',
        'Sample credits toward full purchase'
      ]
    },
    {
      icon: 'Users',
      title: 'Expert Consultations',
      description: 'Connect with certified fragrance consultants for personalized recommendations and guidance',
      details: [
        'Certified fragrance specialists',
        'Virtual and in-person consultations',
        'Personalized scent profiling',
        'Complimentary for VIP members'
      ]
    },
    {
      icon: 'RotateCcw',
      title: 'Satisfaction Promise',
      description: '30-day return policy with full refund if you\'re not completely satisfied with your purchase',
      details: [
        '30-day return window',
        'Full refund guarantee',
        'Free return shipping',
        'No questions asked policy'
      ]
    }
  ];

  const certifications = [
    {
      name: 'Luxury Fragrance Association',
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=60&fit=crop',
      description: 'Certified luxury fragrance retailer'
    },
    {
      name: 'International Fragrance Foundation',
      logo: 'https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=100&h=60&fit=crop',
      description: 'Member of global fragrance community'
    },
    {
      name: 'Sustainable Beauty Coalition',
      logo: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=60&fit=crop',
      description: 'Committed to sustainable practices'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      location: 'Beverly Hills, CA',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop',
      rating: 5,
      text: `"I've been buying fragrances online for years, but Azmeera's authenticity guarantee and sample program made me a loyal customer. Every bottle is genuine, and their consultants helped me find my perfect signature scent."`,
      verified: true
    },
    {
      name: 'Michael Rodriguez',
      location: 'New York, NY',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop',
      rating: 5,
      text: `"The free sample program is incredible. I was able to try 6 different fragrances before committing to a full bottle. The quality and service exceeded my expectations completely."`,
      verified: true
    }
  ];

  const stats = [
    { number: '50K+', label: 'Happy Customers', icon: 'Users' },
    { number: '98%', label: 'Satisfaction Rate', icon: 'Star' },
    { number: '500+', label: 'Authentic Fragrances', icon: 'Sparkles' },
    { number: '24/7', label: 'Expert Support', icon: 'MessageCircle' }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-surface to-background">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-4">
            Your Trust, Our Promise
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-2xl mx-auto">
            Experience luxury fragrance shopping with complete confidence through our comprehensive trust and satisfaction guarantees
          </p>
        </div>

        {/* Trust Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {trustFeatures.map((feature, index) => (
            <div key={index} className="bg-card rounded-3xl p-8 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 group">
              
              {/* Icon */}
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors duration-300">
                <Icon name={feature.icon} size={32} className="text-accent" />
              </div>

              {/* Content */}
              <h3 className="font-display text-xl font-bold text-primary mb-3">
                {feature.title}
              </h3>
              
              <p className="text-text-secondary font-body mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Details List */}
              <ul className="space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center gap-2 text-sm text-text-secondary">
                    <Icon name="Check" size={14} className="text-accent flex-shrink-0" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-gradient-to-r from-accent/5 to-secondary/5 rounded-3xl p-8 mb-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Icon name={stat.icon} size={24} className="text-accent" />
                </div>
                <div className="font-display text-3xl font-bold text-primary mb-1">
                  {stat.number}
                </div>
                <div className="text-text-secondary font-body text-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="font-display text-3xl font-bold text-primary text-center mb-12">
            What Our Customers Say
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-card rounded-3xl p-8 shadow-luxury">
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Icon key={i} name="Star" size={18} className="text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-text-secondary font-body text-lg leading-relaxed mb-6">
                  {testimonial.text}
                </blockquote>

                {/* Customer Info */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden shadow-luxury">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-body font-semibold text-primary">
                        {testimonial.name}
                      </h4>
                      {testimonial.verified && (
                        <Icon name="CheckCircle" size={16} className="text-accent" />
                      )}
                    </div>
                    <p className="text-sm text-text-secondary">{testimonial.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16">
          <h3 className="font-display text-2xl font-bold text-primary text-center mb-8">
            Trusted & Certified
          </h3>
          
          <div className="flex flex-wrap justify-center items-center gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center gap-4 bg-card rounded-2xl p-6 shadow-luxury">
                <div className="w-16 h-10 rounded-lg overflow-hidden shadow-luxury">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-body font-semibold text-primary text-sm">
                    {cert.name}
                  </h4>
                  <p className="text-xs text-text-secondary">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support CTA */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-3xl p-8 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Icon name="MessageCircle" size={32} className="text-accent" />
            </div>
            
            <h3 className="font-display text-2xl font-bold text-primary mb-4">
              Need Help Choosing?
            </h3>
            
            <p className="text-text-secondary font-body mb-6 leading-relaxed">
              Our certified fragrance consultants are available 24/7 to help you find your perfect scent. Get personalized recommendations based on your preferences and lifestyle.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default"
                className="bg-luxury-gold hover:bg-luxury-amber"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Chat with Expert
              </Button>
              
              <Button 
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10"
                iconName="Calendar"
                iconPosition="left"
              >
                Book Consultation
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Icon name="Phone" size={16} className="text-accent" />
                <span>1-800-AZMEERA</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Icon name="Mail" size={16} className="text-accent" />
                <span>support@azmeera.com</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-text-secondary">
                <Icon name="Clock" size={16} className="text-accent" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustSection;