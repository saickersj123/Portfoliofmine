import { Calendar, MapPin, Building, Award, Users, Code, Cloud, Shield, Server } from 'lucide-react'
import { calculateExperienceYears, experiences } from '../lib/utils'

const Experience = () => {
  const experienceYears = calculateExperienceYears()

  // Map icon strings to actual icon components
  const iconMap = {
    Cloud,
    Shield,
    Code,
    Users,
    Server
  }

  const experiencesWithIcons = experiences.map(experience => ({
    ...experience,
    icon: iconMap[experience.icon as keyof typeof iconMap]
  }))

  const getCategoryColor = (category: string) => {
    const colors = {
      'Military': 'bg-red-500/10 text-red-600',
      'Software Development': 'bg-blue-500/10 text-blue-600',
      'Cloud Infrastructure': 'bg-purple-500/10 text-purple-600',
      'DevOps': 'bg-green-500/10 text-green-600',
      'Cybersecurity': 'bg-orange-500/10 text-orange-600',
      'Leadership': 'bg-indigo-500/10 text-indigo-600',
      'System Administration': 'bg-cyan-500/10 text-cyan-600',
      'IT Support': 'bg-teal-500/10 text-teal-600',
    }
    return colors[category as keyof typeof colors] || 'bg-slate-500/10 text-slate-700 dark:text-slate-300'
  }

  const getCategoryIcon = (category: string) => {
    const icons = {
      'Cloud & DevOps': Cloud,
      'Cybersecurity & Cloud': Shield,
      'Leadership & Development': Users,
      'Education': Code,
      'System Administration': Server,
    }
    return icons[category as keyof typeof icons] || Code
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Professional Experience</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center leading-relaxed text-balance">
            A comprehensive overview of my professional journey, from military IT support <br></br>
            to cloud engineering and leadership roles in software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-12">
          {experiencesWithIcons.map((experience, index) => {
            const Icon = experience.icon
            getCategoryIcon(experience.category)
            return (
              <div
                key={index}
                className="relative bg-card border rounded-xl p-6 lg:p-8 hover:shadow-lg transition-shadow"
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-xl lg:text-2xl font-bold text-left">{experience.title}</h2>
                      <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                        <div className="flex items-center space-x-1">
                          <Building className="h-4 w-4" />
                          <span>{experience.company}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-4 w-4" />
                          <span>{experience.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(experience.category)}`}>
                    {experience.category}
                  </span>
                </div>

                {/* Period and Type */}
                <div className="flex items-center space-x-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.period}</span>
                  </div>
                  <span>•</span>
                  <span>{experience.duration}</span>
                  <span>•</span>
                  <span className="px-2 py-1 bg-muted rounded text-xs">
                    {experience.type}
                  </span>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-6 leading-relaxed text-left">
                  {experience.description}
                </p>

                {/* Key Achievements */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3 text-left indent-2">Key Achievements</h3>
                  <ul className="space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <li key={achievementIndex} className="flex items-start space-x-3">
                        <span className="text-primary">•</span>
                        <span className="text-sm text-muted-foreground leading-relaxed text-left">
                          {achievement}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-semibold mb-3 text-left indent-2">Technologies & Skills</h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded text-xs text-foreground/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Experience Summary */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Experience Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{experienceYears}+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5</div>
                <div className="text-sm text-muted-foreground">Roles</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">2</div>
                <div className="text-sm text-muted-foreground">Awards</div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Highlights */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-center">Key Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-4">
                <Cloud className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Cloud Infrastructure</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed text-balance">
                Designed and implemented scalable AWS infrastructure with Terraform and CI/CD pipelines.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Leadership</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed text-balance">
                Founded and led developer club, mentoring 15+ members and managing multiple projects.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-6 w-6 text-red-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Cybersecurity</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed text-balance">
                Developed cybersecurity training platforms and implemented security best practices.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center mx-auto mb-4">
                <Server className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">System Administration</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed text-balance">
                Managed Linux-based servers, network infrastructure, and IT support operations.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center mx-auto mb-4">
                <Award className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Recognition</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed text-balance">
                Received "Best Project of the Year" and "Best Software Club of the Year" awards.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6">
              <div className="w-12 h-12 rounded-lg bg-teal-500/10 flex items-center justify-center mx-auto mb-4">
                <Code className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-center">Education</h3>
              <p className="text-sm text-muted-foreground text-center leading-relaxed text-balance">
                Teaching assistant for C Programming, helping 90+ students with programming fundamentals.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-card border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto text-center leading-relaxed text-balance indent-2">
              I bring a unique combination of technical expertise, leadership experience, 
              and proven track record of delivering results. Let's discuss how I can 
              contribute to your organization's success.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience 