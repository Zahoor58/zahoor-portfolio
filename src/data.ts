export const profile = {
  name: 'Zahoor Ahmed',
  role: 'Senior Software Engineer',
  tagline: 'Laravel, PHP & Django Specialist',
  bio: 'Senior software engineer with 5+ years building backend systems and APIs for SaaS, healthcare, energy, and civic-tech platforms — currently at HBOX Digital, previously Mixvoip and Techleadz. I specialize in Laravel, PHP, and Django, turning complex requirements into secure, production-ready systems that scale.',
  github: 'https://github.com/',
  email: 'zahoor.ahmed@example.com',
  location: 'Lahore, Pakistan',
  availableFor: 'Full-time roles, remote or on-site positions, and freelance/contract work.',
};

export const stats = [
  { label: 'Total Earnings', value: 33, prefix: '$', suffix: 'K+', decimals: 0 },
  { label: 'Jobs Completed', value: 9, prefix: '', suffix: '', decimals: 0 },
  { label: 'Total Hours', value: 227, prefix: '', suffix: '', decimals: 0 },
  { label: 'Job Success', value: 100, prefix: '', suffix: '%', decimals: 0 },
];

export const skillCategories = [
  {
    title: 'Backend & Frameworks',
    icon: 'Server',
    skills: ['Laravel', 'PHP', 'Python', 'Django', 'Flask', 'Symfony', 'REST APIs', 'OAuth', 'Cron Jobs & Queue Workers'],
  },
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['JavaScript', 'TypeScript', 'Angular', 'React', 'Vue.js', 'Bootstrap', 'jQuery'],
  },
  {
    title: 'Databases',
    icon: 'Database',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQL Server', 'SQLite'],
  },
  {
    title: 'DevOps & Cloud',
    icon: 'Cloud',
    skills: ['AWS', 'Docker', 'Git / GitHub / GitLab', 'CI/CD', 'Apache JMeter', 'Monitoring & Alerting'],
  },
  {
    title: 'Integrations',
    icon: 'Plug',
    skills: ['Stripe', 'Payment Integrations', 'Congress API', 'OpenStates API', 'Trustpay', 'Purepay', 'MaxPay', 'Paymob'],
  },
];

export const experience = [
  {
    role: 'Full Stack Developer',
    company: 'HBOX Digital',
    period: 'Jan 2026 – Present',
    location: '',
    description:
      'Building end-to-end product features across HR-tech and civic-tech platforms — including the HR Pal product website for an Ontario HR/safety compliance platform, and Laravel backend services for the Demos civic-engagement platform, integrating the Congress and OpenStates APIs for bill discovery and representative tracking.',
    tags: ['Laravel', 'Vue.js', 'Congress API', 'OpenStates API'],
  },
  {
    role: 'Senior Software Engineer',
    company: 'Mixvoip',
    period: 'Sep 2024 – Dec 2025',
    location: 'Remote, Germany',
    description:
      'Led backend reliability and operational improvements for production VoIP systems. Built automated monitoring and alerting that improved uptime by 30% and cut incident response time by 40%, and containerized deployments to increase release confidence.',
    tags: ['Laravel', 'PHP', 'Docker', 'Monitoring'],
  },
  {
    role: 'Software Engineer',
    company: 'Techleadz',
    period: 'May 2022 – Sep 2025',
    location: 'Lahore, Pakistan',
    description:
      'Delivered full-stack products in Laravel, Angular, and MySQL for subscription, payment, and data-management workflows serving 10k+ users — optimizing queries to cut page load times by 60% and integrating Stripe/Paymob payment flows.',
    tags: ['Laravel', 'Angular', 'MySQL', 'Stripe'],
  },
  {
    role: 'Backend Engineer',
    company: 'Einnovention',
    period: 'Jan 2022 – May 2022',
    location: 'Lahore, Pakistan',
    description:
      'Built healthcare portals for Med-Future (EHR, billing, role-based access) in Laravel, MySQL, and Ajax, reducing patient onboarding time by 20% across US, UK, and New Zealand markets.',
    tags: ['Laravel', 'MySQL', 'Ajax'],
  },
  {
    role: 'Associate Engineer',
    company: 'Interactive Solutions',
    period: 'Oct 2021 – Jan 2022',
    location: 'Lahore, Pakistan',
    description:
      'Developed Django-based backend services and APIs for authentication, payment processing, and CSV-driven workflows, and designed PostgreSQL schemas that improved query performance by 35%.',
    tags: ['Django', 'PostgreSQL', 'REST APIs'],
  },
];

