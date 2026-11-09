export const chapters = [
  {
    slug: 'universal-college-lanka', title: 'Universal College Lanka', category: 'Education', period: '', role: '',
    intro: 'My time at Universal College Lanka is part of my education story.',
    sections: [],
    links: [],
  },
  {
    slug: 'dalhousie', title: 'Dalhousie University', category: 'Education', period: 'Graduated October 2025', role: 'Bachelor of Computer Science',
    intro: 'I studied Computer Science at Dalhousie in Halifax. My degree included coursework in security, web and mobile development, graphics, and systems, as well as a gameplay programming co-op.',
    sections: [
      { title: 'Studying computer science', paragraphs: ['I graduated with a GPA of 3.92. I was recognized as a Sexton Scholar, appeared on the Dean’s List, and received a Dalhousie In-Course Scholarship in 2025.', 'Alongside the degree, I completed undergraduate certificates in Communications Technology and Cyber Security, and Web and Mobile Development.'] },
      { title: 'Course projects', paragraphs: ['For a Computer Graphics course, I built a flight simulator in C++ with OpenGL and FreeGLUT. I worked on procedural terrain, lighting, texture mapping, and the aircraft’s animated control surfaces.', 'Other projects included CartCloud, an e-commerce application we built as a team capstone, and Happbit, a small habit tracker for a Mobile Development course.'] },
      { title: 'A term at Ubisoft Halifax', paragraphs: ['My co-op took me into Unity and C# gameplay programming at Ubisoft Halifax from April to August 2024. I worked with cameras, targeting, character AI, and development tools.'] },
    ],
    links: [{ label: 'OpenGL flight simulator', href: '/projects/opengl-flight-sim' }, { label: 'CartCloud', href: '/projects/cartcloud' }, { label: 'Happbit', href: '/projects/happbit' }, { label: 'My Ubisoft chapter', href: '/chapters/ubisoft-halifax' }],
  },
  {
    slug: 'ubisoft-halifax', title: 'Ubisoft Halifax', category: 'Work', period: 'April – August 2024', role: 'Co-op Junior Programmer',
    intro: 'I spent my co-op at Ubisoft Halifax working on gameplay systems in Unity and C#. My work covered cameras, targeting, character AI, and tools for inspecting the game as it ran.',
    sections: [
      { title: 'Gameplay and debugging', paragraphs: ['I added dynamic camera angles and worked on a camera-clipping solution using Cinemachine and Unity raycasting. I also extended targeting to measure distance along NavMesh paths and across hex-grid tiles.', 'I worked with character behavior trees and built in-engine debugging tools to make systems such as the hex grid easier to inspect.'] },
      { title: 'Art and the build pipeline', paragraphs: ['I worked with Maya and Blender to bring an animated character into an existing project and documented the process.', 'On a separate project, I worked with another co-op on an animated 3D scene. We used Three.js and Capacitor to make it playable as an Android app. I also worked around dependency problems to keep the milestone demo running.'] },
      { title: 'Working in an existing codebase', paragraphs: ['The projects had their own tools and conventions. Reading the code and learning how the team used it helped me make changes that fitted the existing work. The project write-up covers the technical systems without disclosing the unannounced games.'] },
    ],
    links: [{ label: 'Gameplay project details', href: '/projects/ubisoft-gameplay' }, { label: 'Ammo = Life', href: '/projects/ammo-equals-life' }],
  },
  {
    slug: 'waegwoltic-club', title: 'The Waegwoltic Club', category: 'Work', period: '', role: 'Gatehouse Assistant',
    intro: 'I worked as a gatehouse assistant at the Waegwoltic Club.',
    sections: [],
    links: [],
  },
  {
    slug: 'teams-squared', title: 'Teams Squared', category: 'Work', period: 'March 2026 – present', role: 'IT Operations & Cybersecurity Lead',
    intro: 'At Teams Squared, I lead IT operations and cybersecurity and build internal software. The company has a distributed workforce of more than 130 people, so identity, devices, and day-to-day processes all need to work across locations.',
    sections: [
      { title: 'IT and security', paragraphs: ['I manage Microsoft 365 and Entra ID, including MFA, conditional access, application registrations, and account lifecycle processes. Endpoint management uses NinjaOne and Bitdefender GravityZone.', 'The role also includes mentoring security team members and working on incident response, access reviews, and security awareness.'] },
      { title: 'ISO 27001', paragraphs: ['As ISMS Officer, I led implementation work for ISO 27001:2022 certification. That included risk assessment, the Statement of Applicability, policies, and the records needed to show that our controls were operating.', 'Teams Squared passed its Stage 2 audit on 31 August 2026 and received certification in September. The reviews, evidence collection, and corrective actions continue after certification.'] },
      { title: 'Building the internal tools', paragraphs: ['I built the contractor training platform and fleet management system, and extended an inherited security reporting tool.', 'I also took over an unreleased client portal and expanded it for contractor timesheets, leave, client management, and other operational workflows. The work uses TypeScript, React, Python, and PostgreSQL across several applications.'] },
    ],
    links: [{ label: 'Training platform', href: '/projects/contractor-training-lms' }, { label: 'Fleet management', href: '/projects/fleet-management-system' }, { label: 'Client portal', href: '/projects/client-portal' }, { label: 'ISO 27001 work', href: '/projects/iso-27001-staffing-firm' }],
  },
  {
    slug: 'ucalgary', title: 'University of Calgary', category: 'Next', period: 'Upcoming', role: 'Incoming MSc student · Computer Science',
    intro: 'My next chapter is an MSc in Computer Science at the University of Calgary. I plan to study bugs in games, particularly fixes that involve both source code and assets.',
    sections: [
      { title: 'The proposed research', paragraphs: ['My proposed work with Dr. Nimmi Weeraddana examines code and asset co-fixing in open-source Unity games. Scenes, prefabs, materials, and configuration can be part of a bug just as much as a script.', 'The plan starts with repository histories from OSSGameBench, studying which files change together and developing a taxonomy of the defects behind those fixes.'] },
      { title: 'GameLoc', paragraphs: ['GameLoc is a proposed approach to locating bugs using text retrieval, semantic embeddings, and relationships between game files. The planned evaluation will compare it with information retrieval baselines.', 'This is work I am preparing to undertake, rather than completed research. The research page sets out the questions and planned approach in more detail.'] },
    ],
    links: [{ label: 'Research direction', href: '/research' }, { label: 'Earlier diagnostic prototypes', href: '/prototypes' }],
  },
];
