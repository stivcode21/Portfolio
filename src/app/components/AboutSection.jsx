"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './utils/TabButton'
import Image from 'next/image'
import { TabData } from '../data/data'

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
        <section className='h-full w-full z-10 bg-[#0F0F0F] flex pb-7 bg-cover bg-center bg-no-repeat relative px-8 md:px-16' id='about' >

            <div className='md:grid md:grid-cols-2 gap-10 z-20 items-center xl:gap-4 sm:my-auto flex flex-col-reverse md:flex-row'>
                <Image
                    src="/imagenes/detective_logo.png"
                    width={400}
                    height={400}
                    alt='about me'
                    className='m-auto filter invert'
                />

                <div className='text-left flex flex-col h-full'>
                    <h2 className='text-2xl md:text-3xl text-center font-medium text-white mb-6 pt-5 text-shadow-lg tracking-[15px]'> ABOUT ME </h2>
                    <p className='text-base text-justify lg:text-md text-shadow-lg'>
                        I&apos;m a junior frontend developer passionate about creating responsive, user-friendly websites. Through self-study, I have developed strong skills in web technologies like HTML, CSS, JavaScript, React, and more. Currently, I am expanding my knowledge with game development in Unity, combining my web experience with a creative approach to problem-solving. I&apos;d love to connect with people who share this same passion.
                    </p>

                    <div className='flex flex-row justify-start mt-8'>
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
                    <div className='mt-8'>{TabData.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection