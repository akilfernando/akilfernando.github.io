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
    summary: 'Gameplay programming in Unity and C# across two unannounced titles, from prototype tooling to camera, targeting, and AI systems.',
    highlights: [
      'Added dynamic camera angles and extended a camera-clipping solution using Cinemachine and Unity raycasting.',
      'Extended a tile-based targeting system to measure distance over NavMesh paths and hex-grid tiles.',
      'Tuned character AI behavior trees to match game design direction, and built in-client debug tools for systems like the hex grid.',
      'Built and integrated character assets through a Maya and Blender pipeline, documenting the process for reuse.',
      'Ported a rigged, animated 3D scene to Android with Three.js and Capacitor, and kept builds playable by working around broken dependencies.',
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
  'Microsoft Certified: Identity and Access Administrator Associate (SC-300, 2026)',
  'ISO 27001 ISMS Officer (in progress, 2026)',
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
