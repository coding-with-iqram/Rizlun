import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import toast from 'react-hot-toast';

const AuthContext = createContext();

// Auth reducer
const authReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_START':
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.payload,
        isAuthenticated: true,
        loading: false,
        error: null
      };
    
    case 'LOGIN_ERROR':
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        user: null
      };
    
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        loading: false,
        error: null
      };
    
    case 'UPDATE_PROFILE':
      return {
        ...state,
        user: { ...state.user, ...action.payload }
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload
      };
    
    default:
      return state;
  }
};

// Initial state
const initialState = {
  user: null,
  isAuthenticated: false,
  loading: false,
  error: null
};

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialState);

  // Load user from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem('rizlun-user');
    if (savedUser) {
      try {
        const userData = JSON.parse(savedUser);
        dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      } catch (error) {
        localStorage.removeItem('rizlun-user');
      }
    }
  }, []);

  // Save user to localStorage whenever user changes
  useEffect(() => {
    if (state.user) {
      localStorage.setItem('rizlun-user', JSON.stringify(state.user));
    } else {
      localStorage.removeItem('rizlun-user');
    }
  }, [state.user]);

  // Mock login function (replace with real API call)
  const login = async (email, password) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock user data
      const userData = {
        id: uuidv4(),
        email,
        name: email.split('@')[0],
        avatar: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=d4af37&color=2c1810`,
        loyaltyPoints: 150,
        memberSince: new Date().toISOString(),
        preferences: {
          scentFamilies: [],
          notifications: true,
          language: 'en'
        },
        addresses: [],
        orders: []
      };
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: userData });
      toast.success('Welcome back!');
      return userData;
    } catch (error) {
      const errorMessage = error.message || 'Login failed. Please try again.';
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
      toast.error(errorMessage);
      throw error;
    }
  };

  // Mock register function
  const register = async (userData) => {
    dispatch({ type: 'LOGIN_START' });
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newUser = {
        id: uuidv4(),
        ...userData,
        avatar: `https://ui-avatars.com/api/?name=${userData.name}&background=d4af37&color=2c1810`,
        loyaltyPoints: 50, // Welcome bonus
        memberSince: new Date().toISOString(),
        preferences: {
          scentFamilies: [],
          notifications: true,
          language: 'en'
        },
        addresses: [],
        orders: []
      };
      
      dispatch({ type: 'LOGIN_SUCCESS', payload: newUser });
      toast.success('Account created successfully! Welcome to Rizlun!');
      return newUser;
    } catch (error) {
      const errorMessage = error.message || 'Registration failed. Please try again.';
      dispatch({ type: 'LOGIN_ERROR', payload: errorMessage });
      toast.error(errorMessage);
      throw error;
    }
  };

  // Logout function
  const logout = () => {
    dispatch({ type: 'LOGOUT' });
    toast.success('Logged out successfully');
  };

  // Update profile
  const updateProfile = async (updates) => {
    try {
      dispatch({ type: 'SET_LOADING', payload: true });
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 500));
      
      dispatch({ type: 'UPDATE_PROFILE', payload: updates });
      toast.success('Profile updated successfully');
    } catch (error) {
      toast.error('Failed to update profile');
      throw error;
    } finally {
      dispatch({ type: 'SET_LOADING', payload: false });
    }
  };

  // Add address
  const addAddress = async (address) => {
    try {
      const newAddress = {
        id: uuidv4(),
        ...address,
        createdAt: new Date().toISOString()
      };
      
      const updatedAddresses = [...(state.user.addresses || []), newAddress];
      await updateProfile({ addresses: updatedAddresses });
      
      return newAddress;
    } catch (error) {
      toast.error('Failed to add address');
      throw error;
    }
  };

  // Update address
  const updateAddress = async (addressId, updates) => {
    try {
      const updatedAddresses = state.user.addresses.map(addr =>
        addr.id === addressId ? { ...addr, ...updates } : addr
      );
      
      await updateProfile({ addresses: updatedAddresses });
    } catch (error) {
      toast.error('Failed to update address');
      throw error;
    }
  };

  // Delete address
  const deleteAddress = async (addressId) => {
    try {
      const updatedAddresses = state.user.addresses.filter(addr => addr.id !== addressId);
      await updateProfile({ addresses: updatedAddresses });
      toast.success('Address deleted successfully');
    } catch (error) {
      toast.error('Failed to delete address');
      throw error;
    }
  };

  // Add loyalty points
  const addLoyaltyPoints = (points) => {
    if (state.user) {
      const currentPoints = state.user.loyaltyPoints || 0;
      dispatch({ 
        type: 'UPDATE_PROFILE', 
        payload: { loyaltyPoints: currentPoints + points }
      });
    }
  };

  const value = {
    // State
    user: state.user,
    isAuthenticated: state.isAuthenticated,
    loading: state.loading,
    error: state.error,
    
    // Actions
    login,
    register,
    logout,
    updateProfile,
    addAddress,
    updateAddress,
    deleteAddress,
    addLoyaltyPoints
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};