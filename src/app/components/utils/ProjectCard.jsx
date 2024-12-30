import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import Icon from './Icon'
import { motion } from 'framer-motion'

//recibe props
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (
        <motion.div
            initial={{ scale: 0.7, opacity: 0 }} // Comienza desde abajo con opacidad 0
            whileInView={{ scale: 1, opacity: 1 }} // Al entrar, opacidad 1 y posición original
            transition={{ duration: 0.5, ease: "easeInOut" }} // Animación suave
            viewport={{
                once: true, // Permite que la animación se repita
                amount: 0.1, // Activa cuando 10% es visible
            }}
            className='projects-section'>
            <div className='rounded-2xl shadow-lg shadow-[#0000005b] hover:shadow-[#6812ea59] border-4 border-[#191A1C] group hover:border-[#6812EA] hover:scale-[1.03] transition-all ease-in-out'>
                <div className="h-52 w-full md:h-52 rounded-t-xl relative group"
                    style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                    <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-transparent backdrop-blur-sm rounded-tl-xl rounded-tr-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 duration-200 transition-all'>
                        <Link href={gitUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link mr-2' >
                            <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 transform translate-x-[7px] -translate-y-5' />
                        </Link>
                        <Link href={previewUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link' >
                            <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 transform translate-x-[7px] -translate-y-5' />
                        </Link>
                    </div>
                </div>
                <div className="text-white rounded-b-xl relative bg-gradient-to-bl from-[#191A1C] text-right bg-cover bg-center bg-no-repeat py-2 px-4 z-40">
                    <h5 className='text-xl md:text-xl text-center pb-4 font-medium tracking-[2px] z-40'>{title}</h5>
                    <div className='text-[#ADB7BE] z-40 flex gap-2 pb-2'>
                        {
                            description.map((icon, i) => (
                                <Icon key={i} name={icon.name} path={icon.path} color={icon.color} />
                            ))
                        }
                    </div>
                    <div className="bg-gradient-to-br from-[#6812EA] w-full h-full rounded-b-xl absolute opacity-0 group-hover:opacity-100 transition-all duration-300 top-0 left-0 -z-10"></div>
                </div>
            </div>
        </motion.div>
    )
}

export default ProjectCard