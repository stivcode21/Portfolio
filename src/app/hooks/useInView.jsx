"use cliente"
import { useEffect, useState } from 'react'

export const useInView = (options) => {
    const [isVisible, setIsVisible] = useState(false);
    const [ref, setRef] = useState(null);
    const [hasBeenVisible, setHasBeenVisible] = useState(false); // Estado para saber si ya fue visible

    useEffect(() => {
        if (!ref) return;

        //API de JavaScript que permite observar cuando un elemento entra o sale del viewport
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsVisible(true); // Componente visible
                setHasBeenVisible(true); // Marcar como ya visible
            };
        },
            options //el umbral de visibilidad
        );
        observer.observe(ref); //elemento a observar

        return () => {
            observer.disconnect(); //limpiamos el observador para evitar fugas de memoria
        };
    }, [ref, options]);

    // Una vez visible, ya no vuelve a desaparecer
    return { isVisible: hasBeenVisible || isVisible, setRef };
};
