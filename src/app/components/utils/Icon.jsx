import React from 'react';

const Icon = ({ name, path }) => {
    // Define un viewBox específico si el icono es C#
    const viewBox = name === "C#" ? "0 0 50 50" : "0 0 24 24";

    return (
        <svg role="img" className="w-9 h-9" fill="#ffffff" viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
            <title>{name}</title>
            <path d={path} />
        </svg>
    );
}

export default Icon;
