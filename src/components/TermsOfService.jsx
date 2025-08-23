import React from 'react';
import { FileText, Scale, AlertTriangle, Shield } from 'lucide-react';

function TermsOfService() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-primary mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Termeni și Condiții
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
              Acești Termeni și Condiții ("Termeni") reglementează utilizarea serviciilor oferite de 
              Prep Center France ("Compania", "noi", "al nostru") prin intermediul site-ului web prep-center.eu 
              și al serviciilor de preparare FBA. Prin accesarea și utilizarea serviciilor noastre, 
              acceptați să fiți legat de acești Termeni.
            </p>
          </section>

          {/* Services */}
          <section>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">2. Serviciile Noastre</h2>
            </div>
            <div className="space-y-4">
              <p className="text-text-secondary">
                Prep Center France oferă următoarele servicii:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Servicii de preparare Amazon FBA (recepție, control calitate, etichetare FNSKU)</li>
                <li>Servicii de ambalare și protecție (polybagging, dunnage)</li>
                <li>Servicii de depozitare temporară</li>
                <li>Servicii de expediere către centrele de distribuție Amazon</li>
                <li>Servicii FBM pentru multiple platforme (Amazon, eBay, Shopify)</li>
                <li>Consultanță Private Label și sourcing produse</li>
              </ul>
            </div>
          </section>

          {/* Account Registration */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">3. Înregistrarea Contului</h2>
            <div className="space-y-3">
              <p className="text-text-secondary">
                Pentru a utiliza serviciile noastre, trebuie să vă creați un cont și să furnizați informații 
                complete și exacte. Sunteți responsabil pentru:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-1">
                <li>Menținerea confidențialității datelor de autentificare</li>
                <li>Toate activitățile care au loc sub contul dumneavoastră</li>
                <li>Notificarea imediată în cazul utilizării neautorizate a contului</li>
                <li>Actualizarea informațiilor de contact și facturare</li>
              </ul>
            </div>
          </section>

          {/* Pricing and Payment */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">4. Prețuri și Plăți</h2>
            <div className="space-y-4">
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-start">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-yellow-800 mb-2">Prețuri și Facturare:</h3>
                    <ul className="text-sm text-yellow-700 space-y-1">
                      <li>• Prețurile sunt afișate în EUR și includ TVA unde este aplicabilă</li>
                      <li>• Facturarea se face lunar pentru serviciile recurente</li>
                      <li>• Plățile sunt procesate prin procesatori de plăți autorizați</li>
                      <li>• Facturile restante pot duce la suspendarea serviciilor</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Politica de Rambursare:</h3>
                <p className="text-text-secondary">
                  Serviciile prestate (preparare, etichetare, expediere) nu sunt rambursabile. 
                  În cazul erorilor din partea noastră, vom corecta gratuit sau vom oferi credit pentru servicii viitoare.
                </p>
              </div>
            </div>
          </section>

          {/* Product Handling */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">5. Manipularea Produselor</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Responsabilitățile Clientului:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Furnizarea de informații complete și corecte despre produse</li>
                  <li>Respectarea reglementărilor Amazon FBA și a legislației aplicabile</li>
                  <li>Asigurarea că produsele nu sunt periculoase, ilegale sau interzise</li>
                  <li>Comunicarea clară a instrucțiunilor de preparare</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-2">Responsabilitățile Noastre:</h3>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Manipularea atentă și profesională a produselor</li>
                  <li>Respectarea standardelor de calitate Amazon FBA</li>
                  <li>Raportarea promptă a oricăror probleme identificate</li>
                  <li>Asigurarea securității și integrității produselor în timpul depozitării</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Liability */}
          <section>
            <div className="flex items-center mb-4">
              <Shield className="w-6 h-6 text-primary mr-3" />
              <h2 className="text-2xl font-bold text-text-primary">6. Limitarea Răspunderii</h2>
            </div>
            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
              <h3 className="font-semibold text-red-800 mb-2">Limitări Importante:</h3>
              <ul className="text-sm text-red-700 space-y-1">
                <li>• Răspunderea noastră este limitată la valoarea serviciilor prestate</li>
                <li>• Nu suntem responsabili pentru pierderi indirecte sau consecințiale</li>
                <li>• Asigurarea produselor este responsabilitatea clientului</li>
                <li>• Nu garantăm acceptarea produselor de către Amazon</li>
                <li>• Forța majoră și circumstanțele neprevăzute ne exonerează de răspundere</li>
              </ul>
            </div>
          </section>

          {/* Prohibited Items */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">7. Produse Interzise</h2>
            <div className="space-y-3">
              <p className="text-text-secondary">
                Nu acceptăm următoarele tipuri de produse:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-2">Produse Periculoase:</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Substanțe chimice periculoase</li>
                    <li>• Materiale inflamabile</li>
                    <li>• Baterii cu litiu defecte</li>
                    <li>• Produse radioactive</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-text-primary mb-2">Produse Ilegale:</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Produse contrafăcute</li>
                    <li>• Substanțe interzise</li>
                    <li>• Arme și muniție</li>
                    <li>• Produse pentru adulți</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">8. Protecția Datelor</h2>
            <p className="text-text-secondary">
              Respectăm strict reglementările GDPR și legislația română privind protecția datelor. 
              Pentru detalii complete, consultați 
              <a href="/privacy-policy" className="text-primary hover:text-primary-dark underline ml-1">
                Politica noastră de Confidențialitate
              </a>.
            </p>
          </section>

          {/* Termination */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">9. Încetarea Serviciilor</h2>
            <div className="space-y-3">
              <p className="text-text-secondary">
                Oricare dintre părți poate înceta relația contractuală cu un preaviz de 30 de zile. 
                În cazul încălcării grave a termenilor, putem suspenda sau închide contul imediat.
              </p>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <h3 className="font-semibold text-blue-800 mb-2">La încetarea serviciilor:</h3>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• Produsele rămase vor fi returnate la adresa specificată (pe cheltuiala clientului)</li>
                  <li>• Facturile restante rămân datorate</li>
                  <li>• Datele contului vor fi arhivate conform politicii de confidențialitate</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">10. Legea Aplicabilă</h2>
            <p className="text-text-secondary">
              Acești Termeni sunt guvernați de legea franceză și română, în funcție de natura serviciului. 
              Orice dispute vor fi rezolvate prin negociere sau, în ultimă instanță, 
              prin instanțele competente din Franța sau România.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">11. Contact</h2>
            <div className="bg-primary-light bg-opacity-10 p-6 rounded-lg">
              <p className="text-text-secondary mb-4">
                Pentru întrebări privind acești Termeni și Condiții:
              </p>
              <div className="space-y-2">
                <p className="text-text-secondary">
                  <strong>Email:</strong> contact@prep-center.eu
                </p>
                <p className="text-text-secondary">
                  <strong>Telefon:</strong> +33 6 75 11 62 18
                </p>
                <p className="text-text-secondary">
                  <strong>Adresă:</strong> 35350 La Gouesnière, France
                </p>
              </div>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-text-primary mb-4">12. Modificări</h2>
            <p className="text-text-secondary">
              Ne rezervăm dreptul de a modifica acești Termeni și Condiții. 
              Modificările vor fi comunicate prin email și publicate pe site cu minimum 30 de zile înainte de intrarea în vigoare. 
              Continuarea utilizării serviciilor după modificări constituie acceptarea noilor termeni.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}

export default TermsOfService;
