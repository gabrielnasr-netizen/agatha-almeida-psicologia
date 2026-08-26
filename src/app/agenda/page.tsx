import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AvailabilityPicker from "@/components/AvailabilityPicker";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Veja os próximos horários disponíveis para atendimento.",
};

export default function AgendaPage() {
  return (
    <>
      <PageHero
        eyebrow="Agenda"
        title="Horários disponíveis"
        lede="Só mostramos o que está livre — nunca detalhes de outros atendimentos."
      />

      <section>
        <div className="container-page py-14 sm:py-20 max-w-3xl">
          <Reveal>
            <div className="mb-10 rounded-2xl border border-dashed border-[var(--color-line-strong)] bg-[var(--color-panel)] p-5 text-sm text-[var(--color-ink-soft)]">
              <strong className="text-[var(--color-ink)]">
                Protótipo em construção:
              </strong>{" "}
              os horários abaixo são dados de demonstração, não a agenda real
              da Agatha. Para ligar isso ao Google Calendar de verdade (sem
              nunca expor dados de outros pacientes), a recomendação técnica
              é Cal.com/Calendly conectado via OAuth usando FreeBusy — ver
              Discovery §17. Falta só a conta e a autorização da Agatha para
              ativar.
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AvailabilityPicker />
          </Reveal>
        </div>
      </section>
    </>
  );
}
