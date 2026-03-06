# Plan pendiente: cumplimiento reforzado de cookies para UE

## Objetivo

Completar la implementación del consentimiento de cookies para alinearla mejor con los requisitos europeos (GDPR + ePrivacy), manteniendo el diseño visual actual del banner.

## Estado actual

Ya está implementado en `src/components/CookieConsent.tsx`:

- Banner visual de consentimiento.
- Opciones para `Aceptar todo`, `Rechazar no esenciales` y `Guardar preferencias`.
- Preferencias analíticas desactivadas por defecto.
- Persistencia de la decisión del usuario en `localStorage`.
- Evento personalizado `kcumen-cookie-consent-change` para conectar scripts según consentimiento.

## Tareas pendientes recomendadas

### 1. Bloquear scripts no esenciales hasta consentimiento explícito

**Objetivo:** evitar que analytics, píxeles o herramientas de tracking se carguen antes del consentimiento válido.

#### Acciones
- Revisar si existen o se añadirán scripts como Google Analytics, Google Tag Manager, Meta Pixel, Hotjar, LinkedIn Insight, etc.
- Cargar esos scripts solo cuando el usuario:
  - acepte todas las cookies, o
  - active explícitamente la categoría analítica y guarde preferencias.
- Evitar cualquier inicialización automática previa desde `layout.tsx`, `page.tsx` u otros componentes.
- Escuchar el evento `kcumen-cookie-consent-change` para activar/desactivar herramientas según la preferencia guardada.

#### Criterio de aceptación
- Ningún script no esencial se ejecuta antes del consentimiento.
- La activación ocurre solo tras una acción afirmativa del usuario.

---

### 2. Añadir un mecanismo permanente para reabrir preferencias

**Objetivo:** permitir que el usuario cambie su decisión en cualquier momento, como exigen buenas prácticas de cumplimiento.

#### Acciones
- Añadir un enlace o botón visible en el footer, por ejemplo: `Preferencias de cookies`.
- Al pulsarlo, reabrir el componente de cookies aunque ya exista una decisión guardada.
- Permitir modificar las preferencias sin tener que borrar manualmente `localStorage`.

#### Criterio de aceptación
- El usuario puede reabrir el panel y cambiar su consentimiento en cualquier momento desde la interfaz.

---

### 3. Crear páginas legales reales

**Objetivo:** dar soporte documental al banner y mejorar cumplimiento, transparencia y confianza.

#### Acciones
- Crear una página de `Política de Cookies`.
- Crear o completar una página de `Política de Privacidad`.
- Incluir en esas páginas:
  - qué cookies se usan,
  - finalidad,
  - base legal,
  - duración,
  - terceros implicados,
  - instrucciones para retirar consentimiento,
  - datos de contacto para ejercer derechos.
- Enlazar estas páginas desde el banner y desde el footer.

#### Criterio de aceptación
- El usuario puede consultar información clara y específica sobre cookies y tratamiento de datos.

---

### 4. Sustituir texto genérico por información real de proveedores

**Objetivo:** evitar descripciones demasiado generales que podrían no ser suficientes ante una revisión legal.

#### Acciones
- Si se usa analítica, indicar exactamente qué proveedor la presta.
- Documentar nombre de cookies, finalidad y tiempo de conservación.
- Separar por categorías si en el futuro se añaden marketing, personalización o preferencias.

#### Criterio de aceptación
- La información de cookies coincide con el comportamiento técnico real del sitio.

---

### 5. Mejorar trazabilidad interna del consentimiento

**Objetivo:** dejar una base técnica más sólida para gestión futura.

#### Acciones
- Estandarizar nombres de claves de consentimiento.
- Añadir versión de política o versión de consentimiento para poder volver a pedirlo si cambian categorías o finalidades.
- Definir una pequeña utilidad reusable para leer/escribir preferencias de cookies.

#### Criterio de aceptación
- La gestión del consentimiento queda preparada para evolucionar sin rehacer el componente.

---

### 6. Revisar accesibilidad y validación final

**Objetivo:** asegurar buena experiencia de usuario y reducir alertas de herramientas.

#### Acciones
- Revisar foco, navegación por teclado y etiquetas accesibles.
- Ajustar la implementación de atributos ARIA si alguna herramienta sigue reportando falsos positivos.
- Verificar comportamiento responsive y contraste visual.

#### Criterio de aceptación
- El banner funciona correctamente con teclado y lectores de pantalla.
- No quedan incidencias relevantes de accesibilidad asociadas al componente.

## Orden recomendado de implementación

1. Bloqueo real de scripts no esenciales.
2. Reapertura de preferencias desde footer u otro punto fijo.
3. Páginas legales reales.
4. Información detallada de proveedores/cookies.
5. Refactor técnico de utilidades de consentimiento.
6. Revisión final de accesibilidad y validación.

## Nota

Este documento no sustituye asesoría jurídica. Sirve como plan técnico-práctico para acercar el sitio a un cumplimiento más sólido sin perder el diseño visual actual.