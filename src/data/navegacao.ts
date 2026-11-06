/* =========================================================
   NAVEGAÇÃO DO SITE: os links do topo e do rodapé de todas as páginas.
   Mude aqui e o site inteiro acompanha (src/components/site/Topo.astro e Rodape.astro).
   A página de valores para parceiros (/white-label/parceiros/) fica de fora de propósito.
   ========================================================= */
import { type Idioma, pagina, tradutor } from '../i18n';

export type Secao = 'inicio' | 'portfolio' | 'empresas' | 'agencias' | 'blog' | 'curriculo';

export interface LinkNav { id: Secao; texto: string; dica: string; href: string }

/** Links principais, na ordem do menu. O Blog só existe em português. */
export const linksNav = (L: Idioma): LinkNav[] => {
  const T = tradutor(L);
  const links: LinkNav[] = [
    { id: 'portfolio', texto: T('Portfólio', 'Portfolio'), dica: T('projetos', 'projects'), href: pagina(L, 'portfolio/') },
    { id: 'empresas', texto: T('Para empresas', 'For businesses'), dica: T('sites e marcas', 'websites and brands'), href: pagina(L, 'empresas/') },
    { id: 'agencias', texto: T('Para agências', 'For agencies'), dica: 'white label', href: pagina(L, 'white-label/') },
    { id: 'blog', texto: 'Blog', dica: T('artigos', 'articles'), href: pagina('pt', 'blog/') },
    { id: 'curriculo', texto: T('Currículo', 'Résumé'), dica: 'PDF', href: pagina(L, 'curriculo/') },
  ];
  return L === 'en' ? links.filter((l) => l.id !== 'blog') : links;
};

/** Em que parte do site está a página, pelo endereço (deixa o link certo aceso). */
export const secaoAtual = (pathname: string): Secao => {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const resto = pathname.slice(base.length).replace(/^\/(en\/?)?/, '');
  if (resto.startsWith('portfolio')) return 'portfolio';
  if (resto.startsWith('empresas')) return 'empresas';
  if (resto.startsWith('white-label')) return 'agencias';
  if (resto.startsWith('blog')) return 'blog';
  if (resto.startsWith('curriculo')) return 'curriculo';
  return 'inicio';
};

/** Páginas só em português (sem bandeirinha de idioma). */
export const soPortugues = (pathname: string) => secaoAtual(pathname) === 'blog';
