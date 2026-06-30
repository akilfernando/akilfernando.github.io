export const experience = [
  {
    start: 'Mar 2026',
    end: 'Present',
    role: 'IT Systems and Cybersecurity Lead',
    org: 'Teams Squared',
    location: 'Colombo, Sri Lanka',
    summary:
      'Microsoft-stack MSP: ~15 internal staff supporting ~100 contractors across ~75 clients, with primary markets in Australia and the Philippines.',
    highlights: [
      'Lead IAM administration on Microsoft Entra ID: MFA, Conditional Access, app registrations, and identity governance.',
      'Administer the Microsoft 365 tenant, endpoint security (Bitdefender GravityZone), and RMM (NinjaOne) across the contractor base.',
      'Hardened security posture, monitoring, and access controls across a distributed MSP environment.',
      'Drove the organization-wide ISO 27001 ISMS implementation (in progress, 2026).',
      'Sole-authored internal platforms and led an inherited production client portal.',
    ],
  },
  {
    start: 'Apr 2024',
    end: 'Aug 2024',
    role: 'Gameplay Programmer (Co-op)',
    org: 'Ubisoft Halifax',
    location: 'Halifax, NS',
    summary: 'Gameplay programming in Unity and C# on a production team.',
    highlights: [
      'Built Cinemachine camera systems, behavior-tree AI, and NavMesh and hex-grid targeting.',
      'Maya character pipeline work and custom debug tooling.',
    ],
  },
];

export const education = [
  {
    start: '',
    end: 'Oct 2025',
    role: 'BSc Computer Science (Co-op), GPA 3.92',
    org: 'Dalhousie University',
    location: 'Halifax, NS',
    summary:
      'Undergraduate certificates in Communications Technology and Cyber Security, and in Web and Mobile Development. Sexton Scholar, Dean’s List (multiple terms), and Dalhousie In-Course Scholarship (2025).',
  },
];

export const certifications = [
  'ISO 27001 ISMS Officer (in progress, 2026)',
  'Microsoft Identity and Access Administrator, SC-300 (in progress)',
];

export const skills = [
  {
    group: 'Identity & security',
    items: ['Entra ID', 'IAM', 'MFA', 'Conditional Access', 'identity governance', 'ISO 27001 ISMS', 'Bitdefender GravityZone'],
  },
  {
    group: 'Infrastructure',
    items: ['Microsoft 365', 'NinjaOne RMM', 'endpoint management', 'MSP operations'],
  },
  {
    group: 'Development',
    items: ['TypeScript', 'React', 'Next.js', 'Python (FastAPI, Flask)', 'Prisma', 'PostgreSQL', 'Supabase', 'Drizzle ORM', 'MERN', 'NextAuth'],
  },
  {
    group: 'Game & graphics',
    items: ['Unity', 'C#', 'Cinemachine', 'behavior trees', 'NavMesh', 'Maya', 'C++', 'Vulkan', 'OpenGL'],
  },
  {
    group: 'Tools',
    items: ['Claude Code', 'Playwright', 'Git'],
  },
];

// Field-tailored CVs. The visitor picks the lens that fits them.
export const cvs = [
  { field: 'Software', file: '/cv/akil-fernando-software.pdf' },
  { field: 'Game dev', file: '/cv/akil-fernando-gamedev.pdf' },
  { field: 'Cybersecurity', file: '/cv/akil-fernando-cybersecurity.pdf' },
  { field: 'IT systems', file: '/cv/akil-fernando-it-systems.pdf' },
];
