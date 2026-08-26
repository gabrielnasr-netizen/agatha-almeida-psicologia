import Reveal from "@/components/Reveal";

export default function PageHero({
  eyebrow,
  title,
  lede,
}: {
  eyebrow: string;
  title: string;
  lede?: string;
}) {
  return (
    <section className="border-b border-[var(--color-line)] bg-[var(--color-panel)]">
      <div className="container-page py-14 sm:py-20">
        <Reveal>
          <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
            {eyebrow}
          </span>
          <h1 className="mt-3 text-4xl sm:text-5xl text-[var(--color-ink)] max-w-2xl">
            {title}
          </h1>
          {lede && (
            <p className="prose-copy mt-5 text-lg text-[var(--color-ink-soft)]">
              {lede}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
