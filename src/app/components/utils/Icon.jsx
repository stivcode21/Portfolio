import { useTheme } from '@/app/hooks/ThemeContext';
import React from 'react';

const Icon = ({ name, path, color }) => {
    // Define un viewBox específico si el icono es C#
    const viewBox = name === "C#" ? "0 0 50 50" : "0 0 24 24";
    const { isDarkMode } = useTheme();

    const theme = isDarkMode ? "#000" : "#fff";

    return (
        <div
            className='shadow-sm w-fit'
            style={{ transition: "filter 0.3s ease-in-out" }}
            onMouseEnter={(e) => {
                e.currentTarget.querySelector('svg').style.fill = color;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.querySelector('svg').style.fill = theme;
            }}
        >
            <svg
                role="img"
                className="w-9 h-9 hover:scale-110"
                viewBox={viewBox}
                xmlns="http://www.w3.org/2000/svg"
                style={{ fill: theme }} >
                <title>{name}</title>
                <path d={path} />
            </svg>
        </div>
    );
};

export default Icon;
