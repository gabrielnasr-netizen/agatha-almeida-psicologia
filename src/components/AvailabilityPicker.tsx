"use client";

import { useEffect, useMemo, useState } from "react";
import WhatsAppCTA from "@/components/WhatsAppCTA";

type Day = {
  key: string;
  label: string;
  weekday: string;
  slots: string[];
};

const CANDIDATE_TIMES = ["09:00", "11:00", "14:30", "16:00", "17:30"];

// Padrão determinístico só para simular disponibilidade real — nenhuma
// integração de calendário ainda. Ver nota na página.
function isSlotOpen(dayIndex: number, slotIndex: number) {
  return (dayIndex * 7 + slotIndex * 3) % 5 !== 0;
}

function buildDays(): Day[] {
  const days: Day[] = [];
  const today = new Date();
  let cursor = new Date(today);
  let dayIndex = 0;

  while (days.length < 8) {
    cursor = new Date(today);
    cursor.setDate(today.getDate() + dayIndex + 1);
    const weekday = cursor.getDay();
    dayIndex++;
    if (weekday === 0 || weekday === 6) continue; // sem fim de semana

    const slots = CANDIDATE_TIMES.filter((_, slotIndex) =>
      isSlotOpen(days.length, slotIndex)
    );
    if (slots.length === 0) continue;

    days.push({
      key: cursor.toISOString(),
      label: cursor.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" }),
      weekday: cursor.toLocaleDateString("pt-BR", { weekday: "short" }),
      slots,
    });
  }
  return days;
}

export default function AvailabilityPicker() {
  // `days` depende da data local do navegador — calculado só no cliente,
  // depois da montagem, para nunca divergir do HTML gerado no servidor
  // (que não tem como saber "hoje" no fuso de quem está vendo a página).
  const [days, setDays] = useState<Day[] | null>(null);
  const [activeDay, setActiveDay] = useState(0);
  const [selected, setSelected] = useState<{ day: Day; time: string } | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- gera dados client-only para evitar mismatch de hidratação
    setDays(buildDays());
  }, []);

  const nextThree = useMemo(() => {
    const flat: { day: Day; time: string }[] = [];
    for (const day of days ?? []) {
      for (const time of day.slots) {
        flat.push({ day, time });
        if (flat.length === 3) return flat;
      }
    }
    return flat;
  }, [days]);

  if (!days) {
    return (
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-8 animate-pulse">
        <div className="h-4 w-40 rounded bg-[var(--color-paper-deep)]" />
        <div className="mt-4 h-10 w-full rounded bg-[var(--color-paper-deep)]" />
      </div>
    );
  }

  return (
    <div className="space-y-10">
      {/* Próximos horários */}
      <div>
        <h3 className="text-lg text-[var(--color-ink)]">Próximos horários disponíveis</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {nextThree.map(({ day, time }) => (
            <button
              key={`${day.key}-${time}`}
              onClick={() => setSelected({ day, time })}
              className={`rounded-xl border px-4 py-3 text-left transition-colors ${
                selected?.day.key === day.key && selected?.time === time
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]/15"
                  : "border-[var(--color-line)] bg-[var(--color-panel)] hover:border-[var(--color-accent)]"
              }`}
            >
              <span className="block text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
                {day.weekday} · {day.label}
              </span>
              <span className="block mt-1 font-[family-name:var(--font-display)] text-xl text-[var(--color-ink)]">
                {time}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Escolher dia */}
      <div>
        <h3 className="text-lg text-[var(--color-ink)]">Ou escolha um dia</h3>
        <div className="mt-4 flex gap-2 overflow-x-auto pb-2">
          {days.map((day, i) => (
            <button
              key={day.key}
              onClick={() => setActiveDay(i)}
              className={`flex-none rounded-full border px-4 py-2 text-sm whitespace-nowrap transition-colors ${
                activeDay === i
                  ? "border-[var(--color-accent)] bg-[var(--color-accent)] text-[var(--color-panel)]"
                  : "border-[var(--color-line-strong)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
              }`}
            >
              {day.weekday} {day.label}
            </button>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {days[activeDay]?.slots.map((time) => (
            <button
              key={time}
              onClick={() => setSelected({ day: days[activeDay], time })}
              className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                selected?.day.key === days[activeDay].key && selected?.time === time
                  ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]/15 text-[var(--color-ink)]"
                  : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
              }`}
            >
              {time}
            </button>
          ))}
          {days[activeDay]?.slots.length === 0 && (
            <p className="text-sm text-[var(--color-ink-faint)]">Sem horários livres neste dia.</p>
          )}
        </div>
      </div>

      {/* Confirmação */}
      {selected && (
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-paper-deep)] p-6">
          <p className="text-sm text-[var(--color-ink-soft)]">Horário selecionado</p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
            {selected.day.weekday}, {selected.day.label} às {selected.time}
          </p>
          <p className="mt-3 text-xs text-[var(--color-ink-faint)]">
            Este protótipo ainda não confirma o agendamento automaticamente —
            finalize combinando o horário pelo WhatsApp.
          </p>
          <WhatsAppCTA
            className="mt-4"
            message={`Olá, Agatha. Vi no site que ${selected.day.weekday}, ${selected.day.label} às ${selected.time} está disponível — podemos confirmar esse horário?`}
          >
            Confirmar pelo WhatsApp
          </WhatsAppCTA>
        </div>
      )}
    </div>
  );
}
