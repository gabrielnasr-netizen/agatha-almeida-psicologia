"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sent">("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // Protótipo: ainda não há backend/e-mail configurado para receber o
    // formulário. Quando definirmos o destino (e-mail da Agatha, ou um
    // serviço como Resend), este handler passa a enviar de verdade.
    setStatus("sent");
  }

  if (status === "sent") {
    return (
      <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-paper-deep)] p-6 text-sm text-[var(--color-ink-soft)]">
        <p className="font-medium text-[var(--color-ink)]">
          Formulário de demonstração — ainda não conectado.
        </p>
        <p className="mt-2">
          Neste protótipo o envio ainda não chega a lugar nenhum de verdade.
          Assim que definirmos onde as mensagens devem chegar (e-mail da
          Agatha ou outro serviço), este formulário passa a funcionar de
          fato. Por enquanto, use o WhatsApp para contato real.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label htmlFor="nome" className="block text-sm font-medium text-[var(--color-ink)]">
          Nome
        </label>
        <input
          id="nome"
          name="nome"
          type="text"
          required
          autoComplete="name"
          className="mt-1.5 w-full rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-panel)] px-4 py-2.5 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="contato" className="block text-sm font-medium text-[var(--color-ink)]">
          E-mail ou telefone
        </label>
        <input
          id="contato"
          name="contato"
          type="text"
          required
          className="mt-1.5 w-full rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-panel)] px-4 py-2.5 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <div>
        <label htmlFor="mensagem" className="block text-sm font-medium text-[var(--color-ink)]">
          Mensagem
        </label>
        <textarea
          id="mensagem"
          name="mensagem"
          rows={4}
          required
          placeholder="Conte brevemente o motivo do contato — não é preciso detalhar nada além do que quiser."
          className="mt-1.5 w-full rounded-lg border border-[var(--color-line-strong)] bg-[var(--color-panel)] px-4 py-2.5 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        />
      </div>

      <div className="flex items-start gap-3">
        <input
          id="consentimento"
          name="consentimento"
          type="checkbox"
          required
          className="mt-1 h-4 w-4 flex-none accent-[var(--color-accent)]"
        />
        <label htmlFor="consentimento" className="text-sm text-[var(--color-ink-soft)]">
          Concordo com o uso dos meus dados para retorno de contato, conforme a{" "}
          <Link href="/politica-de-privacidade" className="text-[var(--color-accent)] underline underline-offset-2">
            Política de Privacidade
          </Link>
          .
        </label>
      </div>

      <button
        type="submit"
        className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)]"
      >
        Enviar mensagem
      </button>
    </form>
  );
}
