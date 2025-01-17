import { useTheme } from "@/app/hooks/ThemeContext";
import Link from "next/link"  //componente que permite enlazar diferentes rutas dentro de la misma aplicacion.

const NavLink = ({ href, title }) => {  // pasamos 2 parametros para href y el titulo
    const { isDarkMode } = useTheme();

    return (
        <Link href={href} className={`${isDarkMode ? "text-light-text hover:text-light-textGray" : "text-dark-textGray hover:text-dark-text"}
        block uppercase py-2 pl-3 pr-4 text-[#ADB7BE] text-lg font-logo rounded`}>
            {title}
        </Link >
    )
}

export default NavLink
