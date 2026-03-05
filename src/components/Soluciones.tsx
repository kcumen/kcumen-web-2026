"use client";

import { Brain, Code, Building2, Package, ChevronRight, Zap } from "lucide-react";
import Link from "next/link";

const soluciones = [
  {
    titulo: "Inteligencia Artificial",
    descripcion: "Automatización inteligente y modelos predictivos avanzados para optimizar procesos y tomar decisiones basadas en datos.",
    icon: Brain,
    caracteristicas: [
      "Automatización de tareas",
      "Análisis predictivo",
      "Chatbots inteligentes",
      "Asistentes virtuales",
    ],
  },
  {
    titulo: "Software a Medida",
    descripcion: "Plataformas y sistemas empresariales personalizados que se adaptan perfectamente a las necesidades de tu organización.",
    icon: Code,
    caracteristicas: [
      "Desarrollo personalizado",
      "Integraciones flexibles",
      "Gestión empresarial",
      "Crecimiento sin límites",
    ],
  },
  {
    titulo: "Proyectos Institucionales",
    descripcion: "Soluciones tecnológicas para el sector público y organizaciones de cooperación, cumpliendo con los más altos estándares.",
    icon: Building2,
    caracteristicas: [
      "Sector público",
      "Cooperación internacional",
      "Cumplimiento normativo",
      "Escalabilidad garantizada",
    ],
  },
  {
    titulo: "Productos Digitales Propios",
    descripcion: "Desarrollo de SaaS y herramientas especializadas diseñadas para resolver problemas específicos del mercado.",
    icon: Package,
    caracteristicas: [
      "Herramientas en la nube",
      "Soluciones especializadas",
      "Propiedad intelectual",
      "Crecimiento escalable",
    ],
  },
  {
    titulo: "Consultoría Tecnológica",
    descripcion: "Acompañamiento estratégico en la transformación digital de tu organización para maximizar el impacto.",
    icon: ChevronRight,
    caracteristicas: [
      "Auditorías técnicas",
      "Planificación estratégica",
      "Gestión de cambio",
      "Optimización de procesos",
    ],
  },
  {
    titulo: "Transformación Digital",
    descripcion: "Modernización de infraestructura y procesos para adoptar tecnologías emergentes y mantener la competitividad.",
    icon: Zap,
    caracteristicas: [
      "Innovación tecnológica",
      "Modernización de sistemas",
      "Entrega continua",
      "Tecnología de vanguardia",
    ],
  },
];

export default function Soluciones() {
  return (
    <section id="servicios" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            NUESTRAS SOLUCIONES
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Conectamos retos organizacionales con tecnología de vanguardia. 
            Soluciones que generan impacto real.
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {soluciones.map((solucion, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl p-6 hover:shadow-neon transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-lg bg-[#7C3AED]/20 border border-[#7C3AED]/30 flex items-center justify-center mb-4">
                <solucion.icon className="w-6 h-6 text-[#A78BFA]" />
              </div>

              {/* Content */}
              <h3 
                className="text-xl font-semibold text-white mb-3"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {solucion.titulo}
              </h3>
              <p className="text-[#94A3B8] mb-4 text-sm leading-relaxed">
                {solucion.descripcion}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {solucion.caracteristicas.map((caracteristica, i) => (
                  <span key={i} className="px-2 py-1 text-xs font-medium bg-[#7C3AED]/10 border border-[#7C3AED]/20 rounded text-[#A78BFA]">
                    {caracteristica}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-semibold rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer"
          >
            Agenda una reunión
            <ChevronRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
