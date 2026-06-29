/**
 * Regenerates the static social-share image at public/og.png (1200x630).
 * Run when the name or tagline changes:  node scripts/og-image.mjs
 *
 * Authoring-time only (NOT part of `astro build`). Uses sharp, which ships
 * with Astro, to rasterize an on-brand SVG with Fraunces embedded as woff2.
 */
import sharp from 'sharp';
import { readFileSync } from 'node:fs';

// Keep in sync with src/config.ts (site.name / site.tagline).
const site = { name: 'Akil Fernando', tagline: 'IT lead, developer, and game-maker.' };

const FONT = 'node_modules/@fontsource-variable/fraunces/files/fraunces-latin-full-normal.woff2';
const fontB64 = readFileSync(FONT).toString('base64');

const W = 1200, H = 630;
const paper = '#FBF9F4', ink = '#1A1A1A', muted = '#57534E', cobalt = '#16429E';

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <style>
      @font-face {
        font-family: 'Fraunces';
        src: url(data:font/woff2;base64,${fontB64}) format('woff2');
        font-weight: 100 900;
      }
      .name { font-family: 'Fraunces', Georgia, serif; font-weight: 500; fill: ${ink}; }
      .tag  { font-family: 'Fraunces', Georgia, serif; font-weight: 400; fill: ${muted}; }
      .eyebrow { font-family: monospace; fill: ${cobalt}; letter-spacing: 4px; }
    </style>
  </defs>
  <rect width="${W}" height="${H}" fill="${paper}"/>
  <text x="90" y="250" class="eyebrow" font-size="22">PORTFOLIO</text>
  <rect x="90" y="270" width="56" height="3" fill="${cobalt}"/>
  <text x="86" y="380" class="name" font-size="118">${site.name}</text>
  <text x="90" y="450" class="tag" font-size="40">${site.tagline}</text>
  <rect x="0" y="${H - 14}" width="${W}" height="14" fill="${cobalt}"/>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile('public/og.png');
console.log('wrote public/og.png');
