# Conversa que Anda — landing page

Página de vendas do aplicativo de treino prático de vendas pelo WhatsApp.
Construída para receber tráfego pago: mobile-first, sem dependência de
biblioteca de UI, com ponto único de configuração comercial.

A estratégia por trás da página (Big Idea, mecanismo, ângulos de anúncio,
criativos e roteiros) está em **[MARKETING.md](./MARKETING.md)**.

---

## Rodar localmente

```bash
npm install
npm run dev          # http://localhost:3000
```

Outros comandos:

```bash
npm run build        # build de produção
npm start            # sobe o build
npm run lint         # ESLint
npm run typecheck    # tsc --noEmit
```

Requer Node 20+.

---

## Onde mexer (as 4 coisas que mudam)

### 1. Checkout

Arquivo: `src/config/site.ts` → constante `CHECKOUT_URL`.

Não existe link de checkout espalhado pelo código. **Todos** os CTAs
(cabeçalho, herói, cartão de oferta, bloco final e barra fixa do mobile) leem
essa constante.

```bash
# .env.local
NEXT_PUBLIC_CHECKOUT_URL=https://seu-checkout-real.com/xyz
```

Sem a variável, os botões rolam a página até a seção de oferta — nada quebra.

### 2. Screenshots do aplicativo

Pasta: `public/product/`

Solte os arquivos com **exatamente** estes nomes (`.png`, `.jpg` ou `.webp`):

| Arquivo | Onde aparece |
|---|---|
| `metodo-30-dias` | moldura de celular |
| `aula` | moldura de celular |
| `podcasts` | moldura de celular |
| `quiz` | moldura de celular |
| `progresso` | moldura de janela (16/10) |
| `biblioteca` | moldura de janela (16/10) |

A seção "Por dentro do aplicativo" detecta os arquivos no build e troca sozinha
de layout: **sem imagens**, ela descreve as telas em texto; **com imagens**, vira
galeria. Não é preciso alterar código.

Proporção recomendada: celular `9:19.5`, janela `16:10`. Fora disso a imagem é
recortada (`object-cover`), não distorcida — o layout não quebra.

Para mudar títulos, legendas ou adicionar telas, edite `PRODUCT_MANIFEST` em
`src/lib/assets.ts`.

### 3. Depoimentos e provas

**Depoimentos:** `src/content/testimonials.ts` — a lista está vazia de
propósito. Nenhum depoimento foi inventado. Adicione objetos reais:

```ts
{
  id: "nome-sobrenome",              // = nome do arquivo da foto
  name: "Nome Sobrenome",
  role: "Negócio, Cidade",           // opcional
  quote: "Texto exato enviado pela pessoa.",
}
```

Foto opcional em `public/testimonials/<id>.jpg`.

**Prints de conversa / resultado:** solte as imagens em `public/proof/`.
São listadas em ordem alfabética — nomeie `01-…`, `02-…` para controlar a ordem.

A seção de prova **não é renderizada em produção** enquanto não houver
depoimento ou print real. Em desenvolvimento aparece um painel explicando onde
colocar os arquivos.

### 4. Marca

- Nome, tagline, domínio e método: `src/config/site.ts` (`BRAND`).
- Logotipo: `public/brand/logo.svg` (ou `.png`). Sem arquivo, a página usa uma
  marca tipográfica com o nome configurado.
- Favicon: `src/app/icon.svg`.

---

## Tracking

A página **não carrega nenhum script de terceiro por conta própria** e não
contém nenhum ID inventado.

`src/lib/analytics.ts` expõe `track()`, que empurra eventos para o que já
estiver na página (`dataLayer`, `gtag`, `fbq`). Sem essas ferramentas
instaladas, é um no-op.

Eventos já instrumentados:

| Evento | Quando dispara |
|---|---|
| `view_offer` | seção de oferta entra na tela |
| `click_primary_cta` | CTAs do cabeçalho, herói e barra fixa mobile |
| `click_final_cta` | CTA do cartão de oferta e do bloco final |
| `open_faq` | pergunta do FAQ é aberta |

Para ligar Meta Pixel / GTM / GA, instale o snippet oficial com o ID real em
`src/app/layout.tsx` (via `next/script`). O resto já funciona.

---

## Estrutura

```
src/
  app/
    layout.tsx            metadata, fontes, Open Graph
    page.tsx              ordem das seções da página
    globals.css           sistema visual (tokens, reveal, motion)
    icon.svg              favicon
  config/
    site.ts               ← marca, preço, checkout, âncoras, texto do CTA
  content/                copy separada da renderização
    conversations.ts      microconversas
    method.ts             mecanismo, ciclo diário, jornada de 30 dias
    inside.ts             o que existe dentro do app
    situations.ts         as dez frases
    bonus.ts              os três bônus
    audience.ts           para quem é / não é, comparação
    faq.ts                objeções
    testimonials.ts       ← depoimentos reais (vazio de propósito)
  components/
    layout/               Header, Footer, Logo, MobileCta
    sections/             uma seção por arquivo, na ordem da página
    ui/                   Section, CtaButton, Reveal, ChatThread,
                          AppFrame, Accordion, ViewTracker, icons
  lib/
    assets.ts             detecção de assets reais em /public
    analytics.ts          camada de eventos
    cn.ts
public/
  product/                screenshots do app
  testimonials/           fotos dos depoimentos
  proof/                  prints de conversa/resultado
  brand/                  logo
```

---

## Decisões técnicas

- **Next.js 16 (App Router) + TypeScript + Tailwind CSS v4.** Nada além disso
  nas dependências de runtime.
- **Zero biblioteca de ícones e zero biblioteca de animação.** Os ícones são
  SVG inline (`src/components/ui/icons.tsx`); as animações são CSS + um
  `IntersectionObserver` de ~30 linhas.
- **Fontes self-hosted** via `next/font` (Sora para display, Inter para texto) —
  sem request para o Google no runtime.
- **Server Components por padrão.** Só são client: `Header`, `CtaButton`,
  `Reveal`, `Accordion`, `MobileCta` e `ViewTracker`.
- **Detecção de assets em build time** (`fs` no servidor), para a página nunca
  publicar uma moldura vazia nem uma prova inventada.

## Acessibilidade e performance

- `prefers-reduced-motion` desliga todas as transições e o scroll suave.
- Sem JavaScript o conteúdo aparece normalmente (`<noscript>` neutraliza o
  reveal).
- Link "pular para o conteúdo", hierarquia de headings, `focus-visible` em
  tudo que é focável, acordeão com `aria-expanded` / `aria-controls`.
- Nenhum overflow horizontal em 390px, 768px, 1440px e 1920px (verificado).
- Imagens fora da dobra com `loading="lazy"` e proporção fixa (sem layout
  shift).

## Pendências que dependem do produtor

- URL real do checkout.
- Screenshots reais do aplicativo.
- Depoimentos e prints reais, com autorização.
- IDs de Pixel / GA / GTM.
- Confirmação dos detalhes de acesso ao produto (há um `TODO` marcado em
  `src/content/faq.ts`).
- E-mail de suporte (`BRAND.supportEmail`, hoje vazio — o rodapé omite a linha).
