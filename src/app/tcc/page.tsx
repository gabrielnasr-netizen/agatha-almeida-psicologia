import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata: Metadata = {
  title: "Como funciona a TCC",
  description:
    "O que é a Terapia Cognitivo-Comportamental, como funciona uma sessão e para que costuma ajudar — explicado em linguagem acessível.",
};

const blocos = [
  {
    title: "O que é",
    text: "A TCC parte da ideia de que pensamentos, emoções e comportamentos estão conectados. Mudar a forma como interpretamos uma situação pode mudar como nos sentimos e como agimos diante dela.",
  },
  {
    title: "Como acontece uma sessão",
    text: "Conversamos sobre situações recentes, identificamos padrões de pensamento e testamos, junto, formas diferentes de lidar com eles. É uma abordagem colaborativa — você participa ativamente, inclusive entre uma sessão e outra.",
  },
  {
    title: "O que costuma abordar",
    text: "É usada com frequência para ansiedade, questões de autoestima, dificuldades em relacionamentos, estresse e sobrecarga emocional — sempre ajustada ao que motivou a busca por terapia.",
  },
  {
    title: "Diferença para outras abordagens",
    text: "Outras linhas teóricas (como a psicanálise) partem de referenciais diferentes sobre como a mente funciona. A TCC costuma ser mais estruturada e orientada a objetivos práticos, com técnicas específicas para cada questão trabalhada.",
  },
];

export default function TCCPage() {
  return (
    <>
      <PageHero
        eyebrow="Abordagem"
        title="Terapia Cognitivo-Comportamental, em linguagem simples"
        lede="Sem jargão técnico: aqui está o que a TCC é, como uma sessão costuma acontecer e para que ela costuma ajudar."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20 grid gap-8 sm:grid-cols-2">
          {blocos.map((b, i) => (
            <Reveal key={b.title} delay={i * 0.06}>
              <div className="h-full rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
                <h2 className="text-xl text-[var(--color-ink)]">{b.title}</h2>
                <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {b.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-b border-[var(--color-line)] bg-[var(--color-paper-deep)]">
        <div className="container-page py-10">
          <Reveal>
            <p className="prose-copy text-sm text-[var(--color-ink-faint)]">
              Este conteúdo é informativo e não substitui avaliação
              individual. Nenhum texto aqui tem intenção diagnóstica —
              se algo do que você leu ressoou com o que sente, o próximo
              passo saudável é conversar, não se autodiagnosticar.
            </p>
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container-page py-14 sm:py-16 text-center">
          <Reveal className="mx-auto max-w-lg">
            <h2 className="text-2xl text-[var(--color-ink)]">
              Ficou com alguma dúvida sobre o processo?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <WhatsAppCTA message="Olá, Agatha. Tenho uma dúvida sobre como funciona a terapia com TCC.">
                Perguntar no WhatsApp
              </WhatsAppCTA>
              <Link
                href="/faq"
                className="inline-flex items-center rounded-full border border-[var(--color-line-strong)] px-5 py-3 text-sm text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                Ver perguntas frequentes
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
