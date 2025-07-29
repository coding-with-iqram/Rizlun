// import React, { useState } from 'react';
// import Icon from '../../../components/AppIcon';
// import Image from '../../../components/AppImage';
// import Button from '../../../components/ui/Button';

// const PerfumerSpotlight = () => {
//   const [activeVideo, setActiveVideo] = useState(null);

//   const perfumers = [
//     {
//       id: 1,
//       name: "Isabella Moreau",
//       title: "Master Perfumer",
//       location: "Grasse, France",
//       experience: "25 Years",
//       specialty: "Floral & Oriental Compositions",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop",
//       signature: "Mediterranean Dawn, Garden Reverie",
//       philosophy: `"Each fragrance is a poem written in scent, where every note tells a story of emotion and memory. I believe in capturing the soul of nature's most precious moments."`,
//       videoThumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop",
//       achievements: [
//         "Prix International du Parfum 2023",
//         "Featured in Vogue\'s Top Perfumers",
//         "Creator of 50+ Award-winning Fragrances"
//       ],
//       process: "Hand-selects jasmine at dawn in Grasse fields, ensuring only the most aromatic petals make it into her compositions."
//     },
//     {
//       id: 2,
//       name: "Alexandre Chen",
//       title: "Artisan Perfumer",
//       location: "Tokyo, Japan",
//       experience: "18 Years",
//       specialty: "Woody & Spicy Blends",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop",
//       signature: "Midnight Oud, Spice Route",
//       philosophy: `"Perfumery is the art of invisible sculpture. I craft scents that evolve like a beautiful story, revealing new chapters throughout the day."`,
//       videoThumbnail: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=300&fit=crop",
//       achievements: [
//         "Tokyo Fragrance Innovation Award",
//         "Collaboration with Luxury Fashion Houses",
//         "Pioneer in Sustainable Perfumery"
//       ],
//       process: "Sources rare oud wood from sustainable forests, aging each piece for minimum 5 years to achieve perfect aromatic complexity."
//     },
//     {
//       id: 3,
//       name: "Sofia Rodriguez",
//       title: "Creative Director",
//       location: "Barcelona, Spain",
//       experience: "22 Years",
//       specialty: "Fresh & Citrus Innovations",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop",
//       signature: "Citrus Symphony, Ocean Breeze",
//       philosophy: `"I find inspiration in the Mediterranean lifestyle - the warmth of sun-kissed skin, the freshness of sea breeze, the joy of simple moments."`,
//       videoThumbnail: "https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=400&h=300&fit=crop",
//       achievements: [
//         "Spanish Perfumery Excellence Award",
//         "Sustainable Sourcing Pioneer",
//         "Mediterranean Fragrance Ambassador"
//       ],
//       process: "Collaborates directly with local citrus farmers, ensuring each bergamot and lemon is harvested at peak ripeness for maximum oil content."
//     }
//   ];

//   const [selectedPerfumer, setSelectedPerfumer] = useState(perfumers[0]);

//   const handleVideoPlay = (perfumerId) => {
//     setActiveVideo(perfumerId);
//   };

//   return (
//     <section className="py-20 bg-gradient-to-b from-card to-background">
//       <div className="container mx-auto px-4">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="font-display text-4xl lg:text-5xl font-bold text-primary mb-4">
//             Perfumer Spotlight
//           </h2>
//           <p className="text-xl text-text-secondary font-body max-w-2xl mx-auto">
//             Meet the master craftspeople behind our signature fragrances, each bringing decades of artistry and passion to every bottle
//           </p>
//         </div>

//         <div className="max-w-7xl mx-auto">
//           <div className="grid lg:grid-cols-3 gap-8 mb-12">
            
//             {/* Perfumer Cards */}
//             {perfumers.map((perfumer) => (
//               <div
//                 key={perfumer.id}
//                 onClick={() => setSelectedPerfumer(perfumer)}
//                 className={`cursor-pointer transition-all duration-300 ${
//                   selectedPerfumer.id === perfumer.id 
//                     ? 'transform scale-105' 
//                     : 'hover:transform hover:scale-102'
//                 }`}
//               >
//                 <div className={`bg-surface rounded-3xl p-6 shadow-luxury hover:shadow-luxury-lg transition-all duration-300 ${
//                   selectedPerfumer.id === perfumer.id ? 'ring-2 ring-accent' : ''
//                 }`}>
                  
//                   {/* Profile Image */}
//                   <div className="relative mb-6">
//                     <div className="w-24 h-24 mx-auto rounded-full overflow-hidden shadow-luxury">
//                       <Image
//                         src={perfumer.image}
//                         alt={perfumer.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     {selectedPerfumer.id === perfumer.id && (
//                       <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
//                         <Icon name="Check" size={16} className="text-primary-foreground" />
//                       </div>
//                     )}
//                   </div>

