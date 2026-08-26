# Agatha Almeida — Psicóloga

Site institucional em construção, Next.js + TypeScript + Tailwind CSS.

Este é um **protótipo de trabalho**, não a versão final: parte da pesquisa e
das decisões documentadas no discovery estratégico do projeto. Vários pontos
seguem marcados no próprio código e na interface como pendentes de
confirmação (CRP, modalidade de atendimento, preço, fotografias) — ver os
comentários `a confirmar` espalhados pelo código, especialmente em
`src/lib/site-content.ts`.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Estrutura

- `src/app/` — páginas (App Router): Home, Sobre, TCC, Atendimento, Agenda, FAQ, Contato, políticas
- `src/components/` — componentes compartilhados (Header, Footer, CTA de WhatsApp, seletor de agenda, etc.)
- `src/lib/site-content.ts` — conteúdo e dados centrais do site (fácil de editar num só lugar)

## Pendências conhecidas

- **Fotografias**: nenhuma imagem de banco foi usada. Os espaços reservados
  ("Espaço reservado") indicam exatamente que foto pedir e com qual enquadramento.
- **Agenda**: a página `/agenda` roda sobre dados de demonstração. A
  integração real com Google Calendar (via Cal.com/Calendly + FreeBusy)
  depende de credenciais e autorização da Agatha.
- **Formulário de contato**: interface pronta, mas ainda sem backend/e-mail configurado.
- **CRP, preço e modalidade (online/presencial)**: aguardando confirmação direta com a Agatha.
