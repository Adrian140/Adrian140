import React, { createContext, useContext, useState, useEffect } from 'react';

const AdminAuthContext = createContext();

export const useAdminAuth = () => {
  const context = useContext(AdminAuthContext);
  if (!context) {
    throw new Error('useAdminAuth must be used within an AdminAuthProvider');
  }
  return context;
};

export const AdminAuthProvider = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  const [loading, setLoading] = useState(false);

  // Verifică dacă admin-ul este deja autentificat la încărcarea paginii
  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    const adminExpiry = localStorage.getItem('adminExpiry');
    
    if (adminToken && adminExpiry) {
      const now = new Date().getTime();
      const expiryTime = parseInt(adminExpiry);
      
      if (now < expiryTime) {
        setIsAdminAuthenticated(true);
      } else {
        // Token expirat, șterge-l
        localStorage.removeItem('adminToken');
        localStorage.removeItem('adminExpiry');
      }
    }
  }, []);

  const adminLogin = async (username, password) => {
    setLoading(true);
    
    // Simulez o întârziere pentru autentificare
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Credențiale admin (în producție, acestea ar trebui să fie în backend)
    const ADMIN_USERNAME = 'admin';
    const ADMIN_PASSWORD = 'PrepCenter2024!';
    
    if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      // Setez token-ul să expire în 24 ore
      const expiryTime = new Date().getTime() + (24 * 60 * 60 * 1000);
      
      localStorage.setItem('adminToken', 'admin-authenticated');
      localStorage.setItem('adminExpiry', expiryTime.toString());
      
      setIsAdminAuthenticated(true);
      setLoading(false);
      return { success: true };
    } else {
      setLoading(false);
      return { success: false, error: 'Username sau parolă incorectă' };
    }
  };

  const adminLogout = () => {
    localStorage.removeItem('adminToken');
    localStorage.removeItem('adminExpiry');
    setIsAdminAuthenticated(false);
  };

  const value = {
    isAdminAuthenticated,
    loading,
    adminLogin,
    adminLogout
  };

  return (
    <AdminAuthContext.Provider value={value}>
      {children}
    </AdminAuthContext.Provider>
  );
};
