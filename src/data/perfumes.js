// Comprehensive Perfume Database for Rizlun

export const scentFamilies = {
  FLORAL: 'Floral',
  WOODY: 'Woody',
  CITRUS: 'Citrus',
  ORIENTAL: 'Oriental',
  FRESH: 'Fresh',
  FRUITY: 'Fruity',
  AROMATIC: 'Aromatic',
  AQUATIC: 'Aquatic'
};

export const intensityLevels = {
  LIGHT: 'Light',
  MODERATE: 'Moderate',
  STRONG: 'Strong',
  INTENSE: 'Intense'
};

export const longevityLevels = {
  SHORT: 'Short (2-4 hours)',
  MODERATE: 'Moderate (4-6 hours)',
  LONG: 'Long (6-8 hours)',
  VERY_LONG: 'Very Long (8+ hours)'
};

export const sizes = [
  { value: '30ml', label: '30ml', price: 0 },
  { value: '50ml', label: '50ml', price: 25 },
  { value: '100ml', label: '100ml', price: 45 },
  { value: '150ml', label: '150ml', price: 70 }
];

export const categories = {
  FEATURED: 'Featured',
  NEW_ARRIVALS: 'New Arrivals',
  LIMITED_EDITION: 'Limited Edition',
  BEST_SELLERS: 'Best Sellers',
  SIGNATURE: 'Signature Collection',
  SEASONAL: 'Seasonal'
};

