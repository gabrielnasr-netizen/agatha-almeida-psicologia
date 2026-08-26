"use client";

import { useActionState } from "react";
import { useFormStatus } from "react-dom";
import Link from "next/link";
import { submitContactForm, type ContactFormState } from "@/app/contato/actions";

const initialState: ContactFormState = { status: "idle" };

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-paper)] transition-colors hover:bg-[var(--color-accent)] disabled:opacity-60"
    >
      {pending ? "Enviando…" : "Enviar mensagem"}
    </button>
  );
}

export default function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, initialState);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-[var(--color-accent)] bg-[var(--color-paper-deep)] p-6 text-sm text-[var(--color-ink-soft)]">
        <p className="font-medium text-[var(--color-ink)]">Mensagem enviada.</p>
        <p className="mt-2">
          Obrigada por escrever. A Agatha costuma responder em breve — se for
          urgente, use o WhatsApp.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="space-y-5">
      {(state.status === "error" || state.status === "not_configured") && (
        <div className="rounded-xl border border-[var(--color-line-strong)] bg-[var(--color-paper-deep)] p-4 text-sm text-[var(--color-ink-soft)]">
          {state.message}
        </div>
      )}

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

      <SubmitButton />
    </form>
  );
}
