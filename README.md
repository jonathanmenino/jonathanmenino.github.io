# Site Jonathan Menino

Site feito em [Astro](https://astro.build) com Tailwind, publicado no GitHub Pages:
https://jonathanmenino.github.io/

## Rodar no computador

Precisa do [Node.js](https://nodejs.org) 20 ou mais novo.

```bash
npm install      # só na primeira vez
npm run dev      # abre em http://localhost:4321/
npm run build    # gera o site final em dist/
```

## Onde editar

| O quê | Arquivo |
|---|---|
| WhatsApp, redes e mensagens prontas | `src/data/site.ts` |
| Home (links para os serviços) | `src/pages/index.astro` |
| Landing do White Label | `src/pages/white-label/index.astro` |
| Cards de benefícios | `src/data/pilares.ts` |
| Cases (textos, notas, imagens) | `src/content/cases/*.yaml` |
| Imagens dos cases | `src/assets/cases/<case>/` |
| Modelo da página de case | `src/pages/white-label/projetos/[slug].astro` |
| Case de campanha Escalados Macarrone (ainda sem link) | `src/pages/portfolio/escalados-macarrone/index.astro` |
| Imagens e vídeos desse case | `src/assets/portfolio/escalados-macarrone/` e `public/portfolio/escalados-macarrone/videos/` |
| Case de campanha Macarrone Costelinha BBQ (ainda sem link) | `src/pages/portfolio/macarrone-costelinha-bbq/index.astro` |
| Imagens, vídeos e fonte Roadhawk desse case | `src/assets/portfolio/macarrone-costelinha-bbq/` e `public/portfolio/macarrone-costelinha-bbq/` |
| Case de campanha Doces da Fer · Páscoa 2026 (ainda sem link) | `src/pages/portfolio/doces-da-fer-pascoa/index.astro` |
| Imagens e vídeos desse case | `src/assets/portfolio/doces-da-fer-pascoa/` e `public/portfolio/doces-da-fer-pascoa/videos/` |
| Imagens de compartilhamento (1200x630) | `public/og/` |

### Novo case
1. Crie a pasta `src/assets/cases/novo-case/` com os prints.
2. Copie um arquivo de `src/content/cases/`, renomeie para `novo-case.yaml` e preencha.
3. Ele aparece sozinho na landing e ganha a página `/white-label/projetos/novo-case/`.
4. Opcional: coloque `public/og/novo-case.jpg` (1200x630) para a prévia de link.

## Publicar

Cada envio (push) para a branch `main` publica o site sozinho pelo GitHub Actions
(`.github/workflows/deploy.yml`). No repositório: Settings > Pages > Source: **GitHub Actions**.

## Domínio próprio (futuro)

Em `astro.config.mjs`, troque `site` pelo domínio e ajuste o endereço em `public/robots.txt`.
