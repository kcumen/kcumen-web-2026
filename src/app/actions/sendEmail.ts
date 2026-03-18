"use server";

import { Resend } from "resend";
import { render } from "@react-email/render";
import { ContactEmail } from "@/emails/ContactEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: FormData) {
  const nombre = formData.get("nombre") as string;
  const email = formData.get("email") as string;
  const empresa = formData.get("empresa") as string;
  const mensaje = formData.get("mensaje") as string;

  if (!email || !mensaje) {
    return { success: false, error: "Email y mensaje son requeridos" };
  }

  try {
    // Pre-render the React email component to HTML.
    // Cloudflare Workers Edge runtime does not support Resend's `react:` property
    // (which relies on Node.js SSR internals). We must render to HTML first and
    // pass `html:` instead — as documented at https://resend.com/docs/send-with-cloudflare-workers
    const emailHtml = await render(
      ContactEmail({ nombre, email, empresa, mensaje })
    );

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
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Error al enviar el mensaje" };
  }
}
