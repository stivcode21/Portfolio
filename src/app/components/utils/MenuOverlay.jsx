import React from 'react'
import NavLink from './NavLink'

const MenuOverlay = ({ links, onClose }) => {
    return (
        <ul className='animate-slideDownFadeIn flex flex-col py-4 items-center'>
            {links.map((link, index) => (
                // Recorre el array NavLinks que lo recibe como parametro cuando se llama el componente. 
                // "link" es el elemento actual del array (cada objeto con "title" y "path").
                // "index" es el índice de cada elemento en el array (su posición: 0, 1, 2...).
                <li key={index} onClick={onClose}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))}
        </ul>
    );
};

export default MenuOverlay