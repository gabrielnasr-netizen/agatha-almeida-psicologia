import type { Metadata } from "next";
import type { CSSProperties } from "react";
import HeroRevealDemo from "@/components/HeroRevealDemo";
import MeditationMotif from "@/components/motifs/MeditationMotif";
import BirdMotif from "@/components/motifs/BirdMotif";
import RippleMotif from "@/components/motifs/RippleMotif";

export const metadata: Metadata = {
  title: "Direção visual — exemplo",
  robots: { index: false, follow: false },
};

const palette = [
  {
    name: "Papel",
    hex: "#F7F0E6",
    role: "Fundo base",
    why: "Bege quente, não branco frio — primeira sensação de acolhimento antes de qualquer texto.",
  },
  {
    name: "Papel profundo",
    hex: "#ECDFCD",
    role: "Fundo de seção",
    why: "Mesmo tom, um degrau mais escuro — cria variação sem sair da família.",
  },
  {
    name: "Tinta",
    hex: "#3A2C22",
    role: "Texto principal",
    why: "Marrom quase preto, mais macio que preto puro — reforça estabilidade (pesquisa: tons terrosos = segurança).",
  },
  {
    name: "Terracota",
    hex: "#A4614F",
    role: "Acento principal",
    why: "A cor que já é reconhecida no Instagram da Agatha — herda a identidade que ela já construiu.",
  },
  {
    name: "Terracota profunda",
    hex: "#7C4636",
    role: "Hover, ênfase",
    why: "Mesmo matiz, mais saturado — nunca uma cor nova, só mais intensidade.",
  },
  {
    name: "Calma",
    hex: "#3F5D57",
    role: "Único acento frio",
    why: "Verde-azulado profundo — pesquisa aponta tons frios para desacelerar o ritmo. Usado pouco, de propósito.",
  },
];

export default function DirecaoVisualPage() {
  return (
    <div
      style={
        {
          "--p-paper": "#f7f0e6",
          "--p-paper-deep": "#ecdfcd",
          "--p-panel": "#fdf9f1",
          "--p-ink": "#3a2c22",
          "--p-ink-soft": "#6c5c4c",
          "--p-ink-faint": "#9c8b78",
          "--p-terracotta": "#a4614f",
          "--p-terracotta-deep": "#7c4636",
          "--p-terracotta-soft": "#cf9a86",
          "--p-calm": "#3f5d57",
          "--p-calm-soft": "#7fa39a",
          "--p-line": "rgba(58,44,34,0.14)",
        } as CSSProperties
      }
      className="bg-[var(--p-paper)] text-[var(--p-ink)]"
    >
      {/* Aviso */}
      <div className="border-b border-[var(--p-line)] bg-[var(--p-terracotta)] text-[var(--p-paper)] text-center py-2 text-sm">
        Exemplo isolado — nada aqui está no site publicado ainda
      </div>

      {/* Hero da página */}
      <div className="container-page py-14 sm:py-20">
        <span className="font-[family-name:var(--font-label)] text-xs uppercase tracking-[0.14em] text-[var(--p-terracotta)]">
          Direção visual — proposta
        </span>
        <h1 className="mt-3 text-3xl sm:text-4xl max-w-2xl">
          Paleta quase monocromática + patterns de linha + hero que se revela
        </h1>
        <p className="prose-copy mt-4 text-[var(--p-ink-soft)]">
          Três respostas ao feedback: paleta mais fechada (uma família
          terrosa + um único acento frio), motivos em linha contínua como
          textura discreta, e um hero que revela mais sobre a Agatha
          conforme você rola a tela — sem travar o scroll.
        </p>
      </div>

      {/* Paleta */}
      <section className="border-y border-[var(--p-line)] bg-[var(--p-panel)]">
        <div className="container-page py-14 sm:py-16">
          <h2 className="text-2xl mb-2">Paleta</h2>
          <p className="text-sm text-[var(--p-ink-soft)] max-w-xl mb-8">
            Baseada em pesquisa de psicologia das cores: tons terrosos
            transmitem estabilidade e acolhimento; um único tom frio
            desacelera o ritmo sem quebrar a unidade.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-5">
            {palette.map((c) => (
              <div key={c.hex}>
                <div
                  className="h-24 rounded-xl border border-[var(--p-line)]"
                  style={{ background: c.hex }}
                />
                <p className="mt-2 text-sm font-medium">{c.name}</p>
                <p className="font-[family-name:var(--font-label)] text-xs text-[var(--p-ink-faint)]">
                  {c.hex} · {c.role}
                </p>
                <p className="mt-1 text-xs text-[var(--p-ink-soft)] leading-snug">{c.why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hero reveal demo */}
      <section className="border-b border-[var(--p-line)]">
        <HeroRevealDemo />
      </section>

      {/* Line-art motifs */}
      <section className="relative overflow-hidden">
        <RippleMotif className="pointer-events-none absolute -right-10 -top-10 h-64 w-64 text-[var(--p-calm-soft)] opacity-40" />
        <BirdMotif className="pointer-events-none absolute left-4 top-24 h-10 w-24 text-[var(--p-terracotta-soft)] opacity-60" />

        <div className="container-page py-16 sm:py-24 relative">
          <h2 className="text-2xl mb-2">Patterns em linha contínua</h2>
          <p className="text-sm text-[var(--p-ink-soft)] max-w-xl mb-10">
            Traço único, discreto, nunca decorativo demais — usado como
            textura de fundo (como os pássaros acima) ou como pequeno ícone
            ao lado de texto (abaixo).
          </p>

          <div className="grid grid-cols-3 gap-8 max-w-md">
            <div className="flex flex-col items-center gap-2">
              <MeditationMotif className="h-20 w-20 text-[var(--p-terracotta)]" />
              <span className="text-xs text-[var(--p-ink-faint)]">quietude</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <BirdMotif className="h-14 w-20 text-[var(--p-calm)]" />
              <span className="text-xs text-[var(--p-ink-faint)]">leveza</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <RippleMotif className="h-20 w-20 text-[var(--p-terracotta-deep)]" />
              <span className="text-xs text-[var(--p-ink-faint)]">efeito, cuidado</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
