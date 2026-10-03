# Rifky Ramdhani — Portfolio

Personal portfolio of a Data Engineer, built with [Astro](https://astro.build) and Tailwind CSS v4.
Live at [rifkyramdhani.github.io](https://rifkyramdhani.github.io).

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # type-check + production build into dist/
npm run preview  # serve the production build
```

Requires Node 22.12 or newer.

## Edit content

All text, links, projects, skills and certifications live in [`src/config/index.ts`](src/config/index.ts).
Images and project covers are in [`public/`](public).

## Deploy

Pushing to `main` builds the site and publishes it through GitHub Actions
(`.github/workflows/deploy.yml`). In the repository settings, **Pages → Build and deployment → Source**
must be set to **GitHub Actions**.
