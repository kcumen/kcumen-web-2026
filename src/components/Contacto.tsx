"use client";

import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useState } from "react";

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    empresa: "",
    mensaje: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-16 md:py-24 relative">
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#7C3AED]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#F43F5E]/10 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 
            className="text-3xl md:text-4xl font-bold text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            ¿LISTO PARA TRANSFORMAR TU PROYECTO?
          </h2>
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-8">
            Hablemos sobre tus necesidades y encontremos la mejor solución juntos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 
              className="text-2xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Contáctanos
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-lg flex items-center justify-center">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:hello@kcumen.co" className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer">
                    hello@kcumen.co
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-[#7C3AED] to-[#A78BFA] rounded-lg flex items-center justify-center">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <div>
                  <p className="font-medium text-white">Teléfono</p>
                  <a href="tel:+1234567890" className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>

            {/* Decorative Box */}
            <div className="glass-card p-6 rounded-xl">
              <p className="text-lg font-semibold text-white mb-2">
                ¿Por qué trabajar con nosotros?
              </p>
              <p className="text-[#94A3B8] mb-4">
                +12 años de experiencia
              </p>
              <ul className="space-y-2 text-[#94A3B8]">
                <li className="flex items-center gap-2">
                  <span className="text-[#A78BFA]">✓</span> Equipo multidisciplinario
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A78BFA]">✓</span> Soporte post-lanzamiento
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#A78BFA]">✓</span> Metodologías ágiles
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass-card p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-white mb-2">
                  Nombre completo *
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  value={formData.nombre}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0F0F23] border border-[#7C3AED]/30 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-colors text-white placeholder-[#94A3B8]"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0F0F23] border border-[#7C3AED]/30 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-colors text-white placeholder-[#94A3B8]"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-sm font-medium text-white mb-2">
                  Empresa
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0F0F23] border border-[#7C3AED]/30 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-colors text-white placeholder-[#94A3B8]"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-white mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  required
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#0F0F23] border border-[#7C3AED]/30 rounded-lg focus:outline-none focus:border-[#7C3AED] focus:ring-2 focus:ring-[#7C3AED]/20 transition-colors text-white placeholder-[#94A3B8] resize-none"
                  placeholder="Cuéntanos sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center px-8 py-4 bg-gradient-to-r from-[#7C3AED] to-[#A78BFA] text-white font-semibold rounded-lg hover:shadow-neon transition-all duration-200 cursor-pointer breathe-glow"
              >
                <Sparkles className="mr-2 w-5 h-5" />
                Enviar Mensaje
                <Send className="ml-2 w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
