# NACIN Website (Beta Prototype)

This repo is a **local, offline-friendly prototype** (Homepage + Programs & Training flagship page).

## What’s included
- Vite + React + Tailwind (local build, no CDN)
- Homepage with: hero, about, sections, notices ticker (static), callouts
- Flagship page: **Programs & Training** catalog with tabs + filters + search (dummy JSON)
- Dark mode (system/light/dark)
- Analytics placeholder (disabled by default)
- Footer links including discreet “Screen Reader Access”

## Run locally
1) Install dependencies
```bash
npm install
```

2) Start dev server
```bash
npm run dev
```

Open the printed URL (typically http://localhost:5173).

## Build a demo folder
```bash
npm run build
npm run preview
```

The static output is generated in `dist/`.

## Replace assets
- `src/assets/logo.svg` → replace with official NACIN/CBIC/GoI logos as needed
- `src/assets/hero-placeholder.svg` → replace with approved campus/classroom/officer photos

## Notes
- Search / Language toggle / Portal are intentionally marked “Beta” and can be enabled post pilot approval.
- Analytics is a placeholder to be wired to an approved provider later.