//                   {/* Basic Info */}
//                   <div className="text-center space-y-2">
//                     <h3 className="font-display text-xl font-bold text-primary">
//                       {perfumer.name}
//                     </h3>
//                     <p className="font-body text-accent font-medium">
//                       {perfumer.title}
//                     </p>
//                     <div className="flex items-center justify-center gap-2 text-sm text-text-secondary">
//                       <Icon name="MapPin" size={14} />
//                       <span>{perfumer.location}</span>
//                     </div>
//                   </div>

//                   {/* Quick Stats */}
//                   <div className="mt-4 pt-4 border-t border-border">
//                     <div className="flex justify-between text-sm">
//                       <div className="text-center">
//                         <p className="font-body font-semibold text-primary">{perfumer.experience}</p>
//                         <p className="text-text-secondary">Experience</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="font-body font-semibold text-primary">50+</p>
//                         <p className="text-text-secondary">Fragrances</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Detailed Spotlight */}
//           <div className="bg-surface rounded-3xl shadow-luxury-lg overflow-hidden">
//             <div className="grid lg:grid-cols-2 gap-0">
              
//               {/* Video/Image Section */}
//               <div className="relative h-96 lg:h-auto">
//                 <div className="relative w-full h-full">
//                   <Image
//                     src={selectedPerfumer.videoThumbnail}
//                     alt={`${selectedPerfumer.name} at work`}
//                     className="w-full h-full object-cover"
//                   />
                  
//                   {/* Video Overlay */}
//                   <div className="absolute inset-0 bg-primary/20 flex items-center justify-center">
//                     <button
//                       onClick={() => handleVideoPlay(selectedPerfumer.id)}
//                       className="w-20 h-20 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-luxury hover:scale-110 transition-transform duration-300 scent-trail"
//                     >
//                       <Icon name="Play" size={32} className="text-accent ml-1" />
//                     </button>
//                   </div>

//                   {/* Location Badge */}
//                   <div className="absolute top-6 left-6 bg-background/90 backdrop-blur-sm rounded-2xl px-4 py-2 shadow-luxury">
//                     <div className="flex items-center gap-2">
//                       <Icon name="MapPin" size={16} className="text-accent" />
//                       <span className="font-body font-medium text-primary text-sm">
//                         {selectedPerfumer.location}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               {/* Content Section */}
//               <div className="p-8 lg:p-12 space-y-6">
                
//                 {/* Header */}
//                 <div>
//                   <h3 className="font-display text-3xl font-bold text-primary mb-2">
//                     {selectedPerfumer.name}
//                   </h3>
//                   <p className="font-body text-xl text-accent font-medium mb-1">
//                     {selectedPerfumer.title}
//                   </p>
//                   <p className="text-text-secondary font-body">
//                     Specializing in {selectedPerfumer.specialty}
//                   </p>
//                 </div>

//                 {/* Philosophy Quote */}
//                 <blockquote className="border-l-4 border-accent pl-6 py-2">
//                   <p className="font-body text-lg text-text-secondary italic leading-relaxed">
//                     {selectedPerfumer.philosophy}
//                   </p>
//                 </blockquote>

//                 {/* Signature Fragrances */}
//                 <div>
//                   <h4 className="font-display text-lg font-semibold text-primary mb-2">
//                     Signature Creations
//                   </h4>
//                   <p className="text-text-secondary font-body">
//                     {selectedPerfumer.signature}
//                   </p>
//                 </div>

//                 {/* Craftsmanship Process */}
//                 <div>
//                   <h4 className="font-display text-lg font-semibold text-primary mb-2">
//                     Artisan Process
//                   </h4>
//                   <p className="text-text-secondary font-body leading-relaxed">
//                     {selectedPerfumer.process}
//                   </p>
//                 </div>

//                 {/* Achievements */}
//                 <div>
//                   <h4 className="font-display text-lg font-semibold text-primary mb-3">
//                     Recognition & Awards
//                   </h4>
//                   <div className="space-y-2">
//                     {selectedPerfumer.achievements.map((achievement, index) => (
//                       <div key={index} className="flex items-center gap-3">
//                         <Icon name="Award" size={16} className="text-accent flex-shrink-0" />
//                         <span className="text-text-secondary font-body text-sm">
//                           {achievement}
//                         </span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* CTA */}
//                 <div className="pt-4">
//                   <Button 
//                     variant="default"
//                     className="bg-luxury-gold hover:bg-luxury-amber"
//                     iconName="Eye"
//                     iconPosition="right"
//                   >
//                     View {selectedPerfumer.name}'s Collection
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default PerfumerSpotlight;