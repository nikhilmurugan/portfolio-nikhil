export type JourneyWorkstream = {
  name: string
  subtitle?: string
  description: string
  tag: string
}

export type JourneyMilestone = {
  id: string
  phase: string
  stepNumber: string
  title: string
  subtitle: string
  period: string
  status: 'Completed' | 'In Progress' | 'Upcoming'
  description: string
  milestone: string
  keyAreas: string[]
  workstreams?: JourneyWorkstream[]
  techStack: string[]
  icon: string
  accentColor: string
  badge: string
}

export const JOURNEY_DATA: JourneyMilestone[] = [
  {
    id: 'phase-01-foundations',
    phase: 'Phase 01',
    stepNumber: '01',
    title: 'Software Foundations & Core Technologies',
    subtitle: 'Programming, databases, web technologies & computational foundations',
    period: '2022–2024',
    status: 'Completed',
    description:
      'Built my software development foundation through programming, database management, web technologies, and core computer science concepts.',
    milestone: 'Programming and software development foundations.',
    keyAreas: [
      'Java',
      'Python',
      'C',
      'C++',
      'Object-Oriented Programming',
      'Data Structures & Algorithms',
      'SQL and Database Management Systems',
      'HTML, CSS, and JavaScript',
      'Software Engineering Fundamentals',
    ],
    techStack: [
      'Java',
      'Python',
      'C',
      'C++',
      'OOP',
      'DSA',
      'SQL & DBMS',
      'HTML, CSS, JS',
      'Software Engineering',
    ],
    icon: 'BookOpen',
    accentColor: '#10b981',
    badge: 'Foundations',
  },
  {
    id: 'phase-02-fullstack-ai',
    phase: 'Phase 02',
    stepNumber: '02',
    title: 'Advanced Full-Stack Development, AI & Cloud',
    subtitle: 'Full-stack application development, applied AI, cloud & cybersecurity',
    period: '2025–2026',
    status: 'Completed',
    description:
      'Expanded my technical capabilities into modern full-stack application development, artificial intelligence, cloud technologies, and cybersecurity fundamentals.',
    milestone: 'Full-stack development and intelligent application foundations.',
    keyAreas: [
      'React',
      'Node.js',
      'Angular',
      'MERN stack',
      'REST API development',
      'PHP',
      'Flutter and mobile application development',
      'Machine Learning',
      'Deep Learning',
      'Neural Networks',
      'TensorFlow',
      'PyTorch',
      'Scikit-learn',
      'Large Language Models',
      'Retrieval-Augmented Generation',
      'Cloud Computing and AWS fundamentals',
      'Cybersecurity fundamentals',
    ],
    techStack: [
      'React',
      'Node.js',
      'Angular',
      'MERN Stack',
      'REST APIs',
      'PHP',
      'Flutter',
      'Machine Learning',
      'Deep Learning',
      'PyTorch & TensorFlow',
      'Scikit-learn',
      'LLMs & RAG',
      'Cloud & AWS',
      'Cybersecurity',
    ],
    icon: 'Code',
    accentColor: '#10b981',
    badge: 'Full-Stack & AI',
  },
  {
    id: 'phase-03-intelligent-systems',
    phase: 'Phase 03',
    stepNumber: '03',
    title: 'Intelligent Systems & Research Projects',
    subtitle: 'Flagship software platforms, intelligent agents & research engineering',
    period: '2026–2027',
    status: 'In Progress',
    description:
      'Applying software engineering, artificial intelligence, mobile development, cloud concepts, and system architecture to research-oriented and practical software projects.',
    milestone: 'Developing and refining intelligent software systems and research-oriented projects.',
    keyAreas: [
      'ElectraNav EV Platform',
      'ResearchPilotAI Framework',
      'TwinSphere Intelligence',
      'Nexora SaaS Workflows',
      'MeetingMind-AI Project',
      'Secure Cloud Password Vault',
      'DriveFlow Workstream',
      'System Architecture & Evaluation',
    ],
    workstreams: [
      {
        name: 'ElectraNav',
        subtitle: 'Intelligent EV Trip Planning & Navigation System',
        description:
          'AI-assisted energy prediction, route planning, charging-station discovery, battery analysis, and hybrid web/mobile application development.',
        tag: 'Project 01',
      },
      {
        name: 'ResearchPilotAI',
        subtitle: 'Multi-Agent Research Intelligence Framework',
        description:
          'LLM-based research workflows, agent orchestration, information retrieval, and research synthesis.',
        tag: 'Project 02',
      },
      {
        name: 'TwinSphere',
        subtitle: 'Unified Cyber-Physical Intelligence Platform',
        description:
          'Digital Twin technology, Ambient Intelligence, AI/ML prediction, statistical analytics, predictive decision support, and resource optimization.',
        tag: 'Project 03',
      },
      {
        name: 'Nexora',
        subtitle: 'Multi-Tenant SaaS Workflow Platform',
        description:
          'Enterprise application development, organizational workflows, database integration, and multi-tenant architecture.',
        tag: 'Project 04',
      },
      {
        name: 'MeetingMind-AI',
        subtitle: 'RAG & Agentic AI',
        description:
          'An AI-assisted meeting intelligence project focused on retrieving relevant information from meeting content and using agentic workflows to support meeting-related tasks.',
        tag: 'RAG & Agentic AI',
      },
      {
        name: 'Secure Cloud Password Vault',
        subtitle: 'Cloud Security Project',
        description:
          'Cloud-oriented credential and cryptographic storage platform incorporating zero-knowledge encryption and secure authentication.',
        tag: 'Security Project',
      },
      {
        name: 'DriveFlow',
        subtitle: 'Mobility & Telematics Workstream',
        description:
          'Driver workflow platform and smart mobility workstream exploring telematics telemetry, operational trip records, and route safety metrics.',
        tag: 'Development Workstream',
      },
      {
        name: 'System Architecture & Research Evaluation',
        subtitle: 'Supporting Engineering Workstream',
        description:
          'Architecture design, system integration, experimentation, technical documentation, and research evaluation.',
        tag: 'Supporting Workstream',
      },
    ],
    techStack: [
      'ElectraNav',
      'ResearchPilotAI',
      'TwinSphere',
      'Nexora',
      'MeetingMind-AI',
      'Secure Password Vault',
      'DriveFlow',
      'System Architecture',
    ],
    icon: 'BrainCircuit',
    accentColor: '#06b6d4',
    badge: 'Research & Projects',
  },
  {
    id: 'phase-04-career-launch',
    phase: 'Phase 04',
    stepNumber: '04',
    title: 'Career Launch & Professional Growth',
    subtitle: 'Transition to professional software engineering & industry impact',
    period: 'Upcoming / 2026 onward',
    status: 'Upcoming',
    description:
      'Preparing to apply my technical skills in professional software development environments and continue growing through practical engineering experience.',
    milestone: 'Transitioning from academic and project-based development into professional engineering opportunities.',
    keyAreas: [
      'Software development internships',
      'Entry-level software engineering opportunities',
      'Collaborative engineering experience',
      'Real-world application development',
      'Interview preparation and problem solving',
      'Continued learning in AI, full-stack development, cloud, and cybersecurity',
    ],
    techStack: [
      'Software Internships',
      'Entry-Level Engineering',
      'Collaborative Engineering',
      'Production Development',
      'Technical Interviews',
      'Ongoing AI & Cloud Growth',
    ],
    icon: 'Sparkles',
    accentColor: '#a855f7',
    badge: 'Career Launch',
  },
]
