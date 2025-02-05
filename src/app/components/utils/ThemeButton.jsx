import { useTheme } from "@/app/hooks/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <>

            <button onClick={toggleTheme}>
                {isDarkMode ? <MoonIcon className="w-6 h-6 icon-style" /> : <SunIcon className="w-6 h-6" />}
            </button>
        </>
    )
}

export default ThemeButton