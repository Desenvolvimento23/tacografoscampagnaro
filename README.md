# Campagnaro Truck Center

Site institucional da Campagnaro Truck Center para divulgação do serviço de aferição de tacógrafos em Vacaria/RS.

**Site publicado:** https://desenvolvimento23.github.io/tacografoscampagnaro/

## Funcionalidades

- Explicação do processo de aferição e geração da GRU
- Vídeo otimizado em MP4
- Galeria automática com fotos da estrutura
- Mapa e informações de localização
- Horários, contatos e redes sociais
- Botões de atendimento pelo WhatsApp
- Perguntas frequentes com dados estruturados para SEO
- Layout responsivo para celular e desktop

## Tecnologias

- React 18
- TypeScript
- Vite
- Tailwind CSS
- Lucide React

## Desenvolvimento

Requer Node.js 18 ou superior.

```bash
npm install
npm run dev
```

Build de produção:

```bash
npm run build
```

## Identidade visual

- Vermelho: `#b12324`
- Preto: `#000000`
- Branco: `#ffffff`
- Verde: utilizado apenas nas ações do WhatsApp

## Publicação

O workflow em `.github/workflows/deploy.yml` executa o build e publica a pasta `dist` na branch `gh-pages` após cada push para `main`.
