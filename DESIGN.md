# Design System Specification: Editorial Engineering Portfolio

**Subject**: Naman Agarwal — Personal Developer Portfolio  
**Philosophy**: Minimal, elegant, light editorial portfolio inspired by premium engineering publications and thoughtfully typeset technical journals (such as Stripe Press, Increment, and high-craft personal sites).  
**Tone**: Technical rigor, understated refinement, authoritative typography, and honest engineering transparency.

---

## 1. Color Palette

All colors are strictly curated around a warm, natural paper aesthetic with high-contrast text and a restrained vegetal olive accent. Gradients, neon tones, and glassmorphism are strictly prohibited.

| Token | Hex | Role | Usage |
| :--- | :--- | :--- | :--- |
| `color-bg-canvas` | `#F7F6F2` | Primary Canvas | Full-page background (warm natural off-white) |
| `color-bg-surface` | `#EFECE6` | Subtle Surface | Secondary cards, callout containers, code snippet backgrounds |
| `color-bg-subtle` | `#E8E5DE` | Nested Surface | Input fields, active navigation pills, secondary chip backgrounds |
| `color-border-hairline` | `#E2DFD7` | Hairline Divider | Section dividers, card boundaries, subtle table borders |
| `color-border-subtle` | `#D5D1C7` | Emphasized Border | Active card states, focused interactive elements |
| `color-text-primary` | `#191919` | Primary Ink | Headlines, body copy, active state typography (near-black) |
| `color-text-secondary` | `#5A5852` | Secondary Ink | Subheadings, descriptive copy, timestamps, metadata labels |
| `color-text-muted` | `#7D7A73` | Muted Ink | Captions, footnote descriptors, disabled states |
| `color-accent-olive` | `#3D4E41` | Accent Primary | Brand highlights, link hover states, key badge indicators |
| `color-accent-olive-deep` | `#2D3B31` | Accent Deep | Primary button hover & active states |
| `color-accent-olive-soft` | `#E9ECE8` | Accent Light | Badge backgrounds, highlighted technical chips |
| `color-badge-border` | `#CFD7CF` | Accent Border | Subtle border for olive badges |

---

## 2. Typography

The typographic hierarchy pairs a literary, high-craft editorial serif for titles and section headings with a clean, readable sans-serif for body typography and UI elements, supported by a clean monospace for technical specifics and code.

### Font Families
- **Editorial Serif (Display & Titles)**: `Newsreader`, `Fraunces`, `Georgia`, `Cambria`, serif.
- **Modern Sans (Body & UI)**: `Inter`, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif.
- **Technical Monospace (Code & Metrics)**: `JetBrains Mono`, `ui-monospace`, `SFMono-Regular`, `Menlo`, monospace.

### Scale & Hierarchy
- **Site Brand**: 18px (1.125rem) / SemiBold (600) / Sans-serif / Near-black (`#191919`)
  - Descriptor: 12px (0.75rem) / Regular (400) / Monospace / Olive (`#3D4E41`)
- **Hero Headline**: 38px–48px (2.375rem–3rem) / Light–Normal (400) / Serif / Line-height 1.18 / Tracking -0.02em
- **Section Heading (H2)**: 24px–28px (1.5rem–1.75rem) / Medium (500) / Serif / Tracking -0.015em
- **Project Title (H3)**: 20px–22px (1.25rem–1.375rem) / Medium (500) / Serif / Near-black
- **Body Regular**: 15px–16px (0.9375rem–1rem) / Regular (400) / Sans-serif / Line-height 1.6 / Max-width 68ch
- **Technical Metadata / Badges**: 12px–13px (0.75rem–0.8125rem) / Medium (500) / Sans & Mono / Tracking 0.02em

---

## 3. Layout, Spacing & Grid System

- **Page Max-Width**: `max-w-4xl` (896px) or `max-w-5xl` (1024px) for optimal readability and editorial balance.
- **Horizontal Margins**: `px-6 sm:px-8 md:px-12` ensuring breathing room across all viewports.
- **Vertical Rhythm**:
  - Section Spacing: `py-16 sm:py-20 md:py-24`
  - Element Spacing: `space-y-4` to `space-y-8`
  - Paragraph Length: Constrained to `max-w-2xl` to maintain ideal editorial line length (55–75 characters per line).
- **Dividers**: Thin `1px` hairlines (`#E2DFD7`) separating sections cleanly without harsh visual breaks.

---

## 4. Components & Interactive Patterns

### 1. Navigation
- Sticky header with subtle backdrop blur and warm off-white background (`rgba(247, 246, 242, 0.95)`).
- Left: Text identity (`Naman Agarwal` + `Software Engineering · Applied AI`).
- Right: Minimalist link row (`Projects`, `About`, `Skills`, `Contact`), mobile menu drawer for small screens.
- Skip to content link for accessibility (`sr-only focus:not-sr-only`).

### 2. Project Presentation Cards
Every project card follows an authoritative engineering structure:
1. **Header**: Project name, category descriptor, and verified status badge (e.g. *SIH 2026 Problem 26100*, *Full-Stack Gemini App*, *LangGraph Multi-Agent Backend*).
2. **Context & Problem Statement**: Exact technical challenge being addressed.
3. **Implemented Approach**: Concrete architectural solution.
4. **Key Technical Decisions**: Bulleted rationales explaining non-obvious engineering trade-offs (e.g. pure deterministic scoring engine vs. advisory LLM, dual-storage resilience, LangGraph reflection cycles).
5. **Verified Stack**: Clean, quiet chip tags indicating languages, frameworks, and database tools.
6. **Honest Scope Callout**: Dedicated box with clear delineation of implemented functionality versus simulated test data and mock registries.
7. **Action Links**: Clean, accessible links to verified GitHub repositories, live walkthroughs, and architecture details.

### 3. Skill Matrices
Organized into 3 logical disciplines:
1. **Languages**: TypeScript, JavaScript, Python, SQL, HTML/CSS.
2. **Software Engineering**: React, Next.js, Vite, FastAPI, Tailwind CSS, REST API Design, Git, PostgreSQL, Prisma ORM, Supabase, SQLite, SQLAlchemy, Zod, Pydantic.
3. **Data & AI Engineering**: LangGraph, Mem0, Google Gemini API, Prompt Engineering & Structured Outputs, Agentic Workflows, Retrieval & Memory Systems, Recharts Data Visualization.

### 4. Interactive States & Micro-interactions
- Buttons: Warm olive solid (`#3D4E41`) with off-white text, or crisp outline with warm border.
- Hover States: Gentle border color shift from `#E2DFD7` to `#3D4E41` and subtle text contrast enhancement.
- Focus States: Accessible, visible focus ring (`focus-visible:ring-2 focus-visible:ring-[#3D4E41] focus-visible:outline-none`).
- Reduced Motion: All transitions disabled when `@media (prefers-reduced-motion: reduce)` is active.

---

## 5. Prohibited Elements
- **No profile photographs** (text identity only).
- **No decorative gradients or neon glows**.
- **No glassmorphism or heavy drop shadows**.
- **No 3D canvas objects or heavy physics engines**.
- **No excessive or decorative icon clutter**.
- **No flashy parallax or bouncy entrance animations**.
- **No generic AI-generated stock illustrations or robot graphics**.
