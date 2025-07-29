import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const DiscoveryJourney = ({ journeyData }) => {
  const [activeTab, setActiveTab] = useState('timeline');

  const tabs = [
    { id: 'timeline', label: 'Journey Timeline', icon: 'Clock' },
    { id: 'preferences', label: 'Preference Evolution', icon: 'TrendingUp' },
    { id: 'samples', label: 'Sample History', icon: 'Droplets' },
    { id: 'quizzes', label: 'Quiz Results', icon: 'Brain' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'quiz': return 'Brain';
      case 'sample': return 'Droplets';
      case 'purchase': return 'ShoppingBag';
      case 'review': return 'Star';
      case 'wishlist': return 'Heart';
      default: return 'Circle';
    }
  };

  const getActivityColor = (type) => {
    switch (type) {
      case 'quiz': return 'bg-blue-500';
      case 'sample': return 'bg-purple-500';
      case 'purchase': return 'bg-green-500';
      case 'review': return 'bg-yellow-500';
      case 'wishlist': return 'bg-red-500';
      default: return 'bg-gray-500';
    }
  };

  const renderTimeline = () => (
    <div className="space-y-6">
      {journeyData.timeline.map((activity, index) => (
        <div key={activity.id} className="relative">
          {index < journeyData.timeline.length - 1 && (
            <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border"></div>
          )}
          
          <div className="flex space-x-4">
            <div className={`flex-shrink-0 w-12 h-12 ${getActivityColor(activity.type)} rounded-full flex items-center justify-center shadow-luxury`}>
              <Icon name={getActivityIcon(activity.type)} size={20} className="text-white" />
            </div>

            <div className="flex-1 bg-background rounded-xl p-6 shadow-sm border border-border">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h4 className="font-display font-semibold text-primary">{activity.title}</h4>
                  <p className="text-sm text-text-secondary font-body">{activity.description}</p>
                </div>
                <span className="text-sm text-text-secondary">{activity.date}</span>
              </div>

              {activity.details && (
                <div className="mt-3 p-3 bg-muted rounded-lg">
                  <p className="text-sm text-text-primary font-body">{activity.details}</p>
                </div>
              )}

              {activity.insights && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {activity.insights.map((insight, idx) => (
                    <span key={idx} className="px-2 py-1 bg-accent/10 text-accent text-xs rounded-full font-medium">
                      {insight}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  const renderPreferences = () => (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {journeyData.preferences.map((pref) => (
          <div key={pref.category} className="bg-background rounded-xl p-6 border border-border">
            <h4 className="font-display font-semibold text-primary mb-4">{pref.category}</h4>
            <div className="space-y-3">
              {pref.evolution.map((stage, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className={`w-3 h-3 rounded-full ${index === pref.evolution.length - 1 ? 'bg-accent' : 'bg-muted'}`}></div>
                    <span className="text-sm font-body text-text-primary">{stage.period}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-primary">{stage.preference}</span>
                    <div className="w-16 h-2 bg-muted rounded-full">
                      <div 
                        className="h-2 bg-accent rounded-full transition-all duration-500"
                        style={{ width: `${stage.strength}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const renderSamples = () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {journeyData.samples.map((sample) => (
        <div key={sample.id} className="bg-background rounded-xl p-4 border border-border hover:shadow-luxury transition-all duration-300">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h4 className="font-display font-semibold text-primary text-sm">{sample.name}</h4>
              <p className="text-xs text-text-secondary font-body">{sample.brand}</p>
            </div>
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <Icon
                  key={i}
                  name="Star"
                  size={12}
                  className={i < sample.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="flex justify-between">
              <span className="text-text-secondary">Tried:</span>
              <span className="text-primary">{sample.dateTried}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Status:</span>
              <span className={`font-medium ${
                sample.status === 'purchased' ? 'text-green-500' :
                sample.status === 'wishlist'? 'text-yellow-500' : 'text-gray-500'
              }`}>
                {sample.status}
              </span>
            </div>
          </div>

          {sample.notes && (
            <div className="mt-3 p-2 bg-muted rounded text-xs text-text-secondary italic">
              "{sample.notes}"
            </div>
          )}
        </div>
      ))}
    </div>
  );

  const renderQuizzes = () => (
    <div className="space-y-6">
      {journeyData.quizzes.map((quiz) => (
        <div key={quiz.id} className="bg-background rounded-xl p-6 border border-border">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h4 className="font-display font-semibold text-primary">{quiz.title}</h4>
              <p className="text-sm text-text-secondary font-body">Completed on {quiz.date}</p>
            </div>
            <Button variant="outline" size="sm" iconName="RotateCcw">
              Retake
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            {quiz.results.map((result, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-muted rounded-lg">
                <span className="text-sm font-medium text-primary">{result.category}</span>
                <div className="flex items-center space-x-2">
                  <div className="w-20 h-2 bg-background rounded-full">
                    <div 
                      className="h-2 bg-accent rounded-full transition-all duration-500"
                      style={{ width: `${result.score}%` }}
                    ></div>
                  </div>
                  <span className="text-sm font-semibold text-primary">{result.score}%</span>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-accent/10 rounded-lg">
            <h5 className="font-semibold text-primary mb-2">Key Insights:</h5>
            <ul className="space-y-1 text-sm text-text-secondary">
              {quiz.insights.map((insight, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <Icon name="ArrowRight" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                  <span>{insight}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'timeline': return renderTimeline();
      case 'preferences': return renderPreferences();
      case 'samples': return renderSamples();
      case 'quizzes': return renderQuizzes();
      default: return renderTimeline();
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">Discovery Journey</h3>
        <p className="text-text-secondary font-body">Track your fragrance exploration and evolving preferences</p>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-3 rounded-t-lg font-body font-medium transition-all duration-300 ${
              activeTab === tab.id
                ? 'text-accent border-b-2 border-accent bg-accent/5' :'text-text-secondary hover:text-primary hover:bg-muted'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="min-h-[400px]">
        {renderContent()}
      </div>

      {/* Journey Stats */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">{journeyData.stats.totalActivities}</div>
          <div className="text-sm text-text-secondary font-body">Total Activities</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">{journeyData.stats.samplesTried}</div>
          <div className="text-sm text-text-secondary font-body">Samples Tried</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">{journeyData.stats.quizzesCompleted}</div>
          <div className="text-sm text-text-secondary font-body">Quizzes Completed</div>
        </div>
        <div className="text-center p-4 bg-background rounded-lg">
          <div className="text-2xl font-bold text-primary font-display">{journeyData.stats.daysSinceStart}</div>
          <div className="text-sm text-text-secondary font-body">Days on Journey</div>
        </div>
      </div>
    </div>
  );
};

export default DiscoveryJourney;