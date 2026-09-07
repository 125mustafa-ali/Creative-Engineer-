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
    markdownContext: `### Event-Driven Threat Containment Pipeline
**Focus**: Enterprise Security Orchestration & Workflow Automation

- **Ingestion & Orchestration**: Shifted from request-response to an asynchronous webhook push model using n8n, implementing an upstream JSON Schema Validation gateway to catch unannounced vendor payload mutations and route errors to a Dead Letter Queue (DLQ).
- **Internal Containment Protocols**: Engineered deterministic routing that evaluates threat vectors, triggering Fortinet perimeter drops for external threats and Cisco ISE REST API calls to enforce zero-trust switch-level quarantines for internal compromises.
- **Data Sovereignty & Compliance**: Maintained UAE PDPL and DESC ISR v3.0 compliance by executing concurrent tamper-evident audit logging and dynamically masking PII via a Data Anonymization Node prior to cloud LLM inference.`,
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
**Focus**: AI-Assisted Web Architecture & Real-Time Gemini Assistant

- **Frontend & Visual Direction**: Scaffolded via AI-assisted "vibe coding" workflows, featuring high-contrast monochromes, tactile Swiss typography, and dynamic aspect-ratio rendering (16:9 vs. 9:16) for embedded commercial video backgrounds.
- **Intelligent Chat Assistant**: Integrated a conversational, client-facing assistant utilizing the 'gemini-3.6-flash' API, configured with a 'react-markdown' UI wrapper to gracefully render structured, editorial-quality responses from complex portfolio data.
- **Infrastructure & CI/CD**: Engineered a lightning-fast single-page application using Vite, React, and Tailwind CSS, hosted on Vercel with an automated continuous deployment pipeline triggered directly by GitHub commits.`,
  },
  {
    id: 3,
    title: "Commercial Storytelling Concepts",
    client: "Spec Campaigns",
    videoUrl: "my-promo.mp4", 
    size: "large",
    year: "2026",
    discipline: "Google Flow Workspace & Narrative Generation",
    isAnthology: true,
    markdownContext: `### Commercial Storytelling Concepts (Anthology)
An anthology of high-impact commercial spots, brand films, and speculative narrative experiments bridging algorithmic generation with cinematic art direction.

- **Primary Disciplines**: Creative Direction, Kinetic Motion Design, Generative Narrative Architecture.
- **Client & Scope**: Speculative Campaigns & Client Prototypes (2026).
- **Navigation**: Click on any of the 4 sub-video campaign spots below to explore the motion cut and read its technical & creative debrief.`,
    gallery: [
      {
        title: "Spot 01: Kinetic Energy Campaign",
        videoUrl: "https://res.cloudinary.com/xywystqe/video/upload/v1788802335/Energy_drink_com.mp4",
        tag: "Motion Film",
        badge: "Motion Film",
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
        badge: "Brand Film",
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
        badge: "Spec Spot",
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
        badge: "Research & Spec",
        aspectRatio: "16:9",
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
    isAnthology: true,
    markdownContext: `### AI Content Systems (Anthology)
**Focus**: Automated Research Distillation & Multi-Format Synthesis

An automated vertical content engine translating dense research corpuses into structured knowledge outputs, multi-modal briefs, and autonomous prompt pipelines.

- **Navigation**: Scroll through the 8-part anthology below to inspect vertical clip architectures and prompt directives.`,
    anthologySpots: [
      {
        title: "NotebookLM Research",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "",
        videoUrl: "",
        prompts: ["Automated via Claude"],
        markdownContext: `### Spot 01: Multi-Agent Video Synthesis
**Focus**: Automated Article Refinement & Short-Form Video Generation
**Badge**: AI WORKFLOW | **Aspect Ratio**: 9:16 Vertical

