import React, { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const languages = {
  en: { name: 'English', flag: '🇬🇧' },
  pt: { name: 'Português', flag: '🇵🇹' },
  nl: { name: 'Nederlands', flag: '🇳🇱' },
  pl: { name: 'Polski', flag: '🇵🇱' },
  ro: { name: 'Română', flag: '🇷🇴' },
  cs: { name: 'Čeština', flag: '🇨🇿' },
  sk: { name: 'Slovenčina', flag: '🇸🇰' },
  hu: { name: 'Magyar', flag: '🇭🇺' },
  bg: { name: 'Български', flag: '🇧🇬' },
  hr: { name: 'Hrvatski', flag: '🇭🇷' },
  sl: { name: 'Slovenščina', flag: '🇸🇮' },
  lt: { name: 'Lietuvių', flag: '🇱🇹' },
  lv: { name: 'Latviešu', flag: '🇱🇻' },
  et: { name: 'Eesti', flag: '🇪🇪' },
  fi: { name: 'Suomi', flag: '🇫🇮' },
  sv: { name: 'Svenska', flag: '🇸🇪' },
  no: { name: 'Norsk', flag: '🇳🇴' },
  fr: { name: 'Français', flag: '🇫🇷' },
  de: { name: 'Deutsch', flag: '🇩🇪' },
  es: { name: 'Español', flag: '🇪🇸' },
  it: { name: 'Italiano', flag: '🇮🇹' },
  da: { name: 'Dansk', flag: '🇩🇰' },
  el: { name: 'Ελληνικά', flag: '🇬🇷' }
};

export const LanguageProvider = ({ children }) => {
  const [currentLanguage, setCurrentLanguage] = useState('fr');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferredLanguage');
    if (savedLanguage && languages[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (languageCode) => {
    setCurrentLanguage(languageCode);
    localStorage.setItem('preferredLanguage', languageCode);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, changeLanguage, languages }}>
      {children}
    </LanguageContext.Provider>
  );
};