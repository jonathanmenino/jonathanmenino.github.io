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

export const reais = (valor: number, idioma: 'pt' | 'en' = 'pt') => `R$ ${valor.toLocaleString(idioma === 'en' ? 'en-US' : 'pt-BR')}`;
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

// ---------- Versão em inglês (/en/white-label/parceiros/): mesma ordem das listas acima ----------
export const PROJETOS_EN = [
  'High-converting landing page',
  'One-page website (corporate)',
  'Website with up to 3 pages',
  'Website with up to 5 pages',
  'Website with up to 8 pages',
  'More than 8 pages',
  'Additional page',
];

export const INCLUSO_EN = [
  'Responsive layout (phone, tablet and desktop)',
  'Basic technical SEO',
  'Speed optimization',
  'WhatsApp and contact form integration',
  'Up to 2 rounds of revisions',
  'Delivered with no branding of mine',
];

export const OBSERVACOES_EN = [
  'Prices vary within the range depending on the number of sections on each page and the complexity of the layout.',
  'If the agency sends a finished layout, the price drops by up to 30%.',
  'Prices apply to websites with standard features. Advanced features, such as member areas, calculators, API integrations, e-commerce, booking systems or multilingual websites, are quoted separately.',
  'Hosting, domain and licenses for paid plugins or tools are not included.',
  'The suggested sale price is a reference with an 80% margin over the partner price. The final price for your client is set by your agency.',
  'Timeline and final price are confirmed after the brief for each project.',
  'Payment: 50% after the quote is approved and 50% on delivery.',
];
