import React from 'react';

const Icon = ({ name, path, ifExist }) => {
    //un viewBox específico si el icono es C#
    const viewBox = name === "C#" ? "0 0 50 50" : "0 0 24 24";

    return (
        <div className='shadow-sm hover:drop-shadow-col w-fit hover:animate-tada'>
            <svg role="img" className={`${ifExist ? "w-8 h-8" : "w-9 h-9"}`} fill="#ffffff" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
                <title>{name}</title>
                <path d={path} />
            </svg>
        </div>
    );
}

export default Icon;
