# IQON — Landing page

Landing page da IQON (agência de marketing estratégico) em Next.js 16, React 19, TypeScript e Tailwind CSS 4.

## Rodar

```bash
npm install
npm run dev
```

Produção: `npm run build` e `npm run start`. Validação: `npm run lint` e `npx tsc --noEmit`.

O canonical e o Open Graph usam `NEXT_PUBLIC_SITE_URL` (veja `.env.example`). Sem ela, na Vercel vale o domínio de produção do projeto e, localmente, `http://localhost:3000`. Defina a variável quando houver domínio próprio.

## Onde editar o conteúdo

A copy completa, na ordem da página e com o arquivo de cada texto, está em [docs/copy-landing-page.md](docs/copy-landing-page.md).

Toda a copy fica em `content/`. Os componentes em `components/` só cuidam do layout.

| Arquivo | O que controla |
| --- | --- |
| `content/site.ts` | Metadados, WhatsApp, Instagram, navegação, botões, mensagens do WhatsApp, hero e rodapé |
| `content/fronts.ts` | "Sua marca precisa funcionar em três frentes" e os rótulos do diagrama do sistema |
| `content/pains.ts` | Diagnóstico (itens marcados vão escritos na mensagem) e opções do formulário |
| `content/positioning.ts` | Manifesto e princípios |
| `content/system.ts` | "Quatro partes. Uma estratégia." |
| `content/services.ts` | Serviços, "Também fazemos" e escopo (incluso / depende de você) |
| `content/process.ts` | Processo e "O resultado não acontece em uma linha reta" |
| `content/team.ts` | Equipe (preencha `photo` para trocar o monograma pela foto) |
| `content/faq.ts` | Perguntas frequentes |
| `content/contact.ts` | Chamada final, formulário e convite para o Instagram |
| `content/proof.ts` | Depoimentos e projetos: as seções ficam ocultas enquanto as listas estiverem vazias |

Cores, escala tipográfica e animações estão em `app/globals.css`.

## Pendências de conteúdo

- Depoimentos reais, com autorização dos clientes → `content/proof.ts`
- Projetos com imagens → `content/proof.ts` e `public/images/projetos/`
- Fotos da equipe → `public/images/equipe/` e `content/team.ts`
- Confirmar a grafia "Welinton" (site atual) ou "Welington" (documentos internos)
- E-mail comercial, se houver → `content/site.ts`
- Domínio próprio → `NEXT_PUBLIC_SITE_URL`

## Estrutura

```
app/                layout (fontes e metadados), página e tokens de design
components/
  sections/         uma seção por arquivo
  layout/           header, menu mobile, rodapé e CTA fixo no mobile
  diagnostic/       dores marcadas + link de WhatsApp com contexto
  ui/               botões, container e título de seção
  visuals/          diagrama do sistema (três frentes) e logotipo tipográfico
content/            textos e dados da página
lib/                montagem da mensagem de WhatsApp e utilitários
```

## Decisões

- Narrativa: problema → tensão → diagnóstico → sistema IQON → serviços → processo → prova → objeções → conversa.
- O diagrama representa um sistema, não uma linha do tempo: presença, autoridade e conversão aparecem sobrepostas e são desenhadas ao mesmo tempo. Nenhum texto da página associa meses ou prazos à chegada de clientes.
- Condição comercial atual: sem contrato mínimo; qualquer lado encerra com um mês de aviso, sem multa. Prazo de contrato nunca é apresentado como previsão de resultado.
- Os botões levam a uma conversa no WhatsApp e acompanham a leitura (entender → identificar → conversar). O diagnóstico digital é um produto pago da IQON, então a página não o oferece como gratuito.
- Conversão pelo WhatsApp com mensagem pronta: nenhum dado do visitante passa por servidor.
- FAQ com `<details name>` nativo (sem JavaScript) e menu mobile com `<dialog>`.
- Animações apenas com `prefers-reduced-motion: no-preference`. O traço da seção de resultados acompanha a rolagem onde o navegador suporta e aparece completo nos demais.
- Nos textos, o travessão vem precedido de ` ` (espaço que não quebra linha), para não começar uma linha sozinho.
