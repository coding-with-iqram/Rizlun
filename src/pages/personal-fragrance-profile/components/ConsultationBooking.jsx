import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const ConsultationBooking = ({ consultations }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedConsultant, setSelectedConsultant] = useState('');
  const [consultationType, setConsultationType] = useState('discovery');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const consultationTypes = [
    {
      id: 'discovery',
      name: 'Fragrance Discovery',
      duration: '45 min',
      price: 'Free',
      description: 'Explore your scent preferences and get personalized recommendations',
      icon: 'Search'
    },
    {
      id: 'collection',
      name: 'Collection Building',
      duration: '60 min',
      price: '$50',
      description: 'Build a curated fragrance wardrobe for different occasions',
      icon: 'Grid3X3'
    },
    {
      id: 'custom',
      name: 'Custom Fragrance',
      duration: '90 min',
      price: '$150',
      description: 'Create your own signature scent with our master perfumer',
      icon: 'Sparkles'
    },
    {
      id: 'gift',
      name: 'Gift Consultation',
      duration: '30 min',
      price: 'Free',
      description: 'Find the perfect fragrance gift for someone special',
      icon: 'Gift'
    }
  ];

  const consultants = [
    {
      id: 'sarah',
      name: 'Sarah Chen',
      title: 'Master Perfumer',
      experience: '15 years',
      specialties: ['Niche fragrances', 'Custom blending', 'Oriental scents'],
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'marcus',
      name: 'Marcus Rodriguez',
      title: 'Fragrance Consultant',
      experience: '8 years',
      specialties: ['Designer fragrances', 'Seasonal collections', 'Men\'s fragrances'],
      rating: 4.8,
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face'
    },
    {
      id: 'elena',
      name: 'Elena Volkov',
      title: 'Scent Curator',
      experience: '12 years',
      specialties: ['Luxury fragrances', 'Vintage scents', 'European perfumery'],
      rating: 4.9,
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face'
    }
  ];

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const upcomingConsultations = consultations?.upcoming || [];
  const pastConsultations = consultations?.past || [];

  const handleBookConsultation = () => {
    // In a real app, this would submit to backend
    console.log('Booking consultation:', {
      type: consultationType,
      consultant: selectedConsultant,
      date: selectedDate,
      time: selectedTime
    });
    setShowBookingForm(false);
    // Reset form
    setSelectedDate('');
    setSelectedTime('');
    setSelectedConsultant('');
    setConsultationType('discovery');
  };

  const getConsultationStatusColor = (status) => {
    switch (status) {
      case 'confirmed': return 'text-green-500 bg-green-50';
      case 'pending': return 'text-yellow-500 bg-yellow-50';
      case 'completed': return 'text-blue-500 bg-blue-50';
      case 'cancelled': return 'text-red-500 bg-red-50';
      default: return 'text-gray-500 bg-gray-50';
    }
  };

  return (
    <div className="bg-card rounded-2xl p-8 shadow-luxury">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h3 className="font-display text-2xl font-bold text-primary mb-2">Fragrance Consultations</h3>
          <p className="text-text-secondary font-body">Book personalized sessions with our fragrance experts</p>
        </div>
        <Button
          variant="default"
          onClick={() => setShowBookingForm(true)}
          iconName="Calendar"
          className="bg-luxury-gold hover:bg-luxury-amber"
        >
          Book Consultation
        </Button>
      </div>

      {/* Booking Form Modal */}
      {showBookingForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-background rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-6">
              <h4 className="font-display text-xl font-bold text-primary">Book a Consultation</h4>
              <Button variant="ghost" size="sm" onClick={() => setShowBookingForm(false)} iconName="X">
              </Button>
            </div>

            {/* Consultation Types */}
            <div className="mb-6">
              <h5 className="font-medium text-primary mb-3">Select Consultation Type</h5>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {consultationTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setConsultationType(type.id)}
                    className={`p-4 rounded-lg border text-left transition-all duration-300 ${
                      consultationType === type.id
                        ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-start space-x-3">
                      <Icon name={type.icon} size={20} className="text-accent mt-1" />
                      <div>
                        <h6 className="font-semibold text-primary">{type.name}</h6>
                        <p className="text-sm text-text-secondary mb-1">{type.description}</p>
                        <div className="flex items-center space-x-3 text-xs text-text-secondary">
                          <span>{type.duration}</span>
                          <span className="font-semibold text-accent">{type.price}</span>
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Consultant Selection */}
            <div className="mb-6">
              <h5 className="font-medium text-primary mb-3">Choose Your Consultant</h5>
              <div className="space-y-3">
                {consultants.map((consultant) => (
                  <button
                    key={consultant.id}
                    onClick={() => setSelectedConsultant(consultant.id)}
                    className={`w-full p-4 rounded-lg border text-left transition-all duration-300 ${
                      selectedConsultant === consultant.id
                        ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden bg-muted">
                        <img
                          src={consultant.image}
                          alt={consultant.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h6 className="font-semibold text-primary">{consultant.name}</h6>
                          <div className="flex items-center space-x-1 text-sm">
                            <Icon name="Star" size={14} className="text-yellow-500" />
                            <span className="text-text-secondary">{consultant.rating}</span>
                          </div>
                        </div>
                        <p className="text-sm text-text-secondary">{consultant.title} • {consultant.experience}</p>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {consultant.specialties.slice(0, 2).map((specialty, index) => (
                            <span key={index} className="text-xs bg-muted text-text-secondary px-2 py-0.5 rounded-full">
                              {specialty}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <Input
                label="Select Date"
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                min={new Date().toISOString().split('T')[0]}
              />
              <div>
                <label className="block text-sm font-medium text-primary mb-2">Select Time</label>
                <div className="grid grid-cols-2 gap-2">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`p-2 text-sm rounded border transition-all duration-300 ${
                        selectedTime === time
                          ? 'border-accent bg-accent text-accent-foreground'
                          : 'border-border hover:border-accent/50 text-text-primary'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex space-x-3">
              <Button
                variant="default"
                onClick={handleBookConsultation}
                disabled={!selectedDate || !selectedTime || !selectedConsultant}
                className="flex-1"
              >
                Book Consultation
              </Button>
              <Button variant="outline" onClick={() => setShowBookingForm(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Upcoming Consultations */}
      {upcomingConsultations.length > 0 && (
        <div className="mb-8">
          <h4 className="font-display font-semibold text-primary mb-4 flex items-center space-x-2">
            <Icon name="Clock" size={20} className="text-accent" />
            <span>Upcoming Consultations</span>
          </h4>
          <div className="space-y-4">
            {upcomingConsultations.map((consultation) => (
              <div key={consultation.id} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h5 className="font-semibold text-primary">{consultation.type}</h5>
                    <p className="text-sm text-text-secondary">with {consultation.consultant}</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getConsultationStatusColor(consultation.status)}`}>
                    {consultation.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Calendar" size={16} />
                    <span>{consultation.date}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Clock" size={16} />
                    <span>{consultation.time}</span>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-text-secondary">
                    <Icon name="Video" size={16} />
                    <span>Virtual Meeting</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <Button variant="default" size="sm" iconName="Video">
                    Join Meeting
                  </Button>
                  <Button variant="outline" size="sm" iconName="Calendar">
                    Reschedule
                  </Button>
                  <Button variant="ghost" size="sm" iconName="X">
                    Cancel
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Past Consultations */}
      {pastConsultations.length > 0 && (
        <div>
          <h4 className="font-display font-semibold text-primary mb-4 flex items-center space-x-2">
            <Icon name="History" size={20} className="text-accent" />
            <span>Past Consultations</span>
          </h4>
          <div className="space-y-4">
            {pastConsultations.map((consultation) => (
              <div key={consultation.id} className="bg-background rounded-xl p-6 border border-border">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h5 className="font-semibold text-primary">{consultation.type}</h5>
                    <p className="text-sm text-text-secondary">with {consultation.consultant}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={14}
                          className={i < consultation.rating ? 'text-yellow-500 fill-current' : 'text-gray-300'}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-text-secondary">{consultation.date}</span>
                  </div>
                </div>

                {consultation.notes && (
                  <div className="mb-3 p-3 bg-muted rounded-lg">
                    <p className="text-sm text-text-primary">{consultation.notes}</p>
                  </div>
                )}

                {consultation.recommendations && (
                  <div className="mb-3">
                    <h6 className="text-sm font-medium text-primary mb-2">Recommendations:</h6>
                    <div className="flex flex-wrap gap-2">
                      {consultation.recommendations.map((rec, index) => (
                        <span key={index} className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full">
                          {rec}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="flex space-x-3">
                  <Button variant="outline" size="sm" iconName="RotateCcw">
                    Book Again
                  </Button>
                  <Button variant="ghost" size="sm" iconName="Download">
                    Download Notes
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {upcomingConsultations.length === 0 && pastConsultations.length === 0 && (
        <div className="text-center py-12">
          <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
          <h4 className="font-display font-semibold text-primary mb-2">No consultations yet</h4>
          <p className="text-text-secondary font-body mb-4">
            Book your first consultation to get personalized fragrance guidance from our experts.
          </p>
          <Button variant="default" onClick={() => setShowBookingForm(true)} iconName="Calendar">
            Book Your First Consultation
          </Button>
        </div>
      )}
    </div>
  );
};

export default ConsultationBooking;