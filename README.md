# Akil Fernando · Portfolio

A research-oriented personal site built with Astro. Static output, self-hosted fonts, and a quiet editorial design in warm paper, ink, and deep green.

## Local development

```sh
npm ci
npm run dev
npm run build
npm run preview
```

## Structure

- `src/pages/`: home, research, projects, about, career, and the existing writing, blog, library, and special pages.
- `src/content/`: project case studies, technical posts, creative writing, and the reading/playing log. Existing authored pieces are preserved.
- `src/data/career.ts`: experience, education, skills, and professional CV links.
- `src/styles/tokens.css`: color, spacing, and typography tokens. Older page templates use compatibility aliases for the accent color.
- `src/components/ResearchDiagram.astro`: accessible illustration of code and asset dependencies on the Research page.
- `src/config.ts`: identity, primary navigation, and social links.
- `public/cv/`: existing professional CV PDFs.

Fraunces, Inter, and Courier Prime are bundled locally. Primary pages work without client JavaScript. The project category filter progressively enhances the full index.

## Content guidance

Read `CLAUDE.md` and `docs/voice-spec.md` before editing copy. Do not invent research outputs, publications, measurements, or reviews. Creative writing is reproduced verbatim. Graduate wording reflects confirmed incoming MSc status, without claiming current enrollment or completed research.

Add project entries as Markdown in `src/content/projects/` using the schema in `src/content/config.ts`. Blog entries use MDX. The Research page distinguishes exploratory prototypes on synthetic fixtures from published research.

## Deployment

GitHub Pages builds and publishes through the existing workflow in `.github/workflows/deploy.yml`. The canonical domain is `https://akilfernando.dev`; `public/CNAME` retains that domain. Hosting configuration and existing CV PDFs are preserved.

## Interaction details

Internal text links use a right arrow; external destinations use a diagonal arrow; email links use an envelope. Homepage section links have one whole-row link and an explicit keyboard focus state. Category filters expose their selected state and work without hiding content when JavaScript is unavailable.

The small pixel invader in the footer enables an optional early-2000s theme. The setting persists locally between pages, restores before first paint, and can be reversed from the top banner or footer. The toggle has a keyboard-accessible label and hint; it stays hidden when JavaScript is unavailable. The theme uses static decoration, without flashing or autoplay.

The header theme icon offers Light, Dark, and System default. Explicit choices persist locally; System follows the operating system preference. Retro mode temporarily overrides that palette without changing the saved choice.
