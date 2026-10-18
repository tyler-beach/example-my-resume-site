// ============================================================================
 // PERSONALIZE THIS FILE
 // Theme toggle switches Editorial / Developer / Professional.
 // Keep summaries short — the resume PDF carries the full detail.
 // Only publish information you are comfortable making public.
 // ============================================================================

export const profile = {
  theme: 'editorial',

  photo: '/photo.jpg',
  resume: '/resume.pdf',

  badge: 'Open to collaboration',

  name: 'Tyler Beach',
  role: 'Security Architect · Product Security · AI-Enabled Automation',
  location: 'Wichita, Kansas',
  tagline: 'I help teams ship secure products without unnecessary friction.',
  about:
    'Security architect and former software engineer focused on application security, product security, and AI-enabled architectural governance across healthcare, manufacturing, SaaS, and nonprofit technology. Adjunct professor at Wichita State University.',

  email: 'tylerxbeach@gmail.com',
  github: 'https://github.com/tyler-beach',
  linkedin: 'https://www.linkedin.com/in/tylerxbeach',

  skills: [
    'Application Security',
    'Product Security',
    'Security Architecture',
    'Threat Modeling',
    'Secure SDLC',
    'Cloud Security',
    'DevSecOps',
    'AI-Enabled Security Engineering',
    'GRC',
    'Developer Enablement',
  ],

  // Keep empty to hide the highlights block — use resume PDF for long-form proof.
  careerHighlights: [],

  education: [
    {
      school: 'Friends University',
      degree: 'M.S. Cyber Security',
      detail: '2016–2018',
    },
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: '2014–2016',
    },
    {
      school: 'Cowley College',
      degree: 'A.A. Information Assurance · A.S. Computer Science',
      detail: '2012–2014',
    },
  ],

  certifications: [
    {
      name: 'GIAC Certified Penetration Tester (GPEN)',
      issuer: 'GIAC',
      detail: '',
    },
  ],

  honors: [
    { title: 'Maurer Leadership Award', detail: '' },
    { title: 'Eagle Scout', detail: '' },
  ],

  interests: [
    'Teaching and mentoring',
    'AI-enabled security engineering',
    'Architecture decision records',
    'Advisory and guest lecturing',
  ],

  learning: [
    'Backstage plugins',
    'Evidence-first AI evaluation',
    'Protobuf / gRPC contracts',
  ],

  // One tight line per role. Full bullets live in the resume PDF.
  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Security architecture, threat modeling, and AI-enabled governance automation in regulated healthcare environments.',
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University',
      date: 'Jan 2024–Present',
      summary:
        'Created and teach MIS 711, the Barton School’s graduate cybersecurity course.',
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary:
        'Led AppSec for digital and manufacturing modernization; influenced secure SDLC across 1,000+ developers and 3,000+ apps.',
    },
    {
      title: 'IT Risk Analyst',
      organization: 'Cargill',
      date: 'Oct 2018–Jul 2020',
      summary:
        'Risk, controls, and security reviews across global IT and operational technology environments.',
    },
    {
      title: 'Advisory Board Member',
      organization: 'Starkey Inc',
      date: '2022–2024',
      summary: 'Technology strategy and workforce-readiness guidance for leadership.',
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: '2016–2018',
      summary:
        'Full-stack .NET apps and multi-agency CRM for regulated foster care and behavioral health workflows.',
    },
  ],

  projects: [
    {
      kind: 'Project Pathfinder',
      title: 'ADR Deviation Platform',
      summary:
        'Detects inconsistencies between architectural decisions, specs, and implementation changes.',
      skills: ['Go', 'Architecture', 'AI pipelines'],
      link: 'https://github.com/tyler-beach/Platform',
    },
    {
      kind: 'Project Pathfinder',
      title: 'Architecture Governance Platform',
      summary:
        'Backstage app for ADRs, governance nodes, RFCs, search, and AI-assisted decision management.',
      skills: ['Backstage', 'TypeScript'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
    },
    {
      kind: 'Security ops',
      title: 'GitHub Dashboard',
      summary: 'Org dashboard for repos, compliance, and security findings with local caching.',
      skills: ['React', 'TypeScript'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      kind: 'Security ops',
      title: 'GitHub Findings Manager',
      summary: 'Go CLI to collect and report CodeQL, secrets, and Dependabot findings.',
      skills: ['Go', 'GitHub API'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      kind: 'Secure coding',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary: 'Cursor rules that keep AI-assisted coding security-aware by default.',
      skills: ['Secure coding'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};
