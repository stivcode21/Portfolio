"use client"
import React, { useState } from 'react'
import ProjectCard from './utils/ProjectCard'
import ProjectTag from './utils/ProjectTag'
import { ProyectsData } from '../data/data'
import { motion } from 'framer-motion'

const ProjectsSection = () => {
    const [tag, setTag] = useState("Web");

    //funcion que selecciona una etiqueta
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    //funcion para filtrar los proyectos, con el metodo .includes donde mapeara los objetos en sus respectivos tag / "categoria - etiqueta"
    const filteredProjects = ProyectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <section id='projects' className='h-full px-8 pb-8 bg-[#0F0F0F] md:px-16 bg-center z-10 bg-cover bg-no-repeat relative scroll-mt-16'>
                <motion.h2
                    initial={{ opacity: 0, translateY: "100px", scale: 0.5 }}
                    whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1, }}
                    className='py-6 text-2xl md:text-3xl font-semibold text-center tracking-[5px] text-white'>
                    MY PROJECTS
                </motion.h2>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-6'>
                    {filteredProjects.map((project) => ( //el parametro recorre cada uno de los objetos del array
                        <ProjectCard
                            key={project.id}
                            title={project.title}
                            description={project.description}
                            imgUrl={project.image}
                            tags={project.tag}
                            gitUrl={project.gitUrl}
                            previewUrl={project.previewUrl}
                        />
                    ))}
                </div>
                <div
                    className='text-white flex flex-row justify-center items-center gap-2 py-4'>
                    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                    <ProjectTag onClick={handleTagChange} name="Desing" isSelected={tag === "Desing"} />
                    <ProjectTag onClick={handleTagChange} name="Games" isSelected={tag === "Games"} />
                </div>
            </section>
        </>
    )
}


export default ProjectsSection