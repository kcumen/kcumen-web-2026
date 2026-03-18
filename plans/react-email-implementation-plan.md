# Plan de Implementación: React Email con Cloudflare Workers

## Resumen

Implementar **React Email** para mejorar las plantillas de email transaccionales del proyecto, manteniendo compatibilidad con Cloudflare Workers.

---

## Análisis de Viabilidad

### ✅ Compatible con:
- Cloudflare Workers con `nodejs_compat` (ya configurado en el proyecto)
- Resend SDK (ya integrado)
- Next.js App Router (estructura actual del proyecto)

### ⚠️ Consideraciones:
- React Email usa rendering de React que requiere Node.js APIs
- El paquete `@react-email/render` debe funcionar en Edge runtime
- Algunos componentes de React Email pueden tener problemas de compatibilidad

---

## Pasos de Implementación

### 1. Instalar dependencias

```bash
npm install react-email @react-email/render @react-email/components
```

### 2. Crear estructura de plantillas

```
src/
├── emails/
│   ├── index.ts          # Export de todas las plantillas
│   ├── ContactEmail.tsx  # Email de contacto
│   └── theme.ts         # Configuración de estilos
```

### 3. Crear componente de email de contacto

```tsx
import { Html, Head, Preview, Body, Container, Section, Text, Button } from "@react-email/components";

interface ContactEmailProps {
  nombre: string;
  email: string;
  empresa?: string;
  mensaje: string;
}

export const ContactEmail = ({ nombre, email, empresa, mensaje }: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo contacto de {nombre || email}</Preview>
      <Body style={{ fontFamily: "system-ui, sans-serif" }}>
        <Container>
          <Section>
            <Text style={{ fontSize: "24px", fontWeight: "bold" }}>
              Nuevo mensaje de contacto
            </Text>
            <Text><strong>Nombre:</strong> {nombre || "No especificado"}</Text>
            <Text><strong>Email:</strong> {email}</Text>
            {empresa && <Text><strong>Empresa:</strong> {empresa}</Text>}
            <Text><strong>Mensaje:</strong></Text>
            <Text>{mensaje}</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
```

### 4. Actualizar sendEmail.ts

```ts
import { render } from "@react-email/render";
import { ContactEmail } from "@/emails/ContactEmail";

export async function sendEmail(formData: FormData) {
  // ... obtención de datos ...

  const emailHtml = await render(
    ContactEmail({ nombre, email, empresa, mensaje })
  );

  const data = await resend.emails.send({
    from: process.env.EMAIL_FROM,
    to: process.env.EMAIL_TO,
    replyTo: email,
    subject: `Nuevo contacto de ${nombre || email}`,
    html: emailHtml,
  });

  // ... manejo de errores ...
}
```

### 5. Configurar wrangler.toml (verificar)

```toml
compatibility_flags = ["nodejs_compat"]
```

---

## Componentes de React Email disponibles

| Componente | Descripción |
|------------|-------------|
| `Html` | Contenedor HTML del email |
| `Head` | Sección head con meta tags |
| `Body` | Cuerpo del email |
| `Container` | Contenedor central |
| `Section` | Sección agrupada |
| `Text` | Párrafo de texto |
| `Button` | Botón CTA |
| `Link` | Enlace |
| `Image` | Imagen |
| ` Hr` | Línea horizontal |
| `Table` | Tabla |

---

## Beneficios Esperados

1. ✅ **Mantenibilidad** - Plantillas React en lugar de strings HTML
2. ✅ **Componibilidad** - Reutilizar componentes entre emails
3. ✅ **Type safety** - TypeScript con autocompletado
4. ✅ **Preview** - Vista previa en desarrollo
5. ✅ **Responsive** - Emails adaptativos

---

## Riesgo: Edge Runtime

El paquete `@react-email/render` debería funcionar en Edge runtime. Si hay problemas:

1. Verificar que `nodejs_compat` está activo
2. Si falla, usar renderizado en cliente y pasar HTML al servidor
3. Alternativa: pre-renderizar emails en build time

---

## Estimación de Effort

- Instalación y configuración: 15 min
- Crear plantilla de contacto: 30 min
- Integrar con sendEmail: 15 min
- Testing: 15 min

**Total estimado: ~1 hora**
