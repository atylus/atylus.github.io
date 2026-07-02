This project now runs on [Astro](https://astro.build) with [Starlight](https://starlight.astro.build).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:4321](http://localhost:4321) with your browser to see the result.

Astro pages live under `src/pages/`. React page wrappers preserved for parity live under `src/react-pages/`.

Docs content lives under `src/content/docs/docs/`, and collection-based editorial content lives under `src/content/blog/`.

## Commands

- `npm run dev` starts Astro dev server
- `npm run build` builds static output
- `npm run start` previews the built site
- `npm run check` runs Astro diagnostics
- `npm run lint` runs ESLint

## Notes

- Global styling is preserved from `public/assets/scss/style.scss`.
- Starlight docs are published under `/docs/`.
- Legacy marketing/blog React pages are rendered inside Astro through a compatibility layer to preserve the existing UI.
