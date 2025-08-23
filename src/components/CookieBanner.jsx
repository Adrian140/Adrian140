import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookieConsent');
    if (!cookieConsent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const rejectCookies = () => {
    localStorage.setItem('cookieConsent', 'rejected');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-text-secondary">
              We use cookies to improve your experience and analyze site usage. By continuing to browse, you agree to our use of cookies.{' '}
              <a href="#" className="text-primary hover:text-primary-dark underline">
                Learn more
              </a>
            </p>
          </div>
          <div className="flex items-center space-x-3">
            <button
              onClick={rejectCookies}
              className="px-4 py-2 text-sm font-medium text-text-secondary border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
            >
              Reject
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              Accept
            </button>
            <button
              onClick={rejectCookies}
              className="p-1 text-text-secondary hover:text-text-primary"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CookieBanner;
