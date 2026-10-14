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
  case: 'Olá, Jonathan! Vi o case {projeto} no seu site e quero conversar sobre uma parceria para a minha agência.',
};

export const linkWhatsApp = (mensagem = '') =>
  `https://wa.me/${SITE.whatsapp}${mensagem ? `?text=${encodeURIComponent(mensagem)}` : ''}`;

// Caminho interno com a base do site (ex.: url('white-label/') -> '/white-label/'). Mantém os links certos se o site mudar de pasta..
export const url = (caminho = '') => `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${caminho.replace(/^\//, '')}`;
