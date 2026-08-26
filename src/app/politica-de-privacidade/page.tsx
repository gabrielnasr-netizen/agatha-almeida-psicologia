import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site-content";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Como este site trata os dados pessoais de quem o visita.",
};

export default function PrivacidadePage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Política de Privacidade" />
      <section>
        <div className="container-page py-14 sm:py-20 prose-copy text-[var(--color-ink-soft)]">
          <p>
            Esta política explica, em linguagem simples, quais dados este
            site coleta, para quê, e quais direitos você tem sobre eles, em
            conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº
            13.709/2018).
          </p>

          <h2 className="mt-8 text-xl text-[var(--color-ink)]">
            O que coletamos
          </h2>
          <p>
            Quando você usa o formulário de contato, coletamos apenas nome,
            um contato (e-mail ou telefone) e a mensagem que você escreve.
            Não pedimos, e pedimos que você evite incluir voluntariamente,
            detalhes clínicos ou de saúde na mensagem — o primeiro contato
            não precisa disso.
          </p>
          <p>
            O botão de WhatsApp abre uma conversa diretamente no aplicativo:
            o conteúdo dessa conversa fica no WhatsApp, não neste site.
          </p>

          <h2 className="mt-8 text-xl text-[var(--color-ink)]">
            Onde os dados ficam armazenados
          </h2>
          <p>
            Os dados enviados pelo formulário são armazenados em um banco de
            dados no <strong>Supabase</strong>, empresa que atua como operadora
            de dados nos termos da LGPD — ou seja, guarda a informação em
            nosso nome, sob nossas instruções, e não a utiliza para
            finalidade própria.
          </p>

          <h2 className="mt-8 text-xl text-[var(--color-ink)]">
            Base legal e finalidade
          </h2>
          <p>
            Tratamos os dados do formulário com base no seu consentimento
            explícito (marcado no próprio formulário), com a única
            finalidade de responder ao seu contato. Não usamos esses dados
            para nenhuma outra finalidade, nem os compartilhamos com
            terceiros para fins comerciais.
          </p>

          <h2 className="mt-8 text-xl text-[var(--color-ink)]">
            Retenção
          </h2>
          <p>
            Dados de contato são mantidos pelo tempo necessário para a
            comunicação e, na ausência de vínculo terapêutico, excluídos em
            até 12 meses.
          </p>

          <h2 className="mt-8 text-xl text-[var(--color-ink)]">
            Seus direitos
          </h2>
          <p>
            Você pode solicitar a qualquer momento acesso, correção ou
            exclusão dos seus dados, entrando em contato com{" "}
            {site.name} pelos canais informados na página de{" "}
            <a href="/contato" className="text-[var(--color-accent)] underline underline-offset-2">
              Contato
            </a>
            .
          </p>

          <h2 className="mt-8 text-xl text-[var(--color-ink)]">Cookies</h2>
          <p>
            Veja detalhes na{" "}
            <a
              href="/politica-de-cookies"
              className="text-[var(--color-accent)] underline underline-offset-2"
            >
              Política de Cookies
            </a>
            .
          </p>

          <p className="mt-10 text-sm text-[var(--color-ink-faint)]">
            Última atualização: documento em fase de protótipo — revisar
            antes da publicação final.
          </p>
        </div>
      </section>
    </>
  );
}
