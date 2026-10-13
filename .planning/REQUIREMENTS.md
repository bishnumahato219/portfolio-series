# Project Requirements

This document outlines the functional and non-functional requirements for the current milestone of **Sushmita — The Series** portfolio.

## Requirement Categories

### 1. Visual & Audio-Tactile Ambience (VIBE)
- **REQ-VIBE-01 [Cinematic Sound Engine]**: Implement a lightweight, toggleable Web Audio API sound engine providing subtle feedback (opener cinematic sting, soft UI click, hover hum) with persistent mute preferences saved in `localStorage`.
- **REQ-VIBE-02 [Ambient Lighting & Atmosphere]**: Add dynamic ambient gradient bloom behind active cards and interactive elements that track cursor position.
- **REQ-VIBE-03 [Mobile & Touch Refinement]**: Implement fluid mobile gestures: bottom sheet drawers for episode/project details on screens under 768px, smooth swipe rails, and zero layout overflow.
- **REQ-VIBE-04 [Accessibility & Reduced Motion]**: Maintain strict compliance with `prefers-reduced-motion` to bypass heavy particle animations, 3D tilt, and cinematic delays when requested by the OS.

### 2. Interactive Features & Engagement (INT)
- **REQ-INT-01 [Production Contact System]**: Build an interactive, validated Contact Modal accessible from both the Navbar and FinalCTA section, featuring client-side input validation, error handling, loading states, and integration with an email service (e.g., Formspree, EmailJS, or serverless endpoint).
- **REQ-INT-02 [3D Tilt & Physics on Posters]**: Add physics-based 3D tilt interaction to project cards and episode posters on desktop pointers with glare highlight reflections.
- **REQ-INT-03 [Interactive Metric Counters]**: Implement viewport-triggered animated counter components for project metrics (e.g. 500+ documents, 92% accuracy, 60% time saved).
- **REQ-INT-04 [Live Project Showcase & Demo Links]**: Add direct interactive actions to project cards: "Watch Trailer / Demo", "Source Code", and architectural deep-dive tabs inside `ProjectModal`.

### 3. Content Architecture & Case Studies (CNT)
- **REQ-CNT-01 [Single Source of Truth Integrity]**: Ensure all new sections, project metadata, and metrics remain fully typed and synchronized inside `src/data/portfolio.ts`.
- **REQ-CNT-02 [Comprehensive Project Deep-Dives]**: Add structured problem-solution-architecture narratives for featured projects (PolicyGuard AI, Smart Tenant Multi-tenant SaaS, FinFlow Payment Engine).
- **REQ-CNT-03 [Interactive Skills Explorer]**: Enhance the Skills section with interactive tag filtering (Frontend, Backend, AI/ML, Cloud/DevOps) allowing users to see which specific projects utilize each skill.
- **REQ-CNT-04 [Resume Viewer Enhancements]**: Add print-optimized stylesheet triggers and a responsive viewer modal with fallback direct PDF download.

### 4. Performance, SEO, A11y & Deployment (OPS)
- **REQ-OPS-01 [Core Web Vitals & Asset Optimization]**: Achieve Lighthouse scores >= 90 across Performance, Accessibility, Best Practices, and SEO. Ensure all images are modern WebP with explicit dimensions and preloaded hero assets.
- **REQ-OPS-02 [Comprehensive SEO & Social Cards]**: Inject descriptive Open Graph (og:title, og:description, og:image, og:video/stream type), Twitter card meta tags, canonical link, and JSON-LD structured data (`Person` and `CreativeWork`).
- **REQ-OPS-03 [WCAG 2.1 AA Accessibility]**: Ensure all interactive elements have visible focus rings, ARIA roles (`role="dialog"`, `aria-expanded`, `aria-label`), keyboard shortcuts (Escape to dismiss, Tab trapping in modals).
- **REQ-OPS-04 [Production Build Verification]**: Ensure zero TypeScript errors (`tsc -b`), clean Vite production bundles, and verified production preview readiness.

## Traceability Matrix
| Requirement ID | Priority | Target Phase | Status |
|---|---|---|---|
| REQ-VIBE-01 | High | Phase 1 | Pending |
| REQ-VIBE-02 | Medium | Phase 1 | Pending |
| REQ-VIBE-03 | High | Phase 1 | Pending |
| REQ-VIBE-04 | Critical | Phase 1 | Pending |
| REQ-INT-01 | High | Phase 2 | Pending |
| REQ-INT-02 | Medium | Phase 2 | Pending |
| REQ-INT-03 | Medium | Phase 2 | Pending |
| REQ-INT-04 | High | Phase 2 | Pending |
| REQ-CNT-01 | High | Phase 3 | Pending |
| REQ-CNT-02 | High | Phase 3 | Pending |
| REQ-CNT-03 | Medium | Phase 3 | Pending |
| REQ-CNT-04 | Medium | Phase 3 | Pending |
| REQ-OPS-01 | Critical | Phase 4 | Pending |
| REQ-OPS-02 | High | Phase 4 | Pending |
| REQ-OPS-03 | Critical | Phase 4 | Pending |
| REQ-OPS-04 | Critical | Phase 4 | Pending |
