# Kcumen Web

Sitio web corporativo de Kcumen - Empresa de ingenieria y servicios tecnicos.

## Tech Stack

- **Framework:** Next.js 16.1.6
- **UI Library:** React 19.2.3
- **Styling:** Tailwind CSS 4
- **Language:** TypeScript
- **Icons:** Lucide React
- **Email:** Resend

## Getting Started

npm install
npm run dev

Abrir http://localhost:3000 en el navegador.

## Estructura del Proyecto

src/
├── app/
│   ├── actions/
│   │   └── sendEmail.ts
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
└── components/
    ├── Contacto.tsx
    ├── Footer.tsx
    ├── Hero.tsx
    ├── Navbar.tsx
    ├── PorQueElegirnos.tsx
    ├── Proceso.tsx
    ├── ProyectoModal.tsx
    ├── Proyectos.tsx
    ├── Soluciones.tsx
    └── Testimonios.tsx

## Scripts Disponibles

- npm run dev - Iniciar servidor de desarrollo
- npm run build - Construir para produccion
- npm run start - Iniciar servidor de produccion
- npm run lint - Ejecutar linter
