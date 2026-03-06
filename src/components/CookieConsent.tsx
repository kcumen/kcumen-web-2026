"use client";

import { useState, useEffect, useRef } from "react";
import { Cookie, Info, ChevronDown } from "lucide-react";

type ConsentChoice = "accepted" | "rejected" | "customized";

type ConsentPreferences = {
  necessary: true;
  analytics: boolean;
};

const COOKIE_CONSENT_KEY = "cookie_consent_status";
const COOKIE_PREFERENCES_KEY = "cookie_consent_preferences";

const getStoredPreferences = (): ConsentPreferences => {
  if (typeof window === "undefined") return { necessary: true, analytics: false };

  const savedPreferences = window.localStorage.getItem(COOKIE_PREFERENCES_KEY);
  if (!savedPreferences) return { necessary: true, analytics: false };

  try {
    const parsedPreferences = JSON.parse(savedPreferences) as Partial<ConsentPreferences>;
    return {
      necessary: true,
      analytics: Boolean(parsedPreferences.analytics),
    };
  } catch {
    return { necessary: true, analytics: false };
  }
};

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [analyticsEnabled, setAnalyticsEnabled] = useState<boolean>(() => getStoredPreferences().analytics);
  const hasChecked = useRef(false);

  useEffect(() => {
    if (hasChecked.current) return;
    hasChecked.current = true;
    
    const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (consent === null) {
      setTimeout(() => setIsVisible(true), 0);
      return;
    }
  }, []);

  const saveConsent = (choice: ConsentChoice, preferences: ConsentPreferences) => {
    localStorage.setItem(COOKIE_CONSENT_KEY, choice);
    localStorage.setItem(COOKIE_PREFERENCES_KEY, JSON.stringify(preferences));
    window.dispatchEvent(
      new CustomEvent("kcumen-cookie-consent-change", {
        detail: {
          choice,
          preferences,
        },
      })
    );
    setIsVisible(false);
  };

  const handleAccept = () => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics: true,
    };
    setAnalyticsEnabled(true);
    saveConsent("accepted", preferences);
  };

  const handleDecline = () => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics: false,
    };
    setAnalyticsEnabled(false);
    saveConsent("rejected", preferences);
  };

  const handleSavePreferences = () => {
    const preferences: ConsentPreferences = {
      necessary: true,
      analytics: analyticsEnabled,
    };
    saveConsent("customized", preferences);
  };

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-2 inset-x-2 z-[9999] pointer-events-none md:left-auto md:right-6 md:max-w-md md:inset-x-auto md:bottom-4">
      <div
        className="glass-card pointer-events-auto rounded-xl shadow-lg border border-[#7C3AED]/20 overflow-hidden"
        role="dialog"
        aria-modal="false"
        aria-labelledby="cookie-consent-title"
        aria-describedby="cookie-consent-description"
      >
        {/* Header with info toggle */}
        <div className="flex items-start gap-3 p-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#7C3AED]/20 flex items-center justify-center mt-0.5">
            <Cookie className="w-4 h-4 text-[#A78BFA]" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 id="cookie-consent-title" className="text-white font-semibold text-sm">
              🍪 Configuración de cookies
            </h3>
            <p id="cookie-consent-description" className="text-[#94A3B8] text-xs leading-tight">
              Puedes aceptar, rechazar o configurar cookies no esenciales antes de que se activen.
            </p>
          </div>
          <button
            onClick={toggleExpanded}
            className="flex-shrink-0 p-1.5 text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer"
            aria-label={isExpanded ? "Ocultar información" : "Más información"}
            aria-controls="cookie-consent-details"
            {...(isExpanded ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
          >
            {isExpanded ? <ChevronDown className="w-4 h-4" /> : <Info className="w-4 h-4" />}
          </button>
        </div>

        {/* Expanded content - GDPR information */}
        <div id="cookie-consent-details" className={`transition-all duration-300 ease-in-out ${isExpanded ? 'max-h-[32rem] opacity-100 pointer-events-auto' : 'max-h-0 opacity-0 pointer-events-none'}`}>
          <div className="px-4 pb-4 border-t border-[#7C3AED]/20">
            <div className="pt-3 space-y-3">
              <div className="rounded-lg border border-[#7C3AED]/20 bg-[#7C3AED]/5 p-3">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[#E2E8F0] text-xs font-semibold">Cookies analíticas</p>
                    <p className="text-[#94A3B8] text-xs leading-relaxed">
                      Permiten medir visitas y comportamiento de navegación. Están desactivadas por defecto.
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => setAnalyticsEnabled((current) => !current)}
                    className={`relative z-10 inline-flex h-6 w-11 flex-shrink-0 cursor-pointer items-center rounded-full transition-colors ${analyticsEnabled ? "bg-[#7C3AED]" : "bg-[#334155]"}`}
                    {...(analyticsEnabled ? { "aria-pressed": "true" } : { "aria-pressed": "false" })}
                  >
                    <span className="sr-only">Activar cookies analíticas</span>
                    <span
                      className={`pointer-events-none inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${analyticsEnabled ? "translate-x-6" : "translate-x-1"}`}
                    />
                  </button>
                </div>
              </div>
              <p className="text-[#E2E8F0] text-xs">
                <strong>¿Qué son las cookies?</strong> Son pequeños archivos que se almacenan en tu dispositivo para mejorar tu experiencia de navegación.
              </p>
              <p className="text-[#E2E8F0] text-xs">
                <strong>Cookies esenciales:</strong> Necesarias para el funcionamiento básico del sitio. No pueden desactivarse.
              </p>
              <p className="text-[#E2E8F0] text-xs">
                <strong>Cookies analíticas:</strong> Solo se activarán si das tu consentimiento. Nos ayudan a entender cómo usas nuestro sitio para mejorarlo.
              </p>
              <p className="text-[#64748B] text-xs">
                Puedes cambiar tu decisión más adelante y tienes derecho a acceder, rectificar o eliminar tus datos. Consulta nuestra política de cookies y privacidad para más información.
              </p>
            </div>
          </div>
        </div>

        {/* Action buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 px-4 pb-4">
          <button
            onClick={handleAccept}
            className="px-3 py-2 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-medium rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer text-xs"
          >
            Aceptar todo
          </button>
          <button
            onClick={handleDecline}
            className="px-3 py-2 bg-transparent border border-[#7C3AED]/30 text-[#E2E8F0] font-medium rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-200 cursor-pointer text-xs"
          >
            Rechazar no esenciales
          </button>
          <button
            onClick={handleSavePreferences}
            className="px-3 py-2 bg-transparent border border-[#A78BFA]/30 text-[#A78BFA] font-medium rounded-lg hover:bg-[#7C3AED]/10 transition-all duration-200 cursor-pointer text-xs"
          >
            Guardar preferencias
          </button>
        </div>
      </div>
    </div>
  );
}
