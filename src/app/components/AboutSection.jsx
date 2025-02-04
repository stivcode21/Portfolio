"use client"
import React, { useTransition, useState } from 'react'
import TabButton from './utils/TabButton'
import Image from 'next/image'
import { TabData } from '../data/tab'
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl'

//estado contrendra informacion sobre que pestaña estara abierta -  de forma predeterminada sera skills
const AboutSection = () => {
    const [tab, setTab] = useState("skills")
    const [isPending, startTransition] = useTransition();  //controla el cambio de transicion que usaremos detro de la funcion de manejo cambio de pestaña

    const t = useTranslations("About");

    const handleTabChange = (id) => { //toma el id y luego conmienza la transicion que actualiza la interfaz
        startTransition(() => {
            setTab(id);
        })
    };

    return (
        <section id='about' className='h-full md:h-screen w-full z-10 flex pb-7 bg-cover bg-center bg-no-repeat relative scroll-mt-16 md:scroll-mt-0' >
            <div className={`box md:grid md:grid-cols-2 gap-10 z-20 items-center xl:gap-4 sm:my-auto flex flex-col-reverse md:flex-row`}>
                <motion.div
                    initial={{ opacity: 0, translateY: "100px", scale: 0.5 }}
                    whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.1, }}
                    className="about-section">
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/data-shop-f5bf3.appspot.com/o/imgPortfolio%2FimgAbout.webp?alt=media&token=d260c597-0c7c-4cbb-90cd-e8e78ae476e6"
                        width={320}
                        height={320}
                        style={{ width: "auto", height: "auto" }}
                        alt='about me'
                        className='m-auto'
                    />
                </motion.div>

                <div className='text-left flex flex-col justify-center h-full'>
                    <motion.h2
                        initial={{ opacity: 0, translateY: "-50px", scale: 0.5 }}
                        whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1, }}
                        className='py-4 text-2xl md:text-3xl font-semibold text-center tracking-[5px] text-shadow-md uppercase'>
                        {t("title")}
                    </motion.h2>
                    <motion.div
                        initial={{ opacity: 0, translateY: "200px", scale: 0.5 }}
                        whileInView={{ opacity: 1, translateY: "0", scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.1 }}
                        className="about-section">
                        <p className='text-md text-balance lg:text-lg font-normal'>
                            {t("paragraph")}
                        </p>

                        <div className='flex flex-row justify-start mt-6'>
                            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                                {t("skills")}
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>
                                {t("education")}
                            </TabButton>
                            <TabButton selectTab={() => handleTabChange("certifications")} active={tab === "certifications"}>
                                {t("certifications")}
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