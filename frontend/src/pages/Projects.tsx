import { ExternalLink, Github, Code } from 'lucide-react'
import { calculateProjectStats, projects } from '../lib/utils'

const Projects = () => {
  const projectStats = calculateProjectStats(projects)

  const getCategoryColor = (category: string) => {
    const colors = {
      'Web Development': 'bg-blue-500/10 text-blue-600',
      'Cloud Infrastructure': 'bg-purple-500/10 text-purple-600',
      'DevOps': 'bg-green-500/10 text-green-600',
      'Cybersecurity': 'bg-red-500/10 text-red-600',
      'AI/ML': 'bg-orange-500/10 text-orange-600',
      'System Programming': 'bg-cyan-500/10 text-cyan-600',
      'Low-Level Development': 'bg-slate-500/10 text-slate-600',
      'Leadership': 'bg-indigo-500/10 text-indigo-600',
      'Full-Stack': 'bg-teal-500/10 text-teal-600',
      'Audio Processing': 'bg-pink-500/10 text-pink-600',
      'Education': 'bg-yellow-500/10 text-yellow-600',
    }
    return colors[category as keyof typeof colors] || 'bg-gray-500/10 text-gray-600'
  }

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">Projects</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects, from cloud infrastructure and cybersecurity 
            platforms to web applications and system programming solutions.
          </p>
        </div>

        {/* Featured Projects */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <div
                key={index}
                className="bg-card border rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-16 w-16 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold">{project.title}</h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-4 w-4" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-4 w-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.categories.map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 5 && (
                      <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        +{project.technologies.length - 5} more
                      </span>
                    )}
                  </div>

                  {/* Stats */}
                  {project.stats && (
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t">
                      {Object.entries(project.stats).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className="text-sm font-semibold">{value}</div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* All Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-8">All Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card border rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-video bg-muted relative">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Code className="h-12 w-12 text-muted-foreground/50" />
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <div className="flex space-x-1">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-3 w-3" />
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-1 rounded bg-accent text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Categories */}
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.categories.slice(0, 3).map((category, catIndex) => (
                      <span
                        key={catIndex}
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(category)}`}
                      >
                        {category}
                      </span>
                    ))}
                    {project.categories.length > 3 && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-500/10 text-gray-600">
                        +{project.categories.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Project Statistics */}
        <section className="mt-20">
          <div className="bg-gradient-to-r from-primary/10 to-primary/5 rounded-xl p-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Project Overview</h2>
            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.totalProjects}</div>
                <div className="text-sm text-muted-foreground">Total Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.featuredProjects}</div>
                <div className="text-sm text-muted-foreground">Featured Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.uniqueTechnologies}+</div>
                <div className="text-sm text-muted-foreground">Technologies Used</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">{projectStats.totalUsers}</div>
                <div className="text-sm text-muted-foreground">Users Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-16 text-center">
          <div className="bg-card border rounded-xl p-8">
            <h3 className="text-2xl font-bold mb-4">Interested in My Work?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always excited to work on new projects and challenges. Let's discuss 
              how I can contribute to your next initiative.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Let's Collaborate
            </a>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects 