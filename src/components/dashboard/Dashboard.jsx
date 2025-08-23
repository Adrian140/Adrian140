import React, { useState } from 'react';
import { User, CreditCard, FileText, Shield, MapPin, LogOut } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import PersonalProfile from './PersonalProfile';
import BillingProfiles from './BillingProfiles';
import InvoicesList from './InvoicesList';
import SecuritySettings from './SecuritySettings';
import AddressBook from './AddressBook';

function Dashboard() {
  const [activeTab, setActiveTab] = useState('profile');
  const { user, logout } = useAuth();

  const tabs = [
    { id: 'profile', label: 'Date personale', icon: User },
    { id: 'addresses', label: 'Adrese', icon: MapPin },
    { id: 'billing', label: 'Date de facturare', icon: CreditCard },
    { id: 'invoices', label: 'Facturile mele', icon: FileText },
    { id: 'security', label: 'Securitate', icon: Shield }
  ];

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <PersonalProfile />;
      case 'addresses':
        return <AddressBook />;
      case 'billing':
        return <BillingProfiles />;
      case 'invoices':
        return <InvoicesList />;
      case 'security':
        return <SecuritySettings />;
      default:
        return <PersonalProfile />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-text-primary">
                Bună, {user?.firstName || 'Utilizator'}!
              </h1>
              <p className="text-text-secondary">
                Gestionează-ți contul și preferințele
              </p>
            </div>
            <button
              onClick={logout}
              className="flex items-center px-4 py-2 text-text-secondary hover:text-red-600 transition-colors"
            >
              <LogOut className="w-5 h-5 mr-2" />
              Deconectare
            </button>
          </div>
        </div>

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

export default Dashboard;
