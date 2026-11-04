/* =========================================================
   DADOS DO SITE: contato, redes e mensagens do WhatsApp.
   Troque aqui e vale para todas as páginas.
   ========================================================= */

export const SITE = {
  nome: 'Jonathan Menino',
  // Número com DDI + DDD, só dígitos.
  whatsapp: '5519994366334',
  // Redes do rodapé. Deixe '' para esconder um ícone.
  redes: {
    instagram: 'https://www.instagram.com/devmenino/',
    linkedin: 'https://www.linkedin.com/in/jonathanmenino/',
    behance: 'https://www.behance.net/jonathanmenino',
    github: 'https://github.com/jonathanmenino',
  },
};

// Mensagens prontas de cada botão de WhatsApp
export const MENSAGENS = {
  parceria: 'Olá, Jonathan! Vi sua página e quero saber mais sobre a parceria White Label para a minha agência.',
  valores: 'Olá, Jonathan! Tenho uma agência e quero receber a tabela de valores especiais para parceiros.',
  conversa: 'Olá, Jonathan! Tenho projetos de site na agência e quero conversar sobre uma parceria.',
  orcamento: 'Olá, Jonathan! Vi a tabela de valores para parceiros e quero um orçamento para um projeto da minha agência.',
  empresa: 'Olá, Jonathan! Vi sua página para empresas e quero um orçamento para a minha marca.',
  case: 'Olá, Jonathan! Vi o case {projeto} no seu site e quero conversar sobre uma parceria para a minha agência.',
};

// As mesmas mensagens em inglês (versão /en/ do site).
export const MENSAGENS_EN: typeof MENSAGENS = {
  parceria: 'Hi, Jonathan! I saw your page and would like to know more about the White Label partnership for my agency.',
  valores: 'Hi, Jonathan! I run an agency and would like to get the special partner price list.',
  conversa: 'Hi, Jonathan! My agency has website projects and I would like to talk about a partnership.',
  orcamento: 'Hi, Jonathan! I saw the partner price list and would like a quote for a project at my agency.',
  empresa: 'Hi, Jonathan! I saw your page for businesses and would like a quote for my brand.',
  case: 'Hi, Jonathan! I saw the {projeto} case on your website and would like to talk about a partnership for my agency.',
};
export const mensagens = (idioma: 'pt' | 'en' = 'pt') => (idioma === 'en' ? MENSAGENS_EN : MENSAGENS);

export const linkWhatsApp = (mensagem = '') =>
  `https://wa.me/${SITE.whatsapp}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`;

// Caminho interno com a base do site (ex.: url('white-label/') -> '/white-label/'). Mantém os links certos se o site mudar de pasta..
export const url = (caminho = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${caminho.replace(/^\//, '')}`;
