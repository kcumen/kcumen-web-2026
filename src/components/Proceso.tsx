"use client";

import { Search, Palette, Code, Rocket } from "lucide-react";

const pasos = [
  {
    numero: "1",
    titulo: "DESCUBRIMIENTO",
    descripcion: "Análisis de objetivos y requerimientos del proyecto",
    icon: Search,
  },
  {
    numero: "2",
    titulo: "DISEÑO",
    descripcion: "Wireframes, UI Design y prototipos",
    icon: Palette,
  },
  {
    numero: "3",
    titulo: "DESARROLLO",
    descripcion: "Implementación con mejores prácticas",
    icon: Code,
  },
  {
    numero: "4",
    titulo: "LANZAMIENTO",
    descripcion: "Testing, deployment y soporte continuo",
    icon: Rocket,
  },
];

export default function Proceso() {
  return (
    <section id="proceso" aria-labelledby="proceso-title" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2
            id="proceso-title"
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ¿CÓMO TRABAJAMOS?
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Metodología probada para entregar proyectos de alta calidad
          </p>
        </div>

        {/* Proceso Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pasos.map((paso, index) => (
            <div key={index} className="text-center relative">
              {/* Connector Line (desktop only) */}
              {index < pasos.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-1/2 w-full h-0.5 bg-gradient-to-r from-[#7C3AED] to-[#F43F5E] -z-10" />
              )}
              
              {/* Step Number Circle */}
              <div className="relative inline-flex mb-6">
                <div className="w-24 h-24 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-full flex items-center justify-center border-4 border-[#0F0F23] shadow-lg relative z-10">
                  <paso.icon className="w-10 h-10 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#F43F5E] to-[#7C3AED] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  {paso.numero}
                </div>
              </div>
              
              <h3 
                className="text-lg font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {paso.titulo}
              </h3>
              <p className="text-[#94A3B8]">
                {paso.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
