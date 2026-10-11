export type AboutMetric = {
  id: string
  label: string
  value: string
  description: string
  icon: string
}

export type TechnicalPillar = {
  id: string
  title: string
  subtitle: string
  description: string
  tags: string[]
  icon: string
  color: string
}

export type CoreComponentBlock = {
  id: string
  title: string
  badge: string
  description: string
  icon: string
  accentColor: string
}

export type ArsenalCategory = {
  id: string
  title: string
  icon: string
  color: string
  skills: string[]
}

export const ARSENAL_CATEGORIES: ArsenalCategory[] = [
  // Row 1
  {
    id: 'programming-languages',
    title: 'Programming Languages',
    icon: 'Code2',
    color: '#3b82f6',
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'PHP', 'Dart', 'SQL'],
  },
  {
    id: 'frontend-development',
    title: 'Frontend Development',
    icon: 'Palette',
    color: '#06b6d4',
    skills: ['HTML', 'CSS', 'React', 'Angular', 'Tailwind CSS'],
  },
  {
    id: 'backend-apis',
    title: 'Backend & APIs',
    icon: 'Server',
    color: '#10b981',
    skills: ['Node.js', 'Express.js', 'Flask', 'FastAPI', 'REST APIs'],
  },
  // Row 2
  {
    id: 'mobile-development',
    title: 'Mobile Development',
    icon: 'Smartphone',
    color: '#8b5cf6',
    skills: ['Flutter', 'Dart', 'Android Application Development'],
  },
  {
    id: 'databases-platforms',
    title: 'Databases & Platforms',
    icon: 'Database',
    color: '#f59e0b',
    skills: ['MySQL', 'MongoDB', 'PostgreSQL', 'Supabase'],
  },
  {
    id: 'ai-machine-learning',
    title: 'AI & Machine Learning',
    icon: 'BrainCircuit',
    color: '#ec4899',
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'Reinforcement Learning',
      'Regression',
      'Clustering',
      'Random Forest',
      'LLMs',
      'RAG',
      'Multi-Agent AI',
    ],
  },
  // Row 3
  {
    id: 'ai-frameworks-data',
    title: 'AI Frameworks & Data Libraries',
    icon: 'Cpu',
    color: '#a855f7',
    skills: ['TensorFlow', 'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy'],
  },
  {
    id: 'cloud-devops',
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    color: '#38bdf8',
    skills: ['AWS', 'Cloud Computing', 'Docker', 'Git', 'GitHub', 'CI/CD Fundamentals'],
  },
  {
    id: 'tools-practices',
    title: 'Tools & Engineering Practices',
    icon: 'ShieldCheck',
    color: '#22d3ee',
    skills: [
      'VS Code',
      'Postman',
      'Agile & Scrum',
      'System Design',
      'REST API Security Fundamentals',
    ],
  },
]

