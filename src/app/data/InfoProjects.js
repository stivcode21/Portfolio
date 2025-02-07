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
    color: "BF1416",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-moviegallery.webp?alt=media&token=c3e0ba0f-4840-4950-9700-d854393160d1",
    subtitle: "Plataforma interactiva de películas",
    description:
      "Cineverse es una plataforma de películas que consume la API de TMDB para obtener información actualizada sobre las últimas películas. Su diseño dinámico permite una experiencia interactiva, con una pancarta principal que muestra una película aleatoria al recargar y filtros para explorar películas por categoría.",
    objetive:
      "Crear una plataforma de películas interactiva que se mantenga siempre actualizada mediante el consumo de APIs, proporcionando una navegación fluida y atractiva para los usuarios.",
    features: [
      "Pancarta principal interactiva que cambia aleatoriamente con cada recarga o categoria.",
      "Filtros dinámicos de películas por categoría.",
      "Consumo de la API de TMDB para obtener información en tiempo real.",
      "Diseño completamente responsive para una experiencia fluida en cualquier dispositivo.",
    ],
    skills: [
      "Consumo de APIs externas y manejo de peticiones.",
      "Implementación de filtros dinámicos para mejorar la experiencia de usuario.",
      "Manejo de estados en React para controlar cambios de datos y diseño.",
      "Ampliación de conocimientos en React y optimización del flujo de datos.",
    ],
    challenges: [
      "El consumo de APIs fue un desafío, ya que era la primera vez que trabajaba con una API externa, pero logré solucionarlo gracias a un curso previo.",
      "Implementar la pancarta interactiva fue complicado, ya que debía cambiar aleatoriamente dependiendo de la categoría seleccionada. La solución fue manejar estados en React para actualizar dinámicamente la imagen y la información mostrada.",
    ],
  },

  {
    id: 4,
    color: "#02AC52",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-wppclone.webp?alt=media&token=d9bc7ffe-d2dd-4aba-a95d-3521d4e37fed",
    subtitle: "Web frontend para la clonación de WhatsApp Web",
    description:
      "WhatsApp Clone es una web frontend desarrollada en conjunto con 6 compañeros, donde replicamos y personalizamos varias secciones de la web oficial de WhatsApp. El objetivo principal fue adquirir experiencia en trabajo en equipo y expandir mis conocimientos utilizando frameworks, ya que era la primera vez que trabajaba con ellos. A lo largo del proyecto, implementamos funcionalidades clave y personalizamos la experiencia de usuario.",
    objetive:
      "Aprender y mejorar las habilidades de trabajo en equipo, así como familiarizarme con el uso de frameworks y librerías como React, Material UI, y Tailwind CSS, replicando la funcionalidad y el diseño de WhatsApp Web.",
    features: [
      "Rutas de autenticación.",
      "Funcionalidad para crear un perfil de usuario.",
      "Envío de mensajes entre usuarios.",
      "Envío de emojis mediante una librería dedicada.",
      "Consumo de la librería Material UI para utilizar sus componentes.",
      "Implementación de un tema de colores con Tailwind CSS.",
      "Sección de estados de los usuarios.",
      "Sección de edición de perfil.",
      "Filtrado de mensajes.",
    ],
    skills: [
      "Trabajo en equipo y gestión de proyectos colaborativos.",
      "Habilidades de comunicación, responsabilidad, igualdad, amabilidad y escucha activa en reuniones, utilizando metodología Scrum.",
      "Manejo de rutas y gestión de la navegación en React.",
      "Consumo de librerías como Material UI y Emojis para enriquecer la experiencia del usuario.",
    ],
    challenges: [
      "Aprender a manejar rutas fue uno de los mayores retos, pero mis compañeros me ayudaron a comprenderlas rápidamente.",
      "El manejo de hooks en React fue una habilidad nueva que aprendí gracias al trabajo en equipo.",
      "El consumo de la librería Material UI fue un desafío, pero lo resolvimos consultando la documentación oficial y aplicando los componentes necesarios.",
    ],
  },

  {
    id: 5,
    color: "#FFE500",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-musicplayer.webp?alt=media&token=c9997a06-e23b-4918-8355-1d6c2e10a9e5",
    subtitle: "Reproductor de música online con JavaScript puro",
    description:
      "StivSound es un reproductor de música online que permite escuchar canciones predeterminadas con un diseño responsivo, adaptado para diferentes pantallas. Desarrollado completamente con JavaScript puro, este proyecto ofrece una experiencia de usuario fluida y dinámica, integrando funcionalidades esenciales para la reproducción de audio sin necesidad de recargar la página.",
    objetive:
      "Aprender a manejar, interactuar y controlar archivos de audio en una aplicación web mediante JavaScript, mejorar el manejo del DOM, y reforzar el uso de clases y funciones para estructurar mejor el código.",
    features: [
      "Reproducción de canciones almacenadas en Firebase Storage.",
      "Opciones para avanzar y retroceder entre canciones.",
      "Funcionalidad para eliminar una canción de la lista.",
      "Botón de pausa y reanudación de la reproducción.",
      "Opción para reorganizar la lista de canciones aleatoriamente.",
      "Indicador de duración total de la canción y contador en tiempo real del progreso de reproducción.",
    ],
    skills: [
      "Mejor comprensión y manipulación del DOM con JavaScript.",
      "Manejo y control de archivos de audio en una web.",
      "Implementación de contadores de reproducción.",
      "Desarrollo de una interfaz responsive adaptable a diferentes dispositivos.",
      "Consumo de assets desde Firebase Storage, incluyendo imágenes de previsualización y archivos de audio.",
    ],
    challenges: [
      "Lograr mostrar correctamente la duración de cada canción junto con su contador de reproducción fue un reto, ya que inicialmente no sabía cómo hacerlo. Lo resolví gracias a conceptos aprendidos en un video sobre manejo de audios y eventos en JavaScript.",
      "El manejo de clases en JavaScript era algo nuevo para mí en ese momento, pero este proyecto me ayudó a mejorar mis conocimientos y a estructurar mejor el código con una programación más organizada y reutilizable.",
    ],
  },

  {
    id: 6,
    color: "#FF004B",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-userregister.webp?alt=media&token=668a8916-bfc4-4391-996d-18f0bd1880b8",

    subtitle: "Formulario de registro de usuario con validaciones dinámicas",
    description:
      "User Register es un formulario de registro interactivo desarrollado con JavaScript puro (Vanilla JS) y CSS, donde el usuario completa sus datos paso a paso. A medida que el formulario avanza, se muestra visualmente el progreso en la parte superior, guiando al usuario a través del proceso de registro. Incluye validaciones estrictas que impiden continuar hasta que se cumplan los requisitos establecidos, asegurando una experiencia de usuario fluida y funcional.",
    objetive:
      "Dominar la validación de formularios en JavaScript puro, aprender a manipular el DOM de manera efectiva y desarrollar una solución reutilizable para futuros proyectos que requieran un sistema de registro.",
    features: [
      "Barra de navegación que muestra los pasos completados y pendientes.",
      "Validación de un mínimo de caracteres permitidos en el primer formulario.",
      "Validación de campos completados antes de permitir el avance al siguiente paso.",
      "Validación de correo electrónico y número de teléfono con un mínimo de 10 dígitos.",
      "Funcionalidad para mostrar y ocultar la contraseña.",
      "Opción de reiniciar el formulario si el usuario regresa atrás o finaliza el registro.",
    ],
    skills: [
      "Manejo avanzado de estilos con CSS puro.",
      "Validación de formularios sin el uso de frameworks.",
      "Manipulación del DOM en JavaScript para crear una experiencia dinámica.",
    ],
    challenges: [
      "Inicialmente, no sabía cómo acceder al DOM para hacer dinámico el formulario. Logré resolverlo mediante la manipulación del DOM con JavaScript.",
      "Implementar la barra de navegación fue un reto, ya que requería lógica combinada entre JavaScript y CSS para mostrar correctamente el paso actual e indicar el progreso.",
      "Hacer que los botones permitieran desplazarse entre secciones sin recargar la página fue un desafío, pero gracias a la combinación de CSS y JavaScript, logré una navegación fluida con botones de avanzar y retroceder.",
    ],
  },

  {
    id: 7,
    color: "#00AEFF",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-clotingstore.webp?alt=media&token=82bf7af0-f457-464f-81bc-b83f70bfd63f",
    subtitle: "Diseño de tienda de ropa con React y Tailwind CSS",
    description:
      "Clothing Store es un proyecto enfocado en la presentación de productos en una tienda de ropa, con un diseño adaptativo y una interfaz intuitiva. Incluye una serie de cards para mostrar productos, un menú lateral para cambiar de sección, una barra de navegación superior para filtrar por tipo de prenda y una barra de búsqueda. Este proyecto está centrado en el diseño y la maquetación con React y Tailwind CSS.",
    objetive:
      "Practicar el diseño responsivo y mejorar mis habilidades en React y Tailwind CSS. Aunque este proyecto tiene pocas funciones interactivas, fue clave para afianzar el manejo de estados con useState y la estructura de un diseño adaptable.",
    features: [
      "Menú de carrito con apertura y cierre mediante estado.",
      "Barra de navegación lateral para cambiar de sección.",
      "Diseño de grillas completamente adaptadas a diferentes tamaños de pantalla.",
    ],
    skills: [
      "Mejorar mis habilidades en Tailwind CSS.",
      "Uso del hook useState en React.",
      "Diseño responsivo optimizado.",
      "Familiarización con frameworks y herramientas como Vite para React.",
    ],
    challenges: [
      "Manejo de la lógica de useState para la interacción del carrito, ya que en ese momento aún no dominaba bien el manejo de estados en React.",
      "Familiarizarme con Tailwind CSS y mejorar su implementación en diseños adaptativos.",
    ],
  },

  {
    id: 8,
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-youtube.webp?alt=media&token=c446e186-1be2-40c7-aa01-039e50fdd81e",
    description: "...",
  },

  {
    id: 9,
    color: "#1877F2",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-facebook.webp?alt=media&token=4bd3b48b-129c-41fa-9d30-a45f7f22d249",
    subtitle: "Clon de la página de inicio de sesión de Facebook clásico",
    description:
      "Design Facebook es un proyecto de diseño web en HTML y CSS que replica la interfaz de inicio de sesión de la versión clásica de Facebook. Fue mi primer proyecto después de ver un curso de HTML y CSS, donde puse en práctica conceptos de diseño responsive, modelo de cajas y Flexbox.",
    objetive:
      "Poner a prueba mis conocimientos adquiridos en un curso de diseño web, enfocándome en la maquetación responsive y en el uso de Flexbox. Además, documenté cada paso del proceso durante 8 días para reforzar mi aprendizaje.",
    features: [
      "Diseño responsive adaptable a diferentes pantallas.",
      "HTML y CSS organizados en archivos separados.",
      "Uso de media queries para mejorar la adaptabilidad.",
    ],
    skills: [
      "Diseño responsive.",
      "Manejo del modelo de cajas en CSS.",
      "Uso de Flebox.",
      "Uso de la cascada de CSS y organización de clases.",
    ],
    challenges: [
      "Como era mi primer proyecto real, me tomó tiempo comprender y aplicar correctamente los conceptos de diseño web.",
      "Tuve dificultades iniciales con Flexbox y la estructura del modelo de cajas, pero logré solucionarlas documentando mi proceso y aprendiendo de los errores.",
    ],
  },

  {
    id: 10,
    color: "#0055FF",
    imgPath:
      "https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2Fletras-moneytracking.webp?alt=media&token=87b37a24-9952-4b4c-9767-7fa3d393aac9",
    subtitle: "Gestor de ingresos y egresos con gráficos dinámicos",
    description:
      "Money Tracking es una aplicación web que permite gestionar ingresos y egresos, mostrando un balance actualizado y un registro detallado de las transacciones. Además, integra una gráfica interactiva que representa el balance disponible utilizando la librería ECharts. Desarrollado con JavaScript puro, este proyecto fue una introducción a la manipulación del DOM, el cálculo de totales y porcentajes, y el uso de librerías externas.",
    objetive:
      "Crear un sistema de control financiero con balance de ingresos y egresos, acompañado de una visualización gráfica, para mejorar mis habilidades en el manejo del DOM, cálculos dinámicos en JavaScript y el uso de librerías externas.",
    features: [
      "Consumo de la librería de gráficos ECharts para visualización del balance.",
      "Input para agregar ingresos y egresos.",
      "Cálculo dinámico del ingreso disponible.",
      "Cálculo y visualización del total de ingresos y egresos.",
      "Botón para eliminar ingresos o egresos y recalcular el balance automáticamente.",
      "Registro de todo el historial de transacciones.",
    ],
    skills: [
      "Primer contacto con la manipulación del DOM en JavaScript.",
      "Implementación de cálculos para obtener totales y porcentajes.",
      "Uso de la librería ECharts para gráficos dinámicos.",
      "Extracción de valores desde inputs y manejo de eventos en JavaScript.",
      "Código modular con archivos JavaScript separados.",
      "Trabajo con clases en JavaScript para una mejor organización del código.",
    ],
    challenges: [
      "Lograr que, al eliminar un ingreso o egreso, los cálculos del balance se actualizaran correctamente y se reflejaran en la gráfica. Lo resolví implementando una función `cargaApp` que centraliza todas las funciones necesarias y las ejecuta cada vez que hay un cambio.",
      "Obtener y gestionar correctamente los valores de los inputs para asignarlos como ingreso o egreso. Lo logré accediendo al DOM junto con eventos y operadores lógicos dentro de una función específica.",
      "Como era la primera vez usando una librería externa, entender su documentación y hacer que se integrara correctamente con los valores del balance fue un reto. Sin embargo, logré actualizar la gráfica dinámicamente con cada cambio y mostrar los porcentajes correspondientes.",
    ],
  },
];
