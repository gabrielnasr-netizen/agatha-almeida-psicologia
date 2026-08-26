import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";

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
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
  }));
}
