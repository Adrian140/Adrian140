import React, { useState } from 'react';
import { Shield, Key, Smartphone, Eye, EyeOff, AlertTriangle } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { apiClient } from '../../config/api';

function SecuritySettings() {
  const { user, enable2FA, verify2FA, disable2FA } = useAuth();
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPasswords, setShowPasswords] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  
  // 2FA States
  const [is2FAEnabled, setIs2FAEnabled] = useState(user?.twoFactorEnabled || false);
  const [qrCode, setQrCode] = useState('');
  const [secret, setSecret] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [show2FASetup, setShow2FASetup] = useState(false);

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
      await apiClient.auth.changePassword(currentPassword, newPassword);
      setMessage('Parola a fost schimbată cu succes');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
   } catch (error) {
       setMessage(error.message || 'Eroare la schimbarea parolei');
   }

    setLoading(false);
  };

  const handleEnable2FA = async () => {
    setLoading(true);
    setMessage('');

    const result = await enable2FA();
    
    if (result.success) {
      setQrCode(result.qrCode);
      setSecret(result.secret);
      setShow2FASetup(true);
    } else {
      setMessage(result.error);
    }
    
    setLoading(false);
  };

  const handleVerify2FA = async () => {
    setLoading(true);
    setMessage('');

    const result = await verify2FA(verificationCode);
    
    if (result.success) {
      setMessage('2FA a fost activată cu succes');
      setIs2FAEnabled(true);
      setShow2FASetup(false);
      setVerificationCode('');
    } else {
      setMessage(result.error);
    }
    
    setLoading(false);
  };

  const handleDisable2FA = async () => {
    if (!confirm('Ești sigur că vrei să dezactivezi autentificarea cu doi factori?')) {
      return;
    }

    setLoading(true);
    setMessage('');

    const result = await disable2FA(verificationCode);
    
    if (result.success) {
      setMessage('2FA a fost dezactivată');
      setIs2FAEnabled(false);
      setVerificationCode('');
    } else {
      setMessage(result.error);
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
            <label htmlFor="currentPassword" className="block text-sm font-medium text-text-primary mb-2">
              Parola curentă
            </label>
            <div className="relative">
              <input
                type={showPasswords ? 'text' : 'password'}
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                required
                className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
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
            <label htmlFor="newPassword" className="block text-sm font-medium text-text-primary mb-2">
              Parola nouă
            </label>
            <input
              type={showPasswords ? 'text' : 'password'}
              id="newPassword"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
              minLength={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            />
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

      {/* Two-Factor Authentication */}
      <div className="bg-white border border-gray-200 rounded-xl p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Smartphone className="w-6 h-6 text-primary mr-3" />
            <div>
              <h3 className="text-lg font-semibold text-text-primary">Autentificare cu doi factori</h3>
              <p className="text-sm text-text-secondary">
                Adaugă un nivel suplimentar de securitate contului tău
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <span className={`px-3 py-1 text-sm rounded-full ${
              is2FAEnabled 
                ? 'bg-green-100 text-green-800' 
                : 'bg-gray-100 text-gray-800'
            }`}>
              {is2FAEnabled ? 'Activată' : 'Dezactivată'}
            </span>
          </div>
        </div>

        {!is2FAEnabled && !show2FASetup && (
          <div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-blue-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-blue-800">
                    Activarea 2FA va proteja contul tău chiar dacă cineva îți află parola. 
                    Vei avea nevoie de o aplicație de autentificare precum Google Authenticator sau Authy.
                  </p>
                </div>
              </div>
            </div>
            <button
              onClick={handleEnable2FA}
              disabled={loading}
              className="bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
            >
              {loading ? 'Se configurează...' : 'Activează 2FA'}
            </button>
          </div>
        )}

        {show2FASetup && (
          <div className="space-y-6">
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-yellow-800">
                    Scanează codul QR cu aplicația ta de autentificare și introdu codul generat pentru a finaliza configurarea.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-white border-2 border-gray-300 rounded-lg p-4 inline-block mb-4">
                {qrCode ? (
                  <img src={qrCode} alt="QR Code pentru 2FA" className="w-48 h-48" />
                ) : (
                  <div className="w-48 h-48 bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">Se încarcă QR Code...</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-text-secondary mb-4">
                Sau introdu manual acest cod: <code className="bg-gray-100 px-2 py-1 rounded">{secret}</code>
              </p>
            </div>

            <div>
              <label htmlFor="verificationCode" className="block text-sm font-medium text-text-primary mb-2">
                Cod de verificare din aplicația ta
              </label>
              <input
                type="text"
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="123456"
                maxLength={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-center text-lg font-mono"
              />
            </div>

            <div className="flex space-x-4">
              <button
                onClick={() => setShow2FASetup(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-text-secondary rounded-lg hover:bg-gray-50 transition-colors"
              >
                Anulează
              </button>
              <button
                onClick={handleVerify2FA}
                disabled={loading || verificationCode.length !== 6}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                {loading ? 'Se verifică...' : 'Verifică și activează'}
              </button>
            </div>
          </div>
        )}

        {is2FAEnabled && (
          <div>
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
              <div className="flex items-start">
                <Shield className="w-5 h-5 text-green-600 mr-2 mt-0.5" />
                <div>
                  <p className="text-sm text-green-800">
                    Autentificarea cu doi factori este activă. Contul tău este protejat suplimentar.
                  </p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <label htmlFor="disable2FACode" className="block text-sm font-medium text-text-primary mb-2">
                  Pentru a dezactiva 2FA, introdu un cod din aplicația ta
                </label>
                <input
                  type="text"
                  id="disable2FACode"
                  value={verificationCode}
                  onChange={(e) => setVerificationCode(e.target.value)}
                  placeholder="123456"
                  maxLength={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-center text-lg font-mono"
                />
              </div>

              <button
                onClick={handleDisable2FA}
                disabled={loading || verificationCode.length !== 6}
                className="bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors disabled:opacity-50"
              >
                {loading ? 'Se dezactivează...' : 'Dezactivează 2FA'}
              </button>
            </div>
          </div>
        )}
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
            Activează autentificarea cu doi factori pentru securitate maximă
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Nu împărtăși niciodată datele de autentificare cu alte persoane
          </li>
          <li className="flex items-start">
            <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></span>
            Deconectează-te întotdeauna când folosești computere publice
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SecuritySettings;
