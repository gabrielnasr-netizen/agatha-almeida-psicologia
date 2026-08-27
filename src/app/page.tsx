import Link from "next/link";
import { faqs } from "@/lib/site-content";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Reveal from "@/components/Reveal";
import Parallax from "@/components/Parallax";
import HeroReveal from "@/components/HeroReveal";
import MeditationMotif from "@/components/motifs/MeditationMotif";
import RippleMotif from "@/components/motifs/RippleMotif";

const situacoes = [
  { text: "Ansiedade que atrapalha o dia a dia", tone: "accent" },
  { text: "Autoestima abalada ou insegurança constante", tone: "calm" },
  { text: "Dificuldades em relacionamentos", tone: "accent" },
  { text: "Sobrecarga emocional e esgotamento", tone: "calm" },
  { text: "Vontade de se conhecer melhor", tone: "accent" },
] as const;

const dotColor: Record<(typeof situacoes)[number]["tone"], string> = {
  accent: "var(--color-accent)",
  calm: "var(--color-calm)",
};

const passos = [
  {
    n: "1",
    title: "Primeiro contato",
    text: "Você me chama, conta brevemente o que te trouxe até aqui e combinamos um horário — sem burocracia.",
    color: "var(--color-accent-soft)",
  },
  {
    n: "2",
    title: "Primeira sessão",
    text: "Um espaço para nos conhecermos. Não é preciso chegar com respostas prontas.",
    color: "var(--color-calm-soft)",
  },
  {
    n: "3",
    title: "Processo terapêutico",
    text: "Sessões regulares, com objetivos definidos junto com você e revisados ao longo do caminho.",
    color: "var(--color-accent-deep)",
  },
];

export default function Home() {
  return (
    <>
      <HeroReveal />

      {/* Sobre — resumo */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <div className="container-page py-16 sm:py-20 grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <Reveal>
            <Parallax offset={16}>
              <PlaceholderPhoto
                label="Retrato editorial da Agatha"
                spec="Vertical 4:5, enquadramento da cintura para cima, olhando levemente fora da câmera, fundo neutro claro, iluminação lateral suave, resolução mínima 2500px."
                tone="lilac"
                aspect="aspect-[4/5]"
              />
            </Parallax>
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
                Cada processo terapêutico tem seu próprio ritmo. Meu papel é
                oferecer estrutura e cuidado o suficiente para que você se
                sinta seguro para explorar o que precisa — sem pressa e sem
                julgamento.
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
      <section className="relative overflow-hidden border-b border-[var(--color-line)]">
        <MeditationMotif className="pointer-events-none absolute -right-6 top-8 h-40 w-40 text-[var(--color-accent-soft)] opacity-30" />
        <div className="container-page py-16 sm:py-20 relative">
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
              <Reveal key={p.n} delay={i * 0.1}>
                <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-6 h-full">
                  <span
                    className="font-[family-name:var(--font-display)] text-3xl italic"
                    style={{ color: p.color }}
                  >
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

      {/* Pausa editorial — foto ampla do ambiente */}
      <section className="relative border-b border-[var(--color-line)] overflow-hidden">
        <Parallax offset={50}>
          <div className="relative h-[52vh] min-h-[340px] max-h-[560px] w-full bg-gradient-to-br from-[var(--color-calm-soft)]/30 via-[var(--color-paper-deep)] to-[var(--color-paper)] flex items-center justify-center">
            <div className="text-center px-6">
              <span className="block font-[family-name:var(--font-label)] text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-accent)]">
                Espaço reservado
              </span>
              <span className="mt-2 block font-[family-name:var(--font-display)] text-lg text-[var(--color-ink)]">
                Ambiente de atendimento, formato amplo
              </span>
            </div>
          </div>
        </Parallax>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 p-6 sm:p-10 flex items-end justify-between gap-4">
          <Reveal>
            <p className="font-[family-name:var(--font-display)] italic text-2xl sm:text-3xl text-[var(--color-ink)] max-w-md">
              Um espaço pensado para você desacelerar.
            </p>
          </Reveal>
          <p className="hidden sm:block max-w-xs text-right text-xs text-[var(--color-ink-faint)] leading-snug">
            Horizontal 21:9, ambiente de atendimento visto de ângulo mais
            aberto, luz natural, sem pessoas (ou Agatha de costas/desfocada
            ao fundo) — ver pedido completo na seção de imagens.
          </p>
        </div>
      </section>

      {/* TCC em um parágrafo */}
      <section className="border-b border-[var(--color-line)] bg-[var(--color-panel)]">
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
                  key={s.text}
                  className="flex items-start gap-3 rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] px-4 py-3 text-sm text-[var(--color-ink-soft)]"
                >
                  <span
                    className="mt-1.5 h-1.5 w-1.5 flex-none rounded-full"
                    style={{ background: dotColor[s.tone] }}
                  />
                  {s.text}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Disponibilidade preview */}
      <section className="relative overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <RippleMotif className="pointer-events-none absolute -right-8 -top-8 h-56 w-56 text-[var(--color-calm-soft)] opacity-40" />
        <div className="container-page py-16 sm:py-20 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center relative">
          <Reveal>
            <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-calm)]">
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
              className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-calm)] whitespace-nowrap"
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

      {/* Contato final — fechamento com mais contraste, mesma família de cor */}
      <section className="bg-[var(--color-accent-deep)] text-[var(--color-paper)]">
        <div className="container-page py-20 sm:py-28 text-center">
          <Reveal className="mx-auto max-w-xl">
            <h2 className="text-3xl sm:text-4xl">
              Dar o primeiro passo pode começar com uma mensagem simples.
            </h2>
            <p className="mt-3 opacity-80">
              Sem compromisso, sem pressa — no seu tempo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <WhatsAppCTA message="Olá, Agatha. Conheci seu trabalho e gostaria de saber mais sobre o atendimento.">
                Falar no WhatsApp
              </WhatsAppCTA>
              <Link
                href="/contato"
                className="inline-flex items-center rounded-full border border-white/30 px-5 py-3 text-sm text-[var(--color-paper)] hover:border-white/70"
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
