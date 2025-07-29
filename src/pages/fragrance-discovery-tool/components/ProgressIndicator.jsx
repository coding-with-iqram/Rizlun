import React from 'react';
import Icon from '../../../components/AppIcon';

const ProgressIndicator = ({ currentStep, totalSteps, stepTitles }) => {
  const progressPercentage = (currentStep / totalSteps) * 100;

  return (
    <div className="w-full space-y-4">
      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-accent to-secondary transition-all duration-700 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
        
        {/* Step Indicators */}
        <div className="absolute -top-2 left-0 right-0 flex justify-between">
          {Array.from({ length: totalSteps }, (_, index) => {
            const stepNumber = index + 1;
            const isCompleted = stepNumber < currentStep;
            const isCurrent = stepNumber === currentStep;
            
            return (
              <div
                key={stepNumber}
                className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  isCompleted
                    ? 'bg-accent text-primary shadow-luxury'
                    : isCurrent
                    ? 'bg-primary text-white shadow-luxury ring-4 ring-accent/30'
                    : 'bg-muted text-muted-foreground'
                }`}
              >
                {isCompleted ? (
                  <Icon name="Check" size={12} />
                ) : (
                  stepNumber
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Step Information */}
      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center space-x-2">
          <span className="font-body font-medium text-primary">
            Step {currentStep} of {totalSteps}
          </span>
          {stepTitles && stepTitles[currentStep - 1] && (
            <>
              <span className="text-muted-foreground">•</span>
              <span className="text-text-secondary font-body">
                {stepTitles[currentStep - 1]}
              </span>
            </>
          )}
        </div>
        
        <div className="text-text-secondary font-body">
          {Math.round(progressPercentage)}% Complete
        </div>
      </div>
    </div>
  );
};

export default ProgressIndicator;