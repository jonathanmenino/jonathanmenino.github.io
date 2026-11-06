---
titulo: 'Seu site está pronto para ser lido por IA? 7 ajustes que fazem diferença'
descricao: 'ChatGPT, Gemini e Perplexity já respondem por quem procura um serviço. Veja como deixar o seu site fácil de entender para essas IAs, sem truque e sem mistério.'
data: 2026-11-06
publico: todos
tags: ['IA', 'SEO', 'HTML semântico', 'Dados estruturados', 'Performance']
---

Pense em alguém que abre o ChatGPT e pergunta: *"qual clínica de fisioterapia em Limeira atende aos sábados?"*. A resposta vem pronta, com dois ou três nomes. Esse alguém talvez nem abra o Google.

Para aparecer nessa resposta, o site da clínica precisa ser **fácil de ler para uma máquina**. Não é mágica e nem uma técnica nova: é, em grande parte, o que um site bem feito já deveria ter. A diferença é que agora deixar de lado custa mais caro.

Neste artigo eu explico como as IAs leem um site e os 7 ajustes que eu aplico em todo projeto.

## Como uma IA lê um site

Quando uma IA busca informação na internet, ela manda um robô visitar as páginas, mais ou menos como o Google faz há 25 anos. Esse robô baixa o HTML, separa o texto, tenta entender do que a página trata e guarda o que for útil para responder perguntas.

Dois detalhes importam muito aqui:

- **Muitos robôs de IA leem só o HTML que chega do servidor.** Estudos de 2024 mostraram que os robôs da OpenAI, da Anthropic e da Perplexity, por exemplo, não executam JavaScript. Se o texto do site só aparece depois que um script roda, para eles a página está vazia.
- **Eles têm pressa.** Uma página lenta ou que trava pode ser abandonada antes de terminar de carregar.

Ou seja: o site precisa entregar o conteúdo pronto, organizado e rápido.

## 1. Conteúdo no HTML, não escondido em JavaScript

O primeiro teste é simples: abra o seu site, clique com o botão direito e escolha **"Exibir código-fonte da página"**. Procure pelo texto principal, o nome dos serviços e o endereço. Se eles aparecem ali, ótimo. Se você só vê um monte de script e quase nenhum texto, a IA também vê só isso.

Isso costuma acontecer com sites montados como "aplicativos", em que tudo é desenhado pelo navegador depois de abrir. Sites estáticos (como os feitos com Astro) e páginas geradas no servidor entregam o texto pronto desde o primeiro instante.

## 2. HTML semântico: cada coisa com o nome certo

Para uma pessoa, um texto grande e em negrito parece um título. Para uma máquina, só é título se estiver marcado como título. Por isso:

- Um único `h1` por página, dizendo o assunto principal.
- Subtítulos `h2` e `h3` em ordem, como um sumário.
- Listas de verdade (`ul`, `ol`) para serviços, etapas e benefícios.
- Tabelas de verdade para horários, planos e comparações.
- Botões e links com texto que faz sentido sozinho: *"Ver planos de hospedagem"* em vez de *"Clique aqui"*.

Esse cuidado também ajuda quem navega com leitor de tela. O que é bom para acessibilidade quase sempre é bom para IA.

## 3. Dados estruturados: a ficha técnica do negócio

