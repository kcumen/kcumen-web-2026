"use client";

import { useState, useEffect, useRef } from "react";
import { Cookie, Info, X, ChevronUp, ChevronDown } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasChecked = useRef(false);

  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;
    
    const consent = localStorage.getItem("cookie_consent");
    if (consent === null) {
      setTimeout(() => setIsVisible(true), 0);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie_consent", "declined");
    setIsVisible(false);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-2 inset-x-2 z-50 md:left-auto md:right-6 md:max-w-md md:inset-x-auto md:bottom-4">
      <div className="glass-card rounded-xl shadow-lg border border-[#7C3AED]/20 overflow-hidden">
        {/* Header with info toggle */}
        <div className="flex items-start gap-3 p-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mt-0.5">
            <Cookie className="w-4 h-4 text-[#A78BFA]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-white font-semibold text-sm">
              🍪 Cookies
            </h3>
            <p className="text-[#94A3B8] text-xs leading-tight">
              Usamos cookies para mejorar tu experiencia.
            </p>
          </div>
          <button
            onClick={toggleExpanded}
            className="flex-shrink-0 p-1.5 text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer"
            aria-label={isExpanded ? "Ocultar información" : "Más información"}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded content - GDPR information */}
        <div className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="px-4 pb-4 border-t border-[#7C3AED]/20">
            <div className="pt-3 space-y-2">
              <p className="text-[#E2E8F0] text-xs">
                <strong>¿Qué son las cookies?</strong> Son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia de navegación.
              </p>
              <p className="text-[#E2E8F0] text-xs">
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio. No pueden desactivarse.
              </p>
              <p className="text-[#E2E8F0] text-xs">
                <strong>Cookies analíticas:</strong> Nos ayudan a entender cómo usas nuestro sitio para mejorarlo.
              </p>
              <p className="text-[#64748B] text-xs">
               Tienes derecho a acceder, rectificar o eliminar tus datos. Contactanos para ejercer estos derechos.
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-2 px-4 pb-4">
          <button
            onClick={handleAccept}
            className="flex-1 px-3 py-2 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-medium rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer text-xs"
          >
            Aceptar
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-3 py-2 bg-transparent border border-[#7C3AED]/30 text-[#E2E8F0] font-medium rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-200 cursor-pointer text-xs"
          >
            Rechazar
          </button>
        </div>
      </div>
    </div>
  );
}
