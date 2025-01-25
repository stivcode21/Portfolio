"use client";
import React, { useEffect, useState } from 'react';
import { NavLinks } from '../data/data';
import { Link } from '@/i18n/routing';
import NavLink from './utils/NavLink';
import MenuOverlay from './utils/MenuOverlay';
import { Bars3Icon, LanguageIcon, XMarkIcon } from "@heroicons/react/24/solid"
import Image from 'next/image';
import ThemeButton from './utils/ThemeButton';
import { useTheme } from '../hooks/ThemeContext';
import LanguageMenu from './utils/LanguageMenu';

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    const [navState, setNavState] = useState(false);


    const { isDarkMode } = useTheme();

    const onNavScroll = () => {
        if (window.scrollY > 40) {
            setNavState(true)
        } else {
            setNavState(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', onNavScroll)

        return () => {
            window.removeEventListener('scroll', onNavScroll);
        }
    }, []);

    const handleMenuClose = () => {
        setNavbarOpen(false); // Cambia el estado para cerrar el menú
    };

    return (
        <nav className={`fixed blur-effect-theme top-0 left-0 right-0 z-50 bg-transparent backdrop-blur-md bg-opacity-70 transition-all ease-in-out duration-300
        ${!navState ? "shadow-none" : "shadow-md shadow-[#00000033]"}
        `}>
            <div className='box flex flex-wrap items-center justify-between py-2'>
                {/* logo */}
                <Link href={"#main"}>
                    <Image src={"/imagenes/logo.png"} width={45} height={45} priority alt='logo stiv' />
                </Link>

                {/* Menu de navegacion en Mobile mediante botton */}
                <div className='mobile-menu md:hidden flex items-center gap-6'>
                    <div className='flex items-center gap-4'>
                        <ThemeButton />
                        <LanguageMenu />
                    </div>
                    {
                        // si el menu no esta abierto, que boton muestra
                        !NavbarOpen ?
                            (<button onClick={() => setNavbarOpen(true)}
                                className={`flex items-center px-3 py-2 border ${isDarkMode ? "border-light-text hover:text-light-textGray hover:border-light-textGray" : "border-dark-text hover:border-dark-textGray text-dark-text"}`}>
                                <Bars3Icon className='h-6 w-6'></Bars3Icon>
                            </button>)
                            :
                            (<button onClick={() => setNavbarOpen(false)}
                                className={`flex items-center px-3 py-2 border ${isDarkMode ? "border-light-text hover:text-light-textGray hover:border-light-textGray" : "border-dark-text hover:border-dark-textGray text-dark-text"}`}>
                                <XMarkIcon className='h-6 w-6'></XMarkIcon>
                            </button>)
                    }
                </div>
                {/* Menu de navegacion en desktop */}
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex md:flex-row md:space-x-2 mt-0 items-center justify-center'>
                        {
                            // Recorre el array NavLinks. 
                            NavLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                        <div className='pl-2 flex items-center gap-2'>
                            <ThemeButton />
                            <LanguageMenu />
                        </div>
                    </ul>
                </div>
            </div>
            {/* La propiedad que recibe MenuOverlay es un array  */}
            {NavbarOpen ? <MenuOverlay links={NavLinks} onClose={handleMenuClose} /> : null}
        </nav>
    )
}

export default Navbar