Dados estruturados são um bloco de código invisível para o visitante, no padrão [Schema.org](https://schema.org), que diz com todas as letras: *isto é uma empresa, este é o endereço, este é o horário, estes são os serviços*. Google, Bing e outras ferramentas usam essas informações há anos, e elas tiram a dúvida da máquina.

Um exemplo simples para um negócio local:

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Clínica Exemplo",
  "telephone": "+55 19 99999-9999",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Limeira",
    "addressRegion": "SP"
  },
  "openingHours": ["Mo-Fr 08:00-19:00", "Sa 08:00-12:00"]
}
```

Dá para fazer o mesmo com artigos de blog, produtos, perguntas frequentes e eventos. Depois, valide no [teste de resultados ricos do Google](https://search.google.com/test/rich-results).

## 4. Texto que responde perguntas de verdade

A IA monta a resposta com o que encontra escrito. Se o site diz só *"soluções completas com excelência e qualidade"*, não sobra nada para ela usar.

Escreva o que um cliente perguntaria:

- **O que você faz** e para quem, com palavras simples.
- **Onde** atende (cidade, bairro, se atende online).
- **Quando** atende (dias e horários).
- **Quanto custa**, nem que seja uma faixa ou um "a partir de".
- **Como contratar**: WhatsApp, formulário, agendamento.

Uma seção de **perguntas frequentes** é perfeita para isso: cada pergunta vira um `h3`, cada resposta é um parágrafo curto e direto.

## 5. Velocidade: site rápido é lido por inteiro

Velocidade sempre foi importante para o visitante e para o Google. Para os robôs de IA vale o mesmo: uma página leve abre na hora e é lida até o fim.

O que mais pesa na maioria dos sites que eu analiso:

- Imagens enormes, sem compressão e fora do formato WebP ou AVIF.
- Plugins demais (no WordPress isso é muito comum), cada um carregando seus próprios arquivos.
- Fontes, chats e scripts de terceiros carregando antes do conteúdo.

Um site estático, sem banco de dados e com as imagens otimizadas, costuma tirar nota máxima no [PageSpeed Insights](https://pagespeed.web.dev/) sem esforço extra. Este blog, por exemplo, é feito assim.

## 6. Deixe os robôs entrarem

Parece óbvio, mas muita gente bloqueia sem saber. O arquivo `robots.txt` (fica em `seusite.com.br/robots.txt`) diz quais robôs podem visitar o site. Alguns temas, plugins de segurança e serviços de proteção bloqueiam robôs de IA por padrão.

Os principais nomes para conferir:

| Robô | De quem | Para quê |
| --- | --- | --- |
| `OAI-SearchBot` | OpenAI | Busca do ChatGPT |
| `GPTBot` | OpenAI | Treino dos modelos |
| `Claude-SearchBot` e `ClaudeBot` | Anthropic | Busca e treino do Claude |
| `PerplexityBot` | Perplexity | Busca da Perplexity |
| `Google-Extended` | Google | Uso no Gemini (não afeta a busca do Google) |
| `Bingbot` | Microsoft | Busca do Bing e do Copilot |

Se o objetivo é aparecer nas respostas, libere pelo menos os robôs de **busca**. Liberar o treino é uma decisão sua. Aproveite e confira se o `robots.txt` aponta para o **sitemap**, a lista de todas as páginas do site:

```txt
User-agent: *
Allow: /

Sitemap: https://seusite.com.br/sitemap-index.xml
```

## 7. Um resumo para máquinas: o llms.txt

O `llms.txt` é uma proposta recente: um arquivo de texto simples na raiz do site (`seusite.com.br/llms.txt`) que resume quem você é, o que faz e quais são as páginas mais importantes, escrito para uma IA ler.

Sendo honesto: ele **ainda não é um padrão oficial** e nenhuma das grandes empresas confirmou que usa. Mas custa cinco minutos, não atrapalha nada e já é lido por algumas ferramentas. Eu coloco nos meus projetos e você pode ver o [deste site aqui](/llms.txt).

## Checklist rápido

Antes de colocar um site no ar, eu confiro:

1. O texto principal aparece no código-fonte da página.
2. Há um único `h1` e os subtítulos estão em ordem.
3. Os dados estruturados estão no lugar e passam no teste do Google.
4. O site diz o que, onde, quando, quanto e como contratar.
5. A nota de desempenho no PageSpeed está no verde, no celular também.
6. O `robots.txt` libera os robôs de busca e aponta para o sitemap.
7. Existe um `llms.txt` com o resumo do negócio.

Nada disso exige reconstruir o site do zero. Na maioria das vezes, alguns ajustes já colocam a página em outro nível, para as pessoas, para o Google e para as IAs.

> **Se você tem uma agência:** esse checklist é um ótimo argumento de venda. Cliente nenhum quer ficar de fora das respostas do ChatGPT, e poucas agências estão falando disso ainda.
