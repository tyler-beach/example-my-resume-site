// ============================================================================
 // PERSONALIZE THIS FILE
 // Document-style CV layout: keep summaries short and scannable.
 // Only publish information you are comfortable making public.
 // Empty lists (certifications, honors, interests) hide those sections.
 // ============================================================================

export const profile = {
  theme: 'cv',

  photo: '/photo.jpg',
  resume: '/resume.pdf',

  name: 'Tyler Beach',
  role: 'Security Architect · Product Security · AI-Enabled Security Automation',
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
    'Threat Modeling',
    'Secure SDLC',
    'Cloud Security',
    'DevSecOps',
    'AI-Enabled Security Automation',
    'Architecture Governance',
  ],

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
    'Developer enablement',
  ],

  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Security architecture, threat modeling, and AI-enabled automation for architectural governance in regulated healthcare product environments.',
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University',
      date: 'Jan 2024–Present',
      summary:
        'Created and teach the Barton School’s graduate cybersecurity course (MIS 711), with hands-on consultant-style projects.',
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary:
        'Led AppSec for digital and manufacturing modernization; influenced secure SDLC practices across 1,000+ developers and 3,000+ applications.',
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: '2016–2018',
      summary:
        'Built full-stack .NET applications and a multi-agency CRM for regulated foster care and behavioral health workflows.',
    },
  ],

  projects: [
    {
      kind: 'Project Pathfinder',
      title: 'ADR Deviation Platform',
      summary:
        'Evidence-first service detecting inconsistencies between architectural decisions, specs, and implementation changes.',
      skills: ['Go', 'Architecture', 'AI pipelines'],
      link: 'https://github.com/tyler-beach/Platform',
    },
    {
      kind: 'Project Pathfinder',
      title: 'Architecture Governance Platform',
      summary:
        'Backstage platform for ADRs, governance nodes, RFCs, search, and AI-assisted decision management.',
      skills: ['Backstage', 'TypeScript'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
    },
    {
      kind: 'Security tooling',
      title: 'GitHub Dashboard',
      summary:
        'Org dashboard for repos, compliance, and security findings with local caching.',
      skills: ['React', 'TypeScript'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      kind: 'Security tooling',
      title: 'GitHub Findings Manager',
      summary:
        'Go CLI for collecting and reporting CodeQL, secrets, and Dependabot findings.',
      skills: ['Go', 'GitHub API'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      kind: 'Secure coding',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary:
        'Cursor rules aligned to the R.A.I.L.G.U.A.R.D. framework for security-aware AI-assisted development.',
      skills: ['Secure coding'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};
