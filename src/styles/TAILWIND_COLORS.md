# Colores del Template - Tailwind CSS

Este documento describe las clases de color disponibles basadas en la paleta de colores del template Aimug.

## Colores Principales

| Clase Tailwind | Valor CSS | Uso |
|----------------|-----------|-----|
| `thm-base` | `#bb54e1` | Color principal púrpura (destacados, links) |
| `thm-primary` | `#00CB88` | Verde principal (CTAs primarios) |
| `thm-extra` | `#00B67A` | Verde secundario |
| `thm-gray` | `#A1AAC9` | Texto secundario |
| `thm-white` | `#ffffff` | Texto/blancos |
| `thm-black` | `#000000` | Texto negro |

## Colores de Fondo

| Clase Tailwind | Valor CSS | Uso |
|----------------|-----------|-----|
| `thm-body-bg` | `#111022` | Fondo principal oscuro |
| `thm-main-bg` | `#15152c` | Fondo de tarjetas/secciones |
| `thm-gray-bg` | `#858585` | Fondo gris |

## Colores de Borde

| Clase Tailwind | Valor CSS | Uso |
|----------------|-----------|-----|
| `thm-bdr-color` | `#3C3C77` | Bordes y separadores |

## Gradientes

| Clase Tailwind | Valor CSS | Uso |
|----------------|-----------|-----|
| `gradient-purple` | `#8F79FF` | Púrpura para gradientes |
| `gradient-blue` | `#426BFF` | Azul para gradientes |
| `bg-thm-main` | `linear-gradient(211deg, #8F79FF 13.4%, #426BFF 118.74%)` | Gradiente principal del template |

## Uso en Componentes

### Botones
```astro
<!-- Botón primario con gradiente -->
<button class="px-6 py-3 bg-thm-main text-thm-white rounded-lg font-semibold">
  Click aquí
</button>

<!-- Botón secundario con borde -->
<button class="px-6 py-3 border border-thm-bdr-color text-thm-white rounded-lg hover:bg-thm-base">
  Más información
</button>
```

### Fondos
```astro
<!-- Fondo principal -->
<div class="bg-thm-body-bg">
  Contenido
</div>

<!-- Tarjeta -->
<div class="bg-thm-main-bg border border-thm-bdr-color rounded-lg p-6">
  Contenido
</div>
```

### Texto
```astro
<!-- Texto principal -->
<p class="text-thm-white">Texto blanco</p>

<!-- Texto secundario -->
<p class="text-thm-gray">Texto gris</p>

<!-- Texto con color principal -->
<p class="text-thm-base">Texto púrpura</p>
```

## Notas

- Los colores están definidos en `src/styles/global.css` usando la sintaxis `@theme` de Tailwind v4
- El purgado de CSS para producción está configurado automáticamente por Tailwind v4
- No es necesario migrar todos los componentes a Tailwind de inmediato; se puede hacer gradualmente
