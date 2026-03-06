"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const navLinks = [
  { name: "Inicio", href: "#inicio" },
  { name: "Soluciones", href: "#servicios" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Proyectos", href: "#proyectos" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <nav aria-label="Navegación principal" className="fixed top-4 left-1/2 -translate-x-1/2 z-50 glass-card rounded-xl shadow-lg hover-glow overflow-hidden w-full max-w-[calc(100vw-2rem)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2" aria-label="Ir al inicio de Kcumen">
            <Image
              src="/favicon-kcumen.png"
              alt="Logo de Kcumen"
              width={40}
              height={40}
              priority
              className="w-10 h-10 rounded-lg"
            />
            <span className="text-2xl font-bold text-white" style={{ fontFamily: "var(--font-heading)" }}>
              Kcumen
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#E2E8F0] hover:text-[#A78BFA] font-medium transition-colors cursor-pointer"
              >
                {link.name}
              </a>
            ))}

            {/* Login Button */}
            <a
              href="#contacto"
              className="px-4 py-2 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-medium rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer"
            >
              Contacto
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-[#E2E8F0] hover:text-[#A78BFA] transition-colors cursor-pointer"
            aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            aria-controls="mobile-menu"
            {...(isOpen ? { "aria-expanded": "true" } : { "aria-expanded": "false" })}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div id="mobile-menu" className="md:hidden glass-card border-t border-[#7C3AED]/30">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block py-2 text-[#E2E8F0] hover:text-[#A78BFA] font-medium transition-colors cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contacto"
                className="block py-2 text-[#A78BFA] hover:text-white font-medium transition-colors cursor-pointer"
              >
                Contacto
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
