import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Link from "next/link";
import { site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Atendimento",
  description:
    "Modalidade, duração e valores do atendimento psicológico com Agatha Almeida.",
};

export default function AtendimentoPage() {
  return (
    <>
      <PageHero
        eyebrow="Atendimento"
        title="O que esperar do atendimento"
        lede="Informações práticas para você decidir com tranquilidade — sem letras miúdas."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20 grid gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
              <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]">
                Modalidade
              </span>
              <p className="mt-2 text-[var(--color-ink)]">{site.modality}</p>
              <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
                (a confirmar: só online, ou também presencial — Discovery §03)
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
              <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]">
                Duração da sessão
              </span>
              <p className="mt-2 text-[var(--color-ink)]">{site.price.duration}</p>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
              <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]">
                Valor
              </span>
              <p className="mt-2 text-[var(--color-ink)]">
                {site.price.session} por sessão
              </p>
              <p className="mt-2 text-xs text-[var(--color-ink-faint)]">
                Sujeito a confirmação e a política de reajuste da própria Agatha.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
              <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.1em] text-[var(--color-accent)]">
                Convênio
              </span>
              <p className="mt-2 text-[var(--color-ink)]">
                (a confirmar com a Agatha)
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-panel)]">
        <div className="container-page py-16 sm:py-20">
          <Reveal>
            <h2 className="text-3xl text-[var(--color-ink)] max-w-lg">
              A primeira sessão
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="prose-copy mt-5 text-[var(--color-ink-soft)]">
            <p>
              Não é preciso chegar com um roteiro do que dizer. A primeira
              sessão é um espaço para você contar, no seu tempo, o que te
              trouxe até aqui — e para eu explicar como costumo trabalhar,
              tirar dúvidas e combinarmos juntas os próximos passos.
            </p>
            <p>
              Não há certo ou errado nessa conversa inicial. O objetivo é só
              começar.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page py-14 sm:py-16 text-center">
          <Reveal className="mx-auto max-w-lg">
            <h2 className="text-2xl text-[var(--color-ink)]">
              Pronta para dar o primeiro passo?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Link
                href="/agenda"
                className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
              >
                Ver disponibilidade
              </Link>
              <WhatsAppCTA message="Olá, Agatha. Gostaria de agendar minha primeira sessão.">
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
