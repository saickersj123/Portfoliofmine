import { useState, useEffect } from 'react'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle, AlertCircle } from 'lucide-react'
import { contactData } from '../lib/data'
import { initEmailJS, sendEmail } from '../lib/emailjs'
import type { ContactInfo, SocialLink } from '../lib/data'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  // Initialize EmailJS on component mount
  useEffect(() => {
    initEmailJS()
  }, [])

  // Icon mapping
  const iconMap: { [key: string]: any } = {
    Mail,
    MapPin,
    Github,
    Linkedin,
    Send,
    CheckCircle,
    AlertCircle,
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
    // Clear error when user starts typing
    if (error) setError(null)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      }

      const result = await sendEmail(templateParams)
      
      if (result.success) {
        setIsSubmitted(true)
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        })
        
        // Reset success state after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false)
        }, 5000)
      } else {
        setError('Failed to send message. Please try again or contact me directly via LinkedIn.')
      }
    } catch (err) {
      setError('An unexpected error occurred. Please try again or contact me directly via LinkedIn.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
            {contactData.header.title}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed text-balance indent-2">
            {contactData.header.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Contact Information */}
          <div className="space-y-6">
            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-5 text-primary">Contact Information</h2>
              <div className="space-y-4">
                {contactData.contactInfo.map((info: ContactInfo) => {
                  const Icon = iconMap[info.icon]
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg border bg-background/50 hover:bg-background hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-left">{info.label}</div>
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">{info.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-5 text-primary">Connect With Me</h2>
              <div className="space-y-4">
                {contactData.socialLinks.map((link: SocialLink) => {
                  const Icon = iconMap[link.icon]
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg border bg-background/50 hover:bg-background hover:shadow-lg transition-all duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-semibold text-foreground text-left">{link.name}</div>
                        <div className="text-muted-foreground group-hover:text-foreground transition-colors text-sm">{link.description}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="space-y-6">

            <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 shadow-lg">
              <h2 className="text-xl font-bold mb-5 text-primary">{contactData.form.title}</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold mb-2 text-foreground text-left indent-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground text-left indent-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                      placeholder="your.email@company.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold mb-2 text-foreground text-left indent-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300"
                    placeholder="Job opportunity, project discussion, etc."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold mb-2 text-foreground text-left indent-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border bg-background/50 focus:bg-background focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-300 resize-none"
                    placeholder="Tell me about the opportunity, role requirements, or any questions you have!"
                  />
                </div>

                {/* Error Message */}
                {error && (
                  <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0" />
                      <p className="text-red-600 text-sm font-medium">{error}</p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className="w-full flex items-center justify-center px-6 py-3 bg-gradient-to-r from-primary to-primary/90 text-primary-foreground font-semibold rounded-lg hover:from-primary/90 hover:to-primary/80 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  {isSubmitting ? (
                    <>
                      <div className="spinner mr-2" />
                      Sending...
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="h-5 w-5 mr-2" />
                      Message Sent!
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5 mr-2" />
                      Send Message
                    </>
                  )}
                </button>
              </form>

              {isSubmitted && (
                <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <p className="text-green-600 text-sm font-medium">
                      {contactData.form.successMessage}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <p className="text-blue-600 text-sm font-medium">
                  <strong>Note:</strong> {contactData.form.note}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Ready to Discuss Opportunities - Repositioned */}
        <div className="mt-8">
          <div className="bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10 rounded-xl p-6 border border-primary/20 shadow-lg">
            <h3 className="text-lg font-bold mb-4 text-primary">{contactData.callToAction.title}</h3>
            <p className="text-muted-foreground mb-5 text-sm">
              {contactData.callToAction.description}
            </p>
            <div className="flex justify-center">
              <a
                href="https://www.linkedin.com/in/flynn-park-4007052a3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary/20 bg-background/50 text-foreground font-semibold rounded-lg hover:bg-background hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                {contactData.callToAction.buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact 