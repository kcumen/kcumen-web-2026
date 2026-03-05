"use client";

import { ArrowRight, TrendingUp, Shield, Users, Sparkles } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: TrendingUp, value: "50+", label: "Proyectos" },
    { icon: Shield, value: "4.9", label: "Rating" },
    { icon: Users, value: "30+", label: "Clientes" },
  ];

  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#7C3AED]/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#F43F5E]/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7C3AED]/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 glass-card rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#A78BFA]" />
            <span className="text-sm text-[#A78BFA] font-medium">Transformando el futuro con IA</span>
          </div>

          {/* Headline */}
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Expertos en Plataformas Digitales
            <span className="block mt-2 bg-gradient-to-r from-[#A78BFA] via-[#7C3AED] to-[#F43F5E] bg-clip-text text-transparent">
              y Soluciones con IA
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-[#94A3B8] mb-8 max-w-2xl mx-auto leading-relaxed">
            Transformamos tu visión en realidad digital con tecnología de vanguardia. 
            Desarrollo web, apps mobile, IA y soluciones cloud de alta calidad.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="#contacto"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-semibold rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer breathe-glow"
            >
              <Sparkles className="mr-2 w-5 h-5" />
              Cotizar Proyecto
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a
              href="#proyectos"
              className="inline-flex items-center justify-center px-8 py-4 border border-[#7C3AED] text-[#A78BFA] font-semibold rounded-lg hover:bg-[#7C3AED]/20 hover:text-white transition-all duration-200 cursor-pointer"
            >
              Ver Trabajos
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-xl mx-auto pt-8 border-t border-[#7C3AED]/20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-[#A78BFA]" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
                  {stat.value}
                </div>
                <div className="text-sm text-[#94A3B8]">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
