import type { Metadata } from "next";
import { fraunces, sourceSans, plexMono } from "./fonts";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { siteUrl } from "@/lib/site-url";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Agatha Almeida | Psicóloga — Terapia Cognitivo-Comportamental",
    template: "%s | Agatha Almeida",
  },
  description:
    "Atendimento psicológico com Agatha Almeida, abordagem cognitivo-comportamental (TCC). Um espaço acolhedor para cuidar da ansiedade, autoestima e relações.",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Agatha Almeida — Psicóloga",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${fraunces.variable} ${sourceSans.variable} ${plexMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