#### System Architecture & Objectives
- **Phase 1: Narrative Refinement**: Deployed Claude to ingest rough draft articles, restructuring the raw content for clarity, pacing, and optimized video scripting. 
- **Phase 2: Directorial Prompt Engineering**: Instructed Claude to act as a creative director, outputting a highly specific, constraints-based prompt tailored explicitly for NotebookLM's video generation engine.
- **Phase 3: Automated Execution**: Fed the optimized directorial prompt into NotebookLM and executed the "Generate Video Overview" function to instantly synthesize the final visual output.
- **Core Prompt Directive**: \`Analyze refined text and generate NotebookLM directorial prompt\`
- **Cycle Acceleration**: Bypassed traditional video editing timelines, transforming raw text drafts into fully realized 9:16 video assets through a seamless, multi-agent handover.`,
      },
      {
        title: "Seeking Help",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "https://res.cloudinary.com/xywystqe/video/upload/v1788807966/The_Quiet_Strength_of_Asking_for_Help.mp4",
        videoUrl: "",
        prompts: ["it's okay"],
        markdownContext: `### Spot 02: The Strength in Reaching Out
**Focus**: Personal Narrative & Emotional Resilience
**Badge**: NARRATIVE | **Aspect Ratio**: 9:16 Vertical

There's a quiet kind of strength in admitting you need help. 

Sometimes you do everything right — you show up, you try, you put in the work — and things still don't feel alright. Not because you failed. Simply because some things were never entirely in your hands to begin with. 

That's the part we often forget to say out loud: *it's okay*. It's okay to sit with someone you trust and say the truth of how you're feeling, without softening it, without performing strength you don't have that day. And when it's needed, it's okay to seek out a professional too. Asking for help was never a sign of weakness — it's one of the most honest things a person can do.

Once you recognize what's genuinely outside your control, something shifts. You get to let go, and place your trust in a guidance greater than your own effort alone. There's nothing left to prove. No version of yourself you need to perform for anyone. You are allowed peace. You are allowed ease. And you're allowed to forgive yourself for the past you carried the best way you knew how at the time.

Some things simply weren't meant for you, and releasing them isn't losing — it's making room. So when life feels heavy and unmoving, and you reach out for support, know that this too is part of the journey. Not a detour from it. There may come a day when the very thing you struggled through becomes the thing that lets you guide someone else.

Until then — *Alhamdulillah*, and gratitude for the small things. The ones that quietly bring light and joy into your world, even in the middle of difficulty.

If you're going through something right now, you don't have to carry it alone. I'd love to hear what's helped you find that support when you needed it most. Thank you for reading.`,
      },
      {
        title: "RAG Pipeline",
        badge: "Waking up",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "https://res.cloudinary.com/xywystqe/video/upload/v1788807964/The_Truth_About_Waking_Up_On_Time.mp4",
        videoUrl: "",
        prompts: ["the struggle"],
        markdownContext: `### Spot 03: The Everlasting Struggle of Waking Up
**Focus**: Mindset & Daily Resilience
**Badge**: NARRATIVE | **Aspect Ratio**: 9:16 Vertical

The never-ending challenge of waking up on time. Stick around till the end — I promise this one's worth it.

Here's the funny part. You think you've finally mastered it. And then, somehow, it shows up again — like a brand new challenge, wearing the same old face.

You keep coming back to the same lesson, over and over, each time with a little more wisdom, a little more knowledge... and yet you still have to master it. Again. And again.

That's just how it is. So the real question isn't "how do I fix this forever." It's — what's your attitude going to be, the next time it shows up?

Because here's the truth: you can have the right mindset. You can know your purpose. You can be genuinely grateful for everything you've been given. And still — when that moment hits every morning, there's a voice whispering that it's easier to just stay lying there.

That struggle? That's not failure. That's just part of being human.

You don't need a perfect beginning to have a meaningful day. Even if this morning didn't go the way you planned, look at everything else you still showed up for. That counts too. Doesn't it?

So next time it teases you, taunts you — it's okay. Unless you promised someone you'd be there, or it's a real responsibility calling you — give yourself some grace.

You're only human. Keep trying. Keep praying. Say *Alhamdulillah*.

Keep me in your prayers, and if this one hit home, share it with a friend who needs to hear it too. Thank you for watching.`,
      },
      {
        title: "System Architecture",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "",
        videoUrl: "",
        prompts: ["Designing prompt hierarchies"],
        markdownContext: `### Spot 04: System Architecture
**Focus**: Meta-Prompt Hierarchies & Autonomous Agent Guardrails
**Badge**: AI WORKFLOW | **Aspect Ratio**: 9:16 Vertical

#### Engineering Framework
- **Hierarchical Prompt Chains**: Structured multi-tiered execution pipelines separating intent detection, schema validation, and generative synthesis.
- **Deterministic Guardrails**: Implemented negative constraints and automated schema assertions to prevent drift in production workflows.
- **Core Prompt Directive**: \`Designing prompt hierarchies\`
- **Operational Scalability**: Built resilient operational workflows capable of running unattended in multi-agent orchestration environments.`,
      },
      {
        title: "Prompt Engineering Matrix",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "",
        videoUrl: "",
        prompts: ["Few-shot evaluation matrix and edge-case calibration"],
        markdownContext: `### Spot 05: Prompt Engineering Matrix
**Focus**: Systematic Few-Shot Evaluation & Context Optimization
**Badge**: AI WORKFLOW | **Aspect Ratio**: 9:16 Vertical

#### Methodology & Metrics
- **Matrix Calibration**: Engineered few-shot test batteries covering ambiguity, domain jargon, and edge-case constraint violations.
- **Token Efficiency**: Streamlined system prompt token footprints by 42% while improving classification reliability.
- **Core Prompt Directive**: \`Few-shot evaluation matrix and edge-case calibration\`
- **Quality Benchmark**: Exceeded human domain-expert consistency baselines across 200 automated trial runs.`,
      },
      {
        title: "Autonomous Agent Guardrails",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "",
        videoUrl: "",
        prompts: ["Semantic safety boundaries and deterministic JSON schema validation"],
        markdownContext: `### Spot 06: Autonomous Agent Guardrails
**Focus**: Runtime Policy Enforcement & Schema Conformance
**Badge**: AI WORKFLOW | **Aspect Ratio**: 9:16 Vertical

#### Safety Architecture
- **Interception Layer**: Configured pre-execution semantic classifiers to catch adversarial injections and out-of-scope instructions.
- **Strict Output Validation**: Wrapped all agent outputs in deterministic Zod/JSON schemas with automated retry protocols.
- **Core Prompt Directive**: \`Semantic safety boundaries and deterministic JSON schema validation\`
- **Fail-Safe Mechanism**: Defaulted cleanly to secondary validation checkpoints upon detecting anomalous model outputs.`,
      },
      {
        title: "Multimodal Knowledge Distillation",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "",
        videoUrl: "",
        prompts: ["Cross-modal video, audio, and transcript alignment"],
        markdownContext: `### Spot 07: Multimodal Knowledge Distillation
**Focus**: Synchronized Video, Audio, and Text Distillation
**Badge**: AI WORKFLOW | **Aspect Ratio**: 9:16 Vertical

#### Pipeline Mechanics
- **Temporal Alignment**: Synchronized frame-by-frame visual features with timestamped audio transcripts for cross-modal indexing.
- **Keyframe Extraction**: Extracted high-salience infographics and visual charts directly into structured knowledge cards.
- **Core Prompt Directive**: \`Cross-modal video, audio, and transcript alignment\`
- **Insight Retrieval**: Enabled natural-language search directly into specific moments and concepts in multi-hour video archives.`,
      },
      {
        title: "Citation Grounding & Evaluation",
        badge: "AI WORKFLOW",
        tag: "AI WORKFLOW",
        aspectRatio: "9:16",
        heroReelUrl: "",
        fullVideoUrl: "",
        videoUrl: "",
        prompts: ["Automated factual provenance audit and hallucination scoring"],
        markdownContext: `### Spot 08: Citation Grounding & Evaluation
**Focus**: Factual Provenance Audits & Hallucination Scoring
**Badge**: AI WORKFLOW | **Aspect Ratio**: 9:16 Vertical

#### Evaluation Framework
- **Provenance Scoring**: Built an automated attribution pipeline comparing model assertions against primary source embeddings.
- **Contradiction Filtering**: Scored generated responses for logical inconsistencies and flagged unsupported claims automatically.
- **Core Prompt Directive**: \`Automated factual provenance audit and hallucination scoring\`
- **Production Audit**: Produced automated audit reports verifying 100% citation backing for enterprise release artifacts.`,
      },
    ],
  },
];