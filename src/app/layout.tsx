import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kcumen - Expertos en Plataformas Digitales y Soluciones con IA",
  description: "Transformamos tu visión en realidad digital con tecnología de vanguardia. Desarrollo web, apps mobile, IA y soluciones cloud.",
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
