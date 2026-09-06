import { Capability, PortfolioItem, SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  siteTitle: "CREATIVE ENGINEER",
  siteSubtitle: "ARCHITECTS OF RADICAL EFFICIENCY",
  navLinks: [
    { label: "Studio", href: "#studio" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Work", href: "#work" },
    { label: "Let's Talk", href: "#contact" },
  ],
  heroStatement: "Bridging core electronics engineering with AI-driven architecture. We build uncompromising digital systems, automated workflows, and high-performance interfaces engineered to scale in an age of frictionless execution.",
  heroSubtext: "Independent technical practice operating between Hyderabad, Dubai, and cyberspace. We reject algorithmic templating and manual repetition in favor of raw editorial craft, intentional logic, and seamless orchestration.",
  studioNotice: {
    status: "OPEN FOR SELECT COMMISSIONS — Q3/Q4",
    location: "HYDERABAD / DUBAI",
    coordinates: "25.2048° N, 55.2708° E",
    year: "EST. 2026",
  },
  contactTopics: [
    "Workflow Automation",
    "Security Orchestration",
    "AI-Assisted Architecture",
    "Next.js / Tailwind Systems",
    "Prompt Engineering",
  ],
  contactDetails: {
    email: "125.mustafa@gmail.com",
    phone: "+971 545648341",
  },
  footerNote: "ALL RIGHTS RESERVED. NO MANUAL PROCESSES WERE HURT IN THE MAKING OF THIS ATELIER.",
};

export const capabilities: Capability[] = [
  {
    category: "Automation",
    title: "Workflow & SECURITY Orchestration",
    description: "Designing airtight, automated logic. We map multi-vendor REST APIs, parse complex JSON schemas, and build event-driven playbooks that process alert payloads and route intelligence with sub-second latency.",
    tags: ["n8n", "Webhooks", "API Integration", "JSON Parsing", "Incident Routing"],
  },
  {
    category: "Engineering",
    title: "High-Performance DIGITAL Products",
    description: "Fluid kinetic physics and headless infrastructures built on modern web paradigms. We execute daring editorial choreography through code without breaking responsive fidelity or accessibility.",
    tags: ["Next.js", "Tailwind CSS", "Vite", "Video Backgrounds", "ECE Fundamentals"],
  },
  {
    category: "Artificial Intelligence",
    title: "AI-Assisted ARCHITECTURE",
    description: "Synthesizing raw source materials into structured pipelines. From vibe coding immersive frontends to constructing retrieval-augmented generation models, we leverage AI to multiply output.",
    tags: ["Vibe Coding", "NotebookLM", "RAG Pipelines", "Prompt Engineering", "Data Structuring"],
  },
  {
    category: "Motion",
    title: "Cinematic MOTION & Direction",
    description: "Translating static brands into dynamic kinetic engines. We integrate immersive video backgrounds and hyper-real physical artifacts to create hypnotic short-form cinema for screens of every magnitude.",
    tags: ["Editorial Direction", "Spec Commercials", "Broadcast Titles", "Micro-Interactions", "Creative Copywriting"],
  },
];

export const portfolioWork: PortfolioItem[] = [
  {
    id: 1,
    title: "Automated Threat Response",
    client: "Internal R&D",
    videoUrl: "/energy.mp4",
    size: "large",
    year: "2026",
    discipline: "Security Orchestration & n8n",
  },
  {
    id: 2,
    title: "Energy Drink Spec",
    client: "Motor Oil",
    videoUrl: "/energy.mp4",
    size: "small",
    year: "2026",
    discipline: "Motion / Spec Commercial",
  },
  {
    id: 3,
    title: "Vibe Coded Interface",
    client: "Creative Portfolio",
    videoUrl: "/reel1.mp4",
    size: "large",
    year: "2026",
    discipline: "Next.js & Tailwind CSS",
  },
  {
    id: 4,
    title: "Enterprise Knowledge Base",
    client: "Fintech",
    videoUrl: "/reel2.mp4",
    size: "small",
    year: "2026",
    discipline: "NotebookLM & RAG Architecture",
  },
  {
    id: 5,
    title: "API Routing Matrix",
    client: "Hyperion Lab",
    videoUrl: "https://videos.pexels.com/video-files/2887463/2887463-hd_1920_1080_25fps.mp4",
    size: "medium",
    year: "2026",
    discipline: "Data Structuring & Webhooks",
  },
];