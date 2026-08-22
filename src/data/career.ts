export const experience = [
  {
    start: 'Mar 2026',
    end: 'Present',
    role: 'IT Operations & Cybersecurity Lead',
    org: 'Teams Squared',
    location: 'Colombo, Sri Lanka',
    summary:
      'Global remote staffing firm placing skilled professionals into client companies worldwide. I lead IT infrastructure and cybersecurity across a distributed workforce of 130+ members, directing identity governance on Entra ID, orchestrating our ISO 27001 implementation, and engineering internal software platforms.',
    highlights: [
      'Lead cybersecurity operations and mentor security team members, defining standards, security roadmaps, and incident response protocols.',
      'Manage enterprise IAM on Microsoft Entra ID, including MFA, conditional access policies, application registrations, and lifecycle governance.',
      'Administer Microsoft 365 tenant infrastructure, endpoint security (Bitdefender GravityZone), and RMM management (NinjaOne) across distributed teams.',
      'Serve as appointed ISO 27001 ISMS Officer, guiding organization-wide implementation toward audit certification and delivering security awareness training.',
      'Architect and develop internal software platforms, growing an inherited portal into a unified operations hub for staff, contractors, and clients.',
    ],
  },
  {
    start: 'Apr 2024',
    end: 'Aug 2024',
    role: 'Gameplay Programmer (Co-op)',
    org: 'Ubisoft Halifax',
    location: 'Halifax, NS',
    summary:
      'Engineered gameplay systems in Unity and C# across two unannounced titles, developing camera mechanics, targeting algorithms, character AI, and debug tooling.',
    highlights: [
      'Implemented dynamic camera framing and camera-clipping solutions using Cinemachine and custom physics raycasting.',
      'Developed a multi-topology targeting system calculating path distance over NavMesh and hex-grid spatial layouts.',
      'Configured character AI behavior trees and built in-engine visual debugging tools for state transition analysis.',
      'Integrated 3D assets and animation rigs from Maya and Blender, establishing clear pipeline documentation for the team.',
      'Ported an animated 3D scene to Android via Three.js and Capacitor, streamlining dependency resolution for mobile builds.',
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
      'Dual certificates in Cyber Security and Web & Mobile Development. Sexton Scholar, Dean’s List, and Dalhousie In-Course Scholarship recipient. Grounded in algorithms, systems architecture, security principles, and research methodologies.',
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
    items: ['Software Engineering Research', 'PRISMA Synthesis', '.NET 8 / CLR', 'AST Fault Localization', 'Automated Program Repair', 'Git / CI Automation'],
  },
];

// Field-tailored CVs. The visitor picks the lens that fits them.
export const cvs = [
  { field: 'Security & IT', file: '/cv/akil-fernando-security-it.pdf' },
  { field: 'Software', file: '/cv/akil-fernando-software.pdf' },
  { field: 'Game dev', file: '/cv/akil-fernando-gamedev.pdf' },
];
