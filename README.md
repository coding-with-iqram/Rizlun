# Azmeera Perfume - Luxury Fragrance Discovery

A modern React-based luxury perfume website with comprehensive responsive design, featuring personalized fragrance discovery, curated collections, and an immersive scent journey experience.

## 🚀 Features

- **React 18** - React version with improved rendering and concurrent features
- **Vite** - Lightning-fast build tool and development server
- **Redux Toolkit** - State management with simplified Redux setup
- **TailwindCSS** - Utility-first CSS framework with extensive customization
- **React Router v6** - Declarative routing for React applications
- **Responsive Design** - Mobile-first design with comprehensive breakpoint system
- **Touch Interactions** - Optimized touch gestures and mobile interactions
- **Data Visualization** - Integrated D3.js and Recharts for powerful data visualization
- **Form Management** - React Hook Form for efficient form handling
- **Animation** - Framer Motion for smooth UI animations
- **Testing** - Jest and React Testing Library setup

## 📱 Responsive Design

This website is built with a **mobile-first approach** and provides an optimal experience across all devices:

### Breakpoint System
- **xs**: 475px (small phones)
- **sm**: 640px (large phones) 
- **md**: 768px (tablets)
- **lg**: 1024px (laptops)
- **xl**: 1280px (desktops)
- **2xl**: 1536px (large screens)

### Key Responsive Features
- ✅ **Mobile-First Design** - Optimized for mobile devices first
- ✅ **Touch-Friendly Interactions** - 44px minimum touch targets
- ✅ **Swipe Gestures** - Touch navigation for carousels
- ✅ **Responsive Typography** - Scaled text for all screen sizes
- ✅ **Adaptive Layouts** - Flexible grid systems
- ✅ **Performance Optimized** - Mobile-specific optimizations
- ✅ **Safe Area Support** - iOS notch and safe area handling

### Responsive Components
- **ResponsiveWrapper** - Container with responsive utilities
- **ResponsiveSection** - Responsive section layouts
- **ResponsiveGrid** - Adaptive grid systems
- **ResponsiveCard** - Responsive card components
- **ResponsiveButtonGroup** - Flexible button arrangements
- **ResponsiveText & ResponsiveHeading** - Adaptive typography

## 📋 Prerequisites

- Node.js (v14.x or higher)
- npm or yarn

## 🛠️ Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```
   
2. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## 📁 Project Structure

```
azmeera_perfume/
├── public/             # Static assets
├── src/
│   ├── components/     # Reusable UI components
│   │   ├── ui/         # Base UI components
│   │   └── ResponsiveWrapper.jsx  # Responsive utilities
│   ├── pages/          # Page components
│   │   ├── homepage-luxury-fragrance-discovery/
│   │   ├── collections-gallery/
│   │   ├── fragrance-discovery-tool/
│   │   ├── individual-fragrance-experience/
│   │   ├── personal-fragrance-profile/
│   │   └── shopping-cart-checkout/
│   ├── styles/         # Global styles and Tailwind configuration
│   ├── utils/          # Utility functions
│   ├── App.jsx         # Main application component
│   ├── Routes.jsx      # Application routes
│   └── index.jsx       # Application entry point
├── RESPONSIVE_DESIGN.md # Comprehensive responsive design guide
├── index.html          # HTML template with responsive meta tags
├── package.json        # Project dependencies and scripts
├── tailwind.config.js  # Tailwind CSS configuration
└── vite.config.js      # Vite configuration
```

## 🧩 Adding Routes

To add new routes to the application, update the `Routes.jsx` file:

```jsx
import { useRoutes } from "react-router-dom";
import HomePage from "pages/HomePage";
import AboutPage from "pages/AboutPage";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    // Add more routes as needed
  ]);

  return element;
};
```

## 🎨 Styling & Responsive Design

This project uses Tailwind CSS for styling with comprehensive responsive design:

### Responsive Utilities
```css
/* Container utilities */
.container-responsive { @apply w-full mx-auto px-4 sm:px-6 lg:px-8; }

/* Grid systems */
.grid-responsive { @apply grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4; }

/* Touch targets */
.touch-target { @apply min-h-[44px] min-w-[44px]; }

/* Safe area support */
.safe-y { 
  padding-top: env(safe-area-inset-top);
  padding-bottom: env(safe-area-inset-bottom);
}
```

### Using Responsive Components
```jsx
import { ResponsiveWrapper, ResponsiveSection, ResponsiveGrid } from '../components/ResponsiveWrapper';

// Responsive container
<ResponsiveWrapper container maxWidth="7xl" padding>
  <ResponsiveSection padding="responsive" background="surface">
    <ResponsiveGrid cols="responsive" gap="responsive">
      {/* Your content */}
    </ResponsiveGrid>
  </ResponsiveSection>
</ResponsiveWrapper>
```

### Configuration Includes:
- Forms plugin for form styling
- Typography plugin for text styling
- Aspect ratio plugin for responsive elements
- Container queries for component-specific responsive design
- Fluid typography for responsive text
- Animation utilities
- Mobile-first responsive breakpoints

## 📱 Mobile Optimization

### Performance Targets
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1
- **First Input Delay**: < 100ms

### Mobile-Specific Features
- Touch-optimized interactions
- Swipe gestures for navigation
- Reduced animations on mobile
- Optimized image loading
- iOS input zoom prevention
- Safe area support for notched devices

## 🧪 Testing Responsive Design

### Manual Testing
1. **Mobile Devices**: Test on actual mobile phones
2. **Tablets**: Test in portrait and landscape modes
3. **Desktop**: Test on various screen sizes
4. **Touch Interactions**: Verify all touch targets work
5. **Performance**: Test on slower devices

### Automated Testing
```bash
# Run tests
npm test

# Build for production
npm run build

# Preview production build
npm run serve
```

### Browser Testing
- Chrome DevTools Device Simulation
- BrowserStack for cross-device testing
- Lighthouse for performance auditing

## 📦 Deployment

Build the application for production:

```bash
npm run build
```

The build process optimizes for:
- Mobile performance
- Responsive image delivery
- Code splitting
- Bundle optimization

## 🎯 Key Pages

### Homepage
- **Hero Section**: Interactive mood selector with responsive design
- **Featured Carousel**: Touch-enabled fragrance showcase
- **Trust Indicators**: Mobile-optimized social proof

### Collections Gallery
- **Filter Sidebar**: Responsive filter interface
- **Grid Layout**: Adaptive fragrance grid
- **Mobile Navigation**: Touch-friendly navigation

### Fragrance Discovery Tool
- **Progress Indicator**: Responsive progress tracking
- **Interactive Questions**: Touch-optimized form elements
- **Results Display**: Adaptive results presentation

### Individual Fragrance Experience
- **Product Gallery**: Responsive image gallery
- **Scent Pyramid**: Mobile-optimized information display
- **Related Products**: Adaptive recommendation grid

## 🙏 Acknowledgments

- Built with [Rocket.new](https://rocket.new)
- Powered by React and Vite
- Styled with Tailwind CSS
- Responsive design best practices from industry leaders

## 📚 Documentation

For detailed information about the responsive design implementation, see:
- [Responsive Design Guide](./RESPONSIVE_DESIGN.md) - Comprehensive responsive design documentation
- [Tailwind CSS Documentation](https://tailwindcss.com/docs) - Styling framework guide
- [React Documentation](https://reactjs.org/docs) - React framework guide

---

Built with ❤️ on Rocket.new - Optimized for every device and screen size.
