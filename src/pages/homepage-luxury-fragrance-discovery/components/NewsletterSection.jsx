import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { Mail, Gift, Sparkles, Bell, ArrowRight, Check } from 'lucide-react';
import toast from 'react-hot-toast';

const NewsletterSection = () => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const benefits = [
    {
      icon: Gift,
      title: 'Exclusive Offers',
      description: 'Get 15% off your first order + early access to sales',
      color: 'text-purple-600'
    },
    {
      icon: Sparkles,
      title: 'Scent Tips & Guides',
      description: 'Weekly fragrance education and styling tips',
      color: 'text-accent'
    },
    {
      icon: Bell,
      title: 'New Arrivals First',
      description: 'Be the first to discover new fragrances',
      color: 'text-blue-600'
    }
  ];

  const onSubmit = async (data) => {
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock subscription success
      setIsSubscribed(true);
      reset();
      
      toast.success(
        <div>
          <strong>Welcome to Rizlun!</strong>
          <div className="text-sm opacity-75">Check your email for a 15% discount code</div>
        </div>
      );
    } catch (error) {
      toast.error('Subscription failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubscribed) {
    return (
      <motion.section
        className="py-16 bg-gradient-to-br from-accent/10 to-primary/10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container-luxury">
          <div className="max-w-2xl mx-auto text-center">
            <motion.div
              className="w-20 h-20 mx-auto mb-6 rounded-full bg-success flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            >
              <Check size={40} className="text-success-foreground" />
            </motion.div>
            
            <h2 className="font-display text-3xl font-bold text-primary mb-4">
              Welcome to the Rizlun Family! 🎉
            </h2>
            
            <p className="text-lg text-text-secondary mb-6">
              You're all set! Check your email for your exclusive 15% discount code and 
              get ready for premium fragrance content delivered to your inbox.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              {benefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="luxury-card p-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <IconComponent size={24} className={`${benefit.color} mx-auto mb-2`} />
                    <h3 className="font-semibold text-primary text-sm mb-1">
                      {benefit.title}
                    </h3>
                    <p className="text-xs text-text-secondary">
                      {benefit.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </motion.section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent/10 to-primary/10">
      <div className="container-luxury">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-accent font-medium">
                  <Mail size={20} />
                  <span>Join Our Fragrance Community</span>
                </div>
                
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary">
                  Unlock Exclusive Scent Secrets
                </h2>
                
                <p className="text-lg text-text-secondary leading-relaxed">
                  Subscribe to receive personalized fragrance recommendations, insider tips 
                  from perfume experts, and exclusive access to limited collections.
                </p>
              </div>

              {/* Benefits */}
              <div className="space-y-4">
                {benefits.map((benefit, index) => {
                  const IconComponent = benefit.icon;
                  return (
                    <motion.div
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-10 h-10 rounded-full bg-white flex items-center justify-center flex-shrink-0 mt-1`}>
                        <IconComponent size={18} className={benefit.color} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-primary mb-1">
                          {benefit.title}
                        </h3>
                        <p className="text-sm text-text-secondary">
                          {benefit.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Right Content - Subscription Form */}
            <motion.div
              className="lg:pl-8"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="luxury-card p-8">
                <div className="text-center mb-6">
                  <h3 className="font-display text-xl font-bold text-primary mb-2">
                    Get Your Welcome Gift
                  </h3>
                  <p className="text-text-secondary">
                    15% off your first order + exclusive scent guide
                  </p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className={`luxury-input ${errors.email ? 'border-error' : ''}`}
                      placeholder="Enter your email address"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                    />
                    {errors.email && (
                      <p className="text-error text-sm mt-1">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                      First Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="luxury-input"
                      placeholder="Your first name"
                      {...register('name')}
                    />
                  </div>

                  <div className="flex items-start gap-3">
                    <input
                      type="checkbox"
                      id="consent"
                      className="mt-1"
                      {...register('consent', { required: 'Please agree to receive emails' })}
                    />
                    <label htmlFor="consent" className="text-sm text-text-secondary">
                      I agree to receive marketing emails and understand I can unsubscribe at any time.
                    </label>
                  </div>
                  {errors.consent && (
                    <p className="text-error text-sm">{errors.consent.message}</p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    className="w-full btn-primary py-3 px-6 relative overflow-hidden group"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isLoading ? (
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin"></div>
                        <span>Subscribing...</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-center gap-2">
                        <span>Get My 15% Discount</span>
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </div>
                    )}
                  </motion.button>
                </form>

                <div className="text-center mt-4">
                  <p className="text-xs text-text-secondary">
                    ✨ Plus get weekly scent tips and early access to new collections
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;