export interface Certification {
  name: string
  status?: string
  expectedDate?: string
  year?: string
  icon: string
}

export const certifications: Certification[] = [
  {
    name: 'AZ-104: Microsoft Azure Administrator Associate',
    status: 'In Progress',
    expectedDate: 'July 2025',
    icon: 'Cloud'
  },
  {
    name: 'AZ-900: Microsoft Azure Fundamentals',
    year: '2024',
    icon: 'Cloud'
  },
  {
    name: 'Craftsman Information Processing (Equivalent to CompTIA A+)',
    year: '2022',
    icon: 'Server'
  }
]