"use client";

import { useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";

/**
 * "A tela sobe e revela mais" — o headline em caixa alta cede lugar a um
 * parágrafo curto sobre a Agatha conforme o visitante rola, sem travar o
 * scroll (é só position:sticky; nada de preventDefault/scroll-jacking).
 * Funciona igual em mobile e desktop.
 *
 * O crossfade usa um estado discreto (revelado: sim/não) em vez de opacidade
 * contínua ligada ao scroll — testado e é mais confiável: interpolação
 * contínua com platô de valores repetidos ([1,1,0]) mostrou comportamento
 * inconsistente no framer-motion.
 */
export default function HeroRevealDemo() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setRevealed(v > 0.42);
  });

  return (
    <div ref={ref} className="relative h-[220vh]">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center px-6">
        <AnimatePresence mode="wait">
          {!revealed ? (
            <motion.h2
              key="headline"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute text-center font-[family-name:var(--font-display)] uppercase tracking-[0.02em] leading-[0.95] text-[clamp(2.6rem,9vw,7rem)]"
            >
              Espaço para
              <br />
              se ouvir
            </motion.h2>
          ) : (
            <motion.div
              key="bio"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="absolute max-w-xl text-center px-4"
            >
              <p className="font-[family-name:var(--font-display)] italic text-2xl sm:text-3xl leading-snug">
                &ldquo;Sou Agatha Almeida, psicóloga. Trabalho com Terapia
                Cognitivo-Comportamental porque acredito em cuidado que é, ao
                mesmo tempo, acolhedor e prático.&rdquo;
              </p>
              <p className="mt-6 text-sm uppercase tracking-[0.14em] opacity-70">
                continue rolando ↓
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
