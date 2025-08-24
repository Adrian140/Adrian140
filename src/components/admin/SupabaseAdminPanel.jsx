import React, { useState, useEffect } from 'react';
import { Settings, DollarSign, Package, FileText, Users, Plus, Edit, Trash2, Save, X, LogOut } from 'lucide-react';
import { useSupabaseAuth } from '../../contexts/SupabaseAuthContext';
import { supabaseHelpers } from '../../config/supabase';

function SupabaseAdminPanel() {
  const { user, signOut } = useSupabaseAuth();
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  // Content management state
  const [content, setContent] = useState({
    heroTitle: "Prep Center France – 24h Turnaround to Amazon FBA",
    heroSubtitle: "Reception, quality control, FNSKU labeling, polybagging & fast shipping to EU Amazon FCs.",
    standardFBATitle: "Standard FBA Services",
    standardFBASubtitle: "Complete prep solution with everything included",
    fnSkuLabelingTitle: "FNSKU Labeling Service",
    standardRate: "€0.50",
    newCustomerRate: "€0.45",
    privateLabelTitle: "Private Label & Multi-Platform Services",
    privateLabelSubtitle: "Complete fulfillment solutions for Amazon, eBay, Shopify and custom websites",
    fbmShippingTitle: "FBM Shipping Rates",
    fbmShippingSubtitle: "Competitive rates based on your monthly volume",
    starterPrice: "€1.20",
    growthPrice: "€1.10",
    enterprisePrice: "€0.95",
    storageTitle: "Storage Solutions",
    storageSubtitle: "Secure and affordable storage for your inventory",
    palletStoragePrice: "€15",
    climateControlledPrice: "+€5"
  });

  const tabs = [
    { id: 'services', label: 'Servicii', icon: Package },
    { id: 'pricing', label: 'Prețuri', icon: DollarSign },
    { id: 'content', label: 'Conținut', icon: FileText },
    { id: 'settings', label: 'Setări', icon: Settings }
  ];

  useEffect(() => {
    if (user) {
      fetchServices();
    }
  }, [user]);

  const fetchServices = async () => {
    try {
      const { data, error } = await supabaseHelpers.getServices();
      if (error) throw error;
      setServices(data || []);
    } catch (error) {
      console.error('Error fetching services:', error);
    }
  };

  const handleSaveService = async (serviceData) => {
    setLoading(true);
    setMessage('');

    try {
      if (serviceData.id) {
        const { error } = await supabaseHelpers.updateService(serviceData.id, serviceData);
        if (error) throw error;
        setMessage('Serviciul a fost actualizat cu succes');
      } else {
        const { error } = await supabaseHelpers.createService(serviceData);
        if (error) throw error;
        setMessage('Serviciul a fost creat cu succes');
      }
      setIsEditing(null);
      setEditForm({});
      fetchServices();
    } catch (error) {
      setMessage(error.message || 'Eroare la salvarea serviciului');
    }

    setLoading(false);
  };

  const handleDeleteService = async (serviceId) => {
    if (!confirm('Ești sigur că vrei să ștergi acest serviciu?')) return;

    try {
      const { error } = await supabaseHelpers.deleteService(serviceId);
      if (error) throw error;
      setMessage('Serviciul a fost șters cu succes');
      fetchServices();
    } catch (error) {
      setMessage(error.message || 'Eroare la ștergerea serviciului');
    }
  };

  const startEdit = (service) => {
    setIsEditing(service.id || 'new');
    setEditForm(service);
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditForm({});
  };

  const handleContentSave = () => {
    setMessage('Conținutul a fost salvat cu succes');
    // În implementarea reală, aici ai salva în baza de date
  };

  const renderServicesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-primary">Gestionare Servicii</h2>
        <button
          onClick={() => startEdit({ title: '', description: '', features: [''], price: '', unit: '', category: '', active: true })}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adaugă Serviciu
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6">
            {isEditing === service.id ? (
              <div className="space-y-4">
                <input
                  type="text"
                  value={editForm.title || ''}
                  onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                  placeholder="Titlu serviciu"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <textarea
                  value={editForm.description || ''}
                  onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                  placeholder="Descriere"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={editForm.price || ''}
                    onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                    placeholder="Preț"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                  />
                  <input
                    type="text"
                    value={editForm.unit || ''}
                    onChange={(e) => setEditForm({ ...editForm, unit: e.target.value })}
                    placeholder="Unitate"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                  />
                </div>
                <select
                  value={editForm.category || ''}
                  onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                >
                  <option value="">Selectează categoria</option>
                  <option value="fba">FBA Prep</option>
                  <option value="fbm">FBM Shipping</option>
                  <option value="storage">Storage</option>
                  <option value="additional">Additional Services</option>
                </select>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSaveService(editForm)}
                    className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                  >
                    <Save className="w-4 h-4 mr-2" />
                    Salvează
                  </button>
                  <button
                    onClick={cancelEdit}
                    className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
                  >
                    Anulează
                  </button>
                </div>
              </div>
            ) : (
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">{service.title}</h3>
                <p className="text-text-secondary mb-4">{service.description}</p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-text-secondary">{service.unit}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEdit(service)}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editează
                  </button>
                  <button
                    onClick={() => handleDeleteService(service.id)}
                    className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center"
                  >
                    <Trash2 className="w-4 h-4 mr-2" />
                    Șterge
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}

        {/* Add New Service Form */}
        {isEditing === 'new' && (
          <div className="bg-white border-2 border-primary rounded-xl p-6">
            <h3 className="text-lg font-semibold text-text-primary mb-4">Serviciu Nou</h3>
            <div className="space-y-4">
              <input
                type="text"
                value={editForm.title || ''}
                onChange={(e) => setEditForm({ ...editForm, title: e.target.value })}
                placeholder="Titlu serviciu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <textarea
                value={editForm.description || ''}
                onChange={(e) => setEditForm({ ...editForm, description: e.target.value })}
                placeholder="Descriere"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={editForm.price || ''}
                  onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                  placeholder="Preț (ex: €0.50)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                />
                <input
                  type="text"
                  value={editForm.unit || ''}
                  onChange={(e) => setEditForm({ ...editForm, unit: e.target.value })}
                  placeholder="Unitate (ex: per product)"
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
              <select
                value={editForm.category || ''}
                onChange={(e) => setEditForm({ ...editForm, category: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              >
                <option value="">Selectează categoria</option>
                <option value="fba">FBA Prep</option>
                <option value="fbm">FBM Shipping</option>
                <option value="storage">Storage</option>
                <option value="additional">Additional Services</option>
              </select>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleSaveService(editForm)}
                  className="flex-1 bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Salvează
                </button>
                <button
                  onClick={cancelEdit}
                  className="flex-1 bg-gray-600 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
                >
                  Anulează
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );

  const renderPricingTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">Editare Prețuri</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* FBA Pricing */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri FBA</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Preț Standard FNSKU</label>
              <input
                type="text"
                value={content.standardRate}
                onChange={(e) => setContent({ ...content, standardRate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Preț Clienți Noi</label>
              <input
                type="text"
                value={content.newCustomerRate}
                onChange={(e) => setContent({ ...content, newCustomerRate: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* FBM Pricing */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri FBM</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Starter (0-999 units/month)</label>
              <input
                type="text"
                value={content.starterPrice}
                onChange={(e) => setContent({ ...content, starterPrice: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Growth (1000-1999 units/month)</label>
              <input
                type="text"
                value={content.growthPrice}
                onChange={(e) => setContent({ ...content, growthPrice: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Enterprise (2000+ units/month)</label>
              <input
                type="text"
                value={content.enterprisePrice}
                onChange={(e) => setContent({ ...content, enterprisePrice: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Storage Pricing */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Prețuri Storage</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Pallet Storage (per month)</label>
              <input
                type="text"
                value={content.palletStoragePrice}
                onChange={(e) => setContent({ ...content, palletStoragePrice: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Climate Controlled (extra)</label>
              <input
                type="text"
                value={content.climateControlledPrice}
                onChange={(e) => setContent({ ...content, climateControlledPrice: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleContentSave}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Salvează Toate Prețurile
      </button>
    </div>
  );

  const renderContentTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">Editare Conținut</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Hero Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Secțiunea Hero</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Principal</label>
              <input
                type="text"
                value={content.heroTitle}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu</label>
              <textarea
                value={content.heroSubtitle}
                onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Secțiunea Servicii</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Standard FBA</label>
              <input
                type="text"
                value={content.standardFBATitle}
                onChange={(e) => setContent({ ...content, standardFBATitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu Standard FBA</label>
              <input
                type="text"
                value={content.standardFBASubtitle}
                onChange={(e) => setContent({ ...content, standardFBASubtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu FNSKU Labeling</label>
              <input
                type="text"
                value={content.fnSkuLabelingTitle}
                onChange={(e) => setContent({ ...content, fnSkuLabelingTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Private Label Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Secțiunea Private Label</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Private Label</label>
              <input
                type="text"
                value={content.privateLabelTitle}
                onChange={(e) => setContent({ ...content, privateLabelTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu Private Label</label>
              <textarea
                value={content.privateLabelSubtitle}
                onChange={(e) => setContent({ ...content, privateLabelSubtitle: e.target.value })}
                rows={2}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        {/* Storage Section */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Secțiunea Storage</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Storage</label>
              <input
                type="text"
                value={content.storageTitle}
                onChange={(e) => setContent({ ...content, storageTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu Storage</label>
              <input
                type="text"
                value={content.storageSubtitle}
                onChange={(e) => setContent({ ...content, storageSubtitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleContentSave}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Salvează Tot Conținutul
      </button>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">Setări Generale</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Informații Contact</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Telefon</label>
              <input
                type="text"
                defaultValue="+33 6 75 11 62 18"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
              <input
                type="email"
                defaultValue="contact@prep-center.eu"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Adresă</label>
              <textarea
                defaultValue="35350 La Gouesnière, France"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Setări Site</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Limba Implicită</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="fr">Français</option>
                <option value="en">English</option>
                <option value="de">Deutsch</option>
                <option value="it">Italiano</option>
                <option value="es">Español</option>
                <option value="ro">Română</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Moneda</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleContentSave}
        className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
      >
        Salvează Setările
      </button>
    </div>
  );

  const renderTabContent = () => {
    switch (activeTab) {
      case 'services':
        return renderServicesTab();
      case 'pricing':
        return renderPricingTab();
      case 'content':
        return renderContentTab();
      case 'settings':
        return renderSettingsTab();
      default:
        return renderServicesTab();
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Acces Admin</h1>
          <p className="text-text-secondary mb-6">Trebuie să te autentifici pentru a accesa panoul admin.</p>
          <a
            href="/login"
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Autentificare
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold text-text-primary mb-2">Panou de Administrare</h1>
              <p className="text-text-secondary">Gestionează conținutul și setările site-ului</p>
            </div>
            <button
              onClick={signOut}
              className="flex items-center px-4 py-2 text-text-secondary hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Deconectare
            </button>
          </div>
        </div>

        {message && (
          <div className={`mb-6 px-4 py-3 rounded-lg ${
            message.includes('succes') 
              ? 'bg-green-50 border border-green-200 text-green-600'
              : 'bg-red-50 border border-red-200 text-red-600'
          }`}>
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
              {loading ? (
                <div className="flex justify-center items-center py-12">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
                </div>
              ) : (
                renderTabContent()
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupabaseAdminPanel;
