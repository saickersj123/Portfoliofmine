import { Link } from 'react-router-dom'
import { ArrowRight, Github, Linkedin, Cloud, Server, Shield } from 'lucide-react'
import { useEffect } from 'react'
import { calculateExperienceYears, calculateProjectStats, calculateProjectTechnologies, calculateCertificationStats, projects, certifications } from '../lib/utils'
import { profile } from '../lib/data'
import { useAppStore } from '../store'

const Home = () => {
  const {
    isTransitioning,
    isPhaseTwo,
    isTitleVisible,
    startTransitionCycle,
    getCurrentJobTitle,
    getNextJobTitle
  } = useAppStore((state) => ({
    isTransitioning: state.isTransitioning,
    isPhaseTwo: state.isPhaseTwo,
    isTitleVisible: state.isTitleVisible,
    startTransitionCycle: state.startTransitionCycle,
    getCurrentJobTitle: state.getCurrentJobTitle,
    getNextJobTitle: state.getNextJobTitle
  }))
  
  useEffect(() => {
    const interval = setInterval(() => {
      startTransitionCycle()
    }, 3000) // Total time between transitions
    return () => clearInterval(interval)
  }, [startTransitionCycle])

  const experienceYears = calculateExperienceYears()

  const projectStats = calculateProjectStats(projects)
  const totalTechnologies = calculateProjectTechnologies(projects)
  const certificationStats = calculateCertificationStats(certifications)

  const stats = [
    { label: 'Years Experience', value: `${experienceYears}+` },
    { label: 'Projects Completed', value: `${projectStats.totalProjects}+` },
    { label: 'Technologies', value: `${totalTechnologies}+` },
    { label: 'Certifications', value: `${certificationStats.totalCertifications}` },
  ]

  const highlights = [
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS, Azure, Terraform, CI/CD pipelines, Infrastructure as Code',
    },
    {
      icon: Server,
      title: 'System Administration',
      description: 'Linux/Unix systems, Network administration, Performance optimization',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Security hardening, Access control, Vulnerability management, Compliance',
    },
  ]

  const currentJobTitle = getCurrentJobTitle()
  const nextJobTitle = getNextJobTitle()

  // Safety check to ensure job titles exist
  if (!currentJobTitle || !nextJobTitle) {
    return null
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl lg:text-6xl font-bold tracking-tight">
                  Hi, I'm{' '}
                  <span className="text-primary">{profile.name}</span>
                </h1>
                <div className="relative">
                  <div className="text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-black tracking-wide">
                    <div className="inline-block min-w-[300px] lg:min-w-[400px] xl:min-w-[500px] h-24 lg:h-28 xl:h-32 relative flex justify-center">
                      {/* Current Title - only show when not in Phase 2 */}
                      {!isPhaseTwo && (
                        <span 
                          className={`absolute inset-0 transition-all duration-500 ease-in-out flex items-center justify-center ${
                            isTransitioning 
                              ? 'opacity-0 -translate-y-2 blur-sm' 
                              : 'opacity-100 translate-y-0 blur-0'
                          } bg-gradient-to-r ${currentJobTitle.gradient} bg-clip-text text-transparent leading-none`}
                          style={{
                            textShadow: isTransitioning 
                              ? '0 0 20px rgba(59, 130, 246, 0.6)' 
                              : '0 0 15px rgba(59, 130, 246, 0.4)',
                            filter: isTransitioning ? 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))' : 'none'
                          }}
                        >
                          {currentJobTitle.title}
                        </span>
                      )}
                      
                      {/* Next Title - only show during Phase 2 */}
                      {isPhaseTwo && (
                        <span 
                          className={`absolute inset-0 transition-all duration-250 ease-in-out flex items-center justify-center ${
                            isTitleVisible 
                              ? 'opacity-100 translate-y-0 blur-0' 
                              : 'opacity-0 translate-y-2 blur-sm'
                          } bg-gradient-to-r ${nextJobTitle.gradient} bg-clip-text text-transparent leading-none`}
                          style={{
                            textShadow: isTitleVisible 
                              ? '0 0 15px rgba(59, 130, 246, 0.4)' 
                              : '0 0 20px rgba(59, 130, 246, 0.6)',
                            filter: isTitleVisible ? 'none' : 'drop-shadow(0 0 8px rgba(59, 130, 246, 0.2))'
                          }}
                        >
                          {nextJobTitle.title}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  {/* Animated underline */}
                  <div 
                    className={`absolute bottom-0 left-0 h-1 bg-gradient-to-r ${isPhaseTwo ? nextJobTitle.gradient : currentJobTitle.gradient} transition-all duration-500 ease-in-out ${
                      isTransitioning ? 'w-0 opacity-0' : 'w-full opacity-100'
                    }`}
                    style={{
                      boxShadow: isTransitioning 
                        ? 'none' 
                        : '0 0 12px rgba(59, 130, 246, 0.5)'
                    }}
                  />
                  
                  {/* Glow effect */}
                  <div 
                    className={`absolute -inset-4 bg-gradient-to-r ${isPhaseTwo ? nextJobTitle.gradient : currentJobTitle.gradient} rounded-xl transition-all duration-500 ease-in-out ${
                      isTransitioning ? 'opacity-0 scale-95' : 'opacity-15 scale-100'
                    } blur-2xl`}
                  />
                </div>
                <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-center text-balance">
                  {profile.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href={profile.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
            {/* Image */}
            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="h-full w-full rounded-full bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center overflow-hidden"> {/* the img has to be cropped in this container */}
                  <img src={profile.image.src} alt={profile.image.alt} className="max-w-full max-h-full w-auto h-auto rounded-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30 rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-foreground/80">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Areas of Expertise
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-center text-balance">
              Specialized in cloud infrastructure, system administration, and cybersecurity 
              with a proven track record of improving system reliability and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon
              return (
                <div key={index} className="bg-card border rounded-xl p-6 text-center">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-3">{highlight.title}</h3>
                  <p className="text-foreground/80 text-center leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Search Focus */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-blue-500/5 rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Currently Seeking Opportunities
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed text-balance">
              I'm actively looking for roles where I can leverage my technical expertise 
              and problem-solving skills to contribute to your organization's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-center">DevOps Engineer</h3>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                CI/CD pipelines,  Cloud platforms, Infrastructure automation
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-center">System Administrator</h3>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                Linux/Unix systems, <br></br>Network administration
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-center">IT Tech Support</h3>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                 User support, System maintenance, Technical troubleshooting
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-2 text-center">Cybersecurity</h3>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                Vulnerability management, <br></br>Access control, Security hardening
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground rounded-lg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90 text-center leading-relaxed text-balance">
            Let's discuss how I can help you build robust, secure, and scalable 
            infrastructure solutions for your organization.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-8 py-3 bg-primary-foreground text-primary font-medium rounded-lg hover:bg-primary-foreground/90 transition-colors"
          >
            Start a Conversation
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">About Me</h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-center leading-relaxed text-balance">
              I'm a passionate IT professional with expertise in cloud infrastructure, cybersecurity, 
              and system administration. My journey spans from military IT operations to leading 
              development teams and architecting cloud-native solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Cloud & DevOps</div>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                AWS, Azure, Terraform, CI/CD pipelines, Infrastructure as Code
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">System Administration</div>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                Linux/Unix systems, Network administration, Performance optimization
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Cybersecurity</div>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                Security hardening, Access control, Vulnerability management, Compliance
              </p>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary mb-2">Leadership</div>
              <p className="text-sm text-foreground/80 text-center leading-relaxed text-balance">
                Team management, Project coordination, Mentoring, Stakeholder collaboration
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home 