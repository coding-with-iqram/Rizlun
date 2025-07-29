import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ScentMemories = ({ memories }) => {
  const [isAddingMemory, setIsAddingMemory] = useState(false);
  const [newMemory, setNewMemory] = useState({
    fragrance: '',
    occasion: '',
    memory: '',
    emotion: '',
    date: ''
  });

  const emotions = [
    { name: 'Joy', icon: 'Smile', color: 'text-yellow-500' },
    { name: 'Romance', icon: 'Heart', color: 'text-red-500' },
    { name: 'Confidence', icon: 'Zap', color: 'text-blue-500' },
    { name: 'Nostalgia', icon: 'Clock', color: 'text-purple-500' },
    { name: 'Peace', icon: 'Leaf', color: 'text-green-500' },
    { name: 'Adventure', icon: 'Compass', color: 'text-orange-500' }
  ];

  const getEmotionIcon = (emotion) => {
    const emotionData = emotions.find(e => e.name.toLowerCase() === emotion.toLowerCase());
    return emotionData || { icon: 'Heart', color: 'text-gray-500' };
  };

  const handleAddMemory = () => {
    // In a real app, this would save to backend
    console.log('Adding memory:', newMemory);
    setIsAddingMemory(false);
    setNewMemory({ fragrance: '', occasion: '', memory: '', emotion: '', date: '' });
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Scent Memories</h3>
          <p className="text-text-secondary font-body">Your personal fragrance journal</p>
        </div>
        <Button
          variant="default"
          onClick={() => setIsAddingMemory(true)}
          iconName="Plus"
          className="bg-luxury-gold hover:bg-luxury-amber"
        >
          Add Memory
        </Button>
      </div>

      {/* Add Memory Form */}
      {isAddingMemory && (
        <div className="bg-background rounded-xl p-6 mb-6 border border-border">
          <h4 className="font-display font-semibold text-primary mb-4">Create New Memory</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <Input
              label="Fragrance Name"
              placeholder="Which fragrance?"
              value={newMemory.fragrance}
              onChange={(e) => setNewMemory({...newMemory, fragrance: e.target.value})}
            />
            <Input
              label="Occasion"
              placeholder="What was the occasion?"
              value={newMemory.occasion}
              onChange={(e) => setNewMemory({...newMemory, occasion: e.target.value})}
            />
            <Input
              label="Date"
              type="date"
              value={newMemory.date}
              onChange={(e) => setNewMemory({...newMemory, date: e.target.value})}
            />
            <div>
              <label className="block text-sm font-medium text-primary mb-2">Emotion</label>
              <div className="flex flex-wrap gap-2">
                {emotions.map((emotion) => (
                  <button
                    key={emotion.name}
                    onClick={() => setNewMemory({...newMemory, emotion: emotion.name})}
                    className={`flex items-center space-x-1 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                      newMemory.emotion === emotion.name
                        ? 'bg-accent text-accent-foreground'
                        : 'bg-muted text-text-secondary hover:bg-accent/20'
                    }`}
                  >
                    <Icon name={emotion.icon} size={14} className={emotion.color} />
                    <span>{emotion.name}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-primary mb-2">Memory</label>
            <textarea
              placeholder="Describe your memory with this fragrance..."
              value={newMemory.memory}
              onChange={(e) => setNewMemory({...newMemory, memory: e.target.value})}
              className="w-full p-3 border border-border rounded-lg bg-input text-primary placeholder-text-secondary resize-none h-24 focus:ring-2 focus:ring-accent focus:border-transparent"
            />
          </div>
          <div className="flex space-x-3">
            <Button variant="default" onClick={handleAddMemory}>
              Save Memory
            </Button>
            <Button variant="outline" onClick={() => setIsAddingMemory(false)}>
              Cancel
            </Button>
          </div>
        </div>
      )}

      {/* Memories Timeline */}
      <div className="space-y-6">
        {memories.map((memory) => {
          const emotionData = getEmotionIcon(memory.emotion);
          return (
            <div key={memory.id} className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-border"></div>
              
              <div className="flex space-x-4">
                {/* Timeline dot */}
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-luxury">
                  <Icon name={emotionData.icon} size={20} className="text-accent-foreground" />
                </div>

                {/* Memory content */}
                <div className="flex-1 bg-background rounded-xl p-6 shadow-sm border border-border hover:shadow-luxury transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 gap-2">
                    <div>
                      <h4 className="font-display font-semibold text-primary">{memory.fragrance}</h4>
                      <p className="text-sm text-text-secondary font-body">{memory.occasion}</p>
                    </div>
                    <div className="flex items-center space-x-3 text-sm text-text-secondary">
                      <div className="flex items-center space-x-1">
                        <Icon name={emotionData.icon} size={14} className={emotionData.color} />
                        <span>{memory.emotion}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Icon name="Calendar" size={14} />
                        <span>{memory.date}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-text-primary font-body leading-relaxed mb-4">
                    {memory.memory}
                  </p>

                  {memory.image && (
                    <div className="w-full h-48 rounded-lg overflow-hidden mb-4">
                      <Image
                        src={memory.image}
                        alt={`Memory of ${memory.fragrance}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  <div className="flex items-center justify-between pt-3 border-t border-border">
                    <div className="flex items-center space-x-4 text-sm text-text-secondary">
                      <button className="flex items-center space-x-1 hover:text-accent transition-colors duration-300">
                        <Icon name="Heart" size={14} />
                        <span>{memory.likes || 0}</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-accent transition-colors duration-300">
                        <Icon name="MessageCircle" size={14} />
                        <span>Comment</span>
                      </button>
                      <button className="flex items-center space-x-1 hover:text-accent transition-colors duration-300">
                        <Icon name="Share" size={14} />
                        <span>Share</span>
                      </button>
                    </div>
                    <Button variant="ghost" size="sm" iconName="MoreHorizontal">
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {memories.length === 0 && !isAddingMemory && (
        <div className="text-center py-12">
          <Icon name="BookOpen" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="font-display font-semibold text-primary mb-2">No memories yet</h4>
          <p className="text-text-secondary font-body mb-4">Start documenting your fragrance journey and create lasting scent memories.</p>
          <Button variant="default" onClick={() => setIsAddingMemory(true)} iconName="Plus">
            Add Your First Memory
          </Button>
        </div>
      )}
    </div>
  );
};

export default ScentMemories;