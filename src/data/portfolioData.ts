import { Project, SkillCategory, SocialLink } from '../types';

export const PERSONAL_INFO = {
  name: 'Naman Agarwal',
  role: 'Software Engineering · Applied AI',
  status: '2nd-Year B.Tech CSE (AI/ML) · Seeking Internships',
  bioHeadline: 'I build software that turns complex workflows into useful tools.',
  bioSummary:
    'Second-year Computer Science & Engineering (AI/ML) undergraduate specializing in resilient software engineering, deterministic verification systems, and applied AI. Focused on combining robust software foundations with intelligent models to solve real operational bottlenecks.',
  githubUrl: 'https://github.com/Naman150107',
  linkedinUrl: 'https://www.linkedin.com/in/naman-agarwal-7b5155275/',
  email: 'agarwal.naman2019@gmail.com',
};

export const PROJECTS: Project[] = [
  {
    id: 'gem-bidguard',
    index: '01',
    title: 'VendorPulse AI',
    secondaryTitle: 'GeM BidGuard',
    tagline: 'Deterministic procurement compliance platform with risk scoring, discrepancy detection, and audit trails',
    category: 'Full-Stack & Compliance Systems',
    badge: 'Smart India Hackathon 2026 — PS 26100',
    problem:
      'In Government e-Marketplace (GeM) public procurement, officers manually verify hundreds of pages of vendor submissions against statutory databases. This manual workflow is slow, error-prone, and vulnerable to disqualified or fraudulent vendors slipping through due to fatigue or oversight.',
    approach:
      'Built an end-to-end decision-support platform that ingests bidder documents, queries 9 mock government registries (GST, PAN, Udyam, MCA, EPFO, ESIC, Startup India, NSIC, Debarment), runs deterministic multi-layer compliance checks, computes a weighted risk score (0–100), detects cross-source discrepancies, and produces advisory AI summaries while maintaining an append-only audit trail.',
    technicalDecisions: [
      'Deterministic Compliance & Risk Engine: Pure functions in code evaluate PASS/FAIL/WARNING outcomes for 100% reproducible audits. The LLM is strictly advisory (extracting facts and explaining findings) and never decides vendor qualification.',
      'Offline Regression Verification: Designed a standalone test runner (npm run verify:engines) asserting ABC = LOW (100), XYZ = MODERATE (82), and PQR = CRITICAL (15) without requiring a database, network, or API key.',
      'Critical Severity Override: A single failed critical check (such as an active government debarment) immediately forces the risk band to CRITICAL regardless of the numeric composite score.',
      'Pluggable Document Extractor: Built an interchangeable DocumentExtractor interface supporting seeded deterministic extraction (instant, zero-API-cost demo) and live LLM extraction with strict Zod validation.'
    ],
    verifiedStack: [
      'Next.js 14 (App Router)',
      'React 18',
      'TypeScript',
      'Tailwind CSS',
      'Prisma ORM',
      'PostgreSQL (Supabase)',
      'Recharts',
      'Zod'
    ],
    githubUrl: 'https://github.com/Naman150107/gem-bidguard',
    demoStatus: {
      isAvailable: true,
      label: 'Local & Regression Runner',
      note: 'Runnable locally with npm run db:reset && npm run demo:verify, or pure offline engine assertions via npm run verify:engines.'
    },
    integrityScope: {
      implemented: [
        'Deterministic rule engine evaluating tender requirements, statutory compliance, document validity, and cross-source consistency',
        'Weighted risk scoring model (50% Mandatory, 25% Statutory, 15% Validity, 10% Consistency) with critical overrides',
        'Cross-source discrepancy detector comparing declared data vs document contents vs registry records',
        'Filterable append-only audit log capturing every verification run, finding, and officer decision',
        'Next.js 14 App Router UI with Recharts risk visualization and officer decision controls'
      ],
      simulatedOrMocked: [
        'The 9 government registries (GST, PAN, MCA, EPFO, etc.) are mock service providers reading seeded data — structured as clean drop-in interfaces for real authorized government APIs',
        'Document OCR uses seeded text in default mode; live LLM mode routes through OpenAI-compatible endpoints with Zod parsing',
        'Officer authentication is a mock role for demonstration attribution'
      ]
    },
    architecture: {
      flowSummary: 'Ingestion → Document Extractor → 9 Registry Queries → Discrepancy Engine → Compliance Engine → Risk Calculator → Advisory Summary → Officer Decision & Audit Log',
      keyRuleOrDecision: 'Scoring Formula: Score = 0.50*(Mandatory) + 0.25*(Statutory) + 0.15*(Validity) + 0.10*(Consistency). Any CRITICAL severity flag overrides result to CRITICAL (Forced).',
      codeSnippetTitle: 'Engine Determinism Rule (src/server/engine/risk.ts)',
      codeSnippet: `// Pure functional scoring & severity override
export function calculateRiskBand(score: number, criticalFailures: number): RiskBand {
  if (criticalFailures > 0) {
    return { band: "CRITICAL", forced: true, reason: "Critical severity check failed" };
  }
  if (score >= 90) return { band: "LOW", forced: false };
  if (score >= 75) return { band: "MODERATE", forced: false };
  if (score >= 50) return { band: "HIGH", forced: false };
  return { band: "CRITICAL", forced: false };
}`
    }
  },
  {
    id: 'ledgerlens',
    index: '02',
    title: 'LedgerLens',
    secondaryTitle: 'Financial Extraction & Analytics',
    tagline: 'AI-powered financial ledger extraction and analytics dashboard with dual-storage resilience',
    category: 'Applied AI & Web Application',
    badge: 'Full-Stack Gemini App',
    problem:
      'Receipts and financial ledgers are unstructured, inconsistent, and burdensome to transcribe. Manual data entry into accounting systems causes transcription errors, delayed expense reporting, and lacks immediate visual insight into spending patterns.',
    approach:
      'Developed a responsive web application that ingests receipt and ledger sheet images, extracts structured transactional data (date, description, amount, category, confidence score) using Google Gemini multimodal vision, and renders an analytics dashboard with daily volume trends, category distributions, and searchable records.',
    technicalDecisions: [
      'Dual-Storage Resilience: Engineered seamless synchronization with Supabase PostgreSQL, while providing an automatic fallback to browser LocalStorage if cloud credentials or network access are unavailable.',
      'Row-Level Confidence Calibration: Gemini model extracts an explicit confidence score for every transaction entry, enabling low-confidence extractions to be flagged for human review.',
      'Responsive Visual Analytics: Integrated Recharts to render daily transaction trends, expenditure categories, and confidence distributions with instant client-side reactivity.'
    ],
    verifiedStack: [
      'React',
      'Vite',
      'JavaScript / TypeScript',
      'Tailwind CSS v4',
      'Google Gemini API',
      'Supabase JS',
      'Recharts',
      'Lucide React'
    ],
    githubUrl: 'https://github.com/Naman150107/ledgerlens',
    demoStatus: {
      isAvailable: true,
      label: 'Client-Side App with Fallback',
      note: 'Runs directly via Vite dev server; supports live Gemini API keys or operates in offline mode with sample receipts.'
    },
    integrityScope: {
      implemented: [
        'Multimodal Gemini API prompt pipeline requesting structured JSON schemas with entry-level confidence calibration',
        'Dual-storage data layer: Supabase database sync with transparent LocalStorage persistence fallback',
        'Interactive financial analytics dashboard displaying daily transaction volume, category breakdowns, and audit tables',
        'Client-side state management, search filtering, and manual receipt editing'
      ],
      simulatedOrMocked: [
        'Extraction requires a user-provided Gemini API key; runs locally with sample data if key is not configured',
        'Supabase integration connects to user-supplied project schema or defaults to browser storage'
      ]
    },
    architecture: {
      flowSummary: 'Image Upload → Base64 / Multimodal Payload → Gemini 2.0 Extraction → Schema Validation → Dual-Store (Supabase / LocalStorage) → Recharts Analytics',
      keyRuleOrDecision: 'Dual-Store Fallback: If supabaseClient is null or offline, write transactions directly to window.localStorage with identical interface contracts.',
      codeSnippetTitle: 'Dual Storage Adapter Pattern (src/lib/storage.js)',
      codeSnippet: `// Graceful degradation when database credentials are not present
export async function saveTransactions(transactions) {
  if (supabase) {
    try {
      const { data, error } = await supabase.from('transactions').insert(transactions);
      if (!error) return data;
    } catch (err) {
      console.warn("Supabase unreachable, falling back to LocalStorage", err);
    }
  }
  const existing = JSON.parse(localStorage.getItem('ledger_tx') || '[]');
  const updated = [...existing, ...transactions];
  localStorage.setItem('ledger_tx', JSON.stringify(updated));
  return updated;
}`
    }
  },
  {
    id: 'memory-agent-tutor',
    index: '03',
    title: 'Memory Agent Tutor',
    secondaryTitle: 'Cognitive Architecture Backend',
    tagline: 'AI tutoring backend with LangGraph orchestration, user-isolated Mem0 memory, and self-reflection loops',
    category: 'Agentic AI & Backend Engineering',
    badge: 'LangGraph + Mem0 Architecture',
    problem:
      'Standard conversational AI tutors suffer from catastrophic context loss across learning sessions. They cannot remember what concepts a student previously struggled with, cannot track learning progressions over time, and generate generic replies without pedagogical self-evaluation.',
    approach:
      'Engineered an agentic backend using LangGraph to orchestrate a multi-node cognitive workflow. Ingests student queries, performs semantic memory search via Mem0 vector storage scoped to the specific user_id, generates Socratic explanations with Google Gemini (gemini-2.0-flash), executes an automated pedagogical reflection node, and logs reflections to an SQLite/SQLAlchemy database.',
    technicalDecisions: [
      'LangGraph State Graph Orchestration: Replaced unbounded chat loops with a deterministic state graph: retrieve_memory → generate_response → reflect_and_store → END.',
      'User-Scoped Vector Memory Isolation: Mem0 semantic search queries are strictly filtered by user_id to prevent cross-student memory contamination and preserve longitudinal learning context.',
      'Pedagogical Reflection Node: Post-response node evaluates student comprehension, identifies conceptual gaps, records teaching effectiveness, and persists structured logs to a relational database.',
      'Modular REST Backend: Implemented with FastAPI, Pydantic request/response schemas, SQLAlchemy models, and CORS middleware for frontend consumption.'
    ],
    verifiedStack: [
      'Python 3.10+',
      'FastAPI',
      'LangGraph',
      'Mem0',
      'LangChain Google GenAI (gemini-2.0-flash)',
      'SQLAlchemy',
      'SQLite',
      'Pydantic',
      'Uvicorn'
    ],
    githubUrl: 'https://github.com/Naman150107/memory-agent-tutor',
    demoStatus: {
      isAvailable: true,
      label: 'REST API Backend',
      note: 'FastAPI service runnable locally via uvicorn main:app --reload; exposes interactive Swagger UI at /docs.'
    },
    integrityScope: {
      implemented: [
        'LangGraph StateGraph definition with TypedDict state passing (user_id, message, memories, response, reflection)',
        'User-isolated semantic memory retrieval and persistence via Mem0 client',
        'Gemini 2.0 Flash prompt engineering with Socratic teaching constraints',
        'Pedagogical reflection loop assessing student mastery and persisting records to SQLite via SQLAlchemy',
        'FastAPI REST endpoints: POST /chat, GET /memories, DELETE /memories, and GET /reflections'
      ],
      simulatedOrMocked: [
        'Backend service requires live Google Gemini and Mem0 API keys for external cognitive cloud operations',
        'Default persistent database is local SQLite (sessions.db), configurable to PostgreSQL via DATABASE_URL'
      ]
    },
    architecture: {
      flowSummary: 'Student Query → LangGraph START → retrieve_memory (Mem0) → generate_response (Gemini 2.0) → reflect_and_store (SQLAlchemy + Mem0) → END',
      keyRuleOrDecision: 'Stateful Feedback Loop: The reflection node runs automatically after every response, analyzing whether the student demonstrated mastery, and writes findings to the database.',
      codeSnippetTitle: 'LangGraph Cognitive Workflow (backend/agent.py)',
      codeSnippet: `// LangGraph state graph definition
workflow = StateGraph(AgentState)
workflow.add_node("retrieve_memory", retrieve_memory)
workflow.add_node("generate_response", generate_response)
workflow.add_node("reflect_and_store", reflect_and_store)

workflow.add_edge(START, "retrieve_memory")
workflow.add_edge("retrieve_memory", "generate_response")
workflow.add_edge("generate_response", "reflect_and_store")
workflow.add_edge("reflect_and_store", END)

agent = workflow.compile()`
    }
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: 'Languages',
    description: 'Foundational programming languages used across production backends, frontend interfaces, and deterministic engines.',
    skills: [
      { name: 'TypeScript', context: 'Strongly typed architectures in Next.js, React, and deterministic compliance logic' },
      { name: 'JavaScript (ES6+)', context: 'Modern web development, asynchronous event loops, and DOM APIs' },
      { name: 'Python', context: 'Backend agent services, LangGraph cognitive graphs, and data manipulation' },
      { name: 'SQL', context: 'Relational data modeling, schema migrations, and queries across PostgreSQL and SQLite' },
      { name: 'HTML5 & CSS3', context: 'Accessible, semantic markup and modern CSS layouts' }
    ]
  },
  {
    category: 'Software Engineering',
    description: 'Frameworks, database tools, API designs, and architectural principles applied in actual projects.',
    skills: [
      { name: 'React & Next.js 14', context: 'App Router, component lifecycle, SSR/client boundaries, and hooks' },
      { name: 'Vite', context: 'Fast modern frontend tooling, HMR, and optimized production bundling' },
      { name: 'FastAPI', context: 'Asynchronous Python REST APIs, dependency injection, and Pydantic validation' },
      { name: 'Tailwind CSS (v3 & v4)', context: 'Design system implementation, responsive layouts, and utility styling' },
      { name: 'Prisma ORM & PostgreSQL', context: 'Schema modeling, migrations, and database operations with Supabase' },
      { name: 'SQLAlchemy & SQLite', context: 'Python ORM modeling, session management, and reflection log storage' },
      { name: 'REST API Design', context: 'Idempotency, CORS configuration, status codes, and structured payloads' },
      { name: 'Git & Version Control', context: 'Branching workflows, semantic commits, and open-source collaboration' },
      { name: 'Zod & Pydantic', context: 'Runtime validation of external inputs and AI-generated outputs' }
    ]
  },
  {
    category: 'Data & AI Engineering',
    description: 'Model orchestration, memory frameworks, deterministic rule engines, and analytical interfaces.',
    skills: [
      { name: 'LangGraph', context: 'StateGraph cognitive orchestration, multi-node agent flows, and reflection loops' },
      { name: 'Mem0', context: 'Semantic vector memory retrieval, user-scoped filtering, and memory lifecycle' },
      { name: 'Google Gemini API', context: 'Multimodal image-to-JSON extraction (Flash/Pro) and Socratic tutoring' },
      { name: 'Structured Outputs & Prompts', context: 'Constrained JSON schemas, system role prompts, and hallucination reduction' },
      { name: 'Deterministic Rule Engines', context: 'Writing pure functional compliance and scoring logic that safeguards AI outputs' },
      { name: 'Recharts & Data Visualization', context: 'Interactive time-series charts, category breakdowns, and audit distributions' }
    ]
  }
];

export const ABOUT_TEXT = {
  paragraph1:
    'I am a second-year B.Tech Computer Science & Engineering student specializing in Artificial Intelligence and Machine Learning. My work sits at the intersection of traditional software engineering and applied AI. Rather than treating AI models as black boxes that dictate outcomes, I view them as specialized components within larger, deterministic systems.',
  paragraph2:
    'In projects like VendorPulse AI (GeM BidGuard), I demonstrated this principle by keeping compliance evaluations and risk scoring strictly deterministic in code, while leveraging language models solely for document fact extraction and advisory explanation. In LedgerLens, I paired Gemini multimodal extraction with a dual-storage fallback architecture to ensure users never lose data if cloud services disconnect.',
  paragraph3:
    'With Memory Agent Tutor, I explored agentic state machines using LangGraph and Mem0 to solve the persistent memory problem in AI education. I am actively seeking software engineering and applied AI internship opportunities where I can contribute to high-reliability platforms, learn from senior engineers, and build tools that genuinely improve real-world workflows.'
};

export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', url: 'https://github.com/Naman150107', type: 'github' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/naman-agarwal-7b5155275/', type: 'linkedin' },
  { label: 'Email', url: 'mailto:agarwal.naman2019@gmail.com', type: 'email' }
];
