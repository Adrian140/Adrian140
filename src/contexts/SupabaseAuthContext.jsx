import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase, supabaseHelpers } from '../config/supabase';

const SupabaseAuthContext = createContext();

export const useSupabaseAuth = () => {
  const context = useContext(SupabaseAuthContext);
  if (!context) {
    throw new Error('useSupabaseAuth must be used within a SupabaseAuthProvider');
  }
  return context;
};

export const SupabaseAuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);

  useEffect(() => {
    // Get initial session
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setUser(session?.user ?? null);
      if (session?.user) {
        loadUserProfile(session.user.id);
      }
      setLoading(false);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setSession(session);
        setUser(session?.user ?? null);
        
        if (session?.user) {
          await loadUserProfile(session.user.id);
        } else {
          setProfile(null);
        }
        setLoading(false);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  const loadUserProfile = async (userId) => {
    try {
      const { data, error } = await supabaseHelpers.getProfile(userId);
      if (error && error.code !== 'PGRST116') { // Not found error
        console.error('Error loading profile:', error);
      } else if (data) {
        setProfile(data);
      }
    } catch (error) {
      console.error('Error loading profile:', error);
    }
  };

  const signUp = async (email, password, userData = {}) => {
    try {
      setLoading(true);
      const { data, error } = await supabaseHelpers.signUp(email, password, userData);
      
      if (error) {
        return { success: false, error: error.message };
      }

      // Create profile record
      if (data.user) {
        const profileData = {
          id: data.user.id,
          email: data.user.email,
          first_name: userData.firstName || '',
          last_name: userData.lastName || '',
          account_type: userData.accountType || 'individual',
          company_name: userData.companyName || null,
          cui: userData.cui || null,
          vat_number: userData.vatNumber || null,
          company_address: userData.companyAddress || null,
          company_city: userData.companyCity || null,
          company_postal_code: userData.companyPostalCode || null,
          phone: userData.phone || null,
          country: userData.country || 'FR',
          language: userData.language || 'fr'
        };

        const { error: profileError } = await supabase
          .from('profiles')
          .insert([profileData]);

        if (profileError) {
          console.error('Error creating profile:', profileError);
        }
      }

      return { 
        success: true, 
        message: 'Contul a fost creat cu succes! Verifică email-ul pentru confirmare.' 
      };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const signIn = async (email, password) => {
    try {
      setLoading(true);
      const { data, error } = await supabaseHelpers.signIn(email, password);
      
      if (error) {
        return { success: false, error: error.message };
      }

      return { success: true, user: data.user };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  const signOut = async () => {
    try {
      const { error } = await supabaseHelpers.signOut();
      if (error) {
        console.error('Error signing out:', error);
      }
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const resetPassword = async (email) => {
    try {
      const { error } = await supabaseHelpers.resetPassword(email);
      
      if (error) {
        return { success: false, error: error.message };
      }

      return { 
        success: true, 
        message: 'Link-ul de resetare a fost trimis pe email.' 
      };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const updateProfile = async (updates) => {
    try {
      if (!user) return { success: false, error: 'Nu ești autentificat' };

      const { data, error } = await supabaseHelpers.updateProfile(user.id, updates);
      
      if (error) {
        return { success: false, error: error.message };
      }

      setProfile(data);
      return { success: true, data };
    } catch (error) {
      return { success: false, error: error.message };
    }
  };

  const value = {
    user,
    profile,
    session,
    loading,
    signUp,
    signIn,
    signOut,
    resetPassword,
    updateProfile,
    loadUserProfile
  };

  return (
    <SupabaseAuthContext.Provider value={value}>
      {children}
    </SupabaseAuthContext.Provider>
  );
};
