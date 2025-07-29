import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../../components/ui/Header';
import Button from '../../components/ui/Button';
import Select from '../../components/ui/Select';
import Icon from '../../components/AppIcon';
import CollectionHero from './components/CollectionHero';
import CollectionCard from './components/CollectionCard';
import FragranceCard from './components/FragranceCard';
import FilterSidebar from './components/FilterSidebar';
import CuratorStory from './components/CuratorStory';
import CollectionStats from './components/CollectionStats';
import SampleSetBuilder from './components/SampleSetBuilder';

const CollectionsGallery = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [selectedCollection, setSelectedCollection] = useState(null);
  const [filteredFragrances, setFilteredFragrances] = useState([]);
  const [selectedSamples, setSelectedSamples] = useState([]);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [sortBy, setSortBy] = useState('featured');
  const [filters, setFilters] = useState({
    priceRange: '',
    intensity: [],
    seasons: [],
    families: [],
    inStockOnly: false,
    limitedEdition: false,
    newArrivals: false
  });

  // Mock collections data
  const collections = [
    {
      id: 'midnight-mysteries',
      name: 'Midnight Mysteries',
      category: 'Evening Collection',
      description: `Embrace the allure of darkness with our most enigmatic fragrances. Each scent in this collection tells a story of moonlit encounters and whispered secrets.`,
      shortDescription: `Deep, sensual evening scents that capture the mystery and allure of midnight hours.`,
      heroImage: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=600&fit=crop',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=300&fit=crop',
      fragranceCount: 12,
      priceRange: { min: 85, max: 280 },
      isLimited: true,
      curator: {
        name: 'Isabella Moreau',
        title: 'Master Perfumer & Night Scent Specialist',
        image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop',
        story: `The night has always been my muse. In darkness, our senses heighten, and fragrance becomes more than scent—it becomes emotion, memory, desire. Each fragrance in Midnight Mysteries was crafted during the witching hours, when inspiration flows like shadows across moonlit gardens.`,
        expertise: ['Oriental Fragrances', 'Amber Compositions', 'Night Blooming Florals'],
        experience: 18
      },
      stats: {
        totalFragrances: 12,
        avgRating: 4.7,
        priceRange: { min: 85, max: 280 },
        avgLongevity: 8
      }
    },
    {
      id: 'garden-awakening',
      name: 'Garden Awakening',
      category: 'Fresh Collection',
      description: `Experience the first breath of spring with our botanical masterpieces. These fragrances capture the essence of dewdrops on petals and the gentle warmth of morning sun.`,
      shortDescription: `Fresh, botanical fragrances that celebrate the beauty and vitality of nature's awakening.`,heroImage: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=1200&h=600&fit=crop',image: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=300&fit=crop',
      fragranceCount: 15,
      priceRange: { min: 65, max: 180 },
      isLimited: false,
      curator: {
        name: 'Marcus Chen',title: 'Botanical Perfumer & Green Scent Artisan',image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
        story: `My laboratory is a garden, and my inspiration comes from the first light of dawn. Garden Awakening represents my lifelong passion for capturing the pure essence of nature—from the crisp morning air to the soft whisper of leaves in the breeze.`,
        expertise: ['Green Fragrances', 'Floral Compositions', 'Natural Extracts'],
        experience: 15
      },
      stats: {
        totalFragrances: 15,
        avgRating: 4.5,
        priceRange: { min: 65, max: 180 },
        avgLongevity: 6
      }
    },
    {
      id: 'spice-route-legends',name: 'Spice Route Legends',category: 'Oriental Collection',
      description: `Journey through ancient trade routes with our most exotic compositions. These warm, spiced fragrances tell tales of distant lands and forgotten treasures.`,
      shortDescription: `Warm, exotic compositions inspired by ancient spice trade routes and distant cultures.`,
      heroImage: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&h=600&fit=crop',image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop',
      fragranceCount: 10,
      priceRange: { min: 95, max: 320 },
      isLimited: true,
      curator: {
        name: 'Amara Patel',title: 'Oriental Fragrance Master & Spice Specialist',image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
        story: `Born in Mumbai and trained in Grasse, I bridge two worlds of perfumery. Spice Route Legends is my homage to the merchants who carried precious aromatics across continents, creating connections through scent that transcended language and culture.`,
        expertise: ['Spice Blending', 'Oriental Bases', 'Cultural Fragrances'],
        experience: 22
      },
      stats: {
        totalFragrances: 10,
        avgRating: 4.8,
        priceRange: { min: 95, max: 320 },
        avgLongevity: 10
      }
    },
    {
      id: 'modern-classics',name: 'Modern Classics',category: 'Contemporary Collection',
      description: `Timeless elegance meets contemporary sophistication. These fragrances reinterpret classic compositions for the modern connoisseur.`,
      shortDescription: `Contemporary interpretations of timeless scents, perfect for the modern fragrance enthusiast.`,
      heroImage: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&h=600&fit=crop',image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=400&h=300&fit=crop',
      fragranceCount: 18,
      priceRange: { min: 75, max: 220 },
      isLimited: false,
      curator: {
        name: 'Jean-Pierre Dubois',title: 'Contemporary Perfumer & Classic Reinterpretation Expert',image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
        story: `Classics become classics for a reason—they speak to something eternal in the human spirit. My mission with Modern Classics is to honor these timeless compositions while making them relevant for today's sophisticated wearer.`,
        expertise: ['Classic Revivals', 'Modern Techniques', 'Timeless Compositions'],
        experience: 25
      },
      stats: {
        totalFragrances: 18,
        avgRating: 4.6,
        priceRange: { min: 75, max: 220 },
        avgLongevity: 7
      }
    }
  ];

  // Mock fragrances data
  const allFragrances = [
    // Midnight Mysteries
    {
      id: 'mm-001',
      collectionId: 'midnight-mysteries',
      name: 'Velvet Shadows',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop',
      price: 165,
      originalPrice: null,
      rating: 4.8,
      reviews: 124,
      topNotes: ['Black Currant', 'Pink Pepper', 'Bergamot'],
      isNew: false,
      inStock: true,
      intensity: 'strong',
      season: ['autumn', 'winter'],
      family: 'oriental'
    },
    {
      id: 'mm-002',
      collectionId: 'midnight-mysteries',
      name: 'Obsidian Dreams',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&h=400&fit=crop',
      price: 195,
      originalPrice: null,
      rating: 4.7,
      reviews: 89,
      topNotes: ['Oud', 'Rose', 'Saffron'],
      isNew: true,
      inStock: true,
      intensity: 'strong',
      season: ['winter'],
      family: 'oriental'
    },
    {
      id: 'mm-003',
      collectionId: 'midnight-mysteries',
      name: 'Lunar Whispers',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=300&h=400&fit=crop',
      price: 145,
      originalPrice: 165,
      rating: 4.6,
      reviews: 156,
      topNotes: ['Jasmine', 'Vanilla', 'Sandalwood'],
      isNew: false,
      inStock: true,
      intensity: 'moderate',
      season: ['autumn', 'winter'],
      family: 'floral'
    },
    // Garden Awakening
    {
      id: 'ga-001',
      collectionId: 'garden-awakening',
      name: 'Morning Dew',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59d75?w=300&h=400&fit=crop',
      price: 85,
      originalPrice: null,
      rating: 4.5,
      reviews: 203,
      topNotes: ['Green Leaves', 'Lily of Valley', 'Cucumber'],
      isNew: false,
      inStock: true,
      intensity: 'light',
      season: ['spring', 'summer'],
      family: 'fresh'
    },
    {
      id: 'ga-002',
      collectionId: 'garden-awakening',
      name: 'Petal Dance',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=300&h=400&fit=crop',
      price: 125,
      originalPrice: null,
      rating: 4.7,
      reviews: 167,
      topNotes: ['Peony', 'Freesia', 'Green Mandarin'],
      isNew: true,
      inStock: true,
      intensity: 'moderate',
      season: ['spring'],
      family: 'floral'
    },
    {
      id: 'ga-003',
      collectionId: 'garden-awakening',
      name: 'Citrus Bloom',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=300&h=400&fit=crop',
      price: 95,
      originalPrice: null,
      rating: 4.4,
      reviews: 134,
      topNotes: ['Lemon', 'Orange Blossom', 'Mint'],
      isNew: false,
      inStock: true,
      intensity: 'light',
      season: ['spring', 'summer'],
      family: 'citrus'
    },
    // Spice Route Legends
    {
      id: 'srl-001',
      collectionId: 'spice-route-legends',
      name: 'Amber Caravan',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop',
      price: 225,
      originalPrice: null,
      rating: 4.9,
      reviews: 78,
      topNotes: ['Cardamom', 'Amber', 'Incense'],
      isNew: false,
      inStock: true,
      intensity: 'strong',
      season: ['autumn', 'winter'],
      family: 'spicy'
    },
    {
      id: 'srl-002',
      collectionId: 'spice-route-legends',
      name: 'Silk Road',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=300&h=400&fit=crop',
      price: 185,
      originalPrice: null,
      rating: 4.8,
      reviews: 92,
      topNotes: ['Cinnamon', 'Rose', 'Patchouli'],
      isNew: true,
      inStock: false,
      intensity: 'strong',
      season: ['winter'],
      family: 'spicy'
    },
    // Modern Classics
    {
      id: 'mc-001',
      collectionId: 'modern-classics',
      name: 'Urban Elegance',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=300&h=400&fit=crop',
      price: 135,
      originalPrice: null,
      rating: 4.6,
      reviews: 245,
      topNotes: ['Bergamot', 'Lavender', 'Cedar'],
      isNew: false,
      inStock: true,
      intensity: 'moderate',
      season: ['spring', 'autumn'],
      family: 'woody'
    },
    {
      id: 'mc-002',
      collectionId: 'modern-classics',
      name: 'Timeless Grace',
      brand: 'Azmeera',
      image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300&h=400&fit=crop',
      price: 155,
      originalPrice: null,
      rating: 4.7,
      reviews: 189,
      topNotes: ['White Tea', 'Iris', 'Musk'],
      isNew: false,
      inStock: true,
      intensity: 'light',
      season: ['spring', 'summer'],
      family: 'floral'
    }
  ];

  const sortOptions = [
    { value: 'featured', label: 'Featured' },
    { value: 'price-low', label: 'Price: Low to High' },
    { value: 'price-high', label: 'Price: High to Low' },
    { value: 'rating', label: 'Highest Rated' },
    { value: 'newest', label: 'Newest First' }
  ];

  // Get collection from URL params
  useEffect(() => {
    const collectionId = searchParams.get('collection');
    if (collectionId) {
      const collection = collections.find(c => c.id === collectionId);
      setSelectedCollection(collection);
    }
  }, [searchParams]);

  // Filter and sort fragrances
  useEffect(() => {
    let filtered = selectedCollection 
      ? allFragrances.filter(f => f.collectionId === selectedCollection.id)
      : allFragrances;

    // Apply filters
    if (filters.priceRange) {
      const [min, max] = filters.priceRange.includes('+') 
        ? [parseInt(filters.priceRange.replace('+', '')), Infinity]
        : filters.priceRange.split('-').map(Number);
      filtered = filtered.filter(f => f.price >= min && f.price <= max);
    }

    if (filters.intensity.length > 0) {
      filtered = filtered.filter(f => filters.intensity.includes(f.intensity));
    }

    if (filters.seasons.length > 0) {
      filtered = filtered.filter(f => 
        f.season.some(s => filters.seasons.includes(s))
      );
    }

    if (filters.families.length > 0) {
      filtered = filtered.filter(f => filters.families.includes(f.family));
    }

    if (filters.inStockOnly) {
      filtered = filtered.filter(f => f.inStock);
    }

    if (filters.limitedEdition) {
      const limitedCollections = collections.filter(c => c.isLimited).map(c => c.id);
      filtered = filtered.filter(f => limitedCollections.includes(f.collectionId));
    }

    if (filters.newArrivals) {
      filtered = filtered.filter(f => f.isNew);
    }

    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        filtered.sort((a, b) => b.isNew - a.isNew);
        break;
      default:
        // Featured - keep original order
        break;
    }

    setFilteredFragrances(filtered);
  }, [selectedCollection, filters, sortBy]);

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const handleClearFilters = () => {
    setFilters({
      priceRange: '',
      intensity: [],
      seasons: [],
      families: [],
      inStockOnly: false,
      limitedEdition: false,
      newArrivals: false
    });
  };

  const handleAddToSample = (fragrance) => {
    if (selectedSamples.length < 6 && !selectedSamples.find(s => s.id === fragrance.id)) {
      setSelectedSamples(prev => [...prev, fragrance]);
    }
  };

  const handleRemoveSample = (fragranceId) => {
    setSelectedSamples(prev => prev.filter(s => s.id !== fragranceId));
  };

  const handleSampleCheckout = () => {
    // Navigate to checkout with sample set
    console.log('Checkout sample set:', selectedSamples);
  };

  const handleBackToCollections = () => {
    setSelectedCollection(null);
    setSearchParams({});
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {selectedCollection ? (
          // Individual Collection View
          <div>
            <CollectionHero 
              collection={selectedCollection}
              onExploreClick={() => {
                document.getElementById('fragrances').scrollIntoView({ 
                  behavior: 'smooth' 
                });
              }}
            />
            
            <div className="container mx-auto px-4 lg:px-8">
              {/* Breadcrumb */}
              <div className="flex items-center space-x-2 text-sm font-body text-text-secondary mb-8">
                <button 
                  onClick={handleBackToCollections}
                  className="hover:text-accent transition-colors duration-200"
                >
                  Collections
                </button>
                <Icon name="ChevronRight" size={14} />
                <span className="text-primary">{selectedCollection.name}</span>
              </div>

              <CuratorStory curator={selectedCollection.curator} />
              <CollectionStats stats={selectedCollection.stats} />

              {/* Fragrances Section */}
              <div id="fragrances" className="flex gap-8">
                {/* Filter Sidebar */}
                <div className="hidden lg:block w-64 flex-shrink-0">
                  <FilterSidebar
                    filters={filters}
                    onFilterChange={handleFilterChange}
                    onClearFilters={handleClearFilters}
                    isOpen={false}
                    onClose={() => {}}
                  />
                </div>

                {/* Main Content */}
                <div className="flex-1">
                  {/* Mobile Filter & Sort */}
                  <div className="flex items-center justify-between mb-6 lg:hidden">
                    <Button
                      variant="outline"
                      onClick={() => setIsFilterOpen(true)}
                      iconName="Filter"
                      iconSize={16}
                    >
                      Filters
                    </Button>
                    
                    <Select
                      options={sortOptions}
                      value={sortBy}
                      onChange={setSortBy}
                      className="w-48"
                    />
                  </div>

                  {/* Desktop Sort */}
                  <div className="hidden lg:flex items-center justify-between mb-6">
                    <h2 className="font-display font-bold text-2xl text-primary">
                      {selectedCollection.name} Fragrances
                      <span className="text-text-secondary font-body font-normal text-base ml-2">
                        ({filteredFragrances.length} fragrances)
                      </span>
                    </h2>
                    
                    <Select
                      options={sortOptions}
                      value={sortBy}
                      onChange={setSortBy}
                      className="w-48"
                    />
                  </div>

                  {/* Fragrances Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredFragrances.map((fragrance) => (
                      <FragranceCard
                        key={fragrance.id}
                        fragrance={fragrance}
                        onAddToSample={handleAddToSample}
                      />
                    ))}
                  </div>

                  {filteredFragrances.length === 0 && (
                    <div className="text-center py-12">
                      <Icon name="Search" size={48} className="text-text-secondary mx-auto mb-4" />
                      <h3 className="font-display font-bold text-xl text-primary mb-2">
                        No fragrances found
                      </h3>
                      <p className="text-text-secondary font-body mb-4">
                        Try adjusting your filters to see more results.
                      </p>
                      <Button
                        variant="outline"
                        onClick={handleClearFilters}
                      >
                        Clear Filters
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Mobile Filter Sidebar */}
            <FilterSidebar
              filters={filters}
              onFilterChange={handleFilterChange}
              onClearFilters={handleClearFilters}
              isOpen={isFilterOpen}
              onClose={() => setIsFilterOpen(false)}
            />
          </div>
        ) : (
          // Collections Overview
          <div className="container mx-auto px-4 lg:px-8 py-12">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="font-display font-bold text-4xl lg:text-6xl text-primary mb-6 breathing-text">
                Curated Collections
              </h1>
              <p className="font-body text-lg lg:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
                Discover our carefully curated fragrance collections, each telling a unique story through scent. 
                From mysterious evening compositions to fresh botanical awakening, find your perfect olfactory journey.
              </p>
            </div>

            {/* Collections Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {collections.map((collection) => (
                <CollectionCard
                  key={collection.id}
                  collection={collection}
                />
              ))}
            </div>

            {/* Featured Section */}
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-luxury text-center">
              <div className="max-w-2xl mx-auto">
                <Icon name="Sparkles" size={48} className="text-accent mx-auto mb-6" />
                <h2 className="font-display font-bold text-3xl text-primary mb-4">
                  Can't Decide?
                </h2>
                <p className="font-body text-text-secondary mb-8 leading-relaxed">
                  Let our fragrance experts guide you to your perfect scent match with our personalized discovery tool.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="bg-luxury-gold hover:bg-luxury-amber"
                  iconName="Compass"
                  iconSize={20}
                >
                  Start Fragrance Discovery
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Sample Set Builder */}
        <SampleSetBuilder
          selectedSamples={selectedSamples}
          onRemoveSample={handleRemoveSample}
          onCheckout={handleSampleCheckout}
        />
      </main>
    </div>
  );
};

export default CollectionsGallery;