/* =========================================================
   IDIOMAS: português (padrão, na raiz) e inglês (em /en/).
   Cada página em inglês em src/pages/en/ só reaproveita a página
   em português; os textos trocam conforme o endereço.
   Uso numa página:
     const L = idioma(Astro.url); const T = tradutor(L);
     T('Olá', 'Hello')        -> texto no idioma da página
     pagina(L, 'portfolio/')  -> link interno no mesmo idioma
   A escolha do visitante (bandeirinha) e a detecção do navegador
   ficam no <head> do src/layouts/Base.astro.
   ========================================================= */
import { url } from './data/site';

export type Idioma = 'pt' | 'en';

const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Idioma da página pelo endereço: tudo que começa com /en/ é inglês. */
export const idioma = (u: URL): Idioma => (u.pathname === `${BASE}/en` || u.pathname.startsWith(`${BASE}/en/`) ? 'en' : 'pt');

/** Devolve uma função que escolhe o texto em português ou em inglês. */
export const tradutor = (L: Idioma) => <A, B = A>(pt: A, en: B): A | B => (L === 'en' ? en : pt);

/** Link interno de página no idioma pedido (para imagens e vídeos use url()). */
export const pagina = (L: Idioma, caminho = '') => url(L === 'en' ? `en/${caminho.replace(/^\//, '')}` : caminho);

/** Endereço desta mesma página no outro idioma. */
export const outroIdioma = (pathname: string, L: Idioma) => {
  const resto = pathname.slice(BASE.length).replace(/^\/(en\/?)?/, '');
  return pagina(L === 'en' ? 'pt' : 'en', resto);
};

/** Endereço da mesma página em cada idioma (para o hreflang). */
export const versoes = (pathname: string) => {
  const resto = pathname.slice(BASE.length).replace(/^\/(en\/?)?/, '');
  return { pt: pagina('pt', resto), en: pagina('en', resto) };
};

/** Escolhe o campo traduzido de um objeto de dados: { titulo, en: { titulo } }. */
export const em = <T extends object>(obj: T & { en?: Partial<T> }, L: Idioma): T => (L === 'en' && obj.en ? { ...obj, ...obj.en } : obj);

/** Junta a versão em inglês por cima da portuguesa, campo a campo (listas item a item, na mesma ordem).
    Usado nos cases de src/content/cases/, que têm um bloco "en:" com só os textos. */
export const mesclar = <T>(base: T, en: unknown): T => {
  if (en == null) return base;
  if (Array.isArray(base) && Array.isArray(en)) return base.map((b, i) => mesclar(b, en[i])) as T;
  if (base && typeof base === 'object' && !Array.isArray(base) && typeof en === 'object' && !(base as object).constructor?.name?.includes('Image')) {
    const out: Record<string, unknown> = { ...(base as Record<string, unknown>) };
    for (const [k, v] of Object.entries(en as Record<string, unknown>)) out[k] = k in out ? mesclar(out[k], v) : v;
    return out as T;
  }
  return en as T;
};
