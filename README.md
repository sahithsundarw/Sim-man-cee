# SimManCee Game Hub

Business simulation platform — public landing page, simulations library with
per-simulation detail pages, and a progress dashboard.

## Tech Stack
- React 19 + Vite 7 (client)
- Tailwind CSS v4 + shadcn/ui (new-york, dark navy theme)
- React Router (BrowserRouter)
- Recharts (dashboard chart), Motion (number ticker), Aceternity Spotlight (hero)
- Node.js + Express (API server, `GET /api/games`)

## Structure
- `client/src/data/simulations.js` — single source of truth for all 8 simulations
  (stats are mock placeholders, marked in comments)
- `client/src/hooks/useSimulations.js` — merges live API fields onto the data file
  by id; falls back to the data file when the API is unreachable
- Routes: `/` (landing), `/simulations`, `/simulations/:slug`, `/dashboard`

## Run Locally

### Server
cd server
npm install
npm run dev        # port 5500

### Client
cd client
npm install
$env:VITE_API_URL='http://localhost:5500/api/games'   # PowerShell
npm run dev        # port 5173

## Deploy
GitHub Actions (`.github/workflows/deploy.yml`) builds the client and publishes
to GitHub Pages, including a `404.html` SPA fallback for deep links.
Prefer Actions over the manual `npm run deploy` script — the manual path skips
the 404 fallback step.

Note: the production API default is plain `http://`, which an https Pages site
cannot fetch (mixed content). Until the API is served over https, the deployed
site runs entirely on the data-file values.
