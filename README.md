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

## Agenda (Google Calendar)

A página `/agenda` já tem a interface completa (visão de mês e de semana,
`src/components/AvailabilityCalendar.tsx`), mas mostra dados de demonstração
até a integração real ser ativada. O código em `src/lib/google-calendar.ts`
já sabe consultar a agenda de verdade via **FreeBusy** — o método mais seguro
porque a API só devolve horários ocupados, nunca título, participantes ou
qualquer detalhe de outro atendimento (ver Discovery §17).

**1. Criar uma conta de serviço no Google Cloud**
- Em [console.cloud.google.com](https://console.cloud.google.com), crie (ou
  reutilize) um projeto
- Ative a **Google Calendar API** (menu APIs & Services → Library)
- Em **Credentials** → **Create Credentials** → **Service Account**, crie uma
  conta de serviço
- Na aba **Keys** dessa conta de serviço, **Add Key → JSON** — isso baixa um
  arquivo com `client_email` e `private_key`

**2. Compartilhar a agenda da Agatha com essa conta de serviço**
- No Google Calendar da Agatha (a conta real dela, não a nossa), abra as
  configurações da agenda em questão → **Compartilhar com pessoas específicas**
- Adicione o e-mail da conta de serviço (algo como
  `nome@projeto.iam.gserviceaccount.com`)
- Permissão: **"Ver apenas informações de disponibilidade (ocupado/livre)"**
  — nunca dar permissão de ver detalhes dos eventos

**3. Configurar as variáveis de ambiente** (local: `.env.local`; produção:
Vercel → Environment Variables):

```
GOOGLE_CALENDAR_ID=email-da-agenda-da-agatha@gmail.com
GOOGLE_SERVICE_ACCOUNT_EMAIL=nome@projeto.iam.gserviceaccount.com
GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
SESSION_DURATION_MINUTES=50
```

A `PRIVATE_KEY` vem do JSON baixado no passo 1 — cole o valor completo do
campo `private_key` entre aspas, mantendo os `\n`.

Assim que essas três variáveis existirem, a página `/agenda` passa a mostrar
disponibilidade real automaticamente — nenhuma mudança de código necessária.

## Pendências conhecidas

- **Fotografias**: nenhuma imagem de banco foi usada. Os espaços reservados
  ("Espaço reservado") indicam exatamente que foto pedir e com qual enquadramento.
- **Agenda**: interface pronta (mês/semana), rodando sobre dados de
  demonstração até a integração com o Google Calendar ser ativada (ver
  seção acima).
- **Formulário de contato**: já grava no Supabase assim que as variáveis de
  ambiente forem configuradas (ver seção acima) — ninguém recebe e-mail/
  notificação ainda quando uma mensagem chega, as respostas ficam só na
  tabela até isso ser combinado.
- **CRP, preço e modalidade (online/presencial)**: aguardando confirmação direta com a Agatha.
