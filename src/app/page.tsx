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
  title: "Kcumen - Expertos en Plataformas Digitales y Soluciones con IA",
  description: "Transformamos tu visión en realidad digital con tecnología de vanguardia. Desarrollo web, apps mobile, IA y soluciones cloud.",
};

export default function Home() {
  return (
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
  );
}
