import { createClient } from "@supabase/supabase-js";

// Cliente server-only: as chaves nunca chegam ao bundle do navegador porque
// só é importado dentro de Server Actions ("use server"). Se as variáveis
// de ambiente não estiverem configuradas ainda, retorna null — quem chamar
// precisa tratar esse caso (ver src/app/contato/actions.ts).
export function getSupabaseServerClient() {
  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_ANON_KEY;

  if (!url || !key) return null;

  return createClient(url, key, {
    auth: { persistSession: false },
  });
}
