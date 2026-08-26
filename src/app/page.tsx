import Link from "next/link";
import { site, faqs } from "@/lib/site-content";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import OrganicMotif from "@/components/OrganicMotif";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Reveal from "@/components/Reveal";

const situacoes = [
  "Ansiedade que atrapalha o dia a dia",
  "Autoestima abalada ou insegurança constante",
  "Dificuldades em relacionamentos",
  "Sobrecarga emocional e esgotamento",
  "Vontade de se conhecer melhor",
];

const passos = [
  {
    n: "1",
    title: "Primeiro contato",
    text: "Você me chama, conta brevemente o que te trouxe até aqui e combinamos um horário — sem burocracia.",
  },
  {
    n: "2",
    title: "Primeira sessão",
    text: "Um espaço para nos conhecermos. Não é preciso chegar com respostas prontas.",
  },
  {
    n: "3",
    title: "Processo terapêutico",
    text: "Sessões regulares, com objetivos definidos junto com você e revisados ao longo do caminho.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <OrganicMotif className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] opacity-70" />
        <div className="container-page relative py-16 sm:py-24 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              TCC · Ansiedade · Autoestima
            </span>
            <h1 className="mt-4 text-4xl sm:text-5xl lg:text-[3.4rem] leading-[1.05] text-[var(--color-ink)]">
              Um espaço para você se ouvir com{" "}
              <em className="italic text-[var(--color-accent)]">calma</em>.
            </h1>
            <p className="prose-copy mt-6 text-lg text-[var(--color-ink-soft)]">
              Sou {site.name}, {site.role.toLowerCase()} com abordagem em{" "}
              {site.approach}. Atendo com cuidado quem busca entender melhor a
              ansiedade, fortalecer a autoestima e viver com mais leveza.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/agenda"
                className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
              >
                Ver disponibilidade
              </Link>
              <WhatsAppCTA
                variant="outline"
                message="Olá, Agatha. Conheci seu trabalho e gostaria de saber mais sobre o atendimento."
              >
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <PlaceholderPhoto
              label="Retrato ou ambiente de atendimento"
              spec="Vertical 4:5, retrato da Agatha da cintura para cima ou foto do ambiente de atendimento (reaproveitar/regravar a foto atual do hero, que já funciona bem), iluminação natural suave, espaço negativo para não brigar com o texto."
              tone="warm"
            />
          </Reveal>
        </div>
      </section>

      {/* Sobre — resumo */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <div className="container-page py-16 sm:py-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <PlaceholderPhoto
              label="Retrato editorial da Agatha"
              spec="Vertical 4:5, enquadramento da cintura para cima, olhando levemente fora da câmera, fundo neutro claro, iluminação lateral suave, resolução mínima 2500px."
              tone="lilac"
              aspect="aspect-[4/5]"
            />
          </Reveal>
          <Reveal delay={0.1}>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Sobre
            </span>
            <h2 className="mt-3 text-3xl text-[var(--color-ink)]">
              Psicóloga, com espaço para o que você trouxer
            </h2>
            <div className="prose-copy mt-5 text-[var(--color-ink-soft)]">
              <p>
                Meu compromisso é oferecer um espaço acolhedor e seguro para
                quem busca fortalecer a saúde mental e a autoestima,
                enfrentando a ansiedade e os desafios emocionais do dia a
                dia — sem julgamento, no seu tempo.
              </p>
            </div>
            <Link
              href="/sobre"
              className="mt-5 inline-block text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              Conheça a Agatha →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Como funciona */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Como funciona
            </span>
            <h2 className="mt-3 text-3xl text-[var(--color-ink)] max-w-lg">
              Do primeiro contato à rotina de sessões
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {passos.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 h-full">
                  <span className="font-[family-name:var(--font-display)] text-3xl italic text-[var(--color-accent-soft)]">
                    {p.n}
                  </span>
                  <h3 className="mt-3 text-lg text-[var(--color-ink)]">{p.title}</h3>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {p.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/atendimento"
              className="mt-8 inline-block text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              Detalhes do atendimento, duração e valores →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* TCC em um parágrafo */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-deep)]">
        <div className="container-page py-16 sm:py-20 grid gap-8 lg:grid-cols-2 lg:items-center">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Abordagem
            </span>
            <h2 className="mt-3 text-3xl text-[var(--color-ink)]">
              O que é a Terapia Cognitivo-Comportamental
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="prose-copy text-[var(--color-ink-soft)]">
              <p>
                A TCC parte da ideia de que pensamentos, emoções e
                comportamentos estão conectados — e que entender essa relação
                ajuda a lidar melhor com o que incomoda. É uma abordagem
                prática, com objetivos definidos junto com você e revisados
                ao longo do processo.
              </p>
            </div>
            <Link
              href="/tcc"
              className="mt-4 inline-block text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              Entenda como funciona a TCC →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Para quem é */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Para quem é
            </span>
            <h2 className="mt-3 text-3xl text-[var(--color-ink)] max-w-lg">
              Situações comuns de quem procura terapia
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2 max-w-2xl">
              {situacoes.map((s) => (
                <li
                  key={s}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm text-[var(--color-ink-soft)]"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full bg-[var(--color-sage)]" />
                  {s}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Disponibilidade preview */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <div className="container-page py-16 sm:py-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Agenda
            </span>
            <h2 className="mt-3 text-3xl text-[var(--color-ink)] max-w-md">
              Veja os próximos horários disponíveis
            </h2>
            <p className="prose-copy mt-3 text-[var(--color-ink-soft)]">
              Sem precisar perguntar. A agenda mostra só o que está livre —
              nunca detalhes de outros atendimentos.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              href="/agenda"
              className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)] whitespace-nowrap"
            >
              Ver agenda completa
            </Link>
          </Reveal>
        </div>
      </section>

      {/* FAQ preview */}
      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
              Dúvidas comuns
            </span>
            <h2 className="mt-3 text-3xl text-[var(--color-ink)] max-w-lg">
              Perguntas frequentes
            </h2>
          </Reveal>
          <div className="mt-8 max-w-2xl divide-y divide-[var(--color-line)]">
            {faqs.slice(0, 3).map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <details className="group py-4">
                  <summary className="flex cursor-pointer list-none items-center justify-between text-[var(--color-ink)]">
                    <span className="font-medium">{f.q}</span>
                    <span className="ml-4 text-[var(--color-accent)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-2 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.2}>
            <Link
              href="/faq"
              className="mt-6 inline-block text-sm font-medium text-[var(--color-accent)] hover:text-[var(--color-ink)]"
            >
              Ver todas as perguntas →
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Contato final */}
      <section className="bg-[var(--color-paper-deep)]">
        <div className="container-page py-16 sm:py-20 text-center">
          <Reveal className="mx-auto max-w-xl">
            <h2 className="text-3xl text-[var(--color-ink)]">
              Dar o primeiro passo pode começar com uma mensagem simples.
            </h2>
            <p className="mt-3 text-[var(--color-ink-soft)]">
              Sem compromisso, sem pressa — no seu tempo.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <WhatsAppCTA message="Olá, Agatha. Conheci seu trabalho e gostaria de saber mais sobre o atendimento.">
                Falar no WhatsApp
              </WhatsAppCTA>
              <Link
                href="/contato"
                className="inline-flex items-center rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-sm text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Outras formas de contato
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
