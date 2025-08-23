import React, { useState, useEffect } from 'react';
import { Settings, DollarSign, Package, FileText, Users, Plus, Edit, Trash2, Save, X, Upload, Eye } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { apiClient } from '../../config/api';

function AdminPanel() {
  const [activeTab, setActiveTab] = useState('services');
  const [services, setServices] = useState([]);
  const [pricing, setPricing] = useState([]);
  const [content, setContent] = useState({});
  const [users, setUsers] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [editForm, setEditForm] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const { user } = useAuth();

  const tabs = [
    { id: 'services', label: 'Servicii', icon: Package },
    { id: 'pricing', label: 'Prețuri', icon: DollarSign },
    { id: 'content', label: 'Conținut', icon: FileText },
    { id: 'pricingContent', label: 'Prețuri & Texte', icon: FileText },
    { id: 'users', label: 'Utilizatori', icon: Users },
    { id: 'settings', label: 'Setări', icon: Settings }
  ];

  useEffect(() => {
    fetchData();
  }, [activeTab]);

  const fetchData = async () => {
    setLoading(true);
    
   try {
      let data;
      switch (activeTab) {
        case 'services':
          data = await apiClient.admin.getServices();
          setServices(data);
          break;
        case 'pricing':
          data = await apiClient.admin.getPricing();
          setPricing(data);
          break;
        case 'content':
          data = await apiClient.admin.getContent();
          setContent(data);
          break;
        case 'pricingContent':
          data = await apiClient.admin.getPricingContent();
          setContent(data);
          break;
        case 'users':
          data = await apiClient.admin.getUsers();
          setUsers(data);
          break;
      }
    } catch (error) {
      console.error('Error fetching data:', error);
       setMessage('Eroare la încărcarea datelor');
   }
    setLoading(false);
  };

  const handleSave = async (item, type) => {
    setLoading(true);
    
   try {
      if (type === 'services') {
        if (item.id) {
          await apiClient.admin.updateService(item.id, item);
        } else {
          await apiClient.admin.createService(item);
        }
      } else if (type === 'pricing') {
        if (item.id) {
          await apiClient.admin.updatePricing(item.id, item);
        } else {
          await apiClient.admin.createPricing(item);
        }
      } else if (type === 'content') {
        await apiClient.admin.updateContent(item);
      } else if (type === 'pricingContent') {
        await apiClient.admin.updatePricingContent(item);
      }
      
      setMessage('Salvat cu succes!');
      setIsEditing(null);
      setEditForm({});
      fetchData();
   } catch (error) {
       setMessage(error.message || 'Eroare la salvare');
  }
    setLoading(false);
  };

  const handleDelete = async (id, type) => {
    if (!confirm('Ești sigur că vrei să ștergi acest element?')) return;

    try {
       if (type === 'services') {
        await apiClient.admin.deleteService(id);
      } else if (type === 'pricing') {
        await apiClient.admin.deletePricing(id);
      }
      
      setMessage('Șters cu succes!');
      fetchData();
   } catch (error) {
       setMessage(error.message || 'Eroare la ștergere');
   }
  };

  const startEdit = (item, type) => {
    setIsEditing(`${type}-${item.id || 'new'}`);
    setEditForm(item);
  };

  const cancelEdit = () => {
    setIsEditing(null);
    setEditForm({});
  };

  const renderServicesTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-primary">Gestionare Servicii</h2>
        <button
          onClick={() => startEdit({ title: '', description: '', features: [''], price: '', unit: '' }, 'services')}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adaugă Serviciu
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div key={service.id} className="bg-white border border-gray-200 rounded-xl p-6">
            {isEditing === `services-${service.id}` ? (
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
                <div>
                  <label className="block text-sm font-medium mb-2">Caracteristici:</label>
                  {(editForm.features || ['']).map((feature, index) => (
                    <div key={index} className="flex mb-2">
                      <input
                        type="text"
                        value={feature}
                        onChange={(e) => {
                          const newFeatures = [...(editForm.features || [''])];
                          newFeatures[index] = e.target.value;
                          setEditForm({ ...editForm, features: newFeatures });
                        }}
                        placeholder="Caracteristică"
                        className="flex-1 px-3 py-2 border border-gray-300 rounded-lg mr-2"
                      />
                      <button
                        onClick={() => {
                          const newFeatures = (editForm.features || ['']).filter((_, i) => i !== index);
                          setEditForm({ ...editForm, features: newFeatures });
                        }}
                        className="text-red-600 hover:text-red-800"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  ))}
                  <button
                    onClick={() => setEditForm({ ...editForm, features: [...(editForm.features || ['']), ''] })}
                    className="text-primary hover:text-primary-dark text-sm"
                  >
                    + Adaugă caracteristică
                  </button>
                </div>
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
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleSave(editForm, 'services')}
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
                <ul className="text-sm text-text-secondary mb-4">
                  {service.features?.map((feature, index) => (
                    <li key={index} className="mb-1">• {feature}</li>
                  ))}
                </ul>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-lg font-bold text-primary">{service.price}</span>
                  <span className="text-sm text-text-secondary">{service.unit}</span>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => startEdit(service, 'services')}
                    className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Edit className="w-4 h-4 mr-2" />
                    Editează
                  </button>
                  <button
                    onClick={() => handleDelete(service.id, 'services')}
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
      </div>
    </div>
  );

  const renderPricingTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-text-primary">Gestionare Prețuri</h2>
        <button
          onClick={() => startEdit({ service: '', price: '', unit: '', category: '' }, 'pricing')}
          className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors flex items-center"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adaugă Preț
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Serviciu</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Preț</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Unitate</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Categorie</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acțiuni</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {pricing.map((item) => (
              <tr key={item.id}>
                {isEditing === `pricing-${item.id}` ? (
                  <>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editForm.service || ''}
                        onChange={(e) => setEditForm({ ...editForm, service: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editForm.price || ''}
                        onChange={(e) => setEditForm({ ...editForm, price: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4">
                      <input
                        type="text"
                        value={editForm.unit || ''}
                        onChange={(e) => setEditForm({ ...editForm, unit: e.target.value })}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                      />
                    </td>
                    <td className="px-6 py-4">
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
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleSave(editForm, 'pricing')}
                          className="text-green-600 hover:text-green-800"
                        >
                          <Save className="w-4 h-4" />
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="text-gray-600 hover:text-gray-800"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.service}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.price}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.unit}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.category}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button
                          onClick={() => startEdit(item, 'pricing')}
                          className="text-blue-600 hover:text-blue-800"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(item.id, 'pricing')}
                          className="text-red-600 hover:text-red-800"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderContentTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">Gestionare Conținut</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Texte Homepage</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Principal</label>
              <input
                type="text"
                value={content.heroTitle || ''}
                onChange={(e) => setContent({ ...content, heroTitle: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu</label>
              <textarea
                value={content.heroSubtitle || ''}
                onChange={(e) => setContent({ ...content, heroSubtitle: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={() => handleSave(content, 'content')}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Salvează Modificările
            </button>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Informații Contact</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Telefon</label>
              <input
                type="text"
                value={content.phone || ''}
                onChange={(e) => setContent({ ...content, phone: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Email</label>
              <input
                type="email"
                value={content.email || ''}
                onChange={(e) => setContent({ ...content, email: e.target.value })}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Adresă</label>
              <textarea
                value={content.address || ''}
                onChange={(e) => setContent({ ...content, address: e.target.value })}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <button
              onClick={() => handleSave(content, 'content')}
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors"
            >
              Salvează Modificările
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUsersTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">Gestionare Utilizatori</h2>
      
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nume</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rol</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Data Înregistrării</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Acțiuni</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {user.firstName} {user.lastName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <span className={`px-2 py-1 text-xs rounded-full ${
                    user.role === 'admin' ? 'bg-red-100 text-red-800' : 'bg-green-100 text-green-800'
                  }`}>
                    {user.role}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(user.createdAt).toLocaleDateString('ro-RO')}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                  <div className="flex space-x-2">
                    <button className="text-blue-600 hover:text-blue-800">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="text-green-600 hover:text-green-800">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderSettingsTab = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-text-primary">Setări Generale</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-text-primary mb-4">Logo și Branding</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Logo Principal</label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                <p className="text-sm text-gray-500">Încarcă logo-ul principal</p>
                <input type="file" className="hidden" accept="image/*" />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Nume Companie</label>
              <input
                type="text"
                defaultValue="Global Fulfill Hub"
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
                <option value="ro">Română</option>
                <option value="en">English</option>
                <option value="fr">Français</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Moneda</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded-lg">
                <option value="EUR">EUR (€)</option>
                <option value="USD">USD ($)</option>
                <option value="RON">RON (lei)</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Mod Mentenanță</label>
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span className="text-sm text-text-secondary">Activează modul mentenanță</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderPricingContentTab = () => (
    <div className="space-y-8">
      <h2 className="text-2xl font-bold text-text-primary">Editare Prețuri și Texte</h2>
      
      {/* Standard FBA Services */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6">Standard FBA Services</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Secțiune</label>
              <input
                type="text"
                defaultValue="Standard FBA Services"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu</label>
              <input
                type="text"
                defaultValue="Complete prep solution with everything included"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Serviciu</label>
              <input
                type="text"
                defaultValue="FNSKU Labeling Service"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Preț Standard</label>
              <input
                type="text"
                defaultValue="€0.50"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Preț Clienți Noi</label>
              <input
                type="text"
                defaultValue="€0.45"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          Salvează Modificările
        </button>
      </div>

      {/* Private Label & Multi-Platform */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6">Private Label & Multi-Platform Services</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Secțiune</label>
              <input
                type="text"
                defaultValue="Private Label & Multi-Platform Services"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu</label>
              <textarea
                rows={2}
                defaultValue="Complete fulfillment solutions for Amazon, eBay, Shopify and custom websites"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Custom Packaging Design</label>
              <input
                type="text"
                defaultValue="Custom Quote"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Product Sourcing Consultation</label>
              <input
                type="text"
                defaultValue="Free"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Brand Compliance Check</label>
              <input
                type="text"
                defaultValue="€0.20 / unit"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Amazon FBM Orders</label>
              <input
                type="text"
                defaultValue="€1.20 / order"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">eBay Integration</label>
              <input
                type="text"
                defaultValue="€1.30 / order"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Shopify/Website Orders</label>
              <input
                type="text"
                defaultValue="€1.40 / order"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          Salvează Modificările
        </button>
      </div>

      {/* FBM Shipping Rates */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6">FBM Shipping Rates</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Secțiune</label>
              <input
                type="text"
                defaultValue="FBM Shipping Rates"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Subtitlu</label>
              <input
                type="text"
                defaultValue="Competitive rates based on your monthly volume"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Starter (0-999 units/month)</label>
              <input
                type="text"
                defaultValue="€1.20"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Growth (1000-1999 units/month)</label>
              <input
                type="text"
                defaultValue="€1.10"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Enterprise (2000+ units/month)</label>
              <input
                type="text"
                defaultValue="€0.95"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          Salvează Modificările
        </button>
      </div>

      {/* FBM Transport Pricing */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-6">FBM Transport Pricing</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Titlu Secțiune</label>
              <input
                type="text"
                defaultValue="FBM Transport Pricing"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Delivery in France (&lt;2kg)</label>
              <input
                type="text"
                defaultValue="€5.25"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">International delivery (&lt;3kg)</label>
              <input
                type="text"
                defaultValue="€10.60"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Dangerous goods (max 60x40x40cm, 20kg)</label>
              <input
                type="text"
                defaultValue="€12.40"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-primary mb-2">Descriere Transport Periculos</label>
              <input
                type="text"
                defaultValue="Via UPS - 24h delivery"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
              />
            </div>
          </div>
        </div>
        <button className="mt-4 bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors">
          Salvează Modificările
        </button>
      </div>
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
      case 'users':
        return renderUsersTab();
      case 'settings':
        return renderSettingsTab();
      case 'pricingContent':
        return renderPricingContentTab();
      default:
        return renderServicesTab();
    }
  };

  if (!user || user.role !== 'admin') {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-text-primary mb-4">Acces Interzis</h1>
          <p className="text-text-secondary">Nu aveți permisiuni de administrator.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <h1 className="text-3xl font-bold text-text-primary mb-2">Panou de Administrare</h1>
          <p className="text-text-secondary">Gestionează conținutul și setările site-ului</p>
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

export default AdminPanel;