# Propuesta de Rediseño: kcumen.co

## 📋 Resumen Ejecutivo

Propuesta integral para el rediseño del sitio web corporativo de **Kcumen**, una empresa de tecnología y servicios digitales especializada en desarrollo de plataformas y soluciones con IA.

**Enfoque de diseño:** Brutalism + Enterprise Gateway  
**Estilo visual:** Profesional, moderno, de alto contraste  
**Paleta de colores:** Blue profesional (`#1E40AF`) + Orange Urgente (`#F97316`)

---

## 🎨 Design System

### Paleta de Colores

| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| Primary | Deep Blue | `#1E40AF` | Headings, navegación, elementos principales |
| Secondary | Sky Blue | `#3B82F6` | Links, acentos secundarios |
| CTA/Accent | Bright Orange | `#F97316` | Botones principales, llamadas a acción |
| Background | Light Blue | `#EFF6FF` | Fondos de secciones, cards |
| Text | Navy | `#1E3A8A` | Texto principal |

### Tipografía

- **Headings:** Poppins (Bold, weights: 400-700)
- **Body:** Open Sans (Regular, weights: 300-700)
- **Mood:** Moderno, profesional, limpio, corporativo

### Efectos Visuales

- Bordes visibles y contraste alto
- Tipografía bold (700+)
- Bloques grandes y bien definidos
- Transiciones suaves de 150-300ms
- Esquinas sharp (0-8px radius)

---

## 🏗️ Estructura de Página Propuesta

### 1. **Header / Navegación**

```
┌─────────────────────────────────────────────────────────┐
│  Logo    │  Servicios  │  Nosotros  │  Proyectos  │  │
│  Kcumen  │    ▼        │    ▼       │    Contacto │  │  [Login]
└─────────────────────────────────────────────────────────┘
```

**Componentes:**
- Mega menu desplegable
- Logo a la izquierda
- Navegación principal centrada
- Botón secundario "Login" a la derecha
- Sticky navbar con `top-4` spacing (flotante)

---

### 2. **Hero Section**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   Expertos en Plataformas Digitales                     │
│   y Soluciones con IA                                   │
│                                                         │
│   Transformamos tu visión en realidad digital           │
│   con tecnología de vanguardia.                        │
│                                                         │
│   [Cotizar Proyecto]    [Ver Trabajos]                │
│                                                         │
│   ─────────────────────────────────────────────────    │
│   📊 50+ Proyectos    ⭐ 4.9 Rating    🤝 30+ Clientes│
│                                                         │
└─────────────────────────────────────────────────────────┘
```

**Specs:**
- Background: `#EFF6FF` con gradiente sutil
- Headline: 48-64px (mobile: 32px)
- Max-width: 800px centrado
- CTA buttons: Primary (orange) + Secondary (outline blue)
- Trust stats en fila horizontal

---

### 3. **Servicios**

```
┌─────────────────────────────────────────────────────────┐
│                    NUESTROS SERVICIOS                   │
├─────────────────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │   🖥️    │  │    🤖    │  │    📱    │            │
│  │   Web   │  │    IA    │  │ Mobile  │            │
│  │Development│ │Solutions │  │   Apps  │            │
│  └──────────┘  └──────────┘  └──────────┘            │
│                                                         │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐            │
│  │   ☁️    │  │    🔒    │  │    📈    │            │
│  │Cloud    │  │   SaaS   │  │  Data    │            │
│  │Services │  │Products  │  │Analytics │            │
│  └──────────┘  └──────────┘  └──────────┘            │
└─────────────────────────────────────────────────────────┘
```

**Grid:** 3 columnas (mobile: 1 columna)  
**Cards:** Fondo white, border visible `#1E40AF`, hover con shadow

---

### 4. **Por Qué Elegirnos / Diferenciales**

```
┌─────────────────────────────────────────────────────────┐
│              ¿POR QUÉ ELEGIR KCUMEN?                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌────────────────┐    ┌────────────────┐              │
│  │  ⚡ Rápido     │    │  🔒 Seguro     │              │
│  │  Entregas en  │    │  Estándares    │              │
│  │  tiempo       │    │  de seguridad  │              │
│  │  récord       │    │  enterprise    │              │
│  └────────────────┘    └────────────────┘              │
│                                                         │
│  ┌────────────────┐    ┌────────────────┐              │
│  │  🎯 Enfoque    │    │  💎 Calidad    │              │
│  │ 100% en tus   │    │  Código        │              │
│  │ objetivos de  │    │  limpio y      │              │
│  │ negocio        │    │  mantenible    │              │
│  └────────────────┘    └────────────────┘              │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 5. **Proyectos / Portfolio**

```
┌─────────────────────────────────────────────────────────┐
│                    PROYECTOS DESTACADOS                 │
├─────────────────────────────────────────────────────────┤
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │   [Screenshot]   │  │   [Screenshot]   │          │
│  │                  │  │                  │          │
│  │  Proyecto 1      │  │  Proyecto 2      │          │
│  │  E-commerce      │  │  SaaS Dashboard  │          │
│  │  ────────────    │  │  ────────────    │          │
│  │  Tech: React     │  │  Tech: Next.js   │          │
│  │  [Ver caso] →    │  │  [Ver caso] →    │          │
│  └──────────────────┘  └──────────────────┘          │
│                                                         │
│  ┌──────────────────┐  ┌──────────────────┐          │
│  │   [Screenshot]   │  │   [Screenshot]   │          │
│  │                  │  │                  │          │
│  │  Proyecto 3      │  │  Proyecto 4      │          │
│  │  App Mobile      │  │  Plataforma IA  │          │
│  │  ────────────    │  │  ────────────    │          │
│  │  Tech: Flutter   │  │  Tech: Python    │          │
│  │  [Ver caso] →    │  │  [Ver caso] →    │          │
│  └──────────────────┘  └──────────────────┘          │
└─────────────────────────────────────────────────────────┘
```

---

### 6. **Testimonios / Clientes**

```
┌─────────────────────────────────────────────────────────┐
│                    LO QUE DICEN NUESTROS CLIENTES       │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  "Kcumen transformó nuestra visión en una              │
│   plataforma que superó nuestras expectativas.          │
│   El equipo demostró profesionalismo y expertise        │
│   técnico excepcional."                                │
│                                                         │
│  ─────────────────────────────────────                 │
│  👤 Juan Pérez                                         │
│  CEO, Empresa XYZ                                      │
│                                                         │
│  [Logo] [Logo] [Logo] [Logo] [Logo]                    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 7. **Proceso de Trabajo**

```
┌─────────────────────────────────────────────────────────┐
│               ¿CÓMO TRABAJAMOS?                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│   1️⃣ DESCUBRIMIENTO      2️⃣ DISEÑO           │
│   Análisis de objetivos   Wireframes & UI      │
│   y requerimientos        Design               │
│        ↓                        ↓                │
│                                                         │
│   3️⃣ DESARROLLO          4️⃣ LANZAMIENTO      │
│   Implementación con      Testing & Deployment │
│   mejores prácticas      + Soporte continuo    │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 8. **CTA Final / Contacto**

```
┌─────────────────────────────────────────────────────────┐
│                                                         │
│   ¿LISTO PARA TRANSFORMAR TU PROYECTO?                  │
│                                                         │
│   Hablemos sobre tus necesidades y encontremos            │
│   la mejor solución juntos.                             │
│                                                         │
│   [Agendar Consulta Gratuita]                           │
│                                                         │
│   o escríbenos a: hello@kcumen.co                      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

---

### 9. **Footer**

```
┌─────────────────────────────────────────────────────────┐
│  Logo        │  Servicios    │  Empresa      │  Legal  │
│  Kcumen      │  Web Dev     │  Nosotros     │  Priv.  │
│              │  IA Solutions │  Careers      │  Terms  │
│  ──────────  │  Mobile      │  Blog         │         │
│  📍 Dirección│  Cloud       │  Contacto     │         │
│  📧 hello@   │              │               │         │
│  📱 +1 234   │              │               │         │
└─────────────────────────────────────────────────────────┘
│           © 2026 Kcumen. Todos los derechos reservados │
└─────────────────────────────────────────────────────────┘
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Ancho | Ajustes |
|------------|-------|---------|
| Mobile | < 768px | 1 columna, hamburger menu, texto reducido |
| Tablet | 768px - 1024px | 2 columnas |
| Desktop | > 1024px | 3-4 columnas, mega menu |

---

## ♿ Requisitos de Accibilidad

- [ ] Contraste mínimo 4.5:1 para texto
- [ ] Focus states visibles (outline blue)
- [ ] Labels en todos los formularios
- [ ] Alt text en todas las imágenes
- [ ] Keyboard navigation funcional
- [ ] `prefers-reduced-motion` respetado

---

## ✅ Checklist de Implementación

### Pre-Delivery
- [ ] No emojis como icons (usar SVG)
- [ ] Iconos de Heroicons/Lucide consistentes
- [ ] `cursor-pointer` en todos los elementos clickables
- [ ] Hover states con transiciones 150-300ms
- [ ] Text contrast 4.5:1 mínimo
- [ ] Focus states visibles
- [ ] Responsive en 375px, 768px, 1024px, 1440px

### Tech Stack Recomendado
- **Framework:** Next.js o React
- **Styling:** Tailwind CSS (usa las variables del design system)
- **Icons:** Heroicons o Lucide React
- **Fonts:** Google Fonts (Poppins + Open Sans)

---

## 📂 Archivos del Design System

- [`design-system/kcumen/MASTER.md`](design-system/kcumen/MASTER.md) - Fuente de verdad global

---

## 🚀 Próximos Pasos

1. **Aprobar propuesta** - Revisar y confirmar estructura
2. **Wireframes** - Crear layout visual de cada sección
3. **UI Design** - Diseñar componentes en Figma/FigJam
4. **Desarrollo** - Implementar con Next.js + Tailwind
5. **Testing** - Verificar responsive y accesibilidad
6. **Launch** - Desplegar y monitorizar

---

*Propuesta generada con UI/UX Pro Max Design Intelligence*
