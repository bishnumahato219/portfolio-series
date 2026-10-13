/**
 * Central portfolio data — Bishnu Mahato's Portfolio.
 * Every fact on the site comes from this file.
 */

export type Palette = { from: string; via: string; to: string; accent: string };

export type VideoReel = {
  title: string;
  category: string;
  tool: 'DaVinci Resolve' | 'CapCut';
  url: string;
  description: string;
};

export const videoReels: VideoReel[] = [
  {
    title: 'Durga Maa Agman',
    category: 'Festival & Culture Cinematic',
    tool: 'DaVinci Resolve',
    url: 'https://www.instagram.com/reel/DeY3FUypd62/?utm_source=ig_web_copy_link&obrf=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Devotional festival cinematic crafted with rich color grading, rhythmic audio timing, and dynamic cuts.',
  },
  {
    title: 'Color Grade',
    category: 'Color Grading Showcase',
    tool: 'DaVinci Resolve',
    url: 'https://www.instagram.com/stories/highlights/18144405895575512/?__pwa=1',
    description: 'Professional color grading showcase with node-based curves, skin-tone preservation, and film look emulation.',
  },
  {
    title: 'Cinematic',
    category: 'Cinematic Visuals',
    tool: 'DaVinci Resolve',
    url: 'https://www.instagram.com/reel/DWicsINgO4B/?utm_source=ig_web_copy_link&dlrf=NTc4MTIwNjQ2YQ==',
    description: 'High-production-value visual piece with atmospheric lighting, camera motion, and sound design.',
  },
  {
    title: 'College Cinematic',
    category: 'Campus Event Cinematic',
    tool: 'DaVinci Resolve',
    url: 'https://www.instagram.com/reel/DR2yHpjE2Uz/?utm_source=ig_web_copy_link&cplk=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Dynamic campus cinematic shot and edited for Haldia Institute of Technology / ISTE HIT Student Chapter.',
  },
  {
    title: 'CapCut Edit I',
    category: 'Velocity & Beat Reel',
    tool: 'CapCut',
    url: 'https://www.instagram.com/reel/C9v4OInS3th/?utm_source=ig_web_copy_link&psln=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Fast-paced velocity edit with beat-synced optical transitions and trend-aligned pacing.',
  },
  {
    title: 'CapCut Edit II',
    category: 'Stylized Motion Reel',
    tool: 'CapCut',
    url: 'https://www.instagram.com/reel/C91wyRnS7D-/?utm_source=ig_web_copy_link&xtok=MzRlODBiNWFlZA==&srtk=MzRlODBiNWFlZA==',
    description: 'Stylized motion reel with speed ramping, optical flow, and seamless audio synchronization.',
  },
];

export const profile = {
  fullName: 'Bishnu Mahato',
  displayName: 'Bishnu Mahato',
  firstName: 'BISHNU',
  seriesTag: 'THE SERIES',
  /** Fictional studio card shown at the very start of the opening sequence. */
  originalLabel: 'A MAHATO ORIGINAL',
  role: 'Full-Stack Developer & Video Editor',
  tagline: ['Full-Stack Developer', 'Video Editor', 'DaVinci Resolve & Motion Graphics'],
  intro:
    'Computer Science & Engineering student at Haldia Institute of Technology (B.Tech CGPA 7.95), full-stack MERN developer, and Media Head at ISTE HIT\'SC specializing in video editing and motion graphics with DaVinci Resolve.',
  location: 'Haldia, West Bengal, India',
  email: 'bishnumahato219@gmail.com',
  phone: '+91-9113484126',
  links: {
    linkedin: 'https://www.linkedin.com/in/bishnumahato',
    github: 'https://github.com/bishnumahato219',
    instagram: 'https://www.instagram.com/bishnufilms/',
    instagramHandle: '@bishnufilms',
    instagramQr: '/assets/instagram-qr.png',
  },
  resumePdf: '/assets/Bishnu_Mahato_Resume.pdf',
  portrait: {
    src: '/assets/portrait-720.webp',
    srcSet: '/assets/portrait-420.webp 420w, /assets/portrait-720.webp 720w, /assets/portrait-1100.webp 1100w, /pic.png 768w',
    alt: 'Portrait of Bishnu Mahato',
  },
  interests: ['Video Editing & Motion Graphics', 'Multi-Agent AI Systems', 'UI/UX Design'],
};

