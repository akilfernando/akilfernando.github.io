// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// Served from a custom domain (akilfernando.dev) via public/CNAME, at root.
export default defineConfig({
  site: 'https://akilfernando.dev',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    // 'css-variables' theme lets us map syntax colors onto the palette
    // (see --astro-code-* tokens in global.css). Keeps code blocks on-brand.
    shikiConfig: { theme: 'css-variables', wrap: true },
  },
});
