import Link from "next/link"  //componente que permite enlazar diferentes rutas dentro de la misma aplicacion.

const NavLink = ({ href, title }) => {  // pasamos 2 parametros para href y el titulo
    return (
        <Link href={href} className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded hover:text-white'>
            {title}
        </Link >
    )
}

export default NavLink
