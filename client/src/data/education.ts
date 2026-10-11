export type EducationMilestone = {
  id: string
  degree: string
  institution: string
  location: string
  period: string
  status: string
  badgeText: string
  description: string
  coursework: string[]
  achievements: string[]
  skillsGained: string[]
  icon: string
  accentColor: string
  stats?: { label: string; value: string }[]
}

export const EDUCATION_DATA: EducationMilestone[] = [
  {
    id: 'mca-vit',
    degree: 'Master of Computer Applications (MCA)',
    institution: 'Vellore Institute of Technology (VIT)',
    location: 'Vellore, Tamil Nadu, India',
    period: '2025 — 2027',
    status: 'In Progress',
    badgeText: 'Postgraduate Mastery',
    description:
      'Advanced specialization in software engineering, artificial intelligence, cloud architectures, cybersecurity fundamentals, and enterprise system design.',
    coursework: [
      'Advanced Data Structures & Algorithms',
      'Machine Learning & Deep Learning',
      'Cloud Architecture & Distributed Systems',
      'Cybersecurity & Cryptography Fundamentals',
      'Database Management & Optimization',
      'Mobile & Modern Web Engineering',
    ],
    achievements: [
      'Pursuing postgraduate degree in computer applications at VIT Vellore.',
      'Architecting intelligent software, full-stack web platforms, and mobile apps.',
    ],
    skillsGained: [
      'Software Architecture',
      'AI Systems',
      'Cloud Infrastructure',
      'Enterprise Engineering',
    ],
    icon: 'GraduationCap',
    accentColor: '#3b82f6',
    stats: [
      { label: 'Degree', value: 'Postgraduate (MCA)' },
      { label: 'Institution', value: 'VIT Vellore' },
    ],
  },
  {
    id: 'bca-vit',
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Vellore Institute of Technology (VIT)',
    location: 'Vellore, Tamil Nadu, India',
    period: '2022 — 2025',
    status: 'Graduated',
    badgeText: 'Undergraduate Foundation',
    description:
      'Core foundation in computer science principles, database design, object-oriented programming, web technologies, and software engineering methodologies.',
    coursework: [
      'Object-Oriented Programming (Java / C++)',
      'Database Management Systems & SQL',
      'Data Structures & Algorithms',
      'Web Technologies (HTML, CSS, JavaScript)',
      'Operating Systems & Networking',
      'Software Engineering Principles',
    ],
    achievements: [
      'Graduated with undergraduate degree in computer applications from VIT Vellore.',
      'Developed foundational web applications and software capstone projects.',
    ],
    skillsGained: [
      'OOP Principles',
      'DBMS & Relational Data',
      'Web Stack',
      'Algorithm Logic',
    ],
    icon: 'Award',
    accentColor: '#8b5cf6',
    stats: [
      { label: 'Degree', value: 'Undergraduate (BCA)' },
      { label: 'Institution', value: 'VIT Vellore' },
    ],
  },
]
