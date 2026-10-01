# AGENTS.md

Guidance for AI coding agents (and human contributors) working in this repo.

## What this is

A personal portfolio site built with Next.js App Router (`app/`), React 19, and Tailwind CSS v4. Static content (bio, project list, tool stack) lives in `public/assets.js`; the `/api/github` and `/api/now-playing` routes proxy the GitHub Events API and Last.fm's API respectively for the live activity feed and "now playing" widget.

## Project layout

- `app/page.js`, `app/layout.js` — top-level page and root layout (fonts, theming).
- `app/components/` — one file per UI section (`Welcome`, `About`, `Projects`, `ProjectCarousel`, `Github`, `NowPlaying`, `LocalTime`, `Footer`) plus `themeManager.js` for dark/light mode.
- `app/api/*/route.js` — server route handlers; each has a co-located `route.test.js`.
- `public/assets.js` — central registry of image/video paths (`assets` export) and structured content (`workData` projects, `infoList`, `tools_stack`). Check this file before assuming an image path is wrong — most "broken image" bugs trace back to a stale entry here.
- `public/assets/` — the actual image/video/PDF files referenced by `assets.js`.

## Commands

- `npm install`
- `npm run dev` — dev server (Turbopack)
- `npm run lint` — `next lint`, must be clean (pre-existing exception: one `no-img-element` warning in `app/page.js`)
- `npm test` — Node's built-in test runner against `app/**/*.test.js`
- `npm run build` — **will fail in network-sandboxed environments** because `next/font/google` needs to reach `fonts.googleapis.com`. This is a known, pre-existing limitation, not a regression — don't treat a build failure here as a sign something you changed is broken unless the error isn't about font fetching.

## Conventions

- Components are `.jsx`, utilities/routes are `.js`.
- Local image paths in `assets.js` should be root-relative (leading `/`) — `next/image`'s local-src validation requires it; a couple of pre-existing entries without the slash only work by accident with plain `<img>` tags.
- Prefer `next/image` over `<img>` for new image usage; `images.remotePatterns` in `next.config.mjs` must list any new external image host.
- No test framework beyond Node's built-in `node:test` is installed — adding component/DOM tests would require a new dependency (e.g. `jsdom`) and should be discussed before adding.

## Constraints

- No breaking changes without discussion.
- No new dependencies without discussion.
- Keep PRs small and focused on one concern.
