// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Endereço final do site: https://jonathanmenino.github.io/
// Com domínio próprio no futuro: troque `site` pelo domínio (e o endereço em public/robots.txt).
// A página de valores para parceiros (/white-label/parceiros/) fica fora do sitemap e com noindex: só quem recebe o link acessa.
export default defineConfig({
  site: 'https://jonathanmenino.github.io',
  trailingSlash: 'always',
  integrations: [tailwind({ applyBaseStyles: true }), sitemap({ filter: (pagina) => !pagina.includes('/white-label/parceiros/') })],
});
