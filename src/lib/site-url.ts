// Domínio real ainda não existe (agathaalmeida.com.br é só um destino
// planejado — ver Discovery). Enquanto isso, usa o domínio de produção que a
// própria Vercel expõe automaticamente, com fallback pro deploy local.
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : "http://localhost:3000");
