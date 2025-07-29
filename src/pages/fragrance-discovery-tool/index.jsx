import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';
import MoodSelector from './components/MoodSelector';
import ScentMemoryExplorer from './components/ScentMemoryExplorer';
import LifestyleQuestions from './components/LifestyleQuestions';
import ScentFamilyEducation from './components/ScentFamilyEducation';
import ScentPersonalityQuiz from './components/ScentPersonalityQuiz';
import FragranceRecommendations from './components/FragranceRecommendations';
import ProgressIndicator from './components/ProgressIndicator';

const FragranceDiscoveryTool = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [userProfile, setUserProfile] = useState({
    mood: '',
    memory: '',
    lifestyle: '',
    scentFamily: '',
    personality: ''
  });
  const [isComplete, setIsComplete] = useState(false);

  const totalSteps = 6;
  const stepTitles = [
    'Mood Selection',
    'Scent Memories',
    'Lifestyle Preferences',
    'Scent Family Education',
    'Personality Quiz',
    'Your Recommendations'
  ];

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const handleMoodSelect = (mood) => {
    setUserProfile(prev => ({ ...prev, mood }));
  };

  const handleMemorySelect = (memory) => {
    setUserProfile(prev => ({ ...prev, memory }));
  };

  const handleLifestyleSelect = (lifestyle) => {
    setUserProfile(prev => ({ ...prev, lifestyle }));
  };

  const handleFamilySelect = (scentFamily) => {
    setUserProfile(prev => ({ ...prev, scentFamily }));
  };

  const handlePersonalitySelect = (personality) => {
    setUserProfile(prev => ({ ...prev, personality }));
  };

  const handleNextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(prev => prev + 1);
    }
    if (currentStep === totalSteps - 1) {
      setIsComplete(true);
    }
  };

  const handlePrevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleRequestSamples = (fragranceIds) => {
    // Mock sample request functionality
    alert(`Sample request submitted for ${fragranceIds.length} fragrances! We'll send them to your address within 3-5 business days.`);
  };

  const handleSaveProfile = () => {
    // Mock save profile functionality
    localStorage.setItem('azmeera_fragrance_profile', JSON.stringify(userProfile));
    alert('Your fragrance profile has been saved! You can access it anytime from your account.');
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1: return userProfile.mood !== '';
      case 2: return userProfile.memory !== '';
      case 3: return userProfile.lifestyle !== '';
      case 4: return userProfile.scentFamily !== '';
      case 5: return userProfile.personality !== '';
      default: return true;
    }
  };

  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <MoodSelector
            selectedMood={userProfile.mood}
            onMoodSelect={handleMoodSelect}
          />
        );
      case 2:
        return (
          <ScentMemoryExplorer
            selectedMemory={userProfile.memory}
            onMemorySelect={handleMemorySelect}
          />
        );
      case 3:
        return (
          <LifestyleQuestions
            selectedLifestyle={userProfile.lifestyle}
            onLifestyleSelect={handleLifestyleSelect}
          />
        );
      case 4:
        return (
          <ScentFamilyEducation
            selectedFamily={userProfile.scentFamily}
            onFamilySelect={handleFamilySelect}
          />
        );
      case 5:
        return (
          <ScentPersonalityQuiz
            selectedPersonality={userProfile.personality}
            onPersonalitySelect={handlePersonalitySelect}
          />
        );
      case 6:
        return (
          <FragranceRecommendations
            userProfile={userProfile}
            onRequestSamples={handleRequestSamples}
            onSaveProfile={handleSaveProfile}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-16 bg-gradient-to-br from-background via-card to-muted overflow-hidden">
          <div className="absolute inset-0 scent-particles opacity-30" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6 mb-12">
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 rounded-full">
                <Icon name="Compass" size={20} className="text-accent" />
                <span className="font-body font-medium text-accent">Fragrance Discovery Journey</span>
              </div>
              
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary breathing-text">
                Find Your Perfect
                <span className="block text-luxury-gold">Signature Scent</span>
              </h1>
              
              <p className="text-text-secondary font-body text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                Embark on a personalized journey through the world of fragrance. Our intelligent discovery tool maps your preferences, personality, and lifestyle to reveal fragrances that truly resonate with your unique essence.
              </p>
            </div>

            {/* Progress Indicator */}
            <div className="max-w-4xl mx-auto mb-12">
              <ProgressIndicator
                currentStep={currentStep}
                totalSteps={totalSteps}
                stepTitles={stepTitles}
              />
            </div>
          </div>
        </section>

        {/* Discovery Steps */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
              {renderCurrentStep()}
            </div>
          </div>
        </section>

        {/* Navigation Controls */}
        {currentStep < totalSteps && (
          <section className="py-8 border-t border-border bg-card/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {currentStep > 1 && (
                    <Button
                      variant="outline"
                      onClick={handlePrevStep}
                      iconName="ChevronLeft"
                      iconPosition="left"
                    >
                      Previous
                    </Button>
                  )}
                  
                  <Link to="/homepage-luxury-fragrance-discovery">
                    <Button variant="ghost">
                      <Icon name="Home" size={18} className="mr-2" />
                      Back to Home
                    </Button>
                  </Link>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="hidden sm:block text-sm text-text-secondary font-body">
                    {canProceed() ? 'Ready to continue' : 'Please make a selection to proceed'}
                  </div>
                  
                  <Button
                    variant="default"
                    onClick={handleNextStep}
                    disabled={!canProceed()}
                    iconName="ChevronRight"
                    iconPosition="right"
                    className="bg-luxury-gold hover:bg-luxury-amber disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {currentStep === totalSteps - 1 ? 'Get My Recommendations' : 'Continue'}
                  </Button>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Completion Message */}
        {isComplete && currentStep === totalSteps && (
          <section className="py-16 bg-gradient-to-br from-accent/5 to-secondary/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="space-y-6">
                <div className="inline-flex items-center space-x-2 px-6 py-3 bg-accent/10 rounded-full">
                  <Icon name="CheckCircle" size={24} className="text-accent" />
                  <span className="font-body font-semibold text-accent">Discovery Complete!</span>
                </div>
                
                <h2 className="font-display text-3xl font-bold text-primary">
                  Your Fragrance Journey Begins
                </h2>
                
                <p className="text-text-secondary font-body text-lg max-w-2xl mx-auto">
                  Congratulations! You've completed your fragrance discovery journey. Your personalized recommendations are ready, and your scent profile has been created to help you discover even more perfect matches in the future.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
                  <Link to="/collections-gallery">
                    <Button variant="outline" size="lg">
                      Explore All Collections
                    </Button>
                  </Link>
                  
                  <Link to="/personal-fragrance-profile">
                    <Button variant="default" size="lg" className="bg-luxury-gold hover:bg-luxury-amber">
                      View My Profile
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Sparkles" size={24} className="text-accent" />
              <span className="font-display text-xl font-semibold">Azmeera Perfume</span>
            </div>
            
            <p className="text-white/80 font-body text-sm">
              Discover your signature scent with our personalized fragrance journey
            </p>
            
            <div className="pt-4 border-t border-white/20">
              <p className="text-white/60 font-body text-xs">
                © {new Date().getFullYear()} Azmeera Perfume. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FragranceDiscoveryTool;