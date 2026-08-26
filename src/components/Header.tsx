"use client";

import Link from "next/link";
import { useState } from "react";
import { site } from "@/lib/site-content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--color-line)] bg-[var(--color-paper)]/90 backdrop-blur-sm">
      <div className="container-page flex items-center justify-between py-4">
        <Link href="/" className="flex items-baseline gap-2" onClick={() => setOpen(false)}>
          <span className="font-[family-name:var(--font-display)] text-xl italic text-[var(--color-accent)]">
            A · A
          </span>
          <span className="font-[family-name:var(--font-display)] text-base text-[var(--color-ink)]">
            {site.name}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-accent)] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="md:hidden text-sm text-[var(--color-ink)] border border-[var(--color-line-strong)] rounded-full px-4 py-2"
          aria-expanded={open}
          aria-controls="mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open && (
        <nav id="mobile-nav" className="md:hidden border-t border-[var(--color-line)] bg-[var(--color-paper)]">
          <ul className="container-page py-3 flex flex-col gap-1">
            {site.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block py-2.5 text-[var(--color-ink)]"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
