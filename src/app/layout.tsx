import type { Metadata, Viewport } from "next";
import { Inter, Sora } from "next/font/google";
import { BRAND, OFFER } from "@/config/site";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  weight: ["600", "700", "800"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

const DESCRIPTION =
  `O aplicativo que treina o dono de pequeno negócio a saber o que responder, ` +
  `como conduzir a conversa e como voltar quando o cliente some. Método guiado ` +
  `de 30 dias, com aulas práticas, áudios, quizzes e atividades. ` +
  `${OFFER.deliverable} por ${OFFER.priceLabel}.`;

export const metadata: Metadata = {
  metadataBase: new URL(BRAND.siteUrl),
  title: {
    default: `${BRAND.name} — treino prático de vendas pelo WhatsApp`,
    template: `%s — ${BRAND.name}`,
  },
  description: DESCRIPTION,
  applicationName: BRAND.name,
  authors: [{ name: BRAND.name }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: BRAND.name,
    title: "Você não tem falta de cliente. Você tem conversa parada.",
    description: DESCRIPTION,
    url: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: "Você não tem falta de cliente. Você tem conversa parada.",
    description: DESCRIPTION,
  },
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = {
  themeColor: "#04100b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${sora.variable} ${inter.variable}`}>
      <body className="antialiased">
        {/* Sem JavaScript o conteúdo precisa aparecer mesmo assim. */}
        <noscript>
          <style>{`.reveal{opacity:1 !important;transform:none !important}`}</style>
        </noscript>
        {children}
      </body>
    </html>
  );
}
