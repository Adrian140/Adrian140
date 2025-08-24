// Simple email configuration - no database needed
export const emailConfig = {
  serviceId: 'service_prep_center',
  templateId: 'template_contact_form',
  publicKey: 'your_emailjs_public_key'
};

// Mock helpers for components that still reference supabase
export const supabaseHelpers = {
  // Return empty data for all database operations
  getServices: () => Promise.resolve({ data: [], error: null }),
  createService: () => Promise.resolve({ data: null, error: { message: 'Database not configured' } }),
  updateService: () => Promise.resolve({ data: null, error: { message: 'Database not configured' } }),
  deleteService: () => Promise.resolve({ error: { message: 'Database not configured' } })
};

export const supabase = null; // No database connection needed
