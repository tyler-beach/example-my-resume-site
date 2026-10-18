// ============================================================================
// PERSONALIZE THIS FILE — most of the site is driven from here.
//
// theme: 'compact' | 'professional' | 'developer'
//   (visitors can still switch with the theme toggle)
//
// Projects:
//   - Always fill title, summary, skills, link (and demo if you have one)
//   - Optional slug → creates /projects/<slug>/ detail page
//   - Optional description, highlights, images for that page
//   - Put screenshots in public/projects/ then list paths in images: ['/projects/foo.jpg']
//
// Only publish information you are comfortable making public.
// ============================================================================

export const profile = {
  theme: 'compact',

  photo: '/photo.jpg',
  resume: '/resume.pdf',

  // Optional short label under your name. Leave '' to hide.
  badge: '',

  name: 'Tyler Beach',
  role: 'Security Architect',
  location: 'Wichita, Kansas',
  tagline: 'Application security, product security, and practical architecture reviews.',
  about:
    'Security architect and former software engineer. I work on application security, product security, and AI-assisted architecture checks across healthcare, manufacturing, and SaaS. I also teach cybersecurity at Wichita State University.',

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
    'GRC',
  ],

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
    'Architecture decision records',
    'Guest lecturing',
  ],

  learning: [
    'Backstage plugins',
    'Protobuf / gRPC',
  ],

  // Keep experience readable: one short summary, optional 1–2 bullets.
  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Security architecture and secure delivery work with product and engineering teams in healthcare.',
      highlights: [
        'Threat modeling, architecture reviews, and remediation across cloud and CI/CD.',
      ],
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University',
      date: 'Jan 2024–Present',
      summary: 'Created and teach MIS 711, the Barton School graduate cybersecurity course.',
      highlights: [
        'Hands-on labs and industry-style student projects.',
      ],
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary: 'AppSec lead for digital transformation and manufacturing modernization programs.',
      highlights: [
        'Secure SDLC support across a large global engineering organization.',
      ],
    },
    {
      title: 'IT Risk Analyst',
      organization: 'Cargill',
      date: 'Oct 2018–Jul 2020',
      summary: 'Security and risk support for global IT and operational technology teams.',
      highlights: [],
    },
    {
      title: 'Advisory Board Member',
      organization: 'Starkey Inc',
      date: '2022–2024',
      summary: 'Advised on technology direction and workforce readiness.',
      highlights: [],
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: '2016–2018',
      summary: 'Built .NET applications for multi-agency nonprofit operations.',
      highlights: [
        'CRM and HIPAA-aligned workflows for foster care and behavioral health.',
      ],
    },
  ],

  projects: [
    {
      slug: 'adr-deviation-platform',
      title: 'ADR Deviation Platform',
      summary: 'Checks whether shipped code still matches approved architecture decisions.',
      description:
        'Part of Project Pathfinder. Compares architecture decision records to implementation so reviewers have shared evidence when things drift.',
      images: ['/projects/pathfinder-home.jpg', '/projects/pathfinder-arch.jpg'],
      highlights: [
        'Public docs and walkthrough at tyler-beach.github.io/Platform',
        'Contracts and reviewable findings tied back to ADRs',
      ],
      skills: ['Go', 'Architecture', 'Protobuf'],
      link: 'https://github.com/tyler-beach/Platform',
      demo: 'https://tyler-beach.github.io/Platform/',
    },
    {
      slug: 'architecture-governance-platform',
      title: 'Architecture Governance Platform',
      summary: 'Backstage workspace for ADRs, RFCs, and decision tracking.',
      description:
        'Companion Pathfinder project. Gives teams one place for governance nodes, ADRs, playbooks, and multi-team RFCs.',
      highlights: [
        'ADRs, intent, and playbooks in one Backstage shell',
        'Search and assistant features with local Postgres',
      ],
      skills: ['Backstage', 'TypeScript', 'Postgres'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
    },
    {
      slug: 'github-dashboard',
      title: 'GitHub Dashboard',
      summary: 'Org view of repos, compliance checks, and security findings.',
      description:
        'React dashboard that uses a GitHub PAT, caches data locally, and surfaces Code Scanning, Secrets, and Dependabot findings with ownership context.',
      highlights: [
        'Local caching to reduce API calls',
        'Filters by custom repository properties',
      ],
      skills: ['React', 'TypeScript', 'Octokit'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      slug: 'github-findings-manager',
      title: 'GitHub Findings Manager',
      summary: 'Go CLI that collects org security findings and writes Excel reports.',
      description:
        'Parallel collector with rate limiting and SQLite caching, plus a GitHub Actions workflow for scheduled runs.',
      highlights: [
        'Worker pools with rate limiting',
        'Excel reporting for security teams',
      ],
      skills: ['Go', 'GitHub API', 'Actions'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      slug: 'railguard-cursor-rules',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary: 'Cursor rules that keep AI-assisted coding security-aware.',
      description:
        'A small rules pack aligned to the R.A.I.L.G.U.A.R.D. framework for day-to-day secure development with coding assistants.',
      highlights: [
        'Mapped to an open secure-coding framework',
        'Meant as a starting point teams can fork',
      ],
      skills: ['Secure coding', 'Cursor rules'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};
