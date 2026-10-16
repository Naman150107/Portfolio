# AGENTS.md — Visual Rules & Implementation Constraints

## Visual Rules & Aesthetic Guidelines
1. **Editorial Aesthetic**: Build a minimal, elegant, light editorial portfolio inspired by premium engineering journals and thoughtfully typeset personal sites.
2. **Palette Tokens**:
   - Canvas: Warm off-white (`#F7F6F2`)
   - Surface / Callouts: Soft stone (`#EFECE6`)
   - Primary Text: Near-black (`#191919`)
   - Secondary Text: Muted slate (`#5A5852`)
   - Hairline Dividers: Warm sand (`#E2DFD7`)
   - Accent: Subtle olive (`#3D4E41` primary, `#E9ECE8` soft badge)
3. **Typography**: Editorial serif (`Newsreader`, `Fraunces`, `Georgia`, serif) for display headlines and section titles; crisp modern sans (`Inter`, system-ui, sans-serif) for body copy and UI; clean monospace (`JetBrains Mono`, `ui-monospace`, monospace) for code and technical metadata.
4. **Strict Prohibitions**:
   - Zero profile photos (use text-based identity: "Naman Agarwal" with "Software Engineering · Applied AI").
   - Zero gradients, neon accents, glassmorphism, 3D graphics, or heavy drop shadows.
   - Zero excessive decorative icons, bouncy animations, or generic AI/robot illustrations.
   - Keep interactions quiet, fast, and respectful of `prefers-reduced-motion`.

## Technical & Architectural Constraints
1. **Stack**: React 18 / 19, TypeScript, Vite, and Tailwind CSS.
2. **Accessibility (a11y)**:
   - Proper semantic HTML5 landmark tags (`<header>`, `<main>`, `<nav>`, `<section>`, `<article>`, `<footer>`).
   - Visible, accessible focus rings (`focus-visible:ring-2 focus-visible:ring-[#3D4E41]`).
   - Accessible skip-to-content link for keyboard users.
   - High contrast ratios adhering to WCAG AAA for text and AA for interactive elements.
3. **Factual Integrity & Recruiter Optimization**:
   - Strictly reflect verified implementations from GitHub (`Naman150107`).
   - Never fabricate users, revenue, employment history, test scores, or real government production partnerships.
   - Always clearly distinguish implemented code (e.g. deterministic compliance logic, LangGraph memory loops, Gemini schema extraction) from simulated mock layers (e.g. seeded government registries, simulated document OCR).
4. **Code Quality**:
   - Full TypeScript safety with explicit interfaces.
   - Reusable component architecture with clean separation of concerns.
   - Fast, zero-dependency production builds passing `tsc --noEmit` and `vite build`.