export const education = [
  {
    school: 'Haldia Institute Of Technology',
    place: 'Haldia, West Bengal',
    degree: 'Bachelor of Technology — Computer Science & Engineering (Lateral)',
    period: '2024 – 2027',
    score: 'B.Tech CGPA: 7.95 / 10',
  },
  {
    school: 'Dr B C Roy Polytechnic',
    place: 'Durgapur, West Bengal',
    degree: 'Diploma — Mechanical Engineering (WBSCTE)',
    period: '2020 – 2023',
    score: 'Diploma CGPA: 9.10 / 10',
  },
  {
    school: 'DAV Public School',
    place: 'Dhanbad, Jharkhand',
    degree: '10th (CBSE)',
    period: '2020',
    score: 'Score 60.83%',
  },
];

export const experience = [
  {
    company: 'ISTE HIT Student Chapter',
    role: 'Media Head & Lead Video Editor',
    place: 'Haldia, West Bengal',
    period: '2023 – Present',
    points: [
      'Lead the creative media and video production team at ISTE HIT\'SC, directing event coverage, convention promos, and high-retention social reels.',
      'Specialize in professional video editing, kinetic motion graphics, and color grading using DaVinci Resolve.',
      'Shot and edited keynote videos and guest interviews for the ISTE Annual Convention; mentored junior creators in post-production workflows.',
    ],
  },
  {
    company: 'InTime IT Services Pvt. Ltd',
    role: 'AI Trainee (AI for Engineers Program)',
    place: 'Remote',
    period: 'Mar 2026 – May 2026',
    points: [
      'Completed the intensive "AI for Engineers" training program (Level I) and attained official AI Native certification.',
      'Learned AI fundamentals, prompt engineering, and generative AI productivity tools for production problem-solving.',
    ],
  },
  {
    company: 'Ardent Computech Pvt. Ltd.',
    role: 'Automobile Engineering Intern (Tata Motors Collab)',
    place: 'Durgapur, West Bengal',
    period: 'Dec 2022 – Jan 2023',
    points: [
      'Completed industrial internship on Advanced Automobile Applications in collaboration with Bhandari Automobiles (Tata Motors).',
      'Gained hands-on exposure to automotive systems, vehicle diagnostics, mechanical maintenance, and industrial operations.',
    ],
  },
];

export type Metric = { value: string; label: string };

export type Project = {
  id: string;
  title: string;
  year: string;
  genre: string;
  logline: string;
  stack: string[];
  build: string[];
  features: string[];
  metrics: Metric[];
  github?: string;
  externalLink?: { label: string; url: string; platform: 'instagram' | 'live' | 'github' };
  palette: Palette;
  motif: 'shield' | 'flow' | 'tenants';
  videos?: VideoReel[];
};

