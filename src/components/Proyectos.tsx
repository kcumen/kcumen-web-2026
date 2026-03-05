"use client";

import { ArrowUpRight } from "lucide-react";

const proyectos = [
  {
    titulo: "E-commerce Platform",
    categoria: "Desarrollo Web",
    tech: "Next.js, TypeScript, Stripe",
    descripcion: "Plataforma de comercio electrónico completa con pasarela de pagos, inventario y panel de administración.",
  },
  {
    titulo: "SaaS Dashboard",
    categoria: "SaaS Product",
    tech: "React, Node.js, PostgreSQL",
    descripcion: "Dashboard analítico en tiempo real con visualización de datos y reportes automatizados.",
  },
  {
    titulo: "Mobile Banking App",
    categoria: "Apps Mobile",
    tech: "Flutter, Firebase",
    descripcion: "Aplicación bancaria móvil con transferencias, pagos y gestión de cuentas.",
  },
  {
    titulo: "AI Content Generator",
    categoria: "Solutions IA",
    tech: "Python, OpenAI, FastAPI",
    descripcion: "Plataforma de generación de contenido con IA para marketing y redes sociales.",
  },
];

export default function Proyectos() {
  return (
    <section id="proyectos" className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PROYECTOS DESTACADOS
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto">
            Algunos de nuestros trabajos recientes que demuestran nuestra experiencia y calidad
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {proyectos.map((proyecto, index) => (
            <div
              key={index}
              className="group glass-card rounded-xl overflow-hidden hover:shadow-neon transition-all duration-300 cursor-pointer"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 md:h-56 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#A78BFA] to-[#F43F5E]" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
                <span className="absolute inset-0 flex items-center justify-center text-white/20 text-6xl font-bold">
                  {index + 1}
                </span>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-medium text-[#F43F5E]">
                    {proyecto.categoria}
                  </span>
                  <ArrowUpRight className="w-5 h-5 text-[#A78BFA] group-hover:text-[#F43F5E] transition-colors duration-300" />
                </div>
                <h3 
                  className="text-xl font-semibold text-white mb-2"
                  style={{ fontFamily: "var(--font-heading)" }}
                >
                  {proyecto.titulo}
                </h3>
                <p className="text-[#94A3B8] mb-4">
                  {proyecto.descripcion}
                </p>
                <div className="flex flex-wrap gap-2">
                  {proyecto.tech.split(", ").map((t, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-full text-[#A78BFA]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <a
            href="#contacto"
            className="inline-flex items-center justify-center px-8 py-4 border border-[#7C3AED] text-[#A78BFA] font-semibold rounded-lg hover:bg-[#7C3AED]/20 hover:text-white transition-all duration-200 cursor-pointer"
          >
            Ver Todos los Proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
