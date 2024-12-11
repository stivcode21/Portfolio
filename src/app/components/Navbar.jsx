"use client";
import Link from 'next/link';
import NavLink from './utils/NavLink';
import MenuOverlay from './utils/MenuOverlay';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const NavLinks = [ //matriz de enlaces para el componente NavLink
    {
        title: "Main",
        path: "#main"
    },
    {
        title: "About",
        path: "#about"
    },
    {
        title: "Projects",
        path: "#projects"
    },
    {
        title: "Contact",
        path: "#contact"
    }
]

const Navbar = () => {
    const [NavbarOpen, setNavbarOpen] = useState(false);
    const [navState, setNavState] = useState(false);

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
            <div className='flex flex-wrap items-center justify-between px-8 md:px-16 py-2'>
                <Link href={"#main"}>
                    <Image src={"/imagenes/logo.png"} width={45} height={45} priority alt='logo stiv' />
                </Link>
                {/* Menu de navegacion en Mobile mediante botton */}
                <div className='mobile-menu md:hidden'>
                    {
                        // si el menu no esta abierto, que boton muestra
                        !NavbarOpen ?
                            (<button onClick={() => setNavbarOpen(true)}
                                className='flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <Bars3Icon className='h-5 w-5'></Bars3Icon>
                            </button>)
                            :
                            (<button onClick={() => setNavbarOpen(false)}
                                className='flex items-center px-3 py-2 border border-slate-200 text-slate-200 hover:text-white hover:border-white'>
                                <XMarkIcon className='h-5 w-5'></XMarkIcon>
                            </button>)
                    }
                </div>
                {/* Menu de navegacion en desktop */}
                <div className='menu hidden md:block md:w-auto' id='navbar'>
                    <ul className='flex md:flex-row md:space-x-2 mt-0'>
                        {
                            // Recorre el array NavLinks. 
                            // "link" es el elemento actual del array (cada objeto con "title" y "path").
                            // "index" es el índice de cada elemento en el array (su posición: 0, 1, 2...).
                            NavLinks.map((link, index) => (
                                <li key={index}>
                                    <NavLink href={link.path} title={link.title} />
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
            {/* La propiedad que recibe MenuOverlay es un array  */}
            {NavbarOpen ? <MenuOverlay links={NavLinks} onClose={handleMenuClose} /> : null}
        </nav>
    )
}

export default Navbar