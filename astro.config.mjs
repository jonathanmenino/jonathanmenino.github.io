// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Endereço final do site: https://jonathanmenino.github.io/
// Com domínio próprio no futuro: troque `site` pelo domínio (e o endereço em public/robots.txt).
export default defineConfig({
  site: 'https://jonathanmenino.github.io',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap()],
});
