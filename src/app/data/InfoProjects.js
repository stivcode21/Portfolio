export const InfoProjects = [
  {
    id: 1,
    color: "#AA00FF",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-urbanshop.webp?alt=media&token=504601a0-786f-4d87-83c9-1747d28fd02f",
    subtitle: "E-commerce para la venta de zapatos y gorras",
    description:
      "Urban Shop es una tienda en línea diseñada para la venta de zapatos y gorras, con una interfaz atractiva y dinámica. El objetivo principal fue desarrollar un e-commerce con todas sus funcionalidades principales, brindando una experiencia de usuario fluida e intuitiva.",
    objetive:
      "Crear una plataforma de comercio electrónico funcional y escalable, con un diseño atractivo y una experiencia de usuario optimizada para futuras expansiones.",
    features: [
      "Selección de productos al carrito con almacenamiento en",
      "Aumentar y disminuir la cantidad de productos.",
      "Eliminar productos individuales.",
      "Vaciar el carrito por completo.",
      "Cálculo automático del total en la parte inferior del carrito.",
      "Deslizador interactivo para mostrar una serie de gorras.",
    ],
    skills: [
      "Manejo de estados globales con Redux Toolkit.",
      "Uso de localStorage para persistencia de datos.",
      "Aplicación de funciones matemáticas para cálculos en el carrito.",
      "Integración de bibliotecas de sliders (@splidejs/react-splide).",
      "Trabajo con archivos JSON para manejar la data de los productos.",
    ],
    challenges: [
      "Fue la primera vez que utilicé Redux Toolkit, lo que representó un reto inicial. Sin embargo, mediante tutoriales y documentación, logré comprender su flujo de trabajo y aplicarlo exitosamente para gestionar el estado global del carrito.",
      "Al recargar la página, los productos desaparecían. La solución fue almacenar el estado del carrito en localStorage, asegurando que la información se mantuviera intacta después de cada recarga.",
    ],
  },

  {
    id: 2,
    color: "#2FD484",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-frameonix.webp?alt=media&token=b88db105-85a1-4cfc-8db9-86f1d8c27195",
    subtitle: "Web para la documentación de mi librería",
    description:
      "Frameonix es la plataforma web diseñada para documentar mi librería de componentes, proporcionando una introducción detallada, una guía de instalación y uso, información sobre cómo contribuir y documentación específica de cada componente disponible en la librería. Esta web cuenta con una interfaz dinámica, navegación mediante rutas, y un diseño intuitivo para garantizar una excelente experiencia de usuario.",
    objetive:
      "Facilitar el aprendizaje y uso de Frameonix, asegurando que los desarrolladores tengan un punto de partida claro y comprendan cómo utilizar cada componente de la librería de manera eficiente.",
    features: [
      "Manejo de rutas con react-router-dom para una mejor navegación.",
      "Cambio de idioma manualmente mediante i18next.",
      "Diseño responsive con excelente presentación en todas las pantallas.",
      "Detección de sección en pantalla, mostrando en un índice la ubicación actual del usuario.",
      "Componente de terminal interactiva, que permite copiar contenido fácilmente.",
    ],
    skills: [
      "Publicación de una librería en NPM.",
      "Estructuración completa y componentización de un proyecto grande.",
      "Implementación de traducciones locales con i18next.",
      "Manejo de rutas en React utilizando react-router-dom.",
      "Creación de un diseño pensado en la experiencia del usuario.",
      "Aplicación de una paleta de colores unificada para coherencia visual",
    ],
    challenges: [
      "Debido a la gran cantidad de secciones, implementar un sistema de rutas fue esencial para mantener el proyecto ordenado y fácil de escalar.",
      "Configurar múltiples claves para cada traducción de manera manual fue tedioso, pero logré optimizarlo mediante i18next.",
      "Para indicar visualmente en qué sección se encuentra el usuario, implementé IntersectionObserver, detectando el contenedor activo por id y marcándolo en el índice de navegación. El resultado fue una experiencia de usuario más clara y fluida.",
    ],
  },

  {
    id: 3,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-moviegallery.webp?alt=media&token=c3e0ba0f-4840-4950-9700-d854393160d1",
    description: "movie...",
  },

  {
    id: 4,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-wppclone.webp?alt=media&token=d9bc7ffe-d2dd-4aba-a95d-3521d4e37fed",
    description: "name...",
  },

  {
    id: 5,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-musicplayer.webp?alt=media&token=c9997a06-e23b-4918-8355-1d6c2e10a9e5",
    description: "hola mundo aca musicplayer",
  },

  {
    id: 6,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-userregister.webp?alt=media&token=668a8916-bfc4-4391-996d-18f0bd1880b8",
    description: "name...",
  },

  {
    id: 7,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-clotingstore.webp?alt=media&token=82bf7af0-f457-464f-81bc-b83f70bfd63f",
    description: "name...",
  },

  {
    id: 8,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-youtube.webp?alt=media&token=c446e186-1be2-40c7-aa01-039e50fdd81e",
    description: "name...",
  },

  {
    id: 9,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-facebook.webp?alt=media&token=4bd3b48b-129c-41fa-9d30-a45f7f22d249",
    description: "name...",
  },

  {
    id: 10,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-moneytracking.webp?alt=media&token=87b37a24-9952-4b4c-9767-7fa3d393aac9",
    description: "name...",
  },
];
