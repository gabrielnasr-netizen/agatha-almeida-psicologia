import { whatsappLink } from "@/lib/site-content";

type WhatsAppCTAProps = {
  message: string;
  children: React.ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

export default function WhatsAppCTA({
  message,
  children,
  variant = "solid",
  className = "",
}: WhatsAppCTAProps) {
  const base =
    "inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition-colors duration-200";
  const styles =
    variant === "solid"
      ? "bg-[var(--color-accent)] text-[var(--color-panel)] hover:bg-[var(--color-ink)]"
      : "border border-[var(--color-line-strong)] text-[var(--color-ink)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]";

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      data-event="whatsapp_click"
      className={`${base} ${styles} ${className}`}
    >
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.39 1.26 4.81L2 22l5.41-1.42a9.87 9.87 0 0 0 4.63 1.17h.01c5.46 0 9.9-4.45 9.9-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.06c-.24.68-1.4 1.3-1.93 1.37-.49.07-1.1.1-1.78-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.1-4.85-4.29-.14-.19-1.16-1.55-1.16-2.96 0-1.4.73-2.09 1-2.38.26-.28.57-.35.76-.35h.55c.18 0 .42-.07.65.5.24.58.82 2 .89 2.14.07.14.11.31.02.5-.09.19-.14.31-.28.47-.14.16-.29.36-.42.48-.14.14-.28.28-.12.56.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.68-.79.87-1.07.19-.28.37-.23.62-.14.26.09 1.63.77 1.91.91.28.14.47.21.54.33.07.12.07.68-.17 1.36Z" />
      </svg>
      {children}
    </a>
  );
}
