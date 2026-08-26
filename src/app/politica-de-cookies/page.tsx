import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Como este site usa cookies.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de Cookies" />
      <section>
        <div className="container-page py-14 sm:py-20 prose-copy text-[var(--color-ink-soft)]">
          <p>
            Este site, na versão atual de protótipo, não usa cookies de
            análise ou rastreamento. Nenhum script de terceiros (como Google
            Analytics) está ativo.
          </p>
          <p>
            Se, mais adiante, adicionarmos ferramentas de analytics para
            entender o uso do site (por exemplo, para medir cliques no botão
            de WhatsApp ou aberturas da página de agenda), elas só serão
            carregadas depois do seu consentimento explícito, por meio de um
            aviso de cookies com opção real de recusar — nunca ativadas por
            padrão.
          </p>
          <p>
            Cookies estritamente necessários ao funcionamento técnico do site
            (como os usados pela hospedagem) podem ser usados independente de
            consentimento, por não envolverem coleta de dados pessoais para
            fins de análise ou publicidade.
          </p>
        </div>
      </section>
    </>
  );
}
