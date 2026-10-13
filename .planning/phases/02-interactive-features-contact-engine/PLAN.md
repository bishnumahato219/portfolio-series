# Phase 2 Plan: Interactive Features & Contact Engine

**Phase:** 2  
**Milestone:** 1.0  
**Title:** Interactive Features & Contact Engine  
**Mode:** Tracer-First  
**Target:** [Portfolio_series](file:///c:/Users/Bishn/Desktop/Projs/Portfolio/Portfolio_series)

---

## Objective

Deliver engaging interactive mechanisms that convert portfolio visitors into active collaborators. This phase introduces a production-ready cinematic `ContactModal` with reactive validation, animated metric counters (`AnimatedCounter`), tabbed deep-dive project overlays, and enriched interactive touch physics.

---

## Tasks

### Task 2.1 (Tracer Slice): Production Contact System & Modal Engine
- **Files to create/modify:**
  - Create `src/components/ContactModal.tsx`:
    - Cinematic modal overlay styled with dark glassmorphism, crimson neon accents, and backdrop blur.
    - Quick intent selector pills: *"Full-Stack / AI Opportunity"*, *"Project Collaboration"*, *"Advisory"*, *"Networking"*.
    - Form fields: Name, Email, Organization, Intent, Subject, Message.
    - Real-time client-side validation (email format, minimum lengths) with informative error messages.
    - Interactive submission lifecycle:
      - `idle`: Crisp input form with autofocus.
      - `sending`: Cinematic buffering spinner + simulated transmission delay (800ms).
      - `success`: "Transmission Received — Episode Scheduled" confirmation card with celebratory animation.
      - `error`: One-click fallback directly launching user's email client with prefilled body.
    - Integrated sound effects (`playClick` on intent pills and submit).
    - Keyboard accessibility: Focus trap, Esc to dismiss, visible focus rings.
  - Update `src/App.tsx`:
    - Add `contactOpen` state and lazy import for `ContactModal`.
    - Provide `onContactOpen` handler down to `Navbar` and `FinalCTA`.
  - Update `src/components/Navbar.tsx` and `src/components/FinalCTA.tsx`:
    - Link "LET'S BUILD" buttons directly to `onContactOpen`.

### Task 2.2: Perspective 3D Tilt & Specular Highlights
- **Files to inspect/enhance:**
  - `src/components/fx.tsx`:
    - Verify `Tilt` specular highlight glare and ambient bloom response across all cards.
    - Add gentle mobile gyroscope orientation response or graceful static fallback for mobile devices.
  - Verify seamless integration across `ProjectCard.tsx`, `EpisodeCard.tsx`, and `TopPicks.tsx`.

### Task 2.3: Animated Metric Counters
- **Files to create/modify:**
  - Create `src/components/AnimatedCounter.tsx`:
    - Viewport-triggered animated number counter using `framer-motion` springs or `requestAnimationFrame`.
    - Intelligent suffix parsing (extracts digits while preserving `%`, `+`, `k`, `ms`, etc.).
    - Instant display when `prefers-reduced-motion` is active.
  - Update `src/components/ProjectModal.tsx`:
    - Replace static metric values with `AnimatedCounter`.

### Task 2.4: Tabbed Deep-Dive Project Modal & Showcase Actions
- **Files to modify:**
  - `src/components/ProjectModal.tsx`:
    - Add tabbed navigation:
      - **Tab 1: Overview & Story**: High-level logline, key highlights, and preview trailer card.
      - **Tab 2: Engineering & Architecture**: Detailed breakdown of contributions, system architecture, and tech stack tags.
      - **Tab 3: Metrics & Impact**: Key performance indicators powered by `AnimatedCounter`.
    - Add tab click sound cues (`playClick`).
    - Add direct live link preview button when available alongside the GitHub repository button.

---

## Verification & Acceptance Criteria

1. **Contact Engine Integrity:**
   - Clicking "LET'S BUILD" in Navbar and FinalCTA opens `ContactModal`.
   - Invalid emails and empty required fields block submission and show clear error states.
   - Successful submission renders the celebratory success screen.
   - Esc key and backdrop click close modal cleanly and restore document scroll.
2. **Animated Counters:**
   - Metric numbers animate from 0 to target value upon opening or scrolling into view.
   - Instant numerical display with no animation when reduced motion is preferred.
3. **Tabbed Project Explorer:**
   - Tabs in `ProjectModal` switch smoothly between Overview, Architecture, and Impact tabs without layout glitch.
4. **Build & Performance:**
   - `tsc -b && vite build` succeeds with zero TypeScript errors.
   - Frame rate remains smooth (60 FPS) throughout modal open/close transitions.

---

## Execution Handoff

Upon plan approval, proceed with execution starting with Tracer Task 2.1.
