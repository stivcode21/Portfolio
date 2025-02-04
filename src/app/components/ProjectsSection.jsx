"use client"
import React, { useState } from 'react'
import ProjectCard from './utils/ProjectCard'
import ProjectTag from './utils/ProjectTag'
import { ProyectsData } from '../data/projects'
import { motion } from 'framer-motion'
import { useTheme } from '../hooks/ThemeContext'
import { useTranslations } from 'next-intl'
import InfoModal from './utils/InfoModal'
import { InfoProjects } from '../data/InfoProjects'

const ProjectsSection = () => {
    const [tag, setTag] = useState("Featured");
    const [selectedProject, setSelectedProject] = useState(null);
    const { isDarkMode } = useTheme();

    const t = useTranslations("Projects")

    //funcion que selecciona una etiqueta
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    //cerrar modal
    const handleCloseModal = () => {
        setSelectedProject(null)
    }

    //funcion setear el estado selectedProject con el id de seleccion
    const handleProjectClick = (projectId) => {
        setSelectedProject(projectId)
    }

    //funcion para mostrar la info del proyecto correspondiente
    const projectInfo = InfoProjects.find((project) => project.id === selectedProject);

    //funcion para filtrar los proyectos, con el metodo .includes donde mapeara los objetos en sus respectivos tag / "categoria - etiqueta"
    const filteredProjects = ProyectsData.filter((project) =>
        project.tag.includes(tag)
    );

    return (
        <>
            <section id='projects' className='box h-full pb-8 bg-center z-10 relative scroll-mt-16'>
                {
                    projectInfo && (
                        <InfoModal info={projectInfo.description} imgPath={projectInfo.imgPath} onClose={handleCloseModal} />
                    )
                }
                <motion.h2
                    initial={{ opacity: 0, translateY: "100px", scale: 0.5 }}
                    whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1, }}
                    className='py-6 text-2xl md:text-3xl font-semibold text-center tracking-[5px] text-shadow-md uppercase'>
                    {t("title")}
                </motion.h2>
                <div className='grid xl:grid-cols-3 md:grid-cols-2 gap-6'>
                    {filteredProjects.map((project) => ( //el parametro recorre cada uno de los objetos del array
                        <>
                            <ProjectCard
                                key={project.id}
                                id={project.id}
                                title={project.title}
                                icons={project.icons}
                                imgUrl={project.image}
                                tags={project.tag}
                                gitUrl={project.gitUrl}
                                previewUrl={project.previewUrl}
                                onInfoClick={handleProjectClick}
                            />
                        </>
                    ))}
                </div>
                <div
                    className='text-white flex flex-row justify-center items-center gap-2 py-4'>
                    <ProjectTag onClick={handleTagChange} name="Featured" title={t("featured")} isSelected={tag === "Featured"} />
                    <ProjectTag onClick={handleTagChange} name="Starter" title={t("starter")} isSelected={tag === "Starter"} />
                    <ProjectTag onClick={handleTagChange} name="Desing" title={t("desing")} isSelected={tag === "Desing"} />
                </div>
            </section>
        </>
    )
}


export default ProjectsSection