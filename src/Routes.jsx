import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ErrorBoundary from './components/ErrorBoundary';
import ScrollToTop from './components/ScrollToTop';

// Lazy load pages for better performance
const Homepage = React.lazy(() => import('./pages/homepage-luxury-fragrance-discovery'));
const CollectionsGallery = React.lazy(() => import('./pages/collections-gallery'));
const FragranceDiscoveryTool = React.lazy(() => import('./pages/fragrance-discovery-tool'));
const PersonalFragranceProfile = React.lazy(() => import('./pages/personal-fragrance-profile'));
const IndividualFragranceExperience = React.lazy(() => import('./pages/individual-fragrance-experience'));
const ShoppingCartCheckout = React.lazy(() => import('./pages/shopping-cart-checkout'));
const Checkout = React.lazy(() => import('./pages/checkout'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

const AppRoutes = () => {
  return (
    <ErrorBoundary>
      <ScrollToTop />
      <Suspense fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
            <p className="text-text-secondary font-body">Loading...</p>
          </div>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/homepage-luxury-fragrance-discovery" element={<Homepage />} />
          <Route path="/collections-gallery" element={<CollectionsGallery />} />
          <Route path="/fragrance-discovery-tool" element={<FragranceDiscoveryTool />} />
          <Route path="/personal-fragrance-profile" element={<PersonalFragranceProfile />} />
          <Route path="/individual-fragrance-experience/:id?" element={<IndividualFragranceExperience />} />
          <Route path="/shopping-cart-checkout" element={<ShoppingCartCheckout />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
};

export default AppRoutes;
