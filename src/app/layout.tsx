import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://aurea.dataminddigital.com.br"),
  title: {
    default: "AUREA Residences | Arquitetura e residências singulares",
    template: "%s | AUREA Residences",
  },
  description:
    "Explore uma coleção conceitual de residências com arquitetura singular, paisagens marcantes e diferentes maneiras de viver. Projeto demonstrativo de portfólio.",
  applicationName: "AUREA Residences",
  keywords: [
    "AUREA Residences",
    "arquitetura residencial",
    "residências de alto padrão",
    "projeto conceitual",
    "portfólio de desenvolvimento web",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "AUREA Residences",
    title: "AUREA Residences | Arquitetura e residências singulares",
    description:
      "Uma coleção conceitual de residências extraordinárias. Projeto demonstrativo de portfólio.",
  },
  twitter: {
    card: "summary",
    title: "AUREA Residences | Arquitetura e residências singulares",
    description:
      "Uma coleção conceitual de residências extraordinárias. Projeto demonstrativo de portfólio.",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
