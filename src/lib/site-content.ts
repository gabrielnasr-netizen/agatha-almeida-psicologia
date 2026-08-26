// Conteúdo central do site. Tudo marcado "(a confirmar)" depende de validação
// direta com a Agatha antes de publicar — ver seção 29 do documento de Discovery.

export const site = {
  name: "Agatha Almeida",
  role: "Psicóloga", // "Drª" está em uso no site atual mas pendente de confirmação ética — ver Discovery §21/29
  crp: "CRP a confirmar", // nunca publicar um número não confirmado diretamente pela Agatha
  approach: "Terapia Cognitivo-Comportamental (TCC)",
  modality: "Atendimento psicológico", // modalidade (online/presencial) pendente de confirmação — Discovery §03
  whatsappNumber: "5511983335993",
  price: {
    session: "R$ 150",
    duration: "50 min",
  },
  nav: [
    { href: "/sobre", label: "Sobre" },
    { href: "/tcc", label: "Como funciona a TCC" },
    { href: "/atendimento", label: "Atendimento" },
    { href: "/agenda", label: "Agenda" },
    { href: "/faq", label: "Perguntas frequentes" },
    { href: "/contato", label: "Contato" },
  ],
};

export function whatsappLink(message: string) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${site.whatsappNumber}?text=${encoded}`;
}

export const faqs = [
  {
    q: "Terapia online funciona mesmo?",
    a: "Sim. Estudos e a prática clínica mostram que o atendimento online, quando feito com a mesma consistência e ética do presencial, tem eficácia equivalente para a maior parte das demandas. O que muda é o formato — não o cuidado.",
  },
  {
    q: "Como é a primeira sessão?",
    a: "A primeira sessão é um espaço para nos conhecermos: você conta o que te trouxe até aqui, no seu tempo, e eu explico como costumo trabalhar. Não é preciso chegar com um diagnóstico pronto nem saber exatamente o que dizer.",
  },
  {
    q: "Quanto tempo dura o processo terapêutico?",
    a: "Varia de pessoa para pessoa e depende do que motivou a busca por terapia. Na TCC, é comum revisarmos o andamento periodicamente e ajustarmos o foco do trabalho junto com você.",
  },
  {
    q: "Qual a diferença entre TCC e outras abordagens?",
    a: "A TCC trabalha a relação entre pensamentos, emoções e comportamentos, com técnicas práticas e objetivos definidos em conjunto. Outras abordagens partem de outros referenciais teóricos — a escolha da abordagem certa depende do que faz sentido para você.",
  },
  {
    q: "Atende convênio?",
    a: "(a confirmar com a Agatha antes de publicar)",
  },
  {
    q: "Qual o valor da sessão?",
    a: `${site.price.session} por sessão de ${site.price.duration}.`,
  },
];
