import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";

// 🔄 Lazy-loaded pages
const HomepageLuxuryFragranceDiscovery = lazy(() =>
  import("pages/homepage-luxury-fragrance-discovery")
);
const CollectionsGallery = lazy(() => import("pages/collections-gallery"));
const FragranceDiscoveryTool = lazy(() => import("pages/fragrance-discovery-tool"));
const IndividualFragranceExperience = lazy(() =>
  import("pages/individual-fragrance-experience")
);
const ShoppingCartCheckout = lazy(() => import("pages/shopping-cart-checkout"));
const PersonalFragranceProfile = lazy(() => import("pages/personal-fragrance-profile"));
const NotFound = lazy(() => import("pages/NotFound"));

// 🔄 Fallback loader
const Loading = () => (
  <div className="h-screen flex justify-center items-center text-xl text-gray-600">
    Loading...
  </div>
);

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <Suspense fallback={<Loading />}>
          <RouterRoutes>
            <Route path="/" element={<HomepageLuxuryFragranceDiscovery />} />
            <Route path="/homepage-luxury-fragrance-discovery" element={<HomepageLuxuryFragranceDiscovery />} />
            <Route path="/collections-gallery" element={<CollectionsGallery />} />
            <Route path="/fragrance-discovery-tool" element={<FragranceDiscoveryTool />} />
            <Route path="/individual-fragrance-experience" element={<IndividualFragranceExperience />} />
            <Route path="/shopping-cart-checkout" element={<ShoppingCartCheckout />} />
            <Route path="/personal-fragrance-profile" element={<PersonalFragranceProfile />} />
            <Route path="*" element={<NotFound />} />
          </RouterRoutes>
        </Suspense>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
