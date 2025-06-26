import { Link } from 'react-router-dom'
import { ArrowRight, Download, Github, Linkedin, Code, Cloud, Server, Shield } from 'lucide-react'
import { useEffect } from 'react'
import { calculateExperienceYears, calculateProjectStats, calculateTotalTechnologies, calculateCertificationStats, projects, certifications, skillCategories } from '../lib/utils'
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
  const totalTechnologies = calculateTotalTechnologies(projects, skillCategories)
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
                  <span className="text-primary">Flynn Park</span>
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
                <p className="text-lg text-muted-foreground max-w-2xl text-left">
                  &nbsp;Passionate about cloud infrastructure, automation, cybersecurity.<br></br>
                  &nbsp;Currently seeking opportunities in DevOps/Cloud, IT Support, System Administration and Cybersecurity roles. <br></br>
                  &nbsp;I am a quick learner and always looking to improve my skills.
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
                <a
                  href="/resume/SysadminCV.txt"
                  download
                  className="inline-flex items-center justify-center px-6 py-3 border border-border bg-background text-foreground font-medium rounded-lg hover:bg-accent transition-colors"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </div>

              <div className="flex items-center space-x-4">
                <a
                  href="https://github.com/saickersj123"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/flynn-park-4007052a3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5 p-8">
                <div className="h-full w-full rounded-xl bg-gradient-to-br from-primary/10 to-transparent flex items-center justify-center">
                  <Code className="h-32 w-32 text-primary/50" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
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
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Specialized in cloud infrastructure, system administration, and cybersecurity 
              with a proven track record of improving system reliability and security.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight) => {
              const Icon = highlight.icon
              return (
                <div
                  key={highlight.title}
                  className="p-6 rounded-xl border bg-card hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">
                    {highlight.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {highlight.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Job Search Focus */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Currently Seeking Opportunities
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              I'm actively looking for roles where I can leverage my technical expertise 
              and problem-solving skills to contribute to your organization's success.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">DevOps Engineer</h3>
              <p className="text-sm text-muted-foreground">
                CI/CD pipelines, infrastructure automation, cloud platforms
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">System Administrator</h3>
              <p className="text-sm text-muted-foreground">
                Linux/Unix systems, network administration, performance tuning
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">IT Tech Support</h3>
              <p className="text-sm text-muted-foreground">
                Technical troubleshooting, user support, system maintenance
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground">
                Security hardening, access control, vulnerability management
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Work Together?
          </h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
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
    </div>
  )
}

export default Home 