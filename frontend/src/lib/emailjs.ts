import emailjs from '@emailjs/browser'

// EmailJS configuration
export const EMAILJS_CONFIG = {
  // Use environment variables if available, otherwise use placeholder values
  SERVICE_ID: import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID',
  TEMPLATE_ID: import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID',
  PUBLIC_KEY: import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY',
}

// Initialize EmailJS
export const initEmailJS = () => {
  // Only initialize if we have valid credentials
  if (EMAILJS_CONFIG.PUBLIC_KEY && EMAILJS_CONFIG.PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY)
  }
}

// Send email function
export const sendEmail = async (templateParams: {
  from_name: string
  from_email: string
  subject: string
  message: string
}) => {
  // Check if EmailJS is properly configured
  if (EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' || 
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || 
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
    return { 
      success: false, 
      error: 'EmailJS not configured. Please set up your EmailJS credentials.' 
    }
  }

  try {
    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams,
      EMAILJS_CONFIG.PUBLIC_KEY
    )
    return { success: true, data: response }
  } catch (error) {
    console.error('EmailJS Error:', error)
    return { success: false, error }
  }
} 