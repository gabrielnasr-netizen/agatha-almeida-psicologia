type PlaceholderPhotoProps = {
  label: string;
  spec: string;
  aspect?: string; // ex.: "aspect-[4/5]"
  tone?: "warm" | "sage" | "lilac";
  className?: string;
};

const tones: Record<NonNullable<PlaceholderPhotoProps["tone"]>, string> = {
  warm: "from-[var(--color-accent-soft)]/35 via-[var(--color-paper-deep)] to-[var(--color-paper)]",
  sage: "from-[var(--color-calm-soft)]/35 via-[var(--color-paper-deep)] to-[var(--color-paper)]",
  lilac: "from-[var(--color-accent-deep)]/25 via-[var(--color-paper-deep)] to-[var(--color-paper)]",
};

/**
 * Nunca usar banco de imagens como solução definitiva (regra do briefing).
 * Este componente marca, de forma visível, onde uma fotografia real precisa
 * entrar — e descreve exatamente o que pedir.
 */
export default function PlaceholderPhoto({
  label,
  spec,
  aspect = "aspect-[4/5]",
  tone = "warm",
  className = "",
}: PlaceholderPhotoProps) {
  return (
    <figure className={className}>
      <div
        className={`relative ${aspect} w-full overflow-hidden rounded-2xl border border-[var(--color-line-strong)] bg-gradient-to-br ${tones[tone]} flex items-center justify-center`}
      >
        <div className="text-center px-6">
          <span className="block font-[family-name:var(--font-label)] text-[0.65rem] tracking-[0.14em] uppercase text-[var(--color-accent)]">
            Espaço reservado
          </span>
          <span className="mt-2 block font-[family-name:var(--font-display)] text-lg text-[var(--color-ink)]">
            {label}
          </span>
        </div>
      </div>
      <figcaption className="mt-2 text-xs text-[var(--color-ink-faint)] leading-snug">
        {spec}
      </figcaption>
    </figure>
  );
}
