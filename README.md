# Akil Fernando — Portfolio

Editorial portfolio built with Astro. Static output, near-zero JS, self-hosted fonts.
Design and structure spec lives in `portfolio-spec.md`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # outputs to dist/
npm run preview  # serve the built site
```

Requires Node 18+ (built on Node 22).

## Stack

- Astro 5 (static)
- Vanilla CSS with design tokens (`src/styles/tokens.css`)
- Content Collections for blog + projects (`src/content/`)
- MDX for posts
- Self-hosted variable fonts: Fraunces, Inter, JetBrains Mono

## Structure

```
src/
  styles/      tokens.css (all design tokens), global.css
  config.ts    name, tagline, nav, socials
  layouts/     BaseLayout (head/meta/fonts/header/footer)
  components/  Masthead, Footer
  data/        career.ts (experience, education, skills)
  content/     blog/*.mdx, projects/*.md  (schemas in content/config.ts)
  pages/       index (The Index), career, projects, about, blog/
public/        favicon.svg, cv.pdf (add yours)
```

## Editing content

- **Career:** edit `src/data/career.ts`.
- **Blog post:** add `src/content/blog/<slug>.mdx` with frontmatter (title, date, description, tags, draft).
- **Project:** add `src/content/projects/<slug>.md` with frontmatter (title, year, role, category, stack, blurb, links).
- **CV:** drop your PDF at `public/cv.pdf` (the Career button links there).
- **Colors/type:** `src/styles/tokens.css`.

## Deploy (GitHub Pages)

1. Push this to the `akilfernando.github.io` repo, branch `main`.
2. Repo Settings → Pages → Build and deployment → Source: **GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and publishes on every push.

### Custom domain (optional, ~$13/yr)
- Register the domain, add a `public/CNAME` file containing just the domain.
- Point DNS at GitHub Pages, set the domain in repo Pages settings, enable HTTPS.
- Update `site` in `astro.config.mjs`.

## Status

Phase 1 + Home + Career scaffolded. Projects, Blog, About are working stubs.
See `portfolio-spec.md` Section 10 for the remaining roadmap.
