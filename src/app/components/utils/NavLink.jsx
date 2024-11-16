import Link from "next/link"  //componente que permite enlazar diferentes rutas dentro de la misma aplicacion.

const NavLink = ({ href, title }) => {  // pasamos 2 parametros para href y el titulo
    return (
        <Link href={href} className='block uppercase py-2 pl-3 pr-4 text-[#ADB7BE] text-lg rounded hover:text-white'>
            {title}
        </Link >
    )
}

export default NavLink
