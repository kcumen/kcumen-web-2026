"use client";

import { useState, useEffect, useRef } from "react";
import { Cookie } from "lucide-react";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const hasChecked = useRef(false);

  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;
    
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie_consent");
    if (consent === null) {
      // Show banner if no consent has been given
      // Use setTimeout to defer the state update and avoid the lint warning
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

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-6 md:max-w-md">
      <div className="glass-card rounded-xl p-6 shadow-lg border border-[#7C3AED]/20">
        <div className="flex items-start gap-3 mb-4">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-[#7C3AED]/20 flex items-center justify-center">
            <Cookie className="w-5 h-5 text-[#A78BFA]" />
          </div>
          <div>
            <h3 className="text-white font-semibold text-lg">
              🍪 Cookies
            </h3>
            <p className="text-[#94A3B8] text-sm mt-1">
              Utilizamos cookies para mejorar tu experiencia. Puedes aceptar todas las cookies o configurarlas según tus preferencias.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={handleAccept}
            className="flex-1 px-4 py-2.5 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-medium rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer text-sm"
          >
            Aceptar todo
          </button>
          <button
            onClick={handleDecline}
            className="flex-1 px-4 py-2.5 bg-transparent border border-[#7C3AED]/30 text-[#E2E8F0] font-medium rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-200 cursor-pointer text-sm"
          >
            Rechazar
          </button>
        </div>
        
        <p className="text-xs text-[#64748B] mt-3 text-center">
          Al hacer clic, aceptas nuestra{" "}
          <a href="#politica" className="text-[#A78BFA] hover:underline cursor-pointer">
            Política de Privacidad
          </a>
        </p>
      </div>
    </div>
  );
}
