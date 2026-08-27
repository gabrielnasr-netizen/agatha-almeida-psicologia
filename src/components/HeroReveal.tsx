"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import BirdMotif from "@/components/motifs/BirdMotif";
import { site } from "@/lib/site-content";

/**
 * Entrada de impacto: headline em caixa alta cede lugar, ao rolar, a uma
 * apresentação curta + os CTAs principais — sem esconder o WhatsApp/agenda
 * atrás do scroll para sempre (eles aparecem assim que a revelação termina).
 * position:sticky, sem scroll-jacking; funciona igual em mobile.
 */
export default function HeroReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setRevealed(v > 0.4);
  });

  return (
    <div ref={ref} className="relative h-[200vh] border-b border-[var(--color-line)]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-6">
        <BirdMotif className="pointer-events-none absolute left-[8%] top-[22%] h-10 w-24 text-[var(--color-accent-soft)] opacity-50" />
        <BirdMotif className="pointer-events-none absolute right-[10%] bottom-[26%] h-8 w-20 text-[var(--color-calm-soft)] opacity-40 -scale-x-100" />

        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.div
              key="headline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute text-center"
            >
              <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--color-accent)]">
                TCC · Ansiedade · Autoestima
              </span>
              <h1 className="mt-4 font-[family-name:var(--font-display)] uppercase tracking-[0.01em] leading-[0.96] text-[clamp(2.4rem,8vw,5.6rem)] text-[var(--color-ink)]">
                Um espaço para
                <br />
                se ouvir com <em className="italic normal-case text-[var(--color-accent)]">calma</em>
              </h1>
              <p className="mt-6 text-xs uppercase tracking-[0.14em] text-[var(--color-ink-faint)]">
                continue rolando ↓
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute max-w-xl text-center px-4"
            >
              <p className="font-[family-name:var(--font-display)] italic text-2xl sm:text-3xl leading-snug text-[var(--color-ink)]">
                Sou {site.name}, {site.role.toLowerCase()} com abordagem em{" "}
                {site.approach}. Atendo com cuidado quem busca entender
                melhor a ansiedade, fortalecer a autoestima e viver com mais
                leveza.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                <Link
                  href="/agenda"
                  className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
                >
                  Ver disponibilidade
                </Link>
                <WhatsAppCTA
                  variant="outline"
                  message="Olá, Agatha. Conheci seu trabalho e gostaria de saber mais sobre o atendimento."
                >
                  Falar no WhatsApp
                </WhatsAppCTA>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
