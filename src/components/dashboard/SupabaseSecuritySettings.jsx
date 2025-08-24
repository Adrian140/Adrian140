import React, { useState } from 'react';
import { Shield, Key, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useSupabaseAuth } from '../../contexts/SupabaseAuthContext';
import { supabase } from '../../config/supabase';

function SupabaseSecuritySettings() {
  const { user } = useSupabaseAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handlePasswordChange = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');

    if (newPassword !== confirmPassword) {
      setMessage('Parolele nu se potrivesc');
      setLoading(false);
      return;
    }

    if (newPassword.length < 8) {
      setMessage('Parola trebuie să aibă minim 8 caractere');
      setLoading(false);
      return;
    }

    try {
      const { error } = await supabase.auth.updateUser({
        password: newPassword
      });

      if (error) throw error;

      setMessage('Parola a fost schimbată cu succes');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (error) {
      setMessage(error.message || 'Eroare la schimbarea parolei');
    }

    setLoading(false);
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-xl font-bold text-text-primary mb-6">Securitate</h2>
      </div>

      {message && (
        <div className={`px-4 py-3 rounded-lg ${
          message.includes('succes') 
            ? 'bg-green-50 border border-green-200 text-green-600'
            : 'bg-red-50 border border-red-200 text-red-600'
        }`}>
          {message}
        </div>
      )}

      {/* Password Change */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Key className="w-6 h-6 text-primary mr-3" />
          <h3 className="text-lg font-semibold text-text-primary">Schimbă parola</h3>
        </div>

        <form onSubmit={handlePasswordChange} className="space-y-4">
          <div>
            <label htmlFor="newPassword" className="block text-sm font-medium text-text-primary mb-2">
              Parola nouă
            </label>
            <div className="relative">
              <input
                type={showPasswords ? 'text' : 'password'}
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                required
                minLength={8}
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Minim 8 caractere"
              />
              <button
                type="button"
                onClick={() => setShowPasswords(!showPasswords)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-text-light hover:text-text-secondary"
              >
                {showPasswords ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-text-primary mb-2">
              Confirmă parola nouă
            </label>
            <input
              type={showPasswords ? 'text' : 'password'}
              id="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
              placeholder="Confirmă parola nouă"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
          >
            {loading ? 'Se schimbă...' : 'Schimbă parola'}
          </button>
        </form>
      </div>

      {/* Account Information */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center mb-6">
          <Shield className="w-6 h-6 text-primary mr-3" />
          <h3 className="text-lg font-semibold text-text-primary">Informații cont</h3>
        </div>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Email verificat:</span>
            <span className={`px-3 py-1 text-sm rounded-full ${
              user?.email_confirmed_at 
                ? 'bg-green-100 text-green-800' 
                : 'bg-yellow-100 text-yellow-800'
            }`}>
              {user?.email_confirmed_at ? 'Verificat' : 'Neverificat'}
            </span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Ultima autentificare:</span>
            <span className="text-text-primary">
              {user?.last_sign_in_at 
                ? new Date(user.last_sign_in_at).toLocaleDateString('ro-RO')
                : 'N/A'
              }
            </span>
          </div>

          <div className="flex justify-between items-center">
            <span className="text-text-secondary">Cont creat:</span>
            <span className="text-text-primary">
              {user?.created_at 
                ? new Date(user.created_at).toLocaleDateString('ro-RO')
                : 'N/A'
              }
            </span>
          </div>
        </div>
      </div>

      {/* Security Tips */}
      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-text-primary mb-4">Sfaturi de securitate</h3>
        <ul className="space-y-2 text-sm text-text-secondary">
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Folosește o parolă unică și complexă pentru acest cont
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Nu împărtăși niciodată datele de autentificare cu alte persoane
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Deconectează-te întotdeauna când folosești computere publice
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Verifică-ți email-ul pentru confirmarea contului
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SupabaseSecuritySettings;
