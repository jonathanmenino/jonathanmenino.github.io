// Resultados do PageSpeed Insights da própria /white-label/ (seção "Desempenho excepcional").
// Para atualizar: rode https://pagespeed.web.dev/ na página e troque os números e a data.
export const DESEMPENHO = {
  data: '18 out. 2026',
  lighthouse: '13.5.0',
  testar: 'https://pagespeed.web.dev/analysis?url=https%3A%2F%2Fjonathanmenino.github.io%2Fwhite-label%2F',
  dispositivos: [
    {
      id: 'celular',
      nome: 'Celular',
      notas: { desempenho: 100, acessibilidade: 100, praticas: 100, seo: 100 },
      metricas: [
        { sigla: 'FCP', nome: 'Primeiro conteúdo na tela', valor: '1,2 s' },
        { sigla: 'LCP', nome: 'Maior conteúdo na tela', valor: '1,5 s' },
        { sigla: 'TBT', nome: 'Tempo de bloqueio', valor: '0 ms' },
        { sigla: 'CLS', nome: 'Mudança de layout', valor: '0' },
        { sigla: 'SI', nome: 'Índice de velocidade', valor: '2,6 s' },
      ],
    },
    {
      id: 'computador',
      nome: 'Computador',
      notas: { desempenho: 100, acessibilidade: 100, praticas: 100, seo: 100 },
      metricas: [
        { sigla: 'FCP', nome: 'Primeiro conteúdo na tela', valor: '0,3 s' },
        { sigla: 'LCP', nome: 'Maior conteúdo na tela', valor: '0,3 s' },
        { sigla: 'TBT', nome: 'Tempo de bloqueio', valor: '0 ms' },
        { sigla: 'CLS', nome: 'Mudança de layout', valor: '0' },
        { sigla: 'SI', nome: 'Índice de velocidade', valor: '0,5 s' },
      ],
    },
  ],
};
