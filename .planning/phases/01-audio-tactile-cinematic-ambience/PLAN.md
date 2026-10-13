# Phase 1 Plan: Audio-Tactile & Cinematic Ambience Layer

**Phase:** 1  
**Milestone:** 1.0  
**Title:** Audio-Tactile & Cinematic Ambience Layer  
**Mode:** Tracer-First  
**Target:** [Portfolio_series](file:///c:/Users/Bishn/Desktop/Projs/Portfolio/Portfolio_series)

---

## Objective

Elevate **Sushmita — The Series** from a static visual layout to an immersive, sensory streaming experience. This phase introduces a zero-dependency Web Audio API sound synthesis engine, cursor-tracked ambient lighting glow, refined mobile touch interactions, and strict accessibility guardrails.

---

## Tasks

### Task 1.1 (Tracer Slice): Web Audio API Synthesizer & Mute Toggle
- **Files to create/modify:**
  - Create `src/hooks/useSoundFX.ts`:
    - Context singleton managing `AudioContext` with user-gesture unlock (browser autoplay policy compliant).
    - Synthesized cinematic sting ("ta-dum" resonant dual-oscillator sweep + low pass filter drop).
    - Tactile micro-click sound (20ms frequency click for buttons and links).
    - Subtle hover frequency blip (soft pitch pip).
    - Persistent mute state stored in `localStorage` (`sushmita-series-muted`).
    - Auto-mute if `prefers-reduced-motion` is detected.
  - Update `src/components/Navbar.tsx`:
    - Add a sleek sound toggle button (speaker animated icon / sound wave indicators) next to profile switcher.
    - Keyboard accessible with `aria-label` describing sound state ("Mute sound effects" / "Unmute sound effects").
  - Update `src/components/OpeningSequence.tsx`:
    - Trigger synthesized cinematic sting on title beat when unmuted.

### Task 1.2: Ambient Lighting Bloom & Cursor-Tracked Glow
- **Files to create/modify:**
  - Create `src/components/AmbientGlow.tsx` or enhance `src/components/fx.tsx`:
    - Add a GPU-accelerated radial spotlight effect that follows cursor coordinates across interactive cards and poster containers.
    - Subtle red/crimson ambient edge bloom reflecting the Netflix-style branding palette.
    - Disabled on touch screens or when `prefers-reduced-motion` is active.
  - Update `src/components/ProjectCard.tsx` and `src/components/EpisodeCard.tsx`:
    - Integrate subtle ambient glow backing layer.

### Task 1.3: Mobile Touch & Responsive Refinement
- **Files to modify:**
  - `src/components/Rail.tsx`, `src/components/Originals.tsx`:
    - Enhance mobile swipe rail physics with momentum snap points (`scroll-snap-type: x mandatory`).
    - Ensure zero horizontal viewport overflow on screens below 400px width.
  - `src/components/Navbar.tsx`:
    - Polish mobile navigation drawer with backdrop blur, staggered link animations, and full tap target sizing (min 44px).

### Task 1.4: Accessibility & Reduced Motion Guardrails
- **Files to verify & update:**
  - `src/hooks/useMedia.ts`, `src/components/fx.tsx`:
    - Verify complete bypass of sound triggers and canvas/particle physics under `prefers-reduced-motion`.
    - Ensure full keyboard focus indicators (visible crimson focus rings) across all interactive buttons, cards, and modal triggers.

---

## Verification & Acceptance Criteria

1. **Audio Synthesis & Autoplay:**
   - Sound only plays after explicit user interaction.
   - Audio is synthesized via Web Audio API (no external MP3/WAV network dependencies).
   - Audio toggle in Navbar accurately toggles and persists mute state in `localStorage`.
2. **Visual & Performance Quality:**
   - 60+ FPS animation performance with zero layout thrashing or stutter.
   - Ambient glow operates smoothly without high CPU/GPU overhead.
3. **Mobile & A11y:**
   - Zero horizontal overflow on narrow screens (tested down to 320px).
   - `prefers-reduced-motion: reduce` completely mutes audio and disables heavy motion.
4. **Build Integrity:**
   - `npm run build` (`tsc -b && vite build`) executes cleanly with zero TypeScript errors.

---

## Execution Handoff

After approval, execute tasks sequentially starting with Tracer Task 1.1.
