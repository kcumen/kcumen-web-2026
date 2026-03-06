"use client";

import { Zap, Shield, Target, Gem, Handshake, Rocket } from "lucide-react";

const diferenciadores = [
  {
    icon: Zap,
    title: "Rápido",
    description: "Entregas en tiempo récord sin comprometer calidad. Metodologías ágiles para resultados rápidos.",
  },
  {
    icon: Rocket,
    title: "Estratégico",
    description: "Entendemos en profundidad el mundo digital, Contarás siempre con el mejor acompañamiento.",
  },
  {
    icon: Target,
    title: "Enfoque",
    description: "100% centrado en tus objetivos de negocio. Entendemos tus metas y las hacemos realidad.",
  },
  {
    icon: Handshake,
    title: "Cercano",
    description: "Entendemos tus retos. Estaremos para apoyarte a seguir creciendo.",
  },
];

export default function PorQueElegirnos() {
  return (
    <section id="nosotros" className="py-16 md:py-24 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0F0F23] via-[#1A1A2E] to-[#0F0F23]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ¿POR QUÉ ELEGIR KCUMEN?
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Nos diferenciamos por nuestro compromiso con la excelencia y resultados tangibles
          </p>
        </div>

        {/* Diferenciadores Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {diferenciadores.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 p-6 glass-card rounded-xl hover:shadow-neon transition-all duration-300 cursor-pointer"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F43F5E] to-[#7C3AED] rounded-lg flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {item.title}
                </h3>
                <p className="text-[#94A3B8] leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
