"use client";

import { Monitor, Bot, Smartphone, Cloud, Lock, BarChart3 } from "lucide-react";

const servicios = [
  {
    icon: Monitor,
    title: "Desarrollo Web",
    description: "Sitios web y aplicaciones web modernas, rápidas y escalables con Next.js, React y TypeScript.",
  },
  {
    icon: Bot,
    title: "Solutions IA",
    description: "Implementación de inteligencia artificial, machine learning y automatización de procesos.",
  },
  {
    icon: Smartphone,
    title: "Apps Mobile",
    description: "Aplicaciones nativas y cross-platform para iOS y Android con Flutter y React Native.",
  },
  {
    icon: Cloud,
    title: "Cloud Services",
    description: "Infraestructura cloud, deployment y servicios AWS, Azure y Google Cloud.",
  },
  {
    icon: Lock,
    title: "SaaS Products",
    description: "Desarrollo de productos software como servicio con autenticación, pagos y suscripciones.",
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Dashboards, visualización de datos y análisis de métricas de negocio.",
  },
];

export default function Servicios() {
  return (
    <section id="servicios" className="py-16 md:py-24 relative">
      {/* Background Effect */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#0F0F23] to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0F0F23] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NUESTROS SERVICIOS
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Soluciones tecnológicas integrales para impulsar tu negocio digital
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicios.map((servicio, index) => (
            <div
              key={index}
              className="group p-6 glass-card rounded-xl hover:shadow-neon transition-all duration-300 cursor-pointer"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <servicio.icon className="w-7 h-7 text-white" />
              </div>
              <h3 
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {servicio.title}
              </h3>
              <p className="text-[#94A3B8] leading-relaxed">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
