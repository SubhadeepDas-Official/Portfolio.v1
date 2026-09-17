export interface Project {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  thumbnail: string;
  heroImage: string;
  gallery?: string[];
  metrics?: { label: string; value: string }[];
}

export interface Service {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export const profile = {
  name: "SUBHADEEP DAS",
  role: "WEB DESIGNER",
  subRole: "DIGITAL CREATOR",
  location: "BENGALURU",
  availability: "AVAILABLE FOR NEW PROJECTS",
  heroHeadline: {
    line1: "DESIGN",
    line2: "WITH",
    accent: "INTENT.",
  },
  personBadge: {
    name: "SUBHADEEP DAS",
    title: "WEB DESIGNER",
  },
  about: {
    lead: "I craft bold, user-centered web experiences that merge strategy, aesthetics and performance.",
    secondary: "Minimal noise.\nMaximum impact.",
    note: "AVAILABLE WORLDWIDE FOR FREELANCE & REMOTE COLLABS",
  },
  featuredSection: {
    welcome: "WELCOME\nTO MY",
    author: "SUBHADEEP DAS",
    title: "WEBSITE DESIGNER",
  },
  contact: {
    heading: "READY TO\nELEVATE YOUR\nDIGITAL PRESENCE?",
    subheading: "I'M ALWAYS OPEN TO NEW CHALLENGES AND EXCITING PROJECTS.",
    sideCopy: "LET'S BUILD\nSOMETHING BOLD.",
    email: "subhadeep5740@gmail.com",
    phone: "+91 8617018458",
    website: "SUBHADEEP.COM",
    dribbble: "DRIBBBLE.COM/SUBHADEEP",
    behance: "BEHANCE.NET/subhadeepdas36",
    github: "GITHUB.COM/SubhadeepDas-Official",
    sealText: "• STRATEGY • DESIGN • EXPERIENCE • PROCESS • PLANNING",
    initials: "S - D",
  },
};

export const selectedProjects: Project[] = [
  {
    id: "nexus-digital",
    number: "01/",
    title: "NEXUS DIGITAL®",
    category: "WEBSITE DESIGN",
    year: "2026",
    description: "Consolidate your entire data stack, team permissions, and workflow pipelines inside our lightweight bento platform.",
    longDescription: "Automate complex workflows, track progress in real-time, and unlock modern design-driven growth engines for your company. Built for high-velocity teams.",
    technologies: ["Next.js", "GSAP", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://nexusdigitalnetwork.vercel.app/",
    githubUrl: "https://github.com/SubhadeepDas-Official/Nexus",
    thumbnail: "/images/projects/nexus.png",
    heroImage: "/images/projects/nexus.png",
    gallery: [
      "/images/projects/nexus-gallery-1.jpg",
      "/images/projects/nexus-gallery-2.jpg",
    ],
    metrics: [
      { label: "Lighthouse Score", value: "99/100" },
      { label: "Avg Load Time", value: "0.6s" },
      { label: "Award", value: "Awwwards SOTD" },
    ],
  },
  {
    id: "oryon-sdk",
    number: "02/",
    title: "ORYON SDK",
    category: "BRAND & WEBSITE",
    year: "2026",
    description: "Oryon blends real-time cloud data, advanced cognitive models, and 3D orchestration layers to deliver unmatched performance metrics for hyper-scale platforms.",
    longDescription: "Build serverless automation workflows using the Oryon TypeScript SDK. Initialize nodes, bind clusters, and stream metrics with less than three lines of code.",
    technologies: ["React", "Three.js", "GSAP", "Tailwind CSS"],
    liveUrl: "https://oryon-sdk.vercel.app/",
    githubUrl: "https://github.com/SubhadeepDas-Official/Oryon",
    thumbnail: "/images/projects/oryon.png",
    heroImage: "/images/projects/oryon.png",
    gallery: [
      "/images/projects/elevate-gallery-1.jpg",
      "/images/projects/elevate-gallery-2.jpg",
    ],
    metrics: [
      { label: "Conversion Lift", value: "+42%" },
      { label: "User Session Time", value: "3m 48s" },
      { label: "Mention", value: "FWA of the Day" },
    ],
  },
  {
    id: "lumen",
    number: "03/",
    title: "LUMEN",
    category: "WEB DEVELOPMENT",
    year: "2026",
    description: "A premium academy for ambitious learners. Sign in to access courses, track progress, and unlock your dashboard.",
    longDescription: "A premium learning academy built for ambitious minds ready to grow, master new skills, and achieve meaningful goals. Sign in to access expert-led courses, track your progress, and continue learning at your own pace. Unlock your personalized dashboard and take the next step toward your future.",
    technologies: ["Next.js", "TypeScript", "GSAP ScrollTrigger", "CSS Grid"],
    liveUrl: "https://lumens-learning.vercel.app/",
    githubUrl: "https://github.com/SubhadeepDas-Official/Lumens",
    thumbnail: "/images/projects/lumen.png",
    heroImage: "/images/projects/lumen.png",
    gallery: [
      "/images/projects/aurora-gallery-1.jpg",
      "/images/projects/aurora-gallery-2.jpg",
    ],
    metrics: [
      { label: "Client Inquiries", value: "+180%" },
      { label: "SEO Ranking", value: "Top 3" },
      { label: "Award", value: "CSSDA WOTD" },
    ],
  },
];

export const fanCards = [
  {
    id: "card-cosmic",
    title: "QUANTUM EYE",
    subtitle: "ASTRONOMICAL LAB",
    type: "artwork",
    rotation: -22,
    zIndex: 1,
    bgColor: "#0c1322",
    accentColor: "#38bdf8",
    variant: "cosmic",
    image: "/images/cards/cosmic.jpg",
  },
  {
    id: "card-deep-impact",
    title: "DEEP IMPACT",
    subtitle: "AEROSPACE MONOGRAPH",
    type: "slide-accent",
    rotation: -16,
    zIndex: 2,
    bgColor: "#1a1a1a",
    accentColor: "#f59e0b",
    variant: "rocket",
    image: "/images/cards/deep-impact.jpg",
  },
  {
    id: "card-orange-eye",
    title: "TARGET APERTURE",
    subtitle: "IDENTITY LAB",
    type: "brand",
    rotation: -8,
    zIndex: 3,
    bgColor: "#DD5015",
    accentColor: "#121111",
    variant: "orange-eye",
    image: "/images/cards/orange-eye.jpg",
  },
  {
    id: "card-center-portrait",
    title: "SUBHADEEP / LEAD",
    subtitle: "CREATIVE DIRECTION",
    type: "portrait",
    rotation: 1,
    zIndex: 6,
    bgColor: "#161515",
    accentColor: "#DD5015",
    variant: "portrait",
    image: "/images/cards/portrait.jpg",
  },
  {
    id: "card-editorial-11",
    title: "1:1 MONOGRAPH",
    subtitle: "AUTOMOTIVE STUDIES",
    type: "editorial",
    rotation: 10,
    zIndex: 4,
    bgColor: "#f4f4f4",
    accentColor: "#121111",
    variant: "editorial-11",
    image: "/images/cards/editorial.jpg",
  },
  {
    id: "card-radial-wheel",
    title: "KINETIC GEAR",
    subtitle: "INDUSTRIAL APPARATUS",
    type: "mechanical",
    rotation: 20,
    zIndex: 2,
    bgColor: "#141414",
    accentColor: "#EAE6DC",
    variant: "radial-wheel",
    image: "/images/cards/gear.jpg",
  },
];

export const services: Service[] = [
  {
    number: "01",
    title: "WEB DESIGN",
    description: "Bespoke digital design systems with uncompromised typographic rigor, high-contrast aesthetics, and intuitive human interactions.",
    deliverables: [
      "Art Direction & Concept Boards",
      "Responsive Layout Grids",
      "Interactive Prototyping in Figma",
      "Design Systems & Component Specs",
    ],
  },
  {
    number: "02",
    title: "WEB DEVELOPMENT",
    description: "Precision front-end engineering using Next.js, React, and TypeScript. Fluid GSAP choreography, sub-second load times, and clean semantic architecture.",
    deliverables: [
      "Next.js App Router Architecture",
      "GSAP Motion & ScrollTrigger",
      "Accessible Semantic Markup",
      "Performance & Lighthouse 95+ Audit",
    ],
  },
  {
    number: "03",
    title: "BRANDING",
    description: "Striking visual identities crafted for high-signal cultural resonance. Bold wordmarks, custom grotesque typography, and tactile printed guidelines.",
    deliverables: [
      "Logomark & Monogram Creation",
      "Typography & Color Hierarchy",
      "Brand Guidelines & Poster Sets",
      "Physical & Digital Collateral",
    ],
  },
  {
    number: "04",
    title: "UI/UX DESIGN",
    description: "Deep user-flow orchestration and structural wireframing that eliminate friction, clarify complex data, and turn products into intuitive journeys.",
    deliverables: [
      "User Journey Mapping",
      "Wireframing & Information Architecture",
      "Usability Testing & Iteration",
      "Hand-off Production Assets",
    ],
  },
  {
    number: "05",
    title: "CMS & E-COMMERCE",
    description: "Robust content infrastructure and tailored commerce experiences. Headless setups that give content creators complete editorial freedom without sacrificing speed.",
    deliverables: [
      "Headless CMS Architecture (Sanity, Strapi)",
      "Shopify & Stripe Custom Checkouts",
      "Catalog Modeling & Fast Search",
      "Multi-currency & Global Localization",
    ],
  },
  {
    number: "06",
    title: "MAINTENANCE & SUPPORT",
    description: "Continuous performance tuning, security hardening, SEO stewardship, and iterative feature development for mission-critical digital flagships.",
    deliverables: [
      "Dependency & Security Patches",
      "Core Web Vitals Monitoring",
      "Feature Enhancements & Sprints",
      "Dedicated Technical Advisory",
    ],
  },
];

export const manifesto = {
  heading: "DESIGN\nMANIFESTO —",
  stanzas: [
    "GOOD DESIGN ISN'T JUST ABOUT HOW IT LOOKS. IT'S ABOUT HOW IT WORKS, WHO IT SERVES, AND WHAT IT STANDS FOR.",
    "I DESIGN WITH PURPOSE. I BUILD WITH PRECISION. I DELIVER WITH PRIDE.",
  ],
  punchline: "NO TRENDS.\nONLY SOLUTIONS.",
};

export const techStack = [
  { name: "FIGMA", category: "Design" },
  { name: "NEXT.JS", category: "Framework" },
  { name: "REACT", category: "Frontend" },
  { name: "TYPESCRIPT", category: "Language" },
  { name: "HTML / CSS", category: "Core" },
  { name: "JAVASCRIPT", category: "Core" },
  { name: "GSAP", category: "Animation" },
  { name: "NODE.JS", category: "Backend" },
  { name: "POSTGRESQL", category: "Database" },
  { name: "WORDPRESS", category: "CMS" },
  { name: "SHOPIFY", category: "Commerce" },
  { name: "GIT", category: "Workflow" },
];
