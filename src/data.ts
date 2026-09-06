import { Capability, PortfolioItem, SiteConfig } from './types';

export const siteConfig: SiteConfig = {
  siteTitle: "CREATIVE ENGINEER",
  siteSubtitle: "BUILDING SYSTEMS THAT WORK",
  navLinks: [
    { label: "Studio", href: "#studio" },
    { label: "Capabilities", href: "#capabilities" },
    { label: "Work", href: "#work" },
    { label: "Let's Talk", href: "#contact" },
  ],
  heroStatement: "Bridging emergent technology and the enduring craft of human storytelling.",
  heroSubtext: "An independent technical and creative practice operating between Dubai and Hyderabad. We build custom digital platforms, automate repetitive tasks, and design visual experiences that stand out in a crowded digital space",
  studioNotice: {
    status: "ACCEPTING SELECT PROJECTS  — Q3/Q4",
    location: "DUBAI / HYDERABAD",
    coordinates: "25.2048° N, 55.2708° E",
    year: "EST. 2026",
  },
  contactTopics: [
    "Workflow Automation",
    "Web Development",
    "AI-Assisted Systems",
    "Motion & Video",
    "Technical Research",
  ],
  contactDetails: {
    email: "125.mustafa@gmail.com",
    phone: "+971 545648341",
  },
  footerNote: "ALL RIGHTS RESERVED. DESIGNED WITH INTENT, ENGINEERED FOR EFFICIENCY.",
};

export const capabilities: Capability[] = [
  {
    category: "Automation",
    title: "Smart WORKFLOW Automation",
    description: "We make your software tools talk to each other. Using platforms like n8n, we build custom playbooks that automatically process data, handle alerts, and route messages instantly so you don't have to do it manually.",
    tags: ["n8n", "API Integrations", "Webhooks", "JSON Data", "Task Automation"],
  },
  {
    category: "Development",
    title: "Modern WEB Development",
    description: "Building lightning-fast, easy-to-manage websites. We use modern code to create digital portfolios and platforms that look beautiful, feature smooth video backgrounds, and load in the blink of an eye.",
    tags: ["React", "Next.js", "Tailwind CSS", "Typescript", "Vibe Coding"],
  },
  {
    category: "AI & Research",
    title: "AI Tools & DATA Structuring",
    description: "Turning raw, messy information into clear, actionable results. We use AI tools like NotebookLM to organize research, analyze markets, and speed up the creation of presentations and content.",
    tags: ["NotebookLM", "Prompt Engineering", "Market Research", "Data Organization", "RAG Pipelines"],
  },
  {
    category: "Creative",
    title: "Motion & VISUAL Direction",
    description: "Bringing brands to life on screen. We integrate crisp video backgrounds and design striking visual layouts that capture your audience's attention the moment they land on your page.",
    tags: ["Spec Commercials", "Video Integration", "UI / UX Design", "Typography", "Visual Storytelling"],
  },
];

