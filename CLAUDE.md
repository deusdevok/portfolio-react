# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A single-page personal portfolio built with Create React App (react-scripts 5.0.1), styled as a "cyberpunk/terminal" (Deus Ex-inspired) UI, deployed to GitHub Pages at https://deusdevok.github.io/portfolio-react.

## Commands

```bash
npm start          # dev server at localhost:3000
npm run build      # production build to build/
npm test           # react-scripts test (CRA/Jest + React Testing Library)
```

To run a single test file: `npm test -- src/App.test.js` (CRA's Jest watch mode; pass `--watchAll=false` for a single non-watch run).

No linting/formatting scripts beyond CRA's built-in ESLint (`eslintConfig` in package.json extends `react-app`).

## Architecture

- **Content is entirely data-driven via i18n.** There is no hardcoded copy in components. All page text, project lists, experience entries, skills, and nav labels live in `src/locales/{en,es}/translation.json`, keyed by section (`home`, `about`, `projects`, `skills`, `contact`, `navigation`, `footer`). `src/i18n.js` configures i18next with `LanguageDetector` (localStorage → navigator → htmlTag) and English fallback.
- **`src/hooks/useContent.js` is the sole access point for translated content.** It wraps `useTranslation()` and exposes one object per section (`t(key, { returnObjects: true })`), plus helpers `getProjectById` and `getSkills`. Components never call `useTranslation`/`t` directly — they call `useContent()` and destructure the section they need. When adding a new content section, add it to both locale JSON files and to the object returned by `useContent`.
- **Routing** uses `react-router-dom` with `basename="/portfolio-react"` (required for GitHub Pages subpath hosting — see `App.js`). Routes: `/`, `/about`, `/skills`, `/projects`, `/contact`, each mapped to a component in `src/components/pages/`.
- **`src/components/pages/*.jsx`** are the route-level page components; `src/components/` (top level) holds shared chrome: `DeusExHeader.jsx` (desktop nav + mounts `LanguageSwitcher` and `BurgerMenu`), `BurgerMenu.jsx` (mobile nav), `LanguageSwitcher.jsx`.
- **Theming/visual effects** (scan-line overlay, glitch text-shadow flicker on `.section-title`) are applied imperatively in `App.js` via a `useEffect` that manipulates `document.body` classes and inline styles directly — not via CSS-in-JS or a theme provider. Global styles live in `src/styles/deusex.css` and `src/index.css`.
- **Static assets** (`resume.pdf`, `avatar.jpg`, favicons) live in `public/` and are referenced with `${process.env.PUBLIC_URL}/...` for correct paths under the GitHub Pages subpath.

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys `build/` to GitHub Pages via `peaceiris/actions-gh-pages` on every push to `master`. Manual deploy alternative: `npm run build && npx gh-pages -d build` (requires `gh-pages` devDependency, not currently installed). `package.json`'s `homepage` field must stay in sync with the GitHub Pages URL for asset paths to resolve correctly.
