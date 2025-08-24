// Simple contact form handler - no external dependencies needed
export const sendContactEmail = async (formData) => {
  try {
      const templateParams = {
      to_email: 'contact@prep-center.com',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      phone: formData.phone
   };

    // For demo purposes, simulate email sending
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Email would be sent with data:', templateParams);
    
    return { 
      success: true, 
      message: 'Mesajul a fost trimis cu succes! Vă vom contacta în curând prin WhatsApp sau email.' 
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return { 
      success: false, 
      error: 'Eroare la trimiterea mesajului. Vă rugăm să încercați din nou sau să ne contactați direct pe WhatsApp.' 
    };
  }
};