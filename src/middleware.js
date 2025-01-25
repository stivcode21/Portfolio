// Importa la función para crear un middleware de internacionalización
import createMiddleware from "next-intl/middleware";

// Importa la configuración de rutas para locales (idiomas) definida en otro archivo
import { routing } from "./i18n/routing";

// Crea y exporta el middleware utilizando la configuración de rutas
export default createMiddleware(routing);

// Configuración del middleware para definir las rutas que manejará
export const config = {
  // Define los patrones de URL donde se aplicará el middleware:
  // "/" aplica al home, y "/(es|en)/:path*" aplica a rutas con los locales 'es' o 'en'
  matcher: ["/", "/(es|en)/:path*"],
};
