export type TechChoice = {
  name: string
  category: 'Frontend' | 'Backend' | 'Database' | 'AI' | 'Cloud' | 'Security' | 'DevOps' | 'Mobile'
  why: string
}

export type ArchitectureStep = {
  id: string
  label: string
  sublabel: string
  icon: string
  color: string
  details: string
}

export type ProjectMetric = {
  label: string
  value: string
  hint: string
}

export type ProjectFeature = {
  title: string
  description: string
  icon?: string
}

export type FlagshipProject = {
  id: string
  title: string
  tagline: string
  category: string
  status: string
  filterCategories: ('All' | 'AI' | 'Full Stack' | 'Enterprise' | 'Smart Systems')[]
  featured: boolean
  accentColor: string
  gradient: string
  summary: string
  problemHighlight: string
  solutionHighlight: string
  pipeline?: string
  capabilities: string[]
  stack: TechChoice[]
  links: {
    github?: string
    caseStudy?: string
    demo?: string
    paper?: string
  }
  architecture: {
    title: string
    description: string
    steps: ArchitectureStep[]
  }
  story: {
    vision: string
    problem: string
    solution: string
    challenge: string
    journey: string
    learnings: string[]
    futureEnhancements: string[]
  }
  features: ProjectFeature[]
  aiMethods?: string[]
  uiMockup: {
    type: 'electranav' | 'researchpilot' | 'twinsphere' | 'nexora'
    primaryStat: string
    secondaryStat: string
    activeTabLabel: string
    widgetLabels: string[]
  }
}

export const PROJECTS_DATA: FlagshipProject[] = [
  {
    id: 'electranav',
    title: 'ElectraNav — Intelligent EV Trip Planning & Navigation System',
    tagline: 'Predictive EV Mobility, Intelligent Station Discovery & Energy Optimization',
    category: 'AI / Machine Learning / Smart Systems / Mobile / Web',
    status: 'Featured Case Study',
    filterCategories: ['All', 'AI', 'Smart Systems'],
    featured: true,
    accentColor: '#22d3ee', // Cyan
    gradient: 'from-cyan-600/30 via-teal-500/20 to-blue-600/30',
    summary:
      'ElectraNav is an intelligent EV mobility application built with Flutter and a Python Flask backend. It supports route planning, charging-station discovery, battery analysis, energy prediction, trip analytics, and energy-aware travel decisions.',
    problemHighlight:
      'Standard EV navigators overlook elevation gradients, battery degradation curves, and real-time charging queue congestion.',
    solutionHighlight:
      'Scikit-learn consumption regression models coupled with Digital Twin battery simulations and dynamic charging station discovery.',
    links: {
      github: 'https://github.com/nikhilmurugan',
      caseStudy: '#case-study-electranav',
    },
    capabilities: [
      'Intelligent EV trip planning and route comparison',
      'Real-time charging-station discovery and availability analysis',
      'Energy consumption prediction and battery state estimation',
      'Battery-state and remaining driving range evaluation',
      'Charging feasibility evaluation across elevation profiles',
      'Trip analytics and comparative journey cost breakdown',
      'Digital Twin-based battery simulation model',
      'Hybrid web and mobile cross-platform application experience',
    ],
    stack: [
      {
        name: 'Flutter / Dart',
        category: 'Mobile',
        why: 'Cross-platform native mobile application client delivering smooth 60fps trip planning and telemetry UI.',
      },
      {
        name: 'Python',
        category: 'AI',
        why: 'Powers predictive consumption curves and battery modeling algorithms.',
      },
      {
        name: 'Flask',
        category: 'Backend',
        why: 'Lightweight microservice REST API serving vehicle telemetry and route computation.',
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        why: 'Standardized endpoint contracts connecting mobile/web clients with prediction services.',
      },
      {
        name: 'Pandas',
        category: 'AI',
        why: 'Ingests and cleans historical trip and telemetry datasets for consumption analysis.',
      },
      {
        name: 'Scikit-learn',
        category: 'AI',
        why: 'Trained regression models estimating energy requirements based on elevation, speed, and ambient weather.',
      },
      {
        name: 'Machine Learning',
        category: 'AI',
        why: 'Provides remaining range calculations and battery state-of-charge predictions.',
      },
      {
        name: 'Leaflet.js',
        category: 'Frontend',
        why: 'Interactive geospatial map layer rendering planned routes and charging stations.',
      },
    ],
    architecture: {
      title: 'ElectraNav Mobility Pipeline',
      description: 'Vehicle telemetry to charging station discovery and predictive routing loop',
      steps: [
        {
          id: 'step-1',
          label: 'Trip Planning Request',
          sublabel: 'User Destination & SoC',
          icon: 'Navigation',
          color: '#22d3ee',
          details: 'User inputs starting point, destination, and current vehicle battery state-of-charge.',
        },
        {
          id: 'step-2',
          label: 'Elevation & Route Engine',
          sublabel: 'Topographical Analysis',
          icon: 'MapPin',
          color: '#3b82f6',
          details: 'Computes road topography, gradients, and elevation gains impacting vehicle drain.',
        },
        {
          id: 'step-3',
          label: 'ML Energy Prediction',
          sublabel: 'Scikit-Learn Model',
          icon: 'BatteryCharging',
          color: '#10b981',
          details: 'Predicts energy consumption per segment factoring speed profiles and regenerative braking.',
        },
        {
          id: 'step-4',
          label: 'Charging Station Feasibility',
          sublabel: 'Station Discovery',
          icon: 'Zap',
          color: '#8b5cf6',
          details: 'Identifies optimal charging stops along route before remaining battery drops below safe reserve.',
        },
        {
          id: 'step-5',
          label: 'Interactive HUD & Mobile View',
          sublabel: 'Flutter & Leaflet UI',
          icon: 'Monitor',
          color: '#ec4899',
          details: 'Displays comparative trip analytics, arrival SoC estimates, and navigation waypoints.',
        },
      ],
    },
    story: {
      vision:
        'To eliminate electric vehicle range anxiety through predictive AI, intelligent route planning, and digital twin battery simulation.',
      problem:
        'Standard navigation systems ignore vehicle battery physics, elevation gains, temperature fluctuations, and charging station queue realities.',
      solution:
        'ElectraNav combines predictive ML models with route elevation data, recommending optimal charging stops and energy-aware travel decisions.',
      challenge:
        'Accurately modeling battery drain across varying elevations and payloads in real time.',
      journey:
        'Designed as an end-to-end mobility intelligence platform using Flutter for mobile cross-platform access and Flask for backend ML inference.',
      learnings: [
        'Implemented regression modeling for EV battery consumption against multi-factor telemetry.',
        'Structured modular REST APIs connecting mobile Dart clients with Python data services.',
        'Created custom dark HUD cockpit visualizations for energy efficiency telemetry.',
      ],
      futureEnhancements: [
        'Live IoT OBD-II telemetry integration directly from vehicle ports.',
        'Dynamic energy grid tariff price optimization.',
        'Real-time crowdsourced charging queue wait estimation.',
      ],
    },
    features: [
      {
        title: 'Intelligent Trip Planning',
        description: 'Predictive route optimization comparing standard routes against energy-optimized paths.',
      },
      {
        title: 'Charging Station Discovery',
        description: 'Locates compatible charging hubs with feasibility evaluations along travel paths.',
      },
      {
        title: 'Battery Intelligence & Range Analysis',
        description: 'Simulates battery state-of-charge (SoC) decay and remaining driving range.',
      },
      {
        title: 'Digital Twin Battery Simulation',
        description: 'Simulates battery pack thermal and drain characteristics over simulated itineraries.',
      },
    ],
    aiMethods: [
      'Scikit-learn regression models for dynamic EV energy consumption prediction',
      'Digital Twin battery state-of-charge (SoC) decay simulation',
      'Topographical elevation and velocity profile weighting algorithms',
      'Dynamic charging station availability and detour feasibility analysis',
    ],
    uiMockup: {
      type: 'electranav',
      primaryStat: '342 km Est. Range',
      secondaryStat: '24.8 kWh Predicted',
      activeTabLabel: 'ElectraNav Trip Intelligence & Battery Monitor',
      widgetLabels: ['Battery State: 78%', 'Optimal Charger: Hub #04', 'Regen Energy: +3.2 kWh', 'Terrain Elevation Profile'],
    },
  },
  {
    id: 'researchpilot-ai',
    title: 'ResearchPilotAI — Multi-Agent Research Intelligence Framework',
    tagline: 'Autonomous Research Intelligence, RAG Retrieval & Knowledge Synthesis',
    category: 'AI / Research / Full Stack',
    status: 'AI Research Framework',
    filterCategories: ['All', 'AI'],
    featured: false,
    accentColor: '#8b5cf6', // Violet
    gradient: 'from-violet-600/30 via-purple-500/20 to-pink-600/30',
    summary:
      'ResearchPilotAI is a research-oriented intelligence framework designed around Large Language Models, Retrieval-Augmented Generation, and Agentic AI. It supports multi-agent task orchestration, technical document analysis, knowledge discovery, and structured research synthesis.',
    problemHighlight:
      'Manual analysis of voluminous scientific literature is time-intensive, prone to oversight, and vulnerable to hallucinated citations.',
    solutionHighlight:
      'Coordinated multi-agent workflow (Decomposer, RAG Retriever, Critic, Synthesizer) grounding analysis strictly in verified technical context.',
    links: {
      github: 'https://github.com/nikhilmurugan',
      caseStudy: '#case-study-researchpilot',
    },
    capabilities: [
      'Multi-agent reasoning and coordinated task orchestration',
      'LLM-based structured research workflows',
      'Retrieval-Augmented Generation (RAG) over technical literature',
      'Technical document analysis and semantic extraction',
      'Knowledge discovery across complex subject domains',
      'Automated research synthesis and comparative literature reviews',
      'Structured research outputs formatted for scientific documentation',
    ],
    stack: [
      {
        name: 'Python',
        category: 'AI',
        why: 'Core language orchestrating multi-agent execution loops, asynchronous tasks, and text pipelines.',
      },
      {
        name: 'LLMs',
        category: 'AI',
        why: 'Powers semantic analysis, hypothesis formulation, document summarization, and query reasoning.',
      },
      {
        name: 'RAG',
        category: 'AI',
        why: 'Retrieval-Augmented Generation grounding model outputs in indexed technical documents.',
      },
      {
        name: 'Agentic AI',
        category: 'AI',
        why: 'Coordinated agent roles (Searcher, Analyst, Critic, Synthesizer) executing complex workflows.',
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        why: 'Provides clean decoupled endpoints for task submission and streaming research telemetry.',
      },
      {
        name: 'React',
        category: 'Frontend',
        why: 'Interactive research workspace interface rendering agent collaboration streams and structured output.',
      },
    ],
    architecture: {
      title: 'Multi-Agent Research Pipeline',
      description: 'Coordinated execution loop between specialized agent roles',
      steps: [
        {
          id: 'step-1',
          label: 'User Research Query',
          sublabel: 'Topic & Constraints',
          icon: 'BookOpen',
          color: '#3b82f6',
          details: 'User inputs research problem, domain parameters, and desired output requirements.',
        },
        {
          id: 'step-2',
          label: 'Decomposition Agent',
          sublabel: 'Query Sub-tasking',
          icon: 'Brain',
          color: '#8b5cf6',
          details: 'Breaks complex technical questions into focused search queries and sub-hypotheses.',
        },
        {
          id: 'step-3',
          label: 'RAG Retrieval Engine',
          sublabel: 'Document Search',
          icon: 'Search',
          color: '#22d3ee',
          details: 'Performs semantic vector search across indexed research papers and technical documents.',
        },
        {
          id: 'step-4',
          label: 'Critic & Reviewer Agent',
          sublabel: 'Verification Loop',
          icon: 'ShieldCheck',
          color: '#ec4899',
          details: 'Cross-verifies claims against retrieved document text to ensure accuracy and coherence.',
        },
        {
          id: 'step-5',
          label: 'Synthesis Agent',
          sublabel: 'Structured Document Output',
          icon: 'FileText',
          color: '#10b981',
          details: 'Compiles insights into organized, contextual sections with clear citations.',
        },
      ],
    },
    story: {
      vision:
        'To accelerate scientific literature discovery by transforming complex technical information into structured, contextual, and verified research insights.',
      problem:
        'Researchers spend excessive time manually filtering hundreds of papers, cross-referencing findings, and synthesizing dense literature.',
      solution:
        'ResearchPilotAI coordinates specialized AI agents working together to parse documents, extract relevant findings, and draft structured research syntheses.',
      challenge:
        'Ensuring factual grounding and preventing model hallucination across complex technical subjects.',
      journey:
        'Developed as an advanced exploration of agentic AI frameworks, transitioning from single-prompt interactions to collaborative multi-agent execution.',
      learnings: [
        'Engineered iterative validation loops where critic agents review claims against source context.',
        'Designed semantic chunking strategies for technical and scientific text formats.',
        'Built streaming telemetry displays showing real-time agent reasoning steps.',
      ],
      futureEnhancements: [
        'Local open-source LLM inference for offline private research repositories.',
        'Automated LaTeX document generation and diagram compilation.',
        'Interactive citation graph explorer visualization.',
      ],
    },
    features: [
      {
        title: 'Multi-Agent Task Orchestration',
        description: 'Specialized agents collaborating in parallel on discovery, analysis, critique, and synthesis.',
      },
      {
        title: 'Retrieval-Augmented Generation',
        description: 'Context-grounded query answering anchored to indexed technical documentation.',
      },
      {
        title: 'Technical Document Analysis',
        description: 'Extracts core methodologies, empirical results, and theoretical claims from dense text.',
      },
      {
        title: 'Structured Research Synthesis',
        description: 'Produces organized research summaries formatted for academic and engineering workflows.',
      },
    ],
    aiMethods: [
      'Multi-Agent LLM Orchestration with specialized Decomposer, Retriever, Critic, and Synthesizer roles',
      'Retrieval-Augmented Generation (RAG) anchored to indexed scientific literature',
      'Semantic document chunking, dense vector embeddings, and similarity matching',
      'Iterative factual grounding and anti-hallucination verification loops',
    ],
    uiMockup: {
      type: 'researchpilot',
      primaryStat: 'Multi-Agent Active',
      secondaryStat: 'Grounded Context',
      activeTabLabel: 'ResearchPilotAI Multi-Agent Workspace',
      widgetLabels: ['Query Decomposer: Active', 'RAG Document Retrieval', 'Critic Agent Review', 'Synthesized Research Output'],
    },
  },
  {
    id: 'twinsphere',
    title: 'TwinSphere — Unified Cyber-Physical Intelligence Platform',
    tagline: 'Digital Twin Technology, Ambient Intelligence & Predictive Decision Support',
    category: 'AI / Full Stack / Enterprise / Smart Systems / Digital Twin',
    status: 'Cyber-Physical Platform',
    filterCategories: ['All', 'AI', 'Full Stack', 'Enterprise', 'Smart Systems'],
    featured: false,
    accentColor: '#3b82f6', // Electric Blue
    gradient: 'from-blue-600/30 via-indigo-500/20 to-purple-600/30',
    summary:
      'TwinSphere is a research-oriented cyber-physical intelligence platform that combines Digital Twin technology, Ambient Intelligence, statistical analytics, AI/ML prediction, predictive decision support, and resource optimization.',
    problemHighlight:
      'Traditional industrial monitoring displays raw disconnected metrics without contextual awareness or automated predictive decision support.',
    solutionHighlight:
      'Digital Twin virtual replicas driving an end-to-end 7-stage perception-to-decision pipeline for predictive anomaly response and resource tuning.',
    links: {
      github: 'https://github.com/nikhilmurugan',
      caseStudy: '#case-study-twinsphere',
    },
    pipeline: 'Perception → Representation → Analysis → Prediction → Decision → Optimization → Response',
    capabilities: [
      'Ambient Intelligence and contextual environmental perception',
      'Digital Twin representation of assets and operational systems',
      'Real-time monitoring and operational performance analytics',
      'Statistical trend and anomaly detection analysis',
      'AI/ML-based predictive analytics on asset states',
      'Predictive decision support and automated recommendation generation',
      'Resource optimization and operational efficiency management',
      'Scenario simulation and what-if parameter analysis',
      'Enterprise dashboards, operational alerts, and status indicators',
      'Future extensibility toward IoT, Edge Computing, and distributed intelligence',
    ],
    stack: [
      {
        name: 'React',
        category: 'Frontend',
        why: 'Renders dynamic cyber-physical asset mirrors, live metric gauges, and alert telemetry.',
      },
      {
        name: 'TypeScript',
        category: 'Frontend',
        why: 'Guarantees strict type safety across multi-layer sensor schemas and telemetry events.',
      },
      {
        name: 'Tailwind CSS',
        category: 'Frontend',
        why: 'Powers the dark-mode cyber-physical command center visual interface and glass surfaces.',
      },
      {
        name: 'Python',
        category: 'Backend',
        why: 'Executes statistical trend calculations and anomaly detection algorithms.',
      },
      {
        name: 'FastAPI',
        category: 'Backend',
        why: 'High-speed asynchronous API serving real-time asset telemetry and model predictions.',
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        why: 'Clean integration contracts connecting telemetry collectors with analytics services.',
      },
      {
        name: 'Pandas',
        category: 'AI',
        why: 'Processes time-series sensor logs and telemetry history for statistical modeling.',
      },
      {
        name: 'NumPy',
        category: 'AI',
        why: 'High-performance vector and numerical computation across sensor matrices.',
      },
      {
        name: 'Scikit-learn',
        category: 'AI',
        why: 'Powers predictive anomaly classification and resource optimization routines.',
      },
      {
        name: 'PostgreSQL',
        category: 'Database',
        why: 'Transactional and time-series database storing asset states, historical events, and audit logs.',
      },
    ],
    architecture: {
      title: 'TwinSphere Perception-to-Decision Pipeline',
      description: 'Perception → Representation → Analysis → Prediction → Decision → Optimization → Response',
      steps: [
        {
          id: 'step-1',
          label: 'Perception & Ingestion',
          sublabel: 'Contextual Telemetry',
          icon: 'Radio',
          color: '#3b82f6',
          details: 'Perceives environmental and asset states through incoming operational telemetry streams.',
        },
        {
          id: 'step-2',
          label: 'Digital Representation',
          sublabel: 'Virtual Asset Mirror',
          icon: 'Layers',
          color: '#22d3ee',
          details: 'Maintains live digital twin state representation synchronized with physical asset parameters.',
        },
        {
          id: 'step-3',
          label: 'Statistical Analysis',
          sublabel: 'Trend & Anomaly Detection',
          icon: 'Activity',
          color: '#f59e0b',
          details: 'Applies statistical moving averages and threshold evaluations to detect anomalies.',
        },
        {
          id: 'step-4',
          label: 'ML Prediction & Decision',
          sublabel: 'Predictive Decision Support',
          icon: 'Cpu',
          color: '#8b5cf6',
          details: 'Evaluates upcoming failure probabilities and formulates resource-aware decisions.',
        },
        {
          id: 'step-5',
          label: 'Optimization & Response',
          sublabel: 'Actionable Recommendations',
          icon: 'CheckCircle2',
          color: '#10b981',
          details: 'Dispatches automated operational recommendations, visual alerts, and control optimizations.',
        },
      ],
    },
    story: {
      vision:
        'To transform raw telemetry data into contextual insights, predictive intelligence, and resource-aware decisions through Digital Twin representation and Ambient Intelligence.',
      problem:
        'Traditional monitoring systems merely display raw, disconnected sensor graphs without context, failing to offer predictive guidance or operational decision support.',
      solution:
        'TwinSphere unites Digital Twin asset representations with an end-to-end intelligence pipeline (Perception → Representation → Analysis → Prediction → Decision → Optimization → Response).',
      challenge:
        'Bridging low-latency asset state synchronization with analytical AI/ML prediction without lagging real-time dashboard updates.',
      journey:
        'Architected as a flagship cyber-physical platform combining full-stack web engineering, Python data science, and systems thinking.',
      learnings: [
        'Designed asynchronous FastAPI microservices capable of ingesting continuous telemetry.',
        'Formulated the 7-stage perception-to-decision pipeline architecture.',
        'Created responsive command-center dashboard components with live status indicators.',
      ],
      futureEnhancements: [
        'Edge computing runtime for local sensor node anomaly processing.',
        '3D WebGL digital twin spatial representation.',
        'Distributed intelligence across multi-cluster industrial deployments.',
      ],
    },
    features: [
      {
        title: 'Digital Twin Asset Representation',
        description: 'Live virtual replica mirroring connected assets, operational parameters, and health status.',
      },
      {
        title: 'Ambient Intelligence Perception',
        description: 'Context-aware interpretation of environmental factors and operational telemetry.',
      },
      {
        title: 'Predictive Decision Support',
        description: 'Forecasts potential bottlenecks and recommends automated operational adjustments.',
      },
      {
        title: 'Resource Optimization',
        description: 'Balances operational load and energy consumption across connected infrastructure.',
      },
    ],
    aiMethods: [
      'Statistical time-series anomaly detection & rolling deviation thresholds',
      'Scikit-learn predictive failure classification on asset telemetry states',
      'Ambient Intelligence contextual awareness modeling',
      'Multi-objective resource optimization algorithms balancing operational efficiency',
    ],
    uiMockup: {
      type: 'twinsphere',
      primaryStat: '7-Stage Pipeline',
      secondaryStat: 'Live State Mirror',
      activeTabLabel: 'TwinSphere Cyber-Physical Intelligence Command',
      widgetLabels: ['Connected Assets: Active', 'Anomaly Risk: Low', 'Resource Efficiency: Optimized', 'Decision Engine: Synced'],
    },
  },
  {
    id: 'nexora',
    title: 'Nexora — Multi-Tenant SaaS Workflow & Organizational Intelligence Platform',
    tagline: 'Multi-Tenant Workflows, Project Management & Organizational Operations',
    category: 'Full Stack / Enterprise',
    status: 'Enterprise SaaS Platform',
    filterCategories: ['All', 'Full Stack', 'Enterprise'],
    featured: false,
    accentColor: '#3b82f6', // Electric Blue
    gradient: 'from-blue-600/30 via-cyan-500/20 to-purple-600/30',
    summary:
      'Nexora is a multi-tenant SaaS platform developed with React, Angular, Node.js, and MongoDB. It provides a unified environment for organizational workflows, project management, team operations, CRM, document management, and Kanban-based task management.',
    problemHighlight:
      'Startups and growing teams juggle disconnected single-purpose tools for tasks, customer relationships, documents, and role permissions.',
    solutionHighlight:
      'Unified multi-tenant architecture delivering role-based access control, Kanban project boards, CRM lead tracking, and centralized document vault.',
    links: {
      github: 'https://github.com/nikhilmurugan',
      caseStudy: '#case-study-nexora',
    },
    capabilities: [
      'Multi-tenant organizational workflows with role segregation',
      'Comprehensive project and task management with milestones',
      'Team operations, member directories, and permissions',
      'CRM lead management and pipeline tracking',
      'Document management and centralized file repository',
      'Kanban-based task workflow management with visual boards',
      'Role-based organizational operations and administrative controls',
      'Centralized database management with structured queries',
    ],
    stack: [
      {
        name: 'React',
        category: 'Frontend',
        why: 'Responsive component-based administration interface powering dashboards and data tables.',
      },
      {
        name: 'Angular',
        category: 'Frontend',
        why: 'Modular enterprise frontend structure supporting complex organizational forms and modules.',
      },
      {
        name: 'Node.js',
        category: 'Backend',
        why: 'Asynchronous backend runtime delivering non-blocking request handling across organizations.',
      },
      {
        name: 'MongoDB',
        category: 'Database',
        why: 'Flexible document schemas storing multi-tenant organizations, projects, leads, and tasks.',
      },
      {
        name: 'REST APIs',
        category: 'Backend',
        why: 'Standardized REST controllers with middleware authentication and permission checks.',
      },
    ],
    architecture: {
      title: 'Nexora Multi-Tenant System Flow',
      description: 'Organization data isolation and workflow execution architecture',
      steps: [
        {
          id: 'step-1',
          label: 'Frontend Client Portals',
          sublabel: 'React & Angular Interfaces',
          icon: 'Layout',
          color: '#3b82f6',
          details: 'Unified client interfaces for project management, Kanban boards, and CRM leads.',
        },
        {
          id: 'step-2',
          label: 'API Gateway & Routing',
          sublabel: 'Node.js Express Server',
          icon: 'Network',
          color: '#22d3ee',
          details: 'Processes incoming API requests, routes endpoints, and enforces tenant scoping.',
        },
        {
          id: 'step-3',
          label: 'Role-Based Access Guard',
          sublabel: 'Authentication & Permissions',
          icon: 'ShieldCheck',
          color: '#8b5cf6',
          details: 'Validates tokens and enforces organizational permissions from Admin to Member.',
        },
        {
          id: 'step-4',
          label: 'Document Storage Layer',
          sublabel: 'MongoDB Collections',
          icon: 'Database',
          color: '#a855f7',
          details: 'Stores tenant documents, project records, CRM leads, and Kanban task metadata.',
        },
        {
          id: 'step-5',
          label: 'Workflow Engine',
          sublabel: 'Task & CRM Pipelines',
          icon: 'CheckCircle2',
          color: '#10b981',
          details: 'Handles task stage transitions, team notifications, and lead status updates.',
        },
      ],
    },
    story: {
      vision:
        'To build a unified multi-tenant operational platform where startup teams can manage projects, operations, CRM, and documents in one seamless interface.',
      problem:
        'Small and growing organizations typically juggle multiple disconnected tools for projects, leads, documents, and team coordination.',
      solution:
        'Nexora provides a single integrated multi-tenant SaaS platform unifying projects, Kanban tasks, CRM leads, and documents.',
      challenge:
        'Designing a clean modular architecture that isolates organization records while supporting flexible workflows.',
      journey:
        'Developed as a comprehensive full-stack enterprise project incorporating modern web engineering and database design.',
      learnings: [
        'Constructed clean REST API controllers with structured MongoDB validation schemas.',
        'Engineered responsive Kanban board drag-and-drop workflow interfaces.',
        'Structured role-based authorization systems separating organization permissions.',
      ],
      futureEnhancements: [
        'Automated email notification triggers upon Kanban card movements.',
        'Team real-time chat and document commenting system.',
        'Customizable organizational reporting exports in PDF and CSV.',
      ],
    },
    features: [
      {
        title: 'Multi-Tenant Workflows',
        description: 'Secure organizational segregation with role-based member permissions.',
      },
      {
        title: 'Kanban Task Management',
        description: 'Visual project boards with stage tracking and priority categorization.',
      },
      {
        title: 'CRM Lead Management',
        description: 'Tracks prospective client pipelines, deal stages, and contact records.',
      },
      {
        title: 'Centralized Document Repository',
        description: 'Organized file storage and document categorization across teams.',
      },
    ],
    aiMethods: [
      'Automated Kanban state validation and milestone dependency tracking algorithms',
      'Rule-based CRM lead priority scoring and conversion velocity tracking',
      'Algorithmic multi-tenant access control and cryptographic token verification',
    ],
    uiMockup: {
      type: 'nexora',
      primaryStat: 'Multi-Tenant Core',
      secondaryStat: 'Kanban & CRM Active',
      activeTabLabel: 'Nexora Enterprise Workflow & Operations Workspace',
      widgetLabels: ['Project Boards: Active', 'CRM Pipeline: 12 Leads', 'Team Operations: 8 Members', 'Document Vault: Organized'],
    },
  },
]
