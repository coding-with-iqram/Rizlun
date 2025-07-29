import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Heart, 
  Share2, 
  Star, 
  ShoppingCart, 
  Minus, 
  Plus,
  Truck,
  RotateCcw,
  Shield,
  Clock,
  Zap,
  Users,
  Calendar,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Zoom
} from 'lucide-react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../contexts/AuthContext';
import { getPerfumeById, getRecommendedPerfumes, sizes } from '../../data/perfumes';
import ProductCard from '../../components/ProductCard';
import toast from 'react-hot-toast';

const IndividualFragranceExperience = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToWishlist, isInWishlist } = useCart();
  const { addLoyaltyPoints } = useAuth();
  
  const [fragrance, setFragrance] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedSize, setSelectedSize] = useState('50ml');
  const [quantity, setQuantity] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [showImageZoom, setShowImageZoom] = useState(false);
  const [activeTab, setActiveTab] = useState('description');
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  useEffect(() => {
    const loadFragrance = () => {
      setIsLoading(true);
      const product = getPerfumeById(id);
      
      if (product) {
        setFragrance(product);
        setRecommendedProducts(getRecommendedPerfumes(id));
      }
      
      setIsLoading(false);
    };

    loadFragrance();
  }, [id]);

  const selectedSizeData = sizes.find(size => size.value === selectedSize);
  const currentPrice = fragrance ? fragrance.price + (selectedSizeData?.price || 0) : 0;
  const inWishlist = fragrance ? isInWishlist(fragrance.id) : false;

  const handleAddToCart = () => {
    if (!fragrance) return;
    
    const cartItem = {
      ...fragrance,
      selectedSize,
      quantity,
      price: currentPrice,
      id: `${fragrance.id}-${selectedSize}`
    };
    
    addToCart(cartItem);
    addLoyaltyPoints(10);
    
    toast.success(
      <div>
        <strong>{fragrance.name}</strong> added to cart!
        <div className="text-sm opacity-75">+10 loyalty points earned</div>
      </div>
    );
  };

  const handleAddToWishlist = () => {
    if (!fragrance) return;
    
    addToWishlist(fragrance);
    toast.success(`${fragrance.name} added to wishlist!`);
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: fragrance.name,
        text: fragrance.description,
        url: window.location.href
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast.success('Link copied to clipboard!');
    }
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} size={16} className="text-accent fill-current" />);
    }

    if (hasHalfStar) {
      stars.push(<Star key="half" size={16} className="text-accent fill-current opacity-50" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Star key={`empty-${i}`} size={16} className="text-muted-foreground" />);
    }

    return stars;
  };

  const getIntensityLevel = (intensity) => {
    switch (intensity) {
      case 'Light': return 2;
      case 'Moderate': return 3;
      case 'Strong': return 4;
      case 'Intense': return 5;
      default: return 2;
    }
  };

  const getLongevityHours = (longevity) => {
    if (longevity.includes('2-4')) return 3;
    if (longevity.includes('4-6')) return 5;
    if (longevity.includes('6-8')) return 7;
    if (longevity.includes('8+')) return 9;
    return 5;
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="w-16 h-16 border-4 border-accent border-t-transparent rounded-full animate-spin mx-auto"></div>
          <p className="text-text-secondary">Loading fragrance details...</p>
        </div>
      </div>
    );
  }

  if (!fragrance) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold text-primary">Fragrance Not Found</h2>
          <p className="text-text-secondary">The fragrance you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/collections-gallery')}
            className="btn-primary"
          >
            Browse Collection
          </button>
        </div>
      </div>
    );
  }

  const intensityLevel = getIntensityLevel(fragrance.intensity);
  const longevityHours = getLongevityHours(fragrance.longevity);

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumb */}
      <div className="container-luxury pt-20 pb-4">
        <nav className="text-sm text-text-secondary">
          <span 
            onClick={() => navigate('/')}
            className="cursor-pointer hover:text-accent"
          >
            Home
          </span>
          <span className="mx-2">/</span>
          <span 
            onClick={() => navigate('/collections-gallery')}
            className="cursor-pointer hover:text-accent"
          >
            Collection
          </span>
          <span className="mx-2">/</span>
          <span className="text-primary">{fragrance.name}</span>
        </nav>
      </div>

      {/* Main Product Section */}
      <div className="container-luxury pb-16">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* Image Gallery */}
          <motion.div
            className="space-y-4"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Main Image */}
            <div className="relative group">
              <div className="aspect-square overflow-hidden rounded-2xl bg-surface">
                <img
                  src={fragrance.images[selectedImageIndex]}
                  alt={fragrance.name}
                  className="w-full h-full object-cover cursor-zoom-in"
                  onClick={() => setShowImageZoom(true)}
                />
              </div>
              
              {/* Navigation Arrows */}
              {fragrance.images.length > 1 && (
                <>
                  <button
                    onClick={() => setSelectedImageIndex(
                      selectedImageIndex === 0 ? fragrance.images.length - 1 : selectedImageIndex - 1
                    )}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={() => setSelectedImageIndex(
                      selectedImageIndex === fragrance.images.length - 1 ? 0 : selectedImageIndex + 1
                    )}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <ChevronRight size={20} />
                  </button>
                </>
              )}
              
              {/* Zoom Icon */}
              <button
                onClick={() => setShowImageZoom(true)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Zoom size={18} />
              </button>
            </div>

            {/* Thumbnail Images */}
            {fragrance.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto">
                {fragrance.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 border-2 transition-colors ${
                      selectedImageIndex === index 
                        ? 'border-accent' 
                        : 'border-transparent hover:border-accent/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${fragrance.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-accent font-medium">{fragrance.brand}</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={handleShare}
                    className="p-2 hover:bg-muted rounded-full transition-colors"
                  >
                    <Share2 size={18} />
                  </button>
                  <button
                    onClick={handleAddToWishlist}
                    className={`p-2 rounded-full transition-colors ${
                      inWishlist 
                        ? 'bg-accent/10 text-accent' 
                        : 'hover:bg-muted'
                    }`}
                  >
                    <Heart size={18} className={inWishlist ? 'fill-current' : ''} />
                  </button>
                </div>
              </div>
              
              <h1 className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">
                {fragrance.name}
              </h1>
              
              <p className="text-text-secondary mb-4">
                {fragrance.scentFamily} • {fragrance.gender}
              </p>

              {/* Rating */}
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center gap-1">
                  {renderStars(fragrance.rating)}
                </div>
                <span className="font-semibold text-primary">{fragrance.rating}</span>
                <span className="text-text-secondary">({fragrance.reviewCount} reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="font-display text-3xl font-bold text-primary">
                  ${currentPrice}
                </span>
                {fragrance.originalPrice > fragrance.price && (
                  <>
                    <span className="text-xl text-text-secondary line-through">
                      ${fragrance.originalPrice}
                    </span>
                    <span className="bg-error text-error-foreground px-2 py-1 rounded-full text-sm font-medium">
                      -{fragrance.discount}% OFF
                    </span>
                  </>
                )}
              </div>
              <p className="text-sm text-text-secondary">
                Free shipping on orders over $50
              </p>
            </div>

            {/* Description */}
            <div>
              <p className="text-text-secondary leading-relaxed">
                {fragrance.longDescription || fragrance.description}
              </p>
            </div>

            {/* Intensity & Longevity Meters */}
            <div className="grid grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Intensity</h4>
                <div className="flex items-center gap-2">
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className={`w-3 h-3 rounded-full ${
                          i < intensityLevel ? 'bg-accent' : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-text-secondary">{fragrance.intensity}</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-semibold text-primary mb-2">Longevity</h4>
                <div className="flex items-center gap-2">
                  <div className="flex-1 bg-border rounded-full h-2">
                    <div 
                      className="bg-accent h-full rounded-full transition-all duration-500"
                      style={{ width: `${(longevityHours / 12) * 100}%` }}
                    />
                  </div>
                  <span className="text-sm text-text-secondary">{fragrance.longevity}</span>
                </div>
              </div>
            </div>

            {/* Size Selection */}
            <div>
              <h4 className="font-semibold text-primary mb-3">Size</h4>
              <div className="grid grid-cols-3 gap-3">
                {sizes.map((size) => (
                  <button
                    key={size.value}
                    onClick={() => setSelectedSize(size.value)}
                    className={`p-4 border-2 rounded-lg text-center transition-colors ${
                      selectedSize === size.value
                        ? 'border-accent bg-accent/5'
                        : 'border-border hover:border-accent/50'
                    }`}
                  >
                    <div className="font-semibold">{size.label}</div>
                    <div className="text-sm text-text-secondary">
                      {size.price > 0 ? `+$${size.price}` : 'Base price'}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div>
              <h4 className="font-semibold text-primary mb-3">Quantity</h4>
              <div className="flex items-center gap-4">
                <div className="quantity-selector">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="quantity-btn"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="w-12 h-10 flex items-center justify-center font-semibold">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="quantity-btn"
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="text-sm text-text-secondary">
                  {fragrance.stockCount} in stock
                </div>
              </div>
            </div>

            {/* Add to Cart */}
            <div className="space-y-3">
              <motion.button
                onClick={handleAddToCart}
                disabled={!fragrance.inStock}
                className="w-full btn-primary py-4 text-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ShoppingCart size={20} className="mr-2" />
                Add to Cart - ${currentPrice}
              </motion.button>
              
              <button
                onClick={handleAddToWishlist}
                className="w-full btn-ghost py-3"
              >
                <Heart size={18} className="mr-2" />
                {inWishlist ? 'Remove from Wishlist' : 'Add to Wishlist'}
              </button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
              <div className="flex items-center gap-2 text-sm">
                <Shield size={16} className="text-green-600" />
                <span>Authentic Guarantee</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Truck size={16} className="text-blue-600" />
                <span>Free Shipping</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <RotateCcw size={16} className="text-orange-600" />
                <span>30-Day Returns</span>
              </div>
              <div className="flex items-center gap-2 text-sm">
                <Clock size={16} className="text-purple-600" />
                <span>Fast Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Product Details Tabs */}
      <div className="bg-surface/50 py-16">
        <div className="container-luxury">
          {/* Tab Navigation */}
          <div className="flex flex-wrap gap-1 mb-8 bg-background rounded-lg p-1">
            {[
              { id: 'description', label: 'Description' },
              { id: 'notes', label: 'Scent Notes' },
              { id: 'reviews', label: 'Reviews' },
              { id: 'ingredients', label: 'Ingredients' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-accent text-accent-foreground'
                    : 'text-text-secondary hover:text-primary'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'description' && (
              <div className="luxury-card p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-4">
                  The Story Behind {fragrance.name}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {fragrance.story}
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Perfect For</h4>
                    <div className="flex flex-wrap gap-2">
                      {fragrance.suitableFor.map((occasion, index) => (
                        <span key={index} className="badge badge-secondary">
                          {occasion}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Best Seasons</h4>
                    <div className="flex flex-wrap gap-2">
                      {fragrance.season.map((season, index) => (
                        <span key={index} className="badge badge-primary">
                          {season}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notes' && (
              <div className="space-y-6">
                {/* Scent Pyramid */}
                {Object.entries(fragrance.scentNotes).map(([level, notes]) => (
                  <div key={level} className="luxury-card p-6">
                    <h4 className="font-display text-xl font-bold text-primary mb-4 capitalize">
                      {level} Notes
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {notes.map((note, index) => (
                        <div key={index} className="note-category">
                          <h5 className="font-semibold text-primary mb-1">{note}</h5>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="luxury-card p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-display text-2xl font-bold text-primary">
                    Customer Reviews
                  </h3>
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1">
                      {renderStars(fragrance.rating)}
                    </div>
                    <span className="font-bold text-primary">{fragrance.rating}</span>
                    <span className="text-text-secondary">({fragrance.reviewCount} reviews)</span>
                  </div>
                </div>
                
                {/* Mock Review */}
                <div className="border-b border-border pb-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                      <Users size={20} className="text-accent" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-semibold text-primary">Sarah M.</span>
                        <div className="flex items-center gap-1">
                          {renderStars(5)}
                        </div>
                        <span className="text-sm text-text-secondary">Verified Purchase</span>
                      </div>
                      <h4 className="font-semibold text-primary mb-2">Perfect signature scent!</h4>
                      <p className="text-text-secondary">
                        I've been searching for the perfect fragrance for months, and this is absolutely it! 
                        The scent is sophisticated yet approachable, and it lasts all day. I get compliments 
                        every time I wear it.
                      </p>
                      <div className="flex items-center gap-4 mt-3 text-sm text-text-secondary">
                        <span>2 days ago</span>
                        <button className="hover:text-primary">Helpful (12)</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'ingredients' && (
              <div className="luxury-card p-8">
                <h3 className="font-display text-2xl font-bold text-primary mb-6">
                  Ingredients
                </h3>
                <div className="space-y-4">
                  {fragrance.ingredients.map((ingredient, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full"></div>
                      <span className="text-text-secondary">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </div>

      {/* Recommended Products */}
      {recommendedProducts.length > 0 && (
        <div className="py-16">
          <div className="container-luxury">
            <h2 className="font-display text-3xl font-bold text-primary text-center mb-12">
              You Might Also Love
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {recommendedProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={(prod) => {
                    addToCart({...prod, selectedSize: '50ml', quantity: 1});
                    toast.success(`${prod.name} added to cart!`);
                  }}
                  onAddToWishlist={(prod) => {
                    addToWishlist(prod);
                    toast.success(`${prod.name} added to wishlist!`);
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default IndividualFragranceExperience;