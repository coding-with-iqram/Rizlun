import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ScentStorySection = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const personalityQuestions = [
    {
      id: 'lifestyle',
      question: "How would you describe your lifestyle?",
      options: [
        { value: 'adventurous', label: 'Adventurous Explorer', icon: 'Mountain' },
        { value: 'sophisticated', label: 'Sophisticated Professional', icon: 'Briefcase' },
        { value: 'creative', label: 'Creative Artist', icon: 'Palette' },
        { value: 'romantic', label: 'Romantic Dreamer', icon: 'Heart' }
      ]
    },
    {
      id: 'occasion',
      question: "When do you most want to feel confident?",
      options: [
        { value: 'work', label: 'Important Meetings', icon: 'Users' },
        { value: 'evening', label: 'Evening Events', icon: 'Moon' },
        { value: 'daily', label: 'Daily Moments', icon: 'Sun' },
        { value: 'special', label: 'Special Occasions', icon: 'Star' }
      ]
    },
    {
      id: 'preference',
      question: "What scents make you feel most like yourself?",
      options: [
        { value: 'fresh', label: 'Fresh & Clean', icon: 'Droplets' },
        { value: 'warm', label: 'Warm & Cozy', icon: 'Flame' },
        { value: 'floral', label: 'Floral & Feminine', icon: 'Flower' },
        { value: 'bold', label: 'Bold & Mysterious', icon: 'Zap' }
      ]
    }
  ];

  const handleAnswerSelect = (questionId, value) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
    
    if (currentQuestion < personalityQuestions.length - 1) {
      setTimeout(() => {
        setCurrentQuestion(prev => prev + 1);
      }, 300);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
  };

  const isQuizComplete = Object.keys(answers).length === personalityQuestions.length;

  return (
    <section className="py-20 bg-gradient-to-br from-surface via-background to-card">
      <div className="container mx-auto px-4">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-4">
            Start Your Scent Story
          </h2>
          <p className="text-xl text-text-secondary font-body max-w-2xl mx-auto">
            Answer a few questions about your personality and preferences to discover fragrances that truly resonate with your unique essence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Side - Visual */}
            <div className="relative">
              <div className="relative w-full h-96 rounded-3xl overflow-hidden shadow-luxury-lg">
                <Image
                  src="https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=600&h=400&fit=crop"
                  alt="Fragrance Discovery Journey"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent"></div>
                
                {/* Floating Elements */}
                <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-luxury">
                  <div className="flex items-center gap-2">
                    <Icon name="Sparkles" size={20} className="text-accent" />
                    <span className="font-body font-medium text-primary">Personalized Discovery</span>
                  </div>
                </div>
                
                <div className="absolute bottom-6 right-6 bg-background/90 backdrop-blur-sm rounded-2xl px-4 py-3 shadow-luxury">
                  <div className="flex items-center gap-2">
                    <Icon name="Target" size={20} className="text-accent" />
                    <span className="font-body font-medium text-primary">Perfect Match</span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/10 rounded-full scent-particles"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/10 rounded-full scent-particles"></div>
            </div>

            {/* Right Side - Interactive Quiz */}
            <div className="space-y-8">
              
              {!isQuizComplete ? (
                <>
                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-body text-text-secondary">
                        Question {currentQuestion + 1} of {personalityQuestions.length}
                      </span>
                      <span className="text-sm font-body text-accent">
                        {Math.round(((currentQuestion + 1) / personalityQuestions.length) * 100)}%
                      </span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div 
                        className="bg-accent h-2 rounded-full transition-all duration-500"
                        style={{ width: `${((currentQuestion + 1) / personalityQuestions.length) * 100}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Current Question */}
                  <div className="space-y-6">
                    <h3 className="font-display text-2xl font-semibold text-primary">
                      {personalityQuestions[currentQuestion]?.question}
                    </h3>

                    {/* Answer Options */}
                    <div className="space-y-3">
                      {personalityQuestions[currentQuestion]?.options.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleAnswerSelect(personalityQuestions[currentQuestion].id, option.value)}
                          className="w-full p-4 rounded-2xl border-2 border-border hover:border-accent transition-all duration-300 text-left group scent-trail"
                        >
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                              <Icon name={option.icon} size={24} className="text-accent" />
                            </div>
                            <span className="font-body font-medium text-primary group-hover:text-accent transition-colors duration-300">
                              {option.label}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                /* Quiz Complete */
                <div className="text-center space-y-6">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon name="CheckCircle" size={40} className="text-accent" />
                  </div>
                  
                  <h3 className="font-display text-3xl font-bold text-primary">
                    Your Scent Profile is Ready!
                  </h3>
                  
                  <p className="text-text-secondary font-body text-lg">
                    Based on your answers, we've curated a personalized selection of fragrances that match your unique personality and preferences.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Link to="/fragrance-discovery-tool" className="flex-1">
                      <Button 
                        variant="default" 
                        fullWidth
                        className="bg-luxury-gold hover:bg-luxury-amber"
                        iconName="Search"
                        iconPosition="right"
                      >
                        Discover Your Matches
                      </Button>
                    </Link>
                    
                    <Button 
                      variant="outline" 
                      onClick={resetQuiz}
                      className="border-accent text-accent hover:bg-accent/10"
                      iconName="RotateCcw"
                      iconPosition="left"
                    >
                      Retake Quiz
                    </Button>
                  </div>
                </div>
              )}

              {/* Trust Indicators */}
              <div className="flex items-center justify-center gap-8 pt-8 border-t border-border">
                <div className="flex items-center gap-2">
                  <Icon name="Users" size={18} className="text-accent" />
                  <span className="text-sm text-text-secondary font-body">50K+ Matches Made</span>
                </div>
                <div className="flex items-center gap-2">
                  <Icon name="Star" size={18} className="text-accent" />
                  <span className="text-sm text-text-secondary font-body">98% Satisfaction</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScentStorySection;