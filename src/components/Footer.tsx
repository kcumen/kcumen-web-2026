"use client";

import { Mail, Phone, MapPin, Linkedin, Twitter, Github, Instagram } from "lucide-react";

const footerLinks = {
  servicios: [
    { name: "Desarrollo Web", href: "#servicios" },
    { name: "Solutions IA", href: "#servicios" },
    { name: "Apps Mobile", href: "#servicios" },
    { name: "Cloud Services", href: "#servicios" },
  ],
  empresa: [
    { name: "Nosotros", href: "#nosotros" },
    { name: "Carreras", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Contacto", href: "#contacto" },
  ],
  legal: [
    { name: "Política de Privacidad", href: "#" },
    { name: "Términos de Servicio", href: "#" },
    { name: "Cookies", href: "#" },
  ],
};

const socialLinks = [
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Github, href: "#", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0F0F23] text-white border-t border-[#7C3AED]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Description */}
          <div className="lg:col-span-2">
            <h3 
              className="text-2xl font-bold bg-gradient-to-r from-[#A78BFA] to-[#E2E8F0] bg-clip-text text-transparent mb-4"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Kcumen
            </h3>
            <p className="text-[#94A3B8] mb-6 max-w-sm">
              Expertos en desarrollo de plataformas digitales y soluciones con IA. 
              Transformamos tu visión en realidad digital.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <Mail className="w-5 h-5" />
                <a href="mailto:hello@kcumen.co" className="hover:text-[#A78BFA] transition-colors cursor-pointer">
                  hello@kcumen.co
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <Phone className="w-5 h-5" />
                <a href="tel:+1234567890" className="hover:text-[#A78BFA] transition-colors cursor-pointer">
                  +1 (234) 567-890
                </a>
              </div>
              <div className="flex items-center gap-3 text-[#94A3B8]">
                <MapPin className="w-5 h-5" />
                <span>Ciudad de México, México</span>
              </div>
            </div>
          </div>

          {/* Servicios */}
          <div>
            <h4 className="font-semibold text-white mb-4">Servicios</h4>
            <ul className="space-y-2">
              {footerLinks.servicios.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Empresa */}
          <div>
            <h4 className="font-semibold text-white mb-4">Empresa</h4>
            <ul className="space-y-2">
              {footerLinks.empresa.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="text-[#94A3B8] hover:text-[#A78BFA] transition-colors cursor-pointer"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-[#7C3AED]/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#64748B] text-sm">
              © 2026 Kcumen. Todos los derechos reservados.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-[#7C3AED]/20 rounded-lg flex items-center justify-center hover:bg-[#7C3AED] transition-colors cursor-pointer"
                >
                  <social.icon className="w-5 h-5 text-[#A78BFA] hover:text-white" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
