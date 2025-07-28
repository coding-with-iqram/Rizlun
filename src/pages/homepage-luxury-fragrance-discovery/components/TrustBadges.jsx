import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Gift, Heart, RefreshCw, Star, Truck, Award, Clock } from 'lucide-react';

const TrustBadges = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: 'Authenticity Guaranteed',
      description: 'Every fragrance is sourced directly from authorized distributors with authenticity certificates.',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Gift,
      title: 'Free Samples',
      description: 'Try before you buy with complimentary 2ml samples of any fragrance in our collection.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    },
    {
      icon: Heart,
      title: 'Personalized Service',
      description: 'Our fragrance experts provide personalized consultations and recommendations.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50'
    },
    {
      icon: RefreshCw,
      title: 'Easy Returns',
      description: '30-day hassle-free returns. Not satisfied? We make exchanges simple and stress-free.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    }
  ];

  const stats = [
    {
      icon: Star,
      number: '4.9',
      label: 'Average Rating',
      subtext: 'from 2,500+ reviews'
    },
    {
      icon: Truck,
      number: '24h',
      label: 'Fast Delivery',
      subtext: 'across Bangladesh'
    },
    {
      icon: Award,
      number: '50K+',
      label: 'Happy Customers',
      subtext: 'since 2020'
    },
    {
      icon: Clock,
      number: '24/7',
      label: 'Customer Support',
      subtext: 'always here to help'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-16 bg-background border-t border-border/30">
      <div className="container-luxury">
        {/* Trust Features */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {trustFeatures.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <motion.div
                key={index}
                className="luxury-card p-6 text-center hover-lift group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
              >
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${feature.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent size={28} className={feature.color} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Statistics */}
        <motion.div
          className="bg-gradient-to-br from-accent/5 to-primary/5 rounded-2xl p-8"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-8">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-primary mb-2">
              Why Choose Rizlun?
            </h2>
            <p className="text-text-secondary">
              Join thousands of satisfied customers on their fragrance journey
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <IconComponent size={20} className="text-accent mr-2" />
                    <span className="font-display text-2xl md:text-3xl font-bold text-primary">
                      {stat.number}
                    </span>
                  </div>
                  <div className="font-semibold text-primary mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-text-secondary">
                    {stat.subtext}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* SSL and Security Badges */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-6 mt-12 pt-8 border-t border-border/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Shield size={16} className="text-green-600" />
            <span>SSL Secured</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Award size={16} className="text-accent" />
            <span>Authentic Products</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Heart size={16} className="text-pink-600" />
            <span>Customer Satisfaction Guaranteed</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-text-secondary">
            <Truck size={16} className="text-blue-600" />
            <span>Nationwide Delivery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustBadges;