// ============================================================================
// EXAMPLE SITE — filled-out personal example of the workshop resume layout.
// Content is illustrative. Students use one profile.js and leave unused
// sections as []. Projects with `slug` get /projects/<slug>/ pages.
// ============================================================================

const shared = {
  name: 'Tyler Beach',
  photo: '/photo.jpg',
  resume: '/resume.pdf',
  email: 'tylerxbeach@gmail.com',
  github: 'https://github.com/tyler-beach',
  linkedin: 'https://www.linkedin.com/in/tylerxbeach',
  location: 'Wichita, Kansas',
};

/** Early student: classes, campus work, side projects — no internship yet. */
export const studentProfile = {
  ...shared,
  theme: 'student',
  stageLabel: 'Student example',
  role: 'MIS & Cybersecurity Student',
  tagline: 'Learning security and systems by building small, useful projects.',
  about:
    'Undergraduate focused on management information systems and cybersecurity. Most of my experience so far is coursework, campus involvement, and personal projects. I like turning class assignments into things I can show and explain.',
  badge: 'Looking for internships',
  skills: [
    'Python',
    'SQL',
    'Networking basics',
    'Linux',
    'Git & GitHub',
    'Technical writing',
    'Risk fundamentals',
  ],
  education: [
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: 'In progress',
    },
    {
      school: 'Cowley College',
      degree: 'A.A. Information Assurance · A.S. Computer Science',
      detail: 'Completed',
    },
  ],
  coursework: [
    {
      title: 'Secure Coding Practices',
      detail: 'Threats, input validation, and safer defaults in web apps.',
    },
    {
      title: 'Network Security',
      detail: 'Segmentation, monitoring basics, and lab-based attack/defense scenarios.',
    },
    {
      title: 'Systems Analysis & Design',
      detail: 'Requirements, process mapping, and stakeholder communication.',
    },
    {
      title: 'Database Management',
      detail: 'Relational modeling, SQL queries, and access control concepts.',
    },
  ],
  activities: [
    {
      title: 'Cyber Club Member',
      organization: 'Campus technology club',
      detail: 'Weekly labs, capture-the-flag practice, and peer study sessions.',
    },
    {
      title: 'Volunteer Help Desk',
      organization: 'Community nonprofit',
      detail: 'Helped staff with device setup, password resets, and basic security hygiene.',
    },
    {
      title: 'Guest workshop attendee',
      organization: 'Local tech meetups',
      detail: 'Notes from talks on cloud, AppSec, and career paths in security.',
    },
  ],
  experience: [],
  certifications: [],
  honors: [{ title: 'Dean’s List', detail: 'Selected terms' }],
  interests: ['Teaching others what I just learned', 'Home lab tinkering', 'Writing clear docs'],
  learning: ['Web app security labs', 'GitHub Actions basics'],
  projects: [
    {
      slug: 'campus-resource-finder',
      title: 'Campus Resource Finder',
      summary: 'Class project: a simple site concept that helps students find tutoring and advising services.',
      description:
        'Built as a course deliverable. Focused on clear navigation, mobile layout, and writing up the research notes behind the information architecture.',
      highlights: [
        'Information architecture from student interviews',
        'Responsive layout and accessibility checklist',
        'Short write-up of decisions for the final presentation',
      ],
      skills: ['HTML', 'CSS', 'User research'],
      link: 'https://github.com/tyler-beach',
      screenshots: [
        {
          src: '/projects/campus-resource-finder-1.svg',
          alt: 'Search screen with tutoring and advising cards',
          caption: 'Search-first home view with service cards.'
        },
        {
          src: '/projects/campus-resource-finder-2.svg',
          alt: 'Writing center detail card',
          caption: 'Service detail with hours and next actions.'
        }
      ],
    },
    {
      slug: 'home-lab-notes',
      title: 'Home Lab Notes',
      summary: 'Personal notes and diagrams from standing up a small Linux lab at home.',
      description:
        'Documented virtual machines, basic networking, and the commands I reused most often so future-me (and classmates) could follow along.',
      highlights: [
        'Repeatable setup checklist',
        'Screenshots and short explanations',
        'Shared with classmates as a study aid',
      ],
      skills: ['Linux', 'Networking', 'Documentation'],
      link: 'https://github.com/tyler-beach',
      screenshots: [
        {
          src: '/projects/home-lab-notes-1.svg',
          alt: 'Home lab network diagram',
          caption: 'Network sketch and terminal checklist.'
        }
      ],
    },
    {
      slug: 'secure-setup-checklist',
      title: 'Secure Setup Checklist',
      summary: 'A short checklist for safer project setup before a class demo or team handoff.',
      description:
        'Collected common mistakes from labs (secrets in repos, weak defaults, missing updates) into a one-page checklist teammates could reuse.',
      highlights: [
        'Secrets and .gitignore reminders',
        'Dependency and update checks',
        'Written for beginners, not auditors',
      ],
      skills: ['Security basics', 'Git', 'Documentation'],
      link: 'https://github.com/tyler-beach',
      screenshots: [
        {
          src: '/projects/secure-setup-checklist-1.svg',
          alt: 'Secure setup checklist',
          caption: 'Checklist used before demos and handoffs.'
        }
      ],
    },
  ],
};

/** Mid journey: internship + stronger projects, still early career. */
export const emergingProfile = {
  ...shared,
  theme: 'emerging',
  stageLabel: 'Emerging example',
  role: 'IT Risk Analyst · Aspiring AppSec Engineer',
  tagline: 'Internship experience plus security projects I can walk through end to end.',
  about:
    'Early-career security professional with an internship in IT risk, hands-on class and personal projects, and a growing interest in application security. Comfortable explaining risk to non-security teammates and shipping small tools that remove busywork.',
  badge: 'Open to AppSec roles',
  skills: [
    'Risk assessments',
    'Security reviews',
    'Python',
    'SQL',
    'GitHub',
    'Secure SDLC basics',
    'Technical writing',
  ],
  education: [
    {
      school: 'Friends University',
      degree: 'M.S. Cyber Security',
      detail: 'In progress',
    },
    {
      school: 'Wichita State University',
      degree: 'B.B.A. Management Information Systems',
      detail: 'Completed',
    },
  ],
  coursework: [],
  activities: [],
  experience: [
    {
      title: 'IT Risk Intern',
      organization: 'Regional manufacturing company',
      date: 'Summer 2018',
      summary:
        'Supported risk assessments, control evidence gathering, and security review meetings with IT and operations partners.',
      highlights: [
        'Drafted findings and remediation notes for two business applications.',
        'Built a simple tracker so the team could see open risks by owner.',
      ],
    },
    {
      title: 'Student Developer',
      organization: 'Nonprofit Solutions (contract / campus-adjacent)',
      date: '2017–2018',
      summary:
        'Helped maintain internal .NET tools and documentation used by nonprofit staff.',
      highlights: [
        'Fixed bugs and wrote setup notes for non-technical users.',
      ],
    },
  ],
  certifications: [
    {
      name: 'CompTIA Security+ (example)',
      issuer: 'CompTIA',
      detail: '',
    },
  ],
  honors: [{ title: 'Eagle Scout', detail: '' }],
  interests: ['Application security', 'Developer enablement', 'Mentoring students'],
  learning: ['SAST triage', 'Threat modeling worksheets'],
  projects: [
    {
      slug: 'github-findings-manager',
      title: 'GitHub Findings Manager',
      summary: 'Go CLI that collects org security findings and writes Excel reports.',
      description:
        'Built to practice API automation: parallel collection, rate limiting, and a report security teammates can open without another dashboard login.',
      highlights: [
        'Worker pools with rate limiting',
        'Excel output for weekly reviews',
        'GitHub Actions workflow for scheduled runs',
      ],
      skills: ['Go', 'GitHub API', 'Actions'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
      screenshots: [
        {
          src: '/projects/github-findings-manager-1.svg',
          alt: 'Findings spreadsheet export',
          caption: 'Weekly findings export for security review.'
        }
      ],
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
      screenshots: [
        {
          src: '/projects/github-dashboard-1.svg',
          alt: 'Repository health dashboard',
          caption: 'Org view for alerts, ownership, and failing checks.'
        }
      ],
    },
    {
      slug: 'railguard-cursor-rules',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary: 'Cursor rules that keep AI-assisted coding security-aware.',
      description:
        'A small rules pack for day-to-day secure development with coding assistants — meant as a starting point teams can fork.',
      highlights: [
        'Mapped to a secure-coding framework',
        'Focused on habits teams can adopt quickly',
      ],
      skills: ['Secure coding', 'Cursor rules'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
      screenshots: [
        {
          src: '/projects/railguard-cursor-rules-1.svg',
          alt: 'Rules checklist concept',
          caption: 'Habit checklist style for secure AI-assisted coding.'
        }
      ],
    },
    {
      slug: 'secure-setup-checklist',
      title: 'Secure Setup Checklist',
      summary: 'Reusable checklist carried forward from school into internship onboarding.',
      description:
        'Expanded the student checklist with internship lessons: ticket hygiene, evidence folders, and how to ask better review questions.',
      highlights: ['Onboarding-friendly language', 'Pairs with risk review notes'],
      skills: ['Documentation', 'Risk'],
      link: 'https://github.com/tyler-beach',
    },
  ],
};

/** Full resume: denser professional profile. */
export const professionalProfile = {
  ...shared,
  theme: 'professional',
  stageLabel: 'Professional example',
  role: 'Security Architect · Product Security · AI-Enabled Security Automation',
  tagline:
    'Application security, product security, and practical architecture reviews that help teams ship securely without unnecessary friction.',
  about:
    'Security architect and former software engineer. I help organizations build secure products at scale across healthcare, manufacturing, SaaS, and nonprofit technology — spanning cloud-native, hybrid, and on-prem environments (AWS, Azure, Kubernetes, OT, and regulated product ecosystems). I partner with engineers, product teams, and leadership on application security, product security, security architecture, threat modeling, secure SDLC, GRC, and developer enablement. I also teach cybersecurity as an adjunct professor at Wichita State University.',
  badge: '',
  skills: [
    'Application Security',
    'Product Security',
    'Security Architecture',
    'Threat Modeling',
    'Secure SDLC',
    'Cloud Security',
    'DevSecOps',
    'Security Automation',
    'AI-Enabled Security Engineering',
    'Developer Enablement',
    'Risk Management',
    'GRC',
    'Software Development',
    'Agile & Waterfall',
  ],
  education: [
    {
      school: 'Friends University',
      degree: 'Master of Science (M.S.), Cyber Security',
      detail: '2016–2018',
    },
    {
      school: 'Wichita State University',
      degree: 'Bachelor of Business Administration (B.B.A.), Management Information Systems',
      detail: '2014–2016',
    },
    {
      school: 'Cowley College',
      degree: 'A.A. Information Assurance · A.S. Computer Science',
      detail: '2012–2014',
    },
  ],
  coursework: [],
  activities: [],
  careerHighlights: [
    'Built secure software development practices that influenced 1,000+ developers across 3,000+ applications serving 70+ countries.',
    'Led AppSec supporting global manufacturing modernization and connected operational technology initiatives.',
    'Designed AI-enabled security automation that identifies architecture design variances against approved ADRs and surfaces context-aware feedback in pull request workflows.',
    'Integrated security tooling into CI/CD to improve developer workflows and accelerate remediation.',
    'Designed a scalable remediation strategy focused on the most critical findings, improving regulatory vulnerability SLA compliance.',
  ],
  experience: [
    {
      title: 'Senior Application Security Architect',
      organization: 'Datavant',
      date: 'Nov 2024–Present',
      summary:
        'Security architecture and secure delivery with product, engineering, cloud, and platform teams across AWS, Azure, Kubernetes, CI/CD, and identity-driven healthcare ecosystems.',
      highlights: [
        'Provide security architecture guidance, threat modeling, architecture reviews, and remediation support for products supporting provider workflows, release of information, and healthcare data operations in regulated environments.',
        'Design and implement security automation that reduces friction for engineering teams and strengthens architectural governance through AI-enabled analysis.',
        'Lead a scalable remediation program focused on the highest-priority findings, improving vulnerability management performance and regulatory SLA compliance.',
        'Support security integration after M&A, aligning practices, governance expectations, and architectural standards across acquired business units.',
      ],
    },
    {
      title: 'Adjunct Professor',
      organization: 'Wichita State University',
      date: 'Jan 2024–Present',
      summary: '',
      highlights: [
        'Built the curriculum from the ground up: foundational concepts plus hands-on labs with industry tools and real-world scenarios.',
        'Teach application security, network security, access control, cryptography, data protection, host hardening, and information security risk management.',
        'Run an experiential model where students operate as security consultants for simulated organizations and present a final consultant demonstration.',
        'Mentor students through the WSU MIS community via guest lectures, industry guidance, and career mentorship.',
      ],
    },
    {
      title: 'Senior Application Security Engineer',
      organization: 'Cargill',
      date: 'Jul 2020–Nov 2024',
      summary:
        'Primary AppSec resource for major product and digital transformation programs, including global manufacturing modernization and Factory of the Future.',
      highlights: [
        'Enhanced secure software development practices influencing 1,000+ developers and security outcomes across 3,000+ applications serving 70+ countries.',
        'Partnered with engineering, DevOps, cloud, and vendors to modernize CI/CD security (SAST/SCA) across hybrid, cloud, and OT environments.',
        'Provided architecture guidance, threat modeling, architecture reviews, pen-test support, and remediation strategy for high-visibility products including CARVE and CHEKT.',
        'Built operational metrics and maturity indicators for product security performance and remediation progress; communicated risk to engineering through C-level leaders.',
      ],
    },
    {
      title: 'Information Technology Risk Analyst',
      organization: 'Cargill',
      date: 'Oct 2018–Jul 2020',
      summary:
        'Business-facing security and risk support for global IT and operational technology environments supporting manufacturing operations.',
      highlights: [
        'Led and supported risk assessments, security reviews, audits, compliance initiatives, remediation management, and control governance across global business segments.',
        'Acted as the technical go-to for the team with business stakeholders, engineering, and security leadership.',
        'Helped design and mature governance programs, security standards, and control frameworks aligned to business, regulatory, and operational requirements.',
        'Conducted reviews across hybrid, on-premises, and OT environments, including infrastructure, network, and third-party assessments.',
      ],
    },
    {
      title: 'Advisory Board Member',
      organization: 'Starkey Inc',
      date: '2022–2024',
      summary:
        'Technology advisory board member focused on technology direction, workforce readiness, and industry-aligned initiatives.',
      highlights: [
        'Partnered with leadership on technology strategy, emerging trends, and strengthening technical programs.',
        'Helped bridge industry and community technology initiatives through advisory engagement.',
      ],
    },
    {
      title: 'Software Developer',
      organization: 'Nonprofit Solutions, Inc.',
      date: 'Mar 2016–Oct 2018',
      summary:
        'Full-stack .NET developer and primary technical resource for multi-agency nonprofit application architecture, development, and platform enhancement.',
      highlights: [
        'Built a multi-agency CRM and internal apps for ticketing, time tracking, onboarding/access, directory services, vehicle management, and process automation.',
        'Designed secure digital workflows that replaced paper-based foster care and behavioral health processes with auditable, HIPAA-aligned applications.',
        'Delivered general IT and security awareness training across distributed teams.',
      ],
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
    'Teaching and mentoring future technology leaders',
    'Architecture decision records and secure architecture governance',
    'Guest lecturing and advisory engagement',
    'AI-enabled security engineering',
  ],
  learning: ['Backstage plugins', 'Protobuf / gRPC', 'AI-assisted architecture review workflows'],
  projects: [
    {
      slug: 'adr-deviation-platform',
      title: 'ADR Deviation Platform',
      summary:
        'AI-enabled checks for whether shipped code still matches approved architecture decision records — context-aware feedback in PR workflows.',
      description:
        'Part of Project Pathfinder (with the Architecture Governance Platform). Compares ADRs to implementation so reviewers share evidence when design drifts. Built to scale security architecture review with automation rather than ticket queues alone.',
      images: ['/projects/pathfinder-home.jpg', '/projects/pathfinder-arch.jpg'],
      highlights: [
        'Public docs and walkthrough at tyler-beach.github.io/Platform',
        'Contracts and reviewable findings tied back to ADRs',
        'Designed for developer-facing feedback inside pull requests',
      ],
      skills: ['Go', 'Architecture', 'Protobuf', 'AI-assisted review'],
      link: 'https://github.com/tyler-beach/Platform',
      demo: 'https://tyler-beach.github.io/Platform/',
    },
    {
      slug: 'architecture-governance-platform',
      title: 'Architecture Governance Platform',
      summary:
        'Backstage workspace for ADRs, RFCs, playbooks, and multi-team decision tracking — the Pathfinder companion to the deviation service.',
      description:
        'Gives product and platform teams one place for governance nodes, ADRs, playbooks, and RFCs. Pairs with the ADR Deviation Platform so approved decisions and runtime evidence stay connected.',
      highlights: [
        'ADRs, intent, and playbooks in one Backstage shell',
        'Search and assistant features with local Postgres',
        'Supports architectural governance at product-team scale',
      ],
      skills: ['Backstage', 'TypeScript', 'Postgres'],
      link: 'https://github.com/skyeshanohan/ADR_Backstage',
      screenshots: [
        {
          src: '/projects/architecture-governance-platform-1.svg',
          alt: 'Governance workspace concept',
          caption: 'Concept for ADR and RFC tracking in one place.',
        },
      ],
    },
    {
      slug: 'github-dashboard',
      title: 'GitHub Dashboard',
      summary: 'Org view of repos, compliance checks, and security findings for developer enablement.',
      description:
        'React dashboard that uses a GitHub PAT, caches data locally, and surfaces Code Scanning, Secrets, and Dependabot findings with ownership context — built to make org security posture visible without another siloed tool.',
      highlights: [
        'Local caching to reduce API calls',
        'Filters by custom repository properties',
        'Ownership context for Code Scanning, Secrets, and Dependabot',
      ],
      skills: ['React', 'TypeScript', 'Octokit'],
      link: 'https://github.com/tyler-beach/github-dashboard',
    },
    {
      slug: 'github-findings-manager',
      title: 'GitHub Findings Manager',
      summary: 'Go CLI that collects org security findings and writes Excel reports for remediation tracking.',
      description:
        'Parallel collector with rate limiting and SQLite caching, plus a GitHub Actions workflow for scheduled runs — geared toward vulnerability management and SLA-oriented remediation programs.',
      highlights: [
        'Worker pools with rate limiting',
        'Excel reporting for security and engineering partners',
        'Scheduled collection via GitHub Actions',
      ],
      skills: ['Go', 'GitHub API', 'Actions'],
      link: 'https://github.com/tyler-beach/github-findings-manager',
    },
    {
      slug: 'railguard-cursor-rules',
      title: 'R.A.I.L.G.U.A.R.D. Cursor Rules',
      summary: 'Cursor rules that keep AI-assisted coding security-aware for day-to-day developer enablement.',
      description:
        'A small rules pack aligned to the R.A.I.L.G.U.A.R.D. framework so teams using coding assistants keep secure defaults and review habits in the loop.',
      highlights: [
        'Mapped to an open secure-coding framework',
        'Meant as a starting point teams can fork',
      ],
      skills: ['Secure coding', 'Cursor rules', 'Developer enablement'],
      link: 'https://github.com/tyler-beach/railguard-cursor-coding',
    },
  ],
};

export const stages = {
  student: studentProfile,
  emerging: emergingProfile,
  professional: professionalProfile,
};

/** Single example profile shown on the home page. */
export const profile = professionalProfile;

export function allProjects() {
  const bySlug = new Map();
  for (const stage of Object.values(stages)) {
    for (const project of stage.projects ?? []) {
      if (project.slug && !bySlug.has(project.slug)) {
        bySlug.set(project.slug, project);
      }
    }
  }
  return [...bySlug.values()];
}
