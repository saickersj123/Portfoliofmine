import { useState } from 'react'
import { Mail, MapPin, Github, Linkedin, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const contactInfo = [
    {
      label: 'Location',
      value: 'Toronto, Canada',
      href: '#',
      icon: MapPin,
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/flynn-park-4007052a3',
      href: 'https://www.linkedin.com/in/flynn-park-4007052a3',
      icon: Linkedin,
    },
    {
      label: 'GitHub',
      value: 'github.com/saickersj123',
      href: 'https://github.com/saickersj123',
      icon: Github,
    },
  ]

  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/in/flynn-park-4007052a3',
      icon: Linkedin,
      description: 'Connect professionally and view my experience',
    },
    {
      name: 'GitHub',
      href: 'https://github.com/saickersj123',
      icon: Github,
      description: 'View my projects and contributions',
    },
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
      })
    }, 3000)
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm actively seeking opportunities in DevOps/Cloud, System Administration, IT Tech Support, and Cybersecurity roles. 
            Let's discuss how we can work together to achieve your goals.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                {contactInfo.map((info) => {
                  const Icon = info.icon
                  return (
                    <a
                      key={info.label}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Me</h2>
              <div className="space-y-4">
                {socialLinks.map((link) => {
                  const Icon = link.icon
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 rounded-lg border bg-card hover:shadow-md transition-shadow"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{link.name}</div>
                        <div className="text-muted-foreground">{link.description}</div>
                      </div>
                    </a>
                  )
                })}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Roles I'm Seeking</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• DevOps Engineer / Cloud Engineer</li>
                <li>• System Administrator</li>
                <li>• IT Technical Support Specialist</li>
                <li>• Cybersecurity Analyst / Engineer</li>
                <li>• Infrastructure Engineer</li>
                <li>• Site Reliability Engineer (SRE)</li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-xl p-6">
              <h3 className="text-lg font-semibold mb-3">Why Choose Me?</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• 4+ years of hands-on IT experience</li>
                <li>• Military-grade security background</li>
                <li>• Proven track record of system improvements</li>
                <li>• Strong problem-solving and troubleshooting skills</li>
                <li>• Continuous learner with current certifications</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Send Me a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                    placeholder="your.email@company.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="form-input"
                  placeholder="Job opportunity, project discussion, etc."
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="form-textarea"
                  placeholder="Tell me about the opportunity, role requirements, or any questions you have!"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className="w-full flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <div className="spinner mr-2" />
                    Sending...
                  </>
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {isSubmitted && (
              <div className="mt-4 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <p className="text-green-600 text-sm">
                  Thank you for your message! I'll get back to you within 24 hours.
                </p>
              </div>
            )}

            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
              <p className="text-blue-600 text-sm">
                <strong>Note:</strong> I'm currently available for immediate start and open to both full-time and contract opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <section className="mt-20">
          <div className="bg-card border rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">What I Bring to Your Team</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Technical Expertise</h3>
                <p className="text-sm text-muted-foreground">
                  Deep knowledge in cloud platforms, automation, and system administration with proven results in improving infrastructure reliability.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Security Mindset</h3>
                <p className="text-sm text-muted-foreground">
                  Military background in IT security with experience in hardening systems, access control, and compliance management.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
                <p className="text-sm text-muted-foreground">
                  Strong troubleshooting skills with a track record of resolving complex technical issues and optimizing system performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Contact */}
        <section className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Discuss Opportunities?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Whether you need a DevOps engineer, system administrator, or cybersecurity specialist, 
              I'm ready to contribute to your team's success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => document.getElementById('message')?.focus()}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail className="h-4 w-4 mr-2" />
                Send Message
              </button>
              <a
                href="https://www.linkedin.com/in/flynn-park-4007052a3"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-accent transition-colors"
              >
                <Linkedin className="h-4 w-4 mr-2" />
                View LinkedIn
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Contact 