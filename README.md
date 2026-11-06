# IQON — Soluções Estratégicas para Negócios

Landing page institucional da **IQON** construída com Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS 4 e Three.js.

> **Posicionamento Central:**  
> *"Primeiro entendemos o que está impedindo seu negócio de avançar. Depois estruturamos o que ele realmente precisa."*

---

## 🚀 Como Rodar Localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) para visualizar as alterações com Hot-Reload.

---

## 🛠️ Build e Exportação Estática (Hostinger / Apache)

O projeto está configurado com `output: "export"` no `next.config.ts` e gera arquivos estáticos puros na pasta `out/`:

```bash
# Gerar build de produção estático
npm run build
```

Os arquivos da pasta `out/` já vêm acompanhados de `.htaccess` otimizado para servidores Apache (comum na Hostinger), com regras de roteamento, compressão Gzip e cache de assets.

### Pacote ZIP para Hostinger:
- **`IQON_Hostinger_public_html.zip`**: Conteúdo direto para extrair no diretório `public_html` da Hostinger via Gerenciador de Arquivos.
- **`IQON_codigo_fonte.zip`**: Cópia limpa do código-fonte para versionamento ou execução Node.js.

---

## 🏛️ Estrutura de Conteúdo e Arquitetura

Toda a inteligência textual e parametrização é isolada na pasta `content/`:

| Arquivo | Descrição |
| --- | --- |
| `content/site.ts` | Informações da marca, links sociais, WhatsApp e chamada hero |
| `content/pains.ts` | Bento grid de 6 gargalos reais que conectam direto com mensagem personalizada ao WhatsApp |
| `content/process.ts` | As 3 etapas do Método IQON (1. Raio-X Diagnóstico, 2. Solução Sob Medida, 3. Execução Estratégica) |
| `content/services.ts` | 5 Frentes Modulares com abas interativas + 4 Pilares de Escopo Sob Medida |
| `content/positioning.ts` | Manifesto escuro de alto contraste com os 4 Princípios IQON |
| `content/team.ts` | Especialistas e frentes integradas (Agatha, Welington, Alanna) |
| `content/faq.ts` | 8 Perguntas Frequentes em acordeão nativo rápido e sem atrito |
| `content/contact.ts` | Formulário consultivo pré-formatado e botão de ação para WhatsApp |

---

## 🎨 Design System e Recursos Visuais

- **Tipografia**: *Hanken Grotesk* (Sans-serif limpa, geométrica, de alta escaneabilidade e leitura ágil em telas desktop e mobile).
- **Three.js**:
  - `components/3d/ThreeLoader.tsx`: Preloader cinematográfico em Three.js com contador percentual suave (fade-out em ~900ms).
  - `components/3d/ThreeBackground.tsx`: Partículas orbitais e wireframe 3D geométrico reagindo organicamente ao scroll e cursor.
- **Microinterações**: Framer Motion com fallback para `prefers-reduced-motion`.
- **Paleta**: Off-white contemporâneo com acentos em grafite escuro, preto puro e detalhes sutis de profundidade.

---

## 📱 Responsividade & Performance

- **Mobile First**: Menu drawer acessível, CTAs táteis com alvos de toque generosos (≥ 48px), tabelas e abas com rolagem suave horizontal quando necessário.
- **Conversão via WhatsApp**: Mensagens contextualizadas montadas dinamicamente com as opções selecionadas pelo visitante, sem dependência de banco de dados para o formulário inicial.
