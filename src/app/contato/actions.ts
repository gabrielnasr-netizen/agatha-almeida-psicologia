"use server";

import { getSupabaseServerClient } from "@/lib/supabase";

export type ContactFormState = {
  status: "idle" | "success" | "error" | "not_configured";
  message?: string;
};

export async function submitContactForm(
  _prev: ContactFormState,
  formData: FormData
): Promise<ContactFormState> {
  const nome = String(formData.get("nome") ?? "").trim();
  const contato = String(formData.get("contato") ?? "").trim();
  const mensagem = String(formData.get("mensagem") ?? "").trim();
  const consentimento = formData.get("consentimento");

  if (!nome || !contato || !mensagem || !consentimento) {
    return { status: "error", message: "Preencha todos os campos e confirme o consentimento." };
  }

  const supabase = getSupabaseServerClient();
  if (!supabase) {
    return {
      status: "not_configured",
      message:
        "O envio ainda não está conectado a um banco de dados (faltam as variáveis SUPABASE_URL e SUPABASE_ANON_KEY). Use o WhatsApp por enquanto.",
    };
  }

  const { error } = await supabase
    .from("contact_messages")
    .insert({ nome, contato, mensagem });

  if (error) {
    return {
      status: "error",
      message: "Não consegui salvar sua mensagem agora. Tente novamente ou use o WhatsApp.",
    };
  }

  return { status: "success" };
}
