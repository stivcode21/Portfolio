import { defineRouting } from "next-intl/routing"; // Importa una función para definir la configuración de rutas en internacionalización.
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  // Lista de todos los locales soportados en la aplicación.
  locales: ["en", "es"],

  // Locale predeterminado que se usará si no hay coincidencia con un locale válido.
  defaultLocale: "en",
});

// Wrappers ligeros alrededor de las APIs de navegación de Next.js
// Estos métodos consideran la configuración de rutas definida en `routing`.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
