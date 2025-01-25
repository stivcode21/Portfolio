"use client";
import { useState } from "react";
import { LanguageIcon } from "@heroicons/react/24/solid";
import { Link } from "@/i18n/routing";
import { useTheme } from "@/app/hooks/ThemeContext";

const LanguageMenu = () => {
    const { isDarkMode } = useTheme();
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen((prev) => !prev);
    };

    return (
        <div className="relative">
            {/* Botón para abrir/cerrar el menú */}
            <button onClick={toggleModal} className="relative mt-2">
                <LanguageIcon
                    className={`w-6 h-6 ${isDarkMode
                        ? "fill-light-text hover:fill-light-textGray"
                        : "fill-dark-textGray hover:fill-dark-text"
                        }`} />
            </button>

            {/* Modal para cambiar idioma */}
            {isModalOpen && (
                <div className={`animate-slideDownFadeIn absolute top-full mt-2.5 right-0 w-14 p-1 flex flex-col items-center justify-center transition-all ease-in-out
                ${isDarkMode ? 'bg-light-bg border-light-textGray' : 'bg-[#191A1C] border-[#555] '} shadow-[#000003] rounded-2xl shadow-md border-2 `}>
                    <Link href="es" className="block py-2 text-sm rounded">
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-105 rounded-full" width="28" height="28" viewBox="0 0 512 512"><mask id="circleFlagsEs0"><circle cx="256" cy="256" r="256" fill="#fff" /></mask><g mask="url(#circleFlagsEs0)"><path fill="#ffda44" d="m0 128l256-32l256 32v256l-256 32L0 384Z" /><path fill="#d80027" d="M0 0h512v128H0zm0 384h512v128H0z" /><g fill="#eee"><path d="M144 304h-16v-80h16zm128 0h16v-80h-16z" /><ellipse cx="208" cy="296" rx="48" ry="32" /></g><g fill="#d80027"><rect width="16" height="24" x="128" y="192" rx="8" /><rect width="16" height="24" x="272" y="192" rx="8" /><path d="M208 272v24a24 24 0 0 0 24 24a24 24 0 0 0 24-24v-24h-24z" /></g><rect width="32" height="16" x="120" y="208" fill="#ff9811" ry="8" /><rect width="32" height="16" x="264" y="208" fill="#ff9811" ry="8" /><rect width="32" height="16" x="120" y="304" fill="#ff9811" rx="8" /><rect width="32" height="16" x="264" y="304" fill="#ff9811" rx="8" /><path fill="#ff9811" d="M160 272v24c0 8 4 14 9 19l5-6l5 10a21 21 0 0 0 10 0l5-10l5 6c6-5 9-11 9-19v-24h-9l-5 8l-5-8h-10l-5 8l-5-8z" /><path fill="#d80027" d="M122 248a4 4 0 0 0-4 4a4 4 0 0 0 4 4h172a4 4 0 0 0 4-4a4 4 0 0 0-4-4zm0 24a4 4 0 0 0-4 4a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4a4 4 0 0 0-4-4zm144 0a4 4 0 0 0-4 4a4 4 0 0 0 4 4h28a4 4 0 0 0 4-4a4 4 0 0 0-4-4z" /><path fill="#eee" d="M196 168c-7 0-13 5-15 11l-5-1c-9 0-16 7-16 16s7 16 16 16c7 0 13-4 15-11a16 16 0 0 0 17-4a16 16 0 0 0 17 4a16 16 0 1 0 10-20a16 16 0 0 0-27-5q-4.5-6-12-6m0 8c5 0 8 4 8 8c0 5-3 8-8 8c-4 0-8-3-8-8c0-4 4-8 8-8m24 0c5 0 8 4 8 8c0 5-3 8-8 8c-4 0-8-3-8-8c0-4 4-8 8-8m-44 10l4 1l4 8c0 4-4 7-8 7s-8-3-8-8c0-4 4-8 8-8m64 0c5 0 8 4 8 8c0 5-3 8-8 8c-4 0-8-3-8-7l4-8z" /><path fill="none" d="M220 284v12c0 7 5 12 12 12s12-5 12-12v-12z" /><path fill="#ff9811" d="M200 160h16v32h-16z" /><path fill="#eee" d="M208 224h48v48h-48z" /><path fill="#d80027" d="m248 208l-8 8h-64l-8-8c0-13 18-24 40-24s40 11 40 24m-88 16h48v48h-48z" /><rect width="20" height="32" x="222" y="232" fill="#d80027" rx="10" ry="10" /><path fill="#ff9811" d="M168 232v8h8v16h-8v8h32v-8h-8v-16h8v-8zm8-16h64v8h-64z" /><g fill="#ffda44"><circle cx="186" cy="202" r="6" /><circle cx="208" cy="202" r="6" /><circle cx="230" cy="202" r="6" /></g><path fill="#d80027" d="M169 272v43a24 24 0 0 0 10 4v-47zm20 0v47a24 24 0 0 0 10-4v-43z" /><g fill="#338af3"><circle cx="208" cy="272" r="16" /><rect width="32" height="16" x="264" y="320" ry="8" /><rect width="32" height="16" x="120" y="320" ry="8" /></g></g></svg>
                    </Link>
                    <Link href="en" className="block py-2 text-sm rounded" >
                        <svg xmlns="http://www.w3.org/2000/svg" className="hover:scale-105 rounded-full" width="28" height="28" viewBox="0 0 64 64"><path fill="#ed4c5c" d="M48 6.6C43.3 3.7 37.9 2 32 2v4.6z" /><path fill="#fff" d="M32 11.2h21.6C51.9 9.5 50 7.9 48 6.6H32z" /><path fill="#ed4c5c" d="M32 15.8h25.3c-1.1-1.7-2.3-3.2-3.6-4.6H32z" /><path fill="#fff" d="M32 20.4h27.7c-.7-1.6-1.5-3.2-2.4-4.6H32z" /><path fill="#ed4c5c" d="M32 25h29.2c-.4-1.6-.9-3.1-1.5-4.6H32z" /><path fill="#fff" d="M32 29.7h29.9c-.1-1.6-.4-3.1-.7-4.6H32z" /><path fill="#ed4c5c" d="M61.9 29.7H32V32H2c0 .8 0 1.5.1 2.3h59.8c.1-.8.1-1.5.1-2.3s0-1.6-.1-2.3" /><path fill="#fff" d="M2.8 38.9h58.4c.4-1.5.6-3 .7-4.6H2.1c.1 1.5.3 3.1.7 4.6" /><path fill="#ed4c5c" d="M4.3 43.5h55.4c.6-1.5 1.1-3 1.5-4.6H2.8c.4 1.6.9 3.1 1.5 4.6" /><path fill="#fff" d="M6.7 48.1h50.6c.9-1.5 1.7-3 2.4-4.6H4.3c.7 1.6 1.5 3.1 2.4 4.6" /><path fill="#ed4c5c" d="M10.3 52.7h43.4c1.3-1.4 2.6-3 3.6-4.6H6.7c1 1.7 2.3 3.2 3.6 4.6" /><path fill="#fff" d="M15.9 57.3h32.2c2.1-1.3 3.9-2.9 5.6-4.6H10.3c1.7 1.8 3.6 3.3 5.6 4.6" /><path fill="#ed4c5c" d="M32 62c5.9 0 11.4-1.7 16.1-4.7H15.9c4.7 3 10.2 4.7 16.1 4.7" /><path fill="#428bc1" d="M16 6.6c-2.1 1.3-4 2.9-5.7 4.6c-1.4 1.4-2.6 3-3.6 4.6c-.9 1.5-1.8 3-2.4 4.6c-.6 1.5-1.1 3-1.5 4.6c-.4 1.5-.6 3-.7 4.6c-.1.8-.1 1.6-.1 2.4h30V2c-5.9 0-11.3 1.7-16 4.6" /><path fill="#fff" d="m25 3l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm4 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm20 6l.5 1.5H31l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H23l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H15l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm12 6l.5 1.5H27l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H19l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm-8 0l.5 1.5H11l-1.2 1l.4 1.5l-1.2-.9l-1.2.9l.4-1.5l-1.2-1h1.5zm2.8-14l1.2-.9l1.2.9l-.5-1.5l1.2-1h-1.5L13 9l-.5 1.5h-1.4l1.2.9zm-8 12l1.2-.9l1.2.9l-.5-1.5l1.2-1H5.5L5 21l-.5 1.5h-1c0 .1-.1.2-.1.3l.8.6z" /></svg>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default LanguageMenu;
