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
    telas: z.object({
      titulo: z.string().optional(),
      imagens: z.array(z.object({ imagem: image(), legenda: z.string().optional() })),
    }),
  }),
});

export const collections = { cases };
