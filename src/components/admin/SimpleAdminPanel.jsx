import React, { useState } from 'react';
import { Settings, DollarSign, FileText, LogOut, Save, Edit } from 'lucide-react';
import { useAdminAuth } from '../../contexts/AdminAuthContext';

function SimpleAdminPanel() {
  const { adminLogout } = useAdminAuth();
  const [activeTab, setActiveTab] = useState('pricing');
  const [message, setMessage] = useState('');
  
  // Stare pentru prețuri
  const [pricing, setPricing] = useState({
    fnSkuStandard: '€0.50',
    fnSkuNewCustomer: '€0.45',
    fbmStarter: '€1.20',
    fbmGrowth: '€1.10',
    fbmEnterprise: '€0.95',
    storagePerPallet: '€15',
    climateControlled: '+€5'
  });

  // Stare pentru conținut
  const [content, setContent] = useState({
    heroTitle: 'Prep Center France – 24h Turnaround to Amazon FBA',
    heroSubtitle: 'Reception, quality control, FNSKU labeling, polybagging & fast shipping to EU Amazon FCs.',
    phone: '+33 6 75 11 62 18',
    email: 'contact@prep-center.eu',
    address: '35350 La Gouesnière, France',
    whatsappLink: 'https://wa.me/33675116218',
    calendlyLink: 'https://calendly.com/global-fulfill-hub'
  });

  const tabs = [
    { id: 'pricing', label: 'Prețuri', icon: DollarSign },
    { id: 'content', label: 'Conținut', icon: FileText },
    { id: 'settings', label: 'Setări', icon: Settings }
  ];

  const handleSavePricing = () => {
    // În implementarea reală, aici ai salva în baza de date
    localStorage.setItem('adminPricing', JSON.stringify(pricing));
    setMessage('Prețurile au fost salvate cu succes!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handleSaveContent = () => {
    // În implementarea reală, aici ai salva în baza de date
    localStorage.setItem('adminContent', JSON.stringify(content));
    setMessage('Conținutul a fost salvat cu succes!');
    setTimeout(() => setMessage(''), 3000);
  };

  const handlePricingChange = (field, value) => {
    setPricing({
      ...pricing,
      [field]: value
    });
  };

  const handleContentChange = (field, value) => {
    setContent({
      ...content,
      [field]: value
    });
  };

  const renderPricingTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Gestionare Prețuri</h2>
      
      {/* FBA Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri FBA</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Preț Standard FNSKU
            </label>
            <input
              type="text"
              value={pricing.fnSkuStandard}
              onChange={(e) => handlePricingChange('fnSkuStandard', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Preț Clienți Noi FNSKU
            </label>
            <input
              type="text"
              value={pricing.fnSkuNewCustomer}
              onChange={(e) => handlePricingChange('fnSkuNewCustomer', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* FBM Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri FBM</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Starter (0-999 units/month)
            </label>
            <input
              type="text"
              value={pricing.fbmStarter}
              onChange={(e) => handlePricingChange('fbmStarter', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Growth (1000-1999 units/month)
            </label>
            <input
              type="text"
              value={pricing.fbmGrowth}
              onChange={(e) => handlePricingChange('fbmGrowth', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Enterprise (2000+ units/month)
            </label>
            <input
              type="text"
              value={pricing.fbmEnterprise}
              onChange={(e) => handlePricingChange('fbmEnterprise', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Storage Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri Storage</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Storage per Pallet (per month)
            </label>
            <input
              type="text"
              value={pricing.storagePerPallet}
              onChange={(e) => handlePricingChange('storagePerPallet', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Climate Controlled (extra)
            </label>
            <input
              type="text"
              value={pricing.climateControlled}
              onChange={(e) => handlePricingChange('climateControlled', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSavePricing}
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center"
      >
        <Save className="w-5 h-5 mr-2" />
        Salvează Prețurile
      </button>
    </div>
  );

  const renderContentTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Gestionare Conținut</h2>
      
      {/* Hero Section */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Secțiunea Hero</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Titlu Principal
            </label>
            <input
              type="text"
              value={content.heroTitle}
              onChange={(e) => handleContentChange('heroTitle', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Subtitlu
            </label>
            <textarea
              value={content.heroSubtitle}
              onChange={(e) => handleContentChange('heroSubtitle', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Informații Contact</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Telefon
            </label>
            <input
              type="text"
              value={content.phone}
              onChange={(e) => handleContentChange('phone', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Email
            </label>
            <input
              type="email"
              value={content.email}
              onChange={(e) => handleContentChange('email', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-text-primary mb-2">
              Adresă
            </label>
            <input
              type="text"
              value={content.address}
              onChange={(e) => handleContentChange('address', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Link WhatsApp
            </label>
            <input
              type="url"
              value={content.whatsappLink}
              onChange={(e) => handleContentChange('whatsappLink', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Link Calendly
            </label>
            <input
              type="url"
              value={content.calendlyLink}
              onChange={(e) => handleContentChange('calendlyLink', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <button
        onClick={handleSaveContent}
        className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center"
      >
        <Save className="w-5 h-5 mr-2" />
        Salvează Conținutul
      </button>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Setări Generale</h2>
      
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Informații Site</h3>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Nume Site
            </label>
            <input
              type="text"
              defaultValue="Prep Center France"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Descriere SEO
            </label>
            <textarea
              defaultValue="Professional Amazon FBA prep center in France. 24h turnaround, quality control, FNSKU labeling, polybagging & fast shipping to European Amazon fulfillment centers."
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-text-primary mb-2">
              Limba Implicită
            </label>
            <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary">
              <option value="fr">Français</option>
              <option value="en">English</option>
              <option value="de">Deutsch</option>
              <option value="it">Italiano</option>
              <option value="es">Español</option>
              <option value="ro">Română</option>
            </select>
          </div>
        </div>
        
        <button className="mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors flex items-center">
          <Save className="w-5 h-5 mr-2" />
          Salvează Setările
        </button>
      </div>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'pricing':
        return renderPricingTab();
      case 'content':
        return renderContentTab();
      case 'settings':
        return renderSettingsTab();
      default:
        return renderPricingTab();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">Panou de Administrare</h1>
              <p className="text-text-secondary">Gestionează prețurile și conținutul site-ului</p>
            </div>
            <button
              onClick={adminLogout}
              className="flex items-center px-4 py-2 text-text-secondary hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Deconectare
            </button>
          </div>
        </div>

        {message && (
          <div className="mb-6 px-4 py-3 rounded-lg bg-green-50 border border-green-200 text-green-600">
            {message}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-sm p-6">
              <nav className="space-y-2">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center px-4 py-3 text-left rounded-lg transition-colors ${
                      activeTab === tab.id
                        ? 'bg-primary text-white'
                        : 'text-text-secondary hover:bg-gray-50'
                    }`}
                  >
                    <tab.icon className="w-5 h-5 mr-3" />
                    {tab.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-xl shadow-sm p-6">
              {renderTabContent()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SimpleAdminPanel;
