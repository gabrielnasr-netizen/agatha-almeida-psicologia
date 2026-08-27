import { google } from "googleapis";

export type DayAvailability = {
  /** formato YYYY-MM-DD, em horário local do consultório */
  date: string;
  slots: string[];
};

/**
 * Lê disponibilidade real do Google Calendar via FreeBusy — método que só
 * retorna intervalos ocupados, nunca título/descrição/participantes de
 * outros compromissos (ver Discovery §17). Precisa de uma service account
 * com a agenda da Agatha compartilhada em modo "ver apenas disponibilidade".
 *
 * Retorna null quando as credenciais não estão configuradas, para o
 * chamador cair de volta nos dados de demonstração sem quebrar a página.
 */
export async function getRealAvailability(
  rangeStart: Date,
  rangeEnd: Date,
  candidateTimes: string[] // ex.: ["09:00", "11:00", "14:30"]
): Promise<DayAvailability[] | null> {
  const calendarId = process.env.GOOGLE_CALENDAR_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
  const sessionMinutes = Number(process.env.SESSION_DURATION_MINUTES ?? "50");

  if (!calendarId || !clientEmail || !privateKey) return null;

  const auth = new google.auth.JWT({
    email: clientEmail,
    key: privateKey,
    scopes: ["https://www.googleapis.com/auth/calendar.freebusy"],
  });

  const calendar = google.calendar({ version: "v3", auth });

  const { data } = await calendar.freebusy.query({
    requestBody: {
      timeMin: rangeStart.toISOString(),
      timeMax: rangeEnd.toISOString(),
      items: [{ id: calendarId }],
    },
  });

  const busy = data.calendars?.[calendarId]?.busy ?? [];

  const days: DayAvailability[] = [];
  const cursor = new Date(rangeStart);
  while (cursor <= rangeEnd) {
    const weekday = cursor.getDay();
    if (weekday !== 0 && weekday !== 6) {
      const slots = candidateTimes.filter((time) => {
        const [h, m] = time.split(":").map(Number);
        const slotStart = new Date(cursor);
        slotStart.setHours(h, m, 0, 0);
        const slotEnd = new Date(slotStart.getTime() + sessionMinutes * 60_000);

        return !busy.some((b) => {
          if (!b.start || !b.end) return false;
          const busyStart = new Date(b.start);
          const busyEnd = new Date(b.end);
          return slotStart < busyEnd && slotEnd > busyStart;
        });
      });

      days.push({
        date: cursor.toISOString().slice(0, 10),
        slots,
      });
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return days;
}
