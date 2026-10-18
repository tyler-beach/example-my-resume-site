// ============================================================================
 // PERSONALIZE THIS FILE
 // 1. Choose a layout theme (editorial, developer, or professional)
 // 2. Replace the sample text with your real details
 // 3. Add a photo (optional): put photo.jpg in the public/ folder, then set photo below
 // Only publish information you are comfortable making public.
 // ============================================================================

export const profile = {
  // Visual layout. Download a pre-set theme ZIP from the workshop site, or change this value.
  theme: 'developer',

  // Your photo. Put the file in public/ (example: public/photo.jpg).
  // Use '/photo.jpg' to show it, or '' to show your initials instead.
  photo: '/photo.jpg',

  name: 'Tyler Beach',
  role: 'Security Architect · Product Security · AI-Enabled Security Automation',
  location: 'Wichita, Kansas',
  tagline: 'I help teams ship secure products without unnecessary friction.',
  about:
    'I am a security architect and former software engineer focused on application security, product security, and AI-enabled architectural governance. My background spans healthcare, manufacturing, SaaS, and nonprofit technology—partnering with engineers, product teams, and leadership to improve security outcomes while enabling teams to move quickly. I also teach as an adjunct professor and care about connecting industry practice with technology education.',
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

  education: {
    school: 'Friends University',
    degree: 'M.S. Cyber Security',
    detail: 'Also B.B.A. Management Information Systems · Wichita State University',
  },

  // Add more objects to this list for more roles. Delete objects you do not need.
  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Partner across product, engineering, and platform teams on security architecture, threat modeling, and remediation in regulated healthcare environments. Design AI-enabled automation that strengthens architectural governance and reduces friction for engineers.',
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University',
      date: 'Jan 2024–Present',
      summary:
        'Created and launched the Barton School’s first cybersecurity course (MIS 690E → MIS 711). Teach graduate students application security, cryptography, access control, and risk management through hands-on, consultant-style projects.',
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary:
        'Led AppSec for major digital and manufacturing modernization initiatives. Helped shape secure SDLC practices influencing 1,000+ developers across 3,000+ applications, and modernized CI/CD security workflows across hybrid and OT environments.',
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: '2016–2018',
      summary:
        'Built full-stack .NET applications and a multi-agency CRM supporting regulated foster care and behavioral health workflows, including HIPAA-aligned digital process automation.',
    },
  ],

  // Add more projects the same way. Class projects are fine if you describe your contribution honestly.
  projects: [
    {
      kind: 'PROJECT PATHFINDER',
      title: 'ADR Deviation Platform',
      summary:
        'Evidence-first service for detecting inconsistencies between architectural decisions, technical specs, and implementation changes. Living design notebook, contracts, PoC analysis workflow, and public docs for Project Pathfinder—the ADR deviation half of the Pathfinder pair.',
      skills: ['Go', 'Architecture', 'AI pipelines', 'Protobuf/gRPC'],
      link: 'https://github.com/tyler-beach/Platform',
    },
    {
      kind: 'PROJECT PATHFINDER',
      title: 'Architecture Governance Platform',
      summary:
        'Backstage-hosted user platform for managing decisions: Governance Nodes, ADRs, Intent Engine, playbooks, multi-team RFCs, search, and an AI assistant. The companion UI to the ADR Deviation Platform—together they form Project Pathfinder.',
      skills: ['Backstage', 'TypeScript', 'Postgres/pgvector', 'Governance'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
    },
    {
      kind: 'SECURITY / OPS',
      title: 'GitHub Dashboard',
      summary:
        'React dashboard for monitoring org repositories, teams, compliance, and security findings (Code Scanning, Secrets, Dependabot) with local caching to cut GitHub API load.',
      skills: ['React', 'TypeScript', 'Octokit', 'IndexedDB'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      kind: 'SECURITY / CLI',
      title: 'GitHub Findings Manager',
      summary:
        'High-performance Go CLI that collects SAST, secret scanning, and Dependabot findings across org repos, with filtering, SQLite caching, Excel reporting, and GitHub Actions automation.',
      skills: ['Go', 'GitHub API', 'Excel reports', 'Actions'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      kind: 'SECURE CODING',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary:
        'Cursor coding rules aligned to the R.A.I.L.G.U.A.R.D. framework—practical guardrails that help AI-assisted development stay security-aware by default.',
      skills: ['Secure coding', 'Cursor rules', 'Developer enablement'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};
