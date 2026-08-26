import Link from "next/link";
import { site } from "@/lib/site-content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[var(--color-line)] bg-[var(--color-paper-deep)]">
      <div className="container-page py-12 grid gap-10 md:grid-cols-3">
        <div>
          <span className="font-[family-name:var(--font-display)] text-lg italic text-[var(--color-accent)]">
            {site.name}
          </span>
          <p className="mt-3 text-sm text-[var(--color-ink-soft)] max-w-xs">
            {site.role} · {site.approach}
          </p>
          <p className="mt-1 text-xs font-[family-name:var(--font-label)] text-[var(--color-ink-faint)]">
            {site.crp}
          </p>
        </div>

        <div>
          <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
            Navegação
          </span>
          <ul className="mt-3 space-y-2">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.1em] text-[var(--color-ink-faint)]">
            Legal
          </span>
          <ul className="mt-3 space-y-2">
            <li>
              <Link href="/politica-de-privacidade" className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
                Política de Privacidade
              </Link>
            </li>
            <li>
              <Link href="/politica-de-cookies" className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-accent)]">
                Política de Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-page py-6 border-t border-[var(--color-line)] flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <p className="text-xs text-[var(--color-ink-faint)]">
          © {new Date().getFullYear()} {site.name}. Este site não substitui avaliação ou emergência psicológica — em crise, procure o CVV (188) ou o serviço de urgência mais próximo.
        </p>
      </div>
    </footer>
  );
}