export const projects: Project[] = [
  {
    id: 'davinci-motion-production',
    title: 'DaVinci Resolve Motion & Video Production',
    year: '2024 – 2026',
    genre: 'Video Editing • Motion Graphics • Cinematography',
    logline: 'Cinematic festival films, node-based color grading, and viral social reels crafted in DaVinci Resolve and CapCut.',
    stack: ['DaVinci Resolve', 'CapCut', 'Motion Graphics', 'Cinematography', 'Sound Design'],
    build: [
      'Engineered an end-to-end post-production pipeline in DaVinci Resolve and CapCut, delivering festival cinematics, campus promos, and commercial reels.',
      'Developed node-based color grading workflows, custom kinetic titles, velocity transitions, and multi-track audio mixing for high audience retention.',
    ],
    features: [
      'DaVinci Resolve node-based color grading',
      'Kinetic motion graphics & typography',
      'Festival & campus cinematic direction',
      'High-retention social reels & sound design',
    ],
    metrics: [
      { value: '6+', label: 'featured reels & films' },
      { value: '4K', label: 'cinematic production' },
      { value: 'Media Head', label: 'ISTE HIT Student Chapter' },
    ],
    // DO NOT CONNECT TO GITHUB — connected to Instagram platform
    externalLink: {
      label: 'Watch on Instagram (@bishnufilms)',
      url: 'https://www.instagram.com/bishnufilms/',
      platform: 'instagram',
    },
    palette: { from: '#2a0610', via: '#7a0f24', to: '#0b0710', accent: '#ff3d5a' },
    motif: 'tenants',
    videos: videoReels,
  },
  {
    id: 'multi-agent-research-synthesizer',
    title: 'Multi-Agent Research Synthesizer',
    year: '2026',
    genre: 'AI • Multi-Agent Systems • Graph DB',
    logline: 'An autonomous multi-agent research engine that reconciles conflicting research findings using Neo4j and MongoDB.',
    stack: ['React', 'Node.js', 'Express', 'Neo4j', 'MongoDB'],
    build: [
      'Architected a collaborative multi-agent platform where specialized autonomous agents research complex queries in parallel and cross-validate findings to resolve contradictions.',
      'Integrated Neo4j graph database to map multi-agent knowledge flows and dependencies, backed by MongoDB for user sessions and synthesized intelligence reports.',
    ],
    features: [
      'Multi-agent debate & contradiction resolution',
      'Neo4j graph relationship mapping',
      'MongoDB state and report persistence',
      'Real-time collaborative research UI',
    ],
    metrics: [
      { value: '4', label: 'collaborative agents' },
      { value: 'Graph', label: 'Neo4j reasoning engine' },
      { value: '100%', label: 'contradiction synthesis' },
    ],
    github: 'https://github.com/bishnumahato219',
    palette: { from: '#1a052e', via: '#551282', to: '#090314', accent: '#bd4aff' },
    motif: 'flow',
  },
  {
    id: 'inventory-management-system',
    title: 'Car Inventory Management System',
    year: '2025',
    genre: 'Full-Stack • MERN • RBAC',
    logline: 'A production car inventory platform featuring 3-tier Role-Based Access Control, live stock deductions, and low-stock alerts.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel'],
    build: [
      'Developed a full-stack vehicle inventory platform with multi-tier Role-Based Access Control (RBAC) isolating Admin, Manager, and Employee permissions.',
      'Engineered automatic stock deductions upon vehicle sales, instant low-stock alerting, and seamless deployment on Vercel.',
    ],
    features: [
      '3-Tier RBAC (Admin, Manager, Employee)',
      'Real-time stock deduction upon sale',
      'Automated low-stock threshold alerts',
      'Live production deployment on Vercel',
    ],
    metrics: [
      { value: '3-Tier', label: 'strict RBAC isolation' },
      { value: 'Real-time', label: 'stock sync & low alerts' },
      { value: 'Live', label: 'deployed on Vercel' },
    ],
    github: 'https://inventory-management-system-ten-mu.vercel.app/',
    palette: { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' },
    motif: 'shield',
  },
];

export type Achievement = {
  id: string;
  title: string;
  org: string;
  detail: string;
  laurel: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    id: 'iste-media-head',
    title: 'Media Head',
    org: 'ISTE HIT Student Chapter',
    detail: 'Leading video editing, cinematography, and creative media production across major student chapter conventions and campaigns.',
    laurel: 'Leadership',
  },
  {
    id: 'btech-cgpa',
    title: 'B.Tech CGPA 7.95',
    org: 'Haldia Institute Of Technology',
    detail: 'Bachelor of Technology in Computer Science & Engineering (Lateral Entry) with consistent academic performance.',
    laurel: 'CGPA 7.95',
  },
  {
    id: 'polytechnic-cgpa',
    title: '9.10 CGPA',
    org: 'Dr B C Roy Polytechnic (WBSCTE)',
    detail: 'Graduated Diploma in Mechanical Engineering with top academic honors (9.10 / 10 CGPA).',
    laurel: '9.10 CGPA',
  },
  {
    id: 'ai-native',
    title: 'AI Native Certified',
    org: 'InTime IT Services',
    detail: 'Achieved AI Native certification covering prompt engineering, generative AI, and AI-first engineering workflows.',
    laurel: 'AI Native',
  },
  {
    id: 'exploitx',
    title: 'EXPLOITX Workshop',
    org: 'Haldia Institute Of Technology',
    detail: 'Hands-on training in Linux OS commands, Capture The Flag (CTF), Burp Suite web vulnerability discovery, and binary analysis.',
    laurel: 'Cybersecurity',
  },
];

