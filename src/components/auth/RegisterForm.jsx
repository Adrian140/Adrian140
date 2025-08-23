import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Building } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

function RegisterForm() {
  const [formData, setFormData] = useState({
    accountType: 'individual', // 'individual' or 'company'
    firstName: '',
    lastName: '',
    companyName: '',
    cui: '',
    vatNumber: '',
    companyAddress: '',
    companyCity: '',
    companyPostalCode: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false,
    acceptMarketing: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const { register } = useAuth();
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const minLength = password.length >= 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasNumber = /\d/.test(password);
    return minLength && hasUpperCase && hasNumber;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess('');

    // Validation based on account type
    if (formData.accountType === 'individual') {
      if (!formData.firstName || !formData.lastName) {
        setError('Prenumele și numele sunt obligatorii pentru persoanele fizice');
        setLoading(false);
        return;
      }
    } else if (formData.accountType === 'company') {
      if (!formData.companyName || !formData.cui || !formData.companyAddress || !formData.companyCity || !formData.companyPostalCode) {
        setError('Toate câmpurile marcate cu * sunt obligatorii pentru firme');
        setLoading(false);
        return;
      }
    }
    // Validation
    if (!validatePassword(formData.password)) {
      setError('Parola trebuie să aibă minim 8 caractere, o literă mare și o cifră');
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError('Parolele nu se potrivesc');
      setLoading(false);
      return;
    }

    if (!formData.acceptTerms) {
      setError('Trebuie să accepți Termenii și Condițiile');
      setLoading(false);
      return;
    }

    const result = await register(formData);
    
    if (result.success) {
      setSuccess(result.message);
      setTimeout(() => navigate('/login'), 3000);
    } else {
      setError(result.error);
    }
    
    setLoading(false);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-text-primary">
            Creează cont
          </h2>
          <p className="mt-2 text-center text-sm text-text-secondary">
            Sau{' '}
            <Link to="/login" className="font-medium text-primary hover:text-primary-dark">
              autentifică-te aici
            </Link>
          </p>
        </div>
        
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}
          
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg">
              {success}
            </div>
          )}
          
          <div className="space-y-4">
            {/* Account Type Selection */}
            <div>
              <label className="block text-sm font-medium text-text-primary mb-3">
                Tip cont
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="accountType"
                    value="individual"
                    checked={formData.accountType === 'individual'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <User className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>Persoană fizică</span>
                </label>
                <label className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50">
                  <input
                    type="radio"
                    name="accountType"
                    value="company"
                    checked={formData.accountType === 'company'}
                    onChange={handleChange}
                    className="mr-3"
                  />
                  <Building className="w-5 h-5 mr-2 text-text-secondary" />
                  <span>Firmă</span>
                </label>
              </div>
            </div>

            {/* Individual Fields */}
            {formData.accountType === 'individual' && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-text-primary mb-2">
                    Prenume *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Prenume"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-text-primary mb-2">
                    Nume *
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Nume"
                  />
                </div>
              </div>
            )}

            {/* Company Fields */}
            {formData.accountType === 'company' && (
              <div className="space-y-4">
                <div>
                  <label htmlFor="companyName" className="block text-sm font-medium text-text-primary mb-2">
                    Nume companie *
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                    <input
                      id="companyName"
                      name="companyName"
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={handleChange}
                      className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="Denumirea companiei"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="cui" className="block text-sm font-medium text-text-primary mb-2">
                      CUI *
                    </label>
                    <input
                      id="cui"
                      name="cui"
                      type="text"
                      required
                      value={formData.cui}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="RO12345678"
                    />
                  </div>
                  <div>
                    <label htmlFor="vatNumber" className="block text-sm font-medium text-text-primary mb-2">
                      Cod TVA (opțional)
                    </label>
                    <input
                      id="vatNumber"
                      name="vatNumber"
                      type="text"
                      value={formData.vatNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="RO12345678"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="companyAddress" className="block text-sm font-medium text-text-primary mb-2">
                    Adresa companiei *
                  </label>
                  <input
                    id="companyAddress"
                    name="companyAddress"
                    type="text"
                    required
                    value={formData.companyAddress}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Strada, numărul"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="companyCity" className="block text-sm font-medium text-text-primary mb-2">
                      Oraș *
                    </label>
                    <input
                      id="companyCity"
                      name="companyCity"
                      type="text"
                      required
                      value={formData.companyCity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="București"
                    />
                  </div>
                  <div>
                    <label htmlFor="companyPostalCode" className="block text-sm font-medium text-text-primary mb-2">
                      Cod poștal *
                    </label>
                    <input
                      id="companyPostalCode"
                      name="companyPostalCode"
                      type="text"
                      required
                      value={formData.companyPostalCode}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                      placeholder="010101"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Email Field - Common for both types */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-2">
                Email *
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            {/* Password Fields - Common for both types */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text-primary mb-2">
                Parolă *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                <input
                  id="password"
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Minim 8 caractere, 1 majusculă, 1 cifră"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-light hover:text-text-secondary"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
                Confirmă parola *
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-light w-5 h-5" />
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? 'text' : 'password'}
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="pl-10 pr-10 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Confirmă parola"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-light hover:text-text-secondary"
                >
                  {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start">
              <input
                id="acceptTerms"
                name="acceptTerms"
                type="checkbox"
                required
                checked={formData.acceptTerms}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
              />
              <label htmlFor="acceptTerms" className="ml-2 block text-sm text-text-secondary">
                Bifând această căsuță, confirm că am citit și sunt de acord cu{' '}
                <Link to="/terms" className="text-primary hover:text-primary-dark">
                  Termenii și Condițiile
                </Link>{' '}
                și{' '}
                <Link to="/privacy" className="text-primary hover:text-primary-dark">
                  Politica de Confidențialitate
                </Link>
                .
              </label>
            </div>
            
            <div className="flex items-start">
              <input
                id="acceptMarketing"
                name="acceptMarketing"
                type="checkbox"
                checked={formData.acceptMarketing}
                onChange={handleChange}
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
              />
              <label htmlFor="acceptMarketing" className="ml-2 block text-sm text-text-secondary">
                Îmi dau acordul să primesc comunicări comerciale (newsletter).
              </label>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-3 px-4 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Se creează contul...' : 'Creează cont'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;