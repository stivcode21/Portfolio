//endpoint - senf
//Recibimos los datos del formulario (email, subject, message) desde el cuerpo de la solicitud.
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
console.log(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    // Parseamos los datos del cuerpo de la solicitud
    const { email, subject, message } = await req.json();

    // Enviamos el correo utilizando los datos del formulario
    const { data, error } = await resend.emails.send({
      from: "Stiv <stivenelcodificador@gmail.com>",
      to: ["stivenelcodificador@gmail.com"], // Tu dirección de correo para recibir mensajes
      subject: `Nuevo mensaje: ${subject}`,
      react: (
        <>
          <p>
            <strong>De:</strong> {email}
          </p>
          <p>
            <strong>Asunto:</strong> {subject}
          </p>
          <p>
            <strong>Mensaje:</strong>
          </p>
          <p>{message}</p>
        </>
      ),
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
