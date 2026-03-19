"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Verify a Cloudflare Turnstile token server-side.
 * Returns true if the token is valid.
 */
async function verifyTurnstile(token: string): Promise<boolean> {
  const secret = process.env.TURNSTILE_SECRET_KEY;
  if (!secret) {
    // If no secret is configured (e.g. local dev without .dev.vars), skip verification
    console.warn("TURNSTILE_SECRET_KEY not set — skipping Turnstile verification");
    return true;
  }

  const formData = new FormData();
  formData.append("secret", secret);
  formData.append("response", token);

  try {
    const res = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      { method: "POST", body: formData }
    );
    const data = (await res.json()) as { success: boolean };
    return data.success === true;
  } catch {
    return false;
  }
}

/**
 * Build a plain HTML email string without any React/Node.js SSR dependencies.
 *
 * Cloudflare Workers Edge runtime does NOT support:
 * - Resend's `react:` property (uses ReactDOMServer internally)
 * - @react-email/components (imports Node.js-specific modules at module level)
 *
 * Solution: build the HTML string directly and pass `html:` to Resend.
 * See: https://resend.com/docs/send-with-cloudflare-workers
 */
function buildContactEmailHtml({
  nombre,
  email,
  empresa,
  mensaje,
}: {
  nombre: string;
  email: string;
  empresa?: string;
  mensaje: string;
}): string {
  const baseUrl = "https://kcumen.co";
  const currentYear = new Date().getFullYear();
  const empresaRow = empresa
    ? `<tr><td style="font-size:14px;line-height:1.5;margin-top:16px;margin-bottom:16px;color:#1f2937;padding:4px 0;"><strong>Empresa:</strong> ${empresa}</td></tr>`
    : "";

  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"></head>
<body style="font-family:HelveticaNeue,Helvetica,Arial,sans-serif;background-color:#efeef1;margin:0;padding:0;">
  <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation" style="max-width:580px;margin:30px auto;">
    <tbody><tr><td>
      <!-- Main card -->
      <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
        style="background-color:#ffffff;padding:30px;">
        <tbody><tr><td>
          <!-- Logo -->
          <img src="${baseUrl}/favicon-kcumen.png" alt="Kcumen" width="48" height="48"
            style="display:block;margin:0 auto 20px;border-radius:8px;" />
          <!-- Decorative line -->
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation">
            <tbody><tr>
              <td style="border-bottom:1px solid #eeeeee;width:249px;"></td>
              <td style="border-bottom:1px solid #9146ff;width:102px;"></td>
              <td style="border-bottom:1px solid #eeeeee;width:249px;"></td>
            </tr></tbody>
          </table>
          <!-- Content -->
          <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
            style="padding:5px 20px 0;">
            <tbody><tr><td>
              <p style="font-size:14px;line-height:1.5;margin:16px 0;color:#1f2937;">Hola,</p>
              <p style="font-size:14px;line-height:1.5;margin:16px 0;color:#1f2937;">
                Has recibido un nuevo mensaje de contacto en
                <a href="https://kcumen.co" style="color:#067df7;text-decoration:underline;">Kcumen</a>:
              </p>
              <!-- Contact details card -->
              <table align="center" width="100%" border="0" cellpadding="0" cellspacing="0" role="presentation"
                style="background-color:#f9fafb;padding:20px;border-radius:8px;margin-top:16px;">
                <tbody>
                  <tr><td style="font-size:12px;font-weight:bold;color:#6b7280;text-transform:uppercase;padding-bottom:12px;">
                    Datos del contacto
                  </td></tr>
                  <tr><td style="font-size:14px;line-height:1.5;color:#1f2937;padding:4px 0;">
                    <strong>Nombre:</strong> ${nombre || "No especificado"}
                  </td></tr>
                  <tr><td style="font-size:14px;line-height:1.5;color:#1f2937;padding:4px 0;">
                    <strong>Email:</strong>
                    <a href="mailto:${email}" style="color:#067df7;">${email}</a>
                  </td></tr>
                  ${empresaRow}
                </tbody>
              </table>
              <!-- Message -->
              <p style="font-size:12px;font-weight:bold;color:#6b7280;text-transform:uppercase;margin:16px 0 8px;">Mensaje</p>
              <p style="font-size:14px;line-height:1.5;color:#1f2937;background-color:#f9fafb;padding:16px;border-radius:8px;margin:0 0 16px;">
                ${mensaje}
              </p>
              <p style="font-size:14px;line-height:1.5;color:#6b7280;margin:16px 0;">
                Este mensaje fue enviado desde el formulario de contacto de tu sitio web.
              </p>
            </td></tr></tbody>
          </table>
        </td></tr></tbody>
      </table>
      <!-- Footer -->
      <p style="font-size:14px;line-height:24px;text-align:center;color:#706e7b;margin:16px 0;">
        &copy; ${currentYear}
        <a href="https://kcumen.co" style="color:#067df7;font-weight:bold;">Kcumen</a>.
        Todos los derechos reservados.<br>
        Expertos en desarrollo web y soluciones con IA
      </p>
    </td></tr></tbody>
  </table>
</body>
</html>`;
}

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const empresa = formData.get("empresa") as string;
  const mensaje = formData.get("mensaje") as string;
  const turnstileToken = formData.get("turnstileToken") as string;

  if (!email || !mensaje) {
    return { success: false, error: "Email y mensaje son requeridos" };
  }

  // Verify Turnstile token before sending the email
  const turnstileValid = await verifyTurnstile(turnstileToken || "");
  if (!turnstileValid) {
    return { success: false, error: "Verificación de seguridad fallida. Por favor, inténtalo de nuevo." };
  }

  try {
    const emailHtml = buildContactEmailHtml({ nombre, email, empresa, mensaje });

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "hello@kcumen.co",
      replyTo: email,
      subject: `Nuevo contacto de ${nombre || email}`,
      html: emailHtml,
    });

    if (error) {
      console.error("Resend error:", error);
      return { success: false, error: error.message };
    }

    return { success: true, data };
  } catch (err) {
    console.error("Error sending email:", err);
    return { success: false, error: "Error al enviar el mensaje" };
  }
}
