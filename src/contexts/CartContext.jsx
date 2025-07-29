import React, { createContext, useContext, useReducer, useEffect } from 'react';

const CartContext = createContext();

// Cart reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find(
        item => item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
      );
      
      if (existingItem) {
        return {
          ...state,
          items: state.items.map(item =>
            item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          )
        };
      } else {
        return {
          ...state,
          items: [...state.items, action.payload]
        };
      }

    case 'REMOVE_FROM_CART':
      return {
        ...state,
        items: state.items.filter(item => 
          !(item.id === action.payload.id && item.selectedSize === action.payload.selectedSize)
        )
      };

    case 'UPDATE_QUANTITY':
      return {
        ...state,
        items: state.items.map(item =>
          item.id === action.payload.id && item.selectedSize === action.payload.selectedSize
            ? { ...item, quantity: action.payload.quantity }
            : item
        )
      };

    case 'CLEAR_CART':
      return {
        ...state,
        items: []
      };

    case 'ADD_TO_WISHLIST':
      const existingWishlistItem = state.wishlist.find(item => item.id === action.payload.id);
      if (!existingWishlistItem) {
        return {
          ...state,
          wishlist: [...state.wishlist, action.payload]
        };
      }
      return state;

    case 'REMOVE_FROM_WISHLIST':
      return {
        ...state,
        wishlist: state.wishlist.filter(item => item.id !== action.payload.id)
      };

    case 'SET_CART_VISIBLE':
      return {
        ...state,
        isCartVisible: action.payload
      };

    default:
      return state;
  }
};

// Initial state
const initialState = {
  items: [],
  wishlist: [],
  isCartVisible: false
};

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('azmeera-cart');
    const savedWishlist = localStorage.getItem('azmeera-wishlist');
    
    if (savedCart) {
      const cartData = JSON.parse(savedCart);
      cartData.items.forEach(item => {
        dispatch({ type: 'ADD_TO_CART', payload: item });
      });
    }
    
    if (savedWishlist) {
      const wishlistData = JSON.parse(savedWishlist);
      wishlistData.forEach(item => {
        dispatch({ type: 'ADD_TO_WISHLIST', payload: item });
      });
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('azmeera-cart', JSON.stringify({ items: state.items }));
  }, [state.items]);

  useEffect(() => {
    localStorage.setItem('azmeera-wishlist', JSON.stringify(state.wishlist));
  }, [state.wishlist]);

  // Cart actions
  const addToCart = (product) => {
    dispatch({ type: 'ADD_TO_CART', payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: product });
  };

  const updateQuantity = (product, quantity) => {
    dispatch({ type: 'UPDATE_QUANTITY', payload: { ...product, quantity } });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  const addToWishlist = (product) => {
    dispatch({ type: 'ADD_TO_WISHLIST', payload: product });
  };

  const removeFromWishlist = (product) => {
    dispatch({ type: 'REMOVE_FROM_WISHLIST', payload: product });
  };

  const setCartVisible = (visible) => {
    dispatch({ type: 'SET_CART_VISIBLE', payload: visible });
  };

  // Computed values
  const cartTotal = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartItemCount = state.items.reduce((count, item) => count + item.quantity, 0);
  const wishlistCount = state.wishlist.length;

  const isInCart = (productId, size) => {
    return state.items.some(item => item.id === productId && item.selectedSize === size);
  };

  const isInWishlist = (productId) => {
    return state.wishlist.some(item => item.id === productId);
  };

  const getCartItem = (productId, size) => {
    return state.items.find(item => item.id === productId && item.selectedSize === size);
  };

  const value = {
    // State
    items: state.items,
    wishlist: state.wishlist,
    isCartVisible: state.isCartVisible,
    
    // Computed values
    cartTotal,
    cartItemCount,
    wishlistCount,
    
    // Actions
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    addToWishlist,
    removeFromWishlist,
    setCartVisible,
    
    // Helpers
    isInCart,
    isInWishlist,
    getCartItem
  };

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}; 