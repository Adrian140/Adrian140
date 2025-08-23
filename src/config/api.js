// Configurație API pentru producție
const API_BASE_URL = import.meta.env.VITE_API_URL || 'https://api.prep-center.eu';

// Headers comune pentru toate cererile
const getHeaders = () => {
  const token = localStorage.getItem('authToken');
  return {
    'Content-Type': 'application/json',
    ...(token && { 'Authorization': `Bearer ${token}` })
  };
};

// Funcție pentru gestionarea erorilor API
const handleApiError = async (response) => {
  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Network error' }));
    throw new Error(error.message || 'API Error');
  }
  return response;
};

// API Client
export const apiClient = {
  // Auth endpoints
  auth: {
    login: async (email, password) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ email, password })
      });
      await handleApiError(response);
      return response.json();
    },

    register: async (userData) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/register`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(userData)
      });
      await handleApiError(response);
      return response.json();
    },

    validate: async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/validate`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    forgotPassword: async (email) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/forgot-password`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ email })
      });
      await handleApiError(response);
      return response.json();
    },

    changePassword: async (currentPassword, newPassword) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/change-password`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ currentPassword, newPassword })
      });
      await handleApiError(response);
      return response.json();
    },

    enable2FA: async () => {
      const response = await fetch(`${API_BASE_URL}/api/auth/enable-2fa`, {
        method: 'POST',
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    verify2FA: async (token) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/verify-2fa`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ token })
      });
      await handleApiError(response);
      return response.json();
    },

    disable2FA: async (token) => {
      const response = await fetch(`${API_BASE_URL}/api/auth/disable-2fa`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ token })
      });
      await handleApiError(response);
      return response.json();
    }
  },

  // User endpoints
  user: {
    updateProfile: async (profileData) => {
      const response = await fetch(`${API_BASE_URL}/api/user/profile`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(profileData)
      });
      await handleApiError(response);
      return response.json();
    }
  },

  // Addresses endpoints
  addresses: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/addresses`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    create: async (addressData) => {
      const response = await fetch(`${API_BASE_URL}/api/addresses`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(addressData)
      });
      await handleApiError(response);
      return response.json();
    },

    update: async (id, addressData) => {
      const response = await fetch(`${API_BASE_URL}/api/addresses/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(addressData)
      });
      await handleApiError(response);
      return response.json();
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/addresses/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    }
  },

  // Billing profiles endpoints
  billingProfiles: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/billing-profiles`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    create: async (profileData) => {
      const response = await fetch(`${API_BASE_URL}/api/billing-profiles`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(profileData)
      });
      await handleApiError(response);
      return response.json();
    },

    update: async (id, profileData) => {
      const response = await fetch(`${API_BASE_URL}/api/billing-profiles/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(profileData)
      });
      await handleApiError(response);
      return response.json();
    },

    delete: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/billing-profiles/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    validateVAT: async (vatNumber, country) => {
      const response = await fetch(`${API_BASE_URL}/api/validate-vat`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify({ vatNumber, country })
      });
      await handleApiError(response);
      return response.json();
    }
  },

  // Invoices endpoints
  invoices: {
    getAll: async () => {
      const response = await fetch(`${API_BASE_URL}/api/invoices`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    download: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/invoices/${id}/download`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.blob();
    },

    view: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/invoices/${id}/view`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.blob();
    }
  },

  // Admin endpoints
  admin: {
    getServices: async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/services`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    createService: async (serviceData) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/services`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(serviceData)
      });
      await handleApiError(response);
      return response.json();
    },

    updateService: async (id, serviceData) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/services/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(serviceData)
      });
      await handleApiError(response);
      return response.json();
    },

    deleteService: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/services/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    getPricing: async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/pricing`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    createPricing: async (pricingData) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/pricing`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(pricingData)
      });
      await handleApiError(response);
      return response.json();
    },

    updatePricing: async (id, pricingData) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/pricing/${id}`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(pricingData)
      });
      await handleApiError(response);
      return response.json();
    },

    deletePricing: async (id) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/pricing/${id}`, {
        method: 'DELETE',
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    getContent: async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/content`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    updateContent: async (contentData) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/content`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(contentData)
      });
      await handleApiError(response);
      return response.json();
    },

    getPricingContent: async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/pricingContent`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    },

    updatePricingContent: async (contentData) => {
      const response = await fetch(`${API_BASE_URL}/api/admin/pricingContent`, {
        method: 'PUT',
        headers: getHeaders(),
        body: JSON.stringify(contentData)
      });
      await handleApiError(response);
      return response.json();
    },

    getUsers: async () => {
      const response = await fetch(`${API_BASE_URL}/api/admin/users`, {
        headers: getHeaders()
      });
      await handleApiError(response);
      return response.json();
    }
  },

  // Contact form
  contact: {
    send: async (formData) => {
      const response = await fetch(`${API_BASE_URL}/api/contact`, {
        method: 'POST',
        headers: getHeaders(),
        body: JSON.stringify(formData)
      });
      await handleApiError(response);
      return response.json();
    }
  }
};

export default apiClient;
