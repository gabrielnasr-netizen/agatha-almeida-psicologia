import { site } from "@/lib/site-content";

export default function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: `${site.name} — ${site.role}`,
    description: `Atendimento psicológico com abordagem em ${site.approach}.`,
    areaServed: "BR",
    // sameAs: ["https://www.instagram.com/psi_agathaa/"], // confirmar URL final antes de publicar
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
