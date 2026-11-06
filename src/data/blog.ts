/* =========================================================
   BLOG: funções usadas pela lista (/blog/), pelos artigos e pelo RSS.
   Os artigos ficam em src/content/blog/ (um .md por artigo).
   ========================================================= */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;

export const BLOG = {
  titulo: 'Blog · Jonathan Menino',
  nome: 'Blog',
  descricao: 'Artigos sobre sites rápidos, seguros e fáceis de encontrar no Google e nas IAs. Para agências e para quem tem um negócio.',
};

/** Rótulos de "para quem é" o artigo. */
export const PUBLICOS = {
  agencias: 'Para agências',
  empresas: 'Para empresas',
  todos: 'Para todos',
} as const;

/** Artigos publicados (sem rascunhos), do mais novo para o mais antigo. */
export const artigos = async () =>
  (await getCollection('blog', ({ data }) => !data.rascunho)).sort((a, b) => b.data.data.getTime() - a.data.data.getTime());

/** Minutos de leitura (cerca de 200 palavras por minuto). */
export const tempoLeitura = (texto = '') => Math.max(1, Math.round(texto.split(/\s+/).filter(Boolean).length / 200));

/** Data por extenso: 6 de novembro de 2026. */
export const dataLonga = (d: Date) => d.toLocaleDateString('pt-BR', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });

/** Data curta: 06 nov. 2026. */
export const dataCurta = (d: Date) => d.toLocaleDateString('pt-BR', { day: '2-digit', month: 'short', year: 'numeric', timeZone: 'UTC' });
