import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { address } from "@/lib/site";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "Ministerio Cristiano Glorificate",
    template: "%s | Gloríficate",
  },
  description:
    "Iglesia cristiana en Panamá. Culto los viernes, ministerios de alabanza, danza y Pequeños Leones. Academia Hisao Lee.",
  keywords: [
    "Glorificate",
    "iglesia Panamá",
    "ministerio cristiano",
    "alabanza",
    "danza cristiana",
    "ministerio infantil",
  ],
  openGraph: {
    title: "Ministerio Cristiano Glorificate",
    description:
      "Iglesia cristiana en Panamá. Un lugar para glorificar a Dios y encontrar familia.",
    locale: "es_PA",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Church",
    name: "Ministerio Cristiano Glorificate",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Panamá",
      addressCountry: "PA",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 9.0504532,
      longitude: -79.514304,
    },
    url: address.mapsHref,
    areaServed: "Panamá",
  };

  return (
    <html
      lang="es-PA"
      className={`${outfit.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
