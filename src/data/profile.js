// ============================================================================
 // PERSONALIZE THIS FILE
 // Theme toggle switches Editorial / Developer / Professional.
 // Projects with a `slug` get a case-study page at /projects/<slug>/.
 // Put screenshots in public/projects/ and reference them from `cover` / `images`.
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

  // Wide experience rows: short summary + up to two supporting points.
  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Partner across product, engineering, and platform teams on security architecture and secure delivery in regulated healthcare environments.',
      highlights: [
        'Lead threat modeling, architecture reviews, and remediation across cloud, Kubernetes, and CI/CD ecosystems.',
        'Design AI-enabled automation that strengthens architectural governance without slowing engineering teams.',
      ],
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University',
      date: 'Jan 2024–Present',
      summary:
        'Created and teach MIS 711, the Barton School’s graduate cybersecurity course.',
      highlights: [
        'Built the curriculum from the ground up with hands-on labs and consultant-style student projects.',
        'Mentor MIS students through guest lectures, industry guidance, and career development.',
      ],
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary:
        'Primary AppSec lead for digital transformation and manufacturing modernization initiatives.',
      highlights: [
        'Influenced secure SDLC practices across 1,000+ developers and 3,000+ applications in 70+ countries.',
        'Modernized CI/CD security workflows across hybrid, cloud, and operational technology environments.',
      ],
    },
    {
      title: 'IT Risk Analyst',
      organization: 'Cargill',
      date: 'Oct 2018–Jul 2020',
      summary:
        'Business-facing security and risk support across global IT and operational technology environments.',
      highlights: [
        'Led risk assessments, security reviews, audit support, and control governance for manufacturing operations.',
      ],
    },
    {
      title: 'Advisory Board Member',
      organization: 'Starkey Inc',
      date: '2022–2024',
      summary: 'Advised leadership on technology direction, workforce readiness, and long-term program strategy.',
      highlights: [
        'Connected industry perspective with community technology initiatives and planning.',
      ],
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: '2016–2018',
      summary:
        'Built full-stack .NET applications supporting multi-agency nonprofit operations.',
      highlights: [
        'Delivered a multi-agency CRM and HIPAA-aligned digital workflows for foster care and behavioral health.',
      ],
    },
  ],

  // Projects with `slug` generate /projects/<slug>/ case-study pages.
  projects: [
    {
      slug: 'adr-deviation-platform',
      kind: 'Project Pathfinder',
      title: 'ADR Deviation Platform',
      summary:
        'Evidence-first checks that compare architectural decisions to what actually ships.',
      cover: '/projects/pathfinder-adr.svg',
      images: ['/projects/pathfinder-home.jpg', '/projects/pathfinder-arch.jpg'],
      problem:
        'Teams approve architecture decisions, then implementation drifts—and reviewers lack shared evidence when that happens.',
      approach:
        'Built an evidence-first analysis platform with contracts, PoC workflows, and reviewable findings tied back to ADRs and source changes.',
      outcome:
        'A living design notebook and demo site that shows how Pathfinder turns intent into reviewable architecture assurance.',
      highlights: [
        'Public docs and interactive walkthrough at tyler-beach.github.io/Platform',
        'Go-oriented analysis direction with Protobuf contracts and AI-assisted assessment',
        'Pairs with the Architecture Governance Platform as Project Pathfinder',
      ],
      skills: ['Go', 'Architecture', 'AI pipelines', 'Protobuf / gRPC'],
      link: 'https://github.com/tyler-beach/Platform',
      demo: 'https://tyler-beach.github.io/Platform/',
    },
    {
      slug: 'architecture-governance-platform',
      kind: 'Project Pathfinder',
      title: 'Architecture Governance Platform',
      summary:
        'Backstage workspace for ADRs, governance nodes, RFCs, and decision management.',
      cover: '/projects/pathfinder-governance.svg',
      images: ['/projects/pathfinder-governance.svg'],
      problem:
        'Architecture decisions live in scattered docs, so teams cannot manage approvals, intent, and related ADRs in one place.',
      approach:
        'Extended Backstage into a governance platform with nodes, ADRs, playbooks, multi-team RFCs, search, and an AI assistant.',
      outcome:
        'A companion user platform for the ADR Deviation service—together they form Project Pathfinder.',
      highlights: [
        'Governance Nodes, ADRs, Intent Engine, and playbooks in one shell',
        'Multi-team RFC flows with per-ADR checks',
        'Local Postgres / pgvector setup for search and assistant features',
      ],
      skills: ['Backstage', 'TypeScript', 'Postgres / pgvector', 'Governance'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
    },
    {
      slug: 'github-dashboard',
      kind: 'Security ops',
      title: 'GitHub Dashboard',
      summary: 'Org-wide view of repos, compliance, and security findings with local caching.',
      cover: '/projects/github-dashboard.svg',
      images: ['/projects/github-dashboard.svg'],
      problem:
        'Security and platform teams burn GitHub API quota jumping between alerts, CODEOWNERS, and compliance checks.',
      approach:
        'Built a React dashboard that authenticates with a PAT, caches data locally, and surfaces findings with ownership context.',
      outcome:
        'Faster triage of Code Scanning, Secrets, and Dependabot findings across filtered repository sets.',
      highlights: [
        'IndexedDB caching to cut repeat API calls',
        'Filters by custom properties such as Pod and EnvironmentType',
        'Compliance checks for production repositories',
      ],
      skills: ['React', 'TypeScript', 'Octokit', 'IndexedDB'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      slug: 'github-findings-manager',
      kind: 'Security ops',
      title: 'GitHub Findings Manager',
      summary: 'Go CLI that collects and reports organization security findings at scale.',
      cover: '/projects/findings-manager.svg',
      images: ['/projects/findings-manager.svg'],
      problem:
        'Manual exports of SAST, secrets, and Dependabot alerts do not scale across large organizations.',
      approach:
        'Built a parallel Go collector with rate limiting, SQLite caching, and Excel reporting, plus Actions automation.',
      outcome:
        'Repeatable findings reports that security teams can schedule and share.',
      highlights: [
        'Worker pools with rate limiting for GitHub API collection',
        'Excel dashboards with trend-friendly reporting',
        'GitHub Actions workflow for automated releases',
      ],
      skills: ['Go', 'GitHub API', 'Excel reporting', 'Actions'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      slug: 'railguard-cursor-rules',
      kind: 'Secure coding',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary: 'Cursor rules that keep AI-assisted coding security-aware by default.',
      cover: '/projects/railguard.svg',
      images: ['/projects/railguard.svg'],
      problem:
        'AI coding assistants move fast and can skip security guardrails unless those expectations are encoded in the workflow.',
      approach:
        'Packaged practical Cursor rules aligned to the R.A.I.L.G.U.A.R.D. framework for day-to-day secure development.',
      outcome:
        'A reusable starting point for teams adopting AI-assisted coding with security defaults.',
      highlights: [
        'Mapped to the open R.A.I.L.G.U.A.R.D. framework',
        'Focused on developer enablement rather than tooling theatre',
      ],
      skills: ['Secure coding', 'Developer enablement', 'Cursor rules'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};
