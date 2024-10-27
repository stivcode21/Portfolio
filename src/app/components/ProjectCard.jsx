import React from 'react'
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
//recibe props
const ProjectCard = ({ imgUrl, title, description, gitUrl, previewUrl }) => {
    return (// la clase group se le da el contender padre para que sus hijos reaccionen a sus cambios de estado
        <div className='rounded-xl shadow-lg border-2'>
            <div className="h-52 w-full md:h-52 rounded-t-xl relative group"
                style={{ backgroundImage: `url(${imgUrl})`, backgroundSize: "cover", backgroundPosition: "center" }}>

                <div className='overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-transparent backdrop-blur-sm rounded-xl bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 duration-200 transition-all'>
                    <a href={gitUrl} target='_blank' className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link mr-2' >
                        <CodeBracketIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 transform translate-x-[7px] -translate-y-5' />
                    </a>
                    <Link href={previewUrl} className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link' >
                        <EyeIcon className='h-10 w-10 text-[#ADB7BE] cursor-pointer group-hover/link:text-white absolute top-1/2 transform translate-x-[7px] -translate-y-5' />
                    </Link>
                </div>

            </div>
            <div className="text-white rounded-b-xl bg-[url(/imagenes/bg-7.svg)] text-right bg-cover bg-center bg-no-repeat pt-4 pb-4 px-4">
                <h5 className='text-xl text-center pb-2 font-medium tracking-[3px]'>{title}</h5>
                <div className='text-[#ADB7BE]'>{description}</div>
            </div>
        </div>
    )
}

export default ProjectCard