# Claude Code Prompt — SimManCee Front-End Redesign

Copy everything below into Claude Code (in the root of your existing SimManCee repo).

---

## PROMPT START

I have an existing web app called **SimManCee** (a business simulation platform). The current front end is functional but visually basic (plain dark background, default blue buttons, no real information architecture). I need you to **redesign and rebuild the entire front end** to match a target visual reference I'm describing below, while preserving all existing content and functionality.

### Step 0 — Orient yourself first
Before writing any code:
1. Explore the repo structure (`ls`, read `package.json`, check for framework — React/Next/Vite/plain HTML, routing library, existing component structure, CSS approach).
2. Identify where simulation data currently lives (hardcoded in JSX, JSON, CMS, API call, etc.).
3. Identify all existing content that must be preserved:
   - Simulations: **Clash of Taxis** (Strategy), **Baker's Corner** (Operations), **Fake vs Fact: Buybacks** (Finance), **Network Policy Lab** (Public Policy), **Service Optimizer** (Operations), **Financial Literacy** (Finance), **Influence & Welfare** (OB/HR), **Bargaining Arena** (Economics) — plus their existing descriptions/images.
   - Founding Team section: **Raviteja** (Founder — NALSAR University, PhD IIM Raipur/IIM Bangalore, Simulation design & pedagogy) and **Jose Manu** (Co-Founder — Mahindra University, PhD IIM Bangalore, M.Tech BITS Pilani, Technology & quantitative modelling).
   - About Us paragraph and tagline ("Place to play monkey business").
4. Confirm whether routing already exists. If not, add a router (React Router if React/Vite; Next.js file-based routing if Next).

Do not invent new simulations or delete existing ones — only restyle and restructure. If you need placeholder stats (play counts, ratings) that don't exist yet in the data, add them as clearly-labeled mock/seed data in a single data file so they're easy to replace with real numbers later.

### Step 1 — Design system to implement
Build a small design-tokens layer (CSS variables or Tailwind theme extension — match whatever styling approach the repo already uses) with:

- **Background**: near-black navy (`#0B0F1A`–`#10141F` range), slightly lighter elevated surface color for cards (`#161B29` range).
- **Accent gradient**: blue → purple → orange, used on the logo mark, headline highlight text, and primary buttons (e.g. `linear-gradient(90deg, #6D5EF5, #F5A623)` — adjust to taste but keep the blue-to-orange feel).
- **Primary button**: solid indigo/purple (`#5B4FE0`-ish), rounded-lg, medium weight text.
- **Secondary/outline button**: transparent with 1px border, same rounding.
- **Category tag chips**: small rounded-full badges, orange for one category tone, distinct color per category if possible, sitting on top of card images.
- **Typography**: bold, large hero headline (48–56px), gradient applied to 1–2 of the three lines only (see hero content below), body text in muted gray (`#9CA3AF`-ish), consistent card title/description hierarchy.
- **Cards**: rounded-2xl, subtle border or shadow, image on top (16:9), category badge overlapping the image top-left, title + short description + footer row with plays count and star rating.
- Ensure full responsiveness (mobile, tablet, desktop) and dark-mode-only (no light theme needed).

### Step 2 — Pages/sections to build

**A) Public Landing Page** (`/`)
- Top nav: logo + wordmark, links (Simulations, Leaderboard, About Us, Resources), right-aligned "Log in" (ghost) and "Sign up" (filled) buttons.
- Hero section: three-line headline —
  - Line 1 plain white: "Business"
  - Line 2 gradient (blue): "Simulations."
  - Line 3 gradient (orange): "Real Decisions."
  - Subtext describing learning-by-doing.
  - Two CTAs: "Explore Simulations" (filled, links to `/simulations`) and "Watch Demo" (outline, with a play icon).
  - Right side: an illustrative hero graphic/icon composition (isometric chart/laptop style) — use an existing illustration if you have one, otherwise a tasteful SVG/CSS abstract graphic evoking growth charts and decision-making. Don't over-engineer this; a clean abstract SVG is fine.
  - Below the fold of the hero: 3 stat items with icons — "10+ Simulations", "5K+ Active Players", "95% Satisfaction" (pull real numbers if available, else keep as placeholder labeled in the data file).
- Reuse the existing About Us / Founding Team content below, restyled to match the new card/typography system (founder photo circular avatar, name, role in accent color, bullet list of credentials).

**B) App Shell (authenticated-feel layout)** used by the next three sections
- Persistent left sidebar (collapsible on mobile): logo at top, nav icons+labels for **Simulations, My Progress, Leaderboard, Achievements, Resources, Notifications, Settings**, and a user profile mini-card pinned to the bottom (avatar, name, level).
- Main content area to the right, scrollable independently.

**C) Simulations Library Page** (`/simulations`)
- Header "Simulations" + subtext, search input (with icon) and a filter icon button, top-right.
- Horizontal category tab bar: All, Strategy, Finance, Operations, Public Policy, OB/HR, Economics — active tab highlighted in the primary accent color.
- Responsive grid of simulation cards (as described in Step 1) for all 8 existing simulations, each tagged with its correct category.
- **Each card's "Play"/click action must route to a dedicated detail page**: `/simulations/:slug` (e.g. `/simulations/clash-of-taxis`).

**D) Simulation Detail Page** (`/simulations/:slug`)
- "← Back to Simulations" link.
- Title + category badge + one-line subtitle.
- Quick stats row: Total Plays, Rating (stars), Avg. Play Time, Difficulty.
- Two buttons: "Play Simulation" (filled, primary) and "View Tutorial" (outline).
- Tab bar: Overview / How to Play / Leaderboard / Reviews.
  - **Overview** (build fully now): "About This Simulation" description, a bullet list of key mechanics (e.g. Dynamic pricing strategy, Fleet management, Real-time competition, Market demand analysis — adapt per simulation), a large banner image, and a "What You'll Learn" row of skill tag chips (e.g. Market Analysis, Strategic Pricing, Operations Management, Competitive Strategy).
  - **How to Play / Leaderboard / Reviews**: build the tab UI and switching logic now; content can be a clean "Coming soon" placeholder per tab unless real data exists — don't block the rest of the page on these.
- This page must pull its content from the per-simulation data object (by slug) so all 8 simulations automatically get a working detail page — don't hardcode one-off pages per simulation.

**E) Progress Dashboard** (`/dashboard` or `/my-progress`)
- "Welcome back, {user's name}! 👋" header with a streak badge (e.g. "7 day streak" with a flame icon).
- Stat cards row: Simulations Played, Win Rate, Total Score, Rank — each with a small delta/change indicator (e.g. "+2 this month").
- Two-column panel: "Recent Activity" list (simulation name, time ago, points earned) and "Performance Trend" (a simple line chart by day of week — use a lightweight charting approach consistent with the stack, e.g. Recharts if React).
- If there's no real user/auth system yet, wire this to mock data in the same data file, clearly commented as placeholder, structured so it's trivial to replace with real API/user data later.

### Step 3 — Data layer
Create a single source-of-truth data file (e.g. `src/data/simulations.js` or `.ts`/`.json`, matching the stack) containing an array of simulation objects with: `slug, title, category, shortDescription, aboutDescription, image, bannerImage, plays, rating, avgPlayTime, difficulty, mechanics[], learnTags[]`. Populate all 8 real simulations from the existing site's content — do not leave any as "Lorem ipsum."

### Step 4 — Quality bar
- Keep components small and reusable (Card, Badge, Button, Tabs, Sidebar, StatCard, etc.) rather than one giant page file.
- Match spacing/rhythm consistently across pages (use the same container max-width and section padding scale everywhere).
- Verify every "Play" button/card actually navigates to a working detail route for its own simulation — test all 8.
- Test responsive behavior at mobile width (sidebar should collapse to a bottom nav or hamburger, hero should stack vertically).
- Run the project locally (or the appropriate build/lint check) at the end and fix any errors before finishing.
- Do not remove or break any existing backend/API calls that aren't related to styling — if a component fetches real data, keep the fetch logic and only change presentation.

Please start by exploring the codebase and giving me a short plan (tech stack found, routing approach you'll use, file structure you intend to create) before you start writing code.

## PROMPT END
