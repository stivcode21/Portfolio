import { useTheme } from "@/app/hooks/ThemeContext";
import { MoonIcon, SunIcon } from "@heroicons/react/24/solid";

const ThemeButton = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <>

            <button onClick={toggleTheme}>
                {isDarkMode ? <MoonIcon className="w-6 h-6 icon-style fill-light-text hover:fill-light-textGray" /> : <SunIcon className="w-6 h-6 icon-styl fill-white hover:fill-dark-textGray" />}
            </button>
        </>
    )
}

export default ThemeButton