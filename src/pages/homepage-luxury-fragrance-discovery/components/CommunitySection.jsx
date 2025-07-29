// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import Icon from '../../../components/AppIcon';
// import Image from '../../../components/AppImage';
// import Button from '../../../components/ui/Button';

// const CommunitySection = () => {
//   const [activeTab, setActiveTab] = useState('reviews');

//   const communityReviews = [
//     {
//       id: 1,
//       user: {
//         name: "Emma Thompson",
//         avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
//         location: "New York, NY",
//         fragranceCount: 23
//       },
//       fragrance: "Mediterranean Dawn",
//       rating: 5,
//       title: "My signature scent for 3 years now",
//       review: `This fragrance takes me back to my honeymoon in Santorini every single time. The bergamot opening is like sunshine on my skin, and the jasmine heart makes me feel feminine and confident. It's become such a part of my identity that people recognize it as 'my scent.'`,
//       wearTime: "8-10 hours",
//       occasion: "Daily wear, Special events",
//       season: "Spring, Summer",
//       likes: 47,
//       helpful: 23,
//       date: "2 weeks ago",
//       images: [
//         "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop"
//       ]
//     },
//     {
//       id: 2,
//       user: {
//         name: "Marcus Chen",
//         avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
//         location: "San Francisco, CA",
//         fragranceCount: 31
//       },
//       fragrance: "Midnight Oud",
//       rating: 5,
//       title: "Sophisticated and mysterious",
//       review: `As someone who collects niche fragrances, this one stands out. The oud is beautifully balanced - not overwhelming like some others I've tried. It evolves throughout the day, revealing different facets. Perfect for evening wear or when I want to make a statement.`,
//       wearTime: "12+ hours",
//       occasion: "Evening, Business meetings",
//       season: "Fall, Winter",
//       likes: 62,
//       helpful: 31,
//       date: "1 week ago",
//       images: []
//     },
//     {
//       id: 3,
//       user: {
//         name: "Sophie Laurent",
//         avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
//         location: "Paris, France",
//         fragranceCount: 18
//       },
//       fragrance: "Garden Reverie",
//       rating: 4,
//       title: "Delicate and romantic",
//       review: `This reminds me of walking through my grandmother's garden in Provence. The peony is so realistic and fresh. It's perfect for daytime and makes me feel elegant without being overpowering. Great for the office or brunch with friends.`,
//       wearTime: "5-6 hours",
//       occasion: "Daytime, Office",
//       season: "Spring, Summer",
//       likes: 34,
//       helpful: 18,
//       date: "3 days ago",
//       images: [
//         "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?w=200&h=200&fit=crop"
//       ]
//     }
//   ];

//   const fragranceCollections = [
//     {
//       id: 1,
//       user: {
//         name: "Isabella Rose",
//         avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
//         location: "London, UK"
//       },
//       title: "My Seasonal Rotation",
//       description: "Curated collection for every mood and season",
//       fragrances: [
//         {
//           name: "Mediterranean Dawn",
//           image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=150&h=150&fit=crop",
//           season: "Spring"
//         },
//         {
//           name: "Garden Reverie",
//           image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?w=150&h=150&fit=crop",
//           season: "Summer"
//         },
//         {
//           name: "Spice Route",
//           image: "https://images.pixabay.com/photo/2020/05/11/22/31/perfume-5160517_1280.jpg?w=150&h=150&fit=crop",
//           season: "Fall"
//         },
//         {
//           name: "Midnight Oud",
//           image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=150&h=150&fit=crop",
//           season: "Winter"
//         }
//       ],
//       likes: 89,
//       comments: 12,
//       date: "1 week ago"
//     },
//     {
//       id: 2,
//       user: {
//         name: "David Kim",
//         avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
//         location: "Seoul, Korea"
//       },
//       title: "Office to Evening Transition",
//       description: "Professional scents that work from day to night",
//       fragrances: [
//         {
//           name: "Garden Reverie",
//           image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?w=150&h=150&fit=crop",
//           occasion: "Office"
//         },
//         {
//           name: "Midnight Oud",
//           image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=150&h=150&fit=crop",
//           occasion: "Evening"
//         }
//       ],
//       likes: 56,
//       comments: 8,
//       date: "4 days ago"
//     }
//   ];

