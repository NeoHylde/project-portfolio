# Contributing

Thanks for your interest in this project! This is Neo's personal portfolio site, built with Next.js. Contributions, bug reports, and suggestions are welcome.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the site. It auto-updates as you edit files under `app/`.

## Project structure

- `app/page.js`, `app/layout.js` — top-level page and layout
- `app/components/` — UI sections (`About`, `Projects`, `ProjectCarousel`, `Github`, `NowPlaying`, `LocalTime`, `Welcome`, `Footer`) and the `themeManager` light/dark helper
- `app/api/` — Next.js API routes (e.g. `github`, `now-playing`), each with a co-located `route.test.js`
- `public/assets/` — images, videos, and the resume PDF referenced by `public/assets.js`

## Before submitting a change

Run these and make sure they pass:

```bash
npm run lint   # next lint (ESLint)
npm test       # node --test app/**/*.test.js
```

`npm run build` requires network access to `fonts.googleapis.com` (used by `next/font/google`), so it won't succeed in fully offline environments — that's expected.

## Guidelines

- Keep pull requests small and focused on one concern.
- Match the existing code style (functional components, Tailwind CSS for styling).
- Add or update a test alongside any bug fix or new API route logic where practical.
- Avoid introducing new dependencies without discussing the rationale first — this project prioritizes stability and minimal dependencies.

## Reporting bugs or ideas

Please open an issue describing the problem or suggestion, including steps to reproduce for bugs. This repo is also monitored by [Repo Assist](https://github.com/githubnext/agentics/blob/main/docs/repo-assist.md), an automated AI assistant that helps triage issues and propose fixes — comments and pull requests from it are clearly labelled as such.
