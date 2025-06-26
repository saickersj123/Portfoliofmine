export interface ContactInfo {
  label: string
  value: string
  href: string
  icon: string
}

export interface SocialLink {
  name: string
  href: string
  icon: string
  description: string
}

export interface ContactData {
  header: {
    title: string
    subtitle: string
  }
  contactInfo: ContactInfo[]
  socialLinks: SocialLink[]
  currentStatus: {
    title: string
    status: string
    description: string
    icon: string
  }
  form: {
    title: string
    note: string
    successMessage: string
  }
  callToAction: {
    title: string
    description: string
    buttonText: string
  }
}

export const contactData: ContactData = {
  header: {
    title: "Get In Touch",
    subtitle: "I'm actively seeking opportunities in DevOps/Cloud, System Administration, IT Tech Support, and Cybersecurity roles. Let's discuss how we can work together to achieve your goals."
  },
  contactInfo: [
    {
      label: 'Location',
      value: 'Toronto, Canada',
      href: 'https://www.google.com/maps/place/Toronto,+ON,+Canada/@43.653963,-79.387207,12z/data=!3m1!4b1!4m6!3m5!1s0x89d4cb90d7c63ba5:0x323555502ab4c477!8m2!3d43.65107!4d-79.347015!16zL20vMDE3N2Nj?entry=ttu&g_ep=EgoyMDI1MDIyNS4wIKXMDSoASAFQAw%3D%3D',
      icon: 'MapPin',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/flynn-park-4007052a3',
      href: 'https://www.linkedin.com/in/flynn-park-4007052a3',
      icon: 'Linkedin',
    },
    {
      label: 'GitHub',
      value: 'github.com/saickersj123',
      href: 'https://github.com/saickersj123',
      icon: 'Github',
    },
  ],
  socialLinks: [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/flynn-park-4007052a3',
      icon: 'Linkedin',
      description: 'Connect professionally and view my experience',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/saickersj123',
      icon: 'Github',
      description: 'View my projects and contributions',
    },
  ],
  currentStatus: {
    title: 'Current Status',
    status: 'Available for Opportunities',
    description: 'Open to full-time and contract positions. Ready for immediate start.',
    icon: 'CheckCircle'
  },
  form: {
    title: 'Send Me a Message',
    note: "I'm currently available for immediate start and open to both full-time and contract opportunities.",
    successMessage: "Thank you for your message! I'll get back to you within 24 hours."
  },
  callToAction: {
    title: 'Ready to Discuss Opportunities?',
    description: 'Whether you need a DevOps engineer, system administrator, or cybersecurity specialist, I\'m ready to contribute to your team\'s success.',
    buttonText: 'Connect on LinkedIn'
  }
} 