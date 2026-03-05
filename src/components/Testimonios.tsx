"use client";

import { Quote } from "lucide-react";

const testimonios = [
  {
    nombre: "Juan Pérez",
    cargo: "CEO, Empresa XYZ",
    empresa: "XYZ Corp",
    texto: "Kcumen transformó nuestra visión en una plataforma que superó nuestras expectativas. El equipo demostró profesionalismo y expertise técnico excepcional.",
  },
  {
    nombre: "María García",
    cargo: "CTO, StartupTech",
    empresa: "StartupTech",
    texto: "Excelente trabajo. Entregaron en tiempo récord con una calidad de código outstanding. Repetiría sin duda.",
  },
];

const clientes = ["Google", "Microsoft", "Amazon", "Meta", "Apple"];

export default function Testimonios() {
  return (
    <section className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F0F23] via-[#1A1A2E] to-[#0F0F23]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
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
                "{testimonio.texto}"
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

        {/* Client Logos */}
        <div className="text-center">
          <p className="text-[#94A3B8] mb-6">Empresas que confían en nosotros</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {clientes.map((cliente, index) => (
              <div
                key={index}
                className="text-2xl font-bold text-[#7C3AED]/50 hover:text-[#A78BFA] transition-colors cursor-pointer"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {cliente}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
