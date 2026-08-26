import type { MetadataRoute } from "next";

const routes = [
  "",
  "/sobre",
  "/tcc",
  "/atendimento",
  "/agenda",
  "/faq",
  "/contato",
  "/politica-de-privacidade",
  "/politica-de-cookies",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://agathaalmeida.com.br";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}
