import { useTheme } from '@/app/hooks/ThemeContext';
import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
    const { isDarkMode } = useTheme();

    // Clases dinámicas para el botón
    const buttonClasses = isSelected
        ? 'text-[#6812EA] w-full rounded-sm'
        : isDarkMode ? "text-light-text hover:text-dark-primary" : "text-[#ADB7BE] hover:text-[#fff]";

    // Clases dinámicas para el span (barra debajo del texto)
    const spanClasses = isSelected
        ? 'bg-[#6812EA] h-[3px] absolute bottom-0 left-0 w-full rounded-full'
        : 'bg-[#6812EA] h-[3px] absolute bottom-0 left-0 group-hover:animate-fill rounded-full';

    return (
        <div className="w-fit text-lg mt-4 font-medium">
            <button
                className={`${buttonClasses} cursor-pointer flex gap-x-4 relative group`}
                onClick={() => onClick(name)}>
                {name}
                <span className={spanClasses}></span>
            </button>
        </div>
    );
};

export default ProjectTag;
