# Como publicar um artigo no blog

1. Crie um arquivo `.md` nesta pasta. O nome do arquivo vira o endereço:
   `meu-artigo.md` → `https://jonathanmenino.github.io/blog/meu-artigo/`
   (use letras minúsculas, sem acento e com hífen no lugar de espaço).
2. Comece o arquivo com este cabeçalho:

```
---
titulo: 'Título do artigo'
descricao: 'Resumo de 1 ou 2 frases (até 170 caracteres). Aparece no Google e no WhatsApp.'
data: 2026-11-06T09:00:00-03:00   # a hora desempata artigos do mesmo dia
publico: todos        # agencias, empresas ou todos (muda a caixa de contato do fim)
tags: ['IA', 'SEO']
# atualizado: 2026-11-20       (opcional)
capa: ../../assets/blog/meu-artigo.jpg   # imagem de destaque (topo do artigo e card), em src/assets/blog/
capaAlt: 'Descrição da imagem para quem não enxerga'
credito:                      # crédito da foto do banco de imagens grátis
  autor: Nome do fotógrafo
  perfil: https://unsplash.com/@usuario
  foto: https://unsplash.com/photos/endereco-da-foto
# og: og/blog/meu-artigo.jpg   (opcional: imagem 1200x630 em public/; sem isso usa a capa cortada)
# rascunho: true               (opcional: não publica)
---
```

3. Escreva o texto em Markdown. Use `##` para as seções (viram o índice "Neste artigo")
   e `###` para subtítulos. Não use `#`: o título já é o `titulo` do cabeçalho.
4. Faça o commit e o push: o artigo entra no ar, na lista do blog, no sitemap e no RSS.

Fotos: use só imagens gratuitas (no Unsplash, endereços images.unsplash.com/photo-..., nunca as Unsplash+/premium) e preencha o crédito.

Arquivos que começam com `_` (como este) não viram página.
Nunca coloque valores da tabela de parceiros nem cases de clientes nos artigos.
