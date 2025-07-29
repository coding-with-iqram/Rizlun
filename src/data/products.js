export const products = [
  {
    id: 1,
    name: "Mediterranean Dawn",
    subtitle: "Bergamot Whispers",
    description: "A luminous opening of Sicilian bergamot dances with morning dew, while jasmine petals unfold like secrets shared at sunrise.",
    longDescription: "Mediterranean Dawn captures the essence of a perfect morning on the Italian coast. The fragrance opens with the bright, citrusy notes of Sicilian bergamot, creating an immediate sense of freshness and vitality. As the scent develops, delicate jasmine petals emerge, adding a romantic and feminine touch. The base notes of white musk and cedar provide a clean, sophisticated finish that lingers throughout the day.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    price: 18500,
    originalPrice: 22000,
    currency: "BDT",
    category: "Citrus Floral",
    topNotes: ["Bergamot", "Lemon", "Pink Pepper"],
    heartNotes: ["Jasmine", "Rose", "Lily of Valley"],
    baseNotes: ["White Musk", "Cedar", "Amber"],
    mood: "Fresh & Romantic",
    intensity: 3,
    longevity: "6-8 hours",
    sillage: "Moderate",
    season: ["Spring", "Summer"],
    occasion: ["Day", "Casual", "Office"],
    inStock: true,
    stockQuantity: 45,
    isLimited: false,
    isNew: true,
    isBestSeller: true,
    rating: 4.8,
    reviews: 127,
    sizes: [
      { size: "30ml", price: 8500, inStock: true },
      { size: "50ml", price: 12500, inStock: true },
      { size: "100ml", price: 18500, inStock: true }
    ],
    relatedProducts: [2, 3, 4]
  },
  {
    id: 2,
    name: "Midnight Oud",
    subtitle: "Velvet Shadows",
    description: "Rich oud wood embraces smoky incense, creating an intoxicating symphony that speaks of ancient mysteries and modern sophistication.",
    longDescription: "Midnight Oud is a luxurious oriental fragrance that transports you to ancient spice markets and mystical temples. The fragrance opens with the exotic notes of black pepper and saffron, creating an immediate sense of intrigue. The heart reveals the precious oud wood, blended with rose and incense for a deeply sensual experience. The base notes of sandalwood and vanilla provide warmth and longevity, making this fragrance perfect for evening wear.",
    image: "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=400&h=500&fit=crop",
    price: 29500,
    originalPrice: 35000,
    currency: "BDT",
    category: "Oriental Woody",
    topNotes: ["Black Pepper", "Cardamom", "Saffron"],
    heartNotes: ["Oud", "Rose", "Incense"],
    baseNotes: ["Sandalwood", "Vanilla", "Musk"],
    mood: "Mysterious & Luxurious",
    intensity: 5,
    longevity: "10-12 hours",
    sillage: "Strong",
    season: ["Fall", "Winter"],
    occasion: ["Evening", "Formal", "Special Occasions"],
    inStock: true,
    stockQuantity: 28,
    isLimited: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 89,
    sizes: [
      { size: "30ml", price: 13500, inStock: true },
      { size: "50ml", price: 19500, inStock: true },
      { size: "100ml", price: 29500, inStock: true }
    ],
    relatedProducts: [1, 3, 5]
  },
  {
    id: 3,
    name: "Garden Reverie",
    subtitle: "Peony Dreams",
    description: "Delicate peony petals float on a breeze of green leaves, capturing the essence of an English garden in full bloom.",
    longDescription: "Garden Reverie is a romantic floral fragrance that captures the essence of a perfect spring day in an English garden. The fragrance opens with fresh green leaves and dewdrops, creating an immediate sense of freshness. The heart reveals the delicate beauty of peony and magnolia flowers, creating a soft and feminine scent. The base notes of white tea and blonde woods provide a clean, sophisticated finish.",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=500&fit=crop",
    price: 16500,
    originalPrice: 18500,
    currency: "BDT",
    category: "Fresh Floral",
    topNotes: ["Green Leaves", "Dewdrops", "Citrus"],
    heartNotes: ["Peony", "Magnolia", "Freesia"],
    baseNotes: ["White Tea", "Musk", "Blonde Woods"],
    mood: "Fresh & Feminine",
    intensity: 2,
    longevity: "4-6 hours",
    sillage: "Light",
    season: ["Spring", "Summer"],
    occasion: ["Day", "Casual", "Weekend"],
    inStock: true,
    stockQuantity: 62,
    isLimited: false,
    isNew: true,
    isBestSeller: false,
    rating: 4.6,
    reviews: 156,
    sizes: [
      { size: "30ml", price: 7500, inStock: true },
      { size: "50ml", price: 11500, inStock: true },
      { size: "100ml", price: 16500, inStock: true }
    ],
    relatedProducts: [1, 4, 6]
  },
  {
    id: 4,
    name: "Spice Route",
    subtitle: "Amber Expedition",
    description: "Warm cardamom and cinnamon bark create a journey through ancient spice markets, finished with golden amber and precious woods.",
    longDescription: "Spice Route is an exotic oriental fragrance that takes you on a journey through ancient spice markets. The fragrance opens with the warm and spicy notes of cardamom and cinnamon, creating an immediate sense of warmth and exoticism. The heart reveals the rich notes of clove and nutmeg, blended with rose for a sophisticated touch. The base notes of amber and sandalwood provide depth and longevity.",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop",
    price: 22500,
    originalPrice: 25000,
    currency: "BDT",
    category: "Spicy Oriental",
    topNotes: ["Cardamom", "Cinnamon", "Orange"],
    heartNotes: ["Clove", "Nutmeg", "Rose"],
    baseNotes: ["Amber", "Sandalwood", "Vanilla"],
    mood: "Energizing & Warm",
    intensity: 4,
    longevity: "8-10 hours",
    sillage: "Moderate",
    season: ["Fall", "Winter"],
    occasion: ["Evening", "Casual", "Weekend"],
    inStock: true,
    stockQuantity: 38,
    isLimited: false,
    isNew: false,
    isBestSeller: true,
    rating: 4.7,
    reviews: 203,
    sizes: [
      { size: "30ml", price: 10500, inStock: true },
      { size: "50ml", price: 15500, inStock: true },
      { size: "100ml", price: 22500, inStock: true }
    ],
    relatedProducts: [2, 5, 6]
  },
  {
    id: 5,
    name: "Ocean Breeze",
    subtitle: "Marine Freshness",
    description: "Crisp sea salt and fresh citrus create an invigorating scent that captures the essence of ocean waves and coastal breezes.",
    longDescription: "Ocean Breeze is a fresh aquatic fragrance that captures the invigorating feeling of standing on a coastal cliff. The fragrance opens with the crisp notes of sea salt and fresh citrus, creating an immediate sense of freshness and vitality. The heart reveals marine notes and white flowers, creating a clean and sophisticated scent. The base notes of driftwood and musk provide a natural, earthy finish.",
    image: "https://images.unsplash.com/photo-1587017539504-67cfbddac569?w=400&h=500&fit=crop",
    price: 14500,
    originalPrice: 16500,
    currency: "BDT",
    category: "Fresh Aquatic",
    topNotes: ["Sea Salt", "Lemon", "Bergamot"],
    heartNotes: ["Marine Notes", "White Flowers", "Seaweed"],
    baseNotes: ["Driftwood", "Musk", "Amber"],
    mood: "Fresh & Invigorating",
    intensity: 3,
    longevity: "6-8 hours",
    sillage: "Moderate",
    season: ["Spring", "Summer"],
    occasion: ["Day", "Casual", "Sport"],
    inStock: true,
    stockQuantity: 51,
    isLimited: false,
    isNew: true,
    isBestSeller: false,
    rating: 4.5,
    reviews: 94,
    sizes: [
      { size: "30ml", price: 6500, inStock: true },
      { size: "50ml", price: 9500, inStock: true },
      { size: "100ml", price: 14500, inStock: true }
    ],
    relatedProducts: [1, 3, 6]
  },
  {
    id: 6,
    name: "Velvet Rose",
    subtitle: "Romantic Elegance",
    description: "Luxurious Bulgarian rose petals blend with creamy vanilla and warm amber, creating a romantic and sophisticated fragrance.",
    longDescription: "Velvet Rose is a luxurious floral fragrance that celebrates the beauty of the Bulgarian rose. The fragrance opens with the rich and velvety notes of Bulgarian rose petals, creating an immediate sense of luxury and romance. The heart reveals creamy vanilla and warm spices, adding depth and sophistication. The base notes of amber and sandalwood provide warmth and longevity, making this fragrance perfect for romantic evenings.",
    image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&h=500&fit=crop",
    price: 19500,
    originalPrice: 22000,
    currency: "BDT",
    category: "Floral Oriental",
    topNotes: ["Bulgarian Rose", "Pink Pepper", "Bergamot"],
    heartNotes: ["Rose Absolute", "Vanilla", "Cinnamon"],
    baseNotes: ["Amber", "Sandalwood", "Musk"],
    mood: "Romantic & Elegant",
    intensity: 4,
    longevity: "8-10 hours",
    sillage: "Moderate",
    season: ["All Seasons"],
    occasion: ["Evening", "Romantic", "Special Occasions"],
    inStock: true,
    stockQuantity: 34,
    isLimited: true,
    isNew: false,
    isBestSeller: true,
    rating: 4.9,
    reviews: 178,
    sizes: [
      { size: "30ml", price: 9500, inStock: true },
      { size: "50ml", price: 13500, inStock: true },
      { size: "100ml", price: 19500, inStock: true }
    ],
    relatedProducts: [2, 4, 5]
  }
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getBestSellers = () => {
  return products.filter(product => product.isBestSeller);
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew);
};

export const getLimitedEdition = () => {
  return products.filter(product => product.isLimited);
};

export const searchProducts = (query) => {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.subtitle.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.category.toLowerCase().includes(lowercaseQuery)
  );
};

export const filterProducts = (filters) => {
  return products.filter(product => {
    if (filters.category && product.category !== filters.category) return false;
    if (filters.priceMin && product.price < filters.priceMin) return false;
    if (filters.priceMax && product.price > filters.priceMax) return false;
    if (filters.inStock && !product.inStock) return false;
    if (filters.season && !product.season.includes(filters.season)) return false;
    return true;
  });
}; 