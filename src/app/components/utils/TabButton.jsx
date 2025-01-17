import { useTheme } from '@/app/hooks/ThemeContext';
import React from 'react';

const TabButton = ({ active, selectTab, children }) => {

    const { isDarkMode } = useTheme();

    // Clases dinámicas basadas en el estado activo
    const buttonClasses = active
        ? 'text-[#6812EA] w-full rounded-sm'
        : isDarkMode ? "text-light-text hover:text-dark-primary" : "text-[#ADB7BE] hover:text-[#fff]";

    const spanClasses = active
        ? 'bg-[#6812EA] h-0.5 absolute bottom-0 left-0 w-full rounded-full'
        : 'bg-[#6812EA] h-0.5 absolute bottom-0 left-0 group-hover:animate-fill rounded-full';

    return (
        <button onClick={selectTab} className="flex gap-x-2">
            <p className={`relative text-start mr-3 font-medium ${buttonClasses} group`}>
                {children}
                <span className={spanClasses}></span>
            </p>
        </button>
    );
};

export default TabButton;
