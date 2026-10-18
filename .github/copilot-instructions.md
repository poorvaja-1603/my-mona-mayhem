# Copilot instructions for Mona Mayhem

## Project overview

This repository is a workshop template for building a retro arcade-style GitHub contribution battle app called Mona Mayhem. The project is built with Astro and is designed to teach GitHub Copilot work in both VS Code and CLI workflows.

- `src/`: app source for the live Astro experience.
- `workshop/`: the workshop chapters and step-by-step Copilot prompts.
- `docs/`: static documentation/site content published via GitHub Pages.
- `.github/workflows/deploy.yml`: deploys the docs/workshop output to GitHub Pages; it does not currently build or deploy the Astro app from `src/`.

The main app flow described by the workshop is:

- `src/pages/index.astro` is the battle page UI.
- A server endpoint under `src/pages/api/contributions/[username].ts` (planned/workshop-defined) fetches GitHub contribution data without browser CORS restrictions.
- The page validates two usernames, fetches both users' contribution datasets in parallel, and renders contribution grids as a "battle" comparison.

## Build, test, and lint commands

The repository currently defines these scripts in `package.json`:

```bash
npm install
npm run dev
npm run build
npm run preview
```

- `npm run dev` starts the Astro dev server (typically at `http://localhost:4321`).
- `npm run build` creates the production build.
- `npm run preview` serves the production build locally.

There is no configured lint script and no automated test suite in the repo right now. There is no single-test command to run yet.

For validation in this repo, prefer manual browser verification against the local Astro app while the dev server is running, especially for the workshop flow described in `workshop/`.

## Architecture and design conventions

- This repo is not a conventional app-first codebase with a deep server/service split. It is a workshop app that teaches a straightforward UI + API pattern in a small Astro project.
- Keep feature work aligned with the workshop steps in `workshop/`; the exercise expects a simple, readable implementation rather than a large framework abstraction.
- Treat `docs/` and `workshop/` as educational/static content. They are not the runtime app source.
- Prefer the simple Astro page/API structure over introducing additional libraries or build tooling unless a workshop step explicitly calls for it.
- The app is intentionally lightweight: the battle experience is implemented with Astro pages, a small fetch boundary, and browser-side rendering.

## Retro arcade visual guide

- Keep the live app's dark arcade background (`#0a0a1a`) with neon green (`#5fed83`) and purple (`#8a2be2`) as its primary accent colors.
- Use Press Start 2P from Google Fonts for arcade headings and controls, with readable fallback/system fonts for longer copy and contribution details.
- New UI should maintain the neon arcade aesthetic: dark surfaces, glowing accent details, and restrained pixel-game styling rather than neutral or default component themes.
- Use short, purposeful motion such as neon flicker/pulse, gradient shifts, shimmer, and hover glows. Respect `prefers-reduced-motion` for decorative animation.

## Conventions specific to this repository

- Use `src/pages` for routes and page-level logic; keep server endpoints in `src/pages/api/...` when implementing API-backed features.
- When working on the GitHub contribution feature, follow the workshop's expected data flow: fetch contribution data for a username, validate the response, then render the comparison UI in the page.
- Do not assume GitHub Pages is the deployment target for the Astro app itself: README notes that the current workflow deploys docs/workshop content, and the app may need different hosting if it uses server output.
- Keep changes small and targeted to the active workshop step; this repository is intentionally instructional and easy to follow.
- If a task or feature is described in `workshop/03-agent-mode.md` or `workshop/02-plan-and-scaffold.md`, implement the corresponding step rather than inventing a different architecture.

## When making changes

- Start from the existing page or route that the workshop step is targeting.
- Keep HTML, CSS, and client-side logic in the same page when the workshop calls for a simple prototype.
- Use the repo's Astro conventions and avoid broad refactors unrelated to the task.
- Validate with `npm run dev` and direct browser checks before treating the feature as complete.
