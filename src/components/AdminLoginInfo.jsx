import React from 'react';
import { Shield, Settings, Edit, DollarSign } from 'lucide-react';

function AdminLoginInfo() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Panou de Administrare
          </h1>
          <p className="text-xl text-text-secondary">
            Gestionează conținutul și prețurile site-ului
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Admin Features */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Funcționalități Admin</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <Edit className="w-6 h-6 text-blue-600 mr-3" />
                  <h3 className="text-lg font-semibold text-blue-900">Editare Conținut</h3>
                </div>
                <ul className="space-y-2 text-sm text-blue-800">
                  <li>• Modifică textele de pe homepage</li>
                  <li>• Actualizează descrierile serviciilor</li>
                  <li>• Editează informațiile de contact</li>
                  <li>• Gestionează conținutul în toate limbile</li>
                </ul>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center mb-4">
                  <DollarSign className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-lg font-semibold text-green-900">Gestionare Prețuri</h3>
                </div>
                <ul className="space-y-2 text-sm text-green-800">
                  <li>• Actualizează prețurile serviciilor</li>
                  <li>• Modifică tarifele FBA și FBM</li>
                  <li>• Adaugă servicii noi</li>
                  <li>• Gestionează oferte speciale</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Simple Admin Access */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Acces Simplificat</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-yellow-600 mr-3" />
                <h3 className="text-lg font-semibold text-yellow-900">Modificări Directe</h3>
              </div>
              <p className="text-yellow-800 mb-4">
                Pentru moment, modificările se fac direct în fișierele de cod. 
                Aceasta este o soluție simplă și eficientă pentru un site static.
              </p>
              <div className="space-y-3">
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Pentru modificarea prețurilor:</h4>
                  <p className="text-sm text-yellow-700">
                    Editează fișierul <code className="bg-yellow-100 px-2 py-1 rounded">src/pages/ServicesPricing.jsx</code>
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Pentru modificarea textelor:</h4>
                  <p className="text-sm text-yellow-700">
                    Editează fișierul <code className="bg-yellow-100 px-2 py-1 rounded">src/translations/index.js</code>
                  </p>
                </div>
                <div className="bg-white rounded-lg p-4">
                  <h4 className="font-semibold text-yellow-900 mb-2">Pentru informații de contact:</h4>
                  <p className="text-sm text-yellow-700">
                    Editează fișierul <code className="bg-yellow-100 px-2 py-1 rounded">src/components/Footer.jsx</code>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Informații Contact</h2>
            <div className="bg-primary-light bg-opacity-10 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Email Principal:</h3>
                  <p className="text-text-secondary">contact@prep-center.eu</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">WhatsApp:</h3>
                  <p className="text-text-secondary">+33 6 75 11 62 18</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Adresă:</h3>
                  <p className="text-text-secondary">35350 La Gouesnière, France</p>
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Program:</h3>
                  <p className="text-text-secondary">Luni-Vineri: 8:00-18:00</p>
                </div>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-6">Următorii Pași</h2>
            <div className="bg-green-50 border border-green-200 rounded-xl p-6">
              <h3 className="text-lg font-semibold text-green-900 mb-4">Site-ul este gata de lansare!</h3>
              <ul className="space-y-2 text-green-800">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Toate paginile funcționează perfect
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Formularul de contact trimite email-uri
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Design responsive pentru toate dispozitivele
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Traduceri complete în 8 limbi
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  SEO optimizat pentru Google
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default AdminLoginInfo;
