# Horizonte Imóveis — Imobiliária de alto padrão

> Site editorial para imobiliária de luxo, com busca de imóveis funcional e animações refinadas.

**🔗 Demo:** _em breve_ · **Nicho:** Imobiliário · Alto padrão

> ⚠️ Projeto **conceitual de portfólio**. Empresa, pessoas, endereços e números são fictícios.

## ✨ Destaques

- **Busca funcional sem JavaScript**: `<form method="get">` filtra por bairro, tipo, suítes e preço via query string (`?bairro=Jardins`) — busca compartilhável por link e indexável
- Clicar num bairro filtra os imóveis daquele bairro
- Cada imóvel abre o WhatsApp citando o imóvel de interesse
- Conteúdo e imóveis centralizados em `src/content/site.ts`

## 🎬 Animações

- Hero com zoom lento, parallax e título revelado linha a linha
- Fotos que "abrem como cortina" (`clip-path`) ao entrar na tela
- Contadores animados (R$ 2,4 bi, 1.200+…)
- Header transparente que fica sólido ao rolar
- Todas respeitam a preferência de **"reduzir movimento"** do sistema operacional

## 🧱 Stack

| | |
|---|---|
| Framework | [Next.js](https://nextjs.org) (App Router) + React + TypeScript |
| Estilo | [Tailwind CSS v4](https://tailwindcss.com) com design tokens (`@theme`) |
| Animações | [Motion](https://motion.dev) |
| Fontes | Cormorant Garamond (títulos) + Outfit (texto) via `next/font` |
| Imagens | `next/image` (otimização automática, lazy loading) |

**Paleta:** Areia `#F7F5F1`, azul-noite `#0F1A2B`, bronze `#A7784A`

## 🎨 Design

O layout foi desenhado primeiro no **Figma**, com variáveis (cores, espaçamentos, raios), estilos de texto e componentes. Os tokens do código em `src/app/globals.css` têm os mesmos nomes das variáveis do Figma.

**Seções:** Hero + busca · Manifesto · Imóveis · Curadoria · Bairros · Depoimento · Anuncie · Footer

## ✅ Boas práticas

- HTML semântico e acessível (landmarks, `aria-*`, foco visível, textos alternativos)
- Conteúdo separado do layout — trocar de cliente = editar `src/content/site.ts`
- Componentes pequenos e reutilizáveis (`src/components/ui`, `sections`, `motion`)
- Metadados de SEO e Open Graph em pt-BR
- Lint (ESLint) e checagem de tipos (TypeScript strict) sem erros

## 📁 Estrutura

```
src/
  app/            layout, página e tokens (globals.css)
  content/        todo o conteúdo editável do site
  components/
    motion/       animações reutilizáveis (Reveal, Counter…)
    sections/     seções da página
    ui/           componentes base (Button, Card…)
```

## 🚀 Rodando localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # build de produção
npm run lint
```

## 📸 Créditos

Fotos de [Unsplash](https://unsplash.com) (Unsplash License), usadas como placeholder.

---

Desenvolvido por **Ian Santiago** — sites e automações para pequenos negócios.
