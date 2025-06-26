import profileImage from '../../assets/profile.png'

export interface Profile {
  name: string
  description: string
  image: {
    src: string
    alt: string
  }
  social: {
    github: string
    linkedin: string
  }
}

export const profile: Profile = {
  name: 'Flynn Park',
  description: 'Passionate about cloud infrastructure, automation, cybersecurity. Currently seeking opportunities in DevOps/Cloud Engineering, IT Support, System Administration and Cybersecurity roles.',
  image: {
    src: profileImage,
    alt: 'Flynn Park'
  },
  social: {
    github: 'https://github.com/saickersj123',
    linkedin: 'https://www.linkedin.com/in/flynn-park-4007052a3'
  }
} 