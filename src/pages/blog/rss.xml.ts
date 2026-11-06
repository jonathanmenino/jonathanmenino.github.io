// Feed RSS do blog: /blog/rss.xml (leitores de RSS, newsletters e ferramentas de automação).
import type { APIRoute } from 'astro';
import { BLOG, artigos } from '../../data/blog';
import { url } from '../../data/site';

const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

export const GET: APIRoute = async ({ site }) => {
  const posts = await artigos();
  const link = (c: string) => new URL(url(c), site).href;
  const itens = posts.map((p) => `
    <item>
      <title>${esc(p.data.titulo)}</title>
      <link>${link(`blog/${p.id}/`)}</link>
      <guid isPermaLink="true">${link(`blog/${p.id}/`)}</guid>
      <description>${esc(p.data.descricao)}</description>
      <pubDate>${p.data.data.toUTCString()}</pubDate>
      ${p.data.tags.map((t) => `<category>${esc(t)}</category>`).join('')}
    </item>`).join('');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(BLOG.titulo)}</title>
    <link>${link('blog/')}</link>
    <description>${esc(BLOG.descricao)}</description>
    <language>pt-BR</language>
    <atom:link href="${link('blog/rss.xml')}" rel="self" type="application/rss+xml" />
    ${posts[0] ? `<lastBuildDate>${posts[0].data.data.toUTCString()}</lastBuildDate>` : ''}${itens}
  </channel>
</rss>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/rss+xml; charset=utf-8' } });
};
