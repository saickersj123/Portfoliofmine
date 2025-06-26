export interface Skill {
  name: string
  proficiency: number
  details: string
}

export interface SkillCategory {
  name: string
  icon: string
  skills: Skill[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      { name: 'AWS', proficiency: 68, details: 'EC2, S3, IAM, Lambda, VPC, DynamoDB, CloudWatch, Route 53' },
      { name: 'Azure', proficiency: 63, details: 'Virtual Machines, Storage, Active Directory, Functions, App Service' },
      { name: 'Terraform', proficiency: 50, details: 'Infrastructure as Code, State Management, Modules, Workspaces' },
      { name: 'Docker', proficiency: 55, details: 'Containerization, Docker Compose, Image Management, Registry' },
    ],
  },
  {
    name: 'CI/CD & Automation',
    icon: 'Code',
    skills: [
      { name: 'Jenkins', proficiency: 60, details: 'Pipeline Development, Plugin Management, Automation, Groovy Scripting' },
      { name: 'GitHub Actions', proficiency: 70, details: 'Workflow Automation, CI/CD Pipelines, Deployment, Secrets Management' },
      { name: 'Git', proficiency: 70, details: 'Version Control, Branching Strategies, Collaboration, Workflows' },
      { name: 'Kubernetes', proficiency: 50, details: 'Container Orchestration, Pod Management, Services, ConfigMaps' },
    ],
  },
  {
    name: 'System Administration',
    icon: 'Server',
    skills: [
      { name: 'Linux (Ubuntu/CentOS)', proficiency: 60, details: 'System Administration, Package Management, Services, Performance Tuning' },
      { name: 'Unix', proficiency: 65, details: 'Command Line, Shell Scripting, System Configuration, Troubleshooting' },
      { name: 'Bash Scripting', proficiency: 60, details: 'Automation Scripts, System Administration, Process Management' },
      { name: 'System Monitoring', proficiency: 70, details: 'Performance Monitoring, Log Analysis, Alerting, Capacity Planning' },
    ],
  },
  {
    name: 'Networking',
    icon: 'Network',
    skills: [
      { name: 'TCP/IP', proficiency: 68, details: 'Protocol Understanding, Network Configuration, Troubleshooting, Packet Analysis' },
      { name: 'DNS', proficiency: 65, details: 'Domain Management, Record Configuration, Resolution, Security' },
      { name: 'VPN', proficiency: 65, details: 'Site-to-site VPN, Remote Access, Security Configuration, Troubleshooting' },
      { name: 'DHCP', proficiency: 67, details: 'IP Address Management, Scope Configuration, Leases, Failover' },
    ],
  },
  {
    name: 'Cybersecurity',
    icon: 'Shield',
    skills: [
      { name: 'IAM', proficiency: 65, details: 'Identity Management, Access Control, Policy Configuration, Multi-factor Authentication' },
      { name: 'Vulnerability Scanning', proficiency: 60, details: 'Security Assessment, Penetration Testing, Compliance, Remediation' },
      { name: 'Network Security', proficiency: 60, details: 'Firewall Configuration, Intrusion Detection, Monitoring, Incident Response' },
      { name: 'Security Hardening', proficiency: 70, details: 'System Hardening, Access Control Reviews, Patch Management, Compliance' },
    ],
  },
  {
    name: 'Programming & Scripting',
    icon: 'Terminal',
    skills: [
      { name: 'Python', proficiency: 60, details: 'Scripting, Automation, API Development, Data Processing, Security Tools' },
      { name: 'Bash', proficiency: 60, details: 'Shell Scripting, System Administration, Automation, Process Management' },
      { name: 'C', proficiency: 60, details: 'System Programming, Memory Management, Low-level Development, Performance Optimization' },
      { name: 'PowerShell', proficiency: 55, details: 'Windows Administration, Automation, Active Directory, System Management' },
    ],
  },
  {
    name: 'Web Technologies',
    icon: 'Code',
    skills: [
      { name: 'HTML/CSS', proficiency: 70, details: 'Semantic HTML, Responsive Design, CSS Frameworks, Accessibility' },
      { name: 'JavaScript', proficiency: 70, details: 'Frontend Development, Node.js, API Integration, DOM Manipulation' },
      { name: 'React', proficiency: 50, details: 'Frontend Development, Component Architecture, State Management, Hooks' },
      { name: 'Node.js', proficiency: 68, details: 'Backend Development, Express.js, API Development, Package Management' },
    ],
  },
  {
    name: 'Databases & Storage',
    icon: 'Database',
    skills: [
      { name: 'MongoDB', proficiency: 65, details: 'NoSQL Database, Data Modeling, Aggregation, Performance Optimization' },
      { name: 'MySQL/PostgreSQL', proficiency: 55, details: 'Relational Databases, Query Optimization, Backup/Recovery, Security' },
      { name: 'AWS S3', proficiency: 60, details: 'Object Storage, Lifecycle Management, Security, Performance Optimization' },
      { name: 'DynamoDB', proficiency: 65, details: 'NoSQL Database, Data Modeling, Performance, Auto-scaling' },
    ],
  },
  {
    name: 'Monitoring & Tools',
    icon: 'Cpu',
    skills: [
      { name: 'CloudWatch', proficiency: 50, details: 'Monitoring, Logging, Metrics, Alarms, Dashboards, Insights' },
      { name: 'AWS SDK', proficiency: 65, details: 'SDK Integration, API Development, Automation, Cloud Management' },
    ],
  },
] 