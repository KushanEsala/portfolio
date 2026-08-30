import linkedInSync from './linkedin.json'

const syncedProfile = linkedInSync.profile || {}

export const profile = {
  name: 'Kushan Esala',
  role: syncedProfile.role || 'Research and Development Engineer',
  company: syncedProfile.company || 'We Are Team Rocket',
  location: syncedProfile.location || 'Kandy, Sri Lanka',
  email: 'kushanesalakck@gmail.com',
  phone: '+94 75 462 8289',
  linkedin: 'https://www.linkedin.com/in/kushan-esala/',
  github: 'https://github.com/KushanEsala',
  resume: 'https://drive.google.com/file/d/12Xw3GlJfunqGZ5ibOkPNnxWkkcWfnF5L/view?usp=drive_link',
  summary: syncedProfile.summary ||
    'AI-first software engineer focused on backend systems, production SaaS builds, automation workflows, and reliable infrastructure.',
}

const cvExperience = [
  {
    title: 'Research and Development Engineer',
    company: 'We Are Team Rocket',
    type: 'Current role',
    period: 'Present',
    current: true,
    highlights: [
      'Build backend services, data tools, and product workflows for outbound and growth operations.',
      'Connect third-party platforms through authenticated APIs, webhooks, queues, and n8n automation.',
      'Develop full-stack dashboards and operational tools across React, Next.js, Python, and databases.',
      'Deploy and manage services on Linux using Docker, Nginx, systemd, PM2, TLS, and production runbooks.',
    ],
  },
  {
    title: 'Associate Full Stack Developer',
    company: 'Smart Omega (Pvt) Ltd',
    type: 'Full-time',
    period: 'Previous role',
    highlights: [
      'Develop and maintain Laravel backend modules with clean, scalable architecture.',
      'Build secure REST APIs and integrate databases and third-party services.',
      'Optimize queries, transactions, and backend workflows for high-performance applications.',
      'Implement authentication, authorization, and role-based access control.',
      'Collaborate with frontend, QA, and DevOps across the software delivery lifecycle.',
    ],
  },
  {
    title: 'Full Stack Developer Intern',
    company: 'Smart Omega (Pvt) Ltd',
    type: 'Full-time',
    period: 'Jun 2025 - Dec 2025',
    highlights: [
      'Built Laravel, PHP, and React modules with database integration.',
      'Improved form validation, autofill, transaction handling, and large-scale queries.',
      'Supported cloud deployments, server management, client visits, and technical demos.',
    ],
  },
]

export const experience = linkedInSync.experience?.length ? linkedInSync.experience : cvExperience

export const education = {
  degree: 'BSc in Information Technology',
  award: 'First-Class Honours',
  school: 'Sri Lanka International Buddhist Academy (SIBA)',
  schoolUrl: 'https://siba.edu.lk/',
  period: '2022 - 2026',
}

export const certifications = [
  'Postman API Fundamentals Student Expert',
  'GenAI 101 with Pieces',
  'MCP Server with .NET Challenge',
  'MySQL Explorer Badge',
]

export const skillGroups = [
  {
    label: 'Languages',
    skills: ['Java', 'PHP', 'JavaScript', 'C#', 'Python', 'SQL'],
  },
  {
    label: 'Frameworks',
    skills: ['React', 'Laravel', '.NET', 'Angular', 'Node.js', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    label: 'Data and AI',
    skills: ['MySQL', 'PostgreSQL', 'MongoDB', 'SQLite', 'Supabase', 'Chart.js', 'Scikit-learn', 'TensorFlow', 'Machine learning'],
  },
  {
    label: 'Automation',
    skills: ['n8n', 'REST APIs', 'Webhooks', 'AI workflow automation', 'Third-party integrations'],
  },
  {
    label: 'DevOps and systems',
    skills: ['Linux server administration', 'Docker', 'Nginx', 'AWS', 'Google Cloud', 'Jenkins', 'Git', 'systemd', 'PM2'],
  },
]
