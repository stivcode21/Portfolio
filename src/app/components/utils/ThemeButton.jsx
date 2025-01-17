import { useTheme } from "@/app/hooks/ThemeContext";

const ThemeButton = () => {
    const { isDarkMode, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className={`${isDarkMode ? "bg-black justify-start border-black" : "bg-white justify-end border-white"}
        w-6 h-4 px-4 py-2 flex items-center rounded-xl border-2 transition-all ease-in-out`}>
            <div className={`${isDarkMode ? "bg-white" : "bg-black"} p-2 rounded-full transition-all ease-in-out`}>
            </div>
        </button>
    )
}

export default ThemeButton