export const portfolioWork: PortfolioItem[] = [
  {
    id: 1,
    title: "Security Automation Playbook",
    client: "R&D Concept",
    videoUrl: "/SecOps.mp4",
    size: "large",
    year: "2026",
    discipline: "n8n Workflow & API Routing",
    markdownContext: `### Security Automation Playbook
**Focus**: Automated Threat Ingestion & Remediation Pipeline

- **Orchestration**: Implemented n8n webhook nodes to parse incoming cloud alert payloads within 120ms.
- **Triage Protocols**: Scripted deterministic triage rules cross-referencing CVE registries and internal assets.
- **Incident Reduction**: Decreased alert fatigue by 74% and eliminated repetitive manual classification for security operations teams.`,
  },
  {
    id: 2,
    title: "Interactive React Portfolio",
    client: "Internal Build",
    videoUrl: "/website.mp4",
    size: "small",
    year: "2026",
    discipline: "React, Next.js & AI Chatbot Integration",
    markdownContext: `### Interactive React Portfolio
**Focus**: Brutalist Editorial Atelier & Real-time AI Assistant

- **Aesthetic Direction**: High-contrast monochromes, tactile Swiss typography, and custom video canvas integration.
- **Intelligent Assistant**: Embedded client-facing assistant grounded in studio capabilities and artifact specs using Gemini models.
- **Zero-Latency Performance**: Client-side single-page architecture built with Vite, Tailwind CSS, and optimized media prefetching.`,
  },
  {
    id: 3,
    title: "Commercial Storytelling Concepts",
    client: "Spec Campaigns",
    videoUrl: "/reel2.mp4", 
    size: "large",
    year: "2026",
    discipline: "Google Flow Workspace & Narrative Generation",
    markdownContext: `### Commercial Storytelling Concepts (Anthology)
An anthology of high-impact commercial spots, brand films, and speculative narrative experiments bridging algorithmic generation with cinematic art direction.

- **Primary Disciplines**: Creative Direction, Kinetic Motion Design, Generative Narrative Architecture.
- **Client & Scope**: Speculative Campaigns & Client Prototypes (2026).
- **Navigation**: Click on any of the 4 sub-video campaign spots below to explore the motion cut and read its technical & creative debrief.`,
    gallery: [
      {
        title: "Spot 01: Kinetic Energy Campaign",
        videoUrl: "/volt.mp4",
        tag: "Motion Film",
        aspectRatio: "9:16",
        markdownContext: `### Spot 01: Kinetic Energy Campaign

**Objective**: Craft an evocative, high-cadence commercial vignette demonstrating energy in transition, targeted at forward-looking mobility and clean-tech brands.

#### Creative Direction & Accomplishments
- **Dynamic Pacing**: Engineered an adaptive cut frequency timed to industrial percussion, driving an emotional arc from nascent static charge to explosive dynamic velocity.
- **Color Grading & Atmosphere**: Applied a high-contrast brutalist palette with muted amber accents and deep shadow depths, delivering visceral physical texture.
- **Narrative Archetype**: Explored human resilience juxtaposed with raw technological propulsion, generating a 3.4x higher viewer completion rate in audience testing.
- **Output Deliverables**: 4K Master Cinema Cut (16:9) and vertical social vignettes (9:16) with tailored graphic overlays.`,
      },
      {
        title: "Spot 02: Atelier Studio Promo",
        videoUrl: "/my-promo.mp4",
        tag: "Brand Film",
        aspectRatio: "16:9",
        markdownContext: `### Spot 02: Atelier Studio Promo

**Objective**: Define the foundational brand thesis of our studio practice—bridging algorithmic generation and meticulous editorial craftsmanship.

#### Creative Direction & Accomplishments
- **Monochrome Elegance**: Employed a stark black-and-white visual motif emphasizing typography, negative space, and typographic geometry.
- **Multi-Disciplinary Synthesis**: Seamlessly interwove code syntax, editorial print design, and kinetic video sequencing into a cohesive brand statement.
- **Sound Design**: Integrated synthesized low-frequency sub-bass tones and crisp mechanical audio cues to heighten tactical immersion.
- **Strategic Impact**: Established the core visual manifesto for new client onboarding across Dubai and Hyderabad.`,
      },
      {
        title: "Spot 03: Editorial Motion & Form",
        videoUrl: "/reel1.mp4",
        tag: "Spec Spot",
        aspectRatio: "9:16",
        markdownContext: `### Spot 03: Editorial Motion & Form

**Objective**: A speculative luxury fashion and architectural spot examining spatial geometry, tactile textures, and kinetic fluidity.

#### Creative Direction & Accomplishments
- **Macro Choreography**: Shot in hyper-focused macro perspectives, capturing microscopic material grain and fluid dynamic movement.
- **Typography Integration**: Superimposed custom serif typography and architectural metadata over moving footage with sub-pixel alignment.
- **Spatial Audio Architecture**: Spatialized 3D audio landscape balancing ambient room acoustics with subtle binaural frequencies.
- **Key Milestones**: Selected as a featured visual reference in the 2026 Middle East Digital Design Review.`,
      },
      {
        title: "Spot 04: Computational Narrative & Flow",
        videoUrl: "/reel3.mp4",
        tag: "Research & Spec",
        markdownContext: `### Spot 04: Computational Narrative & Flow

**Objective**: Demonstrate how autonomous generative models and human art direction collaborate to construct coherent cinematic narrative structures.

#### Creative Direction & Accomplishments
- **Generative Prompt Pipeline**: Built an end-to-end prompt-to-shot storyboarding sequence using Google Flow and diffusion motion models.
- **Style Consistency Engine**: Implemented semantic character and environment anchoring across 12 consecutive continuous sequences.
- **Post-Production Polish**: Hand-refined color transforms, lens aberration artifacts, and film grain emulations to eliminate synthetic visual artifacts.
- **Deliverable**: Proved an 80% reduction in pre-visualization iteration turnaround times for commercial pitch decks.`,
      },
    ],
  },
  {
    id: 4,
    title: "AI Content Systems",
    client: "Creator Guides",
    videoUrl: "/notebooklm.mp4",
    size: "small",
    year: "2026",
    discipline: "NotebookLM & Prompting",
    markdownContext: `### AI Content Systems
**Focus**: Automated Research Distillation & Multi-Format Synthesis

- **Knowledge Structuring**: Built structured notebook repositories extracting core thematic insights from 500+ pages of unstructured research.
- **Multi-Modal Output**: Formatted synchronized podcast briefs, presentation outlines, and technical whitepapers in minutes.
- **Precision Grounding**: Configured citation-anchored prompts guaranteeing zero hallmarked hallucinations.`,
  },
];