export const perfumes = [
  {
    id: 'luxury-rose-oud',
    name: 'Luxury Rose Oud',
    brand: 'Rizlun Signature',
    description: 'An exquisite blend of Bulgarian rose and premium oud, creating a sophisticated and luxurious fragrance that embodies elegance and mystery.',
    longDescription: 'Luxury Rose Oud is a masterpiece that captures the essence of timeless elegance. The fragrance opens with the delicate sweetness of Bulgarian rose petals, immediately followed by the rich, woody depths of premium oud. This sophisticated composition evolves beautifully on the skin, revealing layers of complexity that speak to the refined taste of its wearer.',
    price: 120,
    originalPrice: 150,
    discount: 20,
    rating: 4.8,
    reviewCount: 247,
    category: [categories.FEATURED, categories.SIGNATURE],
    scentFamily: scentFamilies.ORIENTAL,
    intensity: intensityLevels.STRONG,
    longevity: longevityLevels.VERY_LONG,
    images: [
      'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500',
      'https://images.unsplash.com/photo-1563170351-be82bc888aa4?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=300',
    scentNotes: {
      top: ['Bulgarian Rose', 'Pink Pepper', 'Bergamot'],
      heart: ['Damask Rose', 'Jasmine', 'Geranium'],
      base: ['Oud', 'Sandalwood', 'Amber', 'Musk']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Benzyl Alcohol', 'Citronellol', 'Geraniol'],
    suitableFor: ['Evening', 'Special Occasions', 'Date Night'],
    season: ['Fall', 'Winter'],
    gender: 'Unisex',
    inStock: true,
    stockCount: 15,
    isNew: false,
    isFeatured: true,
    isBestSeller: true,
    tags: ['luxury', 'oud', 'rose', 'oriental', 'premium'],
    story: 'Inspired by the ancient trade routes where precious roses met exotic oud, this fragrance tells a story of cultural fusion and timeless beauty.'
  },
  {
    id: 'citrus-morning-breeze',
    name: 'Citrus Morning Breeze',
    brand: 'Rizlun Fresh',
    description: 'A vibrant and energizing citrus blend perfect for starting your day with confidence and freshness.',
    longDescription: 'Citrus Morning Breeze captures the invigorating essence of a perfect sunrise. This refreshing composition features zesty bergamot and sweet orange that awakens the senses, while subtle floral notes add depth and sophistication. Perfect for the modern individual who embraces each day with enthusiasm.',
    price: 85,
    originalPrice: 95,
    discount: 11,
    rating: 4.6,
    reviewCount: 189,
    category: [categories.NEW_ARRIVALS, categories.BEST_SELLERS],
    scentFamily: scentFamilies.CITRUS,
    intensity: intensityLevels.LIGHT,
    longevity: longevityLevels.MODERATE,
    images: [
      'https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=500',
      'https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=500',
      'https://images.unsplash.com/photo-1549375463-aea5e8e03639?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1588405748880-12d1d2a59db9?w=300',
    scentNotes: {
      top: ['Bergamot', 'Lemon', 'Orange', 'Grapefruit'],
      heart: ['Neroli', 'Petitgrain', 'Lavender'],
      base: ['White Musk', 'Cedar', 'Vetiver']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Limonene', 'Linalool', 'Citral'],
    suitableFor: ['Daytime', 'Office', 'Casual'],
    season: ['Spring', 'Summer'],
    gender: 'Unisex',
    inStock: true,
    stockCount: 32,
    isNew: true,
    isFeatured: false,
    isBestSeller: true,
    tags: ['citrus', 'fresh', 'energizing', 'daytime', 'office'],
    story: 'Inspired by Mediterranean mornings where the sun kisses citrus groves, awakening the world with pure, radiant energy.'
  },
  {
    id: 'midnight-jasmine',
    name: 'Midnight Jasmine',
    brand: 'Rizlun Noir',
    description: 'A sensual and mysterious floral fragrance that blooms in the darkness, perfect for evening elegance.',
    longDescription: 'Midnight Jasmine is an intoxicating journey through a moonlit garden where jasmine flowers release their most potent fragrance. This sophisticated composition balances the heady sweetness of night-blooming jasmine with mysterious woody undertones, creating an aura of seductive elegance.',
    price: 110,
    originalPrice: 130,
    discount: 15,
    rating: 4.9,
    reviewCount: 156,
    category: [categories.LIMITED_EDITION, categories.SIGNATURE],
    scentFamily: scentFamilies.FLORAL,
    intensity: intensityLevels.INTENSE,
    longevity: longevityLevels.LONG,
    images: [
      'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=500',
      'https://images.unsplash.com/photo-1614794048480-d71329a3a2cb?w=500',
      'https://images.unsplash.com/photo-1571875257669-e7d6d1d17a4f?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1557170334-a9632e77c6e4?w=300',
    scentNotes: {
      top: ['Black Currant', 'Pink Pepper'],
      heart: ['Jasmine Sambac', 'Tuberose', 'Orange Blossom'],
      base: ['Patchouli', 'Vanilla', 'Benzoin', 'White Musk']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Benzyl Salicylate', 'Linalool', 'Hydroxycitronellal'],
    suitableFor: ['Evening', 'Romantic', 'Special Events'],
    season: ['All Seasons'],
    gender: 'Feminine',
    inStock: true,
    stockCount: 8,
    isNew: false,
    isFeatured: true,
    isBestSeller: false,
    tags: ['jasmine', 'floral', 'evening', 'sensual', 'limited'],
    story: 'Capturing the mystique of jasmine that blooms only under starlight, this fragrance embodies the power of feminine allure.'
  },
  {
    id: 'ocean-escape',
    name: 'Ocean Escape',
    brand: 'Rizlun Aqua',
    description: 'Dive into the refreshing embrace of ocean waves with this aquatic masterpiece that transports you to pristine shores.',
    longDescription: 'Ocean Escape is a revolutionary aquatic fragrance that captures the pure essence of crystal-clear ocean waters. The composition features innovative marine accords combined with fresh citrus and subtle woods, creating a scent that is both invigorating and sophisticated.',
    price: 95,
    originalPrice: 105,
    discount: 10,
    rating: 4.5,
    reviewCount: 203,
    category: [categories.NEW_ARRIVALS, categories.SEASONAL],
    scentFamily: scentFamilies.AQUATIC,
    intensity: intensityLevels.MODERATE,
    longevity: longevityLevels.MODERATE,
    images: [
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=500',
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
      'https://images.unsplash.com/photo-1557170334-e8f5a4d68f57?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=300',
    scentNotes: {
      top: ['Sea Salt', 'Lemon', 'Mint'],
      heart: ['Marine Accord', 'Lotus', 'Cyclamen'],
      base: ['Driftwood', 'Ambergris', 'Musk']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Limonene', 'Linalool', 'Geraniol'],
    suitableFor: ['Daytime', 'Beach', 'Vacation'],
    season: ['Spring', 'Summer'],
    gender: 'Unisex',
    inStock: true,
    stockCount: 25,
    isNew: true,
    isFeatured: false,
    isBestSeller: false,
    tags: ['aquatic', 'fresh', 'marine', 'summer', 'vacation'],
    story: 'Born from the endless dance between wind and waves, this fragrance captures the freedom of endless horizons.'
  },
  {
    id: 'amber-woods',
    name: 'Amber Woods',
    brand: 'Rizlun Heritage',
    description: 'A warm and sophisticated woody fragrance that embodies strength and refinement with rich amber undertones.',
    longDescription: 'Amber Woods is a testament to craftsmanship and tradition. This distinguished fragrance combines the warmth of amber with the nobility of precious woods, creating a scent that speaks to confidence and sophistication. Each note has been carefully selected to create a harmonious blend that evolves beautifully throughout the day.',
    price: 135,
    originalPrice: 155,
    discount: 13,
    rating: 4.7,
    reviewCount: 178,
    category: [categories.SIGNATURE, categories.BEST_SELLERS],
    scentFamily: scentFamilies.WOODY,
    intensity: intensityLevels.STRONG,
    longevity: longevityLevels.VERY_LONG,
    images: [
      'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=500',
      'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=500',
      'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=300',
    scentNotes: {
      top: ['Cardamom', 'Ginger', 'Bergamot'],
      heart: ['Sandalwood', 'Cedar', 'Cypriol'],
      base: ['Amber', 'Vetiver', 'Tonka Bean', 'Vanilla']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Coumarin', 'Eugenol', 'Limonene'],
    suitableFor: ['Office', 'Evening', 'Formal Events'],
    season: ['Fall', 'Winter'],
    gender: 'Masculine',
    inStock: true,
    stockCount: 12,
    isNew: false,
    isFeatured: true,
    isBestSeller: true,
    tags: ['woody', 'amber', 'masculine', 'sophisticated', 'warm'],
    story: 'Inspired by ancient amber trade routes, this fragrance represents the journey of precious woods across continents.'
  },
  {
    id: 'lavender-dreams',
    name: 'Lavender Dreams',
    brand: 'Rizlun Serenity',
    description: 'A calming and soothing lavender composition that brings peace and tranquility to your daily routine.',
    longDescription: 'Lavender Dreams offers a modern interpretation of the classic lavender fragrance. This serene composition balances the therapeutic qualities of French lavender with contemporary aromatic notes, creating a scent that is both calming and surprisingly sophisticated.',
    price: 75,
    originalPrice: 85,
    discount: 12,
    rating: 4.4,
    reviewCount: 134,
    category: [categories.NEW_ARRIVALS],
    scentFamily: scentFamilies.AROMATIC,
    intensity: intensityLevels.LIGHT,
    longevity: longevityLevels.MODERATE,
    images: [
      'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=500',
      'https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=500',
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=300',
    scentNotes: {
      top: ['Lavender', 'Lemon', 'Rosemary'],
      heart: ['Sage', 'Violet Leaf', 'Geranium'],
      base: ['Musk', 'Sandalwood', 'Ambroxan']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Linalool', 'Limonene', 'Geraniol'],
    suitableFor: ['Relaxation', 'Bedtime', 'Meditation'],
    season: ['All Seasons'],
    gender: 'Unisex',
    inStock: true,
    stockCount: 28,
    isNew: true,
    isFeatured: false,
    isBestSeller: false,
    tags: ['lavender', 'calming', 'aromatic', 'relaxing', 'wellness'],
    story: 'Inspired by twilight walks through Provence lavender fields, where serenity meets sophistication.'
  },
  {
    id: 'spiced-vanilla',
    name: 'Spiced Vanilla',
    brand: 'Rizlun Gourmand',
    description: 'A warm and inviting gourmand fragrance that combines exotic spices with creamy vanilla for an irresistible allure.',
    longDescription: 'Spiced Vanilla is a gourmand masterpiece that tantalizes the senses with its complex interplay of sweet and spicy notes. This luxurious fragrance opens with exotic spices before revealing a heart of creamy vanilla, creating an addictive scent that is both comforting and seductive.',
    price: 105,
    originalPrice: 120,
    discount: 13,
    rating: 4.8,
    reviewCount: 167,
    category: [categories.LIMITED_EDITION, categories.FEATURED],
    scentFamily: scentFamilies.ORIENTAL,
    intensity: intensityLevels.STRONG,
    longevity: longevityLevels.LONG,
    images: [
      'https://images.unsplash.com/photo-1587556930511-ad0c9d17a503?w=500',
      'https://images.unsplash.com/photo-1614282526460-9b9ad7d87a73?w=500',
      'https://images.unsplash.com/photo-1592328566137-b6fd50080d8e?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1587556930511-ad0c9d17a503?w=300',
    scentNotes: {
      top: ['Cinnamon', 'Nutmeg', 'Pink Pepper'],
      heart: ['Vanilla', 'Orchid', 'Plum'],
      base: ['Benzoin', 'Labdanum', 'Patchouli', 'Musk']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Coumarin', 'Vanillin', 'Cinnamal'],
    suitableFor: ['Evening', 'Date Night', 'Cozy Moments'],
    season: ['Fall', 'Winter'],
    gender: 'Unisex',
    inStock: true,
    stockCount: 19,
    isNew: false,
    isFeatured: true,
    isBestSeller: false,
    tags: ['vanilla', 'spices', 'gourmand', 'warm', 'seductive'],
    story: 'Born from ancient spice markets where vanilla pods met exotic spices, creating olfactory magic.'
  },
  {
    id: 'white-tea-blossom',
    name: 'White Tea Blossom',
    brand: 'Rizlun Zen',
    description: 'A delicate and refined fragrance inspired by the purity of white tea and spring blossoms.',
    longDescription: 'White Tea Blossom captures the essence of tranquil moments and mindful living. This elegant composition features the clean, subtle sweetness of white tea enhanced by delicate spring blossoms, creating a fragrance that is both sophisticated and peacefully grounding.',
    price: 90,
    originalPrice: 100,
    discount: 10,
    rating: 4.6,
    reviewCount: 145,
    category: [categories.NEW_ARRIVALS],
    scentFamily: scentFamilies.FRESH,
    intensity: intensityLevels.LIGHT,
    longevity: longevityLevels.MODERATE,
    images: [
      'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=500',
      'https://images.unsplash.com/photo-1595949422066-6b6930cea251?w=500',
      'https://images.unsplash.com/photo-1572375992501-4b0892d50c69?w=500'
    ],
    thumbnail: 'https://images.unsplash.com/photo-1528740561666-dc2479dc08ab?w=300',
    scentNotes: {
      top: ['White Tea', 'Bergamot', 'Mandarin'],
      heart: ['Peony', 'Lily of the Valley', 'Freesia'],
      base: ['White Musk', 'Cedar', 'Soft Amber']
    },
    ingredients: ['Alcohol Denat.', 'Parfum', 'Aqua', 'Linalool', 'Limonene', 'Hydroxycitronellal'],
    suitableFor: ['Daytime', 'Office', 'Wellness'],
    season: ['Spring', 'Summer'],
    gender: 'Unisex',
    inStock: true,
    stockCount: 22,
    isNew: true,
    isFeatured: false,
    isBestSeller: false,
    tags: ['white tea', 'fresh', 'delicate', 'zen', 'wellness'],
    story: 'Inspired by Japanese tea ceremonies where simplicity meets profound beauty in every moment.'
  }
];

// Helper functions
export const getPerfumeById = (id) => perfumes.find(perfume => perfume.id === id);

export const getPerfumesByCategory = (category) => 
  perfumes.filter(perfume => perfume.category.includes(category));

export const getPerfumesByScentFamily = (scentFamily) =>
  perfumes.filter(perfume => perfume.scentFamily === scentFamily);

export const getFeaturedPerfumes = () => perfumes.filter(perfume => perfume.isFeatured);

export const getBestSellers = () => perfumes.filter(perfume => perfume.isBestSeller);

export const getNewArrivals = () => perfumes.filter(perfume => perfume.isNew);

export const getAvailablePerfumes = () => perfumes.filter(perfume => perfume.inStock);

export const searchPerfumes = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return perfumes.filter(perfume =>
    perfume.name.toLowerCase().includes(lowercaseQuery) ||
    perfume.brand.toLowerCase().includes(lowercaseQuery) ||
    perfume.description.toLowerCase().includes(lowercaseQuery) ||
    perfume.tags.some(tag => tag.includes(lowercaseQuery)) ||
    perfume.scentNotes.top.some(note => note.toLowerCase().includes(lowercaseQuery)) ||
    perfume.scentNotes.heart.some(note => note.toLowerCase().includes(lowercaseQuery)) ||
    perfume.scentNotes.base.some(note => note.toLowerCase().includes(lowercaseQuery))
  );
};

export const filterPerfumes = (filters) => {
  let filtered = [...perfumes];

  if (filters.scentFamily && filters.scentFamily.length > 0) {
    filtered = filtered.filter(perfume => filters.scentFamily.includes(perfume.scentFamily));
  }

  if (filters.intensity && filters.intensity.length > 0) {
    filtered = filtered.filter(perfume => filters.intensity.includes(perfume.intensity));
  }

  if (filters.priceRange) {
    filtered = filtered.filter(perfume => 
      perfume.price >= filters.priceRange.min && perfume.price <= filters.priceRange.max
    );
  }

  if (filters.gender && filters.gender.length > 0) {
    filtered = filtered.filter(perfume => 
      filters.gender.includes(perfume.gender) || filters.gender.includes('Unisex')
    );
  }

  if (filters.inStock) {
    filtered = filtered.filter(perfume => perfume.inStock);
  }

  return filtered;
};

export const getRecommendedPerfumes = (basePerfumeId, count = 4) => {
  const basePerfume = getPerfumeById(basePerfumeId);
  if (!basePerfume) return [];

  return perfumes
    .filter(perfume => 
      perfume.id !== basePerfumeId && 
      (perfume.scentFamily === basePerfume.scentFamily || 
       perfume.intensity === basePerfume.intensity)
    )
    .sort((a, b) => b.rating - a.rating)
    .slice(0, count);
};