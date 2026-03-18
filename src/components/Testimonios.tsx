"use client";

import { Quote, Building2, Landmark, Cpu, Globe, Leaf, Handshake, FlaskConical, GraduationCap, ShoppingBag } from "lucide-react";

const testimonios = [
  {
    nombre: "Margarita Santos",
    cargo: "Coordinadora, FAO Regional",
    empresa: "FAO Colombia",
    texto: "Kcumen transformó nuestra visión en una plataforma que superó nuestras expectativas. Cuentan con un gran equipo, muy profesional y con un conocimiento técnico excepcional.",
  },
  {
    nombre: "César Echeverry",
    cargo: "CEO",
    empresa: "Tecnicafé",
    texto: "Superaron nuestras expectativas. Lograron crear una plataforma inmersiva que conectó cientos de personas de todo el mundo. Los recomiendo sin duda.",
  },
];

// ─── Real client / partner logos (icon + name in white) ──────────────────────
const LOGO_BRANDS = [
  { name: 'Zasca Cauca', icon: <Building2 className="h-5 w-5 text-white" /> },
  { name: 'Cámara de Comercio del Cauca', icon: <Landmark className="h-5 w-5 text-white" /> },
  { name: 'Cámara de Comercio de Bogotá', icon: <Landmark className="h-5 w-5 text-white" /> },
  { name: 'Intel', icon: <Cpu className="h-5 w-5 text-white" /> },
  { name: 'Programa de las Naciones Unidas', icon: <Globe className="h-5 w-5 text-white" /> },
  { name: 'Tecnicafé', icon: <Leaf className="h-5 w-5 text-white" /> },
  { name: 'USAID', icon: <Handshake className="h-5 w-5 text-white" /> },
  { name: 'Naciones Unidas Colombia', icon: <Globe className="h-5 w-5 text-white" /> },
  { name: 'MinTIC Colombia', icon: <Cpu className="h-5 w-5 text-white" /> },
  { name: 'MinCiencias', icon: <FlaskConical className="h-5 w-5 text-white" /> },
  { name: 'SENA', icon: <GraduationCap className="h-5 w-5 text-white" /> },
  { name: 'UNAD', icon: <GraduationCap className="h-5 w-5 text-white" /> },
  { name: 'MinAgricultura', icon: <Leaf className="h-5 w-5 text-white" /> },
  { name: 'Federación de Cafeteros de Colombia', icon: <ShoppingBag className="h-5 w-5 text-white" /> },
  { name: 'FAO', icon: <Globe className="h-5 w-5 text-white" /> },
];

export default function Testimonios() {
  return (
    <section aria-labelledby="testimonios-title" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F0F23] via-[#1A1A2E] to-[#0F0F23]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="testimonios-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {testimonios.map((testimonio, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl"
            >
              <Quote className="w-10 h-10 text-[#F43F5E] mb-4" />
              <p className="text-[#E2E8F0] text-lg leading-relaxed mb-6">
                &ldquo;{testimonio.texto}&rdquo;
              </p>
              <div className="border-t border-[#7C3AED]/20 pt-4">
                <p className="font-semibold text-white">
                  {testimonio.nombre}
                </p>
                <p className="text-[#94A3B8]">
                  {testimonio.cargo}, {testimonio.empresa}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Client Logos with Icons */}
        <div className="text-center">
          <p className="text-[#94A3B8] mb-6">Empresas que confían en nosotros</p>
          <div className="relative overflow-hidden py-4 marquee-fade">
            <div className="whitespace-nowrap animate-marquee-right">
              {[...LOGO_BRANDS, ...LOGO_BRANDS].map((brand, index) => (
                <span
                  key={`${brand.name}-${index}`}
                  className="inline-flex items-center gap-2 mx-6 md:mx-8 text-base md:text-lg font-medium text-white/70 hover:text-white transition-colors"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {brand.icon}
                  <span>{brand.name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
