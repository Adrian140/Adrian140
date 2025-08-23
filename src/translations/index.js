import { useLanguage } from '../contexts/LanguageContext';

export const translations = {
  fr: {
    flag: '🇫',
    // Navigation
    home: 'Accueil',
    services: 'Services et Tarifs',
    about: 'À Propos',
    contact: 'Contact',
    blog: 'Blog',
    login: 'Connexion',
    register: 'Inscription',
    dashboard: 'Tableau de Bord',
    logout: 'Déconnexion',
    admin: 'Admin',
    
    // Common
    getQuote: 'Obtenir un Devis',
    chatWhatsApp: 'Chat WhatsApp',
    bookZoom: 'Réserver Zoom',
    readMore: 'Lire Plus',
    learnMore: 'En Savoir Plus',
    name: 'Nom',
    email: 'Email',
    company: 'Entreprise',
    message: 'Message',
    sendMessage: 'Envoyer le Message',
    phone: 'Téléphone',
    address: 'Adresse',
    city: 'Ville',
    postalCode: 'Code Postal',
    country: 'Pays',
    save: 'Enregistrer',
    cancel: 'Annuler',
    edit: 'Modifier',
    delete: 'Supprimer',
    add: 'Ajouter',
    
    // Admin Panel
    adminPanel: 'Panneau d\'Administration',
    manageServices: 'Gérer les Services',
    managePricing: 'Gérer les Prix',
    manageContent: 'Gérer le Contenu',
    manageUsers: 'Gérer les Utilisateurs',
    settings: 'Paramètres',
    addService: 'Ajouter un Service',
    editService: 'Modifier le Service',
    deleteService: 'Supprimer le Service',
    serviceTitle: 'Titre du Service',
    serviceDescription: 'Description du Service',
    serviceFeatures: 'Caractéristiques',
    servicePrice: 'Prix',
    serviceUnit: 'Unité',
    saveChanges: 'Enregistrer les Modifications',
    uploadLogo: 'Télécharger le Logo',
    companyName: 'Nom de l\'Entreprise',
    defaultLanguage: 'Langue par Défaut',
    currency: 'Devise',
    maintenanceMode: 'Mode Maintenance',
    
    // Hero Section
    heroTitle: 'Prep Center France – Traitement 24h vers Amazon FBA',
    heroSubtitle: 'Réception, QC, étiquetage FNSKU, emballage et expédition rapide vers les centres Amazon EU.',
    
    // Services
    reception: 'Réception',
    qualityControl: 'Contrôle Qualité',
    labeling: 'Étiquetage FNSKU/EAN',
    polybagging: 'Emballage Plastique',
    storage: 'Stockage',
    shipping: 'Expédition',
    
    // Contact
    contactTitle: 'Nous Contacter',
    contactSubtitle: 'Prêt à optimiser vos opérations FBA ? Contactez notre équipe dès aujourd\'hui.',
    
    // Footer
    quickLinks: 'Liens Rapides',
    contactInfo: 'Contact',
    businessHours: 'Heures d\'Ouverture',
    
    // About
    aboutTitle: 'Centre de Préparation Français Fiable pour les Vendeurs Européens',
    aboutSubtitle: 'Fondé par Adrian Bucur, 4+ ans d\'expérience Amazon. Nous gérons la préparation FBA de bout en bout.',
    
    // Pricing
    pricingTitle: 'Services et Tarifs',
    pricingSubtitle: 'Services complets de préparation FBA avec tarification compétitive.',
    
    // Blog
    blogTitle: 'Blog Préparation FBA',
    blogSubtitle: 'Conseils d\'experts et guides pour les vendeurs Amazon FBA en Europe.',
    
    // Auth
    loginTitle: 'Connexion',
    registerTitle: 'Créer un Compte',
    password: 'Mot de Passe',
    confirmPassword: 'Confirmer le Mot de Passe',
    forgotPassword: 'Mot de Passe Oublié?',
    
    // Dashboard
    personalData: 'Données Personnelles',
    addresses: 'Adresses',
    billingProfiles: 'Profils de Facturation',
    invoices: 'Mes Factures',
    security: 'Sécurité'
  },
  
  en: {
    // Navigation
    home: 'Home',
    services: 'Services & Pricing',
    about: 'About',
    contact: 'Contact',
    blog: 'Blog',
    login: 'Login',
    register: 'Register',
    dashboard: 'Dashboard',
    logout: 'Logout',
    admin: 'Admin',
    
    // Common
    getQuote: 'Get a Quote',
    chatWhatsApp: 'Chat on WhatsApp',
    bookZoom: 'Book Zoom',
    readMore: 'Read More',
    learnMore: 'Learn More',
    name: 'Name',
    email: 'Email',
    company: 'Company',
    message: 'Message',
    sendMessage: 'Send Message',
    phone: 'Phone',
    address: 'Address',
    city: 'City',
    postalCode: 'Postal Code',
    country: 'Country',
    save: 'Save',
    cancel: 'Cancel',
    edit: 'Edit',
    delete: 'Delete',
    add: 'Add',
    
    // Admin Panel
    adminPanel: 'Admin Panel',
    manageServices: 'Manage Services',
    managePricing: 'Manage Pricing',
    manageContent: 'Manage Content',
    manageUsers: 'Manage Users',
    settings: 'Settings',
    addService: 'Add Service',
    editService: 'Edit Service',
    deleteService: 'Delete Service',
    serviceTitle: 'Service Title',
    serviceDescription: 'Service Description',
    serviceFeatures: 'Features',
    servicePrice: 'Price',
    serviceUnit: 'Unit',
    saveChanges: 'Save Changes',
    uploadLogo: 'Upload Logo',
    companyName: 'Company Name',
    defaultLanguage: 'Default Language',
    currency: 'Currency',
    maintenanceMode: 'Maintenance Mode',
    
    // Hero Section
    heroTitle: 'Prep Center France – 24h Turnaround to Amazon FBA',
    heroSubtitle: 'Reception, QC, FNSKU labeling, polybagging, storage & fast shipping to EU Amazon FCs.',
    
    // Services
    reception: 'Reception',
    qualityControl: 'Quality Control',
    labeling: 'FNSKU/EAN Labeling',
    polybagging: 'Polybagging',
    storage: 'Storage',
    shipping: 'Shipping',
    
    // Contact
    contactTitle: 'Get In Touch',
    contactSubtitle: 'Ready to streamline your FBA operations? Contact our team today for a personalized consultation.',
    
    // Footer
    quickLinks: 'Quick Links',
    contactInfo: 'Contact',
    businessHours: 'Business Hours',
    
    // About
    aboutTitle: 'Reliable French Prep Center for European Sellers',
    aboutSubtitle: 'Founded by Adrian Bucur, 4+ years Amazon experience. We handle end-to-end FBA prep.',
    
    // Pricing
    pricingTitle: 'Services & Pricing',
    pricingSubtitle: 'Complete FBA prep services with competitive pricing.',
    
    // Blog
    blogTitle: 'FBA Prep Blog',
    blogSubtitle: 'Expert insights, tips, and guides for Amazon FBA sellers in Europe.',
    
    // Auth
    loginTitle: 'Login',
    registerTitle: 'Create Account',
    password: 'Password',
    confirmPassword: 'Confirm Password',
    forgotPassword: 'Forgot Password?',
    
    // Dashboard
    personalData: 'Personal Data',
    addresses: 'Addresses',
    billingProfiles: 'Billing Profiles',
    invoices: 'My Invoices',
    security: 'Security'
  },
  
  de: {
    // Navigation
    home: 'Startseite',
    services: 'Services & Preise',
    about: 'Über Uns',
    contact: 'Kontakt',
    blog: 'Blog',
    login: 'Anmelden',
    register: 'Registrieren',
    dashboard: 'Dashboard',
    logout: 'Abmelden',
    admin: 'Admin',
    
    // Common
    getQuote: 'Angebot Erhalten',
    chatWhatsApp: 'WhatsApp Chat',
    bookZoom: 'Zoom Buchen',
    readMore: 'Mehr Lesen',
    learnMore: 'Mehr Erfahren',
    name: 'Name',
    email: 'E-Mail',
    company: 'Unternehmen',
    message: 'Nachricht',
    sendMessage: 'Nachricht Senden',
    phone: 'Telefon',
    address: 'Adresse',
    city: 'Stadt',
    postalCode: 'Postleitzahl',
    country: 'Land',
    save: 'Speichern',
    cancel: 'Abbrechen',
    edit: 'Bearbeiten',
    delete: 'Löschen',
    add: 'Hinzufügen',
    
    // Admin Panel
    adminPanel: 'Admin-Panel',
    manageServices: 'Services Verwalten',
    managePricing: 'Preise Verwalten',
    manageContent: 'Inhalte Verwalten',
    manageUsers: 'Benutzer Verwalten',
    settings: 'Einstellungen',
    addService: 'Service Hinzufügen',
    editService: 'Service Bearbeiten',
    deleteService: 'Service Löschen',
    serviceTitle: 'Service-Titel',
    serviceDescription: 'Service-Beschreibung',
    serviceFeatures: 'Funktionen',
    servicePrice: 'Preis',
    serviceUnit: 'Einheit',
    saveChanges: 'Änderungen Speichern',
    uploadLogo: 'Logo Hochladen',
    companyName: 'Firmenname',
    defaultLanguage: 'Standardsprache',
    currency: 'Währung',
    maintenanceMode: 'Wartungsmodus',
    
    // Hero Section
    heroTitle: 'Prep Center France – 24h Bearbeitung für Amazon FBA',
    heroSubtitle: 'Empfang, QK, FNSKU-Etikettierung, Verpackung und schneller Versand zu EU Amazon FCs.',
    
    // Services
    reception: 'Empfang',
    qualityControl: 'Qualitätskontrolle',
    labeling: 'FNSKU/EAN Etikettierung',
    polybagging: 'Polyverpackung',
    storage: 'Lagerung',
    shipping: 'Versand',
    
    // Contact
    contactTitle: 'Kontakt Aufnehmen',
    contactSubtitle: 'Bereit, Ihre FBA-Abläufe zu optimieren? Kontaktieren Sie unser Team noch heute.',
    
    // Footer
    quickLinks: 'Schnelllinks',
    contactInfo: 'Kontakt',
    businessHours: 'Geschäftszeiten',
    
    // About
    aboutTitle: 'Zuverlässiges französisches Prep Center für europäische Verkäufer',
    aboutSubtitle: 'Gegründet von Adrian Bucur, 4+ Jahre Amazon-Erfahrung. Wir übernehmen die komplette FBA-Vorbereitung.',
    
    // Pricing
    pricingTitle: 'Services & Preise',
    pricingSubtitle: 'Komplette FBA-Prep-Services mit wettbewerbsfähigen Preisen.',
    
    // Blog
    blogTitle: 'FBA Prep Blog',
    blogSubtitle: 'Experteneinblicke, Tipps und Leitfäden für Amazon FBA-Verkäufer in Europa.',
    
    // Auth
    loginTitle: 'Anmelden',
    registerTitle: 'Konto Erstellen',
    password: 'Passwort',
    confirmPassword: 'Passwort Bestätigen',
    forgotPassword: 'Passwort Vergessen?',
    
    // Dashboard
    personalData: 'Persönliche Daten',
    addresses: 'Adressen',
    billingProfiles: 'Rechnungsprofile',
    invoices: 'Meine Rechnungen',
    security: 'Sicherheit'
  },
  
  nl: {
    // Navigation
    home: 'Home',
    services: 'Services & Prijzen',
    about: 'OverOns',
    contact: 'Contact',
    blog: 'Blog',
    login: 'Inloggen',
    register: 'Registreren',
    dashboard: 'Dashboard',
    logout: 'Uitloggen',
    admin: 'Admin',
    
    // Common
    getQuote: 'Offerte Aanvragen',
    chatWhatsApp: 'Chat WhatsApp',
    bookZoom: 'Zoom Boeken',
    readMore: 'Lees Meer',
    learnMore: 'Meer Weten',
    name: 'Naam',
    email: 'E-mail',
    company: 'Bedrijf',
    message: 'Bericht',
    sendMessage: 'Bericht Versturen',
    phone: 'Telefoon',
    address: 'Adres',
    city: 'Stad',
    postalCode: 'Postcode',
    country: 'Land',
    save: 'Opslaan',
    cancel: 'Annuleren',
    edit: 'Bewerken',
    delete: 'Verwijderen',
    add: 'Toevoegen',
    
    // Admin Panel
    adminPanel: 'Beheerpaneel',
    manageServices: 'Services Beheren',
    managePricing: 'Prijzen Beheren',
    manageContent: 'Inhoud Beheren',
    manageUsers: 'Gebruikers Beheren',
    settings: 'Instellingen',
    addService: 'Service Toevoegen',
    editService: 'Service Bewerken',
    deleteService: 'Service Verwijderen',
    serviceTitle: 'Service Titel',
    serviceDescription: 'Service Beschrijving',
    serviceFeatures: 'Functies',
    servicePrice: 'Prijs',
    serviceUnit: 'Eenheid',
    saveChanges: 'Wijzigingen Opslaan',
    uploadLogo: 'Logo Uploaden',
    companyName: 'Bedrijfsnaam',
    defaultLanguage: 'Standaardtaal',
    currency: 'Valuta',
    maintenanceMode: 'Onderhoudsmodus',
    
    // Hero Section
    heroTitle: 'Prep Center France – 24u Doorlooptijd naar Amazon FBA',
    heroSubtitle: 'Ontvangst, QC, FNSKU labeling, verpakking en snelle verzending naar EU Amazon FCs.',
    
    // Services
    reception: 'Ontvangst',
    qualityControl: 'Kwaliteitscontrole',
    labeling: 'FNSKU/EAN Labeling',
    polybagging: 'Polybag Verpakking',
    storage: 'Opslag',
    shipping: 'Verzending',
    
    // Contact
    contactTitle: 'Contact Opnemen',
    contactSubtitle: 'Klaar om uw FBA-operaties te stroomlijnen? Neem vandaag contact op met ons team.',
    
    // Footer
    quickLinks: 'Snelle Links',
    contactInfo: 'Contact',
    businessHours: 'Openingstijden',
    
    // About
    aboutTitle: 'Betrouwbaar Frans Prep Center voor Europese Verkopers',
    aboutSubtitle: 'Opgericht door Adrian Bucur, 4+ jaar Amazon ervaring. Wij verzorgen end-to-end FBA prep.',
    
    // Pricing
    pricingTitle: 'Services & Prijzen',
    pricingSubtitle: 'Complete FBA prep services met concurrerende prijzen.',
    
    // Blog
    blogTitle: 'FBA Prep Blog',
    blogSubtitle: 'Expert inzichten, tips en gidsen voor Amazon FBA verkopers in Europa.',
    
    // Auth
    loginTitle: 'Inloggen',
    registerTitle: 'Account Aanmaken',
    password: 'Wachtwoord',
    confirmPassword: 'Wachtwoord Bevestigen',
    forgotPassword: 'Wachtwoord Vergeten?',
    
    // Dashboard
    personalData: 'Persoonlijke Gegevens',
    addresses: 'Adressen',
    billingProfiles: 'Facturatieprofielen',
    invoices: 'Mijn Facturen',
    security: 'Beveiliging'
  },
  
  es: {
    flag: '🇮',
    // Navigation
    home: 'Home',
    services: 'Servicios y Precios',
    about: 'Acerca de',
    contact: 'Contacto',
    blog: 'Blog',
    login: 'Iniciar Sesión',
    register: 'Registrarse',
    dashboard: 'Panel',
    logout: 'Cerrar Sesión',
    admin: 'Admin',
    
    // Common
    getQuote: 'Obtener Cotización',
    chatWhatsApp: 'Chat WhatsApp',
    bookZoom: 'Reservar Zoom',
    readMore: 'Leer Más',
    learnMore: 'Saber Más',
    name: 'Nombre',
    email: 'Email',
    company: 'Empresa',
    message: 'Mensaje',
    sendMessage: 'Enviar Mensaje',
    phone: 'Teléfono',
    address: 'Dirección',
    city: 'Ciudad',
    postalCode: 'Código Postal',
    country: 'País',
    save: 'Guardar',
    cancel: 'Cancelar',
    edit: 'Editar',
    delete: 'Eliminar',
    add: 'Añadir',
    
    // Admin Panel
    adminPanel: 'Panel de Administración',
    manageServices: 'Gestionar Servicios',
    managePricing: 'Gestionar Precios',
    manageContent: 'Gestionar Contenido',
    manageUsers: 'Gestionar Usuarios',
    settings: 'Configuración',
    addService: 'Añadir Servicio',
    editService: 'Editar Servicio',
    deleteService: 'Eliminar Servicio',
    serviceTitle: 'Título del Servicio',
    serviceDescription: 'Descripción del Servicio',
    serviceFeatures: 'Características',
    servicePrice: 'Precio',
    serviceUnit: 'Unidad',
    saveChanges: 'Guardar Cambios',
    uploadLogo: 'Subir Logo',
    companyName: 'Nombre de la Empresa',
    defaultLanguage: 'Idioma Predeterminado',
    currency: 'Moneda',
    maintenanceMode: 'Modo Mantenimiento',
    
    // Hero Section
    heroTitle: 'Prep Center France – Procesamiento 24h para Amazon FBA',
    heroSubtitle: 'Recepción, CC, etiquetado FNSKU, embolsado y envío rápido a centros Amazon EU.',
    
    // Services
    reception: 'Recepción',
    qualityControl: 'Control de Calidad',
    labeling: 'Etiquetado FNSKU/EAN',
    polybagging: 'Embolsado',
    storage: 'Almacenamiento',
    shipping: 'Envío',
    
    // Contact
    contactTitle: 'Ponerse en Contacto',
    contactSubtitle: '¿Listo para optimizar sus operaciones FBA? Contacte a nuestro equipo hoy.',
    
    // Footer
    quickLinks: 'Enlaces Rápidos',
    contactInfo: 'Contacto',
    businessHours: 'Horario Comercial',
    
    // About
    aboutTitle: 'Centro de Preparación Francés Confiable para Vendedores Europeos',
    aboutSubtitle: 'Fundado por Adrian Bucur, 4+ años de experiencia en Amazon. Manejamos preparación FBA integral.',
    
    // Pricing
    pricingTitle: 'Servicios y Precios',
    pricingSubtitle: 'Servicios completos de preparación FBA con precios competitivos.',
    
    // Blog
    blogTitle: 'Blog Preparación FBA',
    blogSubtitle: 'Perspectivas expertas, consejos y guías para vendedores Amazon FBA en Europa.',
    
    // Auth
    loginTitle: 'Iniciar Sesión',
    registerTitle: 'Crear Cuenta',
    password: 'Contraseña',
    confirmPassword: 'Confirmar Contraseña',
    forgotPassword: '¿Olvidaste la Contraseña?',
    
    // Dashboard
    personalData: 'Datos Personales',
    addresses: 'Direcciones',
    billingProfiles: 'Perfiles de Facturación',
    invoices: 'Mis Facturas',
    security: 'Seguridad'
  },
  
  it: {
    // Navigation
    home: 'Home',
    services: 'Servizi e Prezzi',
    about: 'Chi Siamo',
    contact: 'Contatto',
    blog: 'Blog',
    login: 'Accedi',
    register: 'Registrati',
    dashboard: 'Dashboard',
    logout: 'Esci',
    admin: 'Admin',
    
    // Common
    getQuote: 'Richiedi Preventivo',
    chatWhatsApp: 'Chat WhatsApp',
    bookZoom: 'Prenota Zoom',
    readMore: 'Leggi di Più',
    learnMore: 'Scopri di Più',
    name: 'Nome',
    email: 'Email',
    company: 'Azienda',
    message: 'Messaggio',
    sendMessage: 'Invia Messaggio',
    phone: 'Telefono',
    address: 'Indirizzo',
    city: 'Città',
    postalCode: 'Codice Postale',
    country: 'Paese',
    save: 'Salva',
    cancel: 'Annulla',
    edit: 'Modifica',
    delete: 'Elimina',
    add: 'Aggiungi',
    
    // Admin Panel
    adminPanel: 'Pannello di Amministrazione',
    manageServices: 'Gestisci Servizi',
    managePricing: 'Gestisci Prezzi',
    manageContent: 'Gestisci Contenuti',
    manageUsers: 'Gestisci Utenti',
    settings: 'Impostazioni',
    addService: 'Aggiungi Servizio',
    editService: 'Modifica Servizio',
    deleteService: 'Elimina Servizio',
    serviceTitle: 'Titolo Servizio',
    serviceDescription: 'Descrizione Servizio',
    serviceFeatures: 'Caratteristiche',
    servicePrice: 'Prezzo',
    serviceUnit: 'Unità',
    saveChanges: 'Salva Modifiche',
    uploadLogo: 'Carica Logo',
    companyName: 'Nome Azienda',
    defaultLanguage: 'Lingua Predefinita',
    currency: 'Valuta',
    maintenanceMode: 'Modalità Manutenzione',
    
    // Hero Section
    heroTitle: 'Prep Center France – Elaborazione 24h per Amazon FBA',
    heroSubtitle: 'Ricezione, QC, etichettatura FNSKU, imballaggio e spedizione veloce ai centri Amazon EU.',
    
    // Services
    reception: 'Ricezione',
    qualityControl: 'Controllo Qualità',
    labeling: 'Etichettatura FNSKU/EAN',
    polybagging: 'Imballaggio Plastico',
    storage: 'Stoccaggio',
    shipping: 'Spedizione',
    
    // Contact
    contactTitle: 'Mettiti in Contatto',
    contactSubtitle: 'Pronto a ottimizzare le tue operazioni FBA? Contatta il nostro team oggi.',
    
    // Footer
    quickLinks: 'Link Rapidi',
    contactInfo: 'Contatto',
    businessHours: 'Orari di Lavoro',
    
    // About
    aboutTitle: 'Centro di Preparazione Francese Affidabile per Venditori Europei',
    aboutSubtitle: 'Fondato da Adrian Bucur, 4+ anni di esperienza Amazon. Gestiamo preparazione FBA completa.',
    
    // Pricing
    pricingTitle: 'Servizi e Prezzi',
    pricingSubtitle: 'Servizi completi di preparazione FBA con prezzi competitivi.',
    
    // Blog
    blogTitle: 'Blog Preparazione FBA',
    blogSubtitle: 'Approfondimenti esperti, consigli e guide per venditori Amazon FBA in Europa.',
    
    // Auth
    loginTitle: 'Accedi',
    registerTitle: 'Crea Account',
    password: 'Password',
    confirmPassword: 'Conferma Password',
    forgotPassword: 'Password Dimenticata?',
    
    // Dashboard
    personalData: 'Dati Personali',
    addresses: 'Indirizzi',
    billingProfiles: 'Profili di Fatturazione',
    invoices: 'Le Mie Fatture',
    security: 'Sicurezza'
  },
  
  pl: {
    // Navigation
    home: 'Strona Główna',
    services: 'Usługi i Ceny',
    about: 'O Nas',
    contact: 'Kontakt',
    blog: 'Blog',
    login: 'Zaloguj',
    register: 'Zarejestruj',
    dashboard: 'Panel',
    logout: 'Wyloguj',
    admin: 'Admin',
    
    // Common
    getQuote: 'Otrzymaj Wycenę',
    chatWhatsApp: 'Chat WhatsApp',
    bookZoom: 'Zarezerwuj Zoom',
    readMore: 'Czytaj Więcej',
    learnMore: 'Dowiedz Się Więcej',
    name: 'Imię',
    email: 'Email',
    company: 'Firma',
    message: 'Wiadomość',
    sendMessage: 'Wyślij Wiadomość',
    phone: 'Telefon',
    address: 'Adres',
    city: 'Miasto',
    postalCode: 'Kod Pocztowy',
    country: 'Kraj',
    save: 'Zapisz',
    cancel: 'Anuluj',
    edit: 'Edytuj',
    delete: 'Usuń',
    add: 'Dodaj',
    
    // Admin Panel
    adminPanel: 'Panel Administratora',
    manageServices: 'Zarządzaj Usługami',
    managePricing: 'Zarządzaj Cenami',
    manageContent: 'Zarządzaj Treścią',
    manageUsers: 'Zarządzaj Użytkownikami',
    settings: 'Ustawienia',
    addService: 'Dodaj Usługę',
    editService: 'Edytuj Usługę',
    deleteService: 'Usuń Usługę',
    serviceTitle: 'Tytuł Usługi',
    serviceDescription: 'Opis Usługi',
    serviceFeatures: 'Funkcje',
    servicePrice: 'Cena',
    serviceUnit: 'Jednostka',
    saveChanges: 'Zapisz Zmiany',
    uploadLogo: 'Prześlij Logo',
    companyName: 'Nazwa Firmy',
    defaultLanguage: 'Język Domyślny',
    currency: 'Waluta',
    maintenanceMode: 'Tryb Konserwacji',
    
    // Hero Section
    heroTitle: 'Prep Center France – 24h Realizacja do Amazon FBA',
    heroSubtitle: 'Odbiór, kontrola jakości, etykietowanie FNSKU, pakowanie i szybka wysyłka do centrów Amazon EU.',
    
    // Services
    reception: 'Odbiór',
    qualityControl: 'Kontrola Jakości',
    labeling: 'Etykietowanie FNSKU/EAN',
    polybagging: 'Pakowanie w Folie',
    storage: 'Magazynowanie',
    shipping: 'Wysyłka',
    
    // Contact
    contactTitle: 'Skontaktuj Się',
    contactSubtitle: 'Gotowy na usprawnienie operacji FBA? Skontaktuj się z naszym zespołem już dziś.',
    
    // Footer
    quickLinks: 'Szybkie Linki',
    contactInfo: 'Kontakt',
    businessHours: 'Godziny Pracy',
    
    // About
    aboutTitle: 'Niezawodne Francuskie Centrum Prep dla Europejskich Sprzedawców',
    aboutSubtitle: 'Założone przez Adrian Bucur, 4+ lat doświadczenia Amazon. Obsługujemy kompleksową preparację FBA.',
    
    // Pricing
    pricingTitle: 'Usługi i Ceny',
    pricingSubtitle: 'Kompleksowe usługi preparacji FBA w konkurencyjnych cenach.',
    
    // Blog
    blogTitle: 'Blog Preparacji FBA',
    blogSubtitle: 'Eksperckie spostrzeżenia, wskazówki i przewodniki dla sprzedawców Amazon FBA w Europie.',
    
    // Auth
    loginTitle: 'Zaloguj Się',
    registerTitle: 'Utwórz Konto',
    password: 'Hasło',
    confirmPassword: 'Potwierdź Hasło',
    forgotPassword: 'Zapomniałeś Hasła?',
    
    // Dashboard
    personalData: 'Dane Osobowe',
    addresses: 'Adresy',
    billingProfiles: 'Profile Rozliczeniowe',
    invoices: 'Moje Faktury',
    security: 'Bezpieczeństwo'
  },
  
  ro: {
    // Navigation
    home: 'Acasă',
    services: 'Servicii și Prețuri',
    about: 'Despre Noi',
    contact: 'Contact',
    blog: 'Blog',
    login: 'Autentificare',
    register: 'Înregistrare',
    dashboard: 'Contul Meu',
    logout: 'Deconectare',
    admin: 'Admin',
    
    // Common
    getQuote: 'Obține Ofertă',
    chatWhatsApp: 'Chat WhatsApp',
    bookZoom: 'Rezervă Zoom',
    readMore: 'Citește Mai Mult',
    learnMore: 'Află Mai Mult',
    name: 'Nume',
    email: 'Email',
    company: 'Companie',
    message: 'Mesaj',
    sendMessage: 'Trimite Mesajul',
    phone: 'Telefon',
    address: 'Adresă',
    city: 'Oraș',
    postalCode: 'Cod Poștal',
    country: 'Țară',
    save: 'Salvează',
    cancel: 'Anulează',
    edit: 'Editează',
    delete: 'Șterge',
    add: 'Adaugă',
    
    // Admin Panel
    adminPanel: 'Panou de Administrare',
    manageServices: 'Gestionează Serviciile',
    managePricing: 'Gestionează Prețurile',
    manageContent: 'Gestionează Conținutul',
    manageUsers: 'Gestionează Utilizatorii',
    settings: 'Setări',
    addService: 'Adaugă Serviciu',
    editService: 'Editează Serviciul',
    deleteService: 'Șterge Serviciul',
    serviceTitle: 'Titlul Serviciului',
    serviceDescription: 'Descrierea Serviciului',
    serviceFeatures: 'Caracteristici',
    servicePrice: 'Preț',
    serviceUnit: 'Unitate',
    saveChanges: 'Salvează Modificările',
    uploadLogo: 'Încarcă Logo',
    companyName: 'Numele Companiei',
    defaultLanguage: 'Limba Implicită',
    currency: 'Moneda',
    maintenanceMode: 'Modul de Întreținere',
    
    // Hero Section
    heroTitle: 'Prep Center France – Procesare 24h către Amazon FBA',
    heroSubtitle: 'Recepție, control calitate, etichetare FNSKU, ambalare și expediere rapidă către centrele Amazon EU.',
    
    // Services
    reception: 'Recepție',
    qualityControl: 'Control Calitate',
    labeling: 'Etichetare FNSKU/EAN',
    polybagging: 'Ambalare în Folie',
    storage: 'Depozitare',
    shipping: 'Expediere',
    
    // Contact
    contactTitle: 'Ia Legătura',
    contactSubtitle: 'Gata să îți optimizezi operațiunile FBA? Contactează echipa noastră astăzi.',
    
    // Footer
    quickLinks: 'Link-uri Rapide',
    contactInfo: 'Contact',
    businessHours: 'Program de Lucru',
    
    // About
    aboutTitle: 'Centru de Preparare Francez de Încredere pentru Vânzătorii Europeni',
    aboutSubtitle: 'Fondat de Adrian Bucur, 4+ ani experiență Amazon. Gestionăm prepararea FBA de la început la sfârșit.',
    
    // Pricing
    pricingTitle: 'Servicii și Prețuri',
    pricingSubtitle: 'Servicii complete de preparare FBA cu prețuri competitive.',
    
    // Blog
    blogTitle: 'Blog Preparare FBA',
    blogSubtitle: 'Perspective experte, sfaturi și ghiduri pentru vânzătorii Amazon FBA din Europa.',
    
    // Auth
    loginTitle: 'Autentificare',
    registerTitle: 'Creează Cont',
    password: 'Parolă',
    confirmPassword: 'Confirmă Parola',
    forgotPassword: 'Ai Uitat Parola?',
    
    // Dashboard
    personalData: 'Date Personale',
    addresses: 'Adrese',
    billingProfiles: 'Profile de Facturare',
    invoices: 'Facturile Mele',
    security: 'Securitate'
  }
};

export const useTranslation = () => {
  const { currentLanguage } = useLanguage();
  
  const t = (key) => {
    return translations[currentLanguage]?.[key] || translations.fr[key] || key;
  };
  
  return { t };
};