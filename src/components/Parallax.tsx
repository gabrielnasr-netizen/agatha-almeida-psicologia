"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Move o conteúdo verticalmente numa fração da velocidade do scroll —
 * a mesma lógica de profundidade em camadas do landonorris.com, mas com
 * deslocamento pequeno (poucos %) para não competir com a leitura.
 * Desativado automaticamente com prefers-reduced-motion.
 */
export default function Parallax({
  children,
  offset = 40,
  className = "",
}: {
  children: ReactNode;
  offset?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={reduce ? undefined : { y }}>{children}</motion.div>
    </div>
  );
}
