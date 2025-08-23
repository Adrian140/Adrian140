import React from 'react';
import { Shield, Eye, Database, UserCheck, Mail, Phone } from 'lucide-react';

function PrivacyPolicy() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Politica de Confidențialitate
          </h1>
          <p className="text-xl text-text-secondary">
            Ultima actualizare: {new Date().toLocaleDateString('ro-RO')}
          </p>
        </div>

        <div className="bg-white rounded-xl border border-gray-200 p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">1. Introducere</h2>
            <p className="text-text-secondary leading-relaxed">
              Prep Center France ("noi", "compania noastră") respectă confidențialitatea datelor dumneavoastră personale 
              și se angajează să le protejeze în conformitate cu Regulamentul General privind Protecția Datelor (GDPR) 
              și legislația română aplicabilă. Această politică explică cum colectăm, folosim și protejăm informațiile dumneavoastră.
            </p>
          </section>

          {/* Data Collection */}
          <section>
            <div className="flex items-center mb-4">
              <Database className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">2. Date Colectate</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Date de identificare:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Nume și prenume</li>
                  <li>Adresa de email</li>
                  <li>Numărul de telefon</li>
                  <li>Adresa de livrare și facturare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Date de facturare:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Denumirea companiei (pentru persoane juridice)</li>
                  <li>Numărul de înregistrare fiscală (CUI/VAT)</li>
                  <li>SIREN/SIRET (pentru companii franceze)</li>
                  <li>Adresa de facturare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Date tehnice:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Adresa IP</li>
                  <li>Tipul de browser și versiunea</li>
                  <li>Sistemul de operare</li>
                  <li>Paginile vizitate și timpul petrecut pe site</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Purpose of Processing */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">3. Scopul Prelucrării</h2>
            </div>
            <div className="space-y-3">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Executarea contractului:</h3>
                <p className="text-text-secondary">
                  Procesarea comenzilor, facturarea, livrarea serviciilor de prep FBA, 
                  comunicarea cu clienții privind comenzile.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Obligații legale:</h3>
                <p className="text-text-secondary">
                  Păstrarea documentelor contabile, raportarea fiscală, 
                  respectarea reglementărilor de comerț electronic.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Interese legitime:</h3>
                <p className="text-text-secondary">
                  Îmbunătățirea serviciilor, analiza traficului pe site, 
                  prevenirea fraudelor, marketing direct (cu consimțământul dumneavoastră).
                </p>
              </div>
            </div>
          </section>

          {/* Data Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Partajarea Datelor</h2>
            <p className="text-text-secondary mb-4">
              Nu vindem, nu închiriem și nu partajăm datele dumneavoastră personale cu terți, 
              cu excepția următoarelor situații:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-2">
              <li>Furnizori de servicii de transport (pentru livrarea comenzilor)</li>
              <li>Procesatori de plăți (pentru tranzacții financiare)</li>
              <li>Servicii de hosting și cloud (pentru stocarea securizată a datelor)</li>
              <li>Autorități competente (când este cerut de lege)</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">5. Securitatea Datelor</h2>
            </div>
            <div className="space-y-3">
              <p className="text-text-secondary">
                Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja datele dumneavoastră:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                <li>Criptarea datelor în tranzit și în repaus</li>
                <li>Autentificare cu doi factori pentru conturi</li>
                <li>Acces restricționat la datele personale</li>
                <li>Monitorizarea și auditarea regulată a sistemelor</li>
                <li>Backup-uri regulate și planuri de recuperare</li>
              </ul>
            </div>
          </section>

          {/* Data Retention */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">6. Păstrarea Datelor</h2>
            <div className="space-y-3">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Date de cont:</h3>
                <p className="text-text-secondary">
                  Păstrate cât timp contul este activ sau conform obligațiilor legale (minimum 5 ani pentru documente fiscale).
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Date de facturare:</h3>
                <p className="text-text-secondary">
                  Păstrate 10 ani conform legislației contabile românești și franceze.
                </p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Date de marketing:</h3>
                <p className="text-text-secondary">
                  Păstrate până la retragerea consimțământului sau maximum 3 ani de la ultima interacțiune.
                </p>
              </div>
            </div>
          </section>

          {/* User Rights */}
          <section>
            <div className="flex items-center mb-4">
              <UserCheck className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">7. Drepturile Dumneavoastră</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Dreptul de acces</h3>
                <p className="text-text-secondary text-sm">
                  Puteți solicita o copie a datelor personale pe care le deținem despre dumneavoastră.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Dreptul de rectificare</h3>
                <p className="text-text-secondary text-sm">
                  Puteți cere corectarea datelor inexacte sau incomplete.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Dreptul la ștergere</h3>
                <p className="text-text-secondary text-sm">
                  Puteți solicita ștergerea datelor în anumite condiții.
                </p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-text-primary mb-2">Dreptul la portabilitate</h3>
                <p className="text-text-secondary text-sm">
                  Puteți primi datele într-un format structurat și portabil.
                </p>
              </div>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Cookie-uri</h2>
            <p className="text-text-secondary mb-4">
              Folosim cookie-uri pentru a îmbunătăți experiența dumneavoastră pe site:
            </p>
            <ul className="list-disc list-inside text-text-secondary space-y-1">
              <li><strong>Cookie-uri esențiale:</strong> Necesare pentru funcționarea site-ului</li>
              <li><strong>Cookie-uri de performanță:</strong> Pentru analiza traficului (Google Analytics)</li>
              <li><strong>Cookie-uri de marketing:</strong> Pentru publicitate personalizată (cu consimțământul dumneavoastră)</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <div className="flex items-center mb-4">
              <Mail className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">9. Contact</h2>
            </div>
            <div className="bg-primary-light bg-opacity-10 p-6 rounded-lg">
              <p className="text-text-secondary mb-4">
                Pentru orice întrebări privind această politică sau pentru exercitarea drepturilor dumneavoastră, 
                ne puteți contacta:
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 text-primary mr-2" />
                  <span className="text-text-secondary">Email: contact@prep-center.eu</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 text-primary mr-2" />
                  <span className="text-text-secondary">Telefon: +33 6 75 11 62 18</span>
                </div>
                <div className="flex items-start">
                  <Mail className="w-4 h-4 text-primary mr-2 mt-1" />
                  <span className="text-text-secondary">
                    Adresă: 35350 La Gouesnière, France
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">10. Modificări ale Politicii</h2>
            <p className="text-text-secondary">
              Ne rezervăm dreptul de a actualiza această politică de confidențialitate. 
              Orice modificări vor fi publicate pe această pagină cu data actualizării. 
              Vă recomandăm să verificați periodic această politică pentru a fi la curent cu orice schimbări.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
