import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Hr,
} from "@react-email/components";

interface ContactEmailProps {
  nombre: string;
  email: string;
  empresa?: string;
  mensaje: string;
}

export const ContactEmail = ({
  nombre,
  email,
  empresa,
  mensaje,
}: ContactEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Nuevo contacto de {nombre || email}</Preview>
      <Body
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          backgroundColor: "#f8fafc",
          padding: "20px",
        }}
      >
        <Container
          style={{
            backgroundColor: "#ffffff",
            borderRadius: "8px",
            padding: "32px",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "28px",
                fontWeight: "bold",
                color: "#7c3aed",
                marginBottom: "24px",
              }}
            >
              📬 Nuevo mensaje de contacto
            </Text>

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            <Text style={{ fontSize: "16px", color: "#1e293b", marginBottom: "8px" }}>
              <strong style={{ color: "#334155" }}>Nombre:</strong>{" "}
              {nombre || "No especificado"}
            </Text>

            <Text style={{ fontSize: "16px", color: "#1e293b", marginBottom: "8px" }}>
              <strong style={{ color: "#334155" }}>Email:</strong>{" "}
              <a href={`mailto:${email}`} style={{ color: "#7c3aed" }}>
                {email}
              </a>
            </Text>

            {empresa && (
              <Text style={{ fontSize: "16px", color: "#1e293b", marginBottom: "8px" }}>
                <strong style={{ color: "#334155" }}>Empresa:</strong> {empresa}
              </Text>
            )}

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            <Text style={{ fontSize: "16px", color: "#1e293b", marginBottom: "12px" }}>
              <strong style={{ color: "#334155" }}>Mensaje:</strong>
            </Text>

            <Text
              style={{
                fontSize: "16px",
                color: "#475569",
                lineHeight: "1.6",
                backgroundColor: "#f8fafc",
                padding: "16px",
                borderRadius: "8px",
                borderLeft: "4px solid #7c3aed",
              }}
            >
              {mensaje}
            </Text>

            <Hr style={{ borderColor: "#e2e8f0", margin: "24px 0" }} />

            <Text style={{ fontSize: "14px", color: "#94a3b8", textAlign: "center" }}>
              Mensaje enviado desde el formulario de contacto de{" "}
              <a href="https://kcumen.co" style={{ color: "#7c3aed" }}>
                kcumen.co
              </a>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};
