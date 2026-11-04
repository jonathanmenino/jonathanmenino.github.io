/* =========================================================
   PORTFÓLIO: todos os projetos, na ordem em que aparecem.
   Para adicionar um projeto, copie um item. A capa é uma imagem
   1200x630 dentro de /public (pode ser a mesma do compartilhamento).
   destaque: true faz o projeto aparecer na página Sobre mim.
   ========================================================= */

export const CATEGORIAS = {
  campanhas: 'Campanhas',
  identidade: 'Identidade',
  video: 'Vídeo e motion',
  sites: 'Sites',
  ia: 'IA',
} as const;
export type Categoria = keyof typeof CATEGORIAS;

// Nomes das categorias em inglês (versão /en/ do site).
export const CATEGORIAS_EN: Record<Categoria, string> = {
  campanhas: 'Campaigns',
  identidade: 'Identity',
  video: 'Video & motion',
  sites: 'Websites',
  ia: 'AI',
};
export const categoria = (c: Categoria, idioma: 'pt' | 'en' = 'pt') => (idioma === 'en' ? CATEGORIAS_EN[c] : CATEGORIAS[c]);

export interface Projeto {
  titulo: string;
  cliente: string;
  tipo: string;
  resumo: string;
  link: string;
  capa: string;
  categorias: Categoria[];
  destaque?: boolean;
  // Textos em inglês (o que não vier aqui fica igual ao português).
  en?: Partial<Pick<Projeto, 'titulo' | 'cliente' | 'tipo' | 'resumo'>>;
}

