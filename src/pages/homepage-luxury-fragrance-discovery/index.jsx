import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import FeaturedFragranceCarousel from './components/FeaturedFragranceCarousel';
import ScentStorySection from './components/ScentStorySection';
// import PerfumerSpotlight from './components/PerfumerSpotlight';
// import CommunitySection from './components/CommunitySection';
import TrustSection from './components/TrustSection';
import Footer from './components/Footer';

const HomepageLuxuryFragranceDiscovery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <FeaturedFragranceCarousel />
        <ScentStorySection />
        {/* <PerfumerSpotlight /> */}
        {/* <CommunitySection /> */}
        <TrustSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default HomepageLuxuryFragranceDiscovery;