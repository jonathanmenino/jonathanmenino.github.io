import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Cada arquivo em src/content/cases/ vira uma página em /white-label/projetos/<nome-do-arquivo>/
// e um card na seção de projetos da landing.
const texto = z.string().nullable(); // null = "A preencher"

const cases = defineCollection({
  loader: glob({ pattern: '*.yaml', base: './src/content/cases' }),
  schema: ({ image }) => z.object({
    ordem: z.number(),
    titulo: z.string(),
    tipo: z.string(),
    dominio: z.string(),
    url: z.string().url(),
    resumo: z.string(),
    descricaoSeo: z.string(),
    card: z.object({
      titulo: z.string().optional(),
      tags: z.array(z.string()),
      descricao: z.string(),
    }),
    ficha: z.array(z.object({ rotulo: z.string(), valor: texto })),
    agencia: z.object({
      nome: z.string(),
      logo: image().optional(),
      rotulo: z.string().optional(),
    }).optional(),
    stack: z.array(z.string()),
    capa: z.object({ desktop: image(), celular: image() }),
    desafio: z.object({ titulo: texto, texto: texto }),
    solucao: z.object({ titulo: texto, texto: texto }),
    estrutura: z.object({
      titulo: z.string(),
      texto: z.string(),
      secoes: z.array(z.object({ nome: z.string(), texto: z.string(), imagem: image().optional() })),
    }),
    desempenho: z.object({
      titulo: z.string().optional(),
      texto: texto,
      notas: z.record(z.enum(['mobile', 'desktop']), z.record(z.string(), z.number().nullable())),
      metricas: z.array(z.object({ rotulo: z.string(), valor: z.string(), texto: z.string() })).optional(),
      observacao: z.string().optional(),
      otimizacoes: z.union([z.literal(false), z.array(z.object({ titulo: z.string(), texto: z.string() }))]).optional(),
    }),
    // Textos em inglês (versão /en/): mesmo formato, só com os campos de texto. Listas na mesma ordem.
    en: z.any().optional(),
    telas: z.object({
      titulo: z.string().optional(),
      imagens: z.array(z.object({ imagem: image(), legenda: z.string().optional() })),
    }),
  }),
});

// Blog: cada arquivo .md em src/content/blog/ vira um artigo em /blog/<nome-do-arquivo>/.
// Como escrever um artigo novo: veja src/content/blog/_LEIA-ME.md (arquivos que começam com _ não viram página).
const blog = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    titulo: z.string(),
    descricao: z.string().max(170), // aparece no Google e no compartilhamento
    data: z.coerce.date(),
    atualizado: z.coerce.date().optional(),
    publico: z.enum(['agencias', 'empresas', 'todos']).default('todos'),
    tags: z.array(z.string()).default([]),
    capa: image().optional(),          // imagem no topo do artigo (opcional)
    capaAlt: z.string().optional(),
    og: z.string().optional(),         // imagem de compartilhamento em /public (ex.: og/blog/artigo.jpg)
    rascunho: z.boolean().default(false), // true = não publica
  }),
});

export const collections = { cases, blog };
