import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message, token } = await req.json();

    // Verifica el token con Google reCAPTCHA
    const recaptchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify`,
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          secret: process.env.RECAPTCHA_SECRET_KEY,
          response: token,
        }),
      }
    );
    const recaptchaData = await recaptchaResponse.json();

    if (!recaptchaData.success || recaptchaData.score < 0.5) {
      return Response.json(
        { error: "Falló la validación reCAPTCHA" },
        { status: 400 }
      );
    }

    // Enviar correo si el token es válido
    const { data, error } = await resend.emails.send({
      from: "Stiv <contacto@stivcode.com>",
      to: ["contacto@stivcode.com"],
      subject: `Nuevo mensaje: ${subject}`,
      html: `
        <html>
          <body>
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>De:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong> ${message}</p>
          </body>
        </html>
      `,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data, { status: 200 });
  } catch (error) {
    return Response.json(
      { error: "Error al enviar el correo" },
      { status: 500 }
    );
  }
}
