import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Text,
  Img,
  Link,
} from "@react-email/components";

interface ContactEmailProps {
  nombre: string;
  email: string;
  empresa?: string;
  mensaje: string;
}

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://kcumen.co";

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
          fontFamily: "HelveticaNeue, Helvetica, Arial, sans-serif",
          backgroundColor: "#efeef1",
          margin: 0,
          padding: 0,
        }}
      >
        {/* Main Content - Logo inside */}
        <Container
          style={{
            maxWidth: "580px",
            backgroundColor: "rgb(255, 255, 255)",
            marginBottom: "30px",
            marginTop: "30px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          {/* Outer table with 30px padding */}
          <table
            align="center"
            width="100%"
            border={0}
            cellPadding={0}
            cellSpacing={0}
            role="presentation"
            style={{ padding: "30px" }}
          >
            <tbody>
              <tr>
                <td>
                  {/* Logo - just above the decorative line */}
                  <Img
                    src={`${baseUrl}/favicon-kcumen.png`}
                    alt="Kcumen"
                    width="48"
                    height="48"
                    style={{
                      display: "block",
                      margin: "0 auto 20px",
                      borderRadius: "8px",
                    }}
                  />

                  {/* Decorative Line */}
                  <table
                    align="center"
                    width="100%"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            borderBottom: "1px solid #eeeeee",
                            width: "249px",
                          }}
                        ></td>
                        <td
                          style={{
                            borderBottom: "1px solid #9146ff",
                            width: "102px",
                          }}
                        ></td>
                        <td
                          style={{
                            borderBottom: "1px solid #eeeeee",
                            width: "249px",
                          }}
                        ></td>
                      </tr>
                    </tbody>
                  </table>

                  {/* Inner section with 20px horizontal padding */}
                  <table
                    align="center"
                    width="100%"
                    border={0}
                    cellPadding={0}
                    cellSpacing={0}
                    role="presentation"
                    style={{
                      paddingTop: "5px",
                      paddingRight: "20px",
                      paddingLeft: "20px",
                    }}
                  >
                    <tbody>
                      <tr>
                        <td>
                          {/* Greeting */}
                          <Text
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              marginTop: "16px",
                              marginBottom: "16px",
                              color: "#1f2937",
                            }}
                          >
                            Hola,
                          </Text>
                          <Text
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              marginTop: "16px",
                              marginBottom: "16px",
                              color: "#1f2937",
                            }}
                          >
                            Has recibido un nuevo mensaje de contacto en{" "}
                            <Link
                              href="https://kcumen.co"
                              style={{
                                color: "#067df7",
                                textDecorationLine: "underline",
                              }}
                            >
                              Kcumen
                            </Link>
                            :
                          </Text>

                          {/* Contact Details Card */}
                          <table
                            align="center"
                            width="100%"
                            border={0}
                            cellPadding={0}
                            cellSpacing={0}
                            role="presentation"
                            style={{
                              backgroundColor: "#f9fafb",
                              padding: "20px",
                              borderRadius: "8px",
                              marginTop: "16px",
                            }}
                          >
                            <tbody>
                              <tr>
                                <td>
                                  <Text
                                    style={{
                                      fontSize: "12px",
                                      fontWeight: "bold",
                                      color: "#6b7280",
                                      textTransform: "uppercase",
                                      marginBottom: "12px",
                                    }}
                                  >
                                    Datos del contacto
                                  </Text>

                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "1.5",
                                      marginTop: "16px",
                                      marginBottom: "16px",
                                      color: "#1f2937",
                                    }}
                                  >
                                    <strong>Nombre:</strong>{" "}
                                    {nombre || "No especificado"}
                                  </Text>

                                  <Text
                                    style={{
                                      fontSize: "14px",
                                      lineHeight: "1.5",
                                      marginTop: "16px",
                                      marginBottom: "16px",
                                      color: "#1f2937",
                                    }}
                                  >
                                    <strong>Email:</strong>{" "}
                                    <Link
                                      href={`mailto:${email}`}
                                      style={{ color: "#067df7" }}
                                    >
                                      {email}
                                    </Link>
                                  </Text>

                                  {empresa && (
                                    <Text
                                      style={{
                                        fontSize: "14px",
                                        lineHeight: "1.5",
                                        marginTop: "16px",
                                        marginBottom: "16px",
                                        color: "#1f2937",
                                      }}
                                    >
                                      <strong>Empresa:</strong> {empresa}
                                    </Text>
                                  )}
                                </td>
                              </tr>
                            </tbody>
                          </table>

                          {/* Message */}
                          <Text
                            style={{
                              fontSize: "12px",
                              fontWeight: "bold",
                              color: "#6b7280",
                              textTransform: "uppercase",
                              marginTop: "16px",
                              marginBottom: "8px",
                            }}
                          >
                            Mensaje
                          </Text>
                          <Text
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              marginTop: "16px",
                              marginBottom: "16px",
                              color: "#1f2937",
                              backgroundColor: "#f9fafb",
                              padding: "16px",
                              borderRadius: "8px",
                            }}
                          >
                            {mensaje}
                          </Text>

                          {/* Footer Note */}
                          <Text
                            style={{
                              fontSize: "14px",
                              lineHeight: "1.5",
                              marginTop: "16px",
                              marginBottom: "16px",
                              color: "#6b7280",
                            }}
                          >
                            Este mensaje fue enviado desde el formulario de
                            contacto de tu sitio web.
                          </Text>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </Container>

        {/* Footer */}
        <Container
          style={{
            maxWidth: "580px",
            marginRight: "auto",
            marginLeft: "auto",
          }}
        >
          <Section>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                textAlign: "center",
                color: "#706e7b",
                marginTop: "16px",
                marginBottom: "16px",
              }}
            >
              © 2026{" "}
              <Link
                href="https://kcumen.co"
                style={{ color: "#067df7", fontWeight: "bold" }}
              >
                Kcumen
              </Link>
              . Todos los derechos reservados.
              <br />
              Expertos en desarrollo web y soluciones con IA
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default ContactEmail;
