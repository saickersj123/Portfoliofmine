import { GraduationCap, Award, MapPin, Calendar, Users, Code, Cloud, Shield, Server } from 'lucide-react'
import { Link } from 'react-router-dom'
import { calculateExperienceYears, calculateCertificationStats, certifications, education } from '../lib/utils'

const About = () => {
  const experienceYears = calculateExperienceYears()
  const certificationStats = calculateCertificationStats(certifications)

  // Map icon strings to actual icon components
  const iconMap = {
    Cloud,
    Server,
    Shield
  }

  const certificationsWithIcons = certifications.map(cert => ({
    ...cert,
    icon: iconMap[cert.icon as keyof typeof iconMap]
  }))

  const interests = [
    {
      title: 'Cloud Infrastructure',
      description: 'Designing and implementing scalable cloud solutions on AWS and Azure',
      icon: Cloud
    },
    {
      title: 'DevOps & Automation',
      description: 'Building CI/CD pipelines and infrastructure as code solutions',
      icon: Code
    },
    {
      title: 'Cybersecurity',
      description: 'Security hardening, vulnerability management, and compliance',
      icon: Shield
    },
    {
      title: 'System Administration',
      description: 'Linux/Unix systems management and network administration',
      icon: Server
    }
  ]

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">About Me</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A passionate DevOps/Cloud Engineer with a strong foundation in system administration 
            and cybersecurity, currently seeking opportunities to contribute to innovative projects.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-1">
            <div className="bg-card border rounded-xl p-6 sticky top-6">
              <h2 className="text-2xl font-bold mb-6">Personal Information</h2>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Location</div>
                    <div className="text-sm text-muted-foreground">Toronto, Canada</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Experience</div>
                    <div className="text-sm text-muted-foreground">{experienceYears}+ Years</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Availability</div>
                    <div className="text-sm text-muted-foreground">Open to Opportunities</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <div className="font-medium">Awards</div>
                    <div className="text-sm text-muted-foreground">2 Professional Awards</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t">
                <h3 className="text-lg font-semibold mb-4">Currently Seeking</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm">DevOps Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm">System Administrator</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    <span className="text-sm">Cloud Engineer</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <span className="text-sm">IT Support Specialist</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <span className="text-sm">Cybersecurity Analyst</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Detailed Info */}
          <div className="lg:col-span-2 space-y-12">
            {/* Professional Summary */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Professional Summary</h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am a Systems & Cloud Administrator with proven success maintaining secure, 
                  high-availability Linux/Unix environments on AWS and on-premise networks. 
                  My expertise spans infrastructure automation (Terraform, Jenkins, GitHub Actions), 
                  CI/CD, containerization (Docker), and network administration (TCP/IP, DNS, VPN).
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I am adept at troubleshooting, performance tuning, and enforcing security 
                  best-practices for mission-critical workloads. My experience includes leading 
                  teams, mentoring developers, and delivering projects that have received 
                  recognition for excellence and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Currently, I am actively seeking opportunities in DevOps/Cloud, System Administration, 
                  IT Tech Support, and Cybersecurity roles where I can leverage my technical expertise 
                  and problem-solving skills to contribute to organizational success.
                </p>
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Education</h2>
              <div className="bg-card border rounded-xl p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{education.degree}</h3>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                      <span>{education.school}</span>
                      <span>•</span>
                      <span>{education.location}</span>
                      <span>•</span>
                      <span>{education.period}</span>
                    </div>
                    <div className="mb-4">
                      <span className="text-sm font-medium">GPA: {education.gpa}</span>
                    </div>
                    
                    <h4 className="font-semibold mb-3">Relevant Courses</h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {education.relevantCourses.map((course, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span className="text-sm text-muted-foreground">{course}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Certifications */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Certifications</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {certificationsWithIcons.map((cert, index) => {
                  const Icon = cert.icon
                  return (
                    <div key={index} className="bg-card border rounded-lg p-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink0">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-semibold mb-1">{cert.name}</h3>
                          {cert.status ? (
                            <div className="flex items-center space-x-2">
                              <span className="text-sm text-muted-foreground">{cert.status}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-sm text-muted-foreground">Expected {cert.expectedDate}</span>
                            </div>
                          ) : (
                            <span className="text-sm text-muted-foreground">{cert.year}</span>
                          )}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Interests & Focus Areas */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Areas of Interest</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {interests.map((interest, index) => {
                  const Icon = interest.icon
                  return (
                    <div key={index} className="bg-card border rounded-lg p-6">
                      <div className="flex items-center space-x-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{interest.title}</h3>
                      </div>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {interest.description}
                      </p>
                    </div>
                  )
                })}
              </div>
            </section>

            {/* Core Competencies */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Core Competencies</h2>
              <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Linux/Unix System Administration</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">AWS (EC2, S3, IAM, Lambda, VPC, DynamoDB)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Infrastructure as Code (Terraform)</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">CI/CD (Jenkins, GitHub Actions)</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Docker & KVM Virtualization</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Bash & Python Scripting</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">TCP/IP, DNS, VPN, DHCP</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-sm">Monitoring & Vulnerability Scanning</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Call to Action */}
        <section className="mt-20 text-center">
          <div className="bg-card border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in Working Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm passionate about technology and always excited to work on new challenges. 
              Let's discuss how my skills and experience can benefit your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-accent transition-colors"
              >
                View My Projects
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About 