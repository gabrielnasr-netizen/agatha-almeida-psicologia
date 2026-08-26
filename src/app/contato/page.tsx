import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Contato",
  description: "Fale com Agatha Almeida pelo WhatsApp ou pelo formulário de contato.",
};

export default function ContatoPage() {
  return (
    <>
      <PageHero
        eyebrow="Contato"
        title="Vamos conversar?"
        lede="O canal mais rápido é o WhatsApp. Se preferir, deixe uma mensagem pelo formulário abaixo."
      />

      <section>
        <div className="container-page py-14 sm:py-20 grid gap-12 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-7">
              <h2 className="text-xl text-[var(--color-ink)]">WhatsApp</h2>
              <p className="mt-2 text-sm text-[var(--color-ink-soft)]">
                Resposta mais rápida, com mensagem já pronta para facilitar.
              </p>
              <WhatsAppCTA
                className="mt-5"
                message="Olá, Agatha. Conheci seu trabalho pelo site e gostaria de saber mais sobre o atendimento."
              >
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-xl text-[var(--color-ink)]">Formulário</h2>
            <div className="mt-4">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
