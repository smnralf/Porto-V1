---
name: project-portfolio
description: Portfolio website project — Next.js 16, Tailwind v4, React 19, dark navy theme with cyan/purple accents
metadata:
  type: project
---

Full freelance portfolio built and deployed. All pages fully static (SSG).

**Why:** Personal portfolio + service landing page selling freelance web dev services (Indonesian copywriting).

**How to apply:** The project structure and data files in `src/data/` contain all editable content. WhatsApp number is `6281234567890` in `src/lib/utils.ts` via `WHATSAPP_NUMBER` constant.

## Key tech notes
- Next.js 16 App Router — `params` is a `Promise`, use `await props.params`
- `PageProps<'/route/[slug]'>` helper is globally available (no import needed)
- Tailwind v4 — custom colors in `@theme {}` block in globals.css, `@import "tailwindcss"` not `@tailwind base`
- Framer Motion 12 — same API, standard `motion`, `AnimatePresence`
- Lenis 1.3 — initialized in `SmoothScroll.tsx` client component via `useEffect`
- lucide-react 1.17 does NOT export `Github` — use `GitBranch` instead
- React 19 — `setState` in `useEffect` synchronously triggers the `react-hooks/set-state-in-effect` ESLint rule; use state-during-render pattern instead

## File structure
- `src/data/` — all editable content (projects, services, faq, tech-stack)
- `src/components/layout/` — Navbar (client), Footer (server)
- `src/components/sections/` — all homepage sections
- `src/components/cards/` — ProjectCard, ServiceCard
- `src/components/ui/` — Button, Badge, SectionWrapper, SmoothScroll
- `src/lib/utils.ts` — cn(), whatsappUrl(), WHATSAPP_NUMBER