//   const seasonalRecommendations = [
//     {
//       season: "Winter 2025",
//       theme: "Cozy Warmth",
//       description: "Rich, enveloping scents for cold days",
//       fragrances: [
//         {
//           name: "Midnight Oud",
//           notes: "Oud, Amber, Vanilla",
//           image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=200&h=200&fit=crop"
//         },
//         {
//           name: "Spice Route",
//           notes: "Cardamom, Cinnamon, Sandalwood",
//           image: "https://images.pixabay.com/photo/2020/05/11/22/31/perfume-5160517_1280.jpg?w=200&h=200&fit=crop"
//         }
//       ],
//       curator: "Azmeera Fragrance Team",
//       likes: 234
//     },
//     {
//       season: "Spring 2025",
//       theme: "Fresh Awakening",
//       description: "Light, uplifting scents for renewal",
//       fragrances: [
//         {
//           name: "Mediterranean Dawn",
//           notes: "Bergamot, Jasmine, White Musk",
//           image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=200&h=200&fit=crop"
//         },
//         {
//           name: "Garden Reverie",
//           notes: "Peony, Green Leaves, White Tea",
//           image: "https://images.pexels.com/photos/1190829/pexels-photo-1190829.jpeg?w=200&h=200&fit=crop"
//         }
//       ],
//       curator: "Isabella Moreau",
//       likes: 187
//     }
//   ];

//   const tabs = [
//     { id: 'reviews', label: 'Community Reviews', icon: 'MessageSquare' },
//     { id: 'collections', label: 'Fragrance Collections', icon: 'Grid3X3' },
//     { id: 'seasonal', label: 'Seasonal Picks', icon: 'Calendar' }
//   ];

//   return (
//     <section className="py-20 bg-gradient-to-b from-background to-surface">
//       <div className="container mx-auto px-4">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-4">
//             Azmeera Community
//           </h2>
//           <p className="text-xl text-text-secondary font-body max-w-2xl mx-auto">
//             Join thousands of fragrance enthusiasts sharing their scent stories, collections, and discoveries
//           </p>
//         </div>

//         {/* Tab Navigation */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-card rounded-2xl p-2 shadow-luxury">
//             <div className="flex gap-2">
//               {tabs.map((tab) => (
//                 <button
//                   key={tab.id}
//                   onClick={() => setActiveTab(tab.id)}
//                   className={`flex items-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 font-body font-medium ${
//                     activeTab === tab.id
//                       ? 'bg-accent text-primary-foreground shadow-luxury'
//                       : 'text-text-secondary hover:text-primary hover:bg-accent/10'
//                   }`}
//                 >
//                   <Icon name={tab.icon} size={18} />
//                   <span className="hidden sm:inline">{tab.label}</span>
//                 </button>
//               ))}
//             </div>
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="max-w-6xl mx-auto">
          
//           {/* Community Reviews */}
//           {activeTab === 'reviews' && (
//             <div className="space-y-8">
//               {communityReviews.map((review) => (
//                 <div key={review.id} className="bg-card rounded-3xl p-8 shadow-luxury">
                  
//                   {/* Review Header */}
//                   <div className="flex items-start gap-4 mb-6">
//                     <div className="w-16 h-16 rounded-full overflow-hidden shadow-luxury flex-shrink-0">
//                       <Image
//                         src={review.user.avatar}
//                         alt={review.user.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
                    
//                     <div className="flex-1">
//                       <div className="flex items-center gap-3 mb-2">
//                         <h4 className="font-body font-semibold text-primary">
//                           {review.user.name}
//                         </h4>
//                         <div className="flex items-center gap-1">
//                           {[...Array(5)].map((_, i) => (
//                             <Icon
//                               key={i}
//                               name="Star"
//                               size={16}
//                               className={i < review.rating ? 'text-accent fill-current' : 'text-border'}
//                             />
//                           ))}
//                         </div>
//                       </div>
                      
