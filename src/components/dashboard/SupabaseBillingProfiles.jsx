import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Building, User, Check, X } from 'lucide-react';
import { useSupabaseAuth } from '../../contexts/SupabaseAuthContext';
import { supabaseHelpers } from '../../config/supabase';

function SupabaseBillingProfiles() {
  const { user } = useSupabaseAuth();
  const [profiles, setProfiles] = useState([]);
  const [isCreating, setIsCreating] = useState(false);
  const [editingProfile, setEditingProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [formData, setFormData] = useState({
    type: 'individual',
    first_name: '',
    last_name: '',
    company_name: '',
    vat_number: '',
    siren_siret: '',
    country: 'FR',
    address: '',
    city: '',
    postal_code: '',
    phone: '',
    is_default: false
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

  useEffect(() => {
    if (user) {
      fetchProfiles();
    }
  }, [user]);

  const fetchProfiles = async () => {
    if (!user) return;
    
    const { data, error } = await supabaseHelpers.getBillingProfiles(user.id);
    if (error) {
      console.error('Error fetching profiles:', error);
    } else {
      setProfiles(data || []);
    }
  };

  const validateVAT = async (vatNumber, country) => {
    if (!vatNumber) return { valid: true };
    
    // Simple VAT format validation
    const vatRegex = {
      'FR': /^FR[0-9A-Z]{2}[0-9]{9}$/,
      'DE': /^DE[0-9]{9}$/,
      'IT': /^IT[0-9]{11}$/,
      'ES': /^ES[0-9A-Z][0-9]{7}[0-9A-Z]$/,
      'NL': /^NL[0-9]{9}B[0-9]{2}$/,
      'BE': /^BE[0-9]{10}$/,
      'PL': /^PL[0-9]{10}$/,
      'RO': /^RO[0-9]{2,10}$/
    };

    const regex = vatRegex[country];
    if (regex && !regex.test(vatNumber)) {
      return { valid: false, error: 'Format VAT invalid pentru această țară' };
    }

    return { valid: true };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    // VAT validation for companies
    if (formData.type === 'company' && formData.vat_number) {
      const vatValidation = await validateVAT(formData.vat_number, formData.country);
      if (!vatValidation.valid) {
        setMessage(`Validare VAT eșuată: ${vatValidation.error || 'Număr VAT invalid'}`);
        setLoading(false);
        return;
      }
    }

    const profileData = {
      ...formData,
      user_id: user.id
    };

    try {
      if (editingProfile) {
        const { error } = await supabaseHelpers.updateBillingProfile(editingProfile.id, formData);
        if (error) throw error;
        setMessage('Profilul a fost actualizat cu succes');
      } else {
        const { error } = await supabaseHelpers.createBillingProfile(profileData);
        if (error) throw error;
        setMessage('Profilul a fost creat cu succes');
      }
      resetForm();
      fetchProfiles();
    } catch (error) {
      setMessage(error.message || 'Eroare la salvarea profilului');
    }

    setLoading(false);
  };

  const handleEdit = (profile) => {
    setEditingProfile(profile);
    setFormData(profile);
    setIsCreating(true);
  };

  const handleDelete = async (profileId) => {
    if (!confirm('Ești sigur că vrei să ștergi acest profil de facturare?')) return;

    try {
      const { error } = await supabaseHelpers.deleteBillingProfile(profileId);
      if (error) throw error;
      setMessage('Profilul a fost șters cu succes');
      fetchProfiles();
    } catch (error) {
      setMessage(error.message || 'Eroare la ștergerea profilului');
    }
  };

  const resetForm = () => {
    setFormData({
      type: 'individual',
      first_name: '',
      last_name: '',
      company_name: '',
      vat_number: '',
      siren_siret: '',
      country: 'FR',
      address: '',
      city: '',
      postal_code: '',
      phone: '',
      is_default: false
    });
    setIsCreating(false);
    setEditingProfile(null);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-text-primary">Date de facturare</h2>
        <button
          onClick={() => setIsCreating(true)}
          className="flex items-center px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
        >
          <Plus className="w-4 h-4 mr-2" />
          Adaugă profil
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
              {editingProfile ? 'Editează profil' : 'Profil nou de facturare'}
            </h3>
            <button
              onClick={resetForm}
              className="text-text-secondary hover:text-text-primary"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Profile Type */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Tip profil
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="type"
                    value="individual"
                    checked={formData.type === 'individual'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <User className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>Persoană fizică</span>
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="type"
                    value="company"
                    checked={formData.type === 'company'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <Building className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>Firmă</span>
                </label>
              </div>
            </div>

            {/* Individual Fields */}
            {formData.type === 'individual' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first_name" className="block text-sm font-medium text-text-primary mb-2">
                    Prenume *
                  </label>
                  <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    required
                    value={formData.first_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label htmlFor="last_name" className="block text-sm font-medium text-text-primary mb-2">
                    Nume *
                  </label>
                  <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    required
                    value={formData.last_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
            )}

            {/* Company Fields */}
            {formData.type === 'company' && (
              <div className="space-y-6">
                <div>
                  <label htmlFor="company_name" className="block text-sm font-medium text-text-primary mb-2">
                    Denumire firmă *
                  </label>
                  <input
                    type="text"
                    id="company_name"
                    name="company_name"
                    required
                    value={formData.company_name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="vat_number" className="block text-sm font-medium text-text-primary mb-2">
                      Număr VAT
                    </label>
                    <input
                      type="text"
                      id="vat_number"
                      name="vat_number"
                      value={formData.vat_number}
                      onChange={handleChange}
                      placeholder="Ex: FR12345678901"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    />
                  </div>
                  {formData.country === 'FR' && (
                    <div>
                      <label htmlFor="siren_siret" className="block text-sm font-medium text-text-primary mb-2">
                        SIREN/SIRET
                      </label>
                      <input
                        type="text"
                        id="siren_siret"
                        name="siren_siret"
                        value={formData.siren_siret}
                        onChange={handleChange}
                        placeholder="Ex: 12345678901234"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Address Fields */}
            <div className="space-y-6">
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
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  <label htmlFor="postal_code" className="block text-sm font-medium text-text-primary mb-2">
                    Cod poștal *
                  </label>
                  <input
                    type="text"
                    id="postal_code"
                    name="postal_code"
                    required
                    value={formData.postal_code}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
              </div>
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
            </div>

            {/* Default Profile */}
            <div className="flex items-center">
              <input
                type="checkbox"
                id="is_default"
                name="is_default"
                checked={formData.is_default}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label htmlFor="is_default" className="ml-2 block text-sm text-text-secondary">
                Setează ca profil implicit
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
                {loading ? 'Se salvează...' : (editingProfile ? 'Actualizează' : 'Salvează')}
              </button>
            </div>
          </form>
        </div>
      )}

      {/* Profiles List */}
      <div className="space-y-4">
        {profiles.map((profile) => (
          <div key={profile.id} className="bg-white border border-gray-200 rounded-xl p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center mb-2">
                  {profile.type === 'company' ? (
                    <Building className="w-5 h-5 text-text-secondary mr-2" />
                  ) : (
                    <User className="w-5 h-5 text-text-secondary mr-2" />
                  )}
                  <h3 className="text-lg font-semibold text-text-primary">
                    {profile.type === 'company' ? profile.company_name : `${profile.first_name} ${profile.last_name}`}
                  </h3>
                  {profile.is_default && (
                    <span className="ml-2 px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                      Implicit
                    </span>
                  )}
                </div>
                <div className="text-text-secondary space-y-1">
                  {profile.type === 'company' && profile.vat_number && (
                    <p>VAT: {profile.vat_number}</p>
                  )}
                  {profile.type === 'company' && profile.siren_siret && (
                    <p>SIREN/SIRET: {profile.siren_siret}</p>
                  )}
                  <p>{profile.address}</p>
                  <p>{profile.city}, {profile.postal_code}</p>
                  <p>{countries.find(c => c.code === profile.country)?.name}</p>
                  {profile.phone && <p>Tel: {profile.phone}</p>}
                </div>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => handleEdit(profile)}
                  className="p-2 text-text-secondary hover:text-primary transition-colors"
                >
                  <Edit className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleDelete(profile.id)}
                  className="p-2 text-text-secondary hover:text-red-600 transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {profiles.length === 0 && !isCreating && (
        <div className="text-center py-12">
          <Building className="w-16 h-16 text-gray-300 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-text-secondary mb-2">
            Niciun profil de facturare
          </h3>
          <p className="text-text-light mb-6">
            Adaugă primul tău profil de facturare pentru a putea primi facturi.
          </p>
          <button
            onClick={() => setIsCreating(true)}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors"
          >
            Adaugă profil
          </button>
        </div>
      )}
    </div>
  );
}

export default SupabaseBillingProfiles;
