import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Package } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { useTranslation } from '../translations';
import { useAdminAuth } from '../contexts/AdminAuthContext';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const { isAdminAuthenticated } = useAdminAuth();

  const navigation = [
    { name: t('home'), href: '/' },
    { name: t('services'), href: '/services-pricing' },
    { name: t('about'), href: '/about' },
    { name: t('contact'), href: '/contact' }
  ];
  const isActive = (href) => location.pathname === href;

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section - Improved spacing and typography */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-primary-dark rounded-lg flex items-center justify-center">
              <Package className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold text-text-primary leading-tight">Prep Center</span>
              <span className="text-sm font-medium text-primary leading-tight">France</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200 ${
                  isActive(item.href)
                    ? 'text-primary bg-blue-50 border border-blue-200'
                    : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-3">
            <LanguageSwitcher />
            
            {/* Action Buttons */}
            <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-gray-200">
              {isAdminAuthenticated ? (
                <a
                  href="/admin-panel"
                  className="bg-red-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-red-700 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                >
                  Admin Panel
                </a>
              ) : (
                <a
                  href="/admin-login"
                  className="bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md text-sm"
                >
                  Admin
                </a>
              )}
              <a
                href="https://wa.me/33675116218"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent-dark transition-all duration-200 shadow-sm hover:shadow-md text-sm"
              >
                 {t('chatWhatsApp')}
             </a>
              <a
                href="/contact"
                className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-dark transition-all duration-200 shadow-sm hover:shadow-md text-sm"
              >
                 {t('getQuote')}
             </a>
            </div>
          </div>

          {/* Tablet Navigation (md screens) */}
          <div className="hidden md:flex lg:hidden items-center space-x-3">
            <LanguageSwitcher />
            {isAdminAuthenticated ? (
              <a
                href="/admin-panel"
                className="bg-red-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-red-700 transition-colors text-sm"
              >
                Admin Panel
              </a>
            ) : (
              <a
                href="/admin-login"
                className="bg-gray-600 text-white px-3 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors text-sm"
              >
                Admin
              </a>
            )}
            <a
              href="https://wa.me/33675116218"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-accent text-white px-3 py-2 rounded-lg font-medium hover:bg-accent-dark transition-colors text-sm"
            >
               {t('chatWhatsApp')}
           </a>
            <a
              href="/contact"
              className="bg-primary text-white px-3 py-2 rounded-lg font-medium hover:bg-primary-dark transition-colors text-sm"
            >
               {t('getQuote')}
           </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-text-secondary hover:text-primary hover:bg-gray-50 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-3 bg-white border-t border-gray-100">
              {/* Navigation Links */}
              <div className="space-y-2">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`block px-4 py-3 text-base font-medium rounded-lg transition-colors ${
                      isActive(item.href)
                        ? 'text-primary bg-blue-50 border border-blue-200'
                        : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              
              {/* Language Switcher */}
              <div className="pt-4 border-t border-gray-100">
                <div className="px-4 pb-3">
                  <LanguageSwitcher />
                </div>
              </div>
              
              {/* User Actions */}
              <div className="space-y-3">
                
                {/* Action Buttons */}
                <div className="pt-3 border-t border-gray-100 space-y-2">
                  {isAdminAuthenticated ? (
                    <a
                      href="/admin-panel"
                      className="block w-full bg-red-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-red-700 transition-colors"
                    >
                      Admin Panel
                    </a>
                  ) : (
                    <a
                      href="/admin-login"
                      className="block w-full bg-gray-600 text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-gray-700 transition-colors"
                    >
                      Admin
                    </a>
                  )}
                  <a
                    href="https://wa.me/33675116218"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-accent text-white px-4 py-3 rounded-lg font-medium text-center hover:bg-accent-dark transition-colors"
                  >
                     {t('chatWhatsApp')}
                 </a>
                  <a
                    href="/contact"
                    className="block w-full bg-primary text-white px-4 py-3 rounded-lg font-medium hover:bg-primary-dark transition-colors text-center"
                  >
                     {t('getQuote')}
                 </a>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Tablet Navigation Menu */}
        <div className="hidden md:block lg:hidden">
          <nav className="flex items-center justify-center space-x-6 py-3 border-t border-gray-100">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                className={`px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                    isActive(item.href)
                    ? 'text-primary bg-blue-50 border border-blue-200'
                    : 'text-text-secondary hover:text-primary hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
