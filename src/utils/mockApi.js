2024-02-15',
    dueDate: '2024-03-15',
    amount: 80.00,
    vatAmount: 16.00,
    status: 'pending',
    description: 'Storage Services - February 2024'
  }
];

// Mock orders
const mockOrders = [
  {
    id: 1,
    orderNumber: 'ORD-2024-001',
    date: '2024-01-20',
    status: 'completed',
    items: [
      { service: 'FNSKU Labeling', quantity: 100, price: '€0.50' },
      { service: 'Polybagging', quantity: 100, price: '€0.25' }
    ],
    total: 75.00,
    vat: 15.00,
    userId: 2
  },
  {
    id: 2,
    orderNumber: 'ORD-2024-002',
    date: '2024-02-10',
    status: 'processing',
    items: [
      { service: 'Storage', quantity: 2, price: '€15' }
    ],
    total: 30.00,
    vat: 6.00,
    userId: 2
  }
];

// Mock API endpoints
const mockApi = {
  // User authentication
  login: async (email, password) => {
    await delay(500);
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      // Simulate token generation
      return { token: 'mock-jwt-token', user: { id: user.id, email: user.email, role: user.role } };
    }
    throw new Error('Invalid credentials');
  },

  // Get user profile
  getUserProfile: async (userId) => {
    await delay(300);
    const user = mockUsers.find(u => u.id === userId);
    if (user) {
      return user;
    }
    throw new Error('User not found');
  },

  // Get all users (admin only)
  getAllUsers: async () => {
    await delay(300);
    return mockUsers;
  },

  // Get services
  getServices: async () => {
    await delay(300);
    return mockServices;
  },

  // Get pricing
  getPricing: async () => {
    await delay(300);
    return mockPricing;
  },

  // Get content
  getContent: async () => {
    await delay(300);
    return mockContent;
  },

  // Get addresses
  getAddresses: async (userId) => {
    await delay(300);
    return mockAddresses.filter(addr => addr.userId === userId);
  },

  // Add address
  addAddress: async (address) => {
    await delay(300);
    const newAddress = { ...address, id: mockAddresses.length + 1 };
    mockAddresses.push(newAddress);
    return newAddress;
  },

  // Update address
  updateAddress: async (address) => {
    await delay(300);
    const index = mockAddresses.findIndex(addr => addr.id === address.id);
    if (index !== -1) {
      mockAddresses[index] = address;
      return address;
    }
    throw new Error('Address not found');
  },

  // Delete address
  deleteAddress: async (addressId) => {
    await delay(300);
    const initialLength = mockAddresses.length;
    mockAddresses = mockAddresses.filter(addr => addr.id !== addressId);
    if (mockAddresses.length < initialLength) {
      return { success: true };
    }
    throw new Error('Address not found');
  },

  // Get billing profiles
  getBillingProfiles: async (userId) => {
    await delay(300);
    return mockBillingProfiles.filter(bp => bp.userId === userId);
  },

  // Add billing profile
  addBillingProfile: async (profile) => {
    await delay(300);
    const newProfile = { ...profile, id: mockBillingProfiles.length + 1 };
    mockBillingProfiles.push(newProfile);
    return newProfile;
  },

  // Update billing profile
  updateBillingProfile: async (profile) => {
    await delay(300);
    const index = mockBillingProfiles.findIndex(bp => bp.id === profile.id);
    if (index !== -1) {
      mockBillingProfiles[index] = profile;
      return profile;
    }
    throw new Error('Billing profile not found');
  },

  // Delete billing profile
  deleteBillingProfile: async (profileId) => {
    await delay(300);
    const initialLength = mockBillingProfiles.length;
    mockBillingProfiles = mockBillingProfiles.filter(bp => bp.id !== profileId);
    if (mockBillingProfiles.length < initialLength) {
      return { success: true };
    }
    throw new Error('Billing profile not found');
  },

  // Get invoices
  getInvoices: async (userId) => {
    await delay(300);
    return mockInvoices.filter(inv => inv.userId === userId); // Assuming invoices are linked to users
  },

  // Get orders
  getOrders: async (userId) => {
    await delay(300);
    return mockOrders.filter(order => order.userId === userId);
  },

  // Create order
  createOrder: async (orderData) => {
    await delay(500);
    const newOrder = {
      id: mockOrders.length + 1,
      orderNumber: `ORD-2024-${(mockOrders.length + 1).toString().padStart(3, '0')}`,
      date: new Date().toISOString().split('T')[0],
      status: 'processing',
      items: orderData.items,
      total: orderData.total,
      vat: orderData.vat,
      userId: orderData.userId
    };
    mockOrders.push(newOrder);
    return newOrder;
  }
};

export { mockApi };