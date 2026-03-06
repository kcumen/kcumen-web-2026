"use client";

import { ArrowUpRight } from "lucide-react";
import { useState } from "react";
import ProyectoModal from "./ProyectoModal";

interface Proyecto {
  titulo: string;
  categoria: string;
  tech: string[];
  descripcion: string;
  imagen?: string;
  cliente?: string;
  anio?: string;
  resultados?: string[];
  caracteristicas?: string[];
}

const proyectos: Proyecto[] = [
  {
    titulo: "Botty Finanzas",
    categoria: "Producto Propio",
    tech: ["WhatsApp", "IA", "Google Sheets", "Nube"],
    descripcion: "Asistente financiero inteligente que gestiona finanzas personales y empresariales a través de WhatsApp. Registra transacciones, genera reportes automáticos y sincroniza con Google Sheets. Producto propio de Kcumen disponible para usuarios.",
    cliente: "Kcumen",
    anio: "2025",
    resultados: [
      "Gestión financiera por WhatsApp",
      "Reportes automáticos",
      "Sincronización con Google Sheets"
    ],
    caracteristicas: [
      "Asistente de IA para finanzas",
      "Registro de transacciones por voz y texto",
      "Reportes y gráficos financieros",
      "Integración con Google Sheets",
      "Gratis para empezar"
    ]
  },
  {
    titulo: "Certiagro",
    categoria: "Producto Propio",
    tech: ["Nube", "UI/UX", "Android", "Gamificación"],
    descripcion: "Aplicativo para el sector agrícola que integra software en la nube, diseño UI/UX, aplicaciones móviles y gamificación. Es uno de nuestros productos insignia, conçuido para guiar a productores agrícolas en la implementación de buenas prácticas y asistencia técnica remota para certificación de predios.",
    cliente: "Mintic",
    anio: "2018",
    resultados: [
      "Producto propio desarrollado desde cero",
      "Sector agrícola transformado digitalmente",
      "Disponible en Google Play"
    ],
    caracteristicas: [
      "Diseño de interfaces",
      "Desarrollo nativo Android",
      "Sistema de Gamificación",
      "Diseño de Experiencia de Usuario",
      "Software en la nube"
    ]
  },
  {
    titulo: "TrazAgro",
    categoria: "Plataforma",
    tech: ["Nube", "Móvil", "QR", "Trazabilidad"],
    descripcion: "Sistema software para gestionar la trazabilidad de productos agrícolas. Integra plataforma en la nube con varias aplicaciones móviles para gestionar información de productores y evaluación de productos mediante códigos QR. Producto comercializable mediante licenciamiento.",
    cliente: "Privado",
    anio: "2017",
    resultados: [
      "Trazabilidad completa del producto",
      "Gestión de múltiples tipos de usuarios",
      "Escalable para diferentes cultivos"
    ],
    caracteristicas: [
      "Diseño de interfaces web y móvil",
      "Sistema de Gamificación",
      "Desarrollo en la nube",
      "Desarrollo nativo Android",
      "Códigos QR"
    ]
  },
  {
    titulo: "Intel Gamification",
    categoria: "Sistema de Gamificación",
    tech: ["Web", "Nube", "Gamificación", "Intel"],
    descripcion: "Sistema software para evaluación mediante estrategia de gamificación para Intel Corporation. Desarrollado en colaboración con agencias internacionales, permite mantener control de temas tratados por personal de capacitación.",
    cliente: "Intel",
    anio: "2012",
    resultados: [
      "Evaluación gamificada de capacitación",
      "Colaboración con Intel Corporation",
      "Control de temas tratados"
    ],
    caracteristicas: [
      "Diseño de interfaces web y móvil",
      "Sistema de Gamificación",
      "Desarrollo en la nube",
      "Estrategia de evaluación"
    ]
  },
];

export default function Proyectos() {
  const [modalProyecto, setModalProyecto] = useState<Proyecto | null>(null);

  return (
    <>
      <section id="proyectos" aria-labelledby="proyectos-title" className="py-16 md:py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2
              id="proyectos-title"
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
                onClick={() => setModalProyecto(proyecto)}
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
                    {proyecto.tech.slice(0, 3).map((t, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-xs font-medium bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-full text-[#A78BFA]"
                      >
                        {t}
                      </span>
                    ))}
                    {proyecto.tech.length > 3 && (
                      <span className="px-3 py-1 text-xs font-medium bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-full text-[#A78BFA]">
                        +{proyecto.tech.length - 3}
                      </span>
                    )}
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

      {/* Modal */}
      <ProyectoModal
        proyecto={modalProyecto}
        isOpen={!!modalProyecto}
        onClose={() => setModalProyecto(null)}
      />
    </>
  );
}
