import linkedInSync from './linkedin.json'

const syncedProfile = linkedInSync.profile || {}

export const profile = {
  name: 'Kushan Esala',
  role: syncedProfile.role || 'Associate Research And Development Engineer',
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
    title: 'Associate Research And Development Engineer',
    company: 'We Are Team Rocket',
    type: 'Full-time',
    location: 'Colombo, Western Province, Sri Lanka',
    workMode: 'Hybrid',
    period: 'Apr 2026 - Present · 5 mos',
    current: true,
    highlights: [
      'Implement and refine features for internal tools and automation systems used in lead-generation workflows.',
      'Develop and integrate APIs, services, and scripts that support day-to-day operational processes.',
      'Build and maintain data pipelines for processing and using lead data.',
      'Write, test, and debug code to improve the stability and performance of internal applications.',
      'Translate ideas into working prototypes and technical implementations for experimentation.',
      'Collaborate with the team to troubleshoot issues and improve system reliability.',
      'Maintain code quality through version control, documentation, and development standards.',
      'Apply AI integrations and automation tools to practical business use cases.',
    ],
  },
  {
    title: 'Associate Software Developer',
    company: 'Smart Omega Group (PVT) Ltd',
    type: 'Full-time',
    location: 'Kandy, Central Province, Sri Lanka',
    workMode: 'Hybrid',
    period: 'Nov 2025 - Apr 2026 · 6 mos',
    highlights: [
      'Developed and maintained scalable Laravel applications using MVC and established best practices.',
      'Used AI-assisted tools for code generation, debugging, and development efficiency.',
      'Designed and optimized MySQL databases and complex queries for high performance.',
      'Built and integrated RESTful APIs and third-party services.',
      'Automated workflows and VPS deployments to improve efficiency and reliability.',
    ],
  },
  {
    title: 'Software Developer Intern',
    company: 'Smart Omega Group (PVT) Ltd',
    type: 'Internship',
    location: 'Kandy, Central Province, Sri Lanka',
    workMode: 'On-site',
    period: 'May 2025 - Nov 2025 · 7 mos',
    highlights: [
      'Assisted in developing web applications using Laravel and object-oriented PHP.',
      'Built CRUD operations and worked with MySQL databases.',
      'Designed UI components using Blade, HTML, CSS, and Bootstrap.',
      'Supported bug fixing, testing, and debugging tasks.',
      'Used Git and GitHub for version control and team collaboration.',
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