export const ABOUT_DATA = {
  status: {
    state: 'Available for Opportunities',
    availability: 'Open for Software Engineering & AI Roles',
    location: 'Ranipet / Vellore, Tamil Nadu, India',
    education: 'MCA @ Vellore Institute of Technology',
  },
  bio: {
    heading: 'Building Intelligent Systems & Scalable Software',
    subtitle: 'Software Engineer • AI/ML Developer • Full-Stack Architect',
    description:
      'I build software applications and intelligent systems that combine full-stack development, artificial intelligence, and cloud technologies. My interests span modern web and mobile applications, data-driven solutions, and scalable software architecture.',
    projectSummary:
      'My project work includes ElectraNav, ResearchPilotAI, TwinSphere, and Nexora. I focus on solving practical problems through modular design, appropriate algorithms, reliable APIs, and thoughtful user experiences.',
    educationSummary: [
      {
        degree: 'Master of Computer Applications (MCA)',
        institution: 'VIT Vellore',
        period: '2025–2027',
        status: 'Currently Pursuing',
        icon: 'GraduationCap',
      },
      {
        degree: 'Bachelor of Computer Applications (BCA)',
        institution: 'VIT Vellore',
        period: '2022–2025',
        status: 'Graduated',
        icon: 'Award',
      },
    ],
  },
  // 5 Engineering Technical Pillars
  pillars: [
    {
      id: 'software-engineering',
      title: 'Software Engineering',
      subtitle: 'Core Foundations & Problem Solving',
      description:
        'Data structures, algorithms, object-oriented programming, maintainable code, and systematic algorithmic problem-solving.',
      tags: ['DSA', 'OOP', 'Code Quality', 'Algorithms'],
      icon: 'Code2',
      color: '#3b82f6',
    },
    {
      id: 'fullstack-dev',
      title: 'Full-Stack Development',
      subtitle: 'End-to-End Application Engineering',
      description:
        'Responsive interfaces, REST APIs, authentication lifecycles, database integration, and end-to-end application development.',
      tags: ['React', 'Node.js', 'REST APIs', 'PostgreSQL'],
      icon: 'Layers',
      color: '#06b6d4',
    },
    {
      id: 'ai-intelligent-systems',
      title: 'AI & Intelligent Systems',
      subtitle: 'Applied Machine Learning & Agents',
      description:
        'Machine learning, predictive analytics, LLM integrations, retrieval-augmented generation, and multi-agent workflows where applicable.',
      tags: ['ML Models', 'RAG', 'Agentic AI', 'Predictive Analytics'],
      icon: 'Cpu',
      color: '#8b5cf6',
    },
    {
      id: 'cloud-devops',
      title: 'Cloud & DevOps',
      subtitle: 'Scalable Deployment & Reliability',
      description:
        'Cloud fundamentals, deployment workflows, containerization with Docker, CI/CD concepts, and application reliability.',
      tags: ['Docker', 'AWS', 'Containerization', 'CI/CD'],
      icon: 'Cloud',
      color: '#10b981',
    },
    {
      id: 'system-design',
      title: 'System Design & Architecture',
      subtitle: 'High-Level Modular Systems',
      description:
        'API design, database modeling, modular architecture, scalability considerations, caching, reliability, and architectural trade-offs.',
      tags: ['System Design', 'Data Modeling', 'Modularity', 'Scalability'],
      icon: 'Network',
      color: '#f59e0b',
    },
  ] as TechnicalPillar[],
  // 6 Core Components Horizontal Information Strip
  coreComponents: [
    {
      id: 'executive-summary',
      title: 'Executive Summary',
      badge: 'Overview',
      description:
        'Software engineering and intelligent systems, combining algorithmic problem-solving, full-stack development, backend architecture, data-driven applications, AI/ML, and cloud technologies to build practical, maintainable solutions.',
      icon: 'Target',
      accentColor: '#3b82f6',
    },
    {
      id: 'current-focus',
      title: 'Current Focus',
      badge: 'Active Work',
      description:
        'Building research-oriented software, strengthening system design, and developing intelligent, cloud-integrated applications.',
      icon: 'Zap',
      accentColor: '#06b6d4',
    },
    {
      id: 'what-i-build',
      title: 'What I Build',
      badge: 'Deliverables',
      description:
        'Full-stack platforms, data-driven applications, AI-enabled tools, APIs, and modular software systems.',
      icon: 'Layers',
      accentColor: '#8b5cf6',
    },
    {
      id: 'areas-of-interest',
      title: 'Areas of Interest',
      badge: 'Explorations',
      description:
        'Distributed systems, system architecture, applied machine learning, cloud computing, automation, and intelligent decision support.',
      icon: 'Compass',
      accentColor: '#10b981',
    },
    {
      id: 'core-competencies',
      title: 'Core Competencies',
      badge: 'Capabilities',
      description:
        'Algorithms, data structures, object-oriented programming, database design, API development, debugging, and software architecture.',
      icon: 'ShieldCheck',
      accentColor: '#f59e0b',
    },
    {
      id: 'quick-bio',
      title: 'Quick Bio',
      badge: 'Academic',
      description:
        'MCA student at VIT, BCA graduate, and software developer focused on full-stack engineering, AI/ML, cloud technologies, and research-oriented projects.',
      icon: 'GraduationCap',
      accentColor: '#ec4899',
    },
  ] as CoreComponentBlock[],
  arsenalCategories: ARSENAL_CATEGORIES,
} as const
