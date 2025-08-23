import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, MapPin, Home, Building } from 'lucide-react';
import { apiClient } from '../../config/api';

function AddressBook() {
  const [addresses, setAddresses] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingAddress, setEditingAddress] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    type: 'shipping', // shipping, billing, both
    label: '',
    firstName: '',
    lastName: '',
    company: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'FR',
    phone: '',
    isDefault: false
  });

  const countries = [
    { code: 'FR', name: 'France' },
    { code: 'DE', name: 'Germany' },
    { code: 'IT', name: 'Italy' },
    { code: 'ES', name: 'Spain' },
    { code: 'NL', name: 'Netherlands' },
    { code: 'BE', name: 'Belgium' },
    { code: 'PL', name: 'Poland' },
    { code: 'RO', name: 'Romania' }
  ];

  const addressTypes = [
    { value: 'shipping', label: 'Adresă de livrare', icon: Home },
    { value: 'billing', label: 'Adresă de facturare', icon: Building },
    { value: 'both', label: 'Livrare și facturare', icon: MapPin }
  ];

  useEffect(() => {
    fetchAddresses();
  }, []);

  const fetchAddresses = async () => {
    try {
      const data = await apiClient.addresses.getAll();
      setAddresses(data);
    } catch (error) {
      console.error('Error fetching addresses:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    try {
      if (editingAddress) {
        await apiClient.addresses.update(editingAddress.id, formData);
        setMessage('Adresa a fost actualizată cu succes');
      } else {
        await apiClient.addresses.create(formData);
        setMessage('Adresa a fost adăugată cu succes');
      }
      resetForm();
      fetchAddresses();
   } catch (error) {
       setMessage(error.message || 'Eroare la salvarea adresei');
   }

    setLoading(false);
  };

  const handleEdit = (address) => {
    setEditingAddress(address);
    setFormData(address);
    setIsCreating(true);
  };

  const handleDelete = async (addressId) => {
    if (!confirm('Ești sigur că vrei să ștergi această adresă?')) return;

    try {
       await apiClient.addresses.delete(addressId);
      setMessage('Adresa a fost ștearsă cu succes');
      fetchAddresses();
   } catch (error) {
       setMessage(error.message || 'Eroare la ștergerea adresei');
   }
  };

  const resetForm = () => {
    setFormData({
      type: 'shipping',
      label: '',
      firstName: '',
      lastName: '',
      company: '',
      address: '',
      city: '',
      postalCode: '',
      country: 'FR',
      phone: '',
      isDefault: false
    });
    setIsCreating(false);
    setEditingAddress(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const getTypeIcon = (type) => {
    const typeConfig = addressTypes.find(t => t.value === type);
    return typeConfig ? typeConfig.icon : MapPin;
  };

  const getTypeLabel = (type) => {
    const typeConfig = addressTypes.find(t => t.value === type);
    return typeConfig ? typeConfig.label : type;
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-text-primary">Adrese</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adaugă adresă
        </button>
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

      {isCreating && (
        <div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-semibold text-text-primary">
              {editingAddress ? 'Editează adresa' : 'Adresă nouă'}
            </h3>
            <button
              onClick={resetForm}
              className="text-text-secondary hover:text-text-primary"
            >
              ✕
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Address Type */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Tip adresă
              </label>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {addressTypes.map((type) => (
                  <label key={type.value} className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                    <input
                      type="radio"
                      name="type"
                      value={type.value}
                      checked={formData.type === type.value}
                      onChange={handleChange}
                      className="mr-3"
                    />
                    <type.icon className="w-5 h-5 mr-2 text-text-secondary" />
                    <span>{type.label}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Label */}
            <div>
              <label htmlFor="label" className="block text-sm font-medium text-text-primary mb-2">
                Etichetă (opțional)
              </label>
              <input
                type="text"
                id="label"
                name="label"
                value={formData.label}
                onChange={handleChange}
                placeholder="Ex: Acasă, Birou, Depozit..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Name Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                  Prenume *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                  Nume *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Company */}
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-text-primary mb-2">
                Companie (opțional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Address */}
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-text-primary mb-2">
                Adresă *
              </label>
              <textarea
                id="address"
                name="address"
                required
                rows={3}
                value={formData.address}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* City, Postal Code, Country */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="city" className="block text-sm font-medium text-text-primary mb-2">
                  Oraș *
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  required
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="postalCode" className="block text-sm font-medium text-text-primary mb-2">
                  Cod poștal *
                </label>
                <input
                  type="text"
                  id="postalCode"
                  name="postalCode"
                  required
                  value={formData.postalCode}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="country" className="block text-sm font-medium text-text-primary mb-2">
                  Țară *
                </label>
                <select
                  id="country"
                  name="country"
                  required
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                >
                  {countries.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Phone */}
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-text-primary mb-2">
                Telefon
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              />
            </div>

            {/* Default Address */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isDefault"
                name="isDefault"
                checked={formData.isDefault}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="isDefault" className="ml-2 block text-sm text-text-secondary">
                Setează ca adresă implicită
              </label>
            </div>

            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-3 border border-gray-300 text-text-secondary rounded-lg hover:bg-gray-50 transition-colors"
              >
                Anulează
              </button>
              <button
                type="submit"
                disabled={loading}
                className="px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {loading ? 'Se salvează...' : (editingAddress ? 'Actualizează' : 'Salvează')}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Addresses List */}
      <div className="space-y-4">
        {addresses.map((address) => {
          const TypeIcon = getTypeIcon(address.type);
          return (
            <div key={address.id} className="bg-white border border-gray-200 rounded-xl p-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <TypeIcon className="w-5 h-5 text-text-secondary mr-2" />
                    <h3 className="text-lg font-semibold text-text-primary">
                      {address.label || `${address.firstName} ${address.lastName}`}
                    </h3>
                    {address.isDefault && (
                      <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                        Implicit
                      </span>
                    )}
                  </div>
                  <div className="text-text-secondary space-y-1">
                    <p className="font-medium">{getTypeLabel(address.type)}</p>
                    <p>{address.firstName} {address.lastName}</p>
                    {address.company && <p>{address.company}</p>}
                    <p>{address.address}</p>
                    <p>{address.city}, {address.postalCode}</p>
                    <p>{countries.find(c => c.code === address.country)?.name}</p>
                    {address.phone && <p>Tel: {address.phone}</p>}
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEdit(address)}
                    className="p-2 text-text-secondary hover:text-primary transition-colors"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleDelete(address.id)}
                    className="p-2 text-text-secondary hover:text-red-600 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {addresses.length === 0 && !isCreating && (
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-secondary mb-2">
            Nicio adresă salvată
          </h3>
          <p className="text-text-light mb-6">
            Adaugă adrese pentru livrare și facturare pentru a finaliza comenzile mai rapid.
          </p>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Adaugă prima adresă
          </button>
        </div>
      )}
    </div>
  );
}

export default AddressBook;