export type Certification = { issuer: string; name: string; link: string };

export const certifications: Certification[] = [
  { issuer: 'InTime IT Services', name: 'AI Native Certification (AI for Engineers Level I)', link: 'https://github.com/bishnumahato219' },
  { issuer: 'Ardent & Tata Motors', name: 'Advanced Automobile Applications', link: 'https://github.com/bishnumahato219' },
  { issuer: 'Haldia Institute of Tech', name: 'EXPLOITX — Linux OS & Ethical Hacking', link: 'https://github.com/bishnumahato219' },
  { issuer: 'WBSCTE', name: 'Diploma in Mechanical Engineering (CGPA 9.10)', link: 'https://github.com/bishnumahato219' },
  { issuer: 'ISTE HIT Student Chapter', name: 'Media Head — Video Editing & Motion Graphics', link: 'https://www.instagram.com/bishnufilms/' },
];

export type Skill = { name: string; mono: string; note?: string };
export type SkillCategory = { id: string; title: string; subtitle: string; skills: Skill[] };

export const skillCategories: SkillCategory[] = [
  {
    id: 'video',
    title: 'Video & Motion',
    subtitle: 'DaVinci Resolve & Motion Graphics',
    skills: [
      { name: 'DaVinci Resolve', mono: 'Dr', note: 'Primary Tool' },
      { name: 'CapCut', mono: 'Cc', note: 'Mobile & Fast Cuts' },
      { name: 'Motion Graphics', mono: 'Mg' },
      { name: 'Cinematography', mono: 'Cm' },
      { name: 'Color Grading', mono: 'Cg' },
      { name: 'Sound Design', mono: 'Sd' },
    ],
  },
  {
    id: 'languages',
    title: 'Languages',
    subtitle: 'Programming & Scripting',
    skills: [
      { name: 'JavaScript', mono: 'Js', note: 'Primary' },
      { name: 'Java', mono: 'Jv' },
      { name: 'HTML5', mono: 'H5' },
      { name: 'CSS3', mono: 'C3' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    subtitle: 'Interfaces & Web Platform',
    skills: [
      { name: 'React.js', mono: 'Re' },
      { name: 'UI/UX Design', mono: 'Ux' },
      { name: 'Tailwind CSS', mono: 'Tw' },
    ],
  },
  {
    id: 'backend',
    title: 'Backend & APIs',
    subtitle: 'Server-side Logic & Auth',
    skills: [
      { name: 'Node.js', mono: 'No' },
      { name: 'Express.js', mono: 'Ex' },
      { name: 'REST APIs', mono: 'Ap' },
      { name: 'JWT Auth', mono: 'Jw' },
    ],
  },
  {
    id: 'databases',
    title: 'Databases',
    subtitle: 'Document, Relational & Graph',
    skills: [
      { name: 'MongoDB', mono: 'Mg' },
      { name: 'Neo4j', mono: 'N4' },
      { name: 'MySQL', mono: 'My' },
      { name: 'DBMS', mono: 'Db' },
    ],
  },
  {
    id: 'tools',
    title: 'Tools & Security',
    subtitle: 'Workflow & Environments',
    skills: [
      { name: 'Git / GitHub', mono: 'Gt' },
      { name: 'Linux', mono: 'Lx' },
      { name: 'Burp Suite', mono: 'Bs' },
      { name: 'Postman', mono: 'Pm' },
    ],
  },
  {
    id: 'fundamentals',
    title: 'CS Fundamentals',
    subtitle: 'The Engineering Core',
    skills: [
      { name: 'Data Structures & Algorithms', mono: 'Ds' },
      { name: 'DBMS', mono: 'Db' },
      { name: 'Operating Systems', mono: 'Os' },
      { name: 'OOPs', mono: 'Oo' },
    ],
  },
];

export const skillEvidence: Record<string, string[]> = {
  'DaVinci Resolve': ['Durga Maa Agman, College Cinematic & Color Grade reels', 'Media Head at ISTE HIT Student Chapter'],
  CapCut: ['Fast-paced social media velocity reels and trend edits'],
  'Motion Graphics': ['Kinetic typography & social reels for @bishnufilms', 'ISTE Annual Convention promos'],
  'React.js': ['Multi-Agent Research Synthesizer', 'Car Inventory Management System'],
  'Node.js': ['Car Inventory Management System', 'Multi-Agent Research Synthesizer'],
  'Express.js': ['Car Inventory Management System', 'Multi-Agent Research Synthesizer'],
  'MongoDB': ['Car Inventory Management System', 'Multi-Agent Research Synthesizer'],
  'Neo4j': ['Multi-Agent Research Synthesizer graph reasoning'],
  JavaScript: ['MERN Stack full-stack applications'],
  Java: ['Core Java, OOPs, Data Structures & Algorithms'],
  Linux: ['EXPLOITX Workshop at Haldia Institute of Technology'],
  Cinematography: ['ISTE Annual Convention guest interviews and event footage'],
  'Data Structures & Algorithms': ['Computer Science coursework at HIT (B.Tech CGPA 7.95)'],
};

export type Episode = {
  code: string;
  title: string;
  description: string;
  tags: string[];
  runtime: string;
  palette: Palette;
};

export type Season = {
  number: number;
  title: string;
  period: string;
  synopsis: string;
  episodes: Episode[];
};

const crimson: Palette = { from: '#24060b', via: '#6e0d1d', to: '#09070a', accent: '#ff3d5a' };
const amber: Palette = { from: '#1c1003', via: '#6b3c06', to: '#0a0806', accent: '#ffb547' };
const ocean: Palette = { from: '#04121f', via: '#0f4c6e', to: '#05080d', accent: '#4cc9ff' };
const violet: Palette = { from: '#120822', via: '#3d1a6e', to: '#07060c', accent: '#b98bff' };
const jade: Palette = { from: '#03150f', via: '#0d5a40', to: '#050a08', accent: '#46e3a8' };

export const seasons: Season[] = [
  {
    number: 1,
    title: 'The Foundation',
    period: '2020',
    synopsis: 'Schooling at DAV Public School, Dhanbad — establishing core discipline and passion for technology.',
    episodes: [
      {
        code: 'S01 E01',
        title: 'The School Days',
        description: 'Completed 10th (CBSE) at DAV Public School, Dhanbad, sparking an early drive for engineering.',
        tags: ['DAV Public School', 'CBSE'],
        runtime: '2020',
        palette: amber,
      },
    ],
  },
  {
    number: 2,
    title: 'Engineering & Industrial Training',
    period: '2020 – 2023',
    synopsis: 'Diploma in Mechanical Engineering at Dr B C Roy Polytechnic, Durgapur, graduating with 9.10 CGPA.',
    episodes: [
      {
        code: 'S02 E01',
        title: 'Academic Distinction',
        description: 'Earned Diploma in Mechanical Engineering from Dr B C Roy Polytechnic with 9.10 / 10 CGPA.',
        tags: ['Diploma', 'WBSCTE', 'CGPA 9.10'],
        runtime: '2020 – 2023',
        palette: violet,
      },
      {
        code: 'S02 E02',
        title: 'Tata Motors Collaboration',
        description: 'Industrial internship on Advanced Automobile Applications with Ardent Computech & Bhandari Automobiles.',
        tags: ['Tata Motors', 'Automotive', 'Industrial'],
        runtime: 'Dec 2022 – Jan 2023',
        palette: ocean,
      },
    ],
  },
  {
    number: 3,
    title: 'Entering Computer Science',
    period: '2024 – 2027',
    synopsis: 'B.Tech in Computer Science & Engineering at Haldia Institute Of Technology (CGPA 7.95), mastering full-stack MERN.',
    episodes: [
      {
        code: 'S03 E01',
        title: 'The CS Lateral Transition',
        description: 'Admitted to B.Tech Computer Science & Engineering at Haldia Institute Of Technology — CGPA 7.95.',
        tags: ['HIT', 'B.Tech CSE', 'CGPA 7.95'],
        runtime: '2024 – 2027',
        palette: crimson,
      },
      {
        code: 'S03 E02',
        title: 'MERN Full-Stack Mastery',
        description: 'Built scalable web applications using MongoDB, Express.js, React.js, Node.js, and REST APIs.',
        tags: ['React', 'Node.js', 'MongoDB', 'Express'],
        runtime: 'Full-Stack',
        palette: jade,
      },
      {
        code: 'S03 E03',
        title: 'EXPLOITX & Cybersecurity',
        description: 'Completed intensive Linux administration, Capture The Flag (CTF), and Burp Suite workshop.',
        tags: ['Linux', 'CTF', 'Burp Suite'],
        runtime: 'May 2025',
        palette: amber,
      },
    ],
  },
  {
    number: 4,
    title: 'Media Head & Visual Storytelling',
    period: '2023 – Present',
    synopsis: '2+ years leading video editing, cinematography, and motion graphics for ISTE HIT Student Chapter.',
    episodes: [
      {
        code: 'S04 E01',
        title: 'DaVinci Resolve & CapCut Craft',
        description: 'Specializing in DaVinci Resolve color grading, multi-camera editing, and dynamic motion design for @bishnufilms.',
        tags: ['DaVinci Resolve', 'CapCut', 'Color Grading'],
        runtime: '2+ Years',
        palette: crimson,
      },
      {
        code: 'S04 E02',
        title: 'Convention Cinematography',
        description: 'Shot and edited guest interview videos and keynote highlights during the ISTE Annual Convention.',
        tags: ['ISTE HIT', 'Cinematography', 'Annual Convention'],
        runtime: 'Media Head',
        palette: ocean,
      },
    ],
  },
  {
    number: 5,
    title: 'Multi-Agent AI & Future Horizon',
    period: 'Now streaming',
    synopsis: 'Developing autonomous multi-agent reasoning systems, AI Native workflows, and next-gen software.',
    episodes: [
      {
        code: 'S05 E01',
        title: 'Multi-Agent Synthesizer',
        description: 'Multi-Agent Research Synthesizer resolving contradictory findings through Neo4j graph topologies.',
        tags: ['AI Agents', 'Neo4j', 'MongoDB'],
        runtime: '2026',
        palette: violet,
      },
      {
        code: 'S05 E02',
        title: 'The Next Cut',
        description: 'Synthesizing software engineering with high-end cinematic visual storytelling.',
        tags: ['Full-Stack', 'Video Direction', 'Motion Graphics'],
        runtime: 'In production',
        palette: jade,
      },
    ],
  },
];

export type TopPick = { label: string; title: string; detail: string; palette: Palette };

export const topPicks: TopPick[] = [
  { label: 'B.Tech CSE', title: 'CGPA 7.95', detail: 'Haldia Institute of Technology • Lateral Entry', palette: ocean },
  { label: 'Primary Creative Tool', title: 'DaVinci Resolve', detail: 'Video Editor & Motion Designer • ISTE Media Head', palette: crimson },
  { label: 'Instagram Creator', title: '@bishnufilms', detail: 'Durga Maa Agman, College Cinematics & CapCut Edits', palette: violet },
  { label: 'The AI Original', title: 'Multi-Agent Synthesizer', detail: 'Neo4j graph reasoning & autonomous agent research', palette: violet },
  { label: 'Full-Stack Original', title: 'Car Inventory System', detail: 'Live on Vercel • 3-Tier RBAC & Real-time stock', palette: ocean },
  { label: 'Leadership', title: 'Media Head', detail: 'ISTE HIT Student Chapter • 2+ years of video production', palette: amber },
  { label: 'Academic High', title: '9.10 CGPA', detail: 'Dr B C Roy Polytechnic • Diploma in Mechanical Engg', palette: jade },
  { label: 'Core Stack', title: 'MERN Stack', detail: 'MongoDB, Express.js, React.js, Node.js', palette: amber },
  { label: 'AI Credential', title: 'AI Native Certified', detail: 'InTime IT Services • AI for Engineers Program', palette: crimson },
  { label: 'Cybersecurity', title: 'EXPLOITX Workshop', detail: 'Linux, CTF, and vulnerability assessment at HIT', palette: jade },
];

export type IntroSlide = { kicker: string; title: string; lines: string[]; chips?: string[] };

export const introSlides: IntroSlide[] = [
  {
    kicker: 'Education',
    title: 'B.Tech CSE (CGPA 7.95)',
    lines: ['Haldia Institute Of Technology (2024 – 2027) · B.Tech CSE (CGPA 7.95)', 'Dr B C Roy Polytechnic, Durgapur · Diploma (CGPA 9.10 / 10)'],
    chips: ['B.Tech CGPA 7.95', 'Diploma 9.10', 'Haldia'],
  },
  {
    kicker: 'Video & Motion',
    title: 'DaVinci Resolve & Motion Design',
    lines: [
      'Media Head at ISTE HIT Student Chapter (@bishnufilms)',
      '2+ years directing video editing, color grading, and kinetic motion graphics',
      'Durga Maa Agman, College Cinematics, and viral CapCut edits',
    ],
    chips: ['DaVinci Resolve', 'CapCut', 'Motion Graphics', 'Color Grading'],
  },
  {
    kicker: 'Software Engineering',
    title: 'Full-Stack MERN Developer',
    lines: ['React.js, Node.js, Express.js, MongoDB', 'Neo4j graph databases, MySQL, REST APIs, JWT Auth'],
    chips: ['React', 'Node.js', 'MongoDB', 'Neo4j', 'JavaScript'],
  },
  {
    kicker: 'Projects',
    title: 'Flagship Originals',
    lines: [
      'Multi-Agent Research Synthesizer — autonomous AI contradiction resolution',
      'Car Inventory Management System — 3-tier RBAC live on Vercel',
      'Cinematic Event Video Production — ISTE HIT\'SC conventions & reels',
    ],
  },
  {
    kicker: 'Leadership',
    title: 'ISTE Media Head',
    lines: ['Leading the video and media team', 'Managing event coverage, keynote shoots, and junior mentorship'],
  },
  {
    kicker: 'Certified',
    title: 'AI Native & Industry Training',
    lines: ['AI Native Certified — InTime IT Services', 'Advanced Automobile Applications — Tata Motors Collab', 'EXPLOITX Linux & Cybersecurity — HIT'],
  },
  {
    kicker: 'Vision',
    title: 'Code Meets Cinema',
    lines: ['Where full-stack architecture meets high-end visual storytelling.'],
  },
];

export type ProfileId = 'bishnu' | 'recruiter' | 'developer' | 'creative';
export type SectionId = 'about' | 'journey' | 'originals' | 'picks' | 'skills' | 'moments' | 'story';

export const viewerProfiles: {
  id: ProfileId;
  name: string;
  blurb: string;
  color: string;
  order: SectionId[];
}[] = [
  {
    id: 'bishnu',
    name: 'Bishnu',
    blurb: 'The full series, in order',
    color: '#e5132b',
    order: ['about', 'journey', 'originals', 'picks', 'skills', 'moments', 'story'],
  },
  {
    id: 'recruiter',
    name: 'Recruiter',
    blurb: 'Resume, education & skills first',
    color: '#4cc9ff',
    order: ['story', 'moments', 'skills', 'originals', 'about', 'journey', 'picks'],
  },
  {
    id: 'developer',
    name: 'Developer',
    blurb: 'Projects, stack & GitHub first',
    color: '#46e3a8',
    order: ['originals', 'skills', 'journey', 'moments', 'about', 'picks', 'story'],
  },
  {
    id: 'creative',
    name: 'Creative',
    blurb: 'Video editing, motion graphics & story arc',
    color: '#ffb547',
    order: ['journey', 'picks', 'originals', 'moments', 'about', 'skills', 'story'],
  },
];

export const sectionMeta: Record<SectionId, { nav: string; card: string; meta: string; palette: Palette }> = {
  about: { nav: 'About', card: 'About Me', meta: 'The Pilot • Education & background', palette: violet },
  journey: { nav: 'Journey', card: 'My Journey', meta: `${seasons.length} Seasons • ${seasons.reduce((n, s) => n + s.episodes.length, 0)} Episodes`, palette: amber },
  originals: { nav: 'Originals', card: 'My Projects', meta: `${projects.length} Originals • 2026`, palette: crimson },
  picks: { nav: 'Top Picks', card: 'Top Picks', meta: 'Top 10 career highlights', palette: jade },
  skills: { nav: 'Skills', card: 'My Skills', meta: `${skillCategories.length} Categories`, palette: ocean },
  moments: { nav: 'Moments', card: 'Achievements', meta: `${achievements.length} Highlights • ${certifications.length} Certifications`, palette: crimson },
  story: { nav: 'Resume', card: 'The Full Story', meta: 'Resume • View & download', palette: violet },
};
