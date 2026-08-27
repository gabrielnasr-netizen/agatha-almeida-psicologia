"use client";

import { useEffect, useState, useTransition } from "react";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import { getAvailability, type AvailabilityResult } from "@/app/agenda/data";

const WEEKDAY_LABELS = ["seg", "ter", "qua", "qui", "sex", "sáb", "dom"];

function startOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), 1);
}
function endOfMonth(d: Date) {
  return new Date(d.getFullYear(), d.getMonth() + 1, 0, 23, 59, 59);
}
function startOfWeek(d: Date) {
  const day = (d.getDay() + 6) % 7; // segunda = 0
  const start = new Date(d);
  start.setDate(d.getDate() - day);
  start.setHours(0, 0, 0, 0);
  return start;
}
function addDays(d: Date, n: number) {
  const nd = new Date(d);
  nd.setDate(d.getDate() + n);
  return nd;
}
function toISODate(d: Date) {
  return d.toISOString().slice(0, 10);
}

export default function AvailabilityCalendar() {
  // `today`/`anchor` dependem da data local do navegador — calculados só
  // no cliente, depois da montagem, para nunca divergir do HTML do
  // servidor (que não sabe o fuso de quem está vendo a página).
  const [today, setToday] = useState<Date | null>(null);
  const [anchor, setAnchor] = useState<Date | null>(null);
  const [view, setView] = useState<"mes" | "semana">("mes");
  const [data, setData] = useState<AvailabilityResult | null>(null);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- data client-only para evitar mismatch de hidratação
    setToday(now);
    setAnchor(now);
  }, []);

  useEffect(() => {
    if (!anchor) return;
    const rangeStart = view === "mes" ? startOfMonth(anchor) : startOfWeek(anchor);
    const rangeEnd = view === "mes" ? endOfMonth(anchor) : addDays(startOfWeek(anchor), 6);
    startTransition(() => {
      getAvailability(rangeStart.toISOString(), rangeEnd.toISOString()).then(setData);
    });
  }, [anchor, view]);

  if (!anchor || !today) {
    return (
      <div className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-panel)] p-8 animate-pulse">
        <div className="h-4 w-40 rounded bg-[var(--color-paper-deep)]" />
        <div className="mt-4 h-48 w-full rounded bg-[var(--color-paper-deep)]" />
      </div>
    );
  }

  const daysByDate = new Map((data?.days ?? []).map((d) => [d.date, d.slots]));
  const selectedSlots = selectedDate ? daysByDate.get(selectedDate) ?? [] : [];

  function goPrev() {
    setSelectedDate(null);
    setAnchor((a) => (a ? (view === "mes" ? new Date(a.getFullYear(), a.getMonth() - 1, 1) : addDays(a, -7)) : a));
  }
  function goNext() {
    setSelectedDate(null);
    setAnchor((a) => (a ? (view === "mes" ? new Date(a.getFullYear(), a.getMonth() + 1, 1) : addDays(a, 7)) : a));
  }

  const monthLabel = anchor.toLocaleDateString("pt-BR", { month: "long", year: "numeric" });
  const weekStart = startOfWeek(anchor);
  const weekDays = Array.from({ length: 7 }, (_, i) => addDays(weekStart, i));

  // grade do mês, alinhada de segunda a domingo, com dias vazios de padding
  const monthStart = startOfMonth(anchor);
  const monthEnd = endOfMonth(anchor);
  const leadingBlanks = (monthStart.getDay() + 6) % 7;
  const totalDays = monthEnd.getDate();
  const monthCells: (Date | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: totalDays }, (_, i) => new Date(anchor.getFullYear(), anchor.getMonth(), i + 1)),
  ];

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <button
            onClick={goPrev}
            aria-label="Período anterior"
            className="h-8 w-8 rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)]"
          >
            ‹
          </button>
          <span className="font-[family-name:var(--font-display)] text-lg capitalize text-[var(--color-ink)] min-w-[9rem] text-center">
            {view === "mes" ? monthLabel : `Semana de ${weekStart.toLocaleDateString("pt-BR", { day: "2-digit", month: "short" })}`}
          </span>
          <button
            onClick={goNext}
            aria-label="Próximo período"
            className="h-8 w-8 rounded-full border border-[var(--color-line-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)]"
          >
            ›
          </button>
        </div>
        <div className="flex rounded-full border border-[var(--color-line-strong)] p-1 text-sm">
          {(
            [
              { key: "mes", label: "Mês" },
              { key: "semana", label: "Semana" },
            ] as const
          ).map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setView(key)}
              className={`rounded-full px-4 py-1.5 transition-colors ${
                view === key ? "bg-[var(--color-ink)] text-[var(--color-paper)]" : "text-[var(--color-ink-soft)]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>

      {isPending && (
        <p className="text-xs text-[var(--color-ink-faint)]">Carregando disponibilidade…</p>
      )}

      {view === "mes" ? (
        <div>
          <div className="grid grid-cols-7 gap-1.5 text-center">
            {WEEKDAY_LABELS.map((w) => (
              <span key={w} className="text-xs uppercase tracking-wide text-[var(--color-ink-faint)] py-1">
                {w}
              </span>
            ))}
            {monthCells.map((date, i) => {
              if (!date) return <div key={`blank-${i}`} />;
              const iso = toISODate(date);
              const slots = daysByDate.get(iso) ?? [];
              const isPast = date < today;
              const hasSlots = !isPast && slots.length > 0;
              const isSelected = selectedDate === iso;
              return (
                <button
                  key={iso}
                  disabled={isPast || slots.length === 0}
                  onClick={() => setSelectedDate(iso)}
                  className={`aspect-square rounded-lg text-sm flex flex-col items-center justify-center gap-1 border transition-colors ${
                    isSelected
                      ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]/20 text-[var(--color-ink)]"
                      : hasSlots
                        ? "border-[var(--color-line)] text-[var(--color-ink)] hover:border-[var(--color-accent)]"
                        : "border-transparent text-[var(--color-ink-faint)] cursor-default"
                  }`}
                >
                  {date.getDate()}
                  {hasSlots && (
                    <span className="h-1 w-1 rounded-full" style={{ background: "var(--color-calm)" }} />
                  )}
                </button>
              );
            })}
          </div>

          {selectedDate && (
            <div className="mt-5 flex flex-wrap gap-2">
              {selectedSlots.length === 0 ? (
                <p className="text-sm text-[var(--color-ink-faint)]">Sem horários livres neste dia.</p>
              ) : (
                selectedSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`rounded-lg border px-4 py-2 text-sm transition-colors ${
                      selectedTime === time && selectedDate
                        ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]/15 text-[var(--color-ink)]"
                        : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
                    }`}
                  >
                    {time}
                  </button>
                ))
              )}
            </div>
          )}
        </div>
      ) : (
        <div className="grid grid-cols-7 gap-2">
          {weekDays.map((date) => {
            const iso = toISODate(date);
            const slots = daysByDate.get(iso) ?? [];
            const isPast = date < today;
            return (
              <div key={iso} className="rounded-xl border border-[var(--color-line)] bg-[var(--color-panel)] p-2.5">
                <span className="block text-center text-xs uppercase tracking-wide text-[var(--color-ink-faint)]">
                  {date.toLocaleDateString("pt-BR", { weekday: "short" })}
                </span>
                <span className="block text-center font-[family-name:var(--font-display)] text-lg text-[var(--color-ink)]">
                  {date.getDate()}
                </span>
                <div className="mt-2 flex flex-col gap-1">
                  {isPast || slots.length === 0 ? (
                    <span className="text-center text-xs text-[var(--color-ink-faint)]">—</span>
                  ) : (
                    slots.map((time) => (
                      <button
                        key={time}
                        onClick={() => {
                          setSelectedDate(iso);
                          setSelectedTime(time);
                        }}
                        className={`rounded-md border px-1.5 py-1 text-xs transition-colors ${
                          selectedDate === iso && selectedTime === time
                            ? "border-[var(--color-accent)] bg-[var(--color-accent-soft)]/15 text-[var(--color-ink)]"
                            : "border-[var(--color-line)] text-[var(--color-ink-soft)] hover:border-[var(--color-accent)]"
                        }`}
                      >
                        {time}
                      </button>
                    ))
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}

      {selectedDate && selectedTime && (
        <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-paper-deep)] p-6">
          <p className="text-sm text-[var(--color-ink-soft)]">Horário selecionado</p>
          <p className="mt-1 font-[family-name:var(--font-display)] text-2xl text-[var(--color-ink)]">
            {new Date(selectedDate + "T00:00:00").toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "2-digit",
              month: "long",
            })}{" "}
            às {selectedTime}
          </p>
          {data?.source === "demo" && (
            <p className="mt-3 text-xs text-[var(--color-ink-faint)]">
              Este protótipo ainda não confirma o agendamento automaticamente —
              finalize combinando o horário pelo WhatsApp.
            </p>
          )}
          <WhatsAppCTA
            className="mt-4"
            message={`Olá, Agatha. Vi no site que ${new Date(selectedDate + "T00:00:00").toLocaleDateString("pt-BR", { weekday: "long", day: "2-digit", month: "long" })} às ${selectedTime} está disponível — podemos confirmar esse horário?`}
          >
            Confirmar pelo WhatsApp
          </WhatsAppCTA>
        </div>
      )}
    </div>
  );
}
