import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { AdminAuthProvider } from './contexts/AdminAuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieBanner from './components/CookieBanner';
import Home from './pages/Home';
import ServicesPricing from './pages/ServicesPricing';
import About from './pages/About';
import Contact from './pages/Contact';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import AdminLoginInfo from './components/AdminLoginInfo';
import AdminLoginForm from './components/auth/AdminLoginForm';
import SimpleAdminPanel from './components/admin/SimpleAdminPanel';
function App() {
  return (
    <LanguageProvider>
    <AdminAuthProvider>
    <Router>
      <div className="min-h-screen bg-white">
        {/* SEO Meta Tags */}
        <title>Prep Center France - Amazon FBA Prep Services | 24h Turnaround EU</title>
        <meta name="description" content="Professional Amazon FBA prep center in France. 24h turnaround, quality control, FNSKU labeling, polybagging & fast shipping to European Amazon fulfillment centers. Trusted by EU sellers since 2020." />
        <meta name="keywords" content="Prep Center France, Amazon FBA Prep France, FBA prep services Europe, French prep center, Amazon FBA France, prep center Europe, FBA preparation France, Amazon fulfillment France, FNSKU labeling France, FBA prep EU, Amazon prep center France, FBA services France, European Amazon prep, France FBA prep center" />
        
        {/* Schema.org structured data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Prep Center France",
            "description": "Professional Amazon FBA prep center in France with 24h turnaround. Reception, quality control, FNSKU labeling, polybagging and fast shipping to European Amazon fulfillment centers.",
            "url": "https://prep-center.eu",
            "sameAs": [
              "https://www.linkedin.com/company/prep-center-france",
              "https://www.tiktok.com/@prepcenter.france"
            ],
            "serviceArea": {
              "@type": "Place",
              "name": "Europe"
            },
            "areaServed": ["France", "Germany", "Italy", "Spain", "Netherlands", "Belgium", "Poland", "Europe"],
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Amazon FBA Prep Services",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FNSKU Labeling",
                    "description": "Professional FNSKU labeling with polybagging included"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "FBM Shipping",
                    "description": "Multi-platform order fulfillment for Amazon, eBay, Shopify"
                  }
                }
              ]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "35350 La Gouesnière",
              "addressLocality": "La Gouesnière",
              "postalCode": "35350",
              "addressCountry": "FR"
            },
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+33675116218",
              "contactType": "customer service",
              "email": "contact@prep-center.eu",
              "availableLanguage": ["French", "English", "Romanian"]
            }
          })}
        </script>

        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services-pricing" element={<ServicesPricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path="/register" />
            <Route path="/admin-login" element={<AdminLoginForm />} />
            <Route path="/admin-panel" element={<SimpleAdminPanel />} />
            <Route path="/admin-info" element={<AdminLoginInfo />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
        
        {/* Analytics placeholders */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_MEASUREMENT_ID');
          `}
        </script>
      </div>
    </Router>
    </AdminAuthProvider>
    </LanguageProvider>
  );
}

export default App;