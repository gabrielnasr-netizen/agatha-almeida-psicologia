import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import AvailabilityCalendar from "@/components/AvailabilityCalendar";
import Reveal from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Agenda",
  description: "Veja os próximos horários disponíveis para atendimento, por mês ou por semana.",
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
              o calendário abaixo já tem a visão de mês e semana prontas,
              mas os horários mostrados ainda são dados de demonstração. O
              código já sabe buscar a disponibilidade real no Google Calendar
              da Agatha (via FreeBusy, que nunca revela detalhe de outros
              atendimentos) assim que ela compartilhar a agenda com uma
              conta de serviço — ver instruções no README do projeto.
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <AvailabilityCalendar />
          </Reveal>
        </div>
      </section>
    </>
  );
}
