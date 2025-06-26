export interface Experience {
  title: string
  company: string
  location: string
  period: string
  duration: string
  type: string
  icon: string
  description: string
  technologies: string[]
  achievements: string[]
  category: string
}

export const experiences: Experience[] = [
    {
      title: 'DevOps/Cloud Engineer',
      company: 'Panda Charging',
      location: 'Canada',
      period: 'June 2024 - April 2025',
      duration: '10 months',
      type: 'Contract',
      icon: 'Cloud',
      description: 'Automated cloud infrastructure deployment and CI/CD pipelines for Shared Power Bank Rental Service.',
      achievements: [
        'Designed and implemented scalable, automated infrastructure solutions using Terraform, effectively accommodating client requirements and enabling continuous enhancements',
        'Architected secure, reliable cloud environments on AWS, leveraging EC2, Lambda, API Gateway, VPC, and DynamoDB, prioritizing performance optimization and compliance',
        'Built and maintained robust CI/CD pipelines utilizing Jenkins, Git, Terraform, and Docker, automating software delivery, reducing deployment time by 40%, and enhancing infrastructure reliability',
        'Integrated comprehensive security practices including IAM policies, automated vulnerability scanning, and proactive system monitoring',
        'Collaborated closely with stakeholders to analyze technical requirements, refine infrastructure strategies, and align solutions with industry best practices'
      ],
      technologies: ['AWS', 'Terraform', 'Jenkins', 'Docker', 'CI/CD', 'IAM', 'CloudWatch', 'Lambda'],
      category: 'Cloud & DevOps'
    },
    {
      title: 'Project Lead & Cloud Engineer',
      company: 'Curonsys',
      location: 'South Korea',
      period: 'March 2024 - December 2024',
      duration: '9 months',
      type: 'Project-based',
      icon: 'Shield',
      description: 'Led development of web-based cybersecurity training platform with AWS infrastructure.',
      achievements: [
        'Led a team to develop a web-based hacking lab for cybersecurity education and practice',
        'Designed and implemented platform architecture using AWS (EC2, S3, IAM) for cloud deployment',
        'Set up a VPN network and virtual environment using AWS, ensuring secure remote access and optimal resource allocation for cloud infrastructure scalability',
        'Established a CI/CD pipeline with GitHub Actions and AWS EC2, ensuring robust and scalable deployment',
        'Awarded "Best Project of the Year" for outstanding academic performance and innovative design'
      ],
      technologies: ['AWS', 'EC2', 'S3', 'IAM', 'VPN', 'GitHub Actions', 'Security'],
      category: 'Cybersecurity & Cloud'
    },
    {
      title: 'Founder & Lead Developer',
      company: 'The Branches, Developer Club of Sunchon National University',
      location: 'South Korea',
      period: 'November 2023 - January 2025',
      duration: '1 year 2 months',
      type: 'Leadership',
      icon: 'Users',
      description: 'Founded and led developer club managing multiple projects and mentoring 15+ members.',
      achievements: [
        'Founded and led developer club "The Branches", organizing and executing projects such as BranchesWEB, BranchesGPT and BranchesSPK',
        'Developed a web-based AI chatbot using the MERN stack and integrated OpenAI API for conversational AI',
        'Established CI/CD pipelines using GitHub Actions, automating build, testing, and deployment processes',
        'Managed version control with Git and GitHub, ensuring smooth collaboration and code quality',
        'Awarded "Best Software Club of the Year" for excellence in software development activities',
        'Fostered teamwork, communication, and project management skills among club members'
      ],
      technologies: ['MERN Stack', 'OpenAI API', 'GitHub Actions', 'Git', 'Docker', 'Linux'],
      category: 'Leadership & Development'
    },
    {
      title: 'Teaching Assistant',
      company: 'Department of Information Technology, Sunchon National University',
      location: 'South Korea',
      period: 'March 2024 - December 2024',
      duration: '9 months',
      type: 'Part-time',
      icon: 'Code',
      description: 'Assisted in delivering lectures and conducting lab sessions for C Programming course.',
      achievements: [
        'Assisted in delivering lectures and conducting lab sessions for the "C Programming" course',
        'Provided one-on-one support to students, clarifying concepts and guiding them through programming exercises',
        'Graded assignments and exams, ensuring accurate and timely feedback',
        'Developed additional learning materials and practice problems to enhance student understanding'
      ],
      technologies: ['C Programming', 'Teaching', 'Student Support', 'Curriculum Development'],
      category: 'Education'
    },
    {
      title: 'IT System Support (Sergeant)',
      company: 'Army of the Republic of Korea',
      location: 'South Korea',
      period: 'April 2021 - October 2022',
      duration: '1 year 6 months',
      type: 'Military Service',
      icon: 'Server',
      description: 'Managed high-security IT systems operations and provided technical support.',
      achievements: [
        'Managed high-security IT systems operations, including network administration & security',
        'Provided technical support & troubleshooting for hardware and software issues',
        'Enhanced system reliability, reducing downtime and improving operational performance',
        'Led a small team of IT personnel, ensuring smooth operations under high-pressure environments',
        'Administered classified Linux-based servers and secured networks, cutting unscheduled downtime by 25%',
        'Delivered Tier-1/2 support for hardware and software, resolving 150+ tickets monthly within SLA',
        'Hardened systems via access-control reviews and patch management, improving compliance score to 97%',
        'Directed a 4-person IT team, scheduling preventive maintenance and disaster-recovery drills'
      ],
      technologies: ['Linux', 'Network Administration', 'Security', 'Troubleshooting', 'Team Leadership'],
      category: 'System Administration'
    }
  ]