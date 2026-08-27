"use client";

/**
 * Elemento 3D/orgânico discreto — versão leve em SVG (sem WebGL) para não
 * pesar o carregamento. Representa "fios que se organizam" (Discovery §14):
 * linhas soltas que lentamente se aproximam de um padrão mais ordenado.
 * Respeita prefers-reduced-motion via CSS global (animation-duration curta).
 */
export default function OrganicMotif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 400"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g fill="none" strokeLinecap="round">
        <path
          d="M40,120 C120,40 200,200 280,90 C330,30 370,80 380,140"
          stroke="var(--color-accent-soft)"
          strokeWidth="1.4"
          opacity="0.55"
          className="motif-line motif-line-1"
        />
        <path
          d="M30,220 C110,260 190,140 270,240 C320,300 360,240 385,260"
          stroke="var(--color-sage-soft)"
          strokeWidth="1.4"
          opacity="0.5"
          className="motif-line motif-line-2"
        />
        <path
          d="M60,320 C140,280 210,360 300,300 C340,275 360,300 380,320"
          stroke="var(--color-accent-2)"
          strokeWidth="1.2"
          opacity="0.45"
          className="motif-line motif-line-3"
        />
        <circle cx="200" cy="200" r="3" fill="var(--color-accent)" opacity="0.6" />
      </g>
      <style>{`
        .motif-line {
          stroke-dasharray: 600;
          stroke-dashoffset: 0;
          transform-origin: center;
          animation: motif-breathe 14s ease-in-out infinite;
        }
        .motif-line-2 { animation-duration: 17s; animation-delay: -4s; }
        .motif-line-3 { animation-duration: 20s; animation-delay: -9s; }
        @keyframes motif-breathe {
          0% { transform: scale(1) rotate(0deg) translate(0, 0); }
          50% { transform: scale(1.04) rotate(1.2deg) translate(-6px, 4px); }
          100% { transform: scale(1) rotate(0deg) translate(0, 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .motif-line { animation: none; }
        }
      `}</style>
    </svg>
  );
}
