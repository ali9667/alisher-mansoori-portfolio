# Alisher Mansoori — Portfolio

React + TypeScript + Vite + Framer Motion + React Router. Content is data-driven (`src/data/`).

## Run
```
npm install
npm run dev        # development
npm run build      # type-check + production build
npm run preview    # serve dist/
```
Deploy `dist/` to Netlify/Vercel. `public/_redirects` handles SPA routing on Netlify (Vercel needs a rewrite to `/index.html`).

## Structure
`src/components` (Nav, Cursor, Reveal/Mask, ProjectCard, ArchDiagram, Bits) · `src/sections` (Hero, Work, Service, Experience, Toolkit, Contact) · `src/pages` (Home, Project) · `src/data` (profile, projects, services, experience, skills) · `src/hooks/cursor.ts` (shared motion values + easing) · `src/styles/global.css`.

## Project data
Edit `src/data/projects.ts`. Routes: `/` and `/project/:slug` (ticketguard, nodepattern, templatos, solarinvest). Browser back works; "Back" and "/MORE WORK" return to `/#work`.

## Animation approach
Measured from the reference recording (10 fps frame analysis): section content staggers in with translate + opacity and clipped line-mask text reveals (`cubic-bezier(.22,1,.36,1)`, ~0.8–0.95 s, 0.1–0.2 s stagger). Project detail: canvas scales from 0.93 → 1 (~0.5 s) under a diagonal light-sweep, then header/title/meta/visual rise in sequence. Engineering rows expand into a dark card with a tilted preview; Experience rows reveal a tilted preview that follows the pointer.

## Performance decisions
- Cursor and experience preview use module-level `MotionValue`s + springs; pointer events never call `setState`. Cursor mode is a `dataset` toggle styled in CSS.
- Background is one pseudo-element of gradients animated by `transform` only. No backdrop-filter, no blur layers, no blend modes.
- Animations use transform/opacity; reveals fire once via IntersectionObserver. Images are lazy/async-decoded below the fold.
- `prefers-reduced-motion` is respected (`MotionConfig` + CSS). Cursor is not rendered on touch devices.

## Accessibility
Semantic headings/nav, keyboard-reachable cards (links) and accordions (buttons with `aria-expanded`), visible focus rings, alt text, tablist semantics for filters.

## Resume
The hero and contact buttons link to `/resume.pdf`. 

## Project detail content
Each project page renders `sections` from `src/data/projects.ts` (backend, data, security, concurrency, testing, deployment). `challenges` and `tradeoffs` are optional fields that appear only when filled in; none were provided, so none are shown.

## Known limitations
- Reference font is not named in the recording; Manrope is the closest match by visual comparison (not verified against a source file).
- Portrait is your photo with a grayscale + white-point treatment, not a true cutout; its cropped shoulders are faded at the sides.
- NodePattern has no real screenshots: an illustrative diagram is used and labelled. Experience hover previews are labelled placeholders.
- Nav counts (`[40]`, `[9y+]`) are omitted on purpose.
- Detail pages use only supplied facts, so they are shorter than the reference's.
