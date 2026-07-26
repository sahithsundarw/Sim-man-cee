# PRODUCT.md — SimManCee

## What it is
SimManCee is a web platform hosting business simulations — interactive games that teach business and economics concepts (strategy, finance, operations, public policy, organizational behavior, economics) through decision-making under realistic market dynamics.

## Audience
Business/economics students and curious learners. (Assumption: primarily university students in India — sim content references Indian markets, rupees, ride-hailing. Labeled assumption, not user-confirmed.)

## Content truth
- 8 simulations, defined in `client/src/data/simulations.js` (single source of truth), mirrored by `GET /api/games` (`server/index.js`).
- Categories: Strategy, Finance, Operations, Public Policy, OB/HR, Economics.
- No simulation is playable yet — "Play" is a shell for future game embeds. Plays/ratings/playtime are MOCK placeholder values, marked as such in the data file.
- Founders section features two real founders with photos (`client/public/founders/`).

## Surfaces
- `/` Landing (Persuade) — public front door: hero, about, founders.
- `/simulations` Hub (Operate) — browse/search/filter catalog.
- `/simulations/:slug` Detail (Operate) — sim info + future play container.
- `/dashboard` (Operate) — mock progress/stats, shadcn sidebar shell.

## Brand commitments (user-confirmed 2026-07-26)
- Playful, bold, colorful, energetic. NOT corporate/minimal, NOT dark/moody.
- Hard constraints: no purple gradients, no glassmorphism, border radius ≤4px, monospace for data.
- Visual world: "Boardwalk" (business board game) — see DESIGN.md.

## Constraints
- React 19 + Vite 7 (JS), Tailwind v4, shadcn/ui, motion v12, react-router 7.
- Deployed to GitHub Pages under `/Sim-man-cee/` base path; SPA 404 fallback.
- Known limitation: http API vs https Pages (mixed content) — catalog falls back to local data offline.

## Platform
Web, responsive desktop + mobile.
