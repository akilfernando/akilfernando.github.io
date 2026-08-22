export const experience = [
  {
    start: 'Mar 2026',
    end: 'Present',
    role: 'IT Systems and Cybersecurity Lead',
    org: 'Teams Squared',
    location: 'Colombo, Sri Lanka',
    summary:
      'Global remote staffing firm placing skilled professionals from emerging markets into client companies worldwide. I lead IT infrastructure and cybersecurity across a distributed team of 130+ members, managing identity governance on Entra ID, leading an organization-wide ISO 27001 implementation, and heading our internal security function.',
    highlights: [
      'Lead cybersecurity operations and mentor a security specialist, establishing operational roadmaps, security standards, and incident response procedures.',
      'Oversee enterprise IAM on Microsoft Entra ID: MFA, conditional access policies, application registrations, and identity lifecycle governance.',
      'Administer Microsoft 365 tenant infrastructure, endpoint security (Bitdefender GravityZone), and RMM systems (NinjaOne) across a global workforce.',
      'Serve as appointed ISO 27001 ISMS Officer, leading the organization-wide implementation toward accreditation audit and delivering mandatory staff training via a custom LMS.',
      'Architect and build internal software platforms, growing an inherited client portal into a centralized operations hub for staff, contractors, and client teams.',
    ],
  },
  {
    start: 'Apr 2024',
    end: 'Aug 2024',
    role: 'Gameplay Programmer (Co-op)',
    org: 'Ubisoft Halifax',
    location: 'Halifax, NS',
    summary:
      'Gameplay programming in Unity and C# across two unannounced titles, developing prototype tooling, camera mechanics, targeting systems, and character AI.',
    highlights: [
      'Implemented dynamic camera framing and extended camera-clipping solutions using Cinemachine and physics raycasting.',
      'Built a flexible targeting system calculating distance over NavMesh paths and hex-grid topologies.',
      'Configured and tuned character AI behavior trees, developing in-engine visual debugging tools for state transitions.',
      'Integrated 3D assets and animation rigs through a Maya and Blender pipeline, creating standardized documentation for the team.',
      'Ported an animated 3D scene to Android using Three.js and Capacitor, resolving build dependency conflicts to ensure stable execution.',
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
      'Dual undergraduate certificates in Cyber Security and Web & Mobile Development. Sexton Scholar, Dean’s List (multiple terms), and Dalhousie In-Course Scholarship (2025). Grounded in systems architecture, algorithms, and empirical research methods.',
  },
];

export const certifications = [
  'Microsoft Certified: Identity and Access Administrator Associate (SC-300), July 2026',
];

export const skills = [
  {
    group: 'Identity & security',
    items: ['Microsoft Entra ID', 'IAM Architecture', 'MFA & Conditional Access', 'Identity Governance', 'ISO 27001 ISMS', 'Bitdefender GravityZone'],
  },
  {
    group: 'Infrastructure',
    items: ['Microsoft 365 Administration', 'NinjaOne RMM', 'Endpoint Management', 'Systems Administration', 'Windows & Linux'],
  },
  {
    group: 'Software engineering',
    items: ['TypeScript', 'React', 'Next.js', 'Python (FastAPI, Flask)', 'PostgreSQL', 'Supabase', 'Prisma / Drizzle ORM', 'REST APIs'],
  },
  {
    group: 'Game & graphics',
    items: ['Unity (C#)', 'Godot 4', 'Cinemachine', 'Behavior Trees', 'NavMesh Pathfinding', 'C++', 'Vulkan', 'OpenGL', 'GLSL/HLSL'],
  },
  {
    group: 'Research & tooling',
    items: ['Empirical Software Engineering', 'PRISMA Synthesis', '.NET 8 / CLR', 'AST Fault Localization', 'Automated Program Repair', 'Git / CI Automation'],
  },
];

// Field-tailored CVs. The visitor picks the lens that fits them.
export const cvs = [
  { field: 'Security & IT', file: '/cv/akil-fernando-security-it.pdf' },
  { field: 'Software', file: '/cv/akil-fernando-software.pdf' },
  { field: 'Game dev', file: '/cv/akil-fernando-gamedev.pdf' },
];
