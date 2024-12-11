"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './utils/TabButton'
import Image from 'next/image'
import { TabData } from '../data/data'
import { motion } from "framer-motion";

//estado contrendra informacion sobre que pestaña estara abierta -  de forma predeterminada sera skills
const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();  //controla el cambio de transicion que usaremos detro de la funcion de manejo cambio de pestaña

    const handleTabChange = (id) => { //toma el id y luego conmienza la transicion que actualiza la interfaz
        startTransition(() => {
            setTab(id);
        })
    };

    return (
        <section id='about' className='h-full w-full z-10 bg-[#0F0F0F] flex pb-7 bg-cover bg-center bg-no-repeat relative px-8 md:px-16 overflow-hidden' >
            <div className={`md:grid md:grid-cols-2 gap-10 z-20 items-center xl:gap-4 sm:my-auto flex flex-col-reverse md:flex-row`}>
                <motion.div
                    initial={{ opacity: 0, translateY: "-100px" }}
                    whileInView={{ opacity: 1, translateY: "0" }}
                    transition={{ duration: 2 }}
                    className="about-section">
                    <Image
                        src="/imagenes/imgAboutt.png"
                        width={350}
                        height={550}
                        alt='about me'
                        className='m-auto'
                    />
                </motion.div>

                <div className='text-left flex flex-col justify-center h-full'>
                    <motion.h2
                        initial={{ opacity: 0, translateY: "200px", scale: 0.5 }}
                        whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className='text-2xl md:text-3xl text-center font-medium text-white mb-4 pt-5 text-shadow-lg tracking-[15px]'> ABOUT ME </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, translateX: "200px", scale: 0.5 }}
                        whileInView={{ opacity: 1, translateX: "0", scale: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="about-section">
                        <p className='text-md text-justify lg:text-lg text-white'>
                            I&apos;m a junior frontend developer passionate about creating responsive, user-friendly websites. Through self-study, I have developed strong skills in web technologies like HTML,
                            CSS, JavaScript, React, and more. Currently, I am expanding my knowledge with game development in Unity, combining my web experience with a creative approach to problem-solving.
                            I&apos;d love to connect with people who share this same passion.
                        </p>

                        <div className='flex flex-row justify-start mt-6'>
                            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                                Skills
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                                Education
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                                Certifications
                            </TabButton>
                        </div>
                        {/*recorre cada elemento del array busca el primer elemento que cumple una condición, cada vez que sea true toma ejecuta la propiedad content*/}
                        <div className='mt-4'>{TabData.find((t) => t.id === tab).content}</div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection