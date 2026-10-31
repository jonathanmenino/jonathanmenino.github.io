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

export interface Projeto {
  titulo: string;
  cliente: string;
  tipo: string;
  resumo: string;
  link: string;
  capa: string;
  categorias: Categoria[];
  destaque?: boolean;
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
  },
  {
    titulo: 'Agência Zava',
    cliente: 'Agência Zava',
    tipo: 'Site institucional',
    resumo: 'Home que apresenta o Marketing 360° da agência, os serviços e os resultados dos clientes.',
    link: 'white-label/projetos/agencia-zava/',
    capa: 'og/agencia-zava.jpg',
    categorias: ['sites'],
  },
  {
    titulo: 'Jardim Sul Residencial',
    cliente: 'Loteamento em Iperó/SP',
    tipo: 'Landing page',
    resumo: 'Página de vendas na ordem das dúvidas de quem compra um lote, com o consultor a um toque.',
    link: 'white-label/projetos/jardim-sul/',
    capa: 'og/jardim-sul.jpg',
    categorias: ['sites'],
  },
  {
    titulo: 'menin0',
    cliente: 'Projeto pessoal',
    tipo: 'Site e identidade',
    resumo: 'Site de lo-fi hip hop que atravessa um dia, da cidade à noite até o mar.',
    link: 'portfolio/menin0-lofi/',
    capa: 'og/menin0-lofi.jpg',
    categorias: ['sites', 'identidade'],
  },
];
