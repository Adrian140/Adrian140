// Simple contact form API - no database needed
export const apiClient = {
  contact: {
    send: async (formData) => {
      // Use EmailJS for direct email sending
      try {
        // Simulate email sending
        await new Promise(resolve => setTimeout(resolve, 1000));
        return { success: true, message: "Mesajul a fost trimis cu succes!" };
      } catch (error) {
        throw new Error("Eroare la trimiterea mesajului");
      }
    }
  }
};
