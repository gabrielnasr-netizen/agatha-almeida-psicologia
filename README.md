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

## Formulário de contato (Supabase)

O formulário em `/contato` grava as mensagens numa tabela do Supabase via
Server Action (`src/app/contato/actions.ts`) — a chave nunca chega ao
navegador. Sem as variáveis de ambiente configuradas, o formulário continua
funcionando na interface, só avisa que ainda não está conectado.

**1. Criar a tabela.** No SQL Editor do projeto Supabase, rode:

```sql
create table contact_messages (
  id uuid primary key default gen_random_uuid(),
  nome text not null,
  contato text not null,
  mensagem text not null,
  created_at timestamptz not null default now()
);

alter table contact_messages enable row level security;

create policy "Permite inserir mensagens de contato"
  on contact_messages for insert
  to anon
  with check (true);
```

Isso permite que o site *insira* mensagens, mas ninguém consegue *ler* a
tabela usando a chave pública — leitura só pelo painel do Supabase (ou com a
`service_role` key, que nunca deve ir para o site).

**2. Pegar as credenciais.** Em Project Settings → API: `Project URL` e a
chave `anon` `public`.

**3. Configurar as variáveis de ambiente.** Local: copie `.env.local.example`
para `.env.local` e preencha. Em produção: Vercel → Project Settings →
Environment Variables → `SUPABASE_URL` e `SUPABASE_ANON_KEY`, depois faça
redeploy.

## Pendências conhecidas

- **Fotografias**: nenhuma imagem de banco foi usada. Os espaços reservados
  ("Espaço reservado") indicam exatamente que foto pedir e com qual enquadramento.
- **Agenda**: a página `/agenda` roda sobre dados de demonstração. A
  integração real com Google Calendar (via Cal.com/Calendly + FreeBusy)
  depende de credenciais e autorização da Agatha.
- **Formulário de contato**: já grava no Supabase assim que as variáveis de
  ambiente forem configuradas (ver seção acima) — ninguém recebe e-mail/
  notificação ainda quando uma mensagem chega, as respostas ficam só na
  tabela até isso ser combinado.
- **CRP, preço e modalidade (online/presencial)**: aguardando confirmação direta com a Agatha.
