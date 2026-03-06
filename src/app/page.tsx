import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Soluciones from "@/components/Soluciones";
import PorQueElegirnos from "@/components/PorQueElegirnos";
import Proyectos from "@/components/Proyectos";
import Testimonios from "@/components/Testimonios";
import Proceso from "@/components/Proceso";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agencia de desarrollo web, software e inteligencia artificial",
  description:
    "En Kcumen desarrollamos plataformas digitales, software a medida, productos SaaS, apps y soluciones con inteligencia artificial para empresas e instituciones.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kcumen | Agencia de desarrollo web, software e inteligencia artificial",
    description:
      "Soluciones de desarrollo web, software a medida, productos digitales e IA para organizaciones que quieren crecer con tecnología.",
    url: "https://kcumen.co",
  },
  twitter: {
    title: "Kcumen | Agencia de desarrollo web, software e inteligencia artificial",
    description:
      "Desarrollo web, software, productos digitales e inteligencia artificial para impulsar la transformación digital.",
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Kcumen",
  url: "https://kcumen.co",
  logo: "https://kcumen.co/favicon-kcumen.png",
  email: "hola@kcumen.co",
  telephone: "+57 322 673 7035",
  sameAs: [],
  contactPoint: [
    {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hola@kcumen.co",
      telephone: "+57 322 673 7035",
      availableLanguage: ["Spanish"],
    },
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Kcumen",
  url: "https://kcumen.co",
  inLanguage: "es",
  description:
    "Sitio oficial de Kcumen, expertos en plataformas digitales, software a medida y soluciones con inteligencia artificial.",
};

const servicesJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Servicios de Kcumen",
  itemListElement: [
    {
      "@type": "Service",
      position: 1,
      name: "Desarrollo web y plataformas digitales",
      provider: {
        "@type": "Organization",
        name: "Kcumen",
      },
    },
    {
      "@type": "Service",
      position: 2,
      name: "Software a medida",
      provider: {
        "@type": "Organization",
        name: "Kcumen",
      },
    },
    {
      "@type": "Service",
      position: 3,
      name: "Soluciones con inteligencia artificial",
      provider: {
        "@type": "Organization",
        name: "Kcumen",
      },
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesJsonLd) }}
      />
      <main className="min-h-screen">
        <Navbar />
        <Hero />
        <Soluciones />
        <PorQueElegirnos />
        <Proyectos />
        <Testimonios />
        <Proceso />
        <Contacto />
        <Footer />
      </main>
    </>
  );
}
