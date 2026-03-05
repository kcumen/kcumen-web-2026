"use client";

import { X } from "lucide-react";
import { useEffect } from "react";

interface ProyectoModalProps {
  proyecto: {
    titulo: string;
    categoria: string;
    tech: string[];
    descripcion: string;
    imagen?: string;
    cliente?: string;
    anio?: string;
    resultados?: string[];
    caracteristicas?: string[];
  } | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProyectoModal({ proyecto, isOpen, onClose }: ProyectoModalProps) {
  // Close on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen || !proyecto) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fadeIn"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto glass-card rounded-2xl shadow-neon animate-scaleIn">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/30 hover:bg-[#F43F5E]/20 text-white/70 hover:text-[#F43F5E] transition-all duration-200"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Image */}
        <div className="h-48 md:h-64 relative overflow-hidden rounded-t-2xl">
          <div className="absolute inset-0 bg-gradient-to-br from-[#7C3AED] via-[#A78BFA] to-[#F43F5E]" />
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PHBhdGggZD0iTSA2MCAwIEwgMCAwIDAgNjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30" />
          <div className="absolute bottom-6 left-6">
            <span className="px-3 py-1 text-sm font-medium bg-[#F43F5E]/20 border border-[#F43F5E]/30 rounded-full text-white">
              {proyecto.categoria}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8">
          <h2
            className="text-2xl md:text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            {proyecto.titulo}
          </h2>

          <p className="text-[#94A3B8] mb-6 leading-relaxed">
            {proyecto.descripcion}
          </p>

          {/* Tech Stack */}
          <div className="mb-6">
            <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
              Tecnologías
            </h3>
            <div className="flex flex-wrap gap-2">
              {proyecto.tech.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 text-sm font-medium bg-[#7C3AED]/20 border border-[#7C3AED]/30 rounded-full text-[#A78BFA]"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Project Details */}
          {(proyecto.cliente || proyecto.anio || proyecto.resultados) && (
            <div className="grid grid-cols-2 gap-4 mb-6">
              {proyecto.cliente && (
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Cliente</p>
                  <p className="text-white font-medium">{proyecto.cliente}</p>
                </div>
              )}
              {proyecto.anio && (
                <div className="bg-black/20 rounded-lg p-4">
                  <p className="text-xs text-white/50 uppercase tracking-wider mb-1">Año</p>
                  <p className="text-white font-medium">{proyecto.anio}</p>
                </div>
              )}
            </div>
          )}

          {/* Resultados */}
          {proyecto.resultados && proyecto.resultados.length > 0 && (
            <div className="mb-6">
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                Resultados Obtenidos
              </h3>
              <ul className="space-y-2">
                {proyecto.resultados.map((resultado, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#94A3B8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F43F5E] mt-2 flex-shrink-0" />
                    {resultado}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Características */}
          {proyecto.caracteristicas && proyecto.caracteristicas.length > 0 && (
            <div>
              <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-3">
                Características Principales
              </h3>
              <ul className="space-y-2">
                {proyecto.caracteristicas.map((caracteristica, i) => (
                  <li key={i} className="flex items-start gap-2 text-[#94A3B8]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] mt-2 flex-shrink-0" />
                    {caracteristica}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
