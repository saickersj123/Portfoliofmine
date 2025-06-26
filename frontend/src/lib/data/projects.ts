export interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  categories: string[]
  github: string | null
  live: string | null
  featured: boolean
  stats: Record<string, string>
}

export const projects: Project[] = [
  {
    title: 'AWS Lambda DevOps',
    description: 'AWS Lambda DevOps Framework with Jenkins CI/CD pipeline and automated deployment with Terraform',
    image: '/api/placeholder/600/400',
    technologies: ['AWS', 'DevOps', 'Terraform', 'Jenkins', 'Docker', 'Bash' ],
    categories: ['Cloud Infrastructure', 'DevOps'],
    github: 'https://github.com/saickersj123/AWS-Lambda-DevOps',
    live: null,
    featured: true,
    stats: {
      uptime: '99.9%',
      deploymentTime: '-40%',
      security: '95%',
    }
  },
  {
    title: 'The Branches',
    description: 'Founded and led developer club managing multiple projects, CI/CD pipelines, and mentoring 15+ members.',
    image: '/api/placeholder/600/400',
    technologies: ['Git', 'GitHub Actions', 'Docker', 'Linux', 'Mentoring'],
    categories: ['Leadership', 'DevOps', 'Education'],
    github: null,
    live: null,
    featured: false,
    stats: {
      members: '15+',
      projects: '4+',
      award: 'Best Club'
    }
  },
  {
    title: 'HackThisOut',
    description: 'Full-stack cybersecurity training platform developed with automated AWS testbed, vulnerability scanning, and educational content. Awarded "Best Project of the Year".',
    image: '/api/placeholder/600/400',
    technologies: ['AWS', 'Node.js', 'Docker', 'CI/CD', 'Security Tools', 'Terraform', 'VPN'],
    categories: ['Cybersecurity', 'Cloud Infrastructure', 'DevOps', 'Education'],
    github: 'https://github.com/saickersj123/Hack-This-Out',
    live: null,
    featured: true,
    stats: {
      students: '150+',
      modules: '10+',
      award: 'Best Project'
    }
  },
  {
    title: 'BranchesGPT',
    description: 'Web-based AI chatbot using MERN stack and OpenAI API for conversational AI. Features include real-time chat, user authentication, and intelligent responses.',
    image: '/api/placeholder/600/400',
    technologies: ['MongoDB', 'Express.js', 'React', 'OpenAI API'],
    categories: ['Web Development', 'AI/ML', 'Full-Stack'],
    github: 'https://github.com/saickersj123/BranchesGPT',
    live: null,
    featured: true,
    stats: {
      users: '100+',
      uptime: '99.9%',
      responseTime: '<2s'
    }
  },
  {
    title: 'BranchesWEB',
    description: 'Full-stack web application for The Branches developer club. Includes user management, project showcase, and collaborative features.',
    image: '/api/placeholder/600/400',
    technologies: ['MERN Stack', 'Git/GitHub', 'CI/CD'],
    categories: ['Web Development', 'Full-Stack', 'DevOps'],
    github: 'https://github.com/saickersj123/BranchesWEB',
    live: null,
    featured: false,
    stats: {
      members: '15+',
      uptime: '99.9%'
    }
  },
  {
    title: 'BranchesSPK',
    description: 'Speech recognition and processing application with real-time audio analysis and text-to-speech capabilities.',
    image: '/api/placeholder/600/400',
    technologies: ['Fine-Tuned Model', 'Speech Recognition', 'Audio Processing','MERN Stack'],
    categories: ['AI/ML', 'Audio Processing', 'Web Development'],
    github: 'https://github.com/saickersj123/BranchesSPK',
    live: null,
    featured: false,
    stats: {
      accuracy: '95%',
      languages: '3',
      realTime: 'Yes'
    }
  },
  {
    title: 'SIC/XE Assembler',
    description: 'System programming project implementing a complete SIC/XE assembler in C with pass one and pass two functionality.',
    image: '/api/placeholder/600/400',
    technologies: ['C', 'Assembly', 'System Programming', 'Memory Management'],
    categories: ['System Programming', 'Low-Level Development'],
    github: 'https://github.com/saickersj123/sic-assembler',
    live: null,
    featured: true,
    stats: {
      instructions: '50+',
      directives: '10+',
      efficiency: 'High'
    }
  }
] 