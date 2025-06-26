import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { projects } from "./data/projects"
import { certifications } from "./data/certifications"
import { skillCategories } from "./data/skills"
import { experiences } from "./data/experience"
import { education } from "./data/education"
import { jobTitles } from "./data/jobTitles"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Calculate total years of experience with overlapping period merging
export function calculateExperienceYears() {
  const experiencePeriods = [
    { start: '2021-04', end: '2022-10' }, // Military Service
    { start: '2023-11', end: '2025-01' }, // The Branches (ongoing)
    { start: '2024-03', end: '2024-12' }, // Curonsys
    { start: '2024-06', end: '2025-04' }, // Panda Charging
    { start: '2024-03', end: '2024-12' }, // Teaching Assistant
  ]

  // Convert to Date objects and sort by start date
  const sortedExperiences = experiencePeriods
    .map(exp => ({
      start: new Date(exp.start + '-01'),
      end: new Date(exp.end + '-01')
    }))
    .sort((a, b) => a.start.getTime() - b.start.getTime())

  if (sortedExperiences.length === 0) return 0

  // Merge overlapping periods
  const mergedPeriods: Array<{ start: Date; end: Date }> = []
  let currentPeriod = { ...sortedExperiences[0] }

  for (let i = 1; i < sortedExperiences.length; i++) {
    const nextPeriod = sortedExperiences[i]
    
    if (!nextPeriod || !currentPeriod.end) continue
    
    // Check if periods overlap or are adjacent (within 1 month)
    const timeDiff = nextPeriod.start.getTime() - currentPeriod.end.getTime()
    const oneMonth = 30 * 24 * 60 * 60 * 1000
    
    if (timeDiff <= oneMonth) {
      // Merge periods
      currentPeriod.end = new Date(Math.max(currentPeriod.end.getTime(), nextPeriod.end.getTime()))
    } else {
      // Add current period to merged list and start new period
      if (currentPeriod.start && currentPeriod.end) {
        mergedPeriods.push({ start: currentPeriod.start, end: currentPeriod.end })
      }
      currentPeriod = { ...nextPeriod }
    }
  }
  
  // Add the last period
  if (currentPeriod.start && currentPeriod.end) {
    mergedPeriods.push({ start: currentPeriod.start, end: currentPeriod.end })
  }

  // Calculate total years
  let totalYears = 0
  mergedPeriods.forEach(period => {
    const years = (period.end.getTime() - period.start.getTime()) / (365.25 * 24 * 60 * 60 * 1000)
    totalYears += years
  })

  return Math.round(totalYears * 10) / 10 // Round to 1 decimal place
}

// Calculate project statistics
export function calculateProjectStats(projectsData: typeof projects) {
  const totalProjects = projectsData.length
  const featuredProjects = projectsData.filter(project => project.featured).length
  
  // Get unique technologies across all projects using the dedicated function
  const uniqueTechnologies = calculateProjectTechnologies(projectsData)
  
  // Calculate total users/students served
  let totalUsers = 0
  projectsData.forEach(project => {
    if (project.stats) {
      if (project.stats.users) {
        const userCount = parseInt(project.stats.users.replace(/\D/g, ''))
        totalUsers += userCount
      }
      if (project.stats.students) {
        const studentCount = parseInt(project.stats.students.replace(/\D/g, ''))
        totalUsers += studentCount
      }
      if (project.stats.members) {
        const memberCount = parseInt(project.stats.members.replace(/\D/g, ''))
        totalUsers += memberCount
      }
    }
  })
  
  return {
    totalProjects,
    featuredProjects,
    uniqueTechnologies,
    totalUsers: totalUsers > 0 ? `${totalUsers}+` : '100+'
  }
}

// Calculate skill statistics
export function calculateSkillStats(skillCategoriesData: typeof skillCategories) {
  const totalCategories = skillCategoriesData.length
  const totalTechnologies = calculateSkillTechnologies(skillCategoriesData)
  
  // Calculate average proficiency
  const allSkills = skillCategoriesData.flatMap(category => category.skills)
  const totalProficiency = allSkills.reduce((sum, skill) => sum + skill.proficiency, 0)
  const averageProficiency = Math.round(totalProficiency / allSkills.length)
  
  return {
    totalCategories,
    totalTechnologies,
    averageProficiency
  }
}

// Calculate certification statistics
export function calculateCertificationStats(certificationsData: typeof certifications) {
  const totalCertifications = certificationsData.length
  const completedCertifications = certificationsData.filter(cert => cert.year).length
  const inProgressCertifications = certificationsData.filter(cert => cert.status === 'In Progress').length
  
  return {
    totalCertifications,
    completedCertifications,
    inProgressCertifications
  }
}

// Get proficiency color based on percentage
export function getProficiencyColor(proficiency: number) {
  if (proficiency >= 85) return 'bg-green-500'
  if (proficiency >= 75) return 'bg-blue-500'
  if (proficiency >= 65) return 'bg-yellow-500'
  if (proficiency >= 50) return 'bg-red-500'
  return 'bg-gray-500'
}

// Get proficiency text based on percentage
export function getProficiencyText(proficiency: number) {
  if (proficiency >= 85) return 'Expert'
  if (proficiency >= 75) return 'Advanced'
  if (proficiency >= 65) return 'Intermediate'
  if (proficiency >= 50) return 'Basic'
  return 'Beginner'
}

// Calculate total unique technologies across all projects, skills, and experience
export function calculateTotalTechnologies(projectsData: typeof projects, skillCategoriesData: typeof skillCategories, experiencesData: typeof experiences) {
  // Normalize technology names to handle variations
  const normalizeTech = (tech: string) => {
    return tech.toLowerCase()
      .replace(/[^a-z0-9]/g, '') // Remove special characters
      .replace(/\s+/g, '') // Remove spaces
  }

  // Collect technologies from projects
  const projectTechnologies = projectsData.flatMap(project => project.technologies)
  
  // Collect technologies from skills
  const skillTechnologies = skillCategoriesData.flatMap(category => 
    category.skills.map((skill) => skill.name)
  )
  
  // Collect technologies from experience
  const experienceTechnologies = experiencesData.flatMap(experience => experience.technologies)
  
  // Combine all technologies
  const allTechnologies = [...projectTechnologies, ...skillTechnologies, ...experienceTechnologies]
  
  // Create a map to track normalized names and their original names
  const techMap = new Map<string, string>()
  
  allTechnologies.forEach(tech => {
    const normalized = normalizeTech(tech)
    if (!techMap.has(normalized)) {
      techMap.set(normalized, tech)
    }
  })
  
  // Return unique count
  return techMap.size
}

// Calculate unique technologies for projects only
export function calculateProjectTechnologies(projectsData: typeof projects) {
  const allTechnologies = projectsData.flatMap(project => project.technologies)
  const uniqueTechnologies = [...new Set(allTechnologies)]
  return uniqueTechnologies.length
}

// Calculate unique technologies for skills only
export function calculateSkillTechnologies(skillCategoriesData: typeof skillCategories) {
  const allTechnologies = skillCategoriesData.flatMap(category => 
    category.skills.map((skill) => skill.name)
  )
  const uniqueTechnologies = [...new Set(allTechnologies)]
  return uniqueTechnologies.length
}

// Export data for use in components
export { projects, certifications, skillCategories, experiences, education, jobTitles }
