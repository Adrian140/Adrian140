// Mock API pentru simularea backend-ului
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

// Mock users database
const mockUsers = [
  {
    id: 1,
    email: 'admin@prep-center.eu',
    password: 'admin123',
    firstName: 'Admin',
    lastName: 'User',
    role: 'admin',
    phone: '+33675116218',
    country: 'FR',
    language: 'fr',
    twoFactorEnabled: false
  },
  {
    id: 2,
    email: 'user@example.com',
    password: 'user123',
    firstName: 'John',
    lastName: 'Doe',
    role: 'user',
    phone: '+33123456789',
    country: 'FR',
    language: 'fr',
    twoFactorEnabled: false
  }
];

// Mock services
const mockServices = [
  {
    id: 1,
    title: 'FNSKU Labeling',
    description: 'Professional FNSKU labeling with polybagging included',
    features: ['FNSKU application', 'Polybagging', 'Quality control'],
    price: '€0.50',
    unit: 'per unit',
    category: 'fba'
  },
  {
    id: 2,
    title: 'Quality Control',
    description: 'Visual inspection and quality verification',
    features: ['Visual inspection', 'Damage check', 'Compliance verification'],
    price: '€0.30',
    unit: 'per unit',
    category: 'fba'
  }
];

// Mock pricing
const mockPricing = [
  {
    id: 1,
    service: 'FNSKU Labeling',
    price: '€0.50',
    unit: 'per unit',
    category: 'fba'
  },
  {
    id: 2,
    service: 'Polybagging',
    price: '€0.25',
    unit: 'per unit',
    category: 'fba'
  },
  {
    id: 3,
    service: 'Storage',
    price: '€15',
    unit: 'per pallet/month',
    category: 'storage'
  }
];

// Mock content
const mockContent = {
  heroTitle: 'Prep Center France – 24h Turnaround to Amazon FBA',
  heroSubtitle: 'Reception, QC, FNSKU labeling, polybagging & fast shipping to EU Amazon FCs.',
  phone: '+33 6 75 11 62 18',
  email: 'contact@prep-center.eu',
  address: '35350 La Gouesnière, France'
};

// Mock addresses
let mockAddresses = [];

// Mock billing profiles
let mockBillingProfiles = [];

// Mock invoices
const mockInvoices = [
  {
    id: 1,
    number: 'INV-2024-001',
    date: '2024-01-15',
    dueDate: '2024-02-15',
    amount: 125.50,
    vatAmount: 25.10,
    status: 'paid',
    description: 'FNSKU Labeling Services - January 2024'
  },
  {
    id: 2,
    number: 'INV-2024-002',
    date: '