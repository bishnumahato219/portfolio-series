# SUSHMITA — THE SERIES (Portfolio Platform)

A cinematic, streaming-inspired personal portfolio platform for **Sushmita Dasari** (Full-Stack Developer and B.Tech AI & ML student). The portfolio reimagines personal branding as a fictional streaming original: sections are episodes, projects are featured originals, and visitors experience a tailored cinematic journey.

## Core Vision & Identity
- **Name**: Dasari Venkata Ratna Sri Sushmita (Sushmita Dasari)
- **Role**: Full-Stack Developer & AI/ML Engineer
- **Metaphor**: A Netflix/streaming original series where every career milestone is a season, each technical project is an original release, and recruiters/developers choose their viewing profile.
- **Tone & Aesthetic**: Dark cinematic theme, ambient lighting streaks, subtle film grain, fluid 60+ FPS motion, audio-tactile cues, high contrast typography.

## Tech Stack
- **Framework & Core**: React 18, TypeScript, Vite 6
- **Styling**: Tailwind CSS 4, CSS custom properties, custom gradient shaders
- **Motion & Physics**: Framer Motion 11, Lenis smooth scrolling, Canvas micro-particle systems
- **Data Architecture**: Single source of truth in `src/data/portfolio.ts`
- **Asset Pipeline**: Responsive WebP generation via Sharp (`scripts/build-images.mjs`)

## Architectural Overview
1. **Opening & Profile Stage**:
   - `OpeningSequence`: Studio title card ("A DASARI ORIGINAL"), animated typography sting, Skip via Esc/Enter.
   - `ProfileSelector`: "Who's watching?" (Recruiter, Developer, Creative) adapting content ordering and highlight reels.
2. **Main Stage (Home)**:
   - `Navbar`: Glassmorphic navigation with profile switcher, scroll progress, sound toggle, and mobile drawer.
   - `Hero`: Billboard display with parallax portrait, dynamic light streaks, floating tech badges, and "Play Intro" teaser.
   - `ContinueWatching`: Recent highlights with interactive progress bars.
   - `About` ("The Pilot"): Narrative background, education, and technical foundation.
   - `Seasons` / `EpisodeCard`: Career journey represented as episodic seasons.
   - `Originals` / `ProjectCard`: Pinned horizontal scrolling gallery on desktop, touch rail on mobile, full-screen project modals.
   - `TopPicks`: Ranked top technical achievements.
   - `Skills`: Categorized skills with evidence tags linked to actual projects.
   - `Achievements`: Award posters and certification credentials.
   - `ResumeSection` & `ResumeModal`: Interactive PDF viewer and download trigger.
   - `FinalCTA`: "TO BE CONTINUED..." outro and contact links.

## Active Milestone Goals
1. **Visual & Motion Polish**: Sensory refinement including sound engine (SFX), ambient light bloom, responsive touch drawers, and micro-interactions.
2. **Interactive Features**: Fully functional contact form engine, 3D card tilt physics, live demo modal previews, and animated metric counters.
3. **Content Expansion**: Enhanced project case studies, system design notes, and updated credentials in `portfolio.ts`.
4. **Performance & Production Hardening**: Lighthouse 95+ audit, SEO metadata, Open Graph preview tags, WCAG 2.1 AA a11y compliance, and deployment automation.
