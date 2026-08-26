import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PlaceholderPhoto from "@/components/PlaceholderPhoto";
import Reveal from "@/components/Reveal";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Sobre",
  description:
    "Conheça Agatha Almeida, psicóloga com abordagem cognitivo-comportamental (TCC), formação e forma de trabalhar.",
};

export default function SobrePage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre"
        title="Um pouco sobre mim e sobre como trabalho"
        lede="Antes de falar de técnica, vale falar de intenção: meu trabalho é criar um espaço onde você possa se ouvir sem pressa e sem julgamento."
      />

      <section className="border-b border-[var(--color-line)]">
        <div className="container-page py-16 sm:py-20 grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <PlaceholderPhoto
              label="Retrato editorial da Agatha"
              spec="Vertical 4:5, cintura para cima, olhar levemente fora da câmera, fundo neutro claro, iluminação lateral suave, espaço negativo à esquerda, resolução mínima 2500px."
              tone="warm"
            />
          </Reveal>

          <Reveal delay={0.1} className="prose-copy text-[var(--color-ink-soft)]">
            <p>
              Sou {site.name}, {site.role.toLowerCase()} ({site.crp}), com
              atuação em {site.approach}. Meu compromisso é oferecer um
              espaço acolhedor e seguro para quem busca fortalecer a saúde
              mental e a autoestima, enfrentando a ansiedade e os desafios
              emocionais do dia a dia.
            </p>
            <p>
              Acredito que a saúde mental é fundamental para uma vida mais
              equilibrada — e que cada processo terapêutico é único. Meu
              trabalho busca respeitar a individualidade de cada pessoa,
              apoiando jornadas de autoconhecimento no ritmo de quem chega.
            </p>
            <p>
              Trabalho com a Terapia Cognitivo-Comportamental por acreditar
              em uma abordagem prática, estruturada e baseada em evidências —
              sem deixar de lado o acolhimento que todo processo terapêutico
              exige.
            </p>

            <div className="not-prose mt-8 rounded-2xl border border-[var(--color-line-strong)] bg-[var(--color-paper-deep)] p-5 text-sm text-[var(--color-ink-faint)]">
              <strong className="text-[var(--color-ink)]">
                Formação e registro profissional:
              </strong>{" "}
              conteúdo a confirmar diretamente com a Agatha antes da
              publicação — formação completa, especializações comprováveis e
              número de CRP.
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[var(--color-paper-deep)]">
        <div className="container-page py-14 sm:py-16 text-center">
          <Reveal className="mx-auto max-w-lg">
            <h2 className="text-2xl text-[var(--color-ink)]">
              Quer entender se faz sentido para você?
            </h2>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <WhatsAppCTA message="Olá, Agatha. Li sobre você no site e gostaria de conversar sobre o atendimento.">
                Falar no WhatsApp
              </WhatsAppCTA>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
