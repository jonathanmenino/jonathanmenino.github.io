# Como publicar um artigo no blog

1. Crie um arquivo `.md` nesta pasta. O nome do arquivo vira o endereço:
   `meu-artigo.md` → `https://jonathanmenino.github.io/blog/meu-artigo/`
   (use letras minúsculas, sem acento e com hífen no lugar de espaço).
2. Comece o arquivo com este cabeçalho:

```
---
titulo: 'Título do artigo'
descricao: 'Resumo de 1 ou 2 frases (até 170 caracteres). Aparece no Google e no WhatsApp.'
data: 2026-11-06
publico: todos        # agencias, empresas ou todos (muda a caixa de contato do fim)
tags: ['IA', 'SEO']
# atualizado: 2026-11-20       (opcional)
# og: og/blog/meu-artigo.jpg   (opcional: imagem 1200x630 em public/; sem isso usa og/blog.jpg)
# rascunho: true               (opcional: não publica)
---
```

3. Escreva o texto em Markdown. Use `##` para as seções (viram o índice "Neste artigo")
   e `###` para subtítulos. Não use `#`: o título já é o `titulo` do cabeçalho.
4. Faça o commit e o push: o artigo entra no ar, na lista do blog, no sitemap e no RSS.

Arquivos que começam com `_` (como este) não viram página.
Nunca coloque valores da tabela de parceiros nem cases de clientes nos artigos.
