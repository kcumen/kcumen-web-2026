import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://kcumen.co"),
  title: {
    default: "Kcumen | Desarrollo web, software a medida e inteligencia artificial",
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
        url: "/favicon-kcumen.png",
        width: 512,
        height: 512,
        alt: "Kcumen - Desarrollo web, software e inteligencia artificial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kcumen | Desarrollo web, software a medida e inteligencia artificial",
    description:
      "Plataformas digitales, software a medida, apps y soluciones con IA para acelerar la transformación digital.",
    images: ["/favicon-kcumen.png"],
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
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
