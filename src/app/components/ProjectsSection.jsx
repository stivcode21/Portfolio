"use client"
import React, { useState } from 'react'
import ProjectCard from './utils/ProjectCard'
import ProjectTag from './utils/ProjectTag'
import { ProyectsData } from '../data/data'

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
            <section id='projects' className='px-8 pb-8 bg-[#0F0F0F] md:px-16 bg-center z-10 bg-cover bg-no-repeat relative'>

                <h2 className='pb-4 pt-8 text-2xl md:text-3xl font-medium text-center tracking-[12px] md:tracking-[20px] text-white text-shadow-md'>
                    MY PROYECTS
                </h2>
                <div className='text-white flex flex-row justify-start items-center gap-2 py-4'>
                    <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
                    <ProjectTag onClick={handleTagChange} name="Games" isSelected={tag === "Games"} />
                    <ProjectTag onClick={handleTagChange} name="Lab" isSelected={tag === "Lab"} />
                </div>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12'>
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
            </section>
        </>
    )
}


export default ProjectsSection