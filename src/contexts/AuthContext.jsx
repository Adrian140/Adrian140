import React, { createContext, useContext, useState, useEffect } from 'react';
import { apiClient } from '../config/api';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for existing session
    const token = localStorage.getItem('authToken');
    if (token) {
      // Validate token and get user data
      validateToken(token);
    } else {
      setLoading(false);
    }
  }, []);

  const validateToken = async (token) => {
   try {
      const userData = await apiClient.auth.validate();
      setUser(userData);
    } catch (error) {
      console.error('Token validation failed:', error);
      localStorage.removeItem('authToken');
    } finally {
      setLoading(false);
    }
  };

  const login = async (email, password) => {
   try {
      const { token, user } = await apiClient.auth.login(email, password);
      localStorage.setItem('authToken', token);
      setUser(user);
      return { success: true, user };
   } catch (error) {
       return { success: false, error: error.message || 'Eroare de conectare la server' };
  }
  };

  const register = async (userData) => {
    try {
       const result = await apiClient.auth.register(userData);
      return { success: true, message: result.message || 'Account created successfully. Please check your email for verification.' };
   } catch (error) {
       return { success: false, error: error.message || 'Network error occurred' };
   }
  };

  const logout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
  };

  const forgotPassword = async (email) => {
    try {
       const result = await apiClient.auth.forgotPassword(email);
      return { success: true, message: result.message || 'Password reset link sent to your email' };
   } catch (error) {
       return { success: false, error: error.message || 'Network error occurred' };
   }
  };

  const enable2FA = async () => {
    try {
       const data = await apiClient.auth.enable2FA();
      return { success: true, qrCode: data.qrCode, secret: data.secret };
   } catch (error) {
       return { success: false, error: error.message || 'Network error occurred' };
   }
  };

  const verify2FA = async (token) => {
    try {
       const result = await apiClient.auth.verify2FA(token);
      return { success: true, message: result.message || '2FA enabled successfully' };
   } catch (error) {
       return { success: false, error: error.message || 'Network error occurred' };
   }
  };

  const disable2FA = async (token) => {
    try {
       const result = await apiClient.auth.disable2FA(token);
      return { success: true, message: result.message || '2FA disabled successfully' };
   } catch (error) {
       return { success: false, error: error.message || 'Network error occurred' };
   }
  };
   
 const value = {
    user,
    loading,
    login,
    register,
    logout,
    forgotPassword,
    enable2FA,
    verify2FA,
    disable2FA
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};