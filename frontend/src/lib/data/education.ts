export interface Education {
  degree: string
  school: string
  location: string
  period: string
  gpa: string
  relevantCourses: string[]
}

export const education: Education = {
  degree: 'Bachelor of Engineering, Information Technology',
  school: 'Sunchon National University',
  location: 'South Korea',
  period: '2021 - 2025',
  gpa: '3.3/4.0',
  relevantCourses: [
    'Data Structures & Algorithms',
    'Computer Networks',
    'Operating Systems',
    'Database Systems',
    'Software Engineering',
    'Cybersecurity Fundamentals',
    'Cloud Computing',
    'System Programming'
  ]
} 