//                       <div className="flex items-center gap-4 text-sm text-text-secondary">
//                         <div className="flex items-center gap-1">
//                           <Icon name="MapPin" size={14} />
//                           <span>{review.user.location}</span>
//                         </div>
//                         <div className="flex items-center gap-1">
//                           <Icon name="Sparkles" size={14} />
//                           <span>{review.user.fragranceCount} fragrances</span>
//                         </div>
//                         <span>{review.date}</span>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Fragrance Info */}
//                   <div className="mb-4">
//                     <h5 className="font-display text-xl font-semibold text-primary mb-1">
//                       {review.title}
//                     </h5>
//                     <p className="text-accent font-body font-medium">
//                       Reviewing: {review.fragrance}
//                     </p>
//                   </div>

//                   {/* Review Content */}
//                   <p className="text-text-secondary font-body leading-relaxed mb-6">
//                     {review.review}
//                   </p>

//                   {/* Review Images */}
//                   {review.images.length > 0 && (
//                     <div className="flex gap-3 mb-6">
//                       {review.images.map((image, index) => (
//                         <div key={index} className="w-20 h-20 rounded-xl overflow-hidden shadow-luxury">
//                           <Image
//                             src={image}
//                             alt="Review image"
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                       ))}
//                     </div>
//                   )}

//                   {/* Review Details */}
//                   <div className="grid sm:grid-cols-3 gap-4 mb-6 p-4 bg-surface/50 rounded-2xl">
//                     <div>
//                       <span className="text-sm font-body font-medium text-accent">Wear Time:</span>
//                       <p className="text-sm text-text-secondary">{review.wearTime}</p>
//                     </div>
//                     <div>
//                       <span className="text-sm font-body font-medium text-accent">Best For:</span>
//                       <p className="text-sm text-text-secondary">{review.occasion}</p>
//                     </div>
//                     <div>
//                       <span className="text-sm font-body font-medium text-accent">Season:</span>
//                       <p className="text-sm text-text-secondary">{review.season}</p>
//                     </div>
//                   </div>

//                   {/* Review Actions */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-6">
//                       <button className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300">
//                         <Icon name="Heart" size={18} />
//                         <span className="text-sm font-body">{review.likes}</span>
//                       </button>
//                       <button className="flex items-center gap-2 text-text-secondary hover:text-accent transition-colors duration-300">
//                         <Icon name="ThumbsUp" size={18} />
//                         <span className="text-sm font-body">Helpful ({review.helpful})</span>
//                       </button>
//                     </div>
                    
//                     <Link to="/individual-fragrance-experience">
//                       <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
//                         View Fragrance
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Fragrance Collections */}
//           {activeTab === 'collections' && (
//             <div className="grid md:grid-cols-2 gap-8">
//               {fragranceCollections.map((collection) => (
//                 <div key={collection.id} className="bg-card rounded-3xl p-8 shadow-luxury">
                  
//                   {/* Collection Header */}
//                   <div className="flex items-center gap-4 mb-6">
//                     <div className="w-12 h-12 rounded-full overflow-hidden shadow-luxury">
//                       <Image
//                         src={collection.user.avatar}
//                         alt={collection.user.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div>
//                       <h4 className="font-body font-semibold text-primary">
//                         {collection.user.name}
//                       </h4>
//                       <p className="text-sm text-text-secondary">{collection.user.location}</p>
//                     </div>
//                   </div>

//                   {/* Collection Info */}
//                   <div className="mb-6">
//                     <h5 className="font-display text-xl font-semibold text-primary mb-2">
//                       {collection.title}
//                     </h5>
//                     <p className="text-text-secondary font-body">
//                       {collection.description}
//                     </p>
//                   </div>

