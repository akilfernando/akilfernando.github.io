// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// User-pages repo (akilfernando.github.io) serves from root, so base is '/'.
// If you move to a custom domain, just change `site` and add public/CNAME.
export default defineConfig({
  site: 'https://akilfernando.github.io',
  base: '/',
  integrations: [mdx(), sitemap()],
  markdown: {
    // 'css-variables' theme lets us map syntax colors onto the palette
    // (see --astro-code-* tokens in global.css). Keeps code blocks on-brand.
    shikiConfig: { theme: 'css-variables', wrap: true },
  },
});
