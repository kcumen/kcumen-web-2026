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
    titulo: "E-commerce Platform",
    categoria: "Desarrollo Web",
    tech: ["Next.js", "TypeScript", "Stripe", "Tailwind CSS"],
    descripcion: "Plataforma de comercio electrónico completa con pasarela de pagos, inventario y panel de administración. Desarrollamos una solución escalable que permite gestionar productos, pedidos y clientes de manera eficiente.",
    cliente: "RetailCorp",
    anio: "2024",
    resultados: [
      "Incremento del 150% en conversiones",
      "Reducción del 40% en tiempo de carga",
      "Integración con múltiples métodos de pago"
    ],
    caracteristicas: [
      "Carrito de compras persistentes",
      "Panel de administración completo",
      "Sistema de notificaciones en tiempo real",
      "Optimización SEO avanzada",
      "Diseño responsive para todos los dispositivos"
    ]
  },
  {
    titulo: "SaaS Dashboard",
    categoria: "SaaS Product",
    tech: ["React", "Node.js", "PostgreSQL", "Chart.js"],
    descripcion: "Dashboard analítico en tiempo real con visualización de datos y reportes automatizados. Creamos una plataforma intuitiva que permite a las empresas monitorear sus métricas clave.",
    cliente: "DataMetrics Inc",
    anio: "2024",
    resultados: [
      "Más de 10,000 usuarios activos",
      "Tiempo de respuesta < 100ms",
      "99.9% de disponibilidad"
    ],
    caracteristicas: [
      "Gráficos interactivos en tiempo real",
      "Exportación de reportes en PDF/Excel",
      "Alertas configurables por email",
      "Panel multi-tenant",
      "API RESTful para integraciones"
    ]
  },
  {
    titulo: "Mobile Banking App",
    categoria: "Apps Mobile",
    tech: ["Flutter", "Firebase", "AWS", "Biometrics"],
    descripcion: "Aplicación bancaria móvil con transferencias, pagos y gestión de cuentas. Implementamos medidas de seguridad avanzadas para proteger los datos financieros de los usuarios.",
    cliente: "FinanceBank",
    anio: "2023",
    resultados: [
      "Más de 500,000 descargas",
      "Calificación 4.8 en App Store",
      "0 incidentes de seguridad"
    ],
    caracteristicas: [
      "Autenticación biométrica",
      "Transferencias instantáneas",
      "Historial de transacciones",
      "Gestión de tarjetas virtuales",
      "Soporte para múltiples monedas"
    ]
  },
  {
    titulo: "AI Content Generator",
    categoria: "Solutions IA",
    tech: ["Python", "OpenAI", "FastAPI", "React"],
    descripcion: "Plataforma de generación de contenido con IA para marketing y redes sociales. Utilizamos modelos de lenguaje avanzados para crear contenido optimizado y atractivo.",
    cliente: "MarketingPro",
    anio: "2024",
    resultados: [
      "Generación de +50,000 contenidos mensuales",
      "Ahorro del 70% en tiempo de creación",
      "Mejora del 45% en engagement"
    ],
    caracteristicas: [
      "Generación de posts para redes sociales",
      "Creación de artículos de blog",
      "Generación de descripciones de productos",
      "Optimización de SEO",
      "Personalización por tono y audiencia"
    ]
  },
];

export default function Proyectos() {
  const [modalProyecto, setModalProyecto] = useState<Proyecto | null>(null);

  return (
    <>
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