//                   {/* Fragrance Grid */}
//                   <div className="grid grid-cols-2 gap-3 mb-6">
//                     {collection.fragrances.map((fragrance, index) => (
//                       <div key={index} className="relative group">
//                         <div className="aspect-square rounded-2xl overflow-hidden shadow-luxury">
//                           <Image
//                             src={fragrance.image}
//                             alt={fragrance.name}
//                             className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
//                           />
//                         </div>
//                         <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
//                           <div>
//                             <p className="text-white font-body font-medium text-sm">
//                               {fragrance.name}
//                             </p>
//                             <p className="text-white/80 text-xs">
//                               {fragrance.season || fragrance.occasion}
//                             </p>
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Collection Actions */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-4 text-sm text-text-secondary">
//                       <div className="flex items-center gap-1">
//                         <Icon name="Heart" size={16} />
//                         <span>{collection.likes}</span>
//                       </div>
//                       <div className="flex items-center gap-1">
//                         <Icon name="MessageSquare" size={16} />
//                         <span>{collection.comments}</span>
//                       </div>
//                       <span>{collection.date}</span>
//                     </div>
                    
//                     <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent/10">
//                       View Collection
//                     </Button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}

//           {/* Seasonal Recommendations */}
//           {activeTab === 'seasonal' && (
//             <div className="space-y-8">
//               {seasonalRecommendations.map((recommendation, index) => (
//                 <div key={index} className="bg-card rounded-3xl p-8 shadow-luxury">
                  
//                   {/* Season Header */}
//                   <div className="flex items-center justify-between mb-6">
//                     <div>
//                       <h4 className="font-display text-2xl font-bold text-primary mb-1">
//                         {recommendation.season}
//                       </h4>
//                       <h5 className="font-body text-xl text-accent font-semibold mb-2">
//                         {recommendation.theme}
//                       </h5>
//                       <p className="text-text-secondary font-body">
//                         {recommendation.description}
//                       </p>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-sm text-text-secondary">Curated by</p>
//                       <p className="font-body font-medium text-primary">{recommendation.curator}</p>
//                     </div>
//                   </div>

//                   {/* Fragrance Recommendations */}
//                   <div className="grid sm:grid-cols-2 gap-6 mb-6">
//                     {recommendation.fragrances.map((fragrance, fragIndex) => (
//                       <div key={fragIndex} className="flex items-center gap-4 p-4 bg-surface/50 rounded-2xl">
//                         <div className="w-16 h-16 rounded-xl overflow-hidden shadow-luxury flex-shrink-0">
//                           <Image
//                             src={fragrance.image}
//                             alt={fragrance.name}
//                             className="w-full h-full object-cover"
//                           />
//                         </div>
//                         <div>
//                           <h6 className="font-body font-semibold text-primary mb-1">
//                             {fragrance.name}
//                           </h6>
//                           <p className="text-sm text-text-secondary">
//                             {fragrance.notes}
//                           </p>
//                         </div>
//                       </div>
//                     ))}
//                   </div>

//                   {/* Recommendation Actions */}
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-2">
//                       <Icon name="Heart" size={18} className="text-accent" />
//                       <span className="text-sm text-text-secondary font-body">
//                         {recommendation.likes} people love this collection
//                       </span>
//                     </div>
                    
//                     <Link to="/collections-gallery">
//                       <Button variant="outline" className="border-accent text-accent hover:bg-accent/10">
//                         Shop Collection
//                       </Button>
//                     </Link>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>

//         {/* Community CTA */}
//         <div className="text-center mt-16">
//           <div className="bg-gradient-to-r from-accent/10 to-secondary/10 rounded-3xl p-8 shadow-luxury">
//             <h3 className="font-display text-2xl font-bold text-primary mb-4">
//               Join Our Fragrance Community
//             </h3>
//             <p className="text-text-secondary font-body mb-6 max-w-2xl mx-auto">
//               Share your scent stories, discover new favorites, and connect with fellow fragrance enthusiasts from around the world
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//               <Link to="/personal-fragrance-profile">
//                 <Button 
//                   variant="default"
//                   className="bg-luxury-gold hover:bg-luxury-amber"
//                   iconName="User"
//                   iconPosition="right"
//                 >
//                   Create Your Profile
//                 </Button>
//               </Link>
//               <Button 
//                 variant="outline"
//                 className="border-accent text-accent hover:bg-accent/10"
//                 iconName="MessageSquare"
//                 iconPosition="left"
//               >
//                 Share Your Review
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default CommunitySection;