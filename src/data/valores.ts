/* =========================================================
   TABELA DE VALORES PARA AGÊNCIAS (página /white-label/parceiros/).
   Troque os valores aqui (em reais, só números). "de: null" mostra "Sob consulta".
   A coluna "Venda sugerida" é calculada sozinha: valor + MARGEM_SUGERIDA,
   arredondado para cima de 50 em 50.
   ========================================================= */

export const MARGEM_SUGERIDA = 0.8; // 80% acima do valor de parceiro

export const VALORES: { projeto: string; de: number | null; ate: number | null }[] = [
  { projeto: 'Landing page de alta conversão', de: 1000, ate: 3000 },
  { projeto: 'Site one page (institucional)', de: 850, ate: 2500 },
  { projeto: 'Site com até 3 páginas', de: 1400, ate: 3500 },
  { projeto: 'Site com até 5 páginas', de: 2100, ate: 5000 },
  { projeto: 'Site com até 8 páginas', de: 3000, ate: 7000 },
  { projeto: 'Acima de 8 páginas', de: null, ate: null },
  { projeto: 'Página adicional', de: 350, ate: 800 },
];

export const reais = (valor: number) => `R$ ${valor.toLocaleString('pt-BR')}`;
export const sugerido = (valor: number) => Math.ceil((valor * (1 + MARGEM_SUGERIDA)) / 50) * 50;

export const INCLUSO = [
  'Layout responsivo (celular, tablet e desktop)',
  'SEO técnico básico',
  'Otimização de velocidade',
  'Integração com WhatsApp e formulário de contato',
  'Até 2 rodadas de ajustes',
  'Entrega sem nenhuma marca minha',
];

export const OBSERVACOES = [
  'Os valores variam dentro da faixa conforme a quantidade de seções de cada página e a complexidade do layout.',
  'Se a agência enviar o layout pronto, o valor cai em até 30%.',
  'Os valores se aplicam a sites com funcionalidades padrão. Funcionalidades avançadas, como área de membros, calculadoras, integrações com APIs, e-commerce, sistemas de agendamento ou sites multilíngues, são orçadas à parte.',
  'Hospedagem, domínio e licenças de plugins ou ferramentas pagas não estão inclusos.',
  'A venda sugerida é uma referência com 80% de margem sobre o valor de parceiro. O preço final para o seu cliente é definido pela sua agência.',
  'Prazo e valor final são confirmados após o briefing de cada projeto.',
  'Pagamento: 50% após a aprovação do orçamento e 50% na entrega.',
];
