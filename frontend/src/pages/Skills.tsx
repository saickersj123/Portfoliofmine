import { Link } from 'react-router-dom'
import { calculateSkillStats, getProficiencyColor, getProficiencyText, skillCategories, calculateExperienceYears, calculateProjectTechnologies, projects } from '../lib/utils'
import { 
  Cloud, 
  Server, 
  Shield, 
  Code, 
  Database, 
  Cpu, 
  Network, 
  Terminal 
} from 'lucide-react'

const Skills = () => {
  const skillStats = calculateSkillStats(skillCategories)
  const experienceYears = calculateExperienceYears()
  const totalTechnologies = calculateProjectTechnologies(projects)

  // Map icon strings to actual icon components
  const iconMap = {
    Cloud,
    Server,
    Shield,
    Code,
    Database,
    Cpu,
    Network,
    Terminal
  }

  const skillCategoriesWithIcons = skillCategories.map(category => ({
    ...category,
    icon: iconMap[category.icon as keyof typeof iconMap]
  }))

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Skills & Expertise</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A comprehensive overview of my technical skills, from cloud infrastructure 
            and DevOps practices to system administration and cybersecurity expertise.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="space-y-12">
          {skillCategoriesWithIcons.map((category, categoryIndex) => {
            const Icon = category.icon
            return (
              <section key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h2 className="text-2xl font-bold">{category.name}</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-card border rounded-xl p-6 hover:shadow-lg transition-shadow"
                    >
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-semibold">{skill.name}</h3>
                        <span className="text-sm text-muted-foreground">
                          {getProficiencyText(skill.proficiency)}
                        </span>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm text-foreground/80 mb-2">
                          <span>Proficiency</span>
                          <span>{skill.proficiency}%</span>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                          <div
                            className="bg-primary h-2 rounded-full transition-all duration-500"
                            style={{ width: `${skill.proficiency}%` }}
                          />
                        </div>
                      </div>

                      {/* Details */}
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {skill.details}
                      </p>
                    </div>
                  ))}
                </div>
              </section>
            )
          })}
        </div>

        {/* Skills Summary */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Skills Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{skillStats.totalCategories}</div>
                <div className="text-sm text-foreground/80">Skill Categories</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{totalTechnologies}+</div>
                <div className="text-sm text-foreground/80">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{experienceYears}+</div>
                <div className="text-sm text-foreground/80">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{skillStats.averageProficiency}%</div>
                <div className="text-sm text-foreground/80">Average Proficiency</div>
              </div>
            </div>
          </div>
        </section>

        {/* Core Competencies */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-6 text-center">Core Competencies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Infrastructure as Code</h3>
              <p className="text-sm text-foreground/80">
                Comprehensive cloud infrastructure management with AWS and Azure, including IAM, networking, and monitoring.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">CI/CD Automation</h3>
              <p className="text-sm text-foreground/80">
                Automated CI/CD pipelines using Jenkins and GitHub Actions for efficient software delivery.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">System Administration</h3>
              <p className="text-sm text-foreground/80">
                Strong system administration skills in Linux/Unix environments with performance optimization.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Security & Compliance</h3>
              <p className="text-sm text-foreground/80">
                Network infrastructure management including TCP/IP, DNS, VPN, and DHCP configuration.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Troubleshooting</h3>
              <p className="text-sm text-foreground/80">
                Cybersecurity expertise in IAM, vulnerability assessment, and security hardening practices.
              </p>
            </div>
            <div className="bg-card border rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold mb-2">Cloud Architecture</h3>
              <p className="text-sm text-foreground/80">
                Programming skills in Python, C, and web technologies for automation and development.
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-card border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Leverage These Skills?</h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              My technical expertise spans across cloud infrastructure, cybersecurity, system administration, 
              and software development. I specialize in building scalable, secure, and automated solutions 
              that drive operational efficiency and business value.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start a Conversation
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Skills 