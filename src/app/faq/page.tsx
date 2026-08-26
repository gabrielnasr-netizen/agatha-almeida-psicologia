import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { faqs } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Perguntas frequentes",
  description:
    "Respostas diretas sobre terapia online, primeira sessão, duração do processo e valores.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero eyebrow="Dúvidas" title="Perguntas frequentes" />

      <section>
        <div className="container-page py-14 sm:py-20 max-w-2xl">
          <div className="divide-y divide-[var(--color-line)]">
            {faqs.map((f, i) => (
              <Reveal key={f.q} delay={Math.min(i * 0.05, 0.3)}>
                <details className="group py-5">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[var(--color-ink)]">
                    <span className="font-medium">{f.q}</span>
                    <span className="flex-none text-[var(--color-accent)] transition-transform group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-[var(--color-ink-soft)] leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.2} className="mt-10 text-center">
            <p className="text-[var(--color-ink-soft)]">
              Não achou o que procurava?
            </p>
            <div className="mt-4 flex justify-center">
              <WhatsAppCTA message="Olá, Agatha. Tenho uma dúvida que não vi no FAQ do site.">
                Perguntar no WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
