import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const LoyaltyProgram = ({ loyaltyData }) => {
  const tiers = [
    { 
      name: 'Fragrance Explorer', 
      minPoints: 0, 
      color: 'from-gray-400 to-gray-600',
      benefits: ['Free shipping on orders $75+', 'Birthday surprise', 'Member-only content']
    },
    { 
      name: 'Scent Connoisseur', 
      minPoints: 500, 
      color: 'from-amber-400 to-amber-600',
      benefits: ['Free shipping on all orders', 'Early access to new releases', 'Exclusive samples', '5% cashback']
    },
    { 
      name: 'Fragrance Curator', 
      minPoints: 1500, 
      color: 'from-purple-400 to-purple-600',
      benefits: ['Priority customer service', 'Complimentary gift wrapping', 'VIP events access', '10% cashback']
    },
    { 
      name: 'Perfume Master', 
      minPoints: 3000, 
      color: 'from-yellow-400 to-yellow-600',
      benefits: ['Personal fragrance consultant', 'Custom fragrance creation', 'Exclusive limited editions', '15% cashback']
    }
  ];

  const getCurrentTier = () => {
    return tiers.reduce((current, tier) => 
      loyaltyData.points >= tier.minPoints ? tier : current
    );
  };

  const getNextTier = () => {
    const currentTier = getCurrentTier();
    const currentIndex = tiers.findIndex(tier => tier.name === currentTier.name);
    return currentIndex < tiers.length - 1 ? tiers[currentIndex + 1] : null;
  };

  const currentTier = getCurrentTier();
  const nextTier = getNextTier();
  const progressToNext = nextTier ? 
    ((loyaltyData.points - currentTier.minPoints) / (nextTier.minPoints - currentTier.minPoints)) * 100 : 100;

  const recentActivities = [
    { id: 1, type: 'purchase', description: 'Purchase: Tom Ford Oud Wood', points: 150, date: '2025-01-20' },
    { id: 2, type: 'review', description: 'Product review written', points: 25, date: '2025-01-18' },
    { id: 3, type: 'referral', description: 'Friend joined via referral', points: 100, date: '2025-01-15' },
    { id: 4, type: 'birthday', description: 'Birthday bonus points', points: 50, date: '2025-01-10' },
    { id: 5, type: 'social', description: 'Shared on social media', points: 10, date: '2025-01-08' }
  ];

  const getActivityIcon = (type) => {
    switch (type) {
      case 'purchase': return 'ShoppingBag';
      case 'review': return 'Star';
      case 'referral': return 'Users';
      case 'birthday': return 'Gift';
      case 'social': return 'Share';
      default: return 'Plus';
    }
  };

  const availableRewards = [
    { id: 1, name: '10% Off Next Purchase', points: 200, type: 'discount', icon: 'Percent' },
    { id: 2, name: 'Free Sample Set', points: 300, type: 'product', icon: 'Package' },
    { id: 3, name: 'Complimentary Gift Wrap', points: 150, type: 'service', icon: 'Gift' },
    { id: 4, name: 'Free Shipping', points: 100, type: 'shipping', icon: 'Truck' },
    { id: 5, name: 'Exclusive Fragrance Sample', points: 500, type: 'exclusive', icon: 'Sparkles' },
    { id: 6, name: 'VIP Event Access', points: 750, type: 'experience', icon: 'Calendar' }
  ];

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="mb-6">
        <h3 className="font-display text-2xl font-bold text-primary mb-2">Loyalty Program</h3>
        <p className="text-text-secondary font-body">Earn points and unlock exclusive fragrance experiences</p>
      </div>

      {/* Current Status */}
      <div className="bg-background rounded-xl p-6 mb-6 border border-border">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h4 className="font-display font-semibold text-primary text-lg">{currentTier.name}</h4>
            <p className="text-text-secondary font-body">Current tier status</p>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary font-display">{loyaltyData.points.toLocaleString()}</div>
            <div className="text-sm text-text-secondary">Total Points</div>
          </div>
        </div>

        {nextTier && (
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-text-secondary">Progress to {nextTier.name}</span>
              <span className="text-primary font-medium">
                {loyaltyData.points - currentTier.minPoints} / {nextTier.minPoints - currentTier.minPoints} points
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className={`h-3 rounded-full bg-gradient-to-r ${nextTier.color} transition-all duration-500`}
                style={{ width: `${Math.min(progressToNext, 100)}%` }}
              ></div>
            </div>
            <p className="text-sm text-text-secondary">
              {nextTier.minPoints - loyaltyData.points} points needed to reach {nextTier.name}
            </p>
          </div>
        )}
      </div>

      {/* Tier Benefits */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="bg-background rounded-xl p-6 border border-border">
          <h4 className="font-display font-semibold text-primary mb-4 flex items-center space-x-2">
            <Icon name="Crown" size={20} className="text-accent" />
            <span>Current Benefits</span>
          </h4>
          <ul className="space-y-2">
            {currentTier.benefits.map((benefit, index) => (
              <li key={index} className="flex items-center space-x-2 text-sm">
                <Icon name="Check" size={14} className="text-green-500 flex-shrink-0" />
                <span className="text-text-primary">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-background rounded-xl p-6 border border-border">
          <h4 className="font-display font-semibold text-primary mb-4 flex items-center space-x-2">
            <Icon name="TrendingUp" size={20} className="text-accent" />
            <span>Ways to Earn Points</span>
          </h4>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-text-secondary">Purchase ($1 = 1 point)</span>
              <span className="text-primary font-medium">1x</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Write a review</span>
              <span className="text-primary font-medium">25 pts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Refer a friend</span>
              <span className="text-primary font-medium">100 pts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Social media share</span>
              <span className="text-primary font-medium">10 pts</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-secondary">Birthday bonus</span>
              <span className="text-primary font-medium">50 pts</span>
            </div>
          </div>
        </div>
      </div>

      {/* Available Rewards */}
      <div className="mb-6">
        <h4 className="font-display font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="Gift" size={20} className="text-accent" />
          <span>Available Rewards</span>
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {availableRewards.map((reward) => (
            <div key={reward.id} className="bg-background rounded-lg p-4 border border-border hover:shadow-luxury transition-all duration-300">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center space-x-2">
                  <Icon name={reward.icon} size={16} className="text-accent" />
                  <span className="font-medium text-primary text-sm">{reward.name}</span>
                </div>
                <span className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full font-medium">
                  {reward.points} pts
                </span>
              </div>
              <Button
                variant={loyaltyData.points >= reward.points ? "default" : "outline"}
                size="sm"
                disabled={loyaltyData.points < reward.points}
                fullWidth
                iconName={loyaltyData.points >= reward.points ? "Gift" : "Lock"}
              >
                {loyaltyData.points >= reward.points ? 'Redeem' : 'Locked'}
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h4 className="font-display font-semibold text-primary mb-4 flex items-center space-x-2">
          <Icon name="Activity" size={20} className="text-accent" />
          <span>Recent Activity</span>
        </h4>
        <div className="space-y-3">
          {recentActivities.map((activity) => (
            <div key={activity.id} className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center">
                  <Icon name={getActivityIcon(activity.type)} size={14} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">{activity.description}</p>
                  <p className="text-xs text-text-secondary">{activity.date}</p>
                </div>
              </div>
              <div className="text-right">
                <span className="text-sm font-semibold text-green-500">+{activity.points}</span>
                <p className="text-xs text-text-secondary">points</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tier Progression */}
      <div className="mt-8 p-6 bg-accent/10 rounded-xl">
        <h4 className="font-display font-semibold text-primary mb-4">Tier Progression</h4>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
          {tiers.map((tier, index) => (
            <div key={tier.name} className="flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${tier.color} flex items-center justify-center mb-2 ${
                loyaltyData.points >= tier.minPoints ? 'opacity-100' : 'opacity-40'
              }`}>
                <Icon name="Crown" size={24} className="text-white" />
              </div>
              <h5 className="font-medium text-primary text-sm mb-1">{tier.name}</h5>
              <p className="text-xs text-text-secondary">{tier.minPoints.toLocaleString()}+ pts</p>
              {index < tiers.length - 1 && (
                <Icon name="ArrowRight" size={16} className="text-muted-foreground mt-2 hidden md:block" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;