export const education = [
  { degree: 'B.S. Computer Science', school: 'University of Engineering & Technology (UET), Lahore' },
  { degree: 'Certified Full Stack Developer', school: 'Udemy' },
];

export type Project = {
  name: string;
  tagline: string;
  description: string;
  company: string;
  category: string;
  stack: string[];
  tags: string[];
  filters: string[];
  accent: string;
};

export const projectFilters = ['All', 'Laravel & PHP', 'Python & AI', 'Vue.js', 'React Native'];

export const projects: Project[] = [
  {
    name: 'HR Pal — HR & Safety Compliance Platform',
    tagline: 'HR & Safety Compliance',
    description:
      'Designed and built the complete website for HR Pal, an Ontario HR and safety compliance platform — showcasing AI-assisted guidance, a compliance document library, pricing, and lead-capture flows for small and mid-sized businesses.',
    company: 'HBOX Digital',
    category: 'HR Tech',
    stack: ['Laravel', 'Vue'],
    tags: ['Laravel', 'Vue.js', 'UX', 'Lead Capture'],
    filters: ['Laravel & PHP', 'Vue.js'],
    accent: 'accent',
  },
  {
    name: 'Demos Platform — Civic Engagement',
    tagline: 'Civic Engagement',
    description:
      'Engineered Laravel backend services for a civic-engagement platform that helps users read plain-language bill summaries, vote on active legislation, track representatives, and follow proposals — powered by a unified API layer integrating Congress.gov and OpenStates.',
    company: 'HBOX Digital',
    category: 'Civic Tech',
    stack: ['Laravel', 'Congress API', 'OpenStates API'],
    tags: ['Laravel', 'Congress API', 'OpenStates API', 'Civic Tech'],
    filters: ['Laravel & PHP'],
    accent: 'cyan',
  },
  {
    name: 'Neighborhood News Network',
    tagline: 'Local News Platform',
    description:
      'A full-stack local news platform with a Laravel backend and a React Native mobile app. Users get real-time local news filtered by county and category, with breaking news alerts and subscriptions — backed by an admin dashboard for managing posts, categories, counties, and user submissions.',
    company: 'HBOX Digital',
    category: 'Local News',
    stack: ['Laravel', 'React Native'],
    tags: ['React Native', 'Laravel', 'PHP', 'Local News', 'Mobile App'],
    filters: ['Laravel & PHP', 'React Native'],
    accent: 'amber',
  },
  {
    name: 'PilotIQ — Smart Travel App',
    tagline: 'Travel Companion',
    description:
      'A full-stack travel companion app built with React Native and a Laravel backend. Users can discover destinations, create and manage trips, track shared budgets, and explore curated places — backed by an operations console for managing users, imports, locations, trips, and support.',
    company: 'HBOX Digital',
    category: 'Travel',
    stack: ['React Native', 'Laravel'],
    tags: ['React Native', 'Laravel', 'PHP', 'Travel App'],
    filters: ['Laravel & PHP', 'React Native'],
    accent: 'accent',
  },
  {
    name: 'HealthClinicMD — Telehealth Wellness Platform',
    tagline: 'Telehealth & Analytics',
    description:
      'Built the marketing site and a custom admin analytics dashboard for a telehealth wellness provider — tracking patients, partners, revenue split, and commissions across consult fees and medication sales in real time.',
    company: 'HBOX Digital',
    category: 'Telehealth',
    stack: ['WordPress', 'PHP'],
    tags: ['WordPress', 'PHP', 'Telehealth', 'Analytics'],
    filters: ['Laravel & PHP'],
    accent: 'cyan',
  },
  {
    name: 'Kapient — Website Error Monitoring',
    tagline: 'Website Monitoring SaaS',
    description:
      'Built a website-monitoring SaaS platform from scratch with Laravel, PHP, and Bootstrap — scanning sites across 74+ technical and quality factors (SEO, HTTPS, uptime, Core Web Vitals) and alerting businesses before errors cost them customers. Automated background scans with cron jobs and queues.',
    company: 'Mixvoip (Remote, Germany)',
    category: 'Website Monitoring SaaS',
    stack: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    tags: ['PHP', 'Laravel', 'MySQL', 'Bootstrap'],
    filters: ['Laravel & PHP'],
    accent: 'accent',
  },
  {
    name: 'Utilidata — Grid Optimization Platform',
    tagline: 'Energy Tech',
    description:
      'Enhanced and maintained software infrastructure for Utilidata\'s Karman AI power-orchestration platform, improving performance for large-scale energy management systems in an agile, cross-functional team.',
    company: 'Techleadz',
    category: 'Energy Tech',
    stack: ['Django', 'AWS', 'PostgreSQL'],
    tags: ['Django', 'AWS', 'PostgreSQL'],
    filters: ['Python & AI'],
    accent: 'amber',
  },
  {
    name: 'Med-Future — Hospital Management Portal',
    tagline: 'Healthcare EHR',
    description:
      'Built hospital management portals covering registration, appointments, EHR, billing, and role-based access control for healthcare workflows across the US, UK, and New Zealand — cutting patient onboarding time by 20%.',
    company: 'Einnovention',
    category: 'Healthcare',
    stack: ['Laravel', 'MySQL', 'JavaScript', 'Ajax'],
    tags: ['Laravel', 'MySQL', 'JavaScript', 'Ajax'],
    filters: ['Laravel & PHP'],
    accent: 'cyan',
  },
  {
    name: 'Biblepics — AI Bible Search & Localization',
    tagline: 'AI Search & Localization',
    description:
      'Built GPT-3-powered Bible AI search and chat features for biblepics.co, plus English and Hebrew localization — including bidirectional text handling and language switching — contributing to a 15% increase in engagement.',
    company: 'Techleadz',
    category: 'Localization',
    stack: ['Django', 'OpenAI GPT-3', 'PostgreSQL'],
    tags: ['Django', 'OpenAI GPT-3', 'PostgreSQL', 'Localization'],
    filters: ['Python & AI'],
    accent: 'accent',
  },
  {
    name: 'CRM for Transaction Tracking',
    tagline: 'Data & Analytics',
    description:
      'Developed a CRM for tracking transactions across multiple internal products, with CSV import, analytics, and visualization — reducing manual errors and improving efficiency by 20%.',
    company: 'Client Project',
    category: 'Data & Analytics',
    stack: ['Python', 'Django', 'CSV Parsing', 'Data Viz'],
    tags: ['Python', 'Django', 'CSV Parsing', 'Data Viz'],
    filters: ['Python & AI'],
    accent: 'amber',
  },
  {
    name: 'Subscription Platform Builders',
    tagline: 'SaaS Platforms',
    description:
      'Built a family of subscription platforms — Literal, Regular, and Monitor Builder, plus Regular Drive — for creating web/landing pages and secure data storage, integrating Trustpay, Purepay, and MaxPay and driving engagement gains of 15–30%.',
    company: 'Client Projects',
    category: 'SaaS Platforms',
    stack: ['Laravel', 'Angular', 'React', 'TypeScript'],
    tags: ['Laravel', 'Angular', 'React', 'TypeScript'],
    filters: ['Laravel & PHP'],
    accent: 'cyan',
  },
  {
    name: 'Business Automation Platforms',
    tagline: 'Ops Automation',
    description:
      'Optimized database design and built automated order-tracking and notification workflows for Erista, Report Detective, and My Month-End — improving operational flow and UI quality across all three.',
    company: 'Client Projects',
    category: 'Ops Automation',
    stack: ['Laravel', 'MySQL', 'Ajax', 'jQuery'],
    tags: ['Laravel', 'MySQL', 'Ajax', 'jQuery'],
    filters: ['Laravel & PHP'],
    accent: 'accent',
  },
  {
    name: 'Secure Auth & Payment APIs',
    tagline: 'Auth & Payments',
    description:
      'Built Touch Safe and Ten Boosts — REST APIs and secure workflows for authentication, payment processing, and data exchange, paired with dynamic JavaScript/Ajax interfaces.',
    company: 'Client Projects',
    category: 'Auth & Payments',
    stack: ['Python', 'Django REST Framework', 'SQLite'],
    tags: ['Python', 'Django REST Framework', 'SQLite'],
    filters: ['Python & AI'],
    accent: 'amber',
  },
];

export const testimonials = [
  {
    quote:
      'Great work delivering a solid and scalable platform that meets all the core requirements. The implementation of authentication, role-based sessions, subscriptions, and the credit system is clean and well structured.',
    client: 'Client',
    project: 'User Registration/Login System with Payment Gateway',
    rating: 5,
  },
  {
    quote:
      'Professional and timely with his work. Provides quality work that has been tested.',
    client: 'Client',
    project: 'PHP Upgrade of Registration App',
    rating: 5,
  },
  {
    quote:
      'Zahoor did whatever was necessary to provide the solution, including researching into setting the CSRF tokens.',
    client: 'Client',
    project: 'JMeter Testing of Laravel App',
    rating: 5,
  },
];
