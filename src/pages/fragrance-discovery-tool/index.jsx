import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  ArrowRight, 
  Sparkles, 
  Heart, 
  Sun, 
  Snowflake,
  Flower,
  TreePine,
  Zap,
  Moon,
  Coffee,
  Waves,
  Mountain,
  Users,
  User,
  Calendar
} from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';
import { perfumes, scentFamilies } from '../../data/perfumes';
import ProductCard from '../../components/ProductCard';
import toast from 'react-hot-toast';

const FragranceDiscoveryTool = () => {
  const navigate = useNavigate();
  const { user, addLoyaltyPoints } = useAuth();
  const { addToCart, addToWishlist } = useCart();
  
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [recommendations, setRecommendations] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  const [loading, setLoading] = useState(false);

  const questions = [
    {
      id: 'personality',
      title: 'What best describes your personality?',
      subtitle: 'Choose the option that resonates with you most',
      type: 'single',
      options: [
        {
          id: 'sophisticated',
          label: 'Sophisticated & Elegant',
          description: 'You appreciate refined, classic beauty',
          icon: Sparkles,
          color: 'from-purple-100 to-indigo-200'
        },
        {
          id: 'adventurous',
          label: 'Adventurous & Bold',
          description: 'You love trying new things and standing out',
          icon: Zap,
          color: 'from-orange-100 to-red-200'
        },
        {
          id: 'romantic',
          label: 'Romantic & Dreamy',
          description: 'You believe in love and beauty in everyday life',
          icon: Heart,
          color: 'from-pink-100 to-rose-200'
        },
        {
          id: 'minimalist',
          label: 'Minimalist & Clean',
          description: 'You prefer simplicity and understated elegance',
          icon: Moon,
          color: 'from-gray-100 to-blue-200'
        }
      ]
    },
    {
      id: 'season',
      title: 'Which season speaks to your soul?',
      subtitle: 'Think about when you feel most alive and inspired',
      type: 'single',
      options: [
        {
          id: 'spring',
          label: 'Spring',
          description: 'Fresh blooms, renewal, and gentle warmth',
          icon: Flower,
          color: 'from-green-100 to-emerald-200'
        },
        {
          id: 'summer',
          label: 'Summer',
          description: 'Bright sunshine, ocean breeze, and vibrant energy',
          icon: Sun,
          color: 'from-yellow-100 to-orange-200'
        },
        {
          id: 'autumn',
          label: 'Autumn',
          description: 'Cozy warmth, rich colors, and sophistication',
          icon: TreePine,
          color: 'from-amber-100 to-orange-200'
        },
        {
          id: 'winter',
          label: 'Winter',
          description: 'Intimate moments, luxury, and depth',
          icon: Snowflake,
          color: 'from-blue-100 to-slate-200'
        }
      ]
    },
    {
      id: 'mood',
      title: 'What mood do you want your fragrance to evoke?',
      subtitle: 'How do you want to feel when wearing your perfect scent?',
      type: 'single',
      options: [
        {
          id: 'confident',
          label: 'Confident & Powerful',
          description: 'Make a statement and command attention',
          icon: Zap,
          color: 'from-red-100 to-pink-200'
        },
        {
          id: 'peaceful',
          label: 'Peaceful & Serene',
          description: 'Feel calm, centered, and balanced',
          icon: Waves,
          color: 'from-blue-100 to-cyan-200'
        },
        {
          id: 'energetic',
          label: 'Energetic & Uplifting',
          description: 'Start each day with motivation and joy',
          icon: Sun,
          color: 'from-yellow-100 to-amber-200'
        },
        {
          id: 'mysterious',
          label: 'Mysterious & Alluring',
          description: 'Create intrigue and leave a lasting impression',
          icon: Moon,
          color: 'from-purple-100 to-indigo-200'
        }
      ]
    },
    {
      id: 'occasion',
      title: 'When will you primarily wear this fragrance?',
      subtitle: 'Consider your lifestyle and daily activities',
      type: 'multiple',
      options: [
        {
          id: 'work',
          label: 'Work & Professional',
          description: 'Office meetings, networking events',
          icon: Coffee,
          color: 'from-gray-100 to-slate-200'
        },
        {
          id: 'casual',
          label: 'Daily & Casual',
          description: 'Running errands, casual meetups',
          icon: User,
          color: 'from-blue-100 to-indigo-200'
        },
        {
          id: 'evening',
          label: 'Evening & Special Events',
          description: 'Dinner dates, parties, celebrations',
          icon: Sparkles,
          color: 'from-purple-100 to-pink-200'
        },
        {
          id: 'weekend',
          label: 'Weekend & Relaxation',
          description: 'Leisure time, outdoor activities',
          icon: Mountain,
          color: 'from-green-100 to-teal-200'
        }
      ]
    },
    {
      id: 'preferences',
      title: 'Which scent families appeal to you?',
      subtitle: 'Select all that interest you (you can choose multiple)',
      type: 'multiple',
      options: [
        {
          id: 'Floral',
          label: 'Floral',
          description: 'Rose, jasmine, lily - romantic and feminine',
          icon: Flower,
          color: 'from-pink-100 to-rose-200'
        },
        {
          id: 'Citrus',
          label: 'Citrus',
          description: 'Lemon, bergamot, orange - fresh and energizing',
          icon: Sun,
          color: 'from-yellow-100 to-orange-200'
        },
        {
          id: 'Woody',
          label: 'Woody',
          description: 'Sandalwood, cedar - warm and sophisticated',
          icon: TreePine,
          color: 'from-brown-100 to-amber-200'
        },
        {
          id: 'Oriental',
          label: 'Oriental',
          description: 'Vanilla, spices - exotic and mysterious',
          icon: Sparkles,
          color: 'from-purple-100 to-indigo-200'
        },
        {
          id: 'Fresh',
          label: 'Fresh',
          description: 'Clean, airy - light and uplifting',
          icon: Waves,
          color: 'from-blue-100 to-cyan-200'
        },
        {
          id: 'Aquatic',
          label: 'Aquatic',
          description: 'Ocean breeze, marine - refreshing and modern',
          icon: Waves,
          color: 'from-cyan-100 to-blue-200'
        }
      ]
    }
  ];

  const handleAnswer = (questionId, answerId) => {
    const question = questions.find(q => q.id === questionId);
    
    if (question.type === 'single') {
      setAnswers(prev => ({ ...prev, [questionId]: answerId }));
    } else {
      setAnswers(prev => {
        const currentAnswers = prev[questionId] || [];
        const newAnswers = currentAnswers.includes(answerId)
          ? currentAnswers.filter(id => id !== answerId)
          : [...currentAnswers, answerId];
        return { ...prev, [questionId]: newAnswers };
      });
    }
  };

  const calculateRecommendations = () => {
    setLoading(true);
    
    // Simulate loading for better UX
    setTimeout(() => {
      let scores = perfumes.map(perfume => ({ ...perfume, score: 0 }));

      // Score based on personality
      if (answers.personality === 'sophisticated') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.scentFamily === 'Oriental' || p.scentFamily === 'Woody' ? 3 : 0)
        }));
      } else if (answers.personality === 'romantic') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.scentFamily === 'Floral' ? 3 : 0)
        }));
      } else if (answers.personality === 'adventurous') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.scentFamily === 'Citrus' || p.scentFamily === 'Aquatic' ? 3 : 0)
        }));
      } else if (answers.personality === 'minimalist') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.scentFamily === 'Fresh' ? 3 : 0)
        }));
      }

      // Score based on season preferences
      if (answers.season === 'spring') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.season.includes('Spring') ? 2 : 0)
        }));
      } else if (answers.season === 'summer') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.season.includes('Summer') ? 2 : 0)
        }));
      } else if (answers.season === 'autumn' || answers.season === 'winter') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.season.includes('Fall') || p.season.includes('Winter') ? 2 : 0)
        }));
      }

      // Score based on scent family preferences
      if (answers.preferences) {
        answers.preferences.forEach(pref => {
          scores = scores.map(p => ({
            ...p,
            score: p.score + (p.scentFamily === pref ? 2 : 0)
          }));
        });
      }

      // Score based on intensity preferences (inferred from mood)
      if (answers.mood === 'confident' || answers.mood === 'mysterious') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.intensity === 'Strong' || p.intensity === 'Intense' ? 1 : 0)
        }));
      } else if (answers.mood === 'peaceful' || answers.mood === 'energetic') {
        scores = scores.map(p => ({
          ...p,
          score: p.score + (p.intensity === 'Light' || p.intensity === 'Moderate' ? 1 : 0)
        }));
      }

      // Sort by score and get top recommendations
      const topRecommendations = scores
        .sort((a, b) => b.score - a.score)
        .slice(0, 4);

      setRecommendations(topRecommendations);
      setLoading(false);
      setShowResults(true);

      // Award loyalty points for completing quiz
      if (user) {
        addLoyaltyPoints(20);
        toast.success('Quiz completed! +20 loyalty points earned');
      }
    }, 2000);
  };

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateRecommendations();
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setRecommendations([]);
    setQuizStarted(false);
  };

  const currentQ = questions[currentQuestion];
  const isAnswered = currentQ ? (
    currentQ.type === 'single' 
      ? answers[currentQ.id] 
      : answers[currentQ.id] && answers[currentQ.id].length > 0
  ) : false;

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  if (!quizStarted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-surface to-card flex items-center justify-center p-4">
        <motion.div 
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="luxury-card p-12">
            <motion.div
              className="w-24 h-24 mx-auto mb-8 rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center"
              animate={{ 
                scale: [1, 1.1, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              <Sparkles size={40} className="text-accent" />
            </motion.div>
            
            <h1 className="font-display text-4xl font-bold text-primary mb-4">
              Discover Your Perfect Scent
            </h1>
            
            <p className="text-lg text-text-secondary mb-8 leading-relaxed">
              Take our personalized fragrance quiz to find scents that match your unique 
              personality, lifestyle, and preferences. In just 2 minutes, we'll recommend 
              fragrances that are perfect for you.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <Users size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Personalized</h3>
                <p className="text-sm text-text-secondary">Tailored to your unique taste</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <Zap size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Quick & Easy</h3>
                <p className="text-sm text-text-secondary">Only 5 simple questions</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-accent/10 flex items-center justify-center">
                  <Heart size={24} className="text-accent" />
                </div>
                <h3 className="font-semibold text-primary mb-1">Expert Curated</h3>
                <p className="text-sm text-text-secondary">Recommendations from our perfume experts</p>
              </div>
            </div>

            <motion.button
              onClick={() => setQuizStarted(true)}
              className="btn-primary text-lg px-8 py-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Scent Journey
            </motion.button>

            <p className="text-sm text-text-secondary mt-4">
              ⭐ Join 10,000+ customers who found their signature scent
            </p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-accent to-primary flex items-center justify-center"
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <Sparkles size={32} className="text-white" />
          </motion.div>
          
          <h2 className="font-display text-2xl font-bold text-primary mb-2">
            Analyzing Your Preferences...
          </h2>
          
          <p className="text-text-secondary mb-6">
            Our fragrance experts are finding your perfect matches
          </p>
          
          <div className="max-w-md mx-auto">
            <div className="progress-bar mb-2">
              <motion.div 
                className="progress-fill"
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 2 }}
              />
            </div>
            <p className="text-sm text-text-secondary">This won't take long...</p>
          </div>
        </motion.div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="min-h-screen bg-background py-20">
        <div className="container-luxury">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success flex items-center justify-center">
              <Heart size={32} className="text-success-foreground" />
            </div>
            
            <h1 className="font-display text-4xl font-bold text-primary mb-4">
              Your Perfect Fragrance Matches! 🎉
            </h1>
            
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
              Based on your preferences, we've found {recommendations.length} fragrances 
              that are perfect for you. Each one is carefully selected to match your 
              personality and lifestyle.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={resetQuiz}
                className="btn-ghost"
              >
                Retake Quiz
              </button>
              <button
                onClick={() => navigate('/collections-gallery')}
                className="btn-secondary"
              >
                Browse All Fragrances
              </button>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {recommendations.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative">
                  <ProductCard
                    product={product}
                    onAddToCart={(prod) => {
                      addToCart({...prod, selectedSize: '50ml', quantity: 1});
                      toast.success(`${prod.name} added to cart!`);
                    }}
                    onAddToWishlist={(prod) => {
                      addToWishlist(prod);
                      toast.success(`${prod.name} added to wishlist!`);
                    }}
                  />
                  
                  {index === 0 && (
                    <div className="absolute -top-3 -right-3 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-medium">
                      Perfect Match!
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Why These Matches */}
          <motion.div
            className="mt-16 luxury-card p-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h2 className="font-display text-2xl font-bold text-primary mb-6 text-center">
              Why These Fragrances Are Perfect for You
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-primary mb-3">Your Profile:</h3>
                <div className="space-y-2">
                  {answers.personality && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary capitalize">
                        {answers.personality.replace('_', ' ')} personality
                      </span>
                    </div>
                  )}
                  {answers.season && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary capitalize">
                        Loves {answers.season} vibes
                      </span>
                    </div>
                  )}
                  {answers.mood && (
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary capitalize">
                        Wants to feel {answers.mood.replace('_', ' ')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="font-semibold text-primary mb-3">Your Scent DNA:</h3>
                <div className="space-y-2">
                  {answers.preferences && answers.preferences.map(pref => (
                    <div key={pref} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary">{pref} fragrances</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-surface/50 border-b border-border">
        <div className="container-luxury py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/')}
              className="btn-ghost"
            >
              <ArrowLeft size={20} className="mr-2" />
              Back to Home
            </button>
            
            <div className="text-center">
              <h1 className="font-display text-2xl font-bold text-primary">
                Fragrance Discovery
              </h1>
              <p className="text-sm text-text-secondary">
                Question {currentQuestion + 1} of {questions.length}
              </p>
            </div>
            
            <button
              onClick={resetQuiz}
              className="btn-ghost text-text-secondary"
            >
              Start Over
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="progress-bar mt-6">
            <motion.div 
              className="progress-fill"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>
      </div>

      {/* Question */}
      <div className="py-16">
        <div className="container-luxury max-w-4xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
            >
              <div className="text-center mb-12">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mb-4">
                  {currentQ.title}
                </h2>
                <p className="text-lg text-text-secondary">
                  {currentQ.subtitle}
                </p>
              </div>

              <div className={`grid gap-6 ${
                currentQ.options.length <= 2 
                  ? 'grid-cols-1 md:grid-cols-2' 
                  : currentQ.options.length <= 4
                  ? 'grid-cols-1 md:grid-cols-2'
                  : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
              }`}>
                {currentQ.options.map((option, index) => {
                  const IconComponent = option.icon;
                  const isSelected = currentQ.type === 'single' 
                    ? answers[currentQ.id] === option.id
                    : answers[currentQ.id]?.includes(option.id);

                  return (
                    <motion.button
                      key={option.id}
                      onClick={() => handleAnswer(currentQ.id, option.id)}
                      className={`quiz-option text-left p-6 ${
                        isSelected ? 'selected' : ''
                      }`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className={`w-16 h-16 mb-4 rounded-full bg-gradient-to-br ${option.color} flex items-center justify-center`}>
                        <IconComponent size={24} className="text-primary" />
                      </div>
                      
                      <h3 className="font-semibold text-primary mb-2">
                        {option.label}
                      </h3>
                      
                      <p className="text-sm text-text-secondary">
                        {option.description}
                      </p>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-0 left-0 right-0 bg-background border-t border-border p-6">
        <div className="container-luxury flex items-center justify-between">
          <button
            onClick={prevQuestion}
            disabled={currentQuestion === 0}
            className={`btn-ghost ${
              currentQuestion === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <ArrowLeft size={20} className="mr-2" />
            Previous
          </button>

          <div className="text-center">
            <p className="text-sm text-text-secondary">
              {currentQ.type === 'multiple' ? 'Select all that apply' : 'Choose one option'}
            </p>
          </div>

          <motion.button
            onClick={nextQuestion}
            disabled={!isAnswered}
            className={`btn-primary ${
              !isAnswered ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            whileHover={isAnswered ? { scale: 1.05 } : {}}
            whileTap={isAnswered ? { scale: 0.95 } : {}}
          >
            {currentQuestion === questions.length - 1 ? 'Get My Results' : 'Next'}
            <ArrowRight size={20} className="ml-2" />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default FragranceDiscoveryTool;