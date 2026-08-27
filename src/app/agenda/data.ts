"use server";

import { getRealAvailability, type DayAvailability } from "@/lib/google-calendar";

const CANDIDATE_TIMES = ["09:00", "11:00", "14:30", "16:00", "17:30"];

// Padrão determinístico só para simular disponibilidade real enquanto a
// integração com o Google Calendar não está configurada — ver
// src/lib/google-calendar.ts e o README.
function isSlotOpenMock(dayIndex: number, slotIndex: number) {
  return (dayIndex * 7 + slotIndex * 3) % 5 !== 0;
}

function buildMockAvailability(rangeStart: Date, rangeEnd: Date): DayAvailability[] {
  const days: DayAvailability[] = [];
  const cursor = new Date(rangeStart);
  let dayIndex = 0;

  while (cursor <= rangeEnd) {
    const weekday = cursor.getDay();
    if (weekday !== 0 && weekday !== 6) {
      const slots = CANDIDATE_TIMES.filter((_, slotIndex) => isSlotOpenMock(dayIndex, slotIndex));
      days.push({ date: cursor.toISOString().slice(0, 10), slots });
      dayIndex++;
    }
    cursor.setDate(cursor.getDate() + 1);
  }
  return days;
}

export type AvailabilityResult = {
  days: DayAvailability[];
  source: "google-calendar" | "demo";
};

export async function getAvailability(
  rangeStartISO: string,
  rangeEndISO: string
): Promise<AvailabilityResult> {
  const rangeStart = new Date(rangeStartISO);
  const rangeEnd = new Date(rangeEndISO);

  const real = await getRealAvailability(rangeStart, rangeEnd, CANDIDATE_TIMES).catch(() => null);
  if (real) return { days: real, source: "google-calendar" };

  return { days: buildMockAvailability(rangeStart, rangeEnd), source: "demo" };
}
