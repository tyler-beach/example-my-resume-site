// ============================================================================
 // PERSONALIZE THIS FILE
 // Theme toggle on the live site can switch Editorial / Developer / Professional.
 // Only publish information you are comfortable making public.
 // ============================================================================

export const profile = {
  // Default theme when no ?theme= or localStorage value is set.
  theme: 'editorial',

  photo: '/photo.jpg',
  resume: '/resume.pdf',

  badge: 'Available for collaboration',

  name: 'Tyler Beach',
  role: 'Security Architect · Product Security · AI-Enabled Security Automation',
  location: 'Wichita, Kansas',
  tagline: 'I help organizations build secure products at scale without unnecessary friction for engineering teams.',
  about:
    'I am a security architect and former software engineer focused on application security, product security, and AI-enabled architectural governance. My background spans healthcare, manufacturing, SaaS, and nonprofit technology, working with engineers, product teams, and executive leadership to improve security outcomes while enabling teams to move quickly. I have worked across cloud-native, hybrid, and on-prem environments—including AWS, Azure, Kubernetes, operational technology, and regulated product ecosystems—and I teach as an adjunct professor at Wichita State University.',

  email: 'tylerxbeach@gmail.com',
  github: 'https://github.com/tyler-beach',
  linkedin: 'https://www.linkedin.com/in/tylerxbeach',

  skills: [
    'Application Security',
    'Product Security',
    'Security Architecture',
    'Secure SDLC',
    'Threat Modeling',
    'Cloud Security',
    'DevSecOps',
    'Security Automation',
    'AI-Enabled Security Engineering',
    'Governance, Risk & Compliance',
    'Developer Enablement',
  ],

  careerHighlights: [
    'Built secure software development practices that influenced more than 1,000 developers across 3,000+ applications serving 70+ countries.',
    'Led application security efforts supporting global manufacturing modernization and connected operational technology initiatives.',
    'Designed AI-enabled automation that identifies architecture design variances against approved ADRs and surfaces feedback in pull request workflows.',
    'Designed remediation programs focused on the most critical findings, improving regulatory vulnerability SLA compliance.',
    'Integrated security tooling into CI/CD pipelines to improve developer workflows and accelerate remediation.',
  ],

  education: [
    {
      school: 'Friends University',
      degree: 'Master of Science, Cyber Security',
      detail: '2016–2018',
    },
    {
      school: 'Wichita State University',
      degree: 'Bachelor of Business Administration, Management Information Systems',
      detail: '2014–2016',
    },
    {
      school: 'Cowley College',
      degree: 'Associate of Arts, Information Assurance',
      detail: '2012–2014',
    },
    {
      school: 'Cowley College',
      degree: 'Associate of Science, Computer Science',
      detail: '2012–2014',
    },
  ],

  certifications: [
    {
      name: 'GIAC Certified Penetration Tester (GPEN)',
      issuer: 'GIAC',
      detail: 'Offensive security and penetration testing',
    },
  ],

  honors: [
    { title: 'Maurer Leadership Award', detail: 'Leadership recognition' },
    { title: 'Eagle Scout', detail: 'Boy Scouts of America' },
  ],

  interests: [
    'Teaching and mentoring future technology leaders',
    'AI-enabled security engineering',
    'Architecture decision records and governance',
    'Guest lecturing and advisory work',
  ],

  learning: [
    'Backstage plugin ecosystems',
    'Evidence-first AI evaluation',
    'Contract-first API design with Protobuf and gRPC',
  ],

  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Partner across product, engineering, cloud, and platform teams to strengthen security architecture and scale secure delivery in regulated healthcare environments.',
      highlights: [
        'Provide threat modeling, architecture reviews, and remediation support across AWS, Azure, Kubernetes, CI/CD, and identity-driven application ecosystems.',
        'Design AI-enabled security automation that reduces friction for engineers and strengthens architectural governance.',
        'Lead remediation programs focused on the highest-priority findings and regulatory vulnerability SLA performance.',
        'Support security integration after M&A activity, aligning practices and architectural standards across acquired units.',
      ],
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University · Barton School of Business',
      date: 'Jan 2024–Present',
      summary:
        'Created and teach the Barton School’s first cybersecurity course, now established as graduate course MIS 711.',
      highlights: [
        'Designed curriculum combining foundational cybersecurity concepts with hands-on technical application.',
        'Teach application security, network security, access control, cryptography, data protection, host hardening, and risk management.',
        'Run an experiential model where students operate as security consultants for simulated organizations.',
        'Mentor students through the MIS community with guest lectures and career guidance.',
      ],
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary:
        'Primary technical AppSec resource for major product and digital transformation initiatives across global manufacturing and enterprise environments.',
      highlights: [
        'Led AppSec for Factory of the Future and connected OT/enterprise technology modernization.',
        'Revitalized secure SDLC practices influencing 1,000+ developers across 3,000+ applications in 70+ countries.',
        'Modernized CI/CD security workflows across hybrid, cloud, and OT environments, shaping SAST and SCA capabilities.',
        'Supported high-visibility products including CARVE and CHEKT with architecture reviews, threat modeling, and remediation strategy.',
      ],
    },
    {
      title: 'Information Technology Risk Analyst',
      organization: 'Cargill',
      date: 'Oct 2018–Jul 2020',
      summary:
        'Business-facing security resource supporting global segments across the IT and operational technology risk and controls lifecycle.',
      highlights: [
        'Led and supported risk assessments, security reviews, audits, compliance work, and remediation management.',
        'Helped mature governance programs, security standards, and control frameworks for manufacturing operations.',
        'Conducted reviews across hybrid, on-premises, and OT environments, including third-party assessments.',
      ],
    },
    {
      title: 'Advisory Board Member',
      organization: 'Starkey Inc',
      date: '2022–2024',
      summary:
        'Provided strategic guidance on technology direction, workforce readiness, and industry-aligned technology initiatives.',
      highlights: [
        'Partnered with leadership on technology strategy and emerging trends.',
        'Helped bridge industry and community technology initiatives with long-term planning focus.',
      ],
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: 'Mar 2016–Oct 2018',
      summary:
        'Designed, built, and maintained full-stack .NET applications supporting multi-agency nonprofit operations.',
      highlights: [
        'Built a multi-agency CRM and internal apps for ticketing, time tracking, access management, directory services, and process automation.',
        'Transformed paper-based foster care and behavioral health workflows into HIPAA-aligned digital processes.',
        'Delivered IT and security awareness training across distributed teams.',
      ],
    },
  ],

  projects: [
    {
      kind: 'Project Pathfinder',
      title: 'ADR Deviation Platform',
      summary:
        'Evidence-first platform for detecting inconsistencies between architectural decisions, technical specifications, and implementation changes. Living design notebook, contracts, PoC analysis workflow, and public documentation for the ADR deviation side of Project Pathfinder.',
      skills: ['Go', 'Architecture', 'AI pipelines', 'Protobuf / gRPC'],
      link: 'https://github.com/tyler-beach/Platform',
    },
    {
      kind: 'Project Pathfinder',
      title: 'Architecture Governance Platform',
      summary:
        'Backstage-hosted platform for managing decisions: Governance Nodes, ADRs, Intent Engine, playbooks, multi-team RFCs, search, and an AI assistant. The companion user platform to the ADR Deviation Platform.',
      skills: ['Backstage', 'TypeScript', 'Postgres / pgvector', 'Governance'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
    },
    {
      kind: 'Security operations',
      title: 'GitHub Dashboard',
      summary:
        'React dashboard for monitoring organization repositories, teams, compliance, and security findings from Code Scanning, Secret Scanning, and Dependabot, with local caching to reduce API load.',
      skills: ['React', 'TypeScript', 'Octokit', 'IndexedDB'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      kind: 'Security operations',
      title: 'GitHub Findings Manager',
      summary:
        'High-performance Go CLI that collects SAST, secret scanning, and Dependabot findings across organization repositories, with filtering, caching, Excel reporting, and GitHub Actions automation.',
      skills: ['Go', 'GitHub API', 'Excel reporting', 'Actions'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      kind: 'Secure coding',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary:
        'Cursor coding rules aligned to the R.A.I.L.G.U.A.R.D. framework—practical guardrails that help AI-assisted development stay security-aware by default.',
      skills: ['Secure coding', 'Developer enablement', 'Cursor rules'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};
