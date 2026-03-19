import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";

export const metadata: Metadata = {
  metadataBase: new URL("https://kcumen.co"),
  title: {
    default: "Kcumen | Desarrollo Web, Software a Medida e Inteligencia Artificial",
    template: "%s | Kcumen",
  },
  description:
    "Kcumen diseña y desarrolla plataformas digitales, software a medida, productos SaaS y soluciones con inteligencia artificial para empresas, instituciones y proyectos de transformación digital.",
  keywords: [
    "desarrollo web",
    "software a medida",
    "inteligencia artificial",
    "transformación digital",
    "desarrollo de plataformas digitales",
    "apps móviles",
    "consultoría tecnológica",
    "automatización con IA",
    "soluciones cloud",
    "Kcumen",
  ],
  authors: [{ name: "Kcumen", url: "https://kcumen.co" }],
  creator: "Kcumen",
  publisher: "Kcumen",
  category: "technology",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_CO",
    url: "https://kcumen.co",
    siteName: "Kcumen",
    title: "Kcumen | Desarrollo web, software a medida e inteligencia artificial",
    description:
      "Creamos plataformas digitales, productos tecnológicos y soluciones con IA para impulsar el crecimiento de empresas e instituciones.",
    images: [
      {
        url: "/kcumen_social.png",
        width: 1200,
        height: 630,
        alt: "Kcumen - Desarrollo web, software e inteligencia artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kcumen | Desarrollo web, software a medida e inteligencia artificial",
    description:
      "Plataformas digitales, software a medida, apps y soluciones con IA para acelerar la transformación digital.",
    images: ["/kcumen_social.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon-kcumen.png",
    apple: "/favicon-kcumen.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        {/* Cloudflare Turnstile — loaded once for the whole app */}
        <Script
          src="https://challenges.cloudflare.com/turnstile/v0/api.js"
          strategy="lazyOnload"
        />
      </head>
      <body className="antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
