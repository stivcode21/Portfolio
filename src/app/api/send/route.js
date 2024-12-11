import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parseamos los datos del cuerpo de la solicitud
    const { email, subject, message } = await req.json();

    // Enviamos el correo utilizando los datos del formulario
    const { data, error } = await resend.emails.send({
      from: "Stiv <contacto@stivcode.com>",
      to: ["contacto@stivcode.com"],
      subject: `Nuevo mensaje: ${subject}`,
      html: `
        <html>
          <body style="font-family: Arial, sans-serif; color: #222;">
            <h2>Nuevo mensaje de contacto</h2>
            <p><strong>De:</strong> ${email}</p>
            <p><strong>Asunto:</strong> ${subject}</p>
            <p><strong>Mensaje:</strong></p>
            <p>${message}</p>
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
