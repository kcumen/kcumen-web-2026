"use server";

import { Resend } from "resend";

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
    const data = await resend.emails.send({
      from: process.env.EMAIL_FROM || "onboarding@resend.dev",
      to: process.env.EMAIL_TO || "hello@kcumen.co",
      replyTo: email,
      subject: `Nuevo contacto de ${nombre || email}`,
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Nombre:</strong> ${nombre || "No especificado"}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Empresa:</strong> ${empresa || "No especificada"}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${mensaje}</p>
      `,
    });

    return { success: true, data };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Error al enviar el mensaje" };
  }
}