export const PROJETOS: Projeto[] = [
  {
    titulo: 'Omuch',
    cliente: 'Produto próprio',
    tipo: 'Marca e interface de produto',
    resumo: 'Marca, direção de interface e UX de um app para freelancers criativos.',
    link: 'portfolio/omuch/',
    capa: 'og/omuch.jpg',
    categorias: ['identidade', 'sites', 'ia'],
    destaque: true,
    en: { cliente: 'Own product', tipo: 'Brand and product interface', resumo: 'Brand, interface direction and UX for an app for creative freelancers.' },
  },
  {
    titulo: 'Gois & Silva Advocacia',
    cliente: 'Escritório de advocacia · Limeira/SP',
    tipo: 'Identidade visual',
    resumo: 'Monograma refinado, versões do logo, cores, tipografia, grafismo e aplicações.',
    link: 'portfolio/gois-e-silva/',
    capa: 'og/gois-e-silva.jpg',
    categorias: ['identidade'],
    destaque: true,
    en: { cliente: 'Law firm · Limeira, Brazil', tipo: 'Visual identity', resumo: 'Refined monogram, logo versions, colors, typography, graphic elements and applications.' },
  },
  {
    titulo: 'Escalados Macarrone',
    cliente: 'Macarrone in Box · Agência Zava',
    tipo: 'Campanha · Copa do Mundo 2026',
    resumo: 'Identidade da campanha, posts, stories, vídeos, landing page e ponto de venda.',
    link: 'portfolio/escalados-macarrone/',
    capa: 'og/escalados-macarrone.jpg',
    categorias: ['campanhas', 'identidade', 'video', 'sites'],
    destaque: true,
    en: { cliente: 'Macarrone in Box · Agência Zava', tipo: 'Campaign · 2026 World Cup', resumo: 'Campaign identity, posts, stories, videos, landing page and point of sale.' },
  },
  {
    titulo: 'Doces da Fer · Páscoa',
    cliente: 'Os Doces da Fer · Agência Zava',
    tipo: 'Campanha · Páscoa 2026',
    resumo: 'Edição dos vídeos com cenários e objetos gerados por IA, e parte das peças.',
    link: 'portfolio/doces-da-fer-pascoa/',
    capa: 'og/doces-da-fer-pascoa.jpg',
    categorias: ['campanhas', 'video', 'ia'],
    destaque: true,
    en: { titulo: 'Doces da Fer · Easter', cliente: 'Os Doces da Fer · Agência Zava', tipo: 'Campaign · Easter 2026', resumo: 'Video editing with AI-generated sets and props, plus some of the pieces.' },
  },
  {
    titulo: 'Costelinha BBQ',
    cliente: 'Macarrone in Box · Agência Zava',
    tipo: 'Lançamento de sabor',
    resumo: 'Vídeo oficial com chroma key, telão de LED, spoiler, anúncios e peças.',
    link: 'portfolio/macarrone-costelinha-bbq/',
    capa: 'og/macarrone-costelinha-bbq.jpg',
    categorias: ['campanhas', 'video'],
    destaque: true,
    en: { cliente: 'Macarrone in Box · Agência Zava', tipo: 'Flavor launch', resumo: 'Official video with chroma key, LED screen, teaser, ads and pieces.' },
  },
  {
    titulo: 'É o BR no Kombina',
    cliente: 'Kombina Burgers House · Agência Zava',
    tipo: 'Campanha · Lançamento de cardápio',
    resumo: 'Campanha de três burgers com sotaque: identidade, peças e edição de todos os vídeos.',
    link: 'portfolio/br-no-kombina/',
    capa: 'og/br-no-kombina.jpg',
    categorias: ['campanhas', 'identidade', 'video'],
    destaque: true,
    en: { cliente: 'Kombina Burgers House · Agência Zava', tipo: 'Campaign · Menu launch', resumo: 'A campaign for three burgers with regional accents: identity, pieces and editing of every video.' },
  },
  {
    titulo: 'Método Dias Food',
    cliente: 'Patrik Dias · Agência Zava',
    tipo: 'Landing page de curso',
    resumo: 'Página de vendas de um curso para donos de delivery, do vídeo no topo ao botão de compra.',
    link: 'portfolio/metodo-dias-food/',
    capa: 'og/metodo-dias-food.jpg',
    categorias: ['sites'],
    en: { cliente: 'Patrik Dias · Agência Zava', tipo: 'Course landing page', resumo: 'Sales page for a course for delivery business owners, from the top video to the buy button.' },
  },
  {
    titulo: 'Sentinela',
    cliente: 'Sentinela Serviços de Proteção',
    tipo: 'Site institucional',
    resumo: 'Site sóbrio, em preto e verde militar, que leva o síndico ou gestor a pedir uma proposta.',
    link: 'white-label/projetos/sentinela/',
    capa: 'og/sentinela.jpg',
    categorias: ['sites'],
    destaque: true,
    en: { tipo: 'Corporate website', resumo: 'A sober site in black and military green that leads building managers to request a quote.' },
  },
  {
    titulo: 'Agência Zava',
    cliente: 'Agência Zava',
    tipo: 'Site institucional',
    resumo: 'Home que apresenta o Marketing 360° da agência, os serviços e os resultados dos clientes.',
    link: 'white-label/projetos/agencia-zava/',
    capa: 'og/agencia-zava.jpg',
    categorias: ['sites'],
    en: { cliente: 'Agência Zava (agency)', tipo: 'Corporate website', resumo: 'Home page presenting the agency’s 360° Marketing, its services and client results.' },
  },
  {
    titulo: 'Jardim Sul Residencial',
    cliente: 'Loteamento em Iperó/SP',
    tipo: 'Landing page',
    resumo: 'Página de vendas na ordem das dúvidas de quem compra um lote, com o consultor a um toque.',
    link: 'white-label/projetos/jardim-sul/',
    capa: 'og/jardim-sul.jpg',
    categorias: ['sites'],
    en: { cliente: 'Residential lots in Iperó, Brazil', tipo: 'Landing page', resumo: 'A sales page that follows the questions of someone buying a lot, with the sales consultant one tap away.' },
  },
  {
    titulo: 'menin0',
    cliente: 'Projeto pessoal',
    tipo: 'Site e identidade',
    resumo: 'Site de lo-fi hip hop que atravessa um dia, da cidade à noite até o mar.',
    link: 'portfolio/menin0-lofi/',
    capa: 'og/menin0-lofi.jpg',
    categorias: ['sites', 'identidade'],
    en: { cliente: 'Personal project', tipo: 'Website and identity', resumo: 'A lo-fi hip hop site that moves through a day, from the city at night to the sea.' },
  },
];
