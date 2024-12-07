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
                    transition={{ duration: 1, ease: "easeOut" }}
                    className='py-6 text-2xl md:text-3xl font-medium text-center tracking-[12px] md:tracking-[20px] text-white text-shadow-md'>
                    MY PROYECTS
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
                <motion.div
                    initial={{ opacity: 0, translateX: -40 }}
                    whileInView={{ opacity: 1, translateX: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    viewport={{ once: true }}
                    className='text-white flex flex-row justify-start items-center gap-2 py-4'>
                    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                    <ProjectTag onClick={handleTagChange} name="Games" isSelected={tag === "Games"} />
                    <ProjectTag onClick={handleTagChange} name="Lab" isSelected={tag === "Lab"} />
                </motion.div>
            </section>
        </>
    )
}


export default ProjectsSection