# Nikhil Murugan D P — Portfolio 2027

Premium foundation for a production portfolio. Phase 1 delivers the design system, routing, hero experience, motion layer, and API skeleton.

## Architecture

```
portfolio/
  client/                 Vite + React 19 + TypeScript
    src/
      assets/             Replace portrait here / public
      components/         UI, layout, magic, sections
      sections/           Page-level compositions live under components/sections
      pages/              Route screens (lazy-loaded)
      layouts/            Root chrome + page transitions
      hooks/              Lenis, magnetic, motion, media
      services/           REST client
      animations/         Framer variants + GSAP helpers
      constants/          Site + navigation
      data/               Stats, socials, copy
      styles/             Tailwind v4 design tokens
      lib/                cn() and shared utilities
      types/              Shared TypeScript contracts
  server/                 Express + TypeScript
    src/
      routes/
      controllers/
      models/             MongoDB Atlas schemas
      middleware/
      config/             env + database
      utils/
      services/           Future CMS / AI chatbot seams
```

## Design system

- Canvas: `#050505`
- Accents: electric blue, violet, cyan, white glass, soft gray
- Type: Inter Tight (display), Geist (body), Space Grotesk (accent), JetBrains Mono (code)
- Motion: Framer Motion + GSAP + Lenis, gated by `prefers-reduced-motion`

Replace the circular portrait by adding `client/public/portrait.jpg`. Drop a PDF at `client/public/resume.pdf` for the download action.

## Setup

```bash
cd client
npm install
npm run dev
```

```bash
cd server
copy .env.example .env
npm install
npm run dev
```

Client: `http://localhost:5173`  
API: `http://localhost:5000/api/health`

Vite proxies `/api` to the Express server during development.

## API placeholders

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/api/health` | Service health |
| GET | `/api/projects` | Future case studies |
| POST | `/api/contact` | Future contact + CMS |
| GET | `/api/resume` | Future resume metadata |

MongoDB Atlas connection is optional until `MONGODB_URI` is set.

## Scripts

Root:

- `npm run dev` — frontend
- `npm run dev:server` — API
- `npm run build` — client